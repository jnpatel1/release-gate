import { BackendError, type Backend } from './backend';
import type {
  Chaos,
  ConsoleSnapshot,
  JiraIssue,
  JiraStatus,
  LiveEvent,
  LogEntry,
  PlmState,
  ReleaseResult,
  ReviewRecord,
} from './types';

const PERSON = 'id name role org initials external isAi';
const CHECK = 'id type title blocking status summary itemIds roles deliveryIds';

const CONSOLE_QUERY = `query Console($part: String!) {
  workspace { name program policy currentUser { ${PERSON} } }
  parts { number name rev assembly model plmState gateOutcome blockingPassed blockingTotal itemsToClear openCount }
  part(number: $part) {
    number name rev assembly model material finish process cadFiles plmState
    review { title stage due }
    gate { outcome blockingTotal blockingPassed itemsToClear releasedAt decisionId snapshotHash checks { ${CHECK} } }
    feedback {
      id number title body priority category status source triage citation sheetRef
      pin { x y z nx ny nz }
      author { ${PERSON} } owner { ${PERSON} }
      jiraKey jiraStatus syncState
      waiverReason waivedBy { ${PERSON} } dismissReason dismissedBy { ${PERSON} }
      resolvedBy resolvedAt createdAt updatedAt
      thread { at authorLabel text kind author { ${PERSON} } }
    }
    reviewers { role status due completedAt nudgedAt person { ${PERSON} } }
    decisions { id at outcome promotionRequestId requestedBy snapshotHash hasRecord checks { ${CHECK} } }
    audit { id at actor action entityId detail }
    stats { total open closed avgResolveHours }
    deliveries { id topic label status attempts maxAttempts nextAttemptAt lastError orderingKey }
  }
  systems { jira windchill pending retrying dead chaos { jiraOutage jiraLostResponses duplicateWebhooks slowNetwork } }
}`;

const LOG_QUERY = `query Log($limit: Int!) {
  log(limit: $limit) { id at system direction level title detail ref partNumber statusCode latencyMs tag meta }
}`;

const TRANSITION_IDS: Record<JiraStatus, string> = { 'To Do': '11', 'In Progress': '21', Done: '31' };
const ODATA = '/mock/windchill/Windchill/servlet/odata';

async function gql<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  let res: Response;
  try {
    res = await fetch('/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    });
  } catch {
    throw new BackendError("Can't reach the Release Gate server. Is it still running?");
  }
  const body = await res.json();
  if (body.errors?.length) throw new BackendError(body.errors[0].message);
  return body.data as T;
}

async function rest<T>(path: string, init: RequestInit & { as?: string } = {}): Promise<T> {
  const headers: Record<string, string> = { Accept: 'application/json', ...(init.headers as Record<string, string>) };
  if (init.body) headers['Content-Type'] = 'application/json';
  if (init.as) headers['X-Mock-User'] = init.as;
  const res = await fetch(path, { ...init, headers });
  if (!res.ok) {
    let message = `${res.status} ${res.statusText}`;
    try {
      const body = await res.json();
      message = body.errorMessages?.[0] ?? body.error?.message ?? message;
    } catch {
      /* not JSON */
    }
    throw new BackendError(message);
  }
  return (res.status === 204 ? null : await res.json()) as T;
}

interface ODataPart {
  ID: string;
  Number: string;
  Name: string;
  Revision: string;
  Version: string;
  State: { Value: 'INWORK' | 'UNDERREVIEW' | 'RELEASED'; Display: string };
  Attachments: { FileName: string; MimeType: string; Size: number; CreatedOn: string }[];
  History: { At: string; From: string; To: string; By: string }[];
}

interface ODataPromotion {
  ID: string;
  PartNumber: string;
  Revision: string;
  Status: 'OPEN' | 'APPROVED' | 'REJECTED' | 'ON_HOLD';
  RequestedBy: string;
  CreatedOn: string;
  Reasons: string[];
  GateDecisionId: string | null;
}

const toPromotion = (p: ODataPromotion) => ({
  id: p.ID,
  partNumber: p.PartNumber,
  revision: p.Revision,
  status: p.Status,
  requestedBy: p.RequestedBy,
  createdOn: p.CreatedOn,
  reasons: p.Reasons ?? [],
  decisionId: p.GateDecisionId,
});

export class ServerBackend implements Backend {
  readonly mode = 'server' as const;
  private actingAs = 'p-jordan';

  async snapshot(partNumber: string): Promise<ConsoleSnapshot> {
    const data = await gql<ConsoleSnapshot>(CONSOLE_QUERY, { part: partNumber });
    this.actingAs = data.workspace.currentUser.id;
    return data;
  }

  async log(limit = 150): Promise<LogEntry[]> {
    return (await gql<{ log: LogEntry[] }>(LOG_QUERY, { limit })).log;
  }

  async jiraIssues(): Promise<JiraIssue[]> {
    const body = await rest<{ issues: any[] }>(
      `/mock/jira/rest/api/2/search?jql=${encodeURIComponent('project = ENG ORDER BY updated DESC')}`,
      { as: this.actingAs },
    );
    return body.issues.map((i) => ({
      key: i.key,
      summary: i.fields.summary,
      status: i.fields.status.name,
      resolution: i.fields.resolution?.name ?? null,
      priority: i.fields.priority?.name ?? 'Medium',
      assignee: i.fields.assignee?.displayName ?? null,
      assigneeId: i.fields.assignee?.accountId ?? null,
      colabId: i.fields.customfield_10042 ?? null,
      updated: i.fields.updated,
    }));
  }

  async plm(): Promise<PlmState> {
    const [parts, promotions] = await Promise.all([
      rest<{ value: ODataPart[] }>(`${ODATA}/ProdMgmt/Parts`, { as: this.actingAs }),
      rest<{ value: ODataPromotion[] }>(`${ODATA}/ChangeMgmt/PromotionRequests`, { as: this.actingAs }),
    ]);
    return {
      parts: parts.value.map((p) => ({
        id: p.ID,
        number: p.Number,
        name: p.Name,
        revision: p.Revision,
        version: p.Version,
        state: p.State.Value,
        stateDisplay: p.State.Display,
        attachments: p.Attachments.map((a) => ({
          fileName: a.FileName,
          mimeType: a.MimeType,
          size: a.Size,
          createdOn: a.CreatedOn,
        })),
        history: p.History.map((h) => ({ at: h.At, from: h.From, to: h.To, by: h.By })),
      })),
      promotions: promotions.value.map(toPromotion),
    };
  }

  async record(decisionId: string): Promise<ReviewRecord | null> {
    return (await gql<{ record: ReviewRecord | null }>('query($d: String!) { record(decisionId: $d) }', { d: decisionId }))
      .record;
  }

  subscribe(onEvent: (e: LiveEvent) => void, onStatus: (connected: boolean) => void): () => void {
    const source = new EventSource('/api/stream');
    source.onopen = () => onStatus(true);
    source.onerror = () => onStatus(false);
    source.onmessage = (msg) => {
      try {
        onEvent(JSON.parse(msg.data));
      } catch {
        /* ignore malformed frames */
      }
    };
    return () => source.close();
  }

  async resolveFeedback(id: string, note?: string) {
    await gql('mutation($id: String!, $note: String) { resolveFeedback(id: $id, note: $note) }', { id, note: note || null });
  }

  async reopenFeedback(id: string) {
    await gql('mutation($id: String!) { reopenFeedback(id: $id) }', { id });
  }

  async waiveFeedback(id: string, reason: string) {
    await gql('mutation($id: String!, $r: String!) { waiveFeedback(id: $id, reason: $r) }', { id, r: reason });
  }

  async triageFinding(id: string, decision: 'accept' | 'dismiss', note?: string) {
    await gql('mutation($id: String!, $d: String!, $n: String) { triageFinding(id: $id, decision: $d, note: $n) }', {
      id,
      d: decision,
      n: note || null,
    });
  }

  async nudgeReviewer(partNumber: string, role: string) {
    await gql('mutation($p: String!, $r: String!) { nudgeReviewer(partNumber: $p, role: $r) }', { p: partNumber, r: role });
  }

  async requestRelease(partNumber: string): Promise<ReleaseResult> {
    const data = await gql<{ requestRelease: ReleaseResult }>(
      'mutation($p: String!) { requestRelease(partNumber: $p) { promotionRequestId status reasons decisionId } }',
      { p: partNumber },
    );
    return data.requestRelease;
  }

  async retryDelivery(id: number) {
    await gql('mutation($id: Int!) { retryDelivery(id: $id) }', { id });
  }

  async setChaos(patch: Partial<Chaos>): Promise<Chaos> {
    const data = await gql<{ setChaos: Chaos }>(
      `mutation($o: Boolean, $l: Boolean, $d: Boolean, $s: Boolean) {
        setChaos(jiraOutage: $o, jiraLostResponses: $l, duplicateWebhooks: $d, slowNetwork: $s) {
          jiraOutage jiraLostResponses duplicateWebhooks slowNetwork
        }
      }`,
      {
        o: patch.jiraOutage ?? null,
        l: patch.jiraLostResponses ?? null,
        d: patch.duplicateWebhooks ?? null,
        s: patch.slowNetwork ?? null,
      },
    );
    return data.setChaos;
  }

  async reset() {
    await gql('mutation { resetDemo }');
  }

  async jiraTransition(key: string, to: JiraStatus, asUserId: string) {
    await rest(`/mock/jira/rest/api/2/issue/${key}/transitions`, {
      method: 'POST',
      as: asUserId,
      body: JSON.stringify({ transition: { id: TRANSITION_IDS[to] } }),
    });
  }

  async plmPromote(partNumber: string, as: { id: string; name: string }): Promise<ReleaseResult> {
    const pr = await rest<ODataPromotion>(`${ODATA}/ChangeMgmt/PromotionRequests`, {
      method: 'POST',
      as: as.id,
      body: JSON.stringify({ PartNumber: partNumber, TargetState: 'RELEASED', RequestedBy: as.name }),
    });
    const p = toPromotion(pr);
    return { promotionRequestId: p.id, status: p.status, reasons: p.reasons, decisionId: p.decisionId };
  }

  attachmentUrl(partNumber: string, fileName: string): string | null {
    return `${ODATA}/ProdMgmt/Parts('${partNumber}')/Attachments('${fileName}')/$value`;
  }
}

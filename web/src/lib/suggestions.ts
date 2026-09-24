// One-click text for the demo path, so nobody has to type during a live call.
// Only offered as a suggestion; the fields stay editable.
export const SUGGESTED: Record<string, { resolve?: string; waive?: string; dismiss?: string }> = {
  'F-101': { resolve: 'Gusset thickened to 4.0 mm in C.1; envelope re-checked against the motor.' },
  'F-102': { resolve: 'Pilot bore is now datum B; position callout updated on sheet 1.' },
  'F-103': { waive: 'Keeping the tight fit for the pilot build. Revisit at Rev D with run-out data.' },
  'F-104': { dismiss: 'Slots sit outside the clamp load path, so edge tear-out is not a risk here.' },
  'F-105': { resolve: 'Title block updated to Rev C.' },
  'F-106': { resolve: 'Inside corner opened up to R3 in C.1.' },
  'F-301': { resolve: 'Keyway root radius increased to R0.4.' },
  'F-302': { resolve: 'Bearing supplier confirmed k6 for this load case.' },
};

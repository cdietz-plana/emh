/* ================= Icons ================= */
const P = {
  dash:'<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
  upload:'<path d="M12 15V4"/><path d="m7 9 5-5 5 5"/><path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/>',
  chat:'<path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.2A8 8 0 1 1 20 12Z"/>',
  userplus:'<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0"/><path d="M19 8v6M16 11h6"/>',
  fax:'<rect x="6" y="3" width="12" height="6" rx="1"/><rect x="3" y="9" width="18" height="9" rx="2"/><rect x="7" y="14" width="10" height="7" rx="1"/>',
  folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',
  users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7"/><path d="M18 14a6.5 6.5 0 0 1 3.5 6"/>',
  alert:'<path d="M12 3 2 20h20Z"/><path d="M12 10v4M12 17h.01"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  shield:'<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6Z"/><path d="m9 12 2 2 4-4"/>',
  heart:'<path d="M12 20s-8-4.6-8-10.2A4.8 4.8 0 0 1 12 7a4.8 4.8 0 0 1 8 2.8C20 15.4 12 20 12 20Z"/>',
  card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/>',
  link:'<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  building:'<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1"/>',
  pin:'<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>',
  pill:'<rect x="3" y="8" width="18" height="8" rx="4" transform="rotate(-35 12 12)"/><path d="m9.5 8.5 5 7"/>',
  key:'<circle cx="8" cy="15" r="4"/><path d="m11 12 9-9M17 6l3 3"/>',
  chart:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  bell:'<path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4Z"/><path d="M10 21h4"/>',
  menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
  chevd:'<path d="m6 9 6 6 6-6"/>',
  chevr:'<path d="m9 6 6 6-6 6"/>',
  chevl:'<path d="m15 6-6 6 6 6"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>',
  check:'<path d="m5 12 5 5 9-10"/>',
  copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
  star:'<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9Z"/>',
  filter:'<path d="M3 5h18l-7 8v6l-4 2v-8Z"/>',
  sidebar:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/>',
  sidebarR:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/>',
  more:'<circle cx="5" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="19" cy="12" r="1.3"/>',
  refresh:'<path d="M20 11a8 8 0 0 0-14.9-3.5M4 5v3.5h3.5"/><path d="M4 13a8 8 0 0 0 14.9 3.5M20 19v-3.5h-3.5"/>',
  file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z"/><path d="M14 3v5h5"/>',
  download:'<path d="M12 4v11"/><path d="m7 10 5 5 5-5"/><path d="M4 20h16"/>',
  send:'<path d="M21 3 10 14"/><path d="m21 3-7 18-4-7-7-4Z"/>',
  edit:'<path d="M4 20h4L19 9l-4-4L4 16Z"/><path d="m13.5 6.5 4 4"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  cal:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
  flag:'<path d="M5 21V4M5 4h12l-2 4 2 4H5"/>',
  arrowr:'<path d="M5 12h14M13 6l6 6-6 6"/>'
};
const ic = (n, s = 18) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || ''}</svg>`;
const mark = (s = 26, c1 = '#6dab82', c2 = '#235333') => `<svg width="${s}" height="${s}" viewBox="0 0 32 32" aria-hidden="true"><defs><linearGradient id="hpg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs><circle cx="21.5" cy="7" r="3" fill="url(#hpg)"/><circle cx="21.5" cy="25" r="3" fill="url(#hpg)"/><circle cx="4.5" cy="16" r="2.6" fill="url(#hpg)"/><path d="M9 7.5c3.5 0 6 2.4 6.8 5.2h9.2a2.6 2.6 0 0 1 0 5.2h-9.2C15 20.9 12.5 23.3 9 23.3c1.8-2.2 2.7-4.7 2.7-7.4S10.8 9.7 9 7.5Z" fill="url(#hpg)"/></svg>`;
const LOGO_FULL = 'data:image/png;base64,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', LOGO_MARK = 'data:image/png;base64,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';
const logo = (dark) => dark ? `<span class="logo on-dark"><img class="logo-full" src="${LOGO_FULL}" alt="HealthPacer"><img class="logo-mark" src="${LOGO_MARK}" alt="HealthPacer"><span class="logo-tint" role="img" aria-label="HealthPacer" style="-webkit-mask-image:url(${LOGO_FULL});mask-image:url(${LOGO_FULL})"></span></span>` : `<span class="logo">${mark(26)}<span class="wm">HEALTH<b>PACER</b></span></span>`;

/* ================= Vocabulary ================= */
const TODAY = new Date(2026, 8, 24);
const CASE_STATUS = ['Intake', 'Requested', 'BI', 'Pending PA Submission', 'Pending PA Outcome', 'Pending Appeal Submission', 'Pending Appeal Outcome', 'Pending PAP', 'Active', 'Complete', 'Closed'];
const AR_STATUS = ['Active', 'HCP Transmission Pending', 'Sent to HCP', 'Payer Transmission Pending', 'Sent to Payer', 'Appeal in Progress', 'Complete', 'Cancelled'];
const COVERAGE = ['Pending', 'No Insurance', 'Drug Not Covered', 'Covered', 'Approved', 'Denied', 'Not Applicable'];
const PAP = ['Pending', 'Approved', 'Denied', 'Not Applicable'];
const CONSENT = ['Consented', 'Pending', 'Declined', 'Not Provided', 'Expired'];
const SHIP = ['Pending Shipment', 'Shipped', 'No Shipment'];
const QUICK = ['My cases', 'Pinned', 'Overdue follow-up', 'Missing follow-up', 'Pending shipment'];
const TONE = {
  'Intake': 't-info', 'Requested': 't-navy', 'BI': 't-violet', 'Pending PA Submission': 't-warn', 'Pending PA Outcome': 't-warn', 'Pending Appeal Submission': 't-warn', 'Pending Appeal Outcome': 't-warn', 'Pending PAP': 't-warn', 'Active': 't-ok', 'Complete': 't-navy', 'Closed': 't-neutral',
  'HCP Transmission Pending': 't-warn', 'Sent to HCP': 't-info', 'Payer Transmission Pending': 't-warn', 'Sent to Payer': 't-info', 'Appeal in Progress': 't-danger', 'Cancelled': 't-neutral',
  'Pending': 't-warn', 'No Insurance': 't-danger', 'Drug Not Covered': 't-danger', 'Covered': 't-ok', 'Approved': 't-ok', 'Denied': 't-danger', 'Not Applicable': 't-neutral',
  'Consented': 't-ok', 'Declined': 't-danger', 'Not Provided': 't-neutral', 'Expired': 't-danger',
  'Pending Shipment': 't-warn', 'Shipped': 't-ok', 'No Shipment': 't-neutral', 'None': 't-neutral'
};
const SW = { 't-info': '#1d5a8c', 't-navy': '#254059', 't-violet': '#76518e', 't-warn': '#d69a1c', 't-ok': '#3d714e', 't-neutral': '#8a9aa8', 't-danger': '#d9533a' };
const pill = (s, extra = '') => `<span class="pill ${TONE[s] || 't-neutral'} ${extra}">${esc(s)}</span>`;

/* ================= Mock data ================= */
function rng(seed) { let s = seed; return () => (s = (s * 16807) % 2147483647) / 2147483647; }
const R = rng(20260924);
const pick = (a) => a[Math.floor(R() * a.length)];
const FIRST = ['Rachel', 'Courtney', 'James', 'Maria', 'Tom', 'Stacy', 'Chen', 'Wendy', 'Alexis', 'Marcus', 'Priya', 'Daniel', 'Grace', 'Omar', 'Hannah', 'Luis', 'Nora', 'Isaac', 'Tamara', 'Evan', 'Beatriz', 'Kofi', 'Leah', 'Victor', 'June', 'Samuel', 'Ines', 'Walter', 'Yara', 'Dennis', 'Keisha', 'Aaron', 'Mei', 'Gordon', 'Fatima', 'Reid', 'Carmen', 'Theo', 'Opal', 'Vince', 'Delia', 'Hugo', 'Anita', 'Brent', 'Lena', 'Tariq', 'Rosa', 'Felix'];
const LAST = ['Johnson', 'Anderson', 'Buffet', 'Lopez', 'Brandon', 'Blake', 'Lee', 'Addam', 'Blidel', 'Whitfield', 'Raman', 'Okafor', 'Delgado', 'Haddad', 'Moreau', 'Castillo', 'Pruitt', 'Levin', 'Greer', 'Sato', 'Almeida', 'Mensah', 'Farrow', 'Ibarra', 'Quinn', 'Ostrowski', 'Navarro', 'Tate', 'Bishara', 'Kowalski', 'Monroe', 'Pham', 'Ellery', 'Vance', 'Rahimi', 'Dunmore', 'Serrano', 'Albright', 'Kincaid', 'Mercer', 'Soto', 'Lindqvist', 'Ferris', 'Nakamura', 'Holt', 'Barros', 'Wynn', 'Achebe'];
const PRESCRIBERS = [
  ['Dr. Kasa Mahale', 'Hollywood Doctors'], ['Dr. Linda Abbott', 'Riverside Endocrine Associates'], ['Dr. Kelly Doc', 'City Medical Group'],
  ['Dr. Arjun Patel', 'Northgate Medical Group'], ['Dr. Susan Ortiz', 'Cumberland Specialty Clinic'], ['Dr. Michael Grant', 'Harbor Point Family Practice'],
  ['Dr. Helen Park', 'Lakeshore Endocrinology'], ['Dr. Brian Cole', 'Community Health of Nashville']
];
const PAYERS = ['Summit Health Plan', 'Keystone Mutual', 'Blue Meridian', 'Medicare Part D', 'State Medicaid', 'Crestline PBM', 'No insurance'];
const PHARM = ['Optime', 'CarePath Specialty', 'Meridian Rx'];
const TEAM = ['Janet Mills', 'Sarah Mitchell', 'Marketta Howie', 'Devon Ruiz'];
const ME = 'Janet Mills';

function addDays(d, n) { const x = new Date(d); x.setDate(x.getDate() + n); return x; }
function fmt(d) { if (!d) return ''; return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`; }
function dayDiff(d) { return Math.round((d - TODAY) / 86400000); }
function esc(s) { return String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

function mkCase(i) {
  const fn = FIRST[i % FIRST.length], ln = LAST[(i * 7) % LAST.length];
  const [pr, fac] = PRESCRIBERS[i % PRESCRIBERS.length];
  const cs = i === 0 ? 'Pending Appeal Submission' : pick(CASE_STATUS);
  const payer = i === 0 ? 'Summit Health Plan' : pick(PAYERS);
  let cov = payer === 'No insurance' ? 'No Insurance' : pick(['Pending', 'Covered', 'Approved', 'Denied', 'Pending', 'Drug Not Covered', 'Not Applicable']);
  if (i === 0) cov = 'Denied';
  let ar = ['BI', 'Intake', 'Requested'].includes(cs) ? 'None' : pick(['Active', 'Sent to HCP', 'Sent to Payer', 'Appeal in Progress', 'Complete', 'HCP Transmission Pending', 'Payer Transmission Pending', 'Cancelled']);
  if (cs.includes('Appeal')) ar = 'Appeal in Progress';
  if (i === 0) ar = 'Appeal in Progress';
  const fuOff = [-14, -9, -6, -3, -1, 0, 0, 1, 2, 4, 7, 10, 15, 21, null][Math.floor(R() * 15)];
  const start = addDays(TODAY, -Math.floor(20 + R() * 300));
  const dob = new Date(1948 + Math.floor(R() * 55), Math.floor(R() * 12), 1 + Math.floor(R() * 27));
  return {
    id: 'E' + (100304 + i * 7), pid: 'P0' + (10284 + i * 5), first: fn, last: ln, mi: 'ABCDEFGHJKLMNPRSTW'[i % 18],
    dob, gender: i % 3 === 1 ? 'Male' : 'Female', prescriber: pr, facility: fac, payer, pharmacy: i === 0 ? 'Optime' : pick(PHARM),
    qty: pick([30, 30, 60, 90, 46]), ship: pick(SHIP), follow: fuOff === null ? null : addDays(TODAY, fuOff),
    caseStatus: cs, coverage: cov, ar, pap: i === 0 ? 'Approved' : pick(PAP), consent: i === 0 ? 'Consented' : pick(['Consented', 'Consented', 'Consented', 'Pending', 'Declined', 'Expired', 'Not Provided']),
    owner: i === 0 ? ME : pick([...TEAM, 'Unassigned', 'Unassigned']), pinned: i % 9 === 0, start, updated: addDays(TODAY, -Math.floor(R() * 12)),
    phone: `(${pick(['615', '629', '310', '212', '404'])}) ${200 + Math.floor(R() * 700)}-${1000 + Math.floor(R() * 8999)}`,
    street: `${100 + Math.floor(R() * 8800)} ${pick(['Main Street', 'Independence Lane', 'Oak Hollow Drive', 'Riverbend Road', 'Cedar Park Way', 'Westmoreland Avenue'])}`,
    city: pick(['Nashville, TN 37210', 'Franklin, TN 37064', 'Los Angeles, CA 90028', 'Brooklyn, NY 11215', 'Atlanta, GA 30307']),
    lang: pick(['English', 'English', 'English', 'Spanish', 'Vietnamese']), best: pick(['Mornings', 'Weekdays after 5pm', 'Afternoons', 'Any time']),
    alt: `${pick(FIRST)} ${ln}`, dx: pick(['Cushing syndrome (E24.9)', 'Cushing syndrome (E24.0)', 'Ectopic ACTH syndrome (E24.3)'])
  };
}
const CASES = Array.from({ length: 48 }, (_, i) => mkCase(i));
Object.assign(CASES[0], { first: 'Rachel', last: 'Johnson', mi: 'N', dob: new Date(1981, 3, 14), gender: 'Female', street: '1420 Westmoreland Avenue', city: 'Nashville, TN 37210', phone: '(629) 202-1234', lang: 'English', best: 'Weekdays after 5pm', alt: 'Anne Johnson', follow: addDays(TODAY, -15), ship: 'Pending Shipment', qty: 46, pinned: true });
const byId = (id) => CASES.find(c => c.id === id);
const fullName = (c) => `${c.last}, ${c.first}`;
const email = (c) => `${c.first}.${c.last}`.toLowerCase() + '@examplemail.com';

/* Authorization request model. stage = index of current step; outcome per round */
const PA_STEPS = ['Select medication', 'Download PA form', 'Upload completed form', 'Send to HCP for signature', 'Fax to carrier / PBM', 'Payer decision'];
const AP_STEPS = ['Download appeal form', 'Upload appeal packet', 'Fax to carrier / PBM', 'Payer decision'];
const AR = {};
const AUDIT = [
  ['9/22/2026 10:14 AM', 'Janet Mills', 'Authorization', 'Appeal 2 packet uploaded', 'Appeal2_packet_with_labs.pdf'],
  ['9/15/2026 3:02 PM', 'Janet Mills', 'Authorization', 'Appeal 2 form downloaded', 'Summit appeal form v3'],
  ['9/10/2026 9:40 AM', 'Janet Mills', 'Authorization', 'Appeal 2 started', 'Appeal 1 denied: additional labs required'],
  ['9/8/2026 4:18 PM', 'System', 'Coverage', 'Coverage outcome changed', 'Pending to Denied'],
  ['9/2/2026 11:25 AM', 'Sarah Mitchell', 'Notes', 'Phone log added', 'Spoke with HCP office about labs'],
  ['8/25/2026 2:11 PM', 'Janet Mills', 'Faxes', 'Fax sent to Summit Health Plan', '14 pages, confirmation 88213'],
  ['8/19/2026 8:57 AM', 'System', 'Authorization', 'PA denied by payer', 'Step therapy not documented'],
  ['8/7/2026 1:30 PM', 'Marketta Howie', 'Documents', 'Document shared with provider', 'PA_Summit_EMX300.pdf'],
  ['8/4/2026 10:02 AM', 'Marketta Howie', 'Case', 'Case status changed', 'BI to Pending PA Submission'],
  ['7/29/2026 9:15 AM', 'Marketta Howie', 'Case', 'Case created', 'Manual intake']
];
const DOCS = [
  ['Appeal2_packet_with_labs.pdf', 'Appeal', '9/22/2026', 'Janet Mills', '2.4 MB', true, false],
  ['Appeal1_letter_of_medical_necessity.pdf', 'Appeal', '8/22/2026', 'Janet Mills', '640 KB', true, true],
  ['Denial_letter_Summit_0819.pdf', 'Payer correspondence', '8/19/2026', 'System (fax)', '210 KB', true, false],
  ['PA_Summit_EMX300_signed.pdf', 'Prior authorization', '8/7/2026', 'Marketta Howie', '1.1 MB', true, true],
  ['Insurance_card_front_back.jpg', 'Insurance', '7/30/2026', 'Marketta Howie', '820 KB', false, false],
  ['Enrollment_form_signed.pdf', 'Enrollment', '7/29/2026', 'Marketta Howie', '318 KB', false, true],
  ['Rx_EMX300_07282026.pdf', 'Prescription', '7/29/2026', 'System (fax)', '96 KB', false, true],
  ['HIPAA_consent_signed.pdf', 'Consent', '7/29/2026', 'Marketta Howie', '154 KB', false, false]
];
const MESSAGES = [
  ['Dr. Kasa Mahale', 'HCP', '9/21/2026 4:40 PM', 'Updated labs (cortisol, ACTH) attached through the secure upload. Let us know if Summit needs anything else for the second appeal.', ['From provider']],
  ['Janet Mills', 'Hub', '9/16/2026 10:05 AM', 'Summit denied appeal 1 for missing labs. Could your office send the last two cortisol results so we can file appeal 2 this week?', ['Shared with provider']],
  ['Optime', 'Pharmacy', '9/9/2026 2:12 PM', 'Holding shipment until coverage is resolved. Patient is aware and has 9 days of interim supply.', ['Shared with pharmacy']],
  ['Janet Mills', 'Hub', '8/20/2026 9:31 AM', 'PA denied for step therapy. Starting appeal with letter of medical necessity.', ['Internal']]
];
const NOTES = [
  ['Sarah Mitchell', 'Phone log', '9/2/2026 11:25 AM', 'Called Hollywood Doctors (Tina, MA). Labs drawn 8/30, results expected by 9/5. Will upload through portal.', true],
  ['Janet Mills', 'Note', '8/20/2026 9:40 AM', 'Payer rep confirmed appeal can be faxed to 1 (800) 555-0142. Expedited review not available for this plan.', false],
  ['Marketta Howie', 'Phone log', '7/30/2026 1:05 PM', 'Patient verified address and prefers texts after 5pm. Consent to text: No.', false]
];
const FAXES = [
  ['8/25/2026 2:11 PM', 'Outbound', 'Summit Health Plan appeals', '1 (800) 555-0142', 14, 'Delivered'],
  ['8/19/2026 8:57 AM', 'Inbound', 'Summit Health Plan', '1 (800) 555-0199', 3, 'Received'],
  ['8/11/2026 3:44 PM', 'Outbound', 'Summit Health Plan PA', '1 (800) 555-0140', 9, 'Delivered'],
  ['8/6/2026 10:20 AM', 'Outbound', 'Hollywood Doctors', '(310) 709-4555', 4, 'Delivered'],
  ['7/28/2026 5:02 PM', 'Inbound', 'Hollywood Doctors', '(310) 709-4555', 2, 'Received']
];
/* ================= State ================= */
const FKEYS = { caseStatus: ['Case status', CASE_STATUS], ar: ['Authorization', AR_STATUS], coverage: ['Coverage outcome', COVERAGE], pap: ['PAP status', PAP], prescriber: ['Prescriber', PRESCRIBERS.map(p => p[0])], facility: ['Facility', PRESCRIBERS.map(p => p[1])], payer: ['Payer', PAYERS], pharmacy: ['Pharmacy', PHARM], quick: ['Quick select', QUICK] };
const S = {
  dir: 'H', route: 'dashboard', caseId: CASES[0].id, tab: 'auth', q: '', f: Object.fromEntries(Object.keys(FKEYS).map(k => [k, new Set()])),
  openMs: null, msq: '', menu: null, mega: null, navMini: false, navOpen: false, dockL: true, dockR: true, sel: CASES[0].id, side: true,
  strip: true, cols: { prescriber: window.innerWidth >= 1600, pap: false, rx: false, owner: true }, toast: null, modal: null, notesPanel: false, wl: 'today', qtab: 'All', expanded: {}, sort: { k: 'follow', d: 1 }
};
try { const d = localStorage.getItem('hp-dir4'); if (d && 'HDA'.includes(d)) S.dir = d;  } catch (e) { }
if (S.dir === 'H') { S.dockL = false; S.dockR = false; }

/* ================= Filtering ================= */
function matches(c, skip) {
  const f = S.f;
  const has = (k, v) => k === skip || !f[k].size || f[k].has(v);
  if (!has('caseStatus', c.caseStatus) || !has('ar', c.ar) || !has('coverage', c.coverage) || !has('pap', c.pap) || !has('prescriber', c.prescriber) || !has('facility', c.facility) || !has('payer', c.payer) || !has('pharmacy', c.pharmacy)) return false;
  if (skip !== 'quick') for (const q of f.quick) {
    if (q === 'My cases' && c.owner !== ME) return false;
    if (q === 'Pinned' && !c.pinned) return false;
    if (q === 'Overdue follow-up' && !(c.follow && dayDiff(c.follow) < 0)) return false;
    if (q === 'Missing follow-up' && c.follow) return false;
    if (q === 'Pending shipment' && c.ship !== 'Pending Shipment') return false;
  }
  if (S.q) { const t = S.q.toLowerCase(); if (![c.id, c.pid, c.first, c.last, fullName(c), fmt(c.dob), c.prescriber, c.facility, c.phone].some(x => String(x).toLowerCase().includes(t))) return false; }
  return true;
}
function valOf(c, k) { return { caseStatus: c.caseStatus, ar: c.ar, coverage: c.coverage, pap: c.pap, prescriber: c.prescriber, facility: c.facility, payer: c.payer, pharmacy: c.pharmacy }[k]; }
function filtered() {
  const l = CASES.filter(c => matches(c));
  const { k, d } = S.sort;
  const key = { follow: c => c.follow ? +c.follow : 9e15, id: c => c.id, patient: c => fullName(c), prescriber: c => c.prescriber, status: c => CASE_STATUS.indexOf(c.caseStatus) }[k] || (c => c.id);
  return l.sort((a, b) => (key(a) > key(b) ? 1 : key(a) < key(b) ? -1 : 0) * d);
}
const activeCount = () => Object.values(S.f).reduce((n, s) => n + s.size, 0);
const due = { today: () => CASES.filter(c => c.follow && dayDiff(c.follow) === 0), overdue: () => CASES.filter(c => c.follow && dayDiff(c.follow) < 0), missing: () => CASES.filter(c => !c.follow && !['Closed', 'Complete'].includes(c.caseStatus)) };

/* ================= Small builders ================= */
const copyBtn = (text, label) => `<button class="copy" data-a="copy" data-v="${esc(text)}" aria-label="Copy ${esc(label)}" title="Copy">${ic('copy', 14)}</button>`;
const fld = (label, value, copy = true) => `<div class="fld"><span class="lbl">${esc(label)}</span><span class="val ${['Not applicable', 'None', 'Not provided'].includes(value) ? 'muted' : ''}">${value === '' || value == null ? '<span class="muted">Not provided</span>' : esc(value).replace('@', '@<wbr>')}</span><span class="cp">${copy && value ? copyBtn(value, label) : ''}</span></div>`;
const followCell = (c) => { if (!c.follow) return '<span class="muted">Not set</span>'; const d = dayDiff(c.follow); return d < 0 ? `<span class="overdue num">${fmt(c.follow)}</span><span class="sub overdue">${-d} day${d === -1 ? '' : 's'} overdue</span>` : d === 0 ? `<span class="num strong">Today</span>` : `<span class="num">${fmt(c.follow)}</span>`; };
function ms(key, align) {
  const [label, opts] = FKEYS[key]; const set = S.f[key]; const open = S.openMs === key;
  let pop = '';
  if (open) {
    const q = S.msq.toLowerCase();
    const counts = {}; CASES.forEach(c => { if (matches(c, key)) { if (key === 'quick') QUICK.forEach(o => { counts[o] = (counts[o] || 0); }); else { const v = valOf(c, key); counts[v] = (counts[v] || 0) + 1; } } });
    pop = `<div class="ms-pop" style="${align === 'r' ? 'left:auto;right:0' : ''}">${opts.length > 8 ? `<input class="ms-search" id="msq" placeholder="Search ${esc(label.toLowerCase())}" value="${esc(S.msq)}" data-in="msq">` : ''}
      ${opts.filter(o => !q || o.toLowerCase().includes(q)).map(o => `<label class="opt"><input type="checkbox" data-a="opt" data-k="${key}" data-v="${esc(o)}" ${set.has(o) ? 'checked' : ''}><span>${esc(o)}</span>${key !== 'quick' ? `<span class="c num">${counts[o] || 0}</span>` : ''}</label>`).join('')}
      <div class="ms-foot"><button class="link-btn" data-a="msclear" data-k="${key}">Clear</button><button class="btn sm primary" data-a="msclose">Done</button></div></div>`;
  }
  return `<div class="ms"><button class="${set.size ? 'has' : ''}" data-a="ms" data-k="${key}" aria-expanded="${open}">${esc(label)}${set.size ? ` <span class="n">${set.size}</span>` : ''}${ic('chevd', 14)}</button>${pop}</div>`;
}
function chipsRow() {
  const chips = []; for (const [k, s] of Object.entries(S.f)) for (const v of s) chips.push(`<span class="chip"><span class="muted" style="color:inherit;opacity:.7">${esc(FKEYS[k][0])}:</span> ${esc(v)}<button data-a="unchip" data-k="${k}" data-v="${esc(v)}" aria-label="Remove ${esc(v)}">${ic('x', 12)}</button></span>`);
  if (!chips.length) return '';
  return `<div class="chips">${chips.join('')}<button class="link-btn" data-a="clearall">Clear all</button></div>`;
}

/* ================= Dashboard ================= */
function worklistItems(list, n = 6) {
  if (!list.length) return `<div class="emptyline">Nothing here. You are caught up.</div>`;
  const fu = c => c.follow ? (dayDiff(c.follow) < 0 ? `<span class="overdue">${-dayDiff(c.follow)} ${dayDiff(c.follow) === -1 ? 'day' : 'days'} overdue</span>` : dayDiff(c.follow) === 0 ? 'Due today' : fmt(c.follow)) : '<span class="muted">No date</span>';
  return `<div class="wi wi-h" aria-hidden="true"><span>Patient</span><span>Case status</span><span>Assigned to</span><span class="r">Follow-up</span></div>` + list.slice(0, n).map(c => `<div class="wi" data-a="case" data-id="${c.id}" tabindex="0" role="link">
    <span class="who"><span class="nm">${esc(fullName(c))}</span><span class="meta num">${c.id} · DOB ${fmt(c.dob)}</span></span>
    <span>${pill(c.caseStatus)}</span>
    <span class="own">${c.owner === 'Unassigned' ? '<span class="overdue">Unassigned</span>' : esc(c.owner)}</span>
    <span class="r num">${fu(c)}</span></div>`).join('');
}
function statCard(title, key, opts, total, first) {
  const rows = opts.map(o => { const n = CASES.filter(c => valOf(c, key) === o).length; return `<button class="statrow ${n ? '' : 'zero'}" data-a="drill" data-k="${key}" data-v="${esc(o)}"><span class="sw" style="background:${SW[TONE[o]] || '#8a9aa8'}"></span>${esc(o)}<span class="v">${n}</span><span class="go">${ic('chevr', 14)}</span></button>`; }).join('');
  return `<section class="card"><div class="card-h"><h2>${title}</h2><span class="muted num" style="font-size:12.5px">${total} total</span></div><div class="statlist">${rows}</div>${first ? `<div class="card-f"><a href="#" data-a="drill" data-k="${key}" data-v="*">View all authorization requests</a></div>` : ''}</section>`;
}
function viewDashboard() {
  const t = due.today(), o = due.overdue(), m = due.missing();
  const appeals = CASES.filter(c => c.ar === 'Appeal in Progress').length;
  const wl = { today: ['Due today', t], overdue: ['Overdue', o], missing: ['Missing follow-up date', m] };
  const [wlLabel, wlList] = wl[S.wl];
  const consentCounts = CONSENT.map(k => [k, CASES.filter(c => c.consent === k).length]);
  return `<div class="page">
  <div class="pagehead"><div><h1>Dashboard</h1><div class="muted" style="font-size:13px">Thursday, September 24, 2026 · ${CASES.filter(c => c.owner === ME).length} cases assigned to you</div></div>
   <button class="btn" data-a="go" data-r="cases">${ic('folder', 16)} All cases</button><button class="btn primary" data-a="newcase">${ic('plus', 16)} New case</button></div>
  <div class="kpis">
    <button class="kpi" data-a="wl" data-v="today"><span class="k">Follow-ups due today</span><span class="v">${t.length}</span><span class="d">${t.filter(c => c.owner === ME).length} are yours</span></button>
    <button class="kpi hot" data-a="wl" data-v="overdue"><span class="k">Overdue follow-ups</span><span class="v">${o.length}</span><span class="d">Oldest ${Math.max(...o.map(c => -dayDiff(c.follow)))} days</span></button>
    <button class="kpi" data-a="wl" data-v="missing"><span class="k">Missing follow-up date</span><span class="v">${m.length}</span><span class="d">Open cases with no date</span></button>
    <button class="kpi" data-a="drill" data-k="ar" data-v="Appeal in Progress"><span class="k">Appeals in progress</span><span class="v">${appeals}</span><span class="d">Up to 3 per request</span></button>
    <button class="kpi" data-a="go" data-r="uploads"><span class="k">Unattached uploads</span><span class="v">2</span><span class="d">Waiting to be filed</span></button>
  </div>
  <div class="grid g-main">
    <section class="card worklist"><div class="card-h"><h2>My work</h2>
      <div class="seg" style="background:var(--zebra)">${Object.entries(wl).map(([k, [l, L]]) => `<button data-a="wl" data-v="${k}" aria-pressed="${S.wl === k}" style="color:${S.wl === k ? 'var(--ink)' : 'var(--ink-2)'}">${l.replace(' date', '')} <span class="num">${L.length}</span></button>`).join('')}</div></div>
      ${worklistItems(wlList, 7)}
      <div class="card-f"><a href="#" data-a="drillwl" data-v="${S.wl}">View all ${wlList.length} ${wlLabel.toLowerCase()} cases</a></div></section>
    ${statCard('Authorization requests', 'ar', AR_STATUS, CASES.filter(c => c.ar !== 'None').length, true)}
  </div>
  <div class="grid g-2">
    ${statCard('Case status', 'caseStatus', CASE_STATUS, CASES.length)}
    <section class="card"><div class="card-h"><h2>Patient consent</h2><span class="muted num" style="font-size:12.5px">${CASES.length} total</span></div>
      <div class="statlist">${consentCounts.map(([k, n]) => `<div class="statrow ${n ? '' : 'zero'}"><span class="sw" style="background:${SW[TONE[k]]}"></span>${k}<span class="v">${n}</span><span class="go"></span></div>`).join('')}</div>
      <div class="card-f muted">Expiring consents board is coming in a later phase.</div></section>
  </div></div>`;
}

/* ================= Cases list ================= */
const OPTCOLS = [['prescriber', 'Prescriber'], ['pap', 'PAP status'], ['rx', 'Prescription'], ['owner', 'Assigned to']];
function colsMenu() {
  return `<div class="ms"><button data-a="menu" data-v="cols" aria-expanded="${S.menu === 'cols'}">${ic('grid', 14)} Columns ${ic('chevd', 14)}</button>${S.menu === 'cols' ? `<div class="ms-pop" style="left:auto;right:0;width:220px">${OPTCOLS.map(([k, l]) => `<label class="opt"><input type="checkbox" data-a="col" data-k="${k}" ${S.cols[k] ? 'checked' : ''}><span>${l}</span></label>`).join('')}</div>` : ''}</div>`;
}
function casesTable(list, opts = {}) {
  const C = { ...S.cols }; if (opts.narrow) { C.prescriber = false; C.rx = false; C.pap = false; }
  const arrow = (k) => S.sort.k === k ? ic('chevd', 12).replace('<svg', `<svg style="transform:rotate(${S.sort.d > 0 ? 0 : 180}deg)"`) : '';
  const th = (k, l, w) => `<th style="width:${w}"><button data-a="sort" data-k="${k}">${l}${arrow(k)}</button></th>`;
  const rows = pageSlice('cases', list).map(c => `<tr class="click ${opts.sel === c.id ? 'sel' : ''}" data-a="${opts.rowAct || 'case'}" data-id="${c.id}">
    <td class="pincell selcell"><input type="checkbox" data-a="csel" data-id="${c.id}" ${S.csel.has(c.id) ? 'checked' : ''} aria-label="Select ${esc(fullName(c))}"></td>
    <td class="pincell"><button class="star ${c.pinned ? 'on' : ''}" data-a="pin" data-id="${c.id}" aria-label="${c.pinned ? 'Unpin' : 'Pin'} case">${ic('star', 16).replace('fill="none"', c.pinned ? 'fill="currentColor"' : 'fill="none"')}</button></td>
    <td><a href="#" data-a="case" data-id="${c.id}" class="strong pname">${esc(fullName(c))}</a><span class="sub num">${c.id} · DOB ${fmt(c.dob)}</span></td>
    ${C.prescriber ? `<td>${esc(c.prescriber)}<span class="sub">${esc(c.facility)}</span></td>` : ''}
    <td>${followCell(c)}</td>
    <td>${pill(c.caseStatus)}</td>
    <td>${pill(c.coverage)}</td>
    <td>${c.ar === 'None' ? '<span class="muted">None</span>' : pill(c.ar)}</td>
    ${C.pap ? `<td>${pill(c.pap)}</td>` : ''}${C.rx ? `<td><span class="num">Qty ${c.qty}</span><span class="sub">${esc(c.ship)}</span></td>` : ''}
    ${C.owner ? `<td>${c.owner === 'Unassigned' ? '<span class="overdue">Unassigned</span>' : esc(c.owner)}</td>` : ''}</tr>`).join('');
  return `<div class="tablewrap"><table class="dt"><thead><tr><th class="pincell selcell"><input type="checkbox" data-a="cselall" aria-label="Select all on this page" ${pageSlice('cases', list).length && pageSlice('cases', list).every(c => S.csel.has(c.id)) ? 'checked' : ''}></th><th class="pincell" aria-label="Pinned"></th>${th('patient', 'Patient', 'auto')}${C.prescriber ? th('prescriber', 'Prescriber', 'auto') : ''}${th('follow', 'Follow-up', '128px')}${th('status', 'Case status', '220px')}<th style="width:150px">Coverage</th><th style="width:200px">Authorization</th>${C.pap ? '<th style="width:120px">PAP</th>' : ''}${C.rx ? '<th style="width:140px">Prescription</th>' : ''}${C.owner ? '<th style="width:140px">Assigned to</th>' : ''}</tr></thead>
    <tbody>${rows || `<tr><td colspan="11" style="height:120px;text-align:center" class="muted">No cases match these filters. <button class="link-btn" data-a="clearall">Clear all filters</button></td></tr>`}</tbody></table></div>
    ${pagerX('cases', list.length, 'cases')}`;
}
const searchBox = (id = 'q', ph = 'Search case ID, patient, DOB, phone, prescriber') => `<label class="search" style="flex:1 1 280px;max-width:440px">${ic('search', 16)}<span class="sr">Search cases</span><input id="${id}" data-in="q" value="${esc(S.q)}" placeholder="${ph}" style="width:100%"></label>`;
function viewCasesA() {
  const list = filtered();
  return `<div class="page"><div class="pagehead"><h1>Cases</h1><span class="muted num">${list.length} of ${CASES.length}</span><button class="btn" data-a="exportcases">${ic('download', 16)} Export</button><button class="btn primary" data-a="newcase">${ic('plus', 16)} New case</button></div>
  <section class="card">
    <div class="card-b" style="display:flex;flex-direction:column;gap:10px">
      <div class="filterbar">${searchBox()}${['quick', 'caseStatus', 'ar', 'coverage', 'pap'].map(k => ms(k)).join('')}${['prescriber', 'facility', 'payer', 'pharmacy'].map(k => ms(k, 'r')).join('')}<span style="flex:1"></span>${colsMenu()}</div>
      ${chipsRow()}
    </div>
    ${casesTable(list)}
  </section></div>`;
}
function filterDock() {
  const n = activeCount();
  return `<aside class="dock ${S.dockL ? '' : 'closed'}" aria-label="Filters"><div class="dock-head">${ic('filter', 16)}<h3>Filters ${n ? `<span class="pill nodot t-ok num" style="height:20px">${n}</span>` : ''}</h3>${n ? '<button class="link-btn x" data-a="clearall">Clear</button>' : ''}<button class="iconbtn" data-a="dockL" aria-label="${S.dockL ? 'Collapse' : 'Expand'} filters">${ic(S.dockL ? 'chevl' : 'chevr', 16)}</button><span class="vlabel">Filters${n ? ` (${n})` : ''}</span></div>
  <div class="dock-body">${searchBox('q2', 'Search cases').replace('max-width:440px', 'max-width:none;flex:none')}
  ${Object.keys(FKEYS).map(k => { const [l, opts] = FKEYS[k]; const set = S.f[k]; const open = S.expanded['f-' + k] ?? ['quick', 'caseStatus', 'ar'].includes(k); const shown = open ? opts : opts.filter(o => set.has(o));
    return `<div class="fgroup"><button data-a="fgx" data-k="${k}" aria-expanded="${open}">${ic(open ? 'chevd' : 'chevr', 14)}${l}${set.size ? `<span class="n">${set.size}</span>` : ''}</button>${shown.map(o => `<label class="opt"><input type="checkbox" data-a="opt" data-k="${k}" data-v="${esc(o)}" ${set.has(o) ? 'checked' : ''}><span>${esc(o)}</span><span class="c num">${k === 'quick' ? '' : CASES.filter(c => matches(c, k) && valOf(c, k) === o).length}</span></label>`).join('')}</div>`; }).join('')}
  </div></aside>`;
}
function quickView(c) {
  if (!c) return '';
  const r = getAR(c); const cur = r.rounds[r.rounds.length - 1];
  return `<aside class="dock right ${S.dockR ? '' : 'closed'}" aria-label="Case preview"><div class="dock-head">${ic('file', 16)}<h3>Preview</h3><button class="btn sm primary x" data-a="case" data-id="${c.id}">Open case</button><button class="iconbtn" data-a="dockR" aria-label="Toggle preview">${ic(S.dockR ? 'chevr' : 'chevl', 16)}</button><span class="vlabel">Preview</span></div>
  <div class="dock-body">
    <div style="display:flex;gap:10px;align-items:center"><span class="avatar" style="background:var(--green-50);color:var(--green-700);width:40px;height:40px">${c.first[0]}${c.last[0]}</span><div><div style="font:600 15px var(--f-head)">${esc(fullName(c))}</div><div class="mono muted">${c.id} · ${c.pid}</div></div></div>
    <div class="fields" style="grid-template-columns:1fr 1fr">${fld('DOB', fmt(c.dob))}${fld('Phone', c.phone)}</div>
    <div class="section-t">Status</div>
    <div style="display:grid;grid-template-columns:104px 1fr;gap:10px 12px;align-items:center;font-size:13px"><span class="lbl">Case</span><span>${pill(c.caseStatus)}</span><span class="lbl">Coverage</span><span>${pill(c.coverage)}</span><span class="lbl">Authorization</span><span>${c.ar === 'None' ? '<span class="muted">None</span>' : pill(c.ar)}</span><span class="lbl">PAP</span><span>${pill(c.pap)}</span><span class="lbl">Follow-up</span><span>${followCell(c)}</span></div>
    <div class="section-t">Next step</div>
    <div class="note-banner" style="background:var(--green-50);color:var(--green-700)">${ic('arrowr', 16)}<span>${nextStep(c)}</span></div>
    <div class="section-t">Care team</div>
    <div class="fields">${fld('Prescriber', c.prescriber, false)}${fld('Facility', c.facility, false)}${fld('Assigned to', c.owner, false)}</div>
  </div></aside>`;
}
function viewCasesB() {
  const list = filtered(); const sel = byId(S.sel) || list[0];
  return `<div class="workspace">${filterDock()}<div class="center"><div class="page"><div class="pagehead"><h1>Cases</h1><span class="muted num">${list.length} of ${CASES.length}</span>${colsMenu()}<button class="btn" data-a="exportcases">${ic('download', 16)} Export</button><button class="btn primary" data-a="newcase">${ic('plus', 16)} New case</button></div>
   ${chipsRow()}
   <section class="card">${casesTable(list, { narrow: S.dockR && S.dockL, rowAct: 'sel', sel: sel && sel.id })}</section>
   <p class="muted" style="font-size:12.5px;margin:0">Select a row to preview it. Open the case with the case ID or the Open case button.</p></div></div>${quickView(sel)}</div>`;
}

/* ================= Case detail ================= */
const TABS = [['info', 'Case information'], ['rx', 'Prescription'], ['benefits', 'Benefits'], ['auth', 'Authorizations'], ['notes', 'Notes', NOTES.length], ['messages', 'Messages', MESSAGES.length], ['docs', 'Documents', DOCS.length], ['faxes', 'Faxes', FAXES.length], ['pap', 'PAP'], ['audit', 'Audit trail', AUDIT.length]];
function caseHeader(c) {
  const r = getAR(c); const cur = r.rounds[r.rounds.length - 1];
  const arSummary = arLabel(c);
  return `<section class="card cq"><div class="casehead">
    <div class="who"><span class="ini">${c.first[0]}${c.last[0]}</span><div><div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap"><span class="nm">${esc(c.last.toUpperCase())}, ${esc(c.first)}${c.mi ? ' ' + c.mi + '.' : ''}</span>${pill(c.consent === 'Consented' ? 'Consented' : c.consent)}</div>
      <div class="ids"><span>Case <span class="mono" style="color:var(--ink)">${c.id}</span>${copyBtn(c.id, 'case ID')}</span><span>Patient <span class="mono" style="color:var(--ink)">${c.pid}</span>${copyBtn(c.pid, 'patient ID')}</span><span class="num">DOB ${fmt(c.dob)}</span></div></div></div>
    <div class="acts"><button class="btn" data-a="pin" data-id="${c.id}">${ic('star', 16).replace('fill="none"', c.pinned ? 'fill="#d99400" stroke="#d99400"' : 'fill="none"')} ${c.pinned ? 'Pinned' : 'Pin'}</button><button class="btn danger" data-a="modal" data-v="ae">${ic('alert', 16)} Record AE</button>
      <div style="position:relative"><button class="btn" data-a="menu" data-v="more" aria-label="More case actions">${ic('more', 16)}</button>${S.menu === 'more' ? `<div class="menu-pop" style="right:0;top:42px"><button data-a="modal" data-v="reassign" data-id="${c.id}">${ic('users', 16)} Reassign case</button><button data-a="refreshcase">${ic('refresh', 16)} Refresh case</button><hr><button data-a="modal" data-v="closecase2" style="color:var(--danger)">${ic('x', 16)} Close case</button></div>` : ''}</div></div>
  </div>
  <div class="statusstrip">
    <div class="sf" style="position:relative"><span class="lbl">Case status</span><button class="selpill ${TONE[c.caseStatus]}" data-a="menu" data-v="status">${esc(c.caseStatus)} ${ic('chevd', 14)}</button>${S.menu === 'status' ? `<div class="menu-pop" style="top:60px;left:12px;max-height:320px;overflow:auto">${CASE_STATUS.map(s => `<button data-a="setstatus" data-v="${esc(s)}"><span class="sw" style="background:${SW[TONE[s]]}"></span>${esc(s)}${s === c.caseStatus ? ` <span style="margin-left:auto">${ic('check', 14)}</span>` : ''}</button>`).join('')}</div>` : ''}</div>
    <div class="sf" style="position:relative"><span class="lbl">Coverage outcome</span><button class="selpill ${TONE[c.coverage]}" data-a="menu" data-v="cov">${esc(c.coverage)} ${ic('chevd', 14)}</button>${S.menu === 'cov' ? `<div class="menu-pop" style="top:60px;left:12px">${COVERAGE.map(s => `<button data-a="setcov" data-v="${esc(s)}"><span class="sw" style="background:${SW[TONE[s]]}"></span>${esc(s)}</button>`).join('')}</div>` : ''}</div>
    <div class="sf"><span class="lbl">Authorization</span><button class="link-btn" data-a="tab" data-v="auth" style="font-size:13.5px;text-align:left">${arSummary} ${ic('chevr', 13)}</button></div>
    <div class="sf"><label class="lbl" for="fu">Next follow-up</label><input id="fu" type="date" data-in="fu" value="${c.follow ? c.follow.toISOString().slice(0, 10) : ''}" style="height:30px;border:1px solid ${c.follow && dayDiff(c.follow) < 0 ? '#e7b3a7' : 'var(--line)'};border-radius:6px;padding:0 8px;color:${c.follow && dayDiff(c.follow) < 0 ? 'var(--danger)' : 'inherit'}"></div>
    <div class="sf"><span class="lbl">Assigned to</span><button class="assignbtn" data-a="modal" data-v="reassign" data-id="${c.id}" title="Reassign case"><span class="avatar" style="width:22px;height:22px;font-size:10px">${c.owner.split(' ').map(x => x[0]).join('')}</span>${esc(c.owner)} ${ic('edit', 13)}</button></div>
  </div></section>`;
}
const age = (d) => Math.floor((TODAY - d) / 31557600000);
const ROLE_PEOPLE = { pac: [...TEAM, 'Unassigned'], frm: ['Brandon Fields', 'Keisha Monroe', 'Tom Alvarez'], pa: ['Alicia Moreno', 'Grace Holt', 'Ravi Singh'], cs: ['Dr. Ruth Calloway', 'Dr. Owen Pratt', 'Maya Chen, PharmD'] };
function pd(c) {
  if (!c.p) c.p = { phone2: '(629) 202-5678', altRel: 'Daughter', altPhone: '(629) 202-5555', frm: 'Brandon Fields', pa: 'Alicia Moreno', cs: 'Dr. Ruth Calloway' };
  return { name: `${c.first}${c.mi ? ' ' + c.mi + '.' : ''} ${c.last}`, dob: fmt(c.dob), phone: c.phone, phone2: c.p.phone2, email: c.p.email || email(c), best: c.best, addr: `${c.street}|${c.city}`, altName: c.alt, altPhone: c.p.altPhone, pac: c.owner, frm: c.p.frm, pa: c.p.pa, cs: c.p.cs };
}
const editBtn = (k, label) => `<button class="editbtn" data-a="pedit" data-k="${k}" aria-label="Edit ${esc(label)}" title="Edit">${ic('edit', 14)}</button>`;
function editRow(icon, k, label, value) {
  const opts = ROLE_PEOPLE[k];
  const input = opts ? `<select id="ped" data-k="${k}">${opts.map(o => `<option ${o === value ? 'selected' : ''}>${esc(o)}</option>`).join('')}</select>` : `<input id="ped" data-k="${k}" value="${esc(value.replace('|', ', '))}" autocomplete="off">`;
  return `<div class="fld ifld editing">${icon}<span class="stackv">${input}<span class="lbl">${esc(label)}</span></span><span class="cp edacts"><button class="editbtn ok" data-a="psave" data-k="${k}" aria-label="Save">${ic('check', 15)}</button><button class="editbtn" data-a="pcancel" aria-label="Cancel">${ic('x', 15)}</button></span></div>`;
}
const ifld = (icon, label, value, copy = true, k = null) => {
  const ico = `<span class="ico">${ic(icon, 16)}</span>`;
  if (k && S.edit === k) return editRow(ico, k, label, value);
  return `<div class="fld ifld">${ico}<span class="stackv"><span class="val">${esc(value).replace('@', '@<wbr>').replace('|', '<br>')}</span><span class="lbl">${esc(label)}</span></span><span class="cp">${copy ? copyBtn(value.replace('|', ', '), label) : ''}${k ? editBtn(k, label) : ''}</span></div>`;
};
const kgroup = (title, icon, rows, extra = '') => `<section class="kgroup" data-sec="${title}"><h5>${ic(icon, 14)}${title}${extra}</h5><div class="fields">${rows.join('')}</div></section>`;
function patientFields(c) {
  const v = pd(c);
  const nameRow = S.edit === 'name' ? editRow('', 'name', 'Full name', v.name).replace('fld ifld editing', 'fld idname editing') : `<div class="fld idname"><span class="sr lbl">Full name</span><span class="val">${esc(v.name)}</span><span class="cp">${copyBtn(v.name, 'name')}${editBtn('name', 'name')}</span></div>`;
  return `<section class="kgroup idcard" data-sec="Identity"><div class="fields">${nameRow}</div>
    <div class="idmeta"><span>${c.gender}</span><span>${age(c.dob)} years</span><span>${c.lang}</span></div>
    <div class="fields">${ifld('cal', 'Date of birth', v.dob, true, 'dob')}</div></section>`
    + kgroup('Contact', 'phone', [ifld('phone', 'Mobile · preferred', v.phone, true, 'phone'), ifld('phone', 'Home', v.phone2, true, 'phone2'), ifld('mail', 'Email', v.email, true, 'email'), ifld('clock', 'Best time to reach', v.best, false, 'best')])
    + kgroup('Address', 'pin', [ifld('pin', 'Home address', v.addr, true, 'addr')])
    + kgroup('Alternate contact', 'users', [ifld('users', c.p.altRel, v.altName, false, 'altName'), ifld('phone', 'Alternate contact phone', v.altPhone, true, 'altPhone')]);
}
function teamList(c) {
  const v = pd(c);
  const p = (k, r) => { const n = v[k]; const av = `<span class="avatar sm">${n === 'Unassigned' ? '?' : n.replace('Dr. ', '').split(' ').map(x => x[0]).join('').slice(0, 2)}</span>`;
    if (S.edit === k) return editRow(av, k, r, n).replace('fld ifld editing', 'fld pfld editing');
    return `<div class="fld pfld">${av}<span class="stackv"><span class="val">${esc(n)}</span><span class="lbl">${r}</span></span><span class="cp">${editBtn(k, r)}</span></div>`; };
  return `<div class="fields">${p('pac', 'Patient access coordinator')}${p('frm', 'Field reimbursement manager')}${p('pa', 'Patient advocate')}${p('cs', 'Clinical specialist')}</div>`;
}
function patientPanel(c, asDock) {
  const team = kgroup('Case team', 'users', [teamList(c)]);
  if (asDock) return `<aside class="dock ${S.dockL ? '' : 'closed'}" aria-label="Patient"><div class="dock-head">${ic('users', 16)}<h3>Patient</h3><button class="iconbtn" data-a="dockL" aria-label="Toggle patient panel">${ic(S.dockL ? 'chevl' : 'chevr', 16)}</button><span class="vlabel">Patient</span></div>
    <div class="dock-body kvp patientpane">${patientFields(c)}${team}</div></aside>`;
  return `<div class="sidecol ${S.sideAnim ? 'slide-in' : ''}"><section class="card"><div class="card-h"><h3>Patient</h3></div><div class="card-b kvp patientpane">${patientFields(c)}${team}</div></section></div>`;
}
function tabsBar() { const fc = findCounts(); return `<div class="tabs ${fc ? 'finding' : ''}" role="tablist">${TABS.map(([k, l, n]) => ({ notes: NOTES, messages: MESSAGES, docs: DOCS, faxes: FAXES, audit: AUDIT }[k] || { length: n }).length).map((n, i) => [TABS[i][0], TABS[i][1], n]).map(([k, l, n]) => `<button role="tab" aria-selected="${S.tab === k}" data-a="tab" data-v="${k}" class="${fc && !fc[k] ? 'nohit' : ''}">${l}${fc ? (fc[k] ? ` <span class="n hitn num">${fc[k]}</span>` : '') : n ? ` <span class="n num">${n}</span>` : ''}</button>`).join('')}</div>`; }
function tabPanel(c) {
  const f = { info: tabInfo, rx: tabRx, benefits: tabBenefits, auth: tabAuth, notes: tabNotes, messages: tabMessages, docs: tabDocs, faxes: tabFaxes, pap: tabPap, audit: tabAudit }[S.tab];
  return `<div>${tabsBar()}<div class="tabpanel" role="tabpanel">${f(c)}</div></div>`;
}
const tph = (title, right = '') => `<div class="tp-h"><h2>${title}</h2>${right}</div>`;
function tabInfo(c) {
  return `${tph('Case information')}<div class="blocks">
  <div class="block" data-sec="Intake"><div class="section-t">${ic('file', 15)}Intake<span class="sp"></span></div><div class="fields">${fld('Entered by', 'Marketta Howie', false)}${fld('Started on', fmt(c.start))}${fld('Referral source', 'Fax from prescriber', false)}</div></div>
  <div class="block" data-sec="Medical"><div class="section-t">${ic('heart', 15)}Medical<span class="sp"></span><button class="btn sm ghost" data-a="toast" data-v="Medical details open in an edit panel">${ic('edit', 14)} Edit</button></div><div class="fields">${fld('Primary diagnosis', c.dx)}${fld('Secondary diagnosis', 'Hypertension (I10)')}${fld('Other therapy', 'Ketoconazole (stopped 6/2026)', false)}${fld('Surgery ineligibility', 'Not applicable', false)}</div></div>
  <div class="block" data-sec="Consent"><div class="section-t">${ic('shield', 15)}Consent<span class="sp"></span><button class="btn sm ghost" data-a="toast" data-v="Consent opens in an edit panel">${ic('edit', 14)} Edit</button></div><div class="fields"><div class="fld"><span class="lbl">Status</span><span class="val">${pill(c.consent)}</span></div>${fld('Consent start', '7/29/2026')}${fld('Consent end', '7/29/2027')}<div class="fld"><span class="lbl">Texting / voicemail</span><span class="val">${pill('Declined', 'nodot').replace('Declined', 'No texts')} ${pill('Covered', 'nodot').replace('Covered', 'Voicemail OK')}</span></div></div></div>
  <div class="block" data-sec="Prescriber"><div class="section-t">${ic('users', 15)}Prescriber<span class="sp"></span><button class="btn sm ghost" data-a="toast" data-v="Prescriber opens in an edit panel">${ic('edit', 14)} Edit</button></div><div class="fields">${fld('Prescriber', c.prescriber)}${fld('NPI', '9876543210')}${fld('Phone', '(310) 709-4563')}${fld('Fax', '(310) 709-4555')}</div></div>
  <div class="block full" data-sec="Facility"><div class="section-t">${ic('building', 15)}Facility</div><div class="fields">${fld('Facility', c.facility)}${fld('Primary contact', 'Tina Alvarez, MA')}${fld('Address', '200 Central Park West, New York, NY 10024')}${fld('Phone', '(310) 709-4563')}${fld('Fax', '(310) 709-4555')}${fld('Tax ID', '12-3456789')}</div></div>
  </div>`;
}
function tabRx(c) {
  return `${tph('Prescription', `<button class="btn" data-a="modal" data-v="triage">${ic('flag', 16)} Triage prescription</button><button class="btn primary" data-a="modal" data-v="manage">${ic('edit', 16)} Manage prescription</button>`)}
  <div class="blocks"><div class="block full" data-sec="Active prescription"><div class="section-t">${ic('pill', 15)}Active prescription <span class="pill t-ok" style="letter-spacing:0;text-transform:none">Active</span></div>
  <div class="fields">${fld('Medication', 'EMX-300 300 mg tablet')}${fld('Written', '7/28/2026')}${fld('Prescriber', c.prescriber, false)}${fld('Initial quantity', `${c.qty} · 14 day supply`, false)}${fld('Refill quantity', '60 · 30 day supply', false)}${fld('Refills', '5', false)}${fld('Substitution', 'Dispense as written', false)}${fld('Pharmacy', c.pharmacy, false)}<div class="fld"><span class="lbl">Shipment</span><span class="val">${pill(c.ship)}</span></div></div>
  <div class="fld"><span class="lbl">Directions</span><span class="val" style="max-width:80ch">Take 1 tablet (300 mg) by mouth daily for 14 days, then increase to 2 tablets (600 mg) daily.</span></div></div></div>
  <div class="tablewrap"><table class="dt"><thead><tr><th>Received</th><th>Medication</th><th>Qty</th><th>Written by</th><th>Triage</th><th>Document</th></tr></thead><tbody>
  <tr><td class="num">7/29/2026</td><td>EMX-300 300 mg tablet</td><td class="num">46</td><td>${esc(c.prescriber)}</td><td>${pill('Approved')}</td><td><a href="#" data-a="toast" data-v="Document preview opens here">Rx_EMX300_07282026.pdf</a></td></tr>
  <tr><td class="num">6/2/2026</td><td>EMX-300 150 mg tablet</td><td class="num">30</td><td>${esc(c.prescriber)}</td><td>${pill('Closed')}</td><td><a href="#" data-a="toast" data-v="Document preview opens here">Rx_EMX150_06012026.pdf</a></td></tr></tbody></table></div>`;
}
function tabBenefits(c) {
  return `${tph('Benefits', `<span class="muted" style="font-size:12.5px">Verified 9/8/2026 by Janet Mills</span><button class="btn" data-a="toast" data-v="Benefit investigation opens as a guided form">${ic('refresh', 16)} Re-verify</button><button class="btn" data-a="toast" data-v="Add plan opens in a modal">${ic('plus', 16)} Add plan</button>`)}
  <div class="tablewrap"><table class="dt"><thead><tr><th>Order</th><th>Plan</th><th>Type</th><th>Member ID</th><th>Group</th><th>BIN / PCN</th><th>Effective</th><th>Coverage</th></tr></thead><tbody>
  <tr><td>Primary</td><td class="strong">${esc(c.payer === 'No insurance' ? 'Summit Health Plan' : c.payer)}</td><td>Commercial PPO</td><td class="mono">SHP88213407</td><td class="mono">GRP-5521</td><td class="mono">610014 / SUMRX</td><td class="num">1/1/2026 to 12/31/2026</td><td>${pill(c.coverage)}</td></tr>
  <tr><td>Pharmacy</td><td class="strong">Crestline PBM</td><td>PBM</td><td class="mono">CRX-44018</td><td class="mono">RX7730</td><td class="mono">004336 / ADV</td><td class="num">1/1/2026 to 12/31/2026</td><td>${pill('Pending')}</td></tr></tbody></table></div>
  <div class="blocks"><div class="block" data-sec="Benefit investigation"><div class="section-t">${ic('card', 15)}Benefit investigation</div><div class="fields">${fld('Deductible', '$1,500 · $1,120 met', false)}${fld('Out of pocket max', '$6,000 · $2,340 met', false)}${fld('Specialty copay', '20% after deductible', false)}${fld('PA required', 'Yes', false)}${fld('Step therapy', 'Yes, 1 prior agent', false)}${fld('Quantity limit', '60 per 30 days', false)}</div></div>
  <div class="block" data-sec="Coverage notes"><div class="section-t">${ic('chat', 15)}Coverage notes</div><div class="feed" style="margin:0 -16px">${[['9/8/2026', 'Janet Mills', 'Plan requires documented trial of one prior agent. Ketoconazole trial on file from 2026.'], ['8/1/2026', 'Marketta Howie', 'Reference #SHP-0801-2291. Rep: Carla. PA fax 1 (800) 555-0140.']].map(([d, w, t]) => `<div class="msg" style="grid-template-columns:1fr"><div class="hd"><b>${w}</b><span class="muted num">${d}</span></div><p style="grid-column:1">${t}</p></div>`).join('')}</div></div></div>`;
}
function tabDocs() {
  return `${tph('Documents', `<label class="search" style="height:34px">${ic('search', 15)}<input placeholder="Search documents" style="width:160px"></label><button class="btn primary" data-a="toast" data-v="Add document opens in a modal">${ic('plus', 16)} Add document</button>`)}
  <div class="tablewrap"><table class="dt"><thead><tr><th>Name</th><th>Type</th><th>Added</th><th>Added by</th><th>Size</th><th>Provider</th><th>Pharmacy</th><th aria-label="Actions"></th></tr></thead><tbody>
  ${DOCS.map(([n, t, d, b, s, pv, ph], i) => `<tr><td>${ic('file', 15)} <a href="#" data-a="toast" data-v="Document preview opens here">${esc(n)}</a></td><td>${t}</td><td class="num">${d}</td><td>${b}</td><td class="num">${s}</td>
  <td><button class="pill ${pv ? 't-ok' : 't-neutral'}" style="border:0" data-a="toast" data-v="${pv ? 'No longer shared with provider' : 'Shared with provider'}">${pv ? 'Shared' : 'Not shared'}</button></td><td><button class="pill ${ph ? 't-ok' : 't-neutral'}" style="border:0" data-a="toast" data-v="${ph ? 'No longer shared with pharmacy' : 'Shared with pharmacy'}">${ph ? 'Shared' : 'Not shared'}</button></td><td style="text-align:right"><button class="iconbtn" aria-label="Download">${ic('download', 16)}</button><button class="iconbtn" aria-label="More">${ic('more', 16)}</button></td></tr>`).join('')}</tbody></table></div>`;
}
function tabMessages() {
  return `${tph('Messages', `<span class="muted" style="font-size:12.5px">Messages go to the provider portal or pharmacy</span>`)}
  <div class="feed">${MESSAGES.map(([w, role, d, t, tags]) => `<div class="msg"><span class="avatar" style="${role === 'Hub' ? '' : 'background:var(--navy)'}">${w.replace('Dr. ', '').split(' ').map(x => x[0]).join('').slice(0, 2)}</span><div class="hd"><b>${esc(w)}</b><span class="pill nodot ${role === 'Hub' ? 't-ok' : role === 'HCP' ? 't-info' : 't-violet'}">${role}</span><span class="muted num">${d}</span></div><button class="iconbtn" aria-label="Message actions">${ic('more', 16)}</button><p>${esc(t)}</p><div class="tags">${tags.map(x => `<span class="muted" style="font-size:12px">${x}</span>`).join('')}</div></div>`).join('')}</div>
  <div class="composer"><label class="sr" for="newmsg">New message</label><textarea id="newmsg" placeholder="Write a message"></textarea><select class="btn" aria-label="Send to"><option>To provider</option><option>To pharmacy</option><option>Internal</option></select><button class="btn primary" data-a="toast" data-v="Message sent to provider">${ic('send', 16)} Send</button></div>`;
}
function tabNotes() {
  return `${tph('Notes and phone log', `<button class="btn" data-a="toast" data-v="Phone log form opens here">${ic('phone', 16)} Log call</button><button class="btn primary" data-a="toast" data-v="Note form opens here">${ic('plus', 16)} Add note</button>`)}
  <div class="feed">${NOTES.map(([w, type, d, t, hl]) => `<div class="msg" ${hl ? 'style="box-shadow:inset 3px 0 0 var(--warn-fill)"' : ''}><span class="avatar">${w.split(' ').map(x => x[0]).join('')}</span><div class="hd"><b>${esc(w)}</b><span class="pill nodot ${type === 'Note' ? 't-navy' : 't-info'}">${type}</span><span class="muted num">${d}</span>${hl ? '<span class="pill nodot t-warn">Highlighted</span>' : ''}</div><button class="iconbtn" aria-label="Note actions">${ic('more', 16)}</button><p>${esc(t)}</p></div>`).join('')}</div>`;
}
function tabFaxes() {
  return `${tph('Faxes', `<button class="btn primary" data-a="toast" data-v="Send fax opens in a modal">${ic('fax', 16)} Send fax</button>`)}
  <div class="tablewrap"><table class="dt"><thead><tr><th>Date</th><th>Direction</th><th>Recipient / sender</th><th>Number</th><th>Pages</th><th>Status</th></tr></thead><tbody>${FAXES.map(([d, dir, who, num, p, s]) => `<tr class="click" data-a="toast" data-v="Fax preview opens here"><td class="num">${d}</td><td>${dir}</td><td>${who}</td><td class="num">${num}</td><td class="num">${p}</td><td>${pill(s === 'Delivered' || s === 'Received' ? 'Covered' : 'Pending').replace('Covered', s)}</td></tr>`).join('')}</tbody></table></div>`;
}
function tabPap(c) {
  return `${tph('Patient assistance program', `<button class="btn" data-a="toast" data-v="PAP financial form opens in an edit panel">${ic('edit', 16)} Edit</button>`)}<div class="blocks">
  <div class="block" data-sec="Assistance approval"><div class="section-t">${ic('check', 15)}Assistance approval</div><div class="fields"><div class="fld"><span class="lbl">PAP status</span><span class="val">${pill(c.pap)}</span></div>${fld('Program', 'EMX Cares', false)}${fld('Approved through', '3/31/2027')}${fld('Approval ID', 'PAP-77120')}</div></div>
  <div class="block" data-sec="Financial information"><div class="section-t">${ic('card', 15)}Financial information</div><div class="fields">${fld('Household size', '3', false)}${fld('Income verified', 'Yes, 9/1/2026', false)}${fld('Documents', 'Tax return 2025', false)}</div></div></div>`;
}
function tabAudit() {
  return `${tph('Audit trail', `<label class="search" style="height:34px">${ic('search', 15)}<input placeholder="Search activity" style="width:160px"></label><button class="btn">${ic('cal', 16)} Date range</button>`)}
  <div class="tablewrap"><table class="dt"><thead><tr><th>When</th><th>User</th><th>Area</th><th>Action</th><th>Details</th></tr></thead><tbody>${AUDIT.map(([w, u, a, x, d]) => `<tr><td class="num">${w}</td><td>${u}</td><td>${a}</td><td class="strong">${x}</td><td class="wrap">${esc(d)}</td></tr>`).join('')}</tbody></table></div>`;
}
function caseCrumbs(c) { return `<div class="crumbrow"><div class="crumbs"><a href="#" data-a="go" data-r="cases">Cases</a>${ic('chevr', 12)}<span>${esc(fullName(c))}</span></div>${findBox(c)}</div>`; }
function viewCaseA(c) {
  const team = kgroup('Case team', 'users', [teamList(c)]);
  const dock = `<aside class="dock right patientdock ${S.side ? '' : 'closed'}" aria-label="Patient"><div class="dock-head">${ic('users', 16)}<h3>Patient</h3><button class="iconbtn" data-a="side" aria-label="${S.side ? 'Collapse' : 'Expand'} patient panel">${ic(S.side ? 'chevr' : 'chevl', 16)}</button><span class="vlabel">Patient</span></div>
    <div class="dock-body kvp patientpane">${patientFields(c)}${team}</div></aside>`;
  return `<div class="workspace"><div class="center"><div class="page">${caseCrumbs(c)}${caseHeader(c)}${tabPanel(c)}</div></div>${dock}</div>`;
}
function activityDock(c) {
  return `<aside class="dock right ${S.dockR ? '' : 'closed'}" aria-label="Activity"><div class="dock-head">${ic('clock', 16)}<h3>Activity</h3><button class="iconbtn" data-a="dockR" aria-label="Toggle activity">${ic(S.dockR ? 'chevr' : 'chevl', 16)}</button><span class="vlabel">Activity</span></div>
  <div class="dock-body"><div class="section-t">Up next</div>
  <div class="note-banner" style="background:var(--warn-50);color:var(--warn)">${ic('clock', 16)}<span>Follow-up ${c.follow ? (dayDiff(c.follow) < 0 ? `${-dayDiff(c.follow)} days overdue` : fmt(c.follow)) : 'not set'}. ${nextStep(c)}.</span></div>
  <div class="section-t">Recent</div>
  ${AUDIT.slice(0, 6).map(([w, u, a, x]) => `<div style="display:grid;grid-template-columns:10px 1fr;gap:8px;font-size:13px"><span class="flag" style="background:${a === 'Authorization' ? 'var(--warn-fill)' : 'var(--green)'};margin-top:6px"></span><span><b style="font-weight:500">${x}</b><br><span class="muted num">${u} · ${w.split(' ')[0]}</span></span></div>`).join('')}
  <button class="link-btn" data-a="tab" data-v="audit" style="text-align:left">View full audit trail</button></div></aside>`;
}
function viewCaseB(c) {
  return `<div class="workspace">${patientPanel(c, true)}<div class="center"><div class="page">${caseCrumbs(c)}${caseHeader(c)}${tabPanel(c)}</div></div>${activityDock(c)}</div>`;
}
function viewCaseC(c) {
  return `<div class="page" style="padding-top:16px">${caseHeader(c)}
   <section class="card"><div class="card-h" style="min-height:42px;padding-block:6px"><h3>Patient details</h3><button class="btn sm ghost" data-a="strip">${S.strip ? 'Collapse' : 'Expand'} ${ic('chevd', 14)}</button></div>${S.strip ? `<div class="card-b"><div class="fields">${patientFields(c)}</div></div>` : ''}</section>
   ${tabPanel(c)}</div>`;
}

/* ================= Direction C queue ================= */
function viewQueue() {
  const tabs = { All: () => true, Mine: c => c.owner === ME, 'Due today': c => c.follow && dayDiff(c.follow) === 0, Overdue: c => c.follow && dayDiff(c.follow) < 0, Appeals: c => c.ar === 'Appeal in Progress' };
  const list = filtered().filter(tabs[S.qtab]);
  return `<section class="queue" aria-label="Case queue"><div class="queue-head"><div style="display:flex;align-items:center;gap:8px"><h2 style="margin-right:auto">Cases</h2><span class="muted num" style="font-size:12.5px">${list.length}</span><button class="iconbtn" data-a="newcase" aria-label="New case">${ic('plus', 18)}</button></div>
    ${searchBox('q3', 'Search cases').replace('max-width:440px', 'max-width:none;flex:none')}
    <div class="qtabs">${Object.keys(tabs).map(k => `<button data-a="qtab" data-v="${k}" aria-pressed="${S.qtab === k}">${k}</button>`).join('')}</div>
    <div class="filterbar">${['caseStatus', 'ar', 'coverage'].map(k => ms(k)).join('')}${ms('payer', 'r')}</div>${chipsRow()}</div>
    <div class="queue-list">${list.map(c => `<div class="qitem ${c.id === S.caseId ? 'on' : ''}" data-a="case" data-id="${c.id}" tabindex="0"><span class="nm">${esc(fullName(c))}</span><span class="num" style="font-size:12.5px">${c.follow ? (dayDiff(c.follow) < 0 ? `<span class="overdue">${-dayDiff(c.follow)}d overdue</span>` : dayDiff(c.follow) === 0 ? '<b>Today</b>' : fmt(c.follow)) : '<span class="muted">No follow-up</span>'}</span>
      <span class="meta"><span class="mono">${c.id}</span>${pill(c.caseStatus)}${c.ar !== 'None' ? pill(c.ar) : ''}</span></div>`).join('') || '<div class="emptyline">No cases match.</div>'}</div></section>`;
}
/* =====================================================================
   Round 3 screens: Tools, Patients, Organizations, Boards
   ===================================================================== */
const R5 = rng(4242);
const pk = (a) => a[Math.floor(R5() * a.length)];
const daysAgo = (n, h = 9, m = 0) => { const d = addDays(TODAY, -n); d.setHours(h, m); return d; };
const fmtT = (d) => { let h = d.getHours(), m = d.getMinutes(); const ap = h >= 12 ? 'PM' : 'AM'; h = h % 12 || 12; return `${h}:${String(m).padStart(2, '0')} ${ap}`; };
const ago = (d) => { const n = -dayDiff(new Date(d.getFullYear(), d.getMonth(), d.getDate())); return n === 0 ? 'Today' : n === 1 ? 'Yesterday' : `${n} days ago`; };
const bucket = (d) => { const n = -dayDiff(new Date(d.getFullYear(), d.getMonth(), d.getDate())); return n === 0 ? 'Today' : n <= 7 ? 'Last 7 days' : n <= 30 ? 'Last 30 days' : 'Older'; };
const DATE_OPTS = ['Today', 'Last 7 days', 'Last 30 days', 'Older'];
const FACS = [...new Set(PRESCRIBERS.map(p => p[1]))];
const STAFF = ['Tina Alvarez, MA', 'Marcus Webb, RN', 'Dana Kim', 'Priya Nair, NP', 'Luis Ortega', 'Karen Hollis'];

/* ---------- Unattached uploads ---------- */
const UP_TYPES = ['Enrollment form', 'Prescription', 'Insurance card', 'Lab results', 'Consent', 'Clinical notes'];
const UPLOADS = Array.from({ length: 14 }, (_, i) => {
  const t = UP_TYPES[i % UP_TYPES.length]; const fac = FACS[(i * 3) % FACS.length]; const pt = CASES[(i * 5 + 3) % CASES.length];
  return { id: 'U' + (5310 + i), facility: fac, type: t, file: `${t.replace(/ /g, '_')}_${pt.last}.pdf`, size: `${80 + Math.floor(R5() * 900)} KB`,
    desc: `${t} for ${pt.first} ${pt.last}, DOB ${fmt(pt.dob)}`, by: pk(STAFF), byOrg: fac, date: daysAgo([0, 0, 1, 2, 3, 5, 6, 9, 12, 15, 21, 28, 33, 40][i], 8 + (i % 9), (i * 13) % 60),
    assigned: i % 3 === 0 ? pk(TEAM) : null, hint: pt.id };
});
/* ---------- Communications ---------- */
const COMMS_SUBJ = [
  ['Medical history', 'Please upload or fax the chart notes, medication list and lab results so we can process the PA request.', 'Action needed'],
  ['Prior authorization', 'The PA form was faxed to your office last week. Can you review, edit as needed and return so we can submit to the payer?', 'Action needed'],
  ['Medication change', 'Patient changed dosage last Tuesday. Diarrhea is much better but still persistent.', 'FYI'],
  ['Adverse event, patient reported', 'Patient reported headache and nausea a few days after starting therapy. Please follow up.', 'Action needed'],
  ['Signed appeal letter', 'Signed letter of medical necessity is uploaded through the portal for appeal 2.', 'FYI'],
  ['Shipment question', 'Patient asked when the next shipment will arrive. They have 5 days of supply left.', 'Action needed'],
  ['Insurance update', 'Patient has new coverage starting next month. Updated card is uploaded.', 'FYI']
];
const COMMS = Array.from({ length: 12 }, (_, i) => {
  const c = CASES[(i * 7 + 1) % CASES.length]; const [subj, body, tag] = COMMS_SUBJ[i % COMMS_SUBJ.length];
  const sent = daysAgo([0, 0, 1, 1, 2, 3, 4, 6, 8, 11, 15, 22][i], 9 + (i % 8), (i * 17) % 60);
  return { id: 'M' + (9100 + i), caseId: c.id, sender: pk(STAFF), facility: c.facility, prescriber: c.prescriber, subj, body, tag, sent, due: addDays(sent, 2),
    waiting: tag === 'Action needed' ? pk(['Patient Access Coordinator', 'Janet Mills', 'Field Reimbursement Manager']) : null, status: i > 8 ? 'Resolved' : 'Open' };
});
/* ---------- Account requests ---------- */
const ACCT = [
  ['Jordan Pike', 'jordan.pike@riversideendo.org', '(615) 555-0192', FACS[1], false, 'Office staff'],
  ['Alana Brooks', 'abrooks@northgatemed.com', '(629) 555-0114', FACS[3], false, 'Prescriber'],
  ['Samir Haddad', 'samir@cedarviewclinic.com', '(404) 555-0170', 'Cedarview Clinic', true, 'Administrator'],
  ['Renee Castillo', 'rcastillo@harborpointfp.com', '(310) 555-0133', FACS[5], false, 'Office staff'],
  ['Dr. Owen Lutz', 'olutz@lakeshoreendo.com', '(212) 555-0101', FACS[6], false, 'Prescriber'],
  ['Mina Farah', 'mina@brightwaterhealth.com', '(615) 555-0188', 'Brightwater Health', true, 'Administrator'],
  ['Colin Reyes', 'creyes@cumberlandspecialty.com', '(629) 555-0155', FACS[4], false, 'Office staff'],
  ['Hattie Moss', 'hmoss@citymedicalgroup.com', '(310) 555-0147', FACS[2], false, 'Prescriber']
].map(([name, email, phone, facility, isNew, role], i) => ({ id: 'A' + (700 + i), name, email, phone, facility, isNew, role, npi: isNew || role === 'Prescriber' ? String(1098765400 + i * 37) : '', addr: isNew ? pk(['647 New Road, Franklin, TN 37064', '88 Harbor Way, Atlanta, GA 30307']) : '', date: daysAgo([0, 1, 1, 3, 4, 6, 9, 14][i], 10 + i, (i * 11) % 60), status: i < 5 ? 'Requested' : i === 5 ? 'Approved' : i === 6 ? 'Denied' : 'Approved' }));
/* ---------- Fax transmissions ---------- */
const FAX_RECIP = [['Summit Health Plan', 'Carrier', '1 (800) 555-0140'], ['Crestline PBM', 'PBM', '1 (888) 555-1112'], ['Optime', 'Pharmacy', '(216) 444-2222'], ['Hollywood Doctors', 'Provider', '(310) 709-4555'], ['Keystone Mutual', 'Carrier', '1 (800) 555-0177'], ['Riverside Endocrine Associates', 'Provider', '(615) 555-0100']];
const FAX_TYPES = ['Case communication', 'Case document', 'PA form', 'Appeal packet'];
const FAXLOG = Array.from({ length: 20 }, (_, i) => {
  const [who, kind, num] = FAX_RECIP[i % FAX_RECIP.length]; const st = i === 2 || i === 11 ? 'Failed' : i < 2 ? 'Pending' : i === 4 ? 'Staged' : i === 7 ? 'Sending' : i % 5 === 3 ? 'Received' : 'Delivered';
  return { id: 'F' + (30010 + i), date: daysAgo(Math.floor(i / 3), 8 + (i % 9), (i * 7) % 60), dir: st === 'Received' ? 'Inbound' : 'Outbound', who, kind, num, type: FAX_TYPES[i % 4], job: st === 'Pending' || st === 'Staged' ? '' : String(884100 + i * 13), pages: 1 + ((i * 7) % 14), status: st, error: st === 'Failed' ? (i === 2 ? 'Busy signal after 3 attempts' : 'No answer') : '', caseId: CASES[(i * 3) % CASES.length].id };
});
/* ---------- Patients ---------- */
const PATIENTS = CASES.map((c, i) => ({ pid: c.pid, c, cases: i % 6 === 2 ? [c.id, CASES[(i + 11) % CASES.length].id] : [c.id], status: ['Closed', 'Complete'].includes(c.caseStatus) ? 'Inactive' : 'Active', pinned: c.pinned }));
const patientOf = (pid) => PATIENTS.find(p => p.pid === pid);
/* ---------- Carriers / PBMs ---------- */
const CARRIERS = [
  ['Summit Health Plan', 'Commercial', '1200 Summit Parkway', 'Denver, CO 80202', '1 (800) 555-0140', '1 (800) 555-0141'],
  ['Keystone Mutual', 'Commercial', '400 Market Street', 'Philadelphia, PA 19106', '1 (800) 555-0177', '1 (800) 555-0178'],
  ['Blue Meridian', 'Commercial', '55 Meridian Plaza', 'Indianapolis, IN 46204', '1 (800) 555-0190', '1 (800) 555-0191'],
  ['Medicare Part D', 'Medicare', '7500 Security Boulevard', 'Baltimore, MD 21244', '1 (800) 555-0100', '1 (800) 555-0101'],
  ['State Medicaid', 'Medicaid', '310 Great Circle Road', 'Nashville, TN 37243', '1 (800) 555-0122', '1 (800) 555-0123'],
  ['Harborline Health', 'Commercial', '90 Harbor Drive', 'San Diego, CA 92101', '1 (800) 555-0160', '1 (800) 555-0161']
].map(([name, type, st, city, phone, fax], i) => ({ id: 'CR' + (i + 1), name, type, st, city, phone, fax, status: i === 5 ? 'Inactive' : 'Active' }));
const PBMS = [
  ['Crestline PBM', 'Pharmacy benefit manager', '22 Crest Road', 'Scottsdale, AZ 85251', '1 (888) 555-1112', '1 (888) 555-1113'],
  ['Northstar Rx Services', 'Pharmacy benefit manager', '800 Polaris Avenue', 'Minneapolis, MN 55402', '1 (888) 555-1120', '1 (888) 555-1121'],
  ['ClearPath Benefits', 'Pharmacy benefit manager', '1 ClearPath Way', 'Columbus, OH 43215', '1 (888) 555-1150', '1 (888) 555-1151']
].map(([name, type, st, city, phone, fax], i) => ({ id: 'PB' + (i + 1), name, type, st, city, phone, fax, status: 'Active' }));
const casesFor = (name) => CASES.filter(c => c.payer === name);
/* ---------- Medical facilities + locations ---------- */
const FAC_TYPES = ['Endocrinology', 'Primary care', 'Multi-specialty', 'Endocrinology', 'Specialty clinic', 'Family practice', 'Endocrinology', 'Community health'];
const FACILITIES = FACS.map((name, i) => {
  const locs = Array.from({ length: 1 + (i % 3) }, (_, j) => ({ name: j === 0 ? `${name}` : `${name}, ${pk(['North', 'Midtown', 'West', 'Cool Springs'])}`, st: `${100 + ((i + 3) * (j + 7) * 97) % 9000} ${pk(['Main Street', 'Medical Center Drive', 'Church Street', 'Hillsboro Pike', 'Peachtree Road'])}${j ? ', Suite ' + (100 + j * 110) : ''}`, city: pk(['Nashville, TN 37203', 'Franklin, TN 37067', 'Los Angeles, CA 90028', 'Atlanta, GA 30309', 'Brooklyn, NY 11201']), phone: `(615) 555-0${(i * 3 + j) % 9}${(i + j * 5) % 10}${j}`, fax: j === 2 ? '' : `(615) 555-1${(i * 3 + j) % 9}${(i + j * 5) % 10}${j}`, npi: String(1234567000 + i * 91 + j), tax: `${40 + i}-${6780000 + j * 13}` }));
  const users = PRESCRIBERS.filter(p => p[1] === name).map(p => ({ name: p[0], role: 'Prescriber', email: p[0].replace('Dr. ', '').toLowerCase().replace(' ', '.') + '@example.org', status: 'Active' })).concat([{ name: STAFF[i % STAFF.length], role: 'Office staff', email: 'office' + i + '@example.org', status: 'Active' }, { name: pk(['Beth Carrow', 'Nate Silva', 'Jen Oduya']), role: 'Administrator', email: 'admin' + i + '@example.org', status: i % 2 ? 'Invite pending' : 'Active' }]);
  return { id: 'MF' + (i + 1), name, type: FAC_TYPES[i], contact: users[0].name, phone: locs[0].phone, fax: locs[0].fax || '(615) 555-1999', npi: locs[0].npi, tax: locs[0].tax, locs, users, pinned: i === 0 || i === 3, status: 'Active',
    notes: [
      { by: 'Janet Mills', when: '9/18/2026 2:40 PM', text: 'Office prefers PA forms by fax, not portal. Ask for Tina for signature questions.', hl: true },
      { by: 'Sarah Mitchell', when: '8/30/2026 10:12 AM', text: 'Clinic closed Fridays after 12 PM. Faxes received after noon are handled Monday.', hl: false },
      { by: 'Marketta Howie', when: '7/2/2026 4:05 PM', text: 'Signed BAA on file. Portal admin changed to the office manager.', hl: false }
    ], docs: [['Business_Associate_Agreement.pdf', 'Agreement', '7/2/2026'], ['W9_2026.pdf', 'Tax form', '1/15/2026'], ['Fax_cover_template.pdf', 'Template', '3/4/2026']] };
});
const LOCATIONS = FACILITIES.flatMap(f => f.locs.map(l => ({ ...l, fac: f })));
/* ---------- Boards ---------- */
const EXPIRING = CASES.filter((c, i) => i % 3 !== 1).slice(0, 18).map((c, i) => ({ c, exp: addDays(TODAY, [3, 5, 8, 12, 14, 18, 21, 25, 28, 33, 38, 41, 45, 52, 56, 60, 72, 85][i]), kind: i % 2 ? 'Benefits' : 'Authorization' }));

/* ================= Shared building blocks ================= */
S.pf = S.pf || {}; S.pq = S.pq || {}; S.drawer = null; S.pop = null; S.tab2 = {}; S.fpA = true; S.detail = {};
function pfState(pid, filters) { if (!S.pf[pid]) S.pf[pid] = Object.fromEntries(filters.map(f => [f.key, new Set()])); return S.pf[pid]; }
function applyPF(pid, filters, rows, text) {
  const st = pfState(pid, filters); const q = (S.pq[pid] || '').toLowerCase();
  return rows.filter(r => filters.every(f => !st[f.key].size || st[f.key].has(f.get(r))) && (!q || text(r).toLowerCase().includes(q)));
}
function pfCount(pid) { return S.pf[pid] ? Object.values(S.pf[pid]).reduce((n, s) => n + s.size, 0) : 0; }
function filterGroups(pid, filters, rows) {
  const st = pfState(pid, filters);
  return filters.map(f => { const opts = f.opts || [...new Set(rows.map(f.get))]; const open = S.expanded[pid + f.key] ?? true;
    return `<div class="fgroup"><button data-a="pfx" data-v="${pid + f.key}" aria-expanded="${open}">${ic(open ? 'chevd' : 'chevr', 14)}${f.label}${st[f.key].size ? `<span class="n">${st[f.key].size}</span>` : ''}</button>${open ? opts.map(o => `<label class="opt"><input type="checkbox" data-a="pfo" data-p="${pid}" data-k="${f.key}" data-v="${esc(o)}" ${st[f.key].has(o) ? 'checked' : ''}><span>${esc(o)}</span><span class="c num">${rows.filter(r => f.get(r) === o).length}</span></label>`).join('') : ''}</div>`; }).join('');
}
function pfChips(pid, filters) {
  const st = S.pf[pid]; if (!st) return ''; const chips = [];
  filters.forEach(f => st[f.key].forEach(v => chips.push(`<span class="chip"><span style="opacity:.7">${f.label}:</span> ${esc(v)}<button data-a="pfo" data-p="${pid}" data-k="${f.key}" data-v="${esc(v)}" aria-label="Remove ${esc(v)}">${ic('x', 12)}</button></span>`)));
  return chips.length ? `<div class="chips">${chips.join('')}<button class="link-btn" data-a="pfclear" data-p="${pid}">Clear all</button></div>` : '';
}
function dtable(cols, rows, o = {}) {
  const body = rows.map(r => `<tr class="${o.rowAct ? 'click' : ''} ${o.sel && o.sel(r) ? 'sel' : ''} ${o.rowCls ? o.rowCls(r) : ''}" ${o.rowAct ? o.rowAct(r) : ''}>${cols.map(([h, w, f, cls]) => `<td class="${cls || ''} ${!w || w === 'auto' ? 'wrap' : ''}">${f(r)}</td>`).join('')}</tr>`).join('');
  return `<div class="tablewrap"><table class="dt"><thead><tr>${cols.map(([h, w, f, cls]) => `<th style="width:${w || 'auto'}" class="${cls || ''}">${h}</th>`).join('')}</tr></thead><tbody>${body || `<tr><td colspan="${cols.length}" style="height:120px;text-align:center" class="muted">${o.empty || 'Nothing matches these filters.'}</td></tr>`}</tbody></table></div>`;
}
const pager = (n, noun) => `<div class="pager num"><span>${n ? `1 to ${Math.min(25, n)} of ${n} ${noun}` : `0 ${noun}`}</span><span class="sp"></span><button class="btn sm ghost" disabled>${ic('chevl', 14)} Previous</button><span>Page 1 of ${Math.max(1, Math.ceil(n / 25))}</span><button class="btn sm ghost" disabled>Next ${ic('chevr', 14)}</button></div>`;
const tableSearch = (pid, ph) => `<label class="search" style="flex:1 1 260px;max-width:420px;height:36px">${ic('search', 16)}<span class="sr">Search</span><input id="s-${pid}" data-in="pq" data-p="${pid}" value="${esc(S.pq[pid] || '')}" placeholder="${ph}" style="width:100%"></label>`;
const splitAct = (id, label = 'Actions') => `<div class="split-btn"><button class="btn sm" data-a="rowmenu" data-v="${id}">${label} ${ic('chevd', 14)}</button></div>`;
const pinAddr = (st, city) => `<span class="addr">${ic('pin', 14)}<span>${esc(st)}<br>${esc(city)}</span></span>`;

/* Generic list page with side filters. A: filter panel beside table. B: docked left panel. */
function listPage(pid, cfg) {
  const rows = applyPF(pid, cfg.filters, cfg.rows, cfg.text);
  const n = pfCount(pid);
  const head = `<div class="pagehead"><div><h1>${cfg.title}</h1>${cfg.sub ? `<div class="muted" style="font-size:13px">${cfg.sub}</div>` : ''}</div>${cfg.head || ''}</div>`;
  const tableCard = `<section class="card"><div class="card-h" style="flex-wrap:wrap;gap:10px 12px">${tableSearch(pid, cfg.searchPh)}<span class="muted num" style="font-size:13px;margin-left:auto">${rows.length} of ${cfg.rows.length} ${cfg.noun}</span>${cfg.tools || ''}</div>${dtable(cfg.cols, pageSlice(pid, rows), cfg.opts || {})}${pagerX(pid, rows.length, cfg.noun)}</section>`;
  if (isTop()) {
    return `<div class="workspace"><aside class="dock ${S.dockL ? '' : 'closed'}" aria-label="Filters"><div class="dock-head">${ic('filter', 16)}<h3>Filters ${n ? `<span class="pill nodot t-ok num" style="height:20px">${n}</span>` : ''}</h3>${n ? `<button class="link-btn x" data-a="pfclear" data-p="${pid}">Clear</button>` : ''}<button class="iconbtn" data-a="dockL" aria-label="Toggle filters">${ic(S.dockL ? 'chevl' : 'chevr', 16)}</button><span class="vlabel">Filters${n ? ` (${n})` : ''}</span></div><div class="dock-body">${filterGroups(pid, cfg.filters, cfg.rows)}</div></aside>
      <div class="center"><div class="page">${head}${pfChips(pid, cfg.filters)}${tableCard}</div></div></div>`;
  }
  return `<div class="page">${head}<div class="withfilters ${S.fpA ? '' : 'fclosed'}">
    <aside class="card fpanel" aria-label="Filters"><div class="card-h">${ic('filter', 16)}<h3>Filters</h3>${n ? `<button class="link-btn" data-a="pfclear" data-p="${pid}">Clear</button>` : ''}<button class="iconbtn" data-a="fpA" aria-label="${S.fpA ? 'Collapse' : 'Expand'} filters">${ic(S.fpA ? 'chevl' : 'chevr', 16)}</button></div>${S.fpA ? `<div class="card-b">${filterGroups(pid, cfg.filters, cfg.rows)}</div>` : `<span class="vlabel" style="display:block;margin:0 auto 12px">Filters${n ? ` (${n})` : ''}</span>`}</aside>
    <div class="stack">${pfChips(pid, cfg.filters)}${tableCard}</div></div></div>`;
}

/* ================= Unattached uploads ================= */
const UP_F = [{ key: 'facility', label: 'Facility', get: r => r.facility }, { key: 'type', label: 'Document type', get: r => r.type, opts: UP_TYPES }, { key: 'assigned', label: 'Assignment', get: r => r.assigned ? 'Assigned' : 'Unassigned', opts: ['Unassigned', 'Assigned'] }, { key: 'when', label: 'Uploaded', get: r => bucket(r.date), opts: DATE_OPTS }];
function viewUploads() {
  return listPage('uploads', {
    title: 'Unattached Uploads', sub: 'Files sent by providers that are not on a case yet', noun: 'uploads', filters: UP_F, rows: UPLOADS.filter(u => !u.done), searchPh: 'Search file name, description, facility',
    text: r => [r.file, r.desc, r.facility, r.by].join(' '),
    cols: [
      ['Document', 'auto', r => `<div class="doccell">${ic('file', 18)}<span><a href="#" data-a="drawer" data-v="upload" data-id="${r.id}" class="strong">${esc(r.file)}</a><span class="sub">${esc(r.type)} · ${r.size}</span><span class="sub">${esc(r.desc)}</span></span></div>`],
      ['Facility', '200px', r => `${esc(r.facility)}<span class="sub">${esc(r.by)}</span>`],
      ['Uploaded', '98px', r => `<span class="num">${fmt(r.date)}</span><span class="sub num">${fmtT(r.date)}</span>`],
      ['Assigned to', '112px', r => r.assigned ? esc(r.assigned) : '<span class="muted">Unassigned</span>'],
      ['', '124px', r => `<div class="rowacts"><button class="btn sm primary" data-a="modal" data-v="attach" data-id="${r.id}">Attach</button><button class="btn sm" data-a="rowmenu" data-v="${r.id}" aria-label="More actions">${ic('more', 16)}</button></div>`, 'r']
    ], opts: { rowAct: r => `data-a="drawer" data-v="upload" data-id="${r.id}"`, sel: r => S.drawer && S.drawer.id === r.id }
  });
}
/* ================= Communications ================= */
const CM_F = [{ key: 'tag', label: 'Category', get: r => r.tag, opts: ['Action needed', 'FYI'] }, { key: 'status', label: 'Status', get: r => r.status, opts: ['Open', 'Resolved'] }, { key: 'facility', label: 'Facility', get: r => r.facility }, { key: 'when', label: 'Sent', get: r => bucket(r.sent), opts: DATE_OPTS }];
function viewComms() {
  return listPage('comms', {
    title: 'Communications', sub: 'Messages from provider offices about your cases', noun: 'messages', filters: CM_F, rows: COMMS, searchPh: 'Search message, patient, sender',
    text: r => { const c = byId(r.caseId); return [r.subj, r.body, fullName(c), r.sender, r.facility].join(' '); },
    cols: [
      ['Patient', '220px', r => { const c = byId(r.caseId); return `<span class="strong">${esc(fullName(c))}</span><span class="sub num">DOB ${fmt(c.dob)} · <a href="#" data-a="case" data-id="${c.id}">${c.id}</a></span><span class="sub">${esc(c.prescriber)}</span>`; }, 'top'],
      ['From', '200px', r => `${esc(r.sender)}<span class="sub">${esc(r.facility)}</span>`, 'top'],
      ['Message', 'auto', r => `<div class="msgcell"><b>${esc(r.subj)}</b><p>${esc(r.body)}</p><div class="msgmeta">${pill(r.tag === 'FYI' ? 'Not Applicable' : 'Pending', 'nodot').replace('Not Applicable', 'FYI').replace('Pending', 'Action needed')}${r.status === 'Resolved' ? pill('Complete', 'nodot').replace('Complete', 'Resolved') : r.waiting ? `<span class="${dayDiff(r.due) < 0 ? 'overdue' : 'muted'}">Response due ${fmt(r.due)} from ${esc(r.waiting)}</span>` : ''}</div></div>`, 'wrap top'],
      ['Sent', '120px', r => `<span class="num">${fmt(r.sent)}</span><span class="sub num">${fmtT(r.sent)}</span>`, 'top r']
    ], opts: { rowAct: r => `data-a="drawer" data-v="comm" data-id="${r.id}"`, sel: r => S.drawer && S.drawer.id === r.id, rowCls: r => r.status === 'Resolved' ? 'dim' : '' }
  });
}
/* ================= Account requests ================= */
const AC_F = [{ key: 'status', label: 'Status', get: r => r.status, opts: ['Requested', 'Approved', 'Denied'] }, { key: 'fac', label: 'Facility', get: r => r.isNew ? 'New facility' : 'Existing facility', opts: ['Existing facility', 'New facility'] }, { key: 'role', label: 'Role', get: r => r.role, opts: ['Prescriber', 'Office staff', 'Administrator'] }];
function viewAcct() {
  return listPage('acct', {
    title: 'Account Requests', sub: 'People asking for access to the provider portal', noun: 'requests', filters: AC_F, rows: ACCT, searchPh: 'Search name, email, phone, facility',
    text: r => [r.name, r.email, r.phone, r.facility].join(' '),
    cols: [
      ['Requested', '100px', r => `<span class="num">${fmt(r.date)}</span><span class="sub num">${fmtT(r.date)}</span>`],
      ['Name', 'auto', r => `<span class="strong">${esc(r.name)}</span><span class="sub">${esc(r.email)}</span>`],
      ['Facility', 'auto', r => r.isNew ? `${esc(r.facility)} <span class="pill nodot t-violet" style="height:20px">New</span><span class="sub">${esc(r.addr)}</span>` : `<a href="#" data-a="facility" data-id="${FACILITIES.find(f => f.name === r.facility)?.id || ''}">${esc(r.facility)}</a>`],
      ['Role', '116px', r => esc(r.role)],
      ['Status', '118px', r => pill(r.status === 'Requested' ? 'Pending' : r.status === 'Approved' ? 'Approved' : 'Denied').replace('>Pending<', '>Requested<')],
      ['', '90px', r => r.status === 'Requested' ? `<button class="btn sm primary" data-a="drawer" data-v="acct" data-id="${r.id}">Review</button>` : `<button class="btn sm" data-a="drawer" data-v="acct" data-id="${r.id}">View</button>`, 'r']
    ], opts: { rowAct: r => `data-a="drawer" data-v="acct" data-id="${r.id}"`, sel: r => S.drawer && S.drawer.id === r.id }
  });
}
/* ================= Fax transmissions ================= */
const FX_TONE = { Pending: 't-warn', Staged: 't-neutral', Sending: 't-info', Delivered: 't-ok', Received: 't-navy', Failed: 't-danger' };
const fxPill = (s) => `<span class="pill ${FX_TONE[s]}">${s}</span>`;
const FX_F = [{ key: 'status', label: 'Status', get: r => r.status, opts: ['Failed', 'Pending', 'Staged', 'Sending', 'Delivered', 'Received'] }, { key: 'dir', label: 'Direction', get: r => r.dir, opts: ['Outbound', 'Inbound'] }, { key: 'type', label: 'Type', get: r => r.type, opts: FAX_TYPES }, { key: 'kind', label: 'Recipient type', get: r => r.kind, opts: ['Carrier', 'PBM', 'Pharmacy', 'Provider'] }];
function viewFax() {
  return listPage('fax', {
    title: 'Fax Transmissions', sub: 'Every fax sent or received through the hub', noun: 'faxes', filters: FX_F, rows: FAXLOG, searchPh: 'Search job number, recipient, fax number',
    head: `<button class="btn primary" data-a="modal" data-v="sendfax">${ic('fax', 16)} Send fax</button>`,
    text: r => [r.job, r.who, r.num, r.caseId].join(' '),
    cols: [
      ['Date', '100px', r => `<span class="num">${fmt(r.date)}</span><span class="sub num">${fmtT(r.date)}</span>`],
      ['Recipient', 'auto', r => `<span class="strong">${esc(r.who)}</span><span class="sub num">${r.kind} · ${r.num}</span>`],
      ['Type', '150px', r => `${esc(r.type)}<span class="sub">${r.dir}</span>`],
      ['Case', '86px', r => `<a href="#" data-a="case" data-id="${r.caseId}" class="num">${r.caseId}</a>`],
      ['Job', '76px', r => r.job ? `<span class="num">${r.job}</span>` : '<span class="muted">None</span>'],
      ['Pages', '62px', r => `<span class="num">${r.pages}</span>`, 'r'],
      ['Status', '150px', r => `${fxPill(r.status)}${r.error ? `<span class="sub overdue err">${esc(r.error)}</span>` : ''}`]
    ], opts: { rowAct: r => `data-a="drawer" data-v="fax" data-id="${r.id}"`, sel: r => S.drawer && S.drawer.id === r.id }
  });
}
/* ================= Patients ================= */
const PT_F = [{ key: 'status', label: 'Patient status', get: r => r.status, opts: ['Active', 'Inactive'] }, { key: 'consent', label: 'Consent', get: r => r.c.consent, opts: CONSENT }, { key: 'lang', label: 'Language', get: r => r.c.lang }, { key: 'pin', label: 'Pinned', get: r => r.c.pinned ? 'Pinned' : 'Not pinned', opts: ['Pinned', 'Not pinned'] }];
function viewPatients() {
  return listPage('patients', {
    title: 'Patients', noun: 'patients', filters: PT_F, rows: PATIENTS, searchPh: 'Search name, DOB, phone, address',
    head: `<button class="btn primary" data-a="newcase">${ic('plus', 16)} New patient</button>`,
    text: r => [fullName(r.c), fmt(r.c.dob), r.c.phone, r.c.street, r.c.city, r.pid].join(' '),
    cols: [
      ['', '44px', r => `<button class="star ${r.c.pinned ? 'on' : ''}" data-a="pin" data-id="${r.c.id}" aria-label="Pin">${ic('star', 16).replace('fill="none"', r.c.pinned ? 'fill="currentColor"' : 'fill="none"')}</button>`, 'pincell'],
      ['Patient', 'auto', r => `<a href="#" data-a="patient" data-id="${r.pid}" class="strong pname">${esc(fullName(r.c))}</a><span class="sub num">${r.pid} · DOB ${fmt(r.c.dob)} · ${r.c.gender}</span>`],
      ['Address', '260px', r => pinAddr(r.c.street, r.c.city)],
      ['Phone', '150px', r => `<span class="num">${r.c.phone}</span>`],
      ['Status', '110px', r => pill(r.status === 'Active' ? 'Active' : 'Closed').replace('>Closed<', '>Inactive<')],
      ['Consent', '130px', r => pill(r.c.consent)],
      ['Cases', '80px', r => `<span class="countpill num">${r.cases.length}</span>`, 'r']
    ], opts: { rowAct: r => `data-a="patient" data-id="${r.pid}"` }
  });
}
function viewPatient() {
  const p = patientOf(S.detail.patient) || PATIENTS[0]; const c = p.c;
  const cases = p.cases.map(byId);
  return `<div class="page"><div class="crumbs"><a href="#" data-a="go" data-r="patients">Patients</a>${ic('chevr', 12)}<span>${esc(fullName(c))}</span></div>
  <section class="card"><div class="casehead"><div class="who"><span class="ini">${c.first[0]}${c.last[0]}</span><div><div style="display:flex;gap:10px;align-items:center"><span class="nm">${esc(c.last.toUpperCase())}, ${esc(c.first)} ${c.mi}.</span>${pill(c.consent)}</div><div class="ids"><span>Patient <span class="mono" style="color:var(--ink)">${p.pid}</span>${copyBtn(p.pid, 'patient ID')}</span><span class="num">DOB ${fmt(c.dob)}</span><span>${p.status}</span></div></div></div>
  <div class="acts"><button class="btn" data-a="edit" data-v="patient">${ic('edit', 16)} Edit patient</button><button class="btn primary" data-a="newcasefor" data-id="${p.pid}">${ic('plus', 16)} New case</button></div></div></section>
  <div class="caselayout"><div class="stack">
    <section class="card"><div class="card-h"><h2>Cases</h2><span class="muted num" style="font-size:13px">${cases.length}</span></div>${dtable([
      ['Case', '130px', x => `<a href="#" data-a="case" data-id="${x.id}" class="strong">${x.id}</a><span class="sub num">Opened ${fmt(x.start)}</span>`],
      ['Prescriber', 'auto', x => `${esc(x.prescriber)}<span class="sub">${esc(x.facility)}</span>`],
      ['Case status', '220px', x => pill(x.caseStatus)], ['Coverage', '150px', x => pill(x.coverage)], ['Follow-up', '130px', x => followCell(x)]
    ], cases, { rowAct: x => `data-a="case" data-id="${x.id}"` })}</section>
    <section class="card"><div class="card-h"><h2>Consent history</h2></div>${dtable([['Date', '130px', x => `<span class="num">${x[0]}</span>`], ['Event', 'auto', x => x[1]], ['By', '180px', x => x[2]]], [['7/29/2026', 'Consent signed (HIPAA and program)', 'Marketta Howie'], ['7/29/2026', 'Texting declined, voicemail allowed', 'Marketta Howie']])}</section>
    <section class="card"><div class="card-h"><h2>Coverage on file</h2></div>${dtable([['Plan', 'auto', x => `<span class="strong">${x[0]}</span>`], ['Type', '160px', x => x[1]], ['Member ID', '160px', x => `<span class="mono">${x[2]}</span>`], ['Verified', '130px', x => `<span class="num">${x[3]}</span>`]], [[c.payer === 'No insurance' ? 'None on file' : c.payer, 'Primary medical', 'SHP88213407', '9/8/2026'], ['Crestline PBM', 'Pharmacy', 'CRX-44018', '9/8/2026']])}</section>
  </div>
  <div class="sidecol"><section class="card"><div class="card-h"><h3>Patient details</h3></div><div class="card-b kvp">${patientFields(c)}</div></section></div></div></div>`;
}
/* ================= Carriers / PBMs ================= */
function orgList(pid, title, rows, detailAct, noun) {
  const F = [{ key: 'status', label: 'Status', get: r => r.status, opts: ['Active', 'Inactive'] }, { key: 'type', label: 'Type', get: r => r.type }];
  return listPage(pid, {
    title, noun, filters: F, rows, searchPh: 'Search name, city, phone, fax',
    head: `<button class="btn primary" data-a="orgnew" data-v="${pid}">${ic('plus', 16)} Add ${noun.slice(0, -1)}</button>`,
    text: r => [r.name, r.city, r.phone, r.fax].join(' '),
    cols: [
      ['Name', 'auto', r => `<a href="#" data-a="${detailAct}" data-id="${r.id}" class="strong pname">${esc(r.name)}</a><span class="sub">${esc(r.type)}</span>`],
      ['Address', '260px', r => pinAddr(r.st, r.city)],
      ['Phone', '160px', r => `<span class="num">${r.phone}</span>`], ['Fax', '160px', r => `<span class="num">${r.fax}</span>`],
      ['Cases', '120px', r => { const n = casesFor(r.name).length; return n ? `<a href="#" data-a="${detailAct}" data-id="${r.id}" class="num">${n} cases</a>` : '<span class="muted">None</span>'; }],
      ['Status', '110px', r => pill(r.status === 'Active' ? 'Active' : 'Closed').replace('>Closed<', '>Inactive<')]
    ], opts: { rowAct: r => `data-a="${detailAct}" data-id="${r.id}"` }
  });
}
function orgDetail(o, back, backLabel) {
  const cases = casesFor(o.name);
  const f = S.detail.cstat || 'Open';
  const shown = cases.filter(c => f === 'All' || (f === 'Open' ? !['Closed', 'Complete'].includes(c.caseStatus) : ['Closed', 'Complete'].includes(c.caseStatus)));
  return `<div class="page"><div class="crumbs"><a href="#" data-a="go" data-r="${back}">${backLabel}</a>${ic('chevr', 12)}<span>${esc(o.name)}</span></div>
  <section class="card"><div class="casehead"><div class="who"><span class="ini" style="border-radius:10px">${ic('card', 20)}</span><div><div class="nm">${esc(o.name)}</div><div class="ids"><span>${esc(o.type)}</span><span>${o.status}</span></div></div></div>
  <div class="acts"><button class="btn" data-a="edit" data-v="org">${ic('edit', 16)} Edit</button><button class="btn ${o.status === 'Inactive' ? '' : 'danger'}" data-a="modal" data-v="deact" data-id="org:${o.id}">${o.status === 'Inactive' ? 'Reactivate' : 'Deactivate'}</button></div></div></section>
  <div class="caselayout"><section class="card"><div class="card-h"><h2>Cases with this ${back === 'pbms' ? 'PBM' : 'carrier'}</h2><div class="seg lite">${['Open', 'Closed', 'All'].map(k => `<button data-a="cstat" data-v="${k}" aria-pressed="${f === k}">${k}</button>`).join('')}</div></div>
    ${dtable([
      ['Patient', 'auto', c => `<a href="#" data-a="case" data-id="${c.id}" class="strong pname">${esc(fullName(c))}</a><span class="sub num">${c.id} · DOB ${fmt(c.dob)}</span>`],
      ['Follow-up', '124px', c => followCell(c)], ['Case status', '220px', c => pill(c.caseStatus)],
      ['Authorization', '190px', c => c.ar === 'None' ? '<span class="muted">None</span>' : pill(c.ar)]
    ], shown, { rowAct: c => `data-a="case" data-id="${c.id}"`, empty: 'No cases in this view.' })}${pager(shown.length, 'cases')}</section>
    <div class="sidecol"><section class="card"><div class="card-h"><h3>Details</h3></div><div class="card-b kvp"><div class="fields">${fld('Name', o.name)}${fld('Type', o.type, false)}${fld('Address', `${o.st}, ${o.city}`)}${fld('Phone', o.phone)}${fld('Fax', o.fax)}</div>
      <div class="kv-sub">Submission</div><div class="fields">${fld('PA fax', o.fax)}${fld('Appeals fax', o.fax.replace(/\d$/, '2'))}${fld('Portal', 'Payer portal on file', false)}</div></div></section></div></div></div>`;
}
/* ================= Medical facilities ================= */
function viewFacilities() {
  const F = [{ key: 'type', label: 'Facility type', get: r => r.type }, { key: 'pin', label: 'Pinned', get: r => r.pinned ? 'Pinned' : 'Not pinned', opts: ['Pinned', 'Not pinned'] }];
  return listPage('facilities', {
    title: 'Medical Facilities', noun: 'facilities', filters: F, rows: FACILITIES, searchPh: 'Search name, NPI, phone, fax',
    head: `<button class="btn primary" data-a="modal" data-v="facnew">${ic('plus', 16)} Add facility</button>`,
    text: r => [r.name, r.npi, r.phone, r.fax].join(' '),
    cols: [
      ['', '44px', r => `<button class="star ${r.pinned ? 'on' : ''}" data-a="facpin" data-id="${r.id}" aria-label="Pin">${ic('star', 16).replace('fill="none"', r.pinned ? 'fill="currentColor"' : 'fill="none"')}</button>`, 'pincell'],
      ['Facility', 'auto', r => `<a href="#" data-a="facility" data-id="${r.id}" class="strong pname">${esc(r.name)}</a><span class="sub">${esc(r.type)} · NPI ${r.npi}</span>`],
      ['Primary contact', '190px', r => esc(r.contact)], ['Phone', '150px', r => `<span class="num">${r.phone}</span>`], ['Fax', '150px', r => `<span class="num">${r.fax}</span>`],
      ['Locations', '100px', r => `<span class="countpill num">${r.locs.length}</span>`, 'r'], ['Open cases', '110px', r => `<span class="num">${CASES.filter(c => c.facility === r.name && !['Closed', 'Complete'].includes(c.caseStatus)).length}</span>`, 'r']
    ], opts: { rowAct: r => `data-a="facility" data-id="${r.id}"` }
  });
}
function viewFacility() {
  const f = FACILITIES.find(x => x.id === S.detail.facility) || FACILITIES[0];
  const tab = S.tab2.facility || 'users';
  const cases = CASES.filter(c => c.facility === f.name);
  const tabs = [['users', 'Prescribers and users', f.users.length], ['locs', 'Locations', f.locs.length], ['notes', 'Notes', f.notes.length], ['docs', 'Documents', f.docs.length], ['cases', 'Cases', cases.length]];
  let body = '';
  if (tab === 'notes') body = `<div class="tp-h"><h2>Notes</h2><button class="btn primary" data-a="modal" data-v="note">${ic('plus', 16)} Add note</button></div>
    <div class="notes">${f.notes.map((nt, i) => `<div class="noterow ${nt.hl ? 'hl' : ''}"><div><div class="hd"><b>${esc(nt.by)}</b><span class="muted num">${nt.when}</span>${nt.hl ? '<span class="pill nodot t-warn">Highlighted</span>' : ''}</div><p><span class="${nt.hl ? 'hltext' : ''}">${esc(nt.text)}</span></p></div>
      <div class="noteacts"><button class="btn sm ghost" data-a="modal" data-v="note" data-id="${i}">${ic('edit', 14)} Edit</button><button class="btn sm ghost" data-a="notehl" data-id="${i}">${ic('flag', 14)} ${nt.hl ? 'Unhighlight' : 'Highlight'}</button><button class="btn sm ghost danger-t" data-a="noterm" data-id="${i}">${ic('x', 14)} Remove</button></div></div>`).join('') || '<div class="emptyline">No notes yet.</div>'}</div>`;
  if (tab === 'users') body = `<div class="tp-h"><h2>Prescribers and users</h2><button class="btn primary" data-a="modal" data-v="usernew" data-id="fac">${ic('plus', 16)} Add user</button></div>${dtable([['Name', 'auto', u => `<span class="strong">${esc(u.name)}</span><span class="sub">${esc(u.email)}</span>`], ['Role', '160px', u => u.role], ['Status', '150px', u => pill(u.status === 'Active' ? 'Active' : 'Pending').replace('>Pending<', '>Invite pending<')], ['', '120px', u => splitAct('u' + u.email), 'r']], f.users)}`;
  if (tab === 'locs') body = `<div class="tp-h"><h2>Locations</h2><button class="btn primary" data-a="modal" data-v="locnew">${ic('plus', 16)} Add location</button></div>${dtable([['Location', 'auto', l => `<span class="strong">${esc(l.name)}</span>${pinAddr(l.st, l.city).replace('class="addr"', 'class="addr sub-addr"')}`], ['Phone', '150px', l => `<span class="num">${l.phone}</span>`], ['Fax', '150px', l => l.fax ? `<span class="num">${l.fax}</span>` : '<span class="muted">None</span>'], ['NPI', '130px', l => `<span class="num">${l.npi}</span>`]], f.locs)}`;
  if (tab === 'cases') body = `<div class="tp-h"><h2>Cases</h2></div>${dtable([['Patient', 'auto', c => `<a href="#" data-a="case" data-id="${c.id}" class="strong pname">${esc(fullName(c))}</a><span class="sub num">${c.id}</span>`], ['Prescriber', '200px', c => esc(c.prescriber)], ['Case status', '220px', c => pill(c.caseStatus)], ['Follow-up', '130px', c => followCell(c)]], cases, { rowAct: c => `data-a="case" data-id="${c.id}"` })}`;
  if (tab === 'docs') body = `<div class="tp-h"><h2>Documents</h2><button class="btn primary" data-a="modal" data-v="adddoc" data-id="fac">${ic('plus', 16)} Add document</button></div>${dtable([['Name', 'auto', d => `<div class="doccell">${ic('file', 16)}${docLink(d[0], { type: d[1], date: d[2] })}</div>`], ['Type', '160px', d => d[1]], ['Added', '130px', d => `<span class="num">${d[2]}</span>`]], f.docs)}`;
  return `<div class="page"><div class="crumbs"><a href="#" data-a="go" data-r="facilities">Medical Facilities</a>${ic('chevr', 12)}<span>${esc(f.name)}</span></div>
  <section class="card"><div class="casehead"><div class="who"><span class="ini" style="border-radius:10px">${ic('building', 20)}</span><div><div class="nm">${esc(f.name)}</div><div class="ids"><span>${esc(f.type)}</span><span>NPI ${f.npi}</span><span>${f.status}</span></div></div></div>
  <div class="acts"><button class="btn" data-a="facpin" data-id="${f.id}">${ic('star', 16).replace('fill="none"', f.pinned ? 'fill="#d99400" stroke="#d99400"' : 'fill="none"')} ${f.pinned ? 'Pinned' : 'Pin'}</button><button class="btn" data-a="edit" data-v="facility">${ic('edit', 16)} Edit</button><button class="btn ${f.status === 'Inactive' ? '' : 'danger'}" data-a="modal" data-v="deact" data-id="fac:${f.id}">${f.status === 'Inactive' ? 'Reactivate' : 'Deactivate'}</button></div></div></section>
  <div class="caselayout side-left"><div class="sidecol"><section class="card"><div class="card-h"><h3>Facility details</h3></div><div class="card-b kvp"><div class="fields">${fld('Type', f.type, false)}${fld('Primary contact', f.contact, false)}${fld('Phone', f.phone)}${fld('Fax', f.fax)}${fld('NPI', f.npi)}${fld('Tax ID', f.tax)}</div><div class="kv-sub">Main location</div><div class="fields">${fld('Address', `${f.locs[0].st}, ${f.locs[0].city}`)}</div></div></section></div><div><div class="tabs" role="tablist">${tabs.map(([k, l, n]) => `<button role="tab" aria-selected="${tab === k}" data-a="tab2" data-k="facility" data-v="${k}">${l} <span class="n num">${n}</span></button>`).join('')}</div><div class="tabpanel">${body}</div></div>
  </div></div>`;
}
function viewLocations() {
  const F = [{ key: 'fac', label: 'Facility', get: r => r.fac.name }, { key: 'state', label: 'State', get: r => r.city.split(', ')[1].split(' ')[0] }, { key: 'fax', label: 'Fax on file', get: r => r.fax ? 'Has fax' : 'Missing fax', opts: ['Has fax', 'Missing fax'] }];
  return listPage('locations', {
    title: 'Facility Locations', noun: 'locations', filters: F, rows: LOCATIONS, searchPh: 'Search name, street, city, zip, phone, fax',
    text: r => [r.name, r.st, r.city, r.phone, r.fax].join(' '),
    cols: [
      ['Location', 'auto', r => `<a href="#" data-a="facility" data-id="${r.fac.id}" class="strong pname">${esc(r.name)}</a>${pinAddr(r.st, r.city).replace('class="addr"', 'class="addr sub-addr"')}`],
      ['Phone', '150px', r => `<span class="num">${r.phone}</span>`], ['Fax', '150px', r => r.fax ? `<span class="num">${r.fax}</span>` : '<span class="overdue">Missing</span>'],
      ['NPI', '130px', r => `<span class="num">${r.npi}</span>`], ['Tax ID', '130px', r => `<span class="num">${r.tax}</span>`]
    ], opts: { rowAct: r => `data-a="facility" data-id="${r.fac.id}"` }
  });
}
/* ================= Boards ================= */
function viewBoard(kind) {
  const pid = kind === 'Authorization' ? 'expauth' : 'expben';
  const rows = EXPIRING.filter(e => e.kind === kind);
  const tab = S.tab2[pid] || 'patients';
  const byFac = FACS.map((name, i) => ({ name, id: FACILITIES[i].id, list: rows.filter(e => e.c.facility === name), login: i % 3 ? fmt(addDays(TODAY, -(i * 4 + 1))) : null, notified: i % 2 ? fmt(addDays(TODAY, -(i + 2))) : null })).filter(x => x.list.length);
  const F = [{ key: 'win', label: 'Expires within', get: e => dayDiff(e.exp) <= 14 ? '14 days' : dayDiff(e.exp) <= 30 ? '30 days' : dayDiff(e.exp) <= 60 ? '60 days' : '90 days', opts: ['14 days', '30 days', '60 days', '90 days'] }, { key: 'fac', label: 'Facility', get: e => e.c.facility }, { key: 'payer', label: 'Payer', get: e => e.c.payer }];
  const tabsHtml = `<div class="seg lite">${[['patients', `By patient`], ['facilities', 'By facility']].map(([k, l]) => `<button data-a="tab2" data-k="${pid}" data-v="${k}" aria-pressed="${tab === k}">${l}</button>`).join('')}</div>`;
  if (tab === 'facilities') {
    const t = dtable([
      ['Facility', 'auto', x => `<a href="#" data-a="facility" data-id="${x.id}" class="strong pname">${esc(x.name)}</a><span class="sub">Last provider login ${x.login || 'never'} · Last notified ${x.notified || 'never'}</span>`],
      ['Patients expiring', '150px', x => `<span class="countpill num">${x.list.length}</span>`, 'r'],
      ['Soonest', '130px', x => { const d = Math.min(...x.list.map(e => dayDiff(e.exp))); return `<span class="num ${d <= 14 ? 'overdue' : ''}">${d} days</span>`; }],
      ['', '260px', x => `<div class="rowacts"><button class="btn sm" data-a="printlist" data-k="${kind}" data-v="${esc(x.name)}">Print list</button><button class="btn sm primary" data-a="modal" data-v="notify" data-id="${esc(x.name)}">${ic('mail', 14)} Email facility</button></div>`, 'r']
    ], byFac);
    return `<div class="page"><div class="pagehead"><div><h1>Expiring ${kind === 'Authorization' ? 'Authorizations' : 'Benefits'}</h1><div class="muted" style="font-size:13px">Grouped by prescribing facility</div></div>${tabsHtml}</div><section class="card">${t}</section></div>`;
  }
  return listPage(pid, {
    title: `Expiring ${kind === 'Authorization' ? 'Authorizations' : 'Benefits'}`, sub: `${kind === 'Authorization' ? 'Prior authorizations' : 'Benefit verifications'} ending in the next 90 days`, head: tabsHtml, noun: 'patients', filters: F, rows, searchPh: 'Search patient, case, facility',
    text: e => [fullName(e.c), e.c.id, e.c.facility].join(' '),
    cols: [
      ['Patient', 'auto', e => `<a href="#" data-a="case" data-id="${e.c.id}" class="strong pname">${esc(fullName(e.c))}</a><span class="sub num">${e.c.id} · DOB ${fmt(e.c.dob)}</span>`],
      ['Facility', '220px', e => `${esc(e.c.facility)}<span class="sub">${esc(e.c.prescriber)}</span>`],
      ['Payer', '170px', e => esc(e.c.payer)],
      ['Expires', '130px', e => { const d = dayDiff(e.exp); return `<span class="num ${d <= 14 ? 'overdue' : ''}">${fmt(e.exp)}</span><span class="sub num ${d <= 14 ? 'overdue' : ''}">in ${d} days</span>`; }],
      ['', '150px', e => `<div class="rowacts">${splitAct('x' + e.c.id, 'Reverify')}</div>`, 'r']
    ], opts: {}
  });
}

/* ================= Drawer ================= */
function drawer() {
  const d = S.drawer; if (!d) return '';
  let title = '', body = '', foot = '';
  if (d.type === 'upload') {
    const u = UPLOADS.find(x => x.id === d.id); title = u.file;
    body = `<div class="docpreview"><div class="sheet"><b>${esc(u.type.toUpperCase())}</b><i></i><i></i><i style="width:60%"></i><i></i><i style="width:40%"></i><i></i><i style="width:70%"></i></div><span class="muted" style="font-size:12.5px">Page 1 of 2</span></div>
      <div class="fields">${fld('Description', u.desc, false)}${fld('Type', u.type, false)}${fld('Facility', u.facility, false)}${fld('Uploaded by', `${u.by} · ${fmt(u.date)} ${fmtT(u.date)}`, false)}${fld('Assigned to', u.assigned || 'Unassigned', false)}</div>
      <div class="note-banner">${ic('info', 16)}<span>Possible match: <a href="#" data-a="case" data-id="${u.hint}">${esc(fullName(byId(u.hint)))} · ${u.hint}</a> (name and DOB)</span></div>`;
    foot = `<button class="btn danger" data-a="modal" data-v="archive" data-id="${u.id}">Archive</button><span style="flex:1"></span><button class="btn" data-a="modal" data-v="assign" data-id="${u.id}">Assign</button><button class="btn primary" data-a="modal" data-v="attach" data-id="${u.id}">Attach to case</button>`;
  }
  if (d.type === 'comm') {
    const m = COMMS.find(x => x.id === d.id); const c = byId(m.caseId); title = m.subj;
    body = `<div class="fields">${fld('Patient', `${fullName(c)} · ${c.id}`, false)}${fld('From', `${m.sender}, ${m.facility}`, false)}${fld('Category', m.tag, false)}</div>
      <div class="thread"><div class="bubble in"><div class="hd"><b>${esc(m.sender)}</b><span class="muted num">${fmt(m.sent)} ${fmtT(m.sent)}</span></div><p>${esc(m.body)}</p></div>
      ${m.reply ? `<div class="bubble out"><div class="hd"><b>Janet Mills</b><span class="muted">Just now</span></div><p>${esc(m.reply)}</p></div>` : ''}</div>
      <div class="input"><label class="lbl" for="reply">Reply to ${esc(m.sender)}</label><textarea id="reply" placeholder="Write a reply. It is shared with the provider portal."></textarea></div>`;
    foot = `<button class="btn" data-a="case" data-id="${c.id}">Open case</button><span style="flex:1"></span><button class="btn" data-a="commres" data-id="${m.id}">${m.status === 'Resolved' ? 'Reopen' : 'Mark resolved'}</button><button class="btn primary" data-a="commreply" data-id="${m.id}">${ic('send', 16)} Send reply</button>`;
  }
  if (d.type === 'acct') {
    const r = ACCT.find(x => x.id === d.id); title = r.name;
    body = `<div style="display:flex;gap:8px;align-items:center">${pill(r.status === 'Requested' ? 'Pending' : r.status).replace('>Pending<', '>Requested<')}<span class="muted num" style="font-size:13px">Requested ${fmt(r.date)} ${fmtT(r.date)}</span></div>
      <div class="kv-sub">Requester</div><div class="fields">${fld('Name', r.name)}${fld('Email', r.email)}${fld('Phone', r.phone)}${fld('Role', r.role, false)}${r.npi ? fld('NPI', r.npi) : ''}</div>
      <div class="kv-sub">Facility</div><div class="fields">${fld('Facility', r.facility, false)}${r.isNew ? fld('Address', r.addr) + fld('Status', 'New facility, will be created on approval', false) : fld('Status', 'Existing facility in HealthPacer', false)}</div>
      ${r.status === 'Requested' ? `<div class="note-banner">${ic('info', 16)}<span>Approving sends ${esc(r.name.split(' ')[0])} an invite email to set a password.</span></div>` : ''}`;
    foot = r.status === 'Requested' ? `<button class="btn danger" data-a="acctdeny" data-id="${r.id}">Deny</button><span style="flex:1"></span><button class="btn primary" data-a="acctok" data-id="${r.id}">${ic('check', 16)} Approve and invite</button>` : `<span style="flex:1"></span><button class="btn" data-a="drawerclose">Close</button>`;
  }
  if (d.type === 'fax') {
    const f = FAXLOG.find(x => x.id === d.id); title = `${f.dir} fax · ${f.who}`;
    body = `<div style="display:flex;gap:8px;align-items:center">${fxPill(f.status)}${f.error ? `<span class="overdue" style="font-size:13px">${esc(f.error)}</span>` : ''}</div>
      <div class="fields">${fld('Date', `${fmt(f.date)} ${fmtT(f.date)}`, false)}${fld(f.dir === 'Inbound' ? 'From' : 'To', `${f.who} (${f.kind})`, false)}${fld('Fax number', f.num)}${fld('Type', f.type, false)}${fld('Job number', f.job || 'Not assigned yet')}${fld('Pages', String(f.pages), false)}${fld('Case', `${fullName(byId(f.caseId))} · ${f.caseId}`, false)}</div>
      <div class="kv-sub">Files</div><div class="fields">${['Fax_cover_sheet.pdf', f.type === 'PA form' ? 'PA_form_signed.pdf' : f.type === 'Appeal packet' ? 'Appeal_packet.pdf' : 'Case_summary.pdf'].map(x => `<div class="fld"><span class="lbl">File</span><span class="val">${docLink(x, { type: 'Fax', date: fmt(f.date) })}</span><span></span></div>`).join('')}</div>`;
    foot = `<button class="btn" data-a="case" data-id="${f.caseId}">Open case</button><span style="flex:1"></span>${f.status === 'Failed' ? `<button class="btn primary" data-a="faxretry" data-id="${f.id}">${ic('refresh', 16)} Retry fax</button>` : f.status === 'Staged' ? `<button class="btn primary" data-a="faxretry" data-id="${f.id}">${ic('send', 16)} Send now</button>` : `<button class="btn" data-a="drawerclose">Close</button>`}`;
  }
  const enter = LAST_DRAWER !== d.type + d.id && !LAST_DRAWER;
  return `<div class="drawer-scrim ${enter ? 'enter' : ''}" data-a="drawerclose"></div><aside class="drawer ${enter ? 'enter' : ''}" role="dialog" aria-label="${esc(title)}"><div class="drawer-h"><h2>${esc(title)}</h2><button class="iconbtn" data-a="drawerclose" aria-label="Close">${ic('x', 18)}</button></div><div class="drawer-b">${body}</div><div class="drawer-f">${foot}</div></aside>`;
}
let LAST_DRAWER = null;

/* Row action popover */
function popMenu() {
  const p = S.pop; if (!p) return '';
  let items = '';
  if (p.id.startsWith('U')) items = `<button data-a="drawer" data-v="upload" data-id="${p.id}">${ic('file', 16)} Preview</button><button data-a="modal" data-v="attach" data-id="${p.id}">${ic('folder', 16)} Attach to case</button><button data-a="modal" data-v="assign" data-id="${p.id}">${ic('users', 16)} Assign to case manager</button><hr><button data-a="modal" data-v="archive" data-id="${p.id}" style="color:var(--danger)">${ic('x', 16)} Archive</button>`;
  else if (p.id.startsWith('x')) items = `<button data-a="modal" data-v="reverify" data-id="${p.id.slice(1)}">${ic('refresh', 16)} Reverify same insurance</button><button data-a="modal" data-v="newins" data-id="${p.id.slice(1)}">${ic('card', 16)} Verify new insurance</button><hr><button data-a="rev-none" data-id="${p.id.slice(1)}">${ic('check', 16)} No reverification needed</button>`;
  else items = `<button data-a="toast" data-v="Edit user opens in a side panel">${ic('edit', 16)} Edit</button><button data-a="toast" data-v="Password reset email sent">${ic('key', 16)} Send password reset</button><button data-a="toast" data-v="Invite email sent again">${ic('mail', 16)} Resend invite</button><hr><button data-a="toast" data-v="Remove asks for confirmation first" style="color:var(--danger)">${ic('x', 16)} Remove</button>`;
  const left = Math.max(12, Math.min(p.x - 240, window.innerWidth - 260));
  const top = p.y + 280 > window.innerHeight ? p.y - p.h - 8 - 200 : p.y + 6;
  return `<div class="menu-pop pop-fixed" style="position:fixed;left:${left}px;top:${Math.max(8, top)}px;width:240px">${items}</div>`;
}

/* Extra modals */
function extraModal(m, wrap) {
  if (m.type === 'attach') { const u = UPLOADS.find(x => x.id === m.id); const sug = byId(u.hint);
    return wrap('Attach to case', `<p style="margin:0">${ic('file', 14)} <b>${esc(u.file)}</b></p><label class="search" style="height:38px">${ic('search', 16)}<input placeholder="Search case ID, patient name or DOB" style="width:100%"></label>
      <div class="radio-cards">${[sug, CASES[(CASES.indexOf(sug) + 4) % CASES.length], CASES[(CASES.indexOf(sug) + 9) % CASES.length]].map((c, i) => `<label><input type="radio" name="att" value="${c.id}" ${i === 0 ? 'checked' : ''}><span><b>${esc(fullName(c))}</b> <span class="muted num">${c.id} · DOB ${fmt(c.dob)}</span>${i === 0 ? ' <span class="pill nodot t-ok" style="height:20px">Suggested match</span>' : ''}<br><span class="muted">${esc(c.caseStatus)} · ${esc(c.facility)}</span></span></label>`).join('')}</div>
      <div class="input"><label class="lbl" for="attype">File as</label><select id="attype">${UP_TYPES.map(t => `<option ${t === u.type ? 'selected' : ''}>${t}</option>`).join('')}</select></div>`, `<button class="btn" data-a="mclose">Cancel</button><button class="btn primary" data-a="attachsave" data-id="${u.id}">Attach</button>`); }
  if (m.type === 'assign') return wrap('Assign to case manager', `<div class="input"><label class="lbl" for="asg">Case manager</label><select id="asg">${TEAM.map(t => `<option>${t}</option>`).join('')}</select></div><div class="input"><label class="lbl" for="asgn">Note (optional)</label><textarea id="asgn"></textarea></div>`, `<button class="btn" data-a="mclose">Cancel</button><button class="btn primary" data-a="assignsave" data-id="${m.id}">Assign</button>`);
  if (m.type === 'archive') return wrap('Archive this upload?', `<p style="margin:0">Archived files leave this list. You can find them later in the archive filter.</p><div class="input"><label class="lbl" for="arr">Reason</label><select id="arr"><option>Duplicate</option><option>Sent in error</option><option>Not related to a patient</option></select></div>`, `<button class="btn" data-a="mclose">Cancel</button><button class="btn danger" data-a="archivesave" data-id="${m.id}">Archive</button>`);
  if (m.type === 'note') { const f = FACILITIES.find(x => x.id === S.detail.facility) || FACILITIES[0]; const nt = m.id != null ? f.notes[+m.id] : null;
    return wrap(nt ? 'Edit note' : 'Add note', `<div class="input"><label class="lbl" for="notetext">Note</label><textarea id="notetext" style="height:120px">${nt ? esc(nt.text) : ''}</textarea></div><label class="opt" style="padding:0"><input type="checkbox" id="notehl" ${nt && nt.hl ? 'checked' : ''}><span>Highlight this note</span></label>`, `<button class="btn" data-a="mclose">Cancel</button><button class="btn primary" data-a="notesave" data-id="${m.id ?? ''}">Save note</button>`); }
  if (m.type === 'notify') return wrap('Email facility', `<p style="margin:0">Send ${esc(m.id)} a list of patients with expiring coverage.</p><div class="input"><label class="lbl" for="nto">To</label><input id="nto" value="office@example.org"></div><div class="input"><label class="lbl" for="nmsg">Message</label><textarea id="nmsg" style="height:110px">Several of your patients have coverage ending in the next 60 days. Please log in to the provider portal to review and send updated information.</textarea></div>`, `<button class="btn" data-a="mclose">Cancel</button><button class="btn primary" data-a="mdone" data-v="Email sent to facility">Send email</button>`);
  if (m.type === 'reverify' || m.type === 'newins') { const c = byId(m.id); return wrap(m.type === 'reverify' ? 'Reverify same insurance' : 'Verify new insurance', `<p style="margin:0">Creates a benefits investigation case for <b>${esc(fullName(c))}</b> (${c.id}).</p>${m.type === 'newins' ? `<div class="input"><label class="lbl" for="nip">New payer</label><select id="nip">${CARRIERS.map(x => `<option>${x.name}</option>`).join('')}</select></div><div class="input"><label class="lbl" for="nim">Member ID</label><input id="nim"></div>` : `<div class="fields">${fld('Payer', c.payer, false)}${fld('Member ID', 'SHP88213407', false)}</div>`}`, `<button class="btn" data-a="mclose">Cancel</button><button class="btn primary" data-a="mdone" data-v="Reverification case created">Create case</button>`); }
  if (m.type === 'deny-acct') return wrap('Deny account request', `<div class="input"><label class="lbl" for="dar">Reason</label><select id="dar"><option>Could not verify employment at facility</option><option>Duplicate request</option><option>Facility not enrolled in program</option></select></div><div class="input"><label class="lbl" for="darn">Message to requester (optional)</label><textarea id="darn"></textarea></div>`, `<button class="btn" data-a="mclose">Cancel</button><button class="btn danger" data-a="acctdenysave" data-id="${m.id}">Deny request</button>`);
  return '';
}

/* Actions for round 3 screens */
const EXTRA = {
  pfo(t) { const st = S.pf[t.dataset.p]; const s = st[t.dataset.k]; s.has(t.dataset.v) ? s.delete(t.dataset.v) : s.add(t.dataset.v); },
  pfclear(t) { Object.values(S.pf[t.dataset.p]).forEach(s => s.clear()); S.pq[t.dataset.p] = ''; },
  pfx(t) { S.expanded[t.dataset.v] = !(S.expanded[t.dataset.v] ?? true); },
  fpA() { S.fpA = !S.fpA; },
  drawer(t, e) { e.stopPropagation(); S.drawer = { type: t.dataset.v, id: t.dataset.id }; S.pop = null; },
  drawerclose() { S.drawer = null; },
  rowmenu(t, e) { e.stopPropagation(); const r = t.getBoundingClientRect(); S.pop = S.pop && S.pop.id === t.dataset.v ? null : { id: t.dataset.v, x: r.right, y: r.bottom, h: r.height }; },
  patient(t) { S.detail.patient = t.dataset.id; S.route = 'patient'; S.drawer = null; scrollTo(0, 0); },
  carrier(t) { S.detail.org = t.dataset.id; S.detail.cstat = 'Open'; S.route = 'carrier'; scrollTo(0, 0); },
  pbm(t) { S.detail.org = t.dataset.id; S.detail.cstat = 'Open'; S.route = 'pbm'; scrollTo(0, 0); },
  facility(t) { if (!t.dataset.id) return; S.detail.facility = t.dataset.id; S.route = 'facility'; S.drawer = null; scrollTo(0, 0); },
  facpin(t, e) { e.stopPropagation(); const f = FACILITIES.find(x => x.id === t.dataset.id); f.pinned = !f.pinned; toast(f.pinned ? 'Facility pinned' : 'Facility unpinned'); },
  cstat(t) { S.detail.cstat = t.dataset.v; },
  tab2(t) { S.tab2[t.dataset.k] = t.dataset.v; },
  notehl(t) { const f = FACILITIES.find(x => x.id === S.detail.facility) || FACILITIES[0]; const nt = f.notes[+t.dataset.id]; nt.hl = !nt.hl; toast(nt.hl ? 'Note highlighted' : 'Highlight removed'); },
  noterm(t) { const f = FACILITIES.find(x => x.id === S.detail.facility) || FACILITIES[0]; f.notes.splice(+t.dataset.id, 1); toast('Note removed'); },
  notesave(t) { const f = FACILITIES.find(x => x.id === S.detail.facility) || FACILITIES[0]; const text = document.getElementById('notetext').value.trim() || 'New note'; const hl = document.getElementById('notehl').checked; if (t.dataset.id !== '') Object.assign(f.notes[+t.dataset.id], { text, hl }); else f.notes.unshift({ by: 'Janet Mills', when: 'Just now', text, hl }); S.modal = null; toast('Note saved'); },
  attachsave(t) { const u = UPLOADS.find(x => x.id === t.dataset.id); const cid = (document.querySelector('input[name="att"]:checked') || {}).value; u.done = true; S.modal = null; S.drawer = null; toast(`Attached to case ${cid}`); },
  assignsave(t) { const u = UPLOADS.find(x => x.id === t.dataset.id); u.assigned = document.getElementById('asg').value; S.modal = null; toast(`Assigned to ${u.assigned}`); },
  archivesave(t) { UPLOADS.find(x => x.id === t.dataset.id).done = true; S.modal = null; S.drawer = null; toast('Upload archived'); },
  commres(t) { const m = COMMS.find(x => x.id === t.dataset.id); m.status = m.status === 'Resolved' ? 'Open' : 'Resolved'; toast(m.status === 'Resolved' ? 'Marked resolved' : 'Reopened'); },
  commreply(t) { const m = COMMS.find(x => x.id === t.dataset.id); const v = document.getElementById('reply').value.trim(); if (!v) { toast('Write a reply first'); return; } m.reply = v; toast('Reply sent to provider'); },
  acctok(t) { const r = ACCT.find(x => x.id === t.dataset.id); r.status = 'Approved'; toast(`Approved. Invite sent to ${r.email}`); },
  acctdeny(t) { S.modal = { type: 'deny-acct', id: t.dataset.id }; },
  acctdenysave(t) { ACCT.find(x => x.id === t.dataset.id).status = 'Denied'; S.modal = null; toast('Request denied'); },
  faxretry(t) { const f = FAXLOG.find(x => x.id === t.dataset.id); f.status = 'Sending'; f.error = ''; f.job = f.job || '884999'; toast('Fax queued to send'); },
  'rev-none'(t) { toast('Marked as no reverification needed'); S.pop = null; }
};
/* ================= Find in case ================= */
S.find = ''; S.findOpen = false; S.findTarget = null;
const TABFN = () => ({ info: tabInfo, rx: tabRx, benefits: tabBenefits, auth: tabAuth, notes: tabNotes, messages: tabMessages, docs: tabDocs, faxes: tabFaxes, pap: tabPap, audit: tabAudit });
const norm = (s) => (s || '').replace(/\s+/g, ' ').trim();
function scanHtml(html, where, tab, out) {
  const d = new DOMParser().parseFromString(`<div>${html}</div>`, 'text/html');
  d.querySelectorAll('.fld, tbody tr, .msg, .noterow').forEach((el, i) => {
    const sec = el.closest('[data-sec]')?.dataset.sec || '';
    if (el.matches('.fld')) { const v = el.querySelector('.val'); out.push({ where, tab, i, sec, l: norm(el.querySelector('.lbl')?.textContent), v: norm(v?.textContent) }); return; }
    if (el.matches('tr')) { const heads = [...el.closest('table').querySelectorAll('th')].map(t => norm(t.textContent)); const cells = [...el.children].map(td => norm(td.textContent)); const v = cells.filter(Boolean).join(' · '); if (v) out.push({ where, tab, i, sec: sec || where, l: cells.find(Boolean) || heads[0], v, row: true }); return; }
    out.push({ where, tab, i, sec, l: norm(el.querySelector('.hd b')?.textContent), v: norm(el.querySelector('p')?.textContent) });
  });
}
let FIND_IDX = null, FIND_KEY = '';
function caseIndex(c) {
  const key = c.id + JSON.stringify(getAR(c).rounds.map(r => [r.stage, r.outcome])) + c.caseStatus + c.coverage + (arStore(c).cur || {}).id + arStore(c).hist.length;
  if (FIND_IDX && FIND_KEY === key) return FIND_IDX;
  const out = []; const saveMenu = S.menu; S.menu = null;
  scanHtml(patientFields(c) + kgroup('Case team', 'users', [teamList(c)]), 'Patient panel', null, out);
  const fns = TABFN(); TABS.forEach(([k, label]) => scanHtml(fns[k](c), label, k, out));
  S.menu = saveMenu; FIND_IDX = out; FIND_KEY = key; return out;
}
function findMatches() {
  const q = S.find.trim().toLowerCase(); if (q.length < 2 || S.route !== 'case') return null;
  const c = byId(S.caseId); return caseIndex(c).filter(e => (e.l + ' ' + e.v + ' ' + e.sec).toLowerCase().includes(q));
}
function findCounts() { const m = findMatches(); if (!m) return null; const o = {}; m.forEach(e => { if (e.tab) o[e.tab] = (o[e.tab] || 0) + 1; }); return o; }
function hiText(s, q) { const i = s.toLowerCase().indexOf(q); if (i < 0) return esc(s); return esc(s.slice(0, i)) + '<mark>' + esc(s.slice(i, i + q.length)) + '</mark>' + esc(s.slice(i + q.length)); }
function findBox(c) {
  const m = findMatches(); const q = S.find.trim().toLowerCase();
  let pop = '';
  if (m && S.findOpen) {
    const groups = {}; m.forEach(e => { (groups[e.where] = groups[e.where] || []).push(e); });
    const html = Object.entries(groups).map(([w, list]) => `<div class="fr-g"><div class="fr-h">${esc(w)}<span class="num">${list.length}</span></div>${list.slice(0, 4).map(e => `<button class="fr" data-a="findgo" data-tab="${e.tab || ''}" data-i="${e.i}"><span class="fr-l">${e.row ? esc(e.sec) : `${e.sec ? esc(e.sec) + ' · ' : ''}${hiText(e.l, q)}`}</span><span class="fr-v">${hiText(e.v.length > 90 ? e.v.slice(0, 90) + '…' : e.v, q)}</span></button>`).join('')}${list.length > 4 ? `<button class="fr more" data-a="findgo" data-tab="${list[0].tab || ''}" data-i="${list[0].i}">Show all ${list.length} in ${esc(w)}</button>` : ''}</div>`).join('');
    pop = `<div class="findpop" role="listbox">${html || `<div class="fr-empty">No fields match “${esc(S.find)}”.</div>`}</div>`;
  }
  return `<div class="findbox"><label class="search find ${S.find ? 'on' : ''}">${ic('search', 15)}<span class="sr">Find in this case</span><input id="findq" data-in="find" value="${esc(S.find)}" placeholder="Find in this case" autocomplete="off">${m ? `<span class="fcount num">${m.length}</span><button class="fclear" data-a="findclear" aria-label="Clear">${ic('x', 13)}</button>` : '<kbd>F</kbd>'}</label>${pop}</div>`;
}
function alignMega() { const btn = document.querySelector('.topnav .menu > button'); if (btn && getComputedStyle(btn.parentElement).display !== 'none') document.documentElement.style.setProperty('--mega-left', (btn.getBoundingClientRect().left + parseFloat(getComputedStyle(btn).paddingLeft)) + 'px'); }
window.addEventListener('resize', alignMega);
function afterRender() {
  alignMega();
  const q = S.find.trim().toLowerCase();
  if (S.route === 'case' && q.length >= 2) {
    document.querySelectorAll('.tabpanel .fld, .patientpane .fld, .tabpanel tbody tr, .tabpanel .msg, .tabpanel .noterow').forEach(el => {
      if (el.textContent.toLowerCase().includes(q) || (el.closest('[data-sec]')?.dataset.sec || '').toLowerCase().includes(q)) { el.classList.add('hit'); markIn(el, q); } else el.classList.add('miss');
    });
    document.querySelectorAll('.patientpane .kgroup, .tabpanel .block').forEach(g => { if (!g.querySelector('.hit')) g.classList.add('miss-g'); });
  }
  if (S.findTarget) {
    const t = S.findTarget; S.findTarget = null;
    const scope = t.tab ? document.querySelector('.tabpanel') : document.querySelector('.patientpane');
    const el = scope && scope.querySelectorAll('.fld, tbody tr, .msg, .noterow')[t.i];
    if (el) { el.scrollIntoView({ block: 'center', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); el.classList.add('flash'); }
  }
}
function markIn(el, q) {
  const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT); const nodes = []; while (w.nextNode()) nodes.push(w.currentNode);
  nodes.forEach(n => { const i = n.data.toLowerCase().indexOf(q); if (i < 0 || n.parentElement.closest('mark,button.copy')) return; const r = document.createRange(); r.setStart(n, i); r.setEnd(n, i + q.length); const mk = document.createElement('mark'); try { r.surroundContents(mk); } catch (e) { } });
}
Object.assign(EXTRA, {
  findgo(t) { const tab = t.dataset.tab; if (tab) S.tab = tab; else { S.side = true; S.dockL = true; } S.findOpen = false; S.findTarget = { tab, i: +t.dataset.i }; },
  findclear() { S.find = ''; S.findOpen = false; }
});
document.addEventListener('input', (e) => { if (e.target.dataset.in === 'find') { S.find = e.target.value; S.findOpen = true; render(); } });
document.addEventListener('focusin', (e) => { if (e.target.id === 'findq' && S.find && !S.findOpen) { S.findOpen = true; render(); } });
document.addEventListener('click', (e) => { if (S.findOpen && !e.target.closest('.findbox')) { S.findOpen = false; render(); } }, true);
document.addEventListener('keydown', (e) => {
  const inField = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName);
  if (S.route === 'case' && ((e.key === 'f' && !inField && !e.metaKey && !e.ctrlKey) || ((e.metaKey || e.ctrlKey) && e.key === 'f'))) { const el = document.getElementById('findq'); if (el) { e.preventDefault(); el.focus(); el.select(); } }
  if (e.target.id === 'findq') {
    if (e.key === 'Escape') { e.stopPropagation(); S.find = ''; S.findOpen = false; render(); }
    if (e.key === 'Enter') { const m = findMatches(); if (m && m.length) { const f = m.find(x => x.tab === S.tab) || m[0]; if (f.tab) S.tab = f.tab; S.findOpen = false; S.findTarget = { tab: f.tab, i: f.i }; render(); } }
  }
}, true);

/* ================= Inline edit in patient panel ================= */
S.edit = null;
const EDIT_LABEL = { name: 'Name', dob: 'Date of birth', phone: 'Mobile phone', phone2: 'Home phone', email: 'Email', best: 'Best time to reach', addr: 'Address', altName: 'Alternate contact', altPhone: 'Alternate contact phone', pac: 'Patient access coordinator', frm: 'Field reimbursement manager', pa: 'Patient advocate', cs: 'Clinical specialist' };
function saveEdit(k) {
  const el = document.getElementById('ped'); if (!el) return;
  const v = el.value.trim(); const c = byId(S.caseId); pd(c);
  if (!v) { toast('Enter a value or press Esc to cancel'); return; }
  if (k === 'name') { const w = v.replace(/\./g, '').split(/\s+/); c.first = w[0]; c.last = w.length > 1 ? w[w.length - 1] : c.last; c.mi = w.length > 2 ? w[1][0].toUpperCase() : c.mi; }
  else if (k === 'dob') { const m = v.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/); if (!m) { toast('Use the format MM/DD/YYYY'); return; } c.dob = new Date(+m[3], +m[1] - 1, +m[2]); }
  else if (k === 'phone') c.phone = v; else if (k === 'best') c.best = v; else if (k === 'altName') c.alt = v; else if (k === 'pac') c.owner = v;
  else if (k === 'addr') { const i = v.indexOf(','); c.street = i > 0 ? v.slice(0, i).trim() : v; c.city = i > 0 ? v.slice(i + 1).trim() : c.city; }
  else c.p[k] = v;
  S.edit = null; FIND_KEY = ''; toast(`${EDIT_LABEL[k]} updated`);
}
Object.assign(EXTRA, {
  pedit(t) { S.edit = t.dataset.k; },
  pcancel() { S.edit = null; },
  psave(t) { saveEdit(t.dataset.k); }
});
document.addEventListener('keydown', (e) => {
  if (e.target.id !== 'ped') return;
  if (e.key === 'Enter') { e.preventDefault(); saveEdit(e.target.dataset.k); render(); }
  if (e.key === 'Escape') { e.stopPropagation(); S.edit = null; render(); }
}, true);
const _afterRender0 = afterRender;
afterRender = function () { _afterRender0(); if (S.edit) { const el = document.getElementById('ped'); if (el && document.activeElement !== el) { el.focus(); if (el.select) el.select(); } } };

/* Collapsed side panels: the whole bar re-expands the panel */
document.addEventListener('click', (e) => {
  const bar = e.target.closest('.dock.closed, .withfilters.fclosed .fpanel');
  if (!bar) return;
  const tog = bar.querySelector('[data-a="dockL"],[data-a="dockR"],[data-a="side"],[data-a="fpA"]');
  if (!tog || e.target.closest('[data-a]') === tog) return;
  e.preventDefault(); e.stopPropagation(); tog.click();
}, true);
/* =====================================================================
   Round 6 flows: New case intake, Reassign (single + bulk), Status change
   ===================================================================== */
const IK_STEPS = [
  { id: 'identity', g: 'Patient', t: 'Identity and address', d: "Confirm the patient's identity and home address." },
  { id: 'contact', g: 'Patient', t: 'Contact', d: 'How the hub reaches the patient and a backup contact.' },
  { id: 'prescriber', g: 'Care team', t: 'Prescriber and pharmacy', d: 'The prescriber, their location and the specialty pharmacy.' },
  { id: 'team', g: 'Care team', t: 'Internal care team', d: 'Hub roles for this case. You can finish these later.', optional: true },
  { id: 'consent', g: 'Consent', t: 'Consent method', d: 'How the patient will give consent for this case.' },
  { id: 'insurance', g: 'Insurance', t: 'Insurance', d: 'Primary coverage plus any secondary or tertiary plans.' },
  { id: 'dosing', g: 'Prescription', t: 'Dosing', d: 'Pick the dosing schedule written on the prescription.' },
  { id: 'rx', g: 'Prescription', t: 'Prescription details', d: 'Refills, written date, dispensing and the signed form.' },
  { id: 'dx', g: 'Medical necessity', t: 'Diagnosis', d: 'Primary and secondary ICD-10 codes.' },
  { id: 'history', g: 'Medical necessity', t: 'Clinical history', d: 'Prior therapy and why surgery is not an option.', optional: true },
  { id: 'docs', g: 'Medical necessity', t: 'Supporting documents', d: 'Clinical documents that help the hub prepare the prior authorization.', optional: true },
  { id: 'review', g: 'Review', t: 'Review and submit', d: 'Check every section, fix anything flagged, then submit.' }
];
const US_STATES = ['AL', 'AZ', 'CA', 'CO', 'FL', 'GA', 'IL', 'IN', 'KY', 'MD', 'MA', 'MI', 'MN', 'NC', 'NJ', 'NY', 'OH', 'PA', 'SC', 'TN', 'TX', 'VA', 'WA'];
const DOSING = [
  { id: 'opt1', t: '14 days, then increase', d: 'Take 1 tablet (300 mg) by mouth daily for 14 days, then increase to 2 tablets (600 mg) daily for 16 days.', q: 'Initial quantity 46 · Refill quantity 60' },
  { id: 'opt2', t: '30 days with refill increase', d: 'Take 1 tablet (300 mg) by mouth daily for 30 days. Refill: take 2 tablets (600 mg) by mouth daily.', q: 'Initial quantity 30 · Refill quantity 60' },
  { id: 'opt3', t: '30 days, same dose', d: 'Take 1 tablet (300 mg) by mouth daily for 30 days.', q: 'Quantity 30' },
  { id: 'custom', t: 'Custom dosing', d: 'Enter dosing instructions for 300 mg tablets manually.', q: '' }
];
const DX_PRIMARY = [['E24.0', 'Pituitary'], ['E24.8', 'Adrenal'], ['E24.3', 'Ectopic ACTH'], ['C74.0', 'Adrenal carcinoma'], ['E24.9', 'Unknown source']];
const DX_SECONDARY = [['E11.65', 'Type 2 DM with hyperglycemia'], ['E08.8', 'DM due to underlying condition, unspecified complications'], ['E08.9', 'DM due to underlying condition, no complications'], ['R73.03', 'Prediabetes'], ['R73.09', 'Other abnormal glucose'], ['Z79.4', 'Long term use of insulin'], ['E88.81', 'Insulin resistance']];
const SURGERY = ['Prior surgery was unsuccessful', 'Patient refused surgery', 'Poor surgical wound healing potential', 'Source unknown or tumor could not be located', 'Patient is a high-risk surgical candidate', 'Patient has bilateral adrenal disease', 'Other'];
const SUPPORT_DOCS = ['Copy of insurance card (both sides)', 'Copy of Rx benefit card (both sides)', 'Lab report for tests used to diagnose endogenous Cushing syndrome (DST, LNSC, UFC)', 'Chart notes documenting hypercortisolism', 'Documentation of prior therapy'];
const CLOSE_REASONS = ['Duplicate', 'Data entry error', 'Patient expired', 'Patient withdrew', 'Prescriber withdrew', 'Incomplete enrollment', 'Unresponsive HCP or patient', 'Other'];
const PHARM_OPTS = ['Optime', 'CarePath Specialty', 'Meridian Rx'];

function ikNew(prefill) {
  const maxId = Math.max(...CASES.map(c => +c.id.slice(1))); const maxP = Math.max(...CASES.map(c => +c.pid.slice(1)));
  return { step: prefill ? 'identity' : 'search', left: new Set(), seen: new Set(), caseId: 'E' + (maxId + 7), pid: 'P0' + (maxP + 5),
    search: prefill ? { first: prefill.first, mi: prefill.mi, last: prefill.last, dob: fmt(prefill.dob), done: true, dups: [] } : { first: '', mi: '', last: '', dob: '', done: false, dups: [] },
    choice: prefill ? 'existing' : null, d: prefill ? { gender: prefill.gender, lang: prefill.lang, street: prefill.street, city: prefill.city.split(',')[0], state: (prefill.city.split(', ')[1] || '').split(' ')[0], zip: (prefill.city.match(/\d{5}/) || [''])[0], email: email(prefill), mobile: prefill.phone, best: prefill.best } : { lang: 'English' },
    policies: [], docs: {}, dx: new Set(), dx2: new Set(), surgery: new Set() };
}
S.ik = null;
const ikv = (k) => (S.ik.d[k] ?? '');
const IK_REQ = {
  identity: [['gender', 'Gender'], ['street', 'Street address'], ['city', 'City'], ['state', 'State'], ['zip', 'ZIP']],
  prescriber: [['prescriber', 'Prescriber'], ['location', 'Prescriber location']],
  consent: [['consent', 'Consent method']],
  dosing: [['dosing', 'Dosing schedule']],
  rx: [['refills', 'Number of refills'], ['written', 'Rx written date'], ['dispense', 'Dispensing'], ['rxfile', 'Signed prescription form']]
};
function ikMissing(id) {
  const I = S.ik, d = I.d, out = [];
  (IK_REQ[id] || []).forEach(([k, l]) => { if (!String(d[k] ?? '').trim()) out.push([k, l]); });
  if (id === 'identity' && d.zip && !/^\d{5}$/.test(d.zip)) out.push(['zip', 'ZIP must be 5 digits']);
  if (id === 'contact') { if (!d.mobile && !d.alt) out.push(['mobile', 'Mobile or alternate number']); if (!d.email && !d.noEmail) out.push(['email', 'Email, or check that the patient has none']); if (d.email && !/^\S+@\S+\.\S+$/.test(d.email)) out.push(['email', 'Enter a valid email address']); }
  if (id === 'consent' && d.consent === 'email' && !d.consentSent) out.push(['consent', 'Send the consent link']);
  if (id === 'consent' && d.consent === 'upload' && !d.consentFile) out.push(['consentFile', 'Signed enrollment form']);
  if (id === 'insurance' && !d.uninsured && !I.policies.length) out.push(['policy', 'At least one policy, or mark the patient uninsured']);
  if (id === 'dosing' && d.dosing === 'custom') { if (!d.cqty) out.push(['cqty', 'Quantity']); if (!d.cdays) out.push(['cdays', 'Days supply']); if (!d.cinstr) out.push(['cinstr', 'Dosing instructions']); }
  if (id === 'rx' && d.written && !/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(d.written)) out.push(['written', 'Use MM/DD/YYYY']);
  if (id === 'dx' && !I.dx.size) out.push(['dx', 'At least one primary diagnosis']);
  return out;
}
function ikState(id) {
  const I = S.ik; if (id === 'review') return I.step === 'review' ? 'cur' : 'todo';
  if (I.step === id) return 'cur';
  const miss = ikMissing(id).length;
  if (!I.seen.has(id)) return 'todo';
  return miss ? 'warn' : 'done';
}
const showErr = (id) => S.ik.left.has(id) && S.ik.seen.has(id) || S.ik.forceErr === id;
function fErr(stepId, key) { if (!showErr(stepId)) return ''; const m = ikMissing(stepId).find(x => x[0] === key); return m ? m[1] : ''; }
function ifield(stepId, k, label, o = {}) {
  const err = fErr(stepId, k); const v = ikv(k); const id = 'ik-' + k;
  let ctl;
  if (o.opts) ctl = `<select id="${id}" data-in="ik" data-k="${k}"><option value="">${o.ph || 'Select'}</option>${o.opts.map(x => `<option ${x === v ? 'selected' : ''}>${esc(x)}</option>`).join('')}</select>`;
  else if (o.area) ctl = `<textarea id="${id}" data-in="ik" data-k="${k}" placeholder="${esc(o.ph || '')}" rows="3">${esc(v)}</textarea>`;
  else ctl = `<input id="${id}" data-in="ik" data-k="${k}" value="${esc(v)}" placeholder="${esc(o.ph || '')}" ${o.type ? `type="${o.type}"` : ''} ${o.dis ? 'disabled' : ''} autocomplete="off">`;
  return `<div class="ikf ${o.span || 's6'} ${err ? 'err' : ''}"><label for="${id}">${esc(label)}${o.req ? ' <span class="req">*</span>' : o.opt ? ' <span class="optl">Optional</span>' : ''}</label>${ctl}${err ? `<span class="ikerr">${ic('info', 13)} ${esc(/must|valid|Use |Send|or check|At least|Choose/.test(err) ? err : err + ' is required')}</span>` : o.hint ? `<span class="ikhint">${esc(o.hint)}</span>` : ''}</div>`;
}
const ikCheck = (k, label, sub) => `<label class="ikcheck"><input type="checkbox" data-a="ikchk" data-k="${k}" ${ikv(k) ? 'checked' : ''}><span><b>${esc(label)}</b>${sub ? `<br><span class="muted">${esc(sub)}</span>` : ''}</span></label>`;

/* ---------- Step bodies ---------- */
function ikBody(id) {
  const I = S.ik, d = I.d;
  if (id === 'identity') return `<div class="ikgrid">${ifield(id, 'preferred', 'Preferred name', { span: 's6', opt: 1, ph: 'If different from legal name' })}${ifield(id, 'gender', 'Gender', { span: 's3', req: 1, opts: ['Female', 'Male', 'Nonbinary', 'Prefer not to say'] })}${ifield(id, 'lang', 'Preferred language', { span: 's3', opts: ['English', 'Spanish', 'Vietnamese', 'Chinese', 'Arabic', 'Other'] })}</div>
    <div class="iksub">Home address</div><div class="ikgrid">${ifield(id, 'street', 'Street address', { span: 's8', req: 1, ph: '123 Main Street' })}${ifield(id, 'street2', 'Apt, suite, unit', { span: 's4', opt: 1 })}${ifield(id, 'city', 'City', { span: 's5', req: 1 })}${ifield(id, 'state', 'State', { span: 's3', req: 1, opts: US_STATES })}${ifield(id, 'zip', 'ZIP', { span: 's4', req: 1, ph: '5 digits' })}</div>`;
  if (id === 'contact') return `<div class="ikgrid">${ifield(id, 'email', 'Email address', { span: 's8', ph: 'name@domain.com', dis: d.noEmail })}<div class="ikf s12">${ikCheck('noEmail', 'Patient has no email address', 'Consent links cannot be emailed to this patient.')}</div>
    ${ifield(id, 'mobile', 'Mobile number', { span: 's4', ph: '(999) 999-9999', hint: 'Mobile or alternate number is required.' })}${ifield(id, 'alt', 'Alternate number', { span: 's4', ph: '(999) 999-9999' })}${ifield(id, 'best', 'Best time to contact', { span: 's4', opt: 1, ph: 'Weekdays after 5pm' })}</div>
    <div class="iksub">Alternate contact</div><div class="ikgrid">${ifield(id, 'altName', 'Name', { span: 's5', opt: 1, ph: 'Full name' })}${ifield(id, 'altRel', 'Relationship', { span: 's3', opt: 1, opts: ['Spouse', 'Parent', 'Child', 'Sibling', 'Caregiver', 'Other'] })}${ifield(id, 'altPhone', 'Phone', { span: 's4', opt: 1, ph: '(999) 999-9999' })}</div>`;
  if (id === 'prescriber') {
    const fac = (PRESCRIBERS.find(p => p[0] === d.prescriber) || [])[1]; const f = FACILITIES.find(x => x.name === fac);
    const locs = f ? f.locs.map(l => `${l.name} · ${l.st}, ${l.city}`) : [];
    return `<div class="ikgrid">${ifield(id, 'prescriber', 'Prescriber', { span: 's12', req: 1, opts: PRESCRIBERS.map(p => p[0]), ph: 'Search or select a prescriber' })}
      ${f ? `<div class="ikf s12"><div class="ikcard">${ic('building', 18)}<span><b>${esc(f.name)}</b><br><span class="muted">${esc(f.type)} · NPI ${f.npi} · ${f.phone}</span></span></div></div>` : ''}
      ${ifield(id, 'location', 'Prescriber location', { span: 's12', req: 1, opts: locs, ph: f ? 'Select a location' : 'Select a prescriber first' })}
      ${ifield(id, 'pharmacy', 'Specialty pharmacy', { span: 's6', opt: 1, opts: PHARM_OPTS })}</div>`;
  }
  if (id === 'team') return `<div class="note-banner">${ic('info', 16)}<span>These roles can be filled in later. They are not required to submit the case.</span></div><div class="ikgrid">${ifield(id, 'pac', 'Patient access coordinator', { span: 's6', opts: ROLE_PEOPLE.pac.filter(x => x !== 'Unassigned') })}${ifield(id, 'frm', 'Field reimbursement manager', { span: 's6', opts: ROLE_PEOPLE.frm })}${ifield(id, 'pa', 'Patient advocate', { span: 's6', opts: ROLE_PEOPLE.pa })}${ifield(id, 'cs', 'Clinical specialist', { span: 's6', opts: ROLE_PEOPLE.cs })}</div>`;
  if (id === 'consent') {
    const opts = [['email', 'Email a link to the patient', 'The patient gets an email with a secure consent link.', 'mail'], ['upload', 'Upload the signed enrollment form', 'Attach the form the patient already signed.', 'upload'], ['pending', 'Signature pending on enrollment form', 'Consent is pending. The case can still be submitted.', 'clock'], ['declined', 'Patient declined consent', 'The patient refused to give consent.', 'x']];
    const err = fErr(id, 'consent');
    return `<div class="ikopts ${err && !d.consent ? 'err' : ''}">${opts.map(([k, t, s, i]) => `<label class="ikopt ${d.consent === k ? 'on' : ''}"><input type="radio" name="consent" data-a="ikset" data-k="consent" data-v="${k}" ${d.consent === k ? 'checked' : ''}><span class="oi">${ic(i, 18)}</span><span><b>${t}</b><br><span class="muted">${s}</span></span></label>`).join('')}</div>
      ${err && !d.consent ? `<span class="ikerr">${ic('info', 13)} Choose how consent will be provided</span>` : ''}
      ${d.consent === 'email' ? `<div class="ikpanel ${err && d.consent === 'email' ? 'err' : ''}">${d.consentSent ? `<span class="pill t-ok">Link sent ${esc(d.consentSent)}</span><span class="muted">Consent status: pending until the patient signs.</span><button class="link-btn" data-a="modal" data-v="consentsend">Resend</button>` : `<span>Send the consent link to <b>${esc(d.email || 'the patient')}</b>.</span><button class="btn sm primary" data-a="${d.email && !d.noEmail ? 'modal' : 'modal'}" data-v="${d.email && !d.noEmail ? 'consentsend' : 'emailreq'}">${ic('send', 14)} Send link</button>`}</div>` : ''}
      ${d.consent === 'upload' ? `<div class="ikpanel ${fErr(id, 'consentFile') ? 'err' : ''}">${d.consentFile ? `${ic('file', 16)} <b>${esc(d.consentFile)}</b><button class="link-btn" data-a="ikfile" data-k="consentFile" data-v="">Remove</button>` : `<span>PDF or image, up to 2 MB.</span><button class="btn sm" data-a="ikfile" data-k="consentFile" data-v="Signed_enrollment_form.pdf">${ic('upload', 14)} Choose file</button>`}</div>` : ''}
      ${d.consent === 'declined' ? `<div class="note-banner" style="background:var(--warn-50);color:var(--warn)">${ic('alert', 16)}<span>The case can be submitted, but benefits work cannot start until the patient consents.</span></div>` : ''}`;
  }
  if (id === 'insurance') {
    const err = fErr(id, 'policy');
    return `${ikCheck('uninsured', 'Patient has no insurance', 'Check this if the patient is uninsured. The case will route to the patient assistance program.')}
      ${d.uninsured ? '' : `<div class="iksub">Policies</div>
      ${I.policies.length ? `<div class="polist">${I.policies.map((p, i) => `<div class="polcard"><span class="polorder">${['Primary', 'Secondary', 'Tertiary'][i]}</span><div><b>${esc(p.carrier)}</b> <span class="muted">· ${esc(p.type || 'Type not set')}</span><br><span class="muted num">Policy ${esc(p.policy)}${p.group ? ' · Group ' + esc(p.group) : ''} · Cardholder: ${esc(p.rel)}</span></div><div class="polacts"><button class="btn sm ghost" data-a="modal" data-v="policy" data-id="${i}">${ic('edit', 14)} Edit</button><button class="btn sm ghost danger-t" data-a="polrm" data-id="${i}">${ic('x', 14)} Remove</button></div></div>`).join('')}</div>` : `<div class="ikempty ${err ? 'err' : ''}">${ic('card', 20)}<span>No policies added yet.</span></div>`}
      ${I.policies.length < 3 ? `<button class="btn" data-a="modal" data-v="policy">${ic('plus', 16)} Add ${['primary', 'secondary', 'tertiary'][I.policies.length]} policy</button>` : ''}
      ${err ? `<span class="ikerr">${ic('info', 13)} ${esc(err)}</span>` : ''}`}`;
  }
  if (id === 'dosing') {
    const err = fErr(id, 'dosing');
    return `<div class="ikproduct"><b>EMX-300 300 mg tablets</b><span class="muted">Initial dosage 300 mg once daily. May increase in 300 mg steps to 1200 mg daily based on response. Tablets should not be split, crushed or chewed.</span></div>
      <div class="ikopts ${err && !d.dosing ? 'err' : ''}">${DOSING.map(o => `<label class="ikopt ${d.dosing === o.id ? 'on' : ''}"><input type="radio" name="dosing" data-a="ikset" data-k="dosing" data-v="${o.id}" ${d.dosing === o.id ? 'checked' : ''}><span><b>${o.t}</b><br><span class="muted">${o.d}</span>${o.q ? `<br><span class="qty num">${o.q}</span>` : ''}</span></label>`).join('')}</div>
      ${err && !d.dosing ? `<span class="ikerr">${ic('info', 13)} Choose a dosing schedule</span>` : ''}
      ${d.dosing === 'custom' ? `<div class="ikgrid">${ifield(id, 'cinstr', 'Dosing instructions', { span: 's12', req: 1, area: 1, ph: 'e.g. Take 1 tablet by mouth twice daily' })}${ifield(id, 'cqty', 'Quantity', { span: 's4', req: 1 })}${ifield(id, 'cdays', 'Days supply', { span: 's4', req: 1 })}</div>` : ''}`;
  }
  if (id === 'rx') return `<div class="ikgrid">${ifield(id, 'refills', 'Number of refills', { span: 's4', req: 1, ph: '0 to 11' })}${ifield(id, 'written', 'Rx written date', { span: 's4', req: 1, ph: 'MM/DD/YYYY' })}${ifield(id, 'dispense', 'Dispensing', { span: 's4', req: 1, opts: ['Dispense as written', 'Substitution allowed'] })}</div>
    <div class="iksub">Signed prescription <span class="req">*</span></div>
    <div class="ikpanel ${fErr(id, 'rxfile') ? 'err' : ''}">${d.rxfile ? `${ic('file', 16)} <b>${esc(d.rxfile)}</b> <span class="muted">184 KB</span><button class="link-btn" data-a="ikfile" data-k="rxfile" data-v="">Remove</button>` : `<span>Upload the signed and dated prescription or enrollment form. PDF or image, up to 2 MB.</span><button class="btn sm" data-a="ikfile" data-k="rxfile" data-v="Rx_signed_${fmt(TODAY).replace(/\//g, '')}.pdf">${ic('upload', 14)} Choose file</button>`}</div>
    ${fErr(id, 'rxfile') ? `<span class="ikerr">${ic('info', 13)} Signed prescription form is required</span>` : ''}`;
  if (id === 'dx') { const err = fErr(id, 'dx');
    return `<div class="iksub">Primary diagnosis <span class="req">*</span></div><div class="ikchips ${err ? 'err' : ''}">${DX_PRIMARY.map(([c, t]) => `<button class="ikchip ${I.dx.has(c) ? 'on' : ''}" data-a="iktog" data-k="dx" data-v="${c}"><b>${c}</b> ${t}</button>`).join('')}</div>${err ? `<span class="ikerr">${ic('info', 13)} ${esc(err)}</span>` : ''}
      <div class="iksub">Secondary diagnosis <span class="optl">Optional</span></div><div class="ikchips">${DX_SECONDARY.map(([c, t]) => `<button class="ikchip ${I.dx2.has(c) ? 'on' : ''}" data-a="iktog" data-k="dx2" data-v="${c}"><b>${c}</b> ${t}</button>`).join('')}</div>
      <div class="ikgrid">${ifield(id, 'dxOther', 'Other related ICD-10 code', { span: 's4', opt: 1, ph: 'e.g. R73.9' })}</div>`; }
  if (id === 'history') return `<div class="ikgrid">${ifield(id, 'priorTx', 'Prior or current therapy', { span: 's12', opt: 1, area: 1, ph: 'Describe any prior or current Cushing therapy' })}</div>
    <div class="iksub">Why surgery is not an option <span class="optl">Optional</span></div><div class="ikchips">${SURGERY.map(s => `<button class="ikchip ${I.surgery.has(s) ? 'on' : ''}" data-a="iktog" data-k="surgery" data-v="${esc(s)}">${esc(s)}</button>`).join('')}</div>
    ${I.surgery.has('Other') ? `<div class="ikgrid">${ifield(id, 'surgOther', 'Describe', { span: 's12', area: 1 })}</div>` : ''}`;
  if (id === 'docs') return `<p class="muted" style="margin:0;max-width:70ch">Most plans need a prior authorization. Upload what you have and HealthPacer prepares the request. Check each item you include.</p>
    <div class="doclist">${SUPPORT_DOCS.map((t, i) => { const f = I.docs[i]; return `<div class="docrow ${f ? 'on' : ''}"><span class="dchk">${f ? ic('check', 14) : ''}</span><span>${esc(t)}${f ? `<br><span class="muted">${ic('file', 13)} ${esc(f)}</span>` : ''}</span>${f ? `<button class="btn sm ghost" data-a="ikdoc" data-id="${i}" data-v="">Remove</button>` : `<button class="btn sm" data-a="ikdoc" data-id="${i}" data-v="${['Insurance_card.pdf', 'Rx_benefit_card.pdf', 'Lab_report_DST_UFC.pdf', 'Chart_notes.pdf', 'Prior_therapy_notes.pdf'][i]}">${ic('upload', 14)} Upload</button>`}</div>`; }).join('')}</div>`;
  if (id === 'review') return ikReview();
  return '';
}
function ikReview() {
  const I = S.ik, d = I.d; const issues = IK_STEPS.filter(s => s.id !== 'review').map(s => [s, ikMissing(s.id)]).filter(([, m]) => m.length);
  const sec = (sid, title, rows) => { const bad = ikMissing(sid).length; return `<section class="rvsec ${bad ? 'bad' : ''}"><div class="rvh"><h3>${title}</h3>${bad ? `<span class="pill t-danger">Needs attention</span>` : `<span class="pill t-ok">Complete</span>`}<button class="btn sm ghost" data-a="ikgo" data-v="${sid}">${ic('edit', 14)} Edit</button></div><div class="rvgrid">${rows.map(([l, v]) => `<div><span class="lbl">${l}</span><span class="v ${v ? '' : 'none'}">${v ? esc(v) : 'Not provided'}</span></div>`).join('')}</div></section>`; };
  const dos = DOSING.find(o => o.id === d.dosing);
  return `${issues.length ? `<div class="rvalert">${ic('alert', 18)}<div><b>${issues.length} section${issues.length > 1 ? 's need' : ' needs'} attention before you can submit</b><ul>${issues.map(([s, m]) => `<li>${s.t}: ${m.map(x => x[1]).join(', ')} <button class="link-btn" data-a="ikgo" data-v="${s.id}" data-fix="1">Fix</button></li>`).join('')}</ul></div></div>` : `<div class="rvok">${ic('check', 18)}<b>Everything required is complete. You can submit the case.</b></div>`}
    ${sec('identity', 'Identity and address', [['Name', `${I.search.first} ${I.search.mi ? I.search.mi + ' ' : ''}${I.search.last}`], ['Date of birth', I.search.dob], ['Gender', d.gender], ['Language', d.lang], ['Address', [d.street, d.street2, d.city, d.state, d.zip].filter(Boolean).join(', ')]])}
    ${sec('contact', 'Contact', [['Email', d.noEmail ? 'No email' : d.email], ['Mobile', d.mobile], ['Alternate', d.alt], ['Best time', d.best], ['Alternate contact', [d.altName, d.altRel, d.altPhone].filter(Boolean).join(' · ')]])}
    ${sec('prescriber', 'Prescriber and pharmacy', [['Prescriber', d.prescriber], ['Location', d.location], ['Specialty pharmacy', d.pharmacy]])}
    ${sec('team', 'Internal care team', [['Coordinator', d.pac], ['Reimbursement manager', d.frm], ['Advocate', d.pa], ['Clinical specialist', d.cs]])}
    ${sec('consent', 'Consent', [['Method', { email: 'Email link', upload: 'Signed form uploaded', pending: 'Signature pending', declined: 'Patient declined' }[d.consent]], ['Detail', d.consent === 'email' ? (d.consentSent ? 'Link sent ' + d.consentSent : '') : d.consentFile || '']])}
    ${sec('insurance', 'Insurance', d.uninsured ? [['Coverage', 'Patient has no insurance']] : I.policies.length ? I.policies.map((p, i) => [['Primary', 'Secondary', 'Tertiary'][i], `${p.carrier} · Policy ${p.policy}`]) : [['Coverage', '']])}
    ${sec('dosing', 'Dosing', [['Schedule', dos ? dos.t : ''], ['Instructions', d.dosing === 'custom' ? d.cinstr : dos ? dos.d : '']])}
    ${sec('rx', 'Prescription details', [['Refills', d.refills], ['Written', d.written], ['Dispensing', d.dispense], ['Signed form', d.rxfile]])}
    ${sec('dx', 'Diagnosis', [['Primary', [...I.dx].join(', ')], ['Secondary', [...I.dx2].join(', ')]])}
    ${sec('docs', 'Supporting documents', [['Attached', Object.values(I.docs).filter(Boolean).join(', ')]])}`;
}

/* ---------- Search step ---------- */
function ikSearch() {
  const s = S.ik.search; const err = S.ik.searchErr || {};
  const f = (k, l, ph, span, req) => `<div class="ikf ${span} ${err[k] ? 'err' : ''}"><label for="iks-${k}">${l}${req ? ' <span class="req">*</span>' : ''}</label><input id="iks-${k}" data-in="iks" data-k="${k}" value="${esc(s[k])}" placeholder="${ph}" autocomplete="off">${err[k] ? `<span class="ikerr">${ic('info', 13)} ${l} is required</span>` : ''}</div>`;
  const dups = s.dups;
  return `<div class="page iksearch"><div class="pagehead"><div><div class="crumbs"><a href="#" data-a="go" data-r="cases">Cases</a>${ic('chevr', 12)}<span>New case</span></div><h1>Find or create a patient</h1><div class="muted" style="font-size:13.5px">Search first so the same patient does not get two records.</div></div><button class="btn ghost" data-a="iksample">${ic('refresh', 16)} Fill sample patient</button></div>
    <section class="card ikcardwrap"><div class="card-b"><form class="ikgrid" onsubmit="return false">${f('first', 'First name', 'First', 's3', 1)}${f('mi', 'Middle', 'Middle', 's2')}${f('last', 'Last name', 'Last', 's3', 1)}${f('dob', 'Date of birth', 'MM/DD/YYYY', 's2', 1)}<div class="ikf s2 ikbtncell"><button class="btn primary" data-a="iksearch" type="button">${ic('search', 16)} Search</button></div></form></div></section>
    ${s.done ? `<h2 class="iksecthead">${dups.length ? `${dups.length} possible match${dups.length > 1 ? 'es' : ''} found` : 'No existing patient found'}</h2>
    ${dups.map(c => `<label class="dupcard ${S.ik.choice === c.pid ? 'on' : ''}"><input type="radio" name="dup" data-a="ikchoose" data-v="${c.pid}" ${S.ik.choice === c.pid ? 'checked' : ''}><span class="avatar" style="background:var(--green-50);color:var(--green-700)">${c.first[0]}${c.last[0]}</span><span class="dupmeta"><b>${esc(fullName(c))}</b><span class="muted num">${c.pid} · DOB ${fmt(c.dob)} · ${esc(c.city)}</span><span class="dupact">Choose to add a new case for this existing patient</span></span><span>${pill(c.consent)}</span><span class="muted num">${patientOf(c.pid).cases.length} case${patientOf(c.pid).cases.length > 1 ? 's' : ''}</span></label>`).join('')}
    <label class="dupcard new ${S.ik.choice === 'new' ? 'on' : ''}"><input type="radio" name="dup" data-a="ikchoose" data-v="new" ${S.ik.choice === 'new' ? 'checked' : ''}><span class="avatar" style="background:var(--navy-50);color:var(--navy)">${ic('plus', 16)}</span><span class="dupmeta"><b>${dups.length ? 'None of these. Create a new patient and case' : 'Create a new patient and case'}</b><span class="muted">${dups.length ? 'Only continue if this is a different person with the same name and date of birth.' : `${esc(s.first)} ${esc(s.last)} · DOB ${esc(s.dob)}`}</span></span></label>
    <div class="ikfoot solo"><button class="btn" data-a="go" data-r="cases">Cancel</button><span class="sp"></span><button class="btn primary" data-a="ikstart" ${S.ik.choice ? '' : 'disabled'}>Continue ${ic('arrowr', 16)}</button></div>` : ''}</div>`;
}

/* ---------- Wizard page ---------- */
function viewIntake() {
  if (!S.ik) S.ik = ikNew();
  const I = S.ik;
  if (I.step === 'search') return ikSearch();
  const idx = IK_STEPS.findIndex(s => s.id === I.step); const step = IK_STEPS[idx];
  I.seen.add(step.id);
  const groups = [...new Set(IK_STEPS.map(s => s.g))];
  const nav = groups.map(g => { const ss = IK_STEPS.filter(s => s.g === g); const st = ss.map(s => ikState(s.id)); const gs = st.includes('cur') ? 'cur' : st.includes('warn') ? 'warn' : st.every(x => x === 'done') ? 'done' : 'todo';
    return `<div class="ikg ${gs}"><div class="ikgh"><span class="gi">${gs === 'done' ? ic('check', 13) : gs === 'warn' ? '!' : groups.indexOf(g) + 1}</span>${g}</div>${ss.length > 1 || ss[0].t !== g ? ss.map(s => { const x = ikState(s.id); return `<button class="iks ${x}" data-a="ikgo" data-v="${s.id}"><span class="sd"></span>${s.t}${s.optional ? ' <span class="optl">Optional</span>' : ''}</button>`; }).join('') : `<button class="iks ${st[0]}" data-a="ikgo" data-v="${ss[0].id}"><span class="sd"></span>${ss[0].t}</button>`}</div>`; }).join('');
  const d = I.d; const name = `${I.search.first} ${I.search.last}`.trim();
  const sum = [['Patient', name, `DOB ${I.search.dob}`, 'identity'], ['Prescriber', d.prescriber, d.pharmacy ? 'Pharmacy ' + d.pharmacy : '', 'prescriber'], ['Consent', { email: 'Email link', upload: 'Signed form', pending: 'Signature pending', declined: 'Declined' }[d.consent], '', 'consent'], ['Insurance', d.uninsured ? 'Uninsured' : I.policies[0] ? I.policies[0].carrier : '', I.policies.length > 1 ? `+${I.policies.length - 1} more` : '', 'insurance'], ['Prescription', (DOSING.find(o => o.id === d.dosing) || {}).t, d.refills ? `${d.refills} refills` : '', 'dosing'], ['Diagnosis', [...I.dx].join(', '), '', 'dx']];
  const last = idx === IK_STEPS.length - 1; const canSubmit = IK_STEPS.every(s => !ikMissing(s.id).length);
  return `<div class="page ikpage"><div class="pagehead"><div><div class="crumbs"><a href="#" data-a="go" data-r="cases">Cases</a>${ic('chevr', 12)}<span>New case</span></div><h1>New case <span class="muted" style="font:400 15px var(--f-body)">for ${esc(name)}</span></h1></div><button class="btn ghost" data-a="iksample">${ic('refresh', 16)} Fill sample data</button><button class="btn danger" data-a="modal" data-v="closecase">Close case</button></div>
  <div class="iklayout"><nav class="iknav card" aria-label="Intake steps"><div class="ikprog"><span class="num">${IK_STEPS.filter(s => ikState(s.id) === 'done').length} of ${IK_STEPS.length - 1}</span> steps complete<div class="bar"><i style="width:${Math.round(IK_STEPS.filter(s => ikState(s.id) === 'done').length / (IK_STEPS.length - 1) * 100)}%"></i></div></div>${nav}</nav>
  <div class="ikdeck">${IK_STEPS.slice(idx + 1, idx + 3).map((s, i) => `<div class="ikpeek p${i + 1}" aria-hidden="true"><span>${s.t}</span></div>`).join('')}${idx > 0 ? '<div class="ikpeek back" aria-hidden="true"></div>' : ''}<section class="card ikmain"><div class="ikhead"><span class="eyebrow">${step.g} · Step ${idx + 1} of ${IK_STEPS.length}</span><h2>${step.t}${step.optional ? ' <span class="optl">Optional</span>' : ''}</h2><p>${step.d}</p>${showErr(step.id) && ikMissing(step.id).length ? `<div class="ikflag">${ic('alert', 15)} ${ikMissing(step.id).length} required item${ikMissing(step.id).length > 1 ? 's are' : ' is'} missing on this step</div>` : ''}</div>
    <div class="ikbody">${ikBody(step.id)}</div>
    <div class="ikfoot"><button class="btn" data-a="iknav" data-v="-1" ${idx === 0 ? 'disabled' : ''}>${ic('chevl', 16)} Back</button><span class="sp"></span><span class="muted num" style="font-size:13px">Step ${idx + 1} of ${IK_STEPS.length}</span>${last ? `<button class="btn primary" data-a="iksubmit" ${canSubmit ? '' : 'disabled'}>${ic('check', 16)} Submit case</button>` : `<button class="btn primary" data-a="iknav" data-v="1">Continue ${ic('arrowr', 16)}</button>`}</div></section></div>
  <aside class="iksum card"><div class="card-h"><h3>Case summary</h3></div><div class="card-b"><div class="ikids"><div><span class="lbl">Patient ID</span><b class="num">${I.choice && I.choice !== 'new' ? I.choice : I.pid}</b></div><div><span class="lbl">Case ID</span><b class="num">${I.caseId}</b></div><div><span class="lbl">Created by</span><b>${ME}</b></div><div><span class="lbl">Started</span><b class="num">${fmt(TODAY)}</b></div></div>
    ${sum.map(([l, v, s, sid]) => { const st = ikState(sid); return `<button class="sumrow" data-a="ikgo" data-v="${sid}"><span class="sd ${st}"></span><span><span class="lbl">${l}</span><span class="v ${v ? '' : 'none'}">${v ? esc(v) : 'Not added yet'}</span>${s ? `<span class="s">${esc(s)}</span>` : ''}</span></button>`; }).join('')}</div></aside></div></div>`;
}
function viewCreated() {
  const c = byId(S.createdId);
  return `<div class="page"><section class="card created"><div class="okmark">${ic('check', 34)}</div><h1>Case created</h1><p class="muted">The case is in the queue and the care team has been notified.</p>
  <div class="createdgrid"><div><span class="lbl">Case ID</span><b class="num">${c.id}</b></div><div><span class="lbl">Patient</span><b>${esc(c.first)} ${esc(c.last)}</b><span class="muted num">${c.pid} · DOB ${fmt(c.dob)}</span></div><div><span class="lbl">Case status</span>${pill(c.caseStatus)}</div><div><span class="lbl">Assigned to</span><b>${esc(c.owner)}</b></div></div>
  <div class="nextsteps"><h3>What happens next</h3><ol><li>${c.consent === 'Consented' ? 'Consent is on file.' : c.consent === 'Declined' ? 'Patient declined consent. Benefits work is on hold.' : 'Waiting on patient consent.'}</li><li>Benefits investigation starts with ${esc(c.payer === 'No insurance' ? 'the patient assistance program' : c.payer)}.</li><li>Follow-up is set for ${fmt(c.follow)}.</li></ol></div>
  <div class="createdacts"><button class="btn" data-a="iknewagain">${ic('plus', 16)} Start another case</button><button class="btn" data-a="go" data-r="cases">Back to cases</button><button class="btn primary" data-a="case" data-id="${c.id}">View case ${ic('arrowr', 16)}</button></div></section></div>`;
}

/* ---------- Status and reassign modals ---------- */
const STATUS_REASONS = (s) => ['Closed', 'Complete'].includes(s) ? CLOSE_REASONS : s.startsWith('Pending') ? ['Waiting on prescriber', 'Waiting on payer', 'Waiting on patient', 'Missing documentation', 'Other'] : s === 'Active' ? ['Coverage approved', 'PAP approved', 'Bridge supply started', 'Other'] : ['Case progressed', 'Correction to earlier status', 'Other'];
const REASSIGN_REASONS = ['Workload balancing', 'Out of office', 'Territory change', 'Specialty match', 'Other'];
const _xm0 = extraModal;
extraModal = function (m, wrap) {
  if (m.type === 'status2') { const c = byId(S.caseId); const rs = STATUS_REASONS(m.v);
    return wrap('Change case status', `<div class="stchange">${pill(c.caseStatus)} ${ic('arrowr', 16)} ${pill(m.v)}</div>
      <div class="input ${m.err ? 'err' : ''}"><label class="lbl" for="streason">Reason <span class="req">*</span></label><select id="streason"><option value="">Select a reason</option>${rs.map(r => `<option ${m.reason === r ? 'selected' : ''}>${r}</option>`).join('')}</select>${m.err ? `<span class="ikerr">${ic('info', 13)} Choose a reason for this change</span>` : ''}</div>
      <div class="input"><label class="lbl" for="stnote">Note <span class="optl">Optional</span></label><textarea id="stnote" placeholder="Add context for the care team"></textarea></div>
      ${['Closed', 'Complete'].includes(m.v) ? `<div class="note-banner" style="background:var(--warn-50);color:var(--warn)">${ic('alert', 16)}<span>Closing stops follow-up reminders and removes the case from work queues.</span></div>` : ''}`,
      `<button class="btn" data-a="mclose">Cancel</button><button class="btn primary" data-a="st2save">Change status</button>`); }
  if (m.type === 'reassign') { const ids = m.id ? [m.id] : [...S.csel]; const cs = ids.map(byId); const single = cs.length === 1;
    const current = [...new Set(cs.map(c => c.owner))];
    return wrap(single ? 'Reassign case' : `Reassign ${cs.length} cases`, `${single ? `<div class="rcase"><span class="avatar" style="background:var(--green-50);color:var(--green-700)">${cs[0].first[0]}${cs[0].last[0]}</span><div><b>${esc(fullName(cs[0]))}</b><br><span class="muted num">${cs[0].id} · ${esc(cs[0].caseStatus)}</span></div></div>` : `<div class="rlist">${cs.slice(0, 5).map(c => `<span class="chip" style="padding-right:10px">${esc(fullName(c))} · ${c.id}</span>`).join('')}${cs.length > 5 ? `<span class="muted">+${cs.length - 5} more</span>` : ''}</div>`}
      <div class="fields">${fld('Currently assigned', current.join(', '), false)}</div>
      <div class="input ${m.err === 'who' ? 'err' : ''}"><label class="lbl" for="rwho">Reassign to <span class="req">*</span></label><select id="rwho"><option value="">Select a coordinator</option>${ROLE_PEOPLE.pac.filter(p => p !== 'Unassigned' && !(single && p === cs[0].owner)).map(p => `<option ${m.who === p ? 'selected' : ''}>${p}</option>`).join('')}</select>${m.err === 'who' ? `<span class="ikerr">${ic('info', 13)} Choose who takes over</span>` : ''}</div>
      <div class="input ${m.err === 'why' ? 'err' : ''}"><label class="lbl" for="rwhy">Reason <span class="req">*</span></label><select id="rwhy"><option value="">Select a reason</option>${REASSIGN_REASONS.map(r => `<option ${m.why === r ? 'selected' : ''}>${r}</option>`).join('')}</select>${m.err === 'why' ? `<span class="ikerr">${ic('info', 13)} Choose a reason</span>` : ''}</div>
      <div class="input"><label class="lbl" for="rnote">Handoff note <span class="optl">Optional</span></label><textarea id="rnote" placeholder="Anything the new coordinator should know"></textarea></div>
      <label class="opt" style="padding:0"><input type="checkbox" id="rnotify" checked><span>Email the new coordinator ${single ? 'about this case' : 'a list of these cases'}</span></label>`,
      `<button class="btn" data-a="mclose">Cancel</button><button class="btn primary" data-a="rsave" data-id="${m.id || ''}">${single ? 'Reassign case' : `Reassign ${cs.length} cases`}</button>`); }
  if (m.type === 'closecase') return wrap('Close this case?', `<p style="margin:0">The case for <b>${esc(S.ik.search.first)} ${esc(S.ik.search.last)}</b> will be closed and nothing entered so far is submitted.</p>
    <div class="input ${m.err ? 'err' : ''}"><label class="lbl" for="ccr">Reason <span class="req">*</span></label><select id="ccr"><option value="">Select a reason</option>${CLOSE_REASONS.map(r => `<option>${r}</option>`).join('')}</select>${m.err ? `<span class="ikerr">${ic('info', 13)} Choose a reason</span>` : ''}</div>`, `<button class="btn" data-a="mclose">Keep working</button><button class="btn danger" data-a="ikclose">Close case</button>`);
  if (m.type === 'consentsend') return wrap(`Send consent link to ${esc(S.ik.search.first)} ${esc(S.ik.search.last)}`, `<div class="input"><label class="lbl" for="cse">Email</label><input id="cse" value="${esc(S.ik.d.email || '')}"></div><div class="note-banner">${ic('info', 16)}<span>The link expires after 14 days. You can resend it from the case.</span></div>`, `<button class="btn" data-a="mclose">Cancel</button><button class="btn primary" data-a="iksend">${ic('send', 16)} Send email</button>`);
  if (m.type === 'emailreq') return wrap('Email address required', `<p style="margin:0">To email a consent link, add the patient's email address on the Contact step. If the patient has no email, choose another consent method.</p>`, `<button class="btn" data-a="mclose">Choose another method</button><button class="btn primary" data-a="ikgo" data-v="contact">Go to Contact</button>`);
  if (m.type === 'policy') { const p = m.id != null ? S.ik.policies[+m.id] : {}; const e = m.err || {};
    const pf = (k, l, o = {}) => `<div class="input ${e[k] ? 'err' : ''}" style="${o.half ? '' : ''}"><label class="lbl" for="pol-${k}">${l}${o.req ? ' <span class="req">*</span>' : ''}</label>${o.opts ? `<select id="pol-${k}"><option value="">Select</option>${o.opts.map(x => `<option ${p[k] === x ? 'selected' : ''}>${x}</option>`).join('')}</select>` : `<input id="pol-${k}" value="${esc(p[k] || '')}" placeholder="${o.ph || ''}">`}${e[k] ? `<span class="ikerr">${ic('info', 13)} ${l} is required</span>` : ''}</div>`;
    return wrap(m.id != null ? 'Edit policy' : `Add ${['primary', 'secondary', 'tertiary'][S.ik.policies.length]} policy`, `<div class="polgrid">${pf('carrier', 'Carrier', { req: 1, opts: [...CARRIERS.map(c => c.name), ...PBMS.map(c => c.name)] })}${pf('type', 'Type of insurance', { opts: ['Commercial', 'Medicare', 'Medicaid', 'PBM', 'Other'] })}${pf('policy', 'Policy ID', { req: 1 })}${pf('group', 'Group number')}${pf('rel', "Patient's relationship to cardholder", { req: 1, opts: ['Self', 'Spouse', 'Child', 'Other'] })}${pf('holder', 'Cardholder name', { ph: 'If not the patient' })}${pf('bin', 'Rx BIN')}${pf('pcn', 'Rx PCN')}</div>
      <button class="link-btn" data-a="orgnew" data-v="carriers">Carrier not listed? Add a carrier</button>`, `<button class="btn" data-a="mclose">Cancel</button><button class="btn primary" data-a="polsave" data-id="${m.id ?? ''}">Save policy</button>`); }
  return _xm0(m, wrap);
};

/* ---------- Actions ---------- */
function ikGo(id) { const I = S.ik; if (I.step !== 'search' && I.step !== id) I.left.add(I.step); I.step = id; S.modal = null; window.scrollTo(0, 0); }
Object.assign(EXTRA, {
  ikgo(t) { ikGo(t.dataset.v); if (t.dataset.fix) S.ik.forceErr = t.dataset.v; },
  iknav(t) { const i = IK_STEPS.findIndex(s => s.id === S.ik.step) + +t.dataset.v; if (i >= 0 && i < IK_STEPS.length) ikGo(IK_STEPS[i].id); },
  ikset(t) { S.ik.d[t.dataset.k] = t.dataset.v; },
  ikchk(t) { S.ik.d[t.dataset.k] = !S.ik.d[t.dataset.k]; if (t.dataset.k === 'noEmail' && S.ik.d.noEmail) S.ik.d.email = ''; },
  iktog(t) { const s = S.ik[t.dataset.k]; s.has(t.dataset.v) ? s.delete(t.dataset.v) : s.add(t.dataset.v); },
  ikfile(t) { S.ik.d[t.dataset.k] = t.dataset.v; if (t.dataset.v) toast('File attached'); },
  ikdoc(t) { S.ik.docs[t.dataset.id] = t.dataset.v; if (t.dataset.v) toast('Document attached'); },
  iksearch() { const s = S.ik.search; const e = {}; ['first', 'last', 'dob'].forEach(k => { if (!s[k].trim()) e[k] = 1; }); S.ik.searchErr = e; if (Object.keys(e).length) return;
    s.done = true; s.dups = CASES.filter(c => c.last.toLowerCase() === s.last.trim().toLowerCase() && (c.first.toLowerCase() === s.first.trim().toLowerCase() || fmt(c.dob) === s.dob.trim())).filter((c, i, a) => a.findIndex(x => x.pid === c.pid) === i); S.ik.choice = s.dups.length ? null : 'new'; },
  ikchoose(t) { S.ik.choice = t.dataset.v; },
  ikstart() { const I = S.ik; if (I.choice && I.choice !== 'new') { const c = patientOf(I.choice).c; const n = ikNew(c); n.choice = I.choice; n.pid = I.choice; n.caseId = I.caseId; S.ik = n; toast('Patient details carried over from the existing record'); } else I.step = 'identity'; },
  iksample() { const I = S.ik;
    if (I.step === 'search') { Object.assign(I.search, { first: 'Maya', mi: 'L', last: 'Ellison', dob: '03/12/1979' }); EXTRA.iksearch(); return; }
    Object.assign(I.d, { gender: 'Female', lang: 'English', street: '2210 Hillsboro Pike', city: 'Nashville', state: 'TN', zip: '37212', email: 'maya.ellison@examplemail.com', mobile: '(615) 555-0148', best: 'Weekdays after 5pm', altName: 'Jonah Ellison', altRel: 'Spouse', altPhone: '(615) 555-0177', prescriber: PRESCRIBERS[1][0], pharmacy: 'Optime', pac: ME, frm: 'Brandon Fields', pa: 'Alicia Moreno', consent: 'pending', dosing: 'opt1', refills: '5', written: '09/20/2026', dispense: 'Dispense as written', rxfile: 'Rx_signed_09202026.pdf' });
    const f = FACILITIES.find(x => x.name === PRESCRIBERS[1][1]); I.d.location = `${f.locs[0].name} · ${f.locs[0].st}, ${f.locs[0].city}`;
    if (!I.policies.length) I.policies.push({ carrier: 'Summit Health Plan', type: 'Commercial', policy: 'SHP77120455', group: 'GRP-5521', rel: 'Self', holder: '', bin: '610014', pcn: 'SUMRX' });
    I.dx.add('E24.0'); I.dx2.add('E11.65'); I.docs[0] = 'Insurance_card.pdf'; I.docs[2] = 'Lab_report_DST_UFC.pdf';
    IK_STEPS.forEach(s => I.seen.add(s.id)); toast('Sample data filled in'); },
  iksend() { const v = document.getElementById('cse').value.trim(); if (!v) return; S.ik.d.email = v; S.ik.d.consentSent = fmt(TODAY); S.modal = null; toast(`Consent link sent to ${v}`); },
  polsave(t) { const g = k => (document.getElementById('pol-' + k) || {}).value || ''; const p = { carrier: g('carrier'), type: g('type'), policy: g('policy'), group: g('group'), rel: g('rel'), holder: g('holder'), bin: g('bin'), pcn: g('pcn') };
    const e = {}; ['carrier', 'policy', 'rel'].forEach(k => { if (!p[k]) e[k] = 1; }); if (Object.keys(e).length) { S.modal = { ...S.modal, err: e }; return; }
    if (t.dataset.id !== '') S.ik.policies[+t.dataset.id] = p; else S.ik.policies.push(p); S.modal = null; toast(t.dataset.id !== '' ? 'Policy updated' : 'Policy added'); },
  polrm(t) { S.ik.policies.splice(+t.dataset.id, 1); toast('Policy removed'); },
  ikclose() { const r = document.getElementById('ccr').value; if (!r) { S.modal = { ...S.modal, err: 1 }; return; } S.modal = null; S.ik = null; S.route = 'cases'; toast(`Case closed: ${r}`); },
  iknewagain() { S.ik = ikNew(); S.route = 'intake'; },
  iksubmit() { const I = S.ik, d = I.d; if (IK_STEPS.some(s => ikMissing(s.id).length)) return;
    const ex = I.choice && I.choice !== 'new' ? patientOf(I.choice).c : null; const [pr, fac] = PRESCRIBERS.find(p => p[0] === d.prescriber);
    const dob = (() => { const m = I.search.dob.match(/(\d+)\/(\d+)\/(\d+)/); return m ? new Date(+m[3], +m[1] - 1, +m[2]) : TODAY; })();
    const c = { id: I.caseId, pid: ex ? ex.pid : I.pid, first: I.search.first, mi: I.search.mi ? I.search.mi[0].toUpperCase() : '', last: I.search.last, dob, gender: d.gender, prescriber: pr, facility: fac, payer: d.uninsured ? 'No insurance' : I.policies[0].carrier, pharmacy: d.pharmacy || 'Optime',
      qty: d.dosing === 'opt1' ? 46 : d.dosing === 'custom' ? +d.cqty || 30 : 30, ship: 'No Shipment', follow: addDays(TODAY, 2), caseStatus: 'Requested', coverage: d.uninsured ? 'No Insurance' : 'Pending', ar: 'None', pap: d.uninsured ? 'Pending' : 'Not Applicable',
      consent: { email: 'Pending', upload: 'Consented', pending: 'Pending', declined: 'Declined' }[d.consent], owner: d.pac || 'Unassigned', pinned: false, start: TODAY, updated: TODAY, phone: d.mobile || d.alt, street: d.street, city: `${d.city}, ${d.state} ${d.zip}`, lang: d.lang || 'English', best: d.best || 'Any time', alt: d.altName || 'Not provided', dx: `Cushing syndrome (${[...I.dx][0]})` };
    CASES.unshift(c); if (!ex) PATIENTS.unshift({ pid: c.pid, c, cases: [c.id], status: 'Active', pinned: false }); else patientOf(ex.pid).cases.push(c.id);
    S.createdId = c.id; S.ik = null; S.route = 'created'; window.scrollTo(0, 0); },
  /* status */
  setstatus(t) { S.menu = null; const c = byId(S.caseId); if (t.dataset.v !== c.caseStatus) S.modal = { type: 'status2', v: t.dataset.v }; },
  st2save() { const r = document.getElementById('streason').value; if (!r) { S.modal = { ...S.modal, err: 1 }; return; } const c = byId(S.caseId); const from = c.caseStatus; c.caseStatus = S.modal.v; AUDIT.unshift([`${fmt(TODAY)} ${fmtT(new Date())}`, ME, 'Case', 'Case status changed', `${from} to ${c.caseStatus}. Reason: ${r}`]); S.modal = null; FIND_KEY = ''; toast(`Status changed to ${c.caseStatus}`); },
  /* reassign */
  csel(t, e) { e.stopPropagation(); const id = t.dataset.id; S.csel.has(id) ? S.csel.delete(id) : S.csel.add(id); },
  cselall(t, e) { e.stopPropagation(); const ids = filtered().slice(0, 25).map(c => c.id); const all = ids.every(id => S.csel.has(id)); ids.forEach(id => all ? S.csel.delete(id) : S.csel.add(id)); },
  cselclear() { S.csel.clear(); },
  rsave(t) { const who = document.getElementById('rwho').value, why = document.getElementById('rwhy').value, notify = document.getElementById('rnotify').checked;
    if (!who) { S.modal = { ...S.modal, err: 'who', why }; return; } if (!why) { S.modal = { ...S.modal, err: 'why', who }; return; }
    const ids = t.dataset.id ? [t.dataset.id] : [...S.csel]; ids.forEach(id => { const c = byId(id); if (c.p) c.p.pac = who; c.owner = who; });
    AUDIT.unshift([`${fmt(TODAY)} ${fmtT(new Date())}`, ME, 'Case', ids.length > 1 ? `Bulk reassigned ${ids.length} cases` : 'Case reassigned', `To ${who}. Reason: ${why}`]);
    S.modal = null; if (!t.dataset.id) S.csel.clear(); FIND_KEY = ''; toast(`${ids.length > 1 ? ids.length + ' cases' : 'Case'} reassigned to ${who}${notify ? '. Email sent' : ''}`); }
});
S.csel = new Set();
document.addEventListener('input', (e) => {
  const k = e.target.dataset.k; if (!S.ik) return;
  if (e.target.dataset.in === 'ik') { S.ik.d[k] = e.target.value; if (k === 'prescriber') S.ik.d.location = ''; render(); }
  if (e.target.dataset.in === 'iks') { S.ik.search[k] = e.target.value; if (S.ik.searchErr) delete S.ik.searchErr[k]; S.ik.search.done = false; render(); }
});
document.addEventListener('change', (e) => { if (S.ik && e.target.tagName === 'SELECT' && e.target.dataset.in === 'ik') { S.ik.d[e.target.dataset.k] = e.target.value; if (e.target.dataset.k === 'prescriber') S.ik.d.location = ''; render(); } });
document.addEventListener('keydown', (e) => { if (e.key === 'Enter' && e.target.dataset && e.target.dataset.in === 'iks') { e.preventDefault(); EXTRA.iksearch(); render(); } });

Object.assign(EXTRA, {
  newcase() { S.ik = ikNew(); S.route = 'intake'; S.mega = null; window.scrollTo(0, 0); },
  newcasefor(t) { const p = patientOf(t.dataset.id); S.ik = ikNew(p.c); S.ik.choice = p.pid; S.ik.pid = p.pid; S.route = 'intake'; window.scrollTo(0, 0); }
});
function bulkBar() { if (!S.csel.size || !['cases'].includes(S.route)) return ''; return `<div class="bulkbar" role="region" aria-label="Bulk actions"><b class="num">${S.csel.size} selected</b><button class="btn sm primary" data-a="modal" data-v="reassign">${ic('users', 14)} Reassign</button><button class="btn sm" data-a="modal" data-v="bulkfu">${ic('cal', 14)} Set follow-up</button><button class="btn sm ghost" data-a="cselclear">Clear</button></div>`; }

/* ---------- Index-card step transitions ---------- */
let IK_MOVE = null;
function ikCapture(prevStep, nextStep) {
  if (!prevStep || prevStep === nextStep || prevStep === 'search' || !nextStep || nextStep === 'search') return null;
  const el = document.querySelector('.ikmain'); if (!el) return null;
  const a = IK_STEPS.findIndex(s => s.id === prevStep), b = IK_STEPS.findIndex(s => s.id === nextStep);
  const r = el.getBoundingClientRect(); const clone = el.cloneNode(true); clone.querySelectorAll('[id]').forEach(n => n.removeAttribute('id'));
  return { fwd: b > a, clone, r };
}
function ikPlay(m) {
  if (!m || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const card = document.querySelector('.ikmain'); if (!card) return;
  const g = document.createElement('div'); g.className = 'ikghost';
  Object.assign(g.style, { left: m.r.left + 'px', top: m.r.top + 'px', width: m.r.width + 'px', height: Math.min(m.r.height, window.innerHeight - m.r.top) + 'px' });
  m.clone.style.width = m.r.width + 'px'; g.appendChild(m.clone); document.body.appendChild(g);
  const E1 = 'cubic-bezier(.55,0,.35,1)', E2 = 'cubic-bezier(.2,.85,.25,1)';
  card.classList.add('flying'); setTimeout(() => card.classList.remove('flying'), 640);
  if (m.fwd) {
    g.style.zIndex = 5;
    g.animate([{ transform: 'none', opacity: 1 }, { transform: 'translateX(-46%) rotate(-3deg) scale(.96)', opacity: 0 }], { duration: 480, easing: E1, fill: 'forwards' }).onfinish = () => g.remove();
    card.animate([{ transform: 'translateX(22px) scale(.965)', opacity: .55, filter: 'saturate(.8)' }, { transform: 'translateX(-4px) scale(1.003)', opacity: 1, offset: .75 }, { transform: 'none', opacity: 1, filter: 'none' }], { duration: 560, delay: 60, easing: E2, fill: 'backwards' });
  } else {
    g.style.zIndex = 1;
    g.animate([{ transform: 'none', opacity: 1 }, { transform: 'translateX(22px) scale(.965)', opacity: 0 }], { duration: 420, easing: E1, fill: 'forwards' }).onfinish = () => g.remove();
    card.style.position = 'relative'; card.style.zIndex = 3;
    card.animate([{ transform: 'translateX(-46%) rotate(-3deg) scale(.96)', opacity: 0 }, { transform: 'translateX(5px) rotate(.2deg)', opacity: 1, offset: .75 }, { transform: 'none', opacity: 1 }], { duration: 560, easing: E2 });
  }
  document.querySelectorAll('.ikpeek').forEach((p, i) => p.animate([{ opacity: 0, transform: getComputedStyle(p).transform === 'none' ? 'translateX(-8px)' : getComputedStyle(p).transform + ' translateX(-10px)' }, { opacity: 1 }], { duration: 420, delay: 200 + i * 60, easing: E2, fill: 'backwards' }));
}
/* =====================================================================
   Authorization requests v2: consistent model, cancel/restart, history,
   case status kept in sync with each step
   ===================================================================== */
const AR2 = {};            // caseId -> { cur: request|null, hist: [], orig }
const EXC_TYPES = ['Medical exception', 'Formulary exception'];
function mkReq(c, type = 'Prior authorization') { return { id: 'AR' + Math.floor(1000 + Math.random() * 9000), type, med: 'EMX-300 300 mg tablet', payer: c.payer === 'No insurance' ? 'Summit Health Plan' : c.payer, created: stamp(), status: 'open', rounds: [{ kind: 'pa', stage: 0, outcome: null, dates: [] }] }; }
function arStore(c) {
  if (AR2[c.id]) return AR2[c.id];
  const st = { cur: null, hist: [], orig: { ar: c.ar, cov: c.coverage, cs: c.caseStatus } };
  AR2[c.id] = st;
  if (c.id === CASES[0].id) {
    st.cur = { id: 'AR4471', type: 'Prior authorization', med: 'EMX-300 300 mg tablet', payer: 'Summit Health Plan', created: '8/4/2026', status: 'open', rounds: [
      { kind: 'pa', stage: 6, outcome: 'Denied', dates: ['8/4/2026', '8/4/2026', '8/6/2026', '8/7/2026', '8/11/2026', '8/19/2026'], file: 'PA_Summit_EMX300_signed.pdf', reason: 'Step therapy not documented' },
      { kind: 'appeal', n: 1, stage: 4, outcome: 'Denied', dates: ['8/20/2026', '8/22/2026', '8/25/2026', '9/8/2026'], file: 'Appeal1_letter_of_medical_necessity.pdf', reason: 'Additional labs required' },
      { kind: 'appeal', n: 2, stage: 2, outcome: null, dates: ['9/10/2026', '9/15/2026'], file: 'Appeal2_packet_with_labs.pdf' }] };
  } else {
    const cs = c.caseStatus, req = mkReq(c); req.created = fmt(c.start);
    const pa = req.rounds[0];
    const denied = () => { pa.stage = 6; pa.outcome = 'Denied'; pa.reason = 'Step therapy not documented'; };
    if (c.payer === 'No insurance' && /^Pending (PA|Appeal)/.test(cs)) { c.caseStatus = 'Pending PAP'; req.none = true; }
    else if (['Intake', 'Requested', 'BI'].includes(cs) || c.payer === 'No insurance') req.none = true;
    else if (cs === 'Pending PA Submission') pa.stage = c.ar === 'Sent to HCP' || c.ar === 'HCP Transmission Pending' ? 3 : c.ar === 'Payer Transmission Pending' ? 4 : 1 + (c.id.charCodeAt(4) % 2);
    else if (cs === 'Pending PA Outcome') pa.stage = 5;
    else if (cs === 'Pending Appeal Submission') { denied(); req.rounds.push({ kind: 'appeal', n: 1, stage: c.id.charCodeAt(5) % 3, outcome: null, dates: [] }); }
    else if (cs === 'Pending Appeal Outcome') { denied(); req.rounds.push({ kind: 'appeal', n: 1, stage: 3, outcome: null, dates: [] }); }
    else if (c.ar === 'Cancelled') { pa.stage = 2; req.status = 'cancelled'; req.cancelReason = 'Patient changed insurance'; req.cancelled = '8/30/2026'; }
    else { pa.stage = 6; pa.outcome = 'Approved'; req.status = 'approved'; }
    if (req.status === 'cancelled') st.hist.push(req); else if (!req.none) st.cur = req;
    syncCase(c, true);
  }
  return st;
}
function getAR(c) { const s = arStore(c); return s.cur || { rounds: [], none: true, med: 'EMX-300 300 mg tablet', payer: c.payer, type: 'Prior authorization' }; }
const curRd = (r) => r.rounds[r.rounds.length - 1];
const appealsOf = (r) => r.rounds.filter(x => x.kind === 'appeal');
/* Keep case status, coverage and the authorization column consistent with the request */
function syncCase(c, init) {
  const s = AR2[c.id]; const r = s.cur;
  if (!r) { if (s.hist.length && s.hist[s.hist.length - 1].status === 'cancelled') c.ar = 'Cancelled'; else c.ar = 'None'; return; }
  const rd = curRd(r);
  if (r.status === 'approved') { c.ar = 'Complete'; c.coverage = 'Approved'; if (!init) c.caseStatus = 'Active'; return; }
  if (r.status === 'exhausted') { c.ar = 'Complete'; c.coverage = 'Denied'; return; }
  if (rd.kind === 'pa') {
    if (rd.outcome === 'Denied') { c.ar = 'Active'; c.coverage = 'Denied'; c.caseStatus = 'Pending Appeal Submission'; return; }
    c.ar = rd.stage >= 5 ? 'Sent to Payer' : rd.stage === 4 ? 'Payer Transmission Pending' : rd.stage === 3 ? 'HCP Transmission Pending' : 'Active';
    c.caseStatus = rd.stage >= 5 ? 'Pending PA Outcome' : 'Pending PA Submission'; c.coverage = 'Pending';
  } else {
    c.ar = 'Appeal in Progress'; c.coverage = 'Denied';
    c.caseStatus = rd.outcome === 'Denied' ? 'Pending Appeal Submission' : rd.stage >= 3 ? 'Pending Appeal Outcome' : 'Pending Appeal Submission';
  }
}
CASES.forEach(c => arStore(c));
function arLabel(c) {
  const s = arStore(c), r = s.cur;
  if (!r) return c.ar === 'Cancelled' ? 'Cancelled, not restarted' : 'Not started';
  if (r.status === 'approved') return 'Approved';
  if (r.status === 'exhausted') return 'Appeals exhausted';
  const rd = curRd(r);
  if (rd.kind === 'appeal') return `Appeal ${rd.n} of 3 · ${rd.outcome ? rd.outcome.toLowerCase() : `step ${Math.min(rd.stage + 1, 4)} of 4`}`;
  return rd.outcome === 'Denied' ? 'PA denied' : `PA step ${Math.min(rd.stage + 1, 6)} of 6`;
}
function nextStep(c) {
  const s = arStore(c), r = s.cur;
  if (!r) return c.caseStatus === 'BI' || c.caseStatus === 'Requested' || c.caseStatus === 'Intake' ? 'Complete benefits investigation' : c.ar === 'Cancelled' ? 'Decide whether to start a new authorization' : 'Start an authorization request';
  if (r.status === 'approved') return 'Authorization approved';
  if (r.status === 'exhausted') return 'Request a medical or formulary exception';
  const rd = curRd(r);
  if (rd.outcome === 'Denied') return `Start appeal ${appealsOf(r).length + 1} of 3`;
  return rd.kind === 'appeal' ? `Appeal ${rd.n} of 3: ${AP_STEPS[Math.min(rd.stage, 3)]}` : `PA: ${PA_STEPS[Math.min(rd.stage, 5)]}`;
}

/* ---------- Rendering ---------- */
function arStepper(rd, stopped) {
  const steps = rd.kind === 'pa' ? PA_STEPS : AP_STEPS;
  return `<div class="stepper">${steps.map((s, i) => { const last = i === steps.length - 1; const done = i < rd.stage || (last && rd.outcome); const bad = last && rd.outcome === 'Denied'; const cur = i === rd.stage && !rd.outcome && !stopped; const stop = stopped && i === rd.stage;
    return `<div class="step ${bad ? 'bad' : done ? 'done' : cur ? 'cur' : stop ? 'stop' : ''}"><div class="bar"></div><div class="st"><span class="ic">${bad ? ic('x', 12) : done ? ic('check', 12) : stop ? ic('x', 12) : i + 1}</span>${s}</div>${rd.dates[i] ? `<div class="when num">${rd.dates[i]}</div>` : stop ? '<div class="when">Stopped here</div>' : ''}</div>`; }).join('')}</div>`;
}
function roundCard(c, r, rd, isCur, stopped) {
  const steps = rd.kind === 'pa' ? PA_STEPS : AP_STEPS;
  const title = rd.kind === 'pa' ? r.type : `Appeal ${rd.n} of 3`;
  const key = r.id + rd.kind + (rd.n || 0);
  const collapsed = !isCur && !S.expanded[key];
  const status = rd.outcome ? pill(rd.outcome) : stopped ? pill('Cancelled') : pill('Pending', 'nodot').replace('Pending', `Step ${Math.min(rd.stage + 1, steps.length)} of ${steps.length}`);
  return `<div class="arcard ${collapsed ? 'collapsed' : ''} ${isCur ? 'live' : ''}"><div class="ar-h"><h3>${title}</h3>${status}${rd.reason ? `<span class="muted" style="font-size:13px">${esc(rd.reason)}</span>` : ''}<span class="sp"></span>${!isCur ? `<button class="btn sm ghost" data-a="arx" data-v="${key}">${collapsed ? 'Show steps' : 'Hide steps'} ${ic('chevd', 14)}</button>` : ''}</div>${arStepper(rd, stopped)}${isCur ? arAction(c, r, rd) : ''}${!isCur && rd.file ? `<div style="padding:0 16px 14px;font-size:13px">${ic('file', 14)} ${docLink(rd.file, { type: rd.kind === 'pa' ? 'Prior authorization' : 'Appeal', pages: rd.kind === 'pa' ? 3 : 6 })}</div>` : ''}</div>`;
}
function arAction(c, r, rd) {
  const payer = r.payer;
  const back = rd.stage > 0 && !rd.outcome ? `<button class="link-btn backstep" data-a="arback">${ic('chevl', 13)} Back a step</button>` : '';
  const A = (t, p, btns, cls = '', extra = '') => `<div class="action ${cls}"><div><h4>${t}</h4><p>${p}</p>${back}</div><div class="btns">${btns}</div>${extra}</div>`;
  if (rd.outcome === 'Approved') return A('Authorization approved', `Approved by ${esc(payer)} on ${rd.dates[rd.dates.length - 1] || stamp()}. Valid for 12 months. Coverage outcome is now Approved.`, `<button class="btn" data-a="tab" data-v="docs">View approval letter</button>`);
  if (rd.outcome === 'Denied') {
    const n = appealsOf(r).length;
    if (n >= 3) return A('All 3 appeals used', 'This request cannot be appealed again. Request a medical or formulary exception, or cancel the request.', EXC_TYPES.map((t, i) => `<button class="btn ${i ? '' : 'primary'}" data-a="arexc" data-v="${t}">${t}</button>`).join(''), 'bad');
    return A(`${rd.kind === 'pa' ? r.type : 'Appeal ' + rd.n} denied`, `Reason: ${esc(rd.reason || 'Not documented')}. ${3 - n} appeal${3 - n === 1 ? '' : 's'} left on this request.`, `<button class="btn primary" data-a="arappeal">Start appeal ${n + 1} of 3</button>`, 'bad');
  }
  const drop = (label) => `<div class="dropzone">${ic('upload', 20)}${rd.pendingFile ? `<span>${ic('file', 14)} <b>${esc(rd.pendingFile)}</b> attached</span><button class="link-btn" data-a="arfile" data-v="">Replace</button>` : `<span>Drop the ${label} here or</span><button class="btn sm" data-a="arfile" data-v="1">Choose file</button>`}</div>`;
  const decide = `<button class="btn danger" data-a="ardeny">Record denial</button><button class="btn primary" data-a="arapprove">Record approval</button>`;
  if (rd.kind === 'pa') {
    if (rd.stage === 0) { const meds = [['EMX-300 300 mg tablet', `Qty ${c.qty} · written 7/28/2026`], ['EMX-300 150 mg tablet', 'Qty 30 · written 6/2/2026']];
      return A('Select the medication for this request', 'Only medications on the active prescription are listed.', `<button class="btn primary" data-a="arnext" data-v="Medication selected">Continue ${ic('arrowr', 16)}</button>`, '', `<div class="radio-cards" style="grid-column:1/-1">${meds.map(([m, s]) => `<label><input type="radio" name="armed" data-a="armed" data-v="${m}" ${r.med === m ? 'checked' : ''}><span><b>${m}</b><br><span class="muted">${s}</span></span></label>`).join('')}</div>`); }
    if (rd.stage === 1) return A(`Download the ${esc(payer)} ${r.type === 'Prior authorization' ? 'PA' : r.type.toLowerCase()} form`, 'Patient, prescriber and diagnosis details are pre-filled. Review it before sending for signature.', `<button class="btn primary" data-a="arnext" data-v="Form downloaded">${ic('download', 16)} Download form</button>`);
    if (rd.stage === 2) return A('Upload the completed form', 'Upload the form after it is filled in. You can replace it until it is sent.', `<button class="btn primary" data-a="arnext" data-v="Form uploaded" ${rd.pendingFile ? '' : 'disabled'}>Continue ${ic('arrowr', 16)}</button>`, '', drop('completed form'));
    if (rd.stage === 3) return A('Get the prescriber’s signature', `${esc(c.prescriber)} at ${esc(c.facility)} gets a signature request in the provider portal and by fax.`, `<button class="btn" data-a="arnext" data-v="Marked as signed">Already signed</button><button class="btn primary" data-a="arnext" data-v="Signed form received from HCP">${ic('send', 16)} Send to HCP</button>`);
    if (rd.stage === 4) return A(`Fax to ${esc(payer)}`, 'Fax on file: 1 (800) 555-0140. The signed form and supporting documents are attached.', `<button class="btn primary" data-a="arnext" data-v="Faxed to payer">${ic('fax', 16)} Fax to payer</button>`);
    return A('Waiting on the payer decision', `Faxed on ${rd.dates[4] || stamp()}. Record the outcome when the determination letter arrives.`, decide, 'warn');
  }
  if (rd.stage === 0) return A(`Download the appeal ${rd.n} form`, `Pre-filled with the denial reference from the last decision.`, `<button class="btn primary" data-a="arnext" data-v="Appeal form downloaded">${ic('download', 16)} Download form</button>`);
  if (rd.stage === 1) return A('Upload the appeal packet', 'Signed appeal form, letter of medical necessity and any new clinical documents.', `<button class="btn primary" data-a="arnext" data-v="Appeal packet uploaded" ${rd.pendingFile ? '' : 'disabled'}>Continue ${ic('arrowr', 16)}</button>`, '', drop('appeal packet'));
  if (rd.stage === 2) return A(`Fax appeal ${rd.n} to ${esc(payer)}`, `Appeals fax on file: 1 (800) 555-0142. Packet: ${esc(rd.file || 'Appeal packet')}.`, `<button class="btn primary" data-a="arnext" data-v="Appeal faxed to payer">${ic('fax', 16)} Fax to payer</button>`);
  return A(`Waiting on the appeal ${rd.n} decision`, `Faxed on ${rd.dates[2] || stamp()}. This plan usually responds within 15 business days.`, decide, 'warn');
}
function tabAuth(c) {
  const s = arStore(c), r = s.cur;
  const menuBtn = `<div style="position:relative"><button class="btn" data-a="menu" data-v="armore">${ic('more', 16)} More</button>${S.menu === 'armore' ? `<div class="menu-pop" style="right:0;top:42px">${r && r.status === 'open' ? `<button data-a="modal" data-v="arcancel">${ic('x', 16)} Cancel request</button><hr>` : ''}<button data-a="arreset">${ic('refresh', 16)} Reset demo data</button></div>` : ''}</div>`;
  let head = '', body = '';
  if (!r) {
    const last = s.hist[s.hist.length - 1];
    head = tph('Authorization request', menuBtn);
    body = `<div class="arempty">${last && last.status === 'cancelled' ? `<div class="action bad" style="margin:0"><div><h4>Last request was cancelled</h4><p>${esc(last.type)} ${last.id} was cancelled on ${last.cancelled}. Reason: ${esc(last.cancelReason)}. Start a new request if coverage is still needed.</p></div><div class="btns"><button class="btn primary" data-a="modal" data-v="arnew">${ic('plus', 16)} Start new request</button></div></div>`
      : `<div class="action" style="margin:0"><div><h4>No authorization request yet</h4><p>${c.caseStatus === 'BI' || c.caseStatus === 'Requested' || c.caseStatus === 'Intake' ? 'Benefits investigation is not finished. You can still start a request if you already know the plan needs one.' : 'Start a request when the plan requires prior authorization.'}</p></div><div class="btns"><button class="btn primary" data-a="modal" data-v="arnew">${ic('plus', 16)} Start request</button></div></div>`}</div>`;
  } else {
    const used = appealsOf(r).filter(a => a.outcome).length; const rd = curRd(r);
    const dots = [0, 1, 2].map(i => `<i class="${i < used ? 'used' : rd.kind === 'appeal' && !rd.outcome && i === rd.n - 1 ? 'cur' : ''}"></i>`).join('');
    head = tph('Authorization request', `<span class="appealnote">Appeals used <span class="dots">${dots}</span> <span class="num">${used} of 3</span></span>${menuBtn}`);
    body = `<div class="armeta"><div><span class="lbl">Request</span><b class="num">${r.id}</b></div><div><span class="lbl">Type</span><b>${esc(r.type)}</b></div><div><span class="lbl">Medication</span><b>${esc(r.med)}</b></div><div><span class="lbl">Payer</span><b>${esc(r.payer)}</b></div><div><span class="lbl">Started</span><b class="num">${r.created}</b></div></div>
      <div class="arrounds">${r.rounds.map((x, i) => roundCard(c, r, x, i === r.rounds.length - 1, false)).reverse().join('')}</div>`;
  }
  const hist = s.hist.length ? `<div class="arhist"><div class="section-t">Earlier requests</div>${s.hist.slice().reverse().map(h => `<div class="arcard collapsed hist"><div class="ar-h"><h3>${esc(h.type)} <span class="muted num" style="font:400 13px var(--f-body)">${h.id}</span></h3>${pill(h.status === 'cancelled' ? 'Cancelled' : h.status === 'approved' ? 'Approved' : 'Denied')}<span class="muted" style="font-size:13px">${h.status === 'cancelled' ? `Cancelled ${h.cancelled} · ${esc(h.cancelReason)}` : ''}</span><span class="sp"></span><button class="btn sm ghost" data-a="arx" data-v="${h.id}h">${S.expanded[h.id + 'h'] ? 'Hide steps' : 'Show steps'} ${ic('chevd', 14)}</button></div>${S.expanded[h.id + 'h'] ? h.rounds.map((x, i) => arStepper(x, h.status === 'cancelled' && i === h.rounds.length - 1)).join('') : ''}</div>`).join('')}</div>` : '';
  return `${head}<div style="padding:0 16px 16px;display:flex;flex-direction:column;gap:12px">${body}${hist}</div>`;
}

/* ---------- Modals ---------- */
const AR_CANCEL = ['Patient changed insurance', 'Coverage approved without PA', 'Prescriber stopped therapy', 'Duplicate request', 'Patient withdrew', 'Other'];
const _xm1 = extraModal;
extraModal = function (m, wrap) {
  const c = byId(S.caseId);
  if (m.type === 'arcancel') { const r = arStore(c).cur;
    return wrap('Cancel this authorization request?', `<p style="margin:0">${esc(r.type)} ${r.id} for ${esc(fullName(c))} stops where it is. Nothing more is sent to the payer. You can start a new request later.</p>
      <div class="input"><label class="lbl" for="arcs">Case status after cancelling</label><select id="arcs"><option value="">Keep ${esc(c.caseStatus)}</option>${['BI', 'Pending PAP', 'Closed'].filter(x => x !== c.caseStatus).map(x => `<option>${x}</option>`).join('')}</select></div>
      <div class="input ${m.err ? 'err' : ''}"><label class="lbl" for="arcr">Reason <span class="req">*</span></label><select id="arcr"><option value="">Select a reason</option>${AR_CANCEL.map(x => `<option>${x}</option>`).join('')}</select>${m.err ? `<span class="ikerr">${ic('info', 13)} Choose a reason</span>` : ''}</div>`,
      `<button class="btn" data-a="mclose">Keep request</button><button class="btn danger" data-a="arcancelsave">Cancel request</button>`); }
  if (m.type === 'arnew') return wrap('Start authorization request', `<div class="radio-cards">${['Prior authorization', ...EXC_TYPES].map((t, i) => `<label><input type="radio" name="artype" value="${t}" ${i === 0 ? 'checked' : ''}><span><b>${t}</b><br><span class="muted">${i === 0 ? 'Standard PA with the payer, up to 3 appeals.' : i === 1 ? 'Ask the payer to cover a drug their criteria exclude.' : 'Ask the plan to cover a drug that is not on its formulary.'}</span></span></label>`).join('')}</div>
      <div class="fields">${fld('Payer', c.payer === 'No insurance' ? 'No insurance on file' : c.payer, false)}${fld('Medication', 'EMX-300 300 mg tablet', false)}</div>`, `<button class="btn" data-a="mclose">Cancel</button><button class="btn primary" data-a="arnewsave">Start request</button>`);
  return _xm1(m, wrap);
};

/* ---------- Actions ---------- */
function arLog(c, action, detail) { AUDIT.unshift([`${fmt(TODAY)} ${fmtT(new Date())}`, ME, 'Authorization', action, detail || '']); FIND_KEY = ''; }
function arCur() { const c = byId(S.caseId); const r = arStore(c).cur; return [c, r, r && curRd(r)]; }
Object.assign(EXTRA, {
  armed(t) { const [, r] = arCur(); r.med = t.dataset.v; },
  arnext(t) { const [c, r, rd] = arCur(); rd.dates[rd.stage] = stamp(); if (rd.pendingFile) { rd.file = rd.pendingFile; rd.pendingFile = null; } rd.stage++; syncCase(c); arLog(c, t.dataset.v || 'Step completed', `${r.type} ${r.id}`); toast(t.dataset.v || 'Step completed'); },
  arback() { const [c, r, rd] = arCur(); if (rd.stage > 0) { rd.stage--; rd.dates.length = rd.stage; syncCase(c); toast('Moved back a step'); } },
  arfile(t) { const [, , rd] = arCur(); rd.pendingFile = t.dataset.v ? (rd.kind === 'pa' ? 'PA_form_completed.pdf' : `Appeal${rd.n}_packet.pdf`) : null; },
  arapprove() { const [c, r, rd] = arCur(); rd.dates[rd.stage] = stamp(); rd.outcome = 'Approved'; rd.stage++; r.status = 'approved'; syncCase(c); arLog(c, `${rd.kind === 'pa' ? r.type : 'Appeal ' + rd.n} approved`, r.payer); toast('Approval recorded. Case is now Active'); },
  ardeny() { S.modal = { type: 'deny' }; },
  ardenysave() { const [c, r, rd] = arCur(); rd.dates[rd.stage] = stamp(); rd.outcome = 'Denied'; rd.reason = document.getElementById('dr').value; rd.stage++; if (rd.kind === 'appeal' && rd.n >= 3) r.status = 'exhausted'; syncCase(c); S.modal = null; arLog(c, `${rd.kind === 'pa' ? r.type : 'Appeal ' + rd.n} denied`, rd.reason); toast('Denial recorded'); },
  arappeal() { const [c, r] = arCur(); const n = appealsOf(r).length + 1; r.rounds.push({ kind: 'appeal', n, stage: 0, outcome: null, dates: [] }); syncCase(c); arLog(c, `Appeal ${n} started`, r.id); toast(`Appeal ${n} of 3 started`); },
  arexc(t) { const [c] = arCur(); const s = arStore(c); s.hist.push(s.cur); s.cur = mkReq(c, t.dataset.v); syncCase(c); arLog(c, `${t.dataset.v} started`, s.cur.id); toast(`${t.dataset.v} request started`); },
  arcancelsave() { const v = document.getElementById('arcr').value; if (!v) { S.modal = { ...S.modal, err: 1 }; return; } const [c, r] = arCur(); const s = arStore(c); const ns = document.getElementById('arcs').value; r.status = 'cancelled'; r.cancelReason = v; r.cancelled = stamp(); s.hist.push(r); s.cur = null; syncCase(c); if (ns) c.caseStatus = ns; S.modal = null; arLog(c, 'Authorization request cancelled', v); toast('Authorization request cancelled'); },
  arnewsave() { const c = byId(S.caseId); const t = (document.querySelector('input[name="artype"]:checked') || {}).value || 'Prior authorization'; const s = arStore(c); if (s.cur) s.hist.push(s.cur); s.cur = mkReq(c, t); syncCase(c); S.modal = null; arLog(c, `${t} started`, s.cur.id); toast(`${t} ${s.cur.id} started`); },
  arreset() { const c = byId(S.caseId); const o = arStore(c).orig; delete AR2[c.id]; c.ar = o.ar; c.coverage = o.cov; c.caseStatus = o.cs; arStore(c); S.menu = null; FIND_KEY = ''; toast('Demo data reset for this case'); }
});
/* ================= Smooth side panel expand/collapse with edge ripple ================= */
function dockKey(el) { return (el.getAttribute('aria-label') || '') + (el.classList.contains('right') ? ':R' : ':L'); }
function dockWidths() {
  const m = {};
  document.querySelectorAll('.dock').forEach(d => { const r = d.getBoundingClientRect(); m[dockKey(d)] = { w: r.width, closed: d.classList.contains('closed'), rect: r, clone: document.body.classList.contains('float-docks') && !d.classList.contains('closed') ? d.cloneNode(true) : null }; });
  const c = document.querySelector('.stack-docks .workspace > .center');
  if (c) { const cs = getComputedStyle(c); m.__center = { ml: cs.marginLeft, mr: cs.marginRight, t: cs.transform, sh: cs.boxShadow }; document.querySelectorAll('.stack-docks .workspace > .dock').forEach(d => { const k = dockKey(d); if (m[k]) { const ds = getComputedStyle(d); m[k].t = ds.transform; m[k].f = ds.filter; } }); }
  const wf = document.querySelector('.withfilters'); if (wf) m.__wf = { cols: getComputedStyle(wf).gridTemplateColumns, closed: wf.classList.contains('fclosed') };
  return m;
}
function animateDocks(pre) {
  if (!pre || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const spring = (a, b) => { const d = b - a, o = Math.sign(d) * Math.min(14, Math.abs(d) * .05); return [[a, 0, 'cubic-bezier(.5,0,.25,1)'], [b + o, .62, 'ease-in-out'], [b - o * .45, .8, 'ease-in-out'], [b + o * .15, .92, 'ease-out'], [b, 1]].map(([w, offset, easing]) => easing ? { width: w + 'px', offset, easing } : { width: w + 'px', offset }); };
  const floating = document.body.classList.contains('float-docks');
  if (document.body.classList.contains('stack-docks')) { stackAnimate(pre); return; }
  document.querySelectorAll('.dock').forEach(d => {
    const p = pre[dockKey(d)]; if (!p) return; const closed = d.classList.contains('closed'); if (p.closed === closed) return;
    if (floating) { foldDock(d, p, closed); return; }
    const to = d.getBoundingClientRect().width;
    d.animate(spring(p.w, to), { duration: 720 });
    const body = d.querySelector('.dock-body');
    if (!closed && body) body.animate([{ opacity: 0, transform: `translateX(${d.classList.contains('right') ? 16 : -16}px)` }, { opacity: 1, transform: 'none' }], { duration: 420, delay: 140, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'backwards' });
    ripple(d, closed);
  });
  const wf = document.querySelector('.withfilters'); const pw = pre.__wf;
  if (wf && pw && pw.closed !== wf.classList.contains('fclosed')) {
    const to = getComputedStyle(wf).gridTemplateColumns;
    wf.animate([{ gridTemplateColumns: pw.cols }, { gridTemplateColumns: to }], { duration: 560, easing: 'cubic-bezier(.5,0,.25,1)' });
    const fp = wf.querySelector('.fpanel'); if (fp) ripple(fp, wf.classList.contains('fclosed'));
  }
}
function ripple(el, closed) {
  el.classList.remove('rip-open', 'rip-close'); void el.offsetWidth;
  const cls = closed ? 'rip-close' : 'rip-open';
  setTimeout(() => { el.classList.add(cls); setTimeout(() => el.classList.remove(cls), 900); }, closed ? 430 : 450);
}

/* Floating panels: fold out from an edge-on card, fold back to the edge */
function foldDock(d, p, closed) {
  const right = d.classList.contains('right'); const sgn = right ? 1 : -1;
  const to = d.getBoundingClientRect().width;
  const EASE = 'cubic-bezier(.2,.8,.2,1)';
  if (!closed) d.animate([{ width: p.w + 'px' }, { width: to + 'px' }], { duration: 460, easing: 'cubic-bezier(.5,0,.25,1)', fill: 'backwards' });
  if (!closed) {
    d.style.transformOrigin = right ? '100% 50%' : '0% 50%';
    d.animate([
      { transform: `perspective(1400px) rotateY(${sgn * 84}deg) scaleY(.92)`, opacity: .6, offset: 0 },
      { transform: `perspective(1400px) rotateY(${sgn * -7}deg) translateZ(30px) scaleY(1.01)`, opacity: 1, offset: .7 },
      { transform: `perspective(1400px) rotateY(${sgn * 2}deg)`, offset: .88 },
      { transform: 'none', opacity: 1, offset: 1 }], { duration: 760, easing: EASE });
    const body = d.querySelector('.dock-body');
    if (body) body.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 360, delay: 260, fill: 'backwards' });
  } else if (p.clone) {
    const g = p.clone; g.classList.add('fold-ghost'); g.querySelectorAll('[id]').forEach(n => n.removeAttribute('id'));
    Object.assign(g.style, { position: 'fixed', left: p.rect.left + 'px', top: p.rect.top + 'px', width: p.rect.width + 'px', height: p.rect.height + 'px', margin: 0, zIndex: 40, transformOrigin: right ? '100% 50%' : '0% 50%' });
    document.body.appendChild(g);
    const gb = g.querySelector('.dock-body'); if (gb) gb.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, delay: 160, easing: 'ease-in', fill: 'forwards' });
    g.animate([
      { transform: 'none', opacity: 1, offset: 0 },
      { transform: `perspective(1400px) rotateY(${sgn * 2}deg)`, offset: .12 },
      { transform: `perspective(1400px) rotateY(${sgn * -7}deg) translateZ(30px) scaleY(1.01)`, opacity: 1, offset: .3 },
      { transform: `perspective(1400px) rotateY(${sgn * 84}deg) scaleY(.92)`, opacity: .6, offset: 1 }], { duration: 700, easing: 'cubic-bezier(.55,0,.75,.35)', fill: 'forwards' }).onfinish = () => g.remove();
    d.animate([{ width: p.w + 'px' }, { width: to + 'px' }], { duration: 460, delay: 300, easing: 'cubic-bezier(.75,0,.5,1)', fill: 'backwards', composite: 'replace' });
    d.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 160, delay: 700, fill: 'backwards' });
  }
  setTimeout(() => ripple(d, closed), closed ? 360 : 0);
}

/* Layered cards (H): the page slides back / forward over the tucked panels */
function stackAnimate(pre) {
  const EASE = 'cubic-bezier(.2,.8,.2,1)', DUR = 640;
  let changed = false;
  document.querySelectorAll('.workspace > .dock').forEach(d => {
    const p = pre[dockKey(d)]; if (!p || p.t === undefined) return; const closed = d.classList.contains('closed'); if (p.closed === closed) return;
    changed = true;
    const ds = getComputedStyle(d);
    d.animate([{ transform: p.t, filter: p.f }, { transform: ds.transform, filter: ds.filter }], { duration: DUR, easing: EASE });
    const body = d.querySelector('.dock-body'), head = [...d.querySelectorAll('.dock-head > :not(svg):not(.vlabel)')], lab = d.querySelector('.vlabel');
    const shift = d.classList.contains('right') ? 24 : -24;
    if (closed) {
      [body, ...head].forEach(el => el && el.animate([{ opacity: 1, visibility: 'visible' }, { opacity: 0, visibility: 'visible' }], { duration: 240, easing: 'ease-in' }));
      if (lab) lab.animate([{ opacity: 0, transform: 'rotate(180deg) translateY(10px)' }, { opacity: 1, transform: 'rotate(180deg)' }], { duration: 360, delay: 320, easing: EASE, fill: 'backwards' });
    } else {
      if (lab) lab.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 180, easing: 'ease-in' });
      [body, ...head].forEach(el => el && el.animate([{ opacity: 0, transform: `translateX(${shift}px)` }, { opacity: 1, transform: 'none' }], { duration: 440, delay: 200, easing: EASE, fill: 'backwards' }));
    }
    setTimeout(() => ripple(d, closed), 380);
  });
  const c = document.querySelector('.workspace > .center'), pc = pre.__center;
  if (changed && c && pc) {
    const cs = getComputedStyle(c);
    c.animate([{ marginLeft: pc.ml, marginRight: pc.mr, transform: pc.t, boxShadow: pc.sh }, { marginLeft: cs.marginLeft, marginRight: cs.marginRight, transform: cs.transform, boxShadow: cs.boxShadow }], { duration: DUR, easing: EASE });
  }
}
/* ================= Modern: record opens like paper pulled from a file ================= */
const RECORD_ROUTES = ['case', 'patient', 'facility', 'carrier', 'pbm'];
let FILE_MOVE = null;
function stageEl() { const p = document.querySelector('#root .center > .page') || document.querySelector('#root .main > .page') || document.querySelector('#root > .page, #root .workspace + .page') || [...document.querySelectorAll('#root .page')][0]; return p; }
function fileMove(prev, next) {
  if (!isModern() || !prev || prev === next || matchMedia('(prefers-reduced-motion: reduce)').matches) return null;
  const open = RECORD_ROUTES.includes(next) && (!RECORD_ROUTES.includes(prev) || prev !== next);
  const close = RECORD_ROUTES.includes(prev) && !RECORD_ROUTES.includes(next);
  if (!open && !close) return null;
  const el = stageEl(); if (!el) return null;
  const r = el.getBoundingClientRect(); const nav = document.querySelector('.topnav, .topbar'); const top = Math.max(r.top, nav ? nav.getBoundingClientRect().bottom : 0);
  const clone = el.cloneNode(true); clone.querySelectorAll('[id]').forEach(n => n.removeAttribute('id')); clone.removeAttribute('id');
  return { kind: open ? 'open' : 'close', clone, rect: { left: r.left, top, width: r.width, height: Math.min(window.innerHeight - top, r.bottom - top), offset: r.top - top } };
}
function playFileMove(m) {
  if (!m) return;
  const sheet = stageEl(); if (!sheet) return;
  const g = document.createElement('div'); g.className = 'file-ghost ' + m.kind;
  Object.assign(g.style, { left: m.rect.left + 'px', top: m.rect.top + 'px', width: m.rect.width + 'px', height: m.rect.height + 'px' });
  m.clone.style.marginTop = m.rect.offset + 'px'; m.clone.style.width = m.rect.width + 'px'; g.appendChild(m.clone); document.body.appendChild(g);
  const P = 'perspective(1800px) ';
  if (m.kind === 'open') {
    sheet.classList.add('paper-sheet');
    g.animate([{ transform: 'none', opacity: 1, filter: 'none' }, { transform: 'scale(.93) translateY(-14px)', opacity: 0, filter: 'blur(3px) saturate(.8)' }], { duration: 720, easing: 'cubic-bezier(.4,0,.2,1)', fill: 'forwards' });
    const a = sheet.animate([
      { transform: P + 'translateY(78vh) rotateX(14deg) scale(.95)', opacity: .2, offset: 0 },
      { opacity: 1, offset: .18 },
      { transform: P + 'translateY(-10px) rotateX(-1.5deg) scale(1.005)', offset: .72 },
      { transform: P + 'translateY(2px) rotateX(.3deg) scale(1)', offset: .88 },
      { transform: 'none', opacity: 1, offset: 1 }], { duration: 900, easing: 'cubic-bezier(.22,.8,.25,1)' });
    a.onfinish = () => { sheet.classList.add('paper-done'); setTimeout(() => sheet.classList.remove('paper-sheet', 'paper-done'), 450); g.remove(); };
  } else {
    g.classList.add('top');
    g.animate([{ transform: 'none', opacity: 1 }, { transform: P + 'translateY(10px) rotateX(-1deg)', opacity: 1, offset: .15 }, { transform: P + 'translateY(80vh) rotateX(12deg) scale(.95)', opacity: 0 }], { duration: 700, easing: 'cubic-bezier(.5,0,.75,.4)', fill: 'forwards' }).onfinish = () => g.remove();
    sheet.animate([{ transform: 'scale(.965)', opacity: .35, filter: 'blur(2px)' }, { transform: 'none', opacity: 1, filter: 'none' }], { duration: 650, delay: 120, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'backwards' });
  }
}
/* ================= Account menu + color themes ================= */
const HUES = [['green', 'Green', '#2e6341'], ['blue', 'Blue', '#1f4f7a'], ['red', 'Red', '#7a2430'], ['purple', 'Purple', '#553477'], ['graphite', 'Graphite', '#2b3034']];
S.hue = 'green'; try { const h = localStorage.getItem('hp-hue'); if (h && HUES.some(x => x[0] === h)) S.hue = h; } catch (e) { }
function applyHue() { HUES.forEach(([k]) => document.documentElement.classList.toggle('hue-' + k, S.hue === k && k !== 'green')); }
applyHue();
function acctMenu() {
  const open = S.menu === 'acct';
  return `<div class="acctwrap"><button class="avatarbtn" data-a="menu" data-v="acct" aria-expanded="${open}" aria-label="Account menu"><span class="avatar">JM</span></button>${open ? `<div class="menu-pop acctmenu" role="menu">
    <div class="acct-h"><span class="avatar">JM</span><div><b>Janet Mills</b><span>Case manager</span></div></div><hr>
    <button data-a="settings">${ic('gear', 16)} Settings</button>
    <div class="acct-sub">${ic('sidebar', 16)} Layout</div>
    <div class="dirlist">${[['H', 'A'], ['D', 'B'], ['A', 'C']].map(([k, shown]) => `<button data-a="dir" data-v="${k}" aria-pressed="${S.dir === k}" title="${esc(DIRS[k][1])}"><span class="dl-k">${shown}</span>${DIRS[k][0]}${S.dir === k ? ic('check', 14) : ''}</button>`).join('')}</div>
    <div class="acct-sub">${ic('dash', 16)} Dashboard</div>
    <div class="dirlist">${DASHES.map(([k, l, d], i) => `<button data-a="dashset" data-v="${k}" aria-pressed="${S.dash === k}" title="${esc(d)}"><span class="dl-k">${i + 1}</span>${l}${S.dash === k ? ic('check', 14) : ''}</button>`).join('')}</div>
    <div class="acct-sub">${ic('grid', 16)} Theme</div>
    <div class="swatches">${HUES.map(([k, l, c]) => `<button class="swatch ${S.hue === k ? 'on' : ''}" data-a="hue" data-v="${k}" aria-pressed="${S.hue === k}" title="${l}"><i style="background:linear-gradient(135deg,${c},color-mix(in srgb,${c} 55%,#000))"></i><span>${l}</span></button>`).join('')}</div><hr>
    <button data-a="notes" aria-pressed="${S.notesPanel}">${ic('check', 16)} ${S.notesPanel ? 'Hide' : 'Show'} feedback addressed</button><hr>
    <button data-a="signout">${ic('arrowr', 16)} Sign out</button></div>` : ''}</div>`;
}
Object.assign(EXTRA, {
  hue(t) { S.hue = t.dataset.v; try { localStorage.setItem('hp-hue', S.hue); } catch (e) { } applyHue(); S.menu = 'acct'; },
  signout() { S.menu = null; try { sessionStorage.removeItem('hp-demo-unlocked'); } catch (e) { } if (document.getElementById('gate')) { location.reload(); return; } toast('Signed out. The hosted demo returns to the sign-in screen'); }
});
/* ================= Round 5: every stub built out ================= */
const ROUTES_X = {};
const uid = (p) => p + Math.floor(1000 + Math.random() * 9000);
const nowStamp = () => `${fmt(TODAY)} ${fmtT(new Date())}`;
const val = (id) => { const el = document.getElementById(id); return el ? (el.type === 'checkbox' ? el.checked : el.value.trim()) : ''; };
const auditLog = (area, action, detail) => AUDIT.unshift([nowStamp(), ME, area, action, detail || '']);
const wide = (html, cls = 'wide') => html.replace('<div class="modal"', `<div class="modal ${cls}"`);
const errField = (msg) => `<span class="ikerr">${ic('info', 13)} ${msg}</span>`;
function inp(id, label, o = {}) {
  const err = o.err ? 'err' : '', req = o.req ? ' <span class="req">*</span>' : o.opt ? ' <span class="optl">Optional</span>' : '';
  let ctl;
  if (o.opts) ctl = `<select id="${id}">${o.ph !== false ? `<option value="">${o.ph || 'Select'}</option>` : ''}${o.opts.map(x => `<option ${String(o.v ?? '') === String(x) ? 'selected' : ''}>${esc(x)}</option>`).join('')}</select>`;
  else if (o.area) ctl = `<textarea id="${id}" placeholder="${esc(o.phText || '')}" style="${o.h ? `height:${o.h}px` : ''}">${esc(o.v ?? '')}</textarea>`;
  else ctl = `<input id="${id}" type="${o.type || 'text'}" value="${esc(o.v ?? '')}" placeholder="${esc(o.phText || '')}" ${o.w ? `style="max-width:${o.w}px"` : ''}>`;
  return `<div class="input ${err} ${o.span ? 'span2' : ''}"><label class="lbl" for="${id}">${label}${req}</label>${ctl}${o.err ? errField(o.err) : ''}${o.help ? `<span class="help">${o.help}</span>` : ''}</div>`;
}
const chk = (id, label, on) => `<label class="opt" style="padding:0"><input type="checkbox" id="${id}" ${on ? 'checked' : ''}><span>${label}</span></label>`;
const isoOf = (s) => { const m = String(s || '').match(/(\d+)\/(\d+)\/(\d{4})/); return m ? `${m[3]}-${m[1].padStart(2, '0')}-${m[2].padStart(2, '0')}` : ''; };
const usOf = (iso) => { if (!iso) return ''; const [y, m, d] = iso.split('-').map(Number); return `${m}/${d}/${y}`; };

/* ---------- Real file downloads (tiny valid PDFs and CSVs) ---------- */
function mkPdf(title, lines) {
  const clean = (s) => String(s).replace(/[()\\]/g, ' ').replace(/[^\x20-\x7e]/g, ' ');
  let y = 740; const txt = [`BT /F1 16 Tf 56 ${y} Td (${clean(title)}) Tj ET`]; y -= 34;
  lines.forEach(l => { txt.push(`BT /F1 11 Tf 56 ${y} Td (${clean(l)}) Tj ET`); y -= 18; });
  txt.push(`BT /F1 9 Tf 56 60 Td (HealthPacer prototype. Sample document with fictional data.) Tj ET`);
  const stream = txt.join('\n');
  const objs = ['<< /Type /Catalog /Pages 2 0 R >>', '<< /Type /Pages /Kids [3 0 R] /Count 1 >>', '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>', `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`, '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>'];
  let out = '%PDF-1.4\n'; const offs = [];
  objs.forEach((o, i) => { offs.push(out.length); out += `${i + 1} 0 obj\n${o}\nendobj\n`; });
  const xref = out.length;
  out += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n${offs.map(o => String(o).padStart(10, '0') + ' 00000 n \n').join('')}trailer\n<< /Size ${objs.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return out;
}
let DL_NS;
async function saveFile(name, content, type) {
  if (window.claude && window.claude.use) { if (DL_NS === undefined) DL_NS = await window.claude.use('downloads'); if (DL_NS) { try { await DL_NS.save({ filename: name, data: new Blob([content], { type }) }); } catch (e) { if (e && e.code !== 'declined') toast('Download is not available in this view'); } return; } }
  blobSave(name, content, type);
}
function blobSave(name, content, type) { const b = new Blob([content], { type }); const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 400); }
function downloadDoc(name, meta = {}) {
  const c = byId(S.caseId);
  const pdfName = name.replace(/\.(jpg|jpeg|png)$/i, '.pdf');
  saveFile(pdfName, mkPdf(name.replace(/\.[a-z]+$/i, '').replace(/_/g, ' '), [`Type: ${meta.type || 'Document'}`, `Patient: ${fullName(c)} (${c.id})`, `Added: ${meta.date || fmt(TODAY)} by ${meta.by || ME}`, '', 'This file stands in for the real document in the prototype.']), 'application/pdf');
}
const csvCell = (v) => { const s = String(v ?? ''); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; };
function downloadCsv(name, head, rows) { saveFile(name, [head, ...rows].map(r => r.map(csvCell).join(',')).join('\n'), 'text/csv'); }

/* ---------- Per-case data that the edit panels change ---------- */
const INFO = {};
function info(c) {
  if (!INFO[c.id]) INFO[c.id] = {
    medical: { dx: c.dx, dx2: 'Hypertension (I10)', other: 'Ketoconazole (stopped 6/2026)', surg: 'Not applicable' },
    consent: { status: c.consent, start: '7/29/2026', end: '7/29/2027', text: 'No', vm: 'Yes' },
    presc: { name: c.prescriber, npi: '9876543210', phone: '(310) 709-4563', fax: '(310) 709-4555' },
    pap: { program: 'EMX Cares', through: '3/31/2027', approval: 'PAP-77120', household: '3', income: 'Yes, 9/1/2026', docs: 'Tax return 2025' },
    bi: { date: '9/8/2026', by: 'Janet Mills', ded: '$1,500 · $1,120 met', oop: '$6,000 · $2,340 met', copay: '20% after deductible', pa: 'Yes', step: 'Yes, 1 prior agent', ql: '60 per 30 days', ref: 'SHP-0801-2291' },
    plans: [
      { order: 'Primary', name: c.payer === 'No insurance' ? 'Summit Health Plan' : c.payer, type: 'Commercial PPO', member: 'SHP88213407', group: 'GRP-5521', bin: '610014 / SUMRX', eff: '1/1/2026 to 12/31/2026', cov: null },
      { order: 'Pharmacy', name: 'Crestline PBM', type: 'PBM', member: 'CRX-44018', group: 'RX7730', bin: '004336 / ADV', eff: '1/1/2026 to 12/31/2026', cov: 'Pending' }],
    covnotes: [['9/8/2026', 'Janet Mills', 'Plan requires documented trial of one prior agent. Ketoconazole trial on file from 2026.'], ['8/1/2026', 'Marketta Howie', 'Reference #SHP-0801-2291. Rep: Carla. PA fax 1 (800) 555-0140.']]
  };
  return INFO[c.id];
}

/* ---------- Case information tab (edit panels) ---------- */
tabInfo = function (c) {
  const I = info(c);
  const eb = (k) => `<button class="btn sm ghost" data-a="edit" data-v="${k}">${ic('edit', 14)} Edit</button>`;
  return `${tph('Case information')}<div class="blocks">
  <div class="block" data-sec="Intake"><div class="section-t">${ic('file', 15)}Intake<span class="sp"></span></div><div class="fields">${fld('Entered by', 'Marketta Howie', false)}${fld('Started on', fmt(c.start))}${fld('Referral source', 'Fax from prescriber', false)}</div></div>
  <div class="block" data-sec="Medical"><div class="section-t">${ic('heart', 15)}Medical<span class="sp"></span>${eb('medical')}</div><div class="fields">${fld('Primary diagnosis', I.medical.dx)}${fld('Secondary diagnosis', I.medical.dx2)}${fld('Other therapy', I.medical.other, false)}${fld('Surgery ineligibility', I.medical.surg, false)}</div></div>
  <div class="block" data-sec="Consent"><div class="section-t">${ic('shield', 15)}Consent<span class="sp"></span>${eb('consent')}</div><div class="fields"><div class="fld"><span class="lbl">Status</span><span class="val">${pill(c.consent)}</span></div>${fld('Consent start', I.consent.start)}${fld('Consent end', I.consent.end)}<div class="fld"><span class="lbl">Texting / voicemail</span><span class="val">${I.consent.text === 'Yes' ? pill('Covered', 'nodot').replace('Covered', 'Texts OK') : pill('Declined', 'nodot').replace('Declined', 'No texts')} ${I.consent.vm === 'Yes' ? pill('Covered', 'nodot').replace('Covered', 'Voicemail OK') : pill('Declined', 'nodot').replace('Declined', 'No voicemail')}</span></div></div></div>
  <div class="block" data-sec="Prescriber"><div class="section-t">${ic('users', 15)}Prescriber<span class="sp"></span>${eb('presc')}</div><div class="fields">${fld('Prescriber', c.prescriber)}${fld('NPI', I.presc.npi)}${fld('Phone', I.presc.phone)}${fld('Fax', I.presc.fax)}</div></div>
  <div class="block full" data-sec="Facility"><div class="section-t">${ic('building', 15)}Facility<span class="sp"></span>${(() => { const f = FACILITIES.find(x => x.name === c.facility); return f ? `<button class="btn sm ghost" data-a="facility" data-id="${f.id}">${ic('arrowr', 14)} Open facility</button>` : ''; })()}</div><div class="fields">${fld('Facility', c.facility)}${fld('Primary contact', 'Tina Alvarez, MA')}${fld('Address', '200 Central Park West, New York, NY 10024')}${fld('Phone', '(310) 709-4563')}${fld('Fax', '(310) 709-4555')}${fld('Tax ID', '12-3456789')}</div></div>
  </div>`;
};

/* ---------- Generic edit side panel ---------- */
const EDITS = {
  medical: { title: 'Edit medical details', area: 'Case', fields: (c) => { const m = info(c).medical; return [['dx', 'Primary diagnosis', { v: m.dx, req: 1, opts: ['Cushing syndrome (E24.9)', 'Cushing syndrome (E24.0)', 'Ectopic ACTH syndrome (E24.3)', 'Adrenal Cushing syndrome (E24.8)'] }], ['dx2', 'Secondary diagnosis', { v: m.dx2, opt: 1 }], ['other', 'Other therapy tried', { v: m.other, opt: 1 }], ['surg', 'Surgery ineligibility', { v: m.surg, opts: ['Not applicable', ...SURGERY], ph: false }]]; }, save: (c, v) => { Object.assign(info(c).medical, v); c.dx = v.dx; } },
  consent: { title: 'Edit consent', area: 'Consent', fields: (c) => { const m = info(c).consent; return [['status', 'Consent status', { v: c.consent, opts: CONSENT, ph: false }], ['start', 'Consent start', { v: isoOf(m.start), type: 'date', w: 200 }], ['end', 'Consent end', { v: isoOf(m.end), type: 'date', w: 200 }], ['text', 'OK to text', { v: m.text, opts: ['Yes', 'No'], ph: false }], ['vm', 'OK to leave voicemail', { v: m.vm, opts: ['Yes', 'No'], ph: false }]]; }, save: (c, v) => { v.start = usOf(v.start); v.end = usOf(v.end); Object.assign(info(c).consent, v); c.consent = v.status; } },
  presc: { title: 'Edit prescriber', area: 'Case', fields: (c) => { const m = info(c).presc; return [['name', 'Prescriber', { v: c.prescriber, opts: PRESCRIBERS.map(p => p[0]), ph: false, help: 'Changing the prescriber also updates the facility.' }], ['npi', 'NPI', { v: m.npi, w: 200 }], ['phone', 'Phone', { v: m.phone, w: 220 }], ['fax', 'Fax', { v: m.fax, w: 220 }]]; }, save: (c, v) => { Object.assign(info(c).presc, v); c.prescriber = v.name; const p = PRESCRIBERS.find(x => x[0] === v.name); if (p) c.facility = p[1]; } },
  pap: { title: 'Edit patient assistance', area: 'PAP', fields: (c) => { const m = info(c).pap; return [['status', 'PAP status', { v: c.pap, opts: PAP, ph: false }], ['program', 'Program', { v: m.program, opts: ['EMX Cares', 'EMX Bridge supply'], ph: false }], ['through', 'Approved through', { v: isoOf(m.through), type: 'date', w: 200 }], ['approval', 'Approval ID', { v: m.approval, w: 200 }], ['household', 'Household size', { v: m.household, type: 'number', w: 120 }], ['income', 'Income verified', { v: m.income, opts: ['Yes, 9/1/2026', 'Not yet', 'Waived'], ph: false }], ['docs', 'Documents on file', { v: m.docs, opt: 1 }]]; }, save: (c, v) => { c.pap = v.status; delete v.status; v.through = usOf(v.through); Object.assign(info(c).pap, v); } },
  patient: { title: 'Edit patient', area: 'Patient', fields: (c) => [['first', 'First name', { v: c.first, req: 1 }], ['mi', 'Middle initial', { v: c.mi, w: 80 }], ['last', 'Last name', { v: c.last, req: 1 }], ['dob', 'Date of birth', { v: isoOf(fmt(c.dob)), type: 'date', w: 200, req: 1 }], ['gender', 'Gender', { v: c.gender, opts: ['Female', 'Male', 'Other', 'Prefer not to say'], ph: false }], ['phone', 'Mobile phone', { v: c.phone, w: 220 }], ['street', 'Street address', { v: c.street }], ['city', 'City, state, zip', { v: c.city }], ['lang', 'Preferred language', { v: c.lang, opts: ['English', 'Spanish', 'Vietnamese', 'Other'], ph: false }], ['best', 'Best time to call', { v: c.best, opts: ['Mornings', 'Afternoons', 'Weekdays after 5pm', 'Any time'], ph: false }], ['alt', 'Alternate contact', { v: c.alt, opt: 1 }]], save: (c, v) => { const [y, m, d] = v.dob.split('-').map(Number); v.dob = new Date(y, m - 1, d); Object.assign(c, v); } },
  org: { title: 'Edit organization', fields: (o) => [['name', 'Name', { v: o.name, req: 1 }], ['type', 'Type', { v: o.type, opts: ['Commercial', 'Medicare', 'Medicaid', 'Pharmacy benefit manager'], ph: false }], ['st', 'Street address', { v: o.st }], ['city', 'City, state, zip', { v: o.city }], ['phone', 'Phone', { v: o.phone, w: 220 }], ['fax', 'PA fax', { v: o.fax, w: 220 }]], save: (o, v) => { const old = o.name; Object.assign(o, v); if (old !== v.name) CASES.forEach(c => { if (c.payer === old) c.payer = v.name; }); } },
  facility: { title: 'Edit facility', fields: (f) => [['name', 'Facility name', { v: f.name, req: 1 }], ['type', 'Facility type', { v: f.type, opts: [...new Set(FAC_TYPES)], ph: false }], ['contact', 'Primary contact', { v: f.contact }], ['phone', 'Phone', { v: f.phone, w: 220 }], ['fax', 'Fax', { v: f.fax, w: 220 }], ['npi', 'NPI', { v: f.npi, w: 200 }], ['tax', 'Tax ID', { v: f.tax, w: 200 }]], save: (f, v) => { const old = f.name; Object.assign(f, v); if (old !== v.name) CASES.forEach(c => { if (c.facility === old) c.facility = v.name; }); } },
  user: { title: 'Edit user', fields: (u) => [['name', 'Name', { v: u.name, req: 1 }], ['email', 'Email', { v: u.email, req: 1, type: 'email' }], ['role', 'Role', { v: u.role, opts: USER_ROLES[u.kind || 'fac'], ph: false }], ['status', 'Status', { v: u.status, opts: ['Active', 'Invite pending', 'Inactive'], ph: false }]], save: (u, v) => Object.assign(u, v) }
};
const USER_ROLES = { fac: ['Prescriber', 'Office staff', 'Administrator'], pharm: ['Pharmacist', 'Pharmacy technician', 'Intake coordinator', 'Administrator'], hub: ['Patient access coordinator', 'Case manager', 'Supervisor', 'Administrator', 'Read only'] };
function editTarget(d) {
  if (d.id === 'org') return CARRIERS.concat(PBMS, PHARMACIES).find(x => x.id === S.detail.org) || CARRIERS[0];
  if (d.id === 'facility') return FACILITIES.find(x => x.id === S.detail.facility) || FACILITIES[0];
  if (d.id === 'user') return findUser(d.ref);
  if (d.id === 'patient') return (patientOf(S.detail.patient) || PATIENTS[0]).c;
  return byId(S.caseId);
}
function findUser(ref) { return allUsers().find(u => u.ref === ref); }
function allUsers() {
  FACILITIES.forEach(f => f.users.forEach((u, i) => { u.ref = u.ref || `${f.id}-${i}-${u.email}`; u.fac = f; u.kind = 'fac'; }));
  return FACILITIES.flatMap(f => f.users).concat(PUSERS, HUBUSERS);
}

/* ---------- Drawer types: document viewer, edit panel, printable list ---------- */
const _drawer0 = drawer;
drawer = function () {
  const d = S.drawer; if (!d || !['doc', 'edit'].includes(d.type)) return _drawer0();
  let title = '', body = '', foot = '', cls = '';
  if (d.type === 'doc') {
    const doc = d.doc; title = doc.name; cls = 'wide';
    const pages = doc.pages || 2, pg = Math.min(d.page || 1, pages), z = d.zoom || 1;
    const lines = (n) => Array.from({ length: n }, (_, i) => `<i style="width:${[92, 100, 84, 97, 70, 100, 88, 60][i % 8]}%"></i>`).join('');
    body = `<div class="viewer"><div class="vbar"><button class="iconbtn" data-a="docpg" data-v="-1" ${pg <= 1 ? 'disabled' : ''} aria-label="Previous page">${ic('chevl', 16)}</button><span class="num">Page ${pg} of ${pages}</span><button class="iconbtn" data-a="docpg" data-v="1" ${pg >= pages ? 'disabled' : ''} aria-label="Next page">${ic('chevr', 16)}</button><span class="sp"></span><button class="iconbtn" data-a="doczoom" data-v="-1" aria-label="Zoom out" ${z <= .8 ? 'disabled' : ''}>−</button><span class="num">${Math.round(z * 100)}%</span><button class="iconbtn" data-a="doczoom" data-v="1" aria-label="Zoom in" ${z >= 1.4 ? 'disabled' : ''}>+</button></div>
      <div class="vpage-wrap"><div class="vpage" style="--z:${z}"><div class="vhead"><b>${esc((doc.type || 'Document').toUpperCase())}</b><span>${pg === 1 ? esc(doc.name.replace(/\.[a-z]+$/i, '').replace(/_/g, ' ')) : 'Continued'}</span></div>${pg === 1 ? `<div class="vgrid"><span>Patient</span><span>${esc(fullName(byId(S.caseId)))}</span><span>Case</span><span>${S.caseId}</span><span>Date</span><span>${esc(doc.date || fmt(TODAY))}</span></div>` : ''}${lines(pg === 1 ? 9 : 14)}<div class="vsig">${pg === pages ? '<em>Signature on file</em>' : ''}</div></div></div></div>
      <div class="fields">${fld('Type', doc.type || 'Document', false)}${fld('Added', `${doc.date || fmt(TODAY)}${doc.by ? ' by ' + doc.by : ''}`, false)}${doc.size ? fld('Size', doc.size, false) : ''}${doc.src ? fld('Source', doc.src, false) : ''}</div>
      ${doc.di != null ? `<div class="sharerow"><span>Shared with</span><button class="pill ${DOCS[doc.di][5] ? 't-ok' : 't-neutral'}" data-a="docshare" data-v="5" data-id="${doc.di}">${DOCS[doc.di][5] ? ic('check', 12) : ''} Provider</button><button class="pill ${DOCS[doc.di][6] ? 't-ok' : 't-neutral'}" data-a="docshare" data-v="6" data-id="${doc.di}">${DOCS[doc.di][6] ? ic('check', 12) : ''} Pharmacy</button></div>` : ''}`;
    foot = `<button class="btn" data-a="docfax">${ic('fax', 16)} Fax</button><button class="btn" data-a="docprint">Print</button><span style="flex:1"></span><button class="btn primary" data-a="docdl">${ic('download', 16)} Download</button>`;
  }
  if (d.type === 'edit') {
    const E = EDITS[d.id], tgt = editTarget(d), fs = E.fields(tgt), err = d.err || {};
    title = E.title + (d.id === 'user' ? ` · ${tgt.name}` : '');
    body = `<div class="editform">${fs.map(([k, l, o]) => inp('ed-' + k, l, { ...o, err: err[k] })).join('')}</div>${['medical', 'consent', 'presc', 'pap'].includes(d.id) ? `<div class="note-banner">${ic('info', 16)}<span>Changes are recorded in the audit trail with your name.</span></div>` : ''}`;
    foot = `<span style="flex:1"></span><button class="btn" data-a="drawerclose">Cancel</button><button class="btn primary" data-a="editsave" data-v="${d.id}">Save changes</button>`;
  }
  const enter = LAST_DRAWER !== d.type + d.id && !LAST_DRAWER;
  return `<div class="drawer-scrim ${enter ? 'enter' : ''}" data-a="drawerclose"></div><aside class="drawer ${cls} ${enter ? 'enter' : ''}" role="dialog" aria-label="${esc(title)}"><div class="drawer-h"><h2>${esc(title)}</h2><button class="iconbtn" data-a="drawerclose" aria-label="Close">${ic('x', 18)}</button></div><div class="drawer-b">${body}</div><div class="drawer-f">${foot}</div></aside>`;
};
function openDoc(doc) { S.drawer = { type: 'doc', id: doc.name, doc, page: 1, zoom: 1 }; S.pop = null; S.modal = null; }
const docLink = (name, extra = {}) => `<a href="#" data-a="docopen" data-v="${esc(name)}" ${Object.entries(extra).map(([k, v]) => `data-${k}="${esc(v)}"`).join(' ')}>${esc(name)}</a>`;

/* ---------- Documents tab ---------- */
const DOC_TYPES = ['Appeal', 'Prior authorization', 'Payer correspondence', 'Insurance', 'Enrollment', 'Prescription', 'Consent', 'Lab results', 'Clinical notes', 'Other'];
tabDocs = function () {
  const q = (S.docq || '').toLowerCase();
  const rows = DOCS.map((d, i) => [d, i]).filter(([d]) => !q || (d[0] + ' ' + d[1] + ' ' + d[3]).toLowerCase().includes(q));
  return `${tph('Documents', `<label class="search" style="height:34px">${ic('search', 15)}<input id="docq" data-in="docq" value="${esc(S.docq || '')}" placeholder="Search documents" style="width:160px"></label><button class="btn primary" data-a="modal" data-v="adddoc">${ic('plus', 16)} Add document</button>`)}
  <div class="tablewrap"><table class="dt"><thead><tr><th>Name</th><th>Type</th><th>Added</th><th>Added by</th><th>Size</th><th>Provider</th><th>Pharmacy</th><th aria-label="Actions"></th></tr></thead><tbody>
  ${rows.map(([[n, t, d, b, s, pv, ph], i]) => `<tr class="${S.flash === 'doc' + i ? 'flash' : ''}"><td>${ic('file', 15)} <a href="#" data-a="docopen" data-i="${i}">${esc(n)}</a></td><td>${t}</td><td class="num">${d}</td><td>${b}</td><td class="num">${s}</td>
  <td><button class="pill ${pv ? 't-ok' : 't-neutral'}" style="border:0" data-a="docshare" data-v="5" data-id="${i}" title="Click to ${pv ? 'stop sharing' : 'share'}">${pv ? 'Shared' : 'Not shared'}</button></td><td><button class="pill ${ph ? 't-ok' : 't-neutral'}" style="border:0" data-a="docshare" data-v="6" data-id="${i}" title="Click to ${ph ? 'stop sharing' : 'share'}">${ph ? 'Shared' : 'Not shared'}</button></td><td style="text-align:right;white-space:nowrap"><button class="iconbtn" data-a="docdl" data-i="${i}" aria-label="Download ${esc(n)}">${ic('download', 16)}</button><button class="iconbtn" data-a="rowmenu" data-v="D:${i}" aria-label="More actions">${ic('more', 16)}</button></td></tr>`).join('') || `<tr><td colspan="8" class="muted" style="height:90px;text-align:center">No documents match “${esc(S.docq)}”.</td></tr>`}</tbody></table></div>`;
};

/* ---------- Messages tab: composer on top ---------- */
tabMessages = function () {
  const e = S.msgErr;
  return `${tph('Messages', `<span class="muted" style="font-size:12.5px">Messages go to the provider portal or pharmacy</span>`)}
  <div class="composer top ${e ? 'err' : ''}"><span class="avatar">JM</span><div class="cbody"><label class="sr" for="newmsg">New message</label><textarea id="newmsg" placeholder="Write a message">${esc(S.msgDraft || '')}</textarea>${e ? errField('Write a message first') : ''}<div class="crow"><select id="msgto" aria-label="Send to">${['To provider', 'To pharmacy', 'Internal note'].map(x => `<option ${S.msgTo === x ? 'selected' : ''}>${x}</option>`).join('')}</select><span class="muted" style="font-size:12px">${S.msgTo === 'Internal note' ? 'Only hub staff can see internal notes' : S.msgTo === 'To pharmacy' ? 'Visible to ' + esc(byId(S.caseId).pharmacy) : 'Visible in the provider portal'}</span><span class="sp"></span><button class="btn primary" data-a="msgsend">${ic('send', 16)} Send</button></div></div></div>
  <div class="feed">${MESSAGES.map(([w, role, d, t, tags], i) => `<div class="msg ${S.flash === 'msg' + i ? 'flash' : ''}"><span class="avatar" style="${role === 'Hub' ? '' : 'background:var(--navy)'}">${w.replace('Dr. ', '').split(' ').map(x => x[0]).join('').slice(0, 2)}</span><div class="hd"><b>${esc(w)}</b><span class="pill nodot ${role === 'Hub' ? 't-ok' : role === 'HCP' ? 't-info' : 't-violet'}">${role}</span><span class="muted num">${d}</span></div><button class="iconbtn" data-a="rowmenu" data-v="M:${i}" aria-label="Message actions">${ic('more', 16)}</button><p>${esc(t)}</p><div class="tags">${tags.map(x => `<span class="muted" style="font-size:12px">${x}</span>`).join('')}</div></div>`).join('')}</div>`;
};

/* ---------- Notes tab: highlighted text, add, log call, per-note actions ---------- */
tabNotes = function () {
  return `${tph('Notes and phone log', `<button class="btn" data-a="modal" data-v="logcall">${ic('phone', 16)} Log call</button><button class="btn primary" data-a="modal" data-v="casenote">${ic('plus', 16)} Add note</button>`)}
  <div class="feed">${NOTES.map(([w, type, d, t, hl], i) => `<div class="msg ${hl ? 'hlnote' : ''} ${S.flash === 'note' + i ? 'flash' : ''}"><span class="avatar">${w.split(' ').map(x => x[0]).join('')}</span><div class="hd"><b>${esc(w)}</b><span class="pill nodot ${type === 'Note' ? 't-navy' : 't-info'}">${type}</span><span class="muted num">${d}</span></div><button class="iconbtn" data-a="rowmenu" data-v="N:${i}" aria-label="Note actions">${ic('more', 16)}</button><p><span class="${hl ? 'hltext' : ''}">${esc(t)}</span></p></div>`).join('') || '<div class="emptyline">No notes yet.</div>'}</div>`;
};

/* ---------- Faxes tab ---------- */
tabFaxes = function () {
  return `${tph('Faxes', `<button class="btn primary" data-a="modal" data-v="sendfax">${ic('fax', 16)} Send fax</button>`)}
  <div class="tablewrap"><table class="dt"><thead><tr><th>Date</th><th>Direction</th><th>Recipient / sender</th><th>Number</th><th>Pages</th><th>Status</th></tr></thead><tbody>${FAXES.map(([d, dir, who, num, p, s], i) => `<tr class="click ${S.flash === 'fax' + i ? 'flash' : ''}" data-a="faxopen" data-i="${i}"><td class="num">${d}</td><td>${dir}</td><td>${who}</td><td class="num">${num}</td><td class="num">${p}</td><td>${fxPill(s)}</td></tr>`).join('')}</tbody></table></div>`;
};

/* ---------- Prescription tab: document links open the viewer ---------- */
const _tabRx0 = tabRx;
tabRx = (c) => _tabRx0(c).replace(/<a href="#" data-a="toast" data-v="Document preview opens here">([^<]+)<\/a>/g, (m, n) => docLink(n, { type: 'Prescription' }));

/* ---------- Benefits tab ---------- */
tabBenefits = function (c) {
  const I = info(c), b = I.bi;
  return `${tph('Benefits', `<span class="muted" style="font-size:12.5px">Verified ${b.date} by ${esc(b.by)}</span><button class="btn" data-a="modal" data-v="bi">${ic('refresh', 16)} Re-verify</button><button class="btn" data-a="modal" data-v="addplan">${ic('plus', 16)} Add plan</button>`)}
  <div class="tablewrap"><table class="dt"><thead><tr><th>Order</th><th>Plan</th><th>Type</th><th>Member ID</th><th>Group</th><th>BIN / PCN</th><th>Effective</th><th>Coverage</th><th aria-label="Actions"></th></tr></thead><tbody>
  ${I.plans.map((p, i) => `<tr class="${S.flash === 'plan' + i ? 'flash' : ''}"><td>${p.order}</td><td class="strong">${esc(p.name)}</td><td>${esc(p.type)}</td><td class="mono">${esc(p.member)}</td><td class="mono">${esc(p.group || '')}</td><td class="mono">${esc(p.bin || '')}</td><td class="num">${esc(p.eff)}</td><td>${pill(p.cov || c.coverage)}</td><td style="text-align:right"><button class="iconbtn" data-a="modal" data-v="addplan" data-id="${i}" aria-label="Edit plan">${ic('edit', 15)}</button></td></tr>`).join('')}</tbody></table></div>
  <div class="blocks"><div class="block" data-sec="Benefit investigation"><div class="section-t">${ic('card', 15)}Benefit investigation</div><div class="fields">${fld('Deductible', b.ded, false)}${fld('Out of pocket max', b.oop, false)}${fld('Specialty copay', b.copay, false)}${fld('PA required', b.pa, false)}${fld('Step therapy', b.step, false)}${fld('Quantity limit', b.ql, false)}</div></div>
  <div class="block" data-sec="Coverage notes"><div class="section-t">${ic('chat', 15)}Coverage notes</div><div class="feed" style="margin:0 -16px">${I.covnotes.map(([d, w, t]) => `<div class="msg" style="grid-template-columns:1fr"><div class="hd"><b>${w}</b><span class="muted num">${d}</span></div><p style="grid-column:1">${esc(t)}</p></div>`).join('')}</div></div></div>`;
};

/* ---------- PAP tab ---------- */
tabPap = function (c) {
  const m = info(c).pap;
  return `${tph('Patient assistance program', `<button class="btn" data-a="edit" data-v="pap">${ic('edit', 16)} Edit</button>`)}<div class="blocks">
  <div class="block" data-sec="Assistance approval"><div class="section-t">${ic('check', 15)}Assistance approval</div><div class="fields"><div class="fld"><span class="lbl">PAP status</span><span class="val">${pill(c.pap)}</span></div>${fld('Program', m.program, false)}${fld('Approved through', m.through)}${fld('Approval ID', m.approval)}</div></div>
  <div class="block" data-sec="Financial information"><div class="section-t">${ic('card', 15)}Financial information</div><div class="fields">${fld('Household size', m.household, false)}${fld('Income verified', m.income, false)}${fld('Documents', m.docs, false)}</div></div></div>`;
};

/* ---------- Audit trail: search and date range work ---------- */
const AUD_RANGES = ['Any time', 'Last 7 days', 'Last 30 days', 'Last 90 days'];
tabAudit = function () {
  const q = (S.audq || '').toLowerCase(), r = S.audr || 'Any time', lim = { 'Last 7 days': 7, 'Last 30 days': 30, 'Last 90 days': 90 }[r];
  const rows = AUDIT.filter(a => (!q || a.join(' ').toLowerCase().includes(q)) && (!lim || (() => { const [m, d, y] = a[0].split(' ')[0].split('/').map(Number); return -dayDiff(new Date(y, m - 1, d)) <= lim; })()));
  return `${tph('Audit trail', `<label class="search" style="height:34px">${ic('search', 15)}<input id="audq" data-in="audq" value="${esc(S.audq || '')}" placeholder="Search activity" style="width:160px"></label><div class="ms"><button data-a="menu" data-v="audr" aria-expanded="${S.menu === 'audr'}">${ic('cal', 14)} ${r} ${ic('chevd', 14)}</button>${S.menu === 'audr' ? `<div class="menu-pop" style="right:0;top:40px;width:180px">${AUD_RANGES.map(x => `<button data-a="audr" data-v="${x}">${x === r ? ic('check', 14) : '<span style="width:14px"></span>'} ${x}</button>`).join('')}</div>` : ''}</div><button class="btn" data-a="audcsv">${ic('download', 16)} Export</button>`)}
  <div class="tablewrap"><table class="dt"><thead><tr><th>When</th><th>User</th><th>Area</th><th>Action</th><th>Details</th></tr></thead><tbody>${rows.map(([w, u, a, x, d]) => `<tr><td class="num">${w}</td><td>${u}</td><td>${a}</td><td class="strong">${x}</td><td class="wrap">${esc(d)}</td></tr>`).join('') || '<tr><td colspan="5" class="muted" style="height:90px;text-align:center">No activity in this range.</td></tr>'}</tbody></table></div>`;
};

/* ---------- Row menus for documents, messages, notes and users ---------- */
const _popMenu0 = popMenu;
popMenu = function () {
  const p = S.pop; if (!p) return '';
  let items = null; const n = +p.id.slice(2);
  if (p.id.startsWith('D:')) items = `<button data-a="docopen" data-i="${n}">${ic('file', 16)} Preview</button><button data-a="docdl" data-i="${n}">${ic('download', 16)} Download</button><button data-a="modal" data-v="sendfax" data-id="${n}">${ic('fax', 16)} Fax this document</button><button data-a="modal" data-v="docrename" data-id="${n}">${ic('edit', 16)} Rename or retype</button><hr><button data-a="modal" data-v="docrm" data-id="${n}" style="color:var(--danger)">${ic('x', 16)} Remove</button>`;
  if (p.id.startsWith('M:')) { const m = MESSAGES[n]; items = `<button data-a="msgreply" data-i="${n}">${ic('send', 16)} Reply</button><button data-a="copy" data-v="${esc(m[3])}">${ic('copy', 16)} Copy text</button>${m[0] === ME ? `<hr><button data-a="modal" data-v="msgrm" data-id="${n}" style="color:var(--danger)">${ic('x', 16)} Delete message</button>` : ''}`; }
  if (p.id.startsWith('N:')) { const nt = NOTES[n]; items = `<button data-a="modal" data-v="casenote" data-id="${n}">${ic('edit', 16)} Edit</button><button data-a="casenotehl" data-i="${n}">${ic('flag', 16)} ${nt[4] ? 'Remove highlight' : 'Highlight'}</button><hr><button data-a="modal" data-v="casenoterm" data-id="${n}" style="color:var(--danger)">${ic('x', 16)} Remove</button>`; }
  if (p.id.startsWith('u')) { const u = allUsers().find(x => 'u' + x.email === p.id || 'u' + x.ref === p.id); if (u) items = `<button data-a="useredit" data-v="${esc(u.ref)}">${ic('edit', 16)} Edit</button><button data-a="modal" data-v="pwreset" data-id="${esc(u.ref)}">${ic('key', 16)} Send password reset</button>${u.status !== 'Active' ? `<button data-a="modal" data-v="reinvite" data-id="${esc(u.ref)}">${ic('mail', 16)} Resend invite</button>` : ''}<hr><button data-a="modal" data-v="userrm" data-id="${esc(u.ref)}" style="color:var(--danger)">${ic('x', 16)} Remove</button>`; }
  if (items == null) return _popMenu0();
  const left = Math.max(12, Math.min(p.x - 240, window.innerWidth - 260));
  const top = p.y + 240 > window.innerHeight ? p.y - p.h - 8 - 190 : p.y + 6;
  return `<div class="menu-pop pop-fixed" style="position:fixed;left:${left}px;top:${Math.max(8, top)}px;width:240px">${items}</div>`;
};

/* ---------- Modals ---------- */
const FAX_BOOK = () => { const c = byId(S.caseId); const pr = info(c).presc; return [[`${c.payer} PA`, 'Carrier', (CARRIERS.find(x => x.name === c.payer) || CARRIERS[0]).fax], [`${c.payer} appeals`, 'Carrier', (CARRIERS.find(x => x.name === c.payer) || CARRIERS[0]).fax.replace(/\d$/, '2')], [c.facility, 'Facility', pr.fax], [c.pharmacy, 'Pharmacy', '1 (855) 555-0188'], ['Crestline PBM', 'PBM', '1 (888) 555-1113']]; };
const _xm2 = extraModal;
extraModal = function (m, wrap) {
  const c = byId(S.caseId), e = m.err || {};
  const cancel = `<button class="btn" data-a="mclose">Cancel</button>`;
  if (m.type === 'adddoc') { const fac = m.id === 'fac';
    return wrap('Add document', `<label class="dropzone ${e.file ? 'err' : ''}"><input type="file" id="docfile">${ic('upload', 22)}<span><b>${S.pickName ? esc(S.pickName) : 'Choose a file'}</b><br><span class="muted">${S.pickName ? 'Click to choose a different file' : 'PDF, JPG or PNG up to 25 MB'}</span></span></label>${e.file ? errField('Choose a file to upload') : ''}
      ${inp('docname', 'Display name', { opt: 1, v: '', phText: S.pickName || 'Uses the file name if left blank' })}
      ${inp('doctype', 'Document type', { req: 1, opts: fac ? ['Agreement', 'Tax form', 'Template', 'Other'] : DOC_TYPES, err: e.type })}
      ${fac ? '' : `<div class="input"><span class="lbl">Share with</span><div style="display:flex;gap:18px">${chk('docpv', 'Provider portal', false)}${chk('docph', 'Pharmacy', false)}</div></div>`}`,
      `${cancel}<button class="btn primary" data-a="adddocsave" data-v="${fac ? 'fac' : ''}">Add document</button>`); }
  if (m.type === 'docrename') { const d = DOCS[+m.id]; return wrap('Rename document', `${inp('rnname', 'Name', { v: d[0], req: 1, err: e.name })}${inp('rntype', 'Document type', { v: d[1], opts: DOC_TYPES, ph: false })}`, `${cancel}<button class="btn primary" data-a="docrenamesave" data-id="${m.id}">Save</button>`); }
  if (m.type === 'docrm') { const d = DOCS[+m.id]; return wrap('Remove this document?', `<p style="margin:0"><b>${esc(d[0])}</b> will be removed from this case${d[5] || d[6] ? ' and no longer shared with the ' + [d[5] && 'provider', d[6] && 'pharmacy'].filter(Boolean).join(' or ') : ''}. It stays in the audit trail.</p>`, `${cancel}<button class="btn danger" data-a="docrmsave" data-id="${m.id}">Remove document</button>`); }
  if (m.type === 'msgrm') return wrap('Delete this message?', `<p style="margin:0">${esc(MESSAGES[+m.id][3])}</p>`, `${cancel}<button class="btn danger" data-a="msgrmsave" data-id="${m.id}">Delete</button>`);
  if (m.type === 'casenote') { const nt = m.id != null && m.id !== '' ? NOTES[+m.id] : null;
    return wrap(nt ? 'Edit note' : 'Add note', `${inp('cntext', 'Note', { area: 1, h: 130, v: nt ? nt[3] : '', req: 1, err: e.text, phText: 'What should the team know?' })}${chk('cnhl', 'Highlight this note so it stands out to staff', nt ? nt[4] : false)}`, `${cancel}<button class="btn primary" data-a="casenotesave" data-id="${m.id ?? ''}">Save note</button>`); }
  if (m.type === 'casenoterm') return wrap('Remove this note?', `<p style="margin:0">${esc(NOTES[+m.id][3])}</p>`, `${cancel}<button class="btn danger" data-a="casenotermsave" data-id="${m.id}">Remove note</button>`);
  if (m.type === 'logcall') return wide(wrap('Log a call', `<div class="seg lite" role="radiogroup" aria-label="Direction">${['Outbound', 'Inbound'].map(x => `<button data-a="calldir" data-v="${x}" aria-pressed="${(S.callDir || 'Outbound') === x}">${x === 'Outbound' ? 'I called' : 'They called'}</button>`).join('')}</div>
      <div class="polgrid">${inp('clwho', 'Spoke with', { req: 1, err: e.who, opts: [`${c.first} ${c.last} (patient)`, `${c.alt} (alternate contact)`, `${c.facility} office`, c.prescriber, `${c.payer} rep`, `${c.pharmacy} pharmacy`] })}${inp('clnum', 'Phone number', { v: c.phone })}
      ${inp('clout', 'Outcome', { req: 1, err: e.out, opts: ['Reached, resolved', 'Reached, follow-up needed', 'Left voicemail', 'No answer', 'Wrong number'] })}${inp('clmin', 'Length (minutes)', { type: 'number', v: '5', w: 120 })}</div>
      ${inp('clnote', 'Call notes', { area: 1, h: 100, req: 1, err: e.note, phText: 'What was discussed and agreed' })}
      <div class="polgrid">${inp('clfu', 'Next follow-up', { type: 'date', opt: 1, v: c.follow ? isoOf(fmt(c.follow)) : '' })}<div class="input" style="justify-content:flex-end">${chk('clhl', 'Highlight this call', false)}</div></div>`, `${cancel}<button class="btn primary" data-a="logcallsave">Save call</button>`));
  if (m.type === 'sendfax') { const book = FAX_BOOK(); const pre = m.id != null && m.id !== '' ? +m.id : null; const picked = S.faxDocs || new Set(pre != null ? [pre] : []); S.faxDocs = picked;
    const caseMode = S.route !== 'case';
    return wide(wrap('Send fax', `${caseMode ? inp('fxcase', 'Case', { req: 1, err: e.case, opts: CASES.slice(0, 20).map(x => `${x.id} · ${fullName(x)}`), v: S.faxCase || '' }) : ''}
      <div class="polgrid">${inp('fxto', 'Recipient', { req: 1, err: e.to, opts: [...book.map(b => `${b[0]} (${b[1]})`), 'Other number'], v: S.faxTo || '' })}${inp('fxnum', 'Fax number', { req: 1, err: e.num, v: S.faxNum || '' })}</div>
      <div class="input ${e.docs ? 'err' : ''}"><span class="lbl">Documents to send <span class="req">*</span></span><div class="docpick">${DOCS.map((d, i) => `<label class="opt"><input type="checkbox" data-a="faxdoc" data-i="${i}" ${picked.has(i) ? 'checked' : ''}><span>${esc(d[0])}</span><span class="muted" style="margin-left:auto;font-size:12px">${d[1]}</span></label>`).join('')}</div>${e.docs ? errField('Choose at least one document') : ''}</div>
      ${chk('fxcover', 'Include a cover sheet', true)}${inp('fxmsg', 'Cover note', { area: 1, h: 70, opt: 1, phText: 'Printed on the cover sheet' })}`, `<span class="muted" style="margin-right:auto;font-size:12.5px">${picked.size} ${picked.size === 1 ? 'document' : 'documents'} selected</span>${cancel}<button class="btn primary" data-a="sendfaxsave">${ic('send', 16)} Send fax</button>`)); }
  if (m.type === 'addplan') { const I = info(c); const p = m.id != null && m.id !== '' ? I.plans[+m.id] : {};
    return wide(wrap(p.name ? 'Edit plan' : 'Add plan', `<div class="polgrid">${inp('plorder', 'Order', { v: p.order, opts: ['Primary', 'Secondary', 'Tertiary', 'Pharmacy'], req: 1, err: e.order })}${inp('plname', 'Plan', { v: p.name, opts: [...CARRIERS.map(x => x.name), ...PBMS.map(x => x.name)], req: 1, err: e.name })}
      ${inp('pltype', 'Plan type', { v: p.type, opts: ['Commercial PPO', 'Commercial HMO', 'Medicare Part D', 'Medicaid', 'PBM'], ph: false })}${inp('plmember', 'Member ID', { v: p.member, req: 1, err: e.member })}${inp('plgroup', 'Group', { v: p.group, opt: 1 })}${inp('plbin', 'BIN / PCN', { v: p.bin, opt: 1 })}
      ${inp('plfrom', 'Effective from', { type: 'date', v: p.eff ? isoOf(p.eff.split(' to ')[0]) : '2026-01-01' })}${inp('plto', 'Effective to', { type: 'date', v: p.eff ? isoOf(p.eff.split(' to ')[1]) : '2026-12-31' })}</div>`, `${p.name ? `<button class="btn danger" data-a="planrm" data-id="${m.id}" style="margin-right:auto">Remove plan</button>` : ''}${cancel}<button class="btn primary" data-a="plansave" data-id="${m.id ?? ''}">${p.name ? 'Save plan' : 'Add plan'}</button>`)); }
  if (m.type === 'bi') { const b = S.bi || {}; const st = m.step || 0; const I = info(c);
    const steps = ['Plan and call', 'Benefits', 'Result'];
    const head = `<ol class="mstepper">${steps.map((s, i) => `<li class="${i < st ? 'done' : i === st ? 'on' : ''}"><span>${i < st ? ic('check', 12) : i + 1}</span>${s}</li>`).join('')}</ol>`;
    let body = '';
    if (st === 0) body = `<div class="polgrid">${inp('biplan', 'Plan to verify', { req: 1, err: e.plan, opts: I.plans.map(p => p.name), v: b.plan || I.plans[0].name })}${inp('bimethod', 'Verified by', { opts: ['Phone call with payer rep', 'Payer portal', 'Electronic (270/271)'], v: b.method, ph: false })}${inp('birep', 'Rep name', { v: b.rep, opt: 1 })}${inp('biref', 'Call reference #', { v: b.ref, req: 1, err: e.ref })}</div>`;
    if (st === 1) body = `<div class="polgrid">${inp('bided', 'Deductible', { v: b.ded ?? I.bi.ded })}${inp('bioop', 'Out of pocket max', { v: b.oop ?? I.bi.oop })}${inp('bicopay', 'Specialty copay', { v: b.copay ?? I.bi.copay })}${inp('biql', 'Quantity limit', { v: b.ql ?? I.bi.ql })}${inp('bipa', 'PA required', { v: b.pa ?? I.bi.pa, opts: ['Yes', 'No', 'Unknown'], ph: false })}${inp('bistep', 'Step therapy', { v: b.step ?? I.bi.step, opts: ['No', 'Yes, 1 prior agent', 'Yes, 2 prior agents'], ph: false })}</div>`;
    if (st === 2) body = `${inp('bicov', 'Coverage outcome', { req: 1, err: e.cov, opts: ['Covered', 'Drug Not Covered', 'Pending', 'Not Applicable'], v: b.cov })}${inp('binote', 'Coverage note', { area: 1, h: 90, opt: 1, v: b.note, phText: 'Anything the team should know about this plan' })}<div class="rvmini">${[['Plan', b.plan], ['Reference', b.ref], ['Deductible', b.ded], ['Copay', b.copay], ['PA required', b.pa], ['Step therapy', b.step]].map(([k, v]) => `<span>${k}</span><b>${esc(v || '')}</b>`).join('')}</div>`;
    return wide(wrap('Re-verify benefits', head + body, `${st ? `<button class="btn" data-a="bistep" data-v="-1" style="margin-right:auto">${ic('chevl', 16)} Back</button>` : ''}${cancel}${st < 2 ? `<button class="btn primary" data-a="bistep" data-v="1">Continue ${ic('chevr', 16)}</button>` : `<button class="btn primary" data-a="bisave">${ic('check', 16)} Save verification</button>`}`)); }
  if (m.type === 'closecase2') return wrap('Close this case?', `<p style="margin:0">Closing <b>${esc(fullName(c))}</b> (${c.id}) stops follow-up reminders and removes it from work queues. You can reopen it from the status menu.</p>${inp('cc2r', 'Reason', { req: 1, err: e.r, opts: CLOSE_REASONS })}${inp('cc2n', 'Note', { area: 1, opt: 1, h: 80 })}`, `${cancel}<button class="btn danger" data-a="closecase2save">Close case</button>`);
  if (m.type === 'bulkfu') { const n = S.csel.size; return wrap(`Set follow-up for ${n} ${n === 1 ? 'case' : 'cases'}`, `<div class="seg lite">${[['Tomorrow', 1], ['In 3 days', 3], ['Next week', 7], ['In 2 weeks', 14]].map(([l, d]) => `<button data-a="fuquick" data-v="${d}">${l}</button>`).join('')}</div>${inp('bfudate', 'Follow-up date', { type: 'date', req: 1, err: e.d, w: 220, v: S.fuPick || '' })}${inp('bfunote', 'Reason', { opt: 1, phText: 'Shown in each case audit trail' })}`, `${cancel}<button class="btn primary" data-a="bulkfusave">Set follow-up</button>`); }
  if (m.type === 'orgnew') { const k = m.id || 'carriers'; const noun = { carriers: 'carrier', pbms: 'PBM', pharmacies: 'pharmacy' }[k];
    return wide(wrap(`Add ${noun}`, `<div class="polgrid">${inp('onname', 'Name', { req: 1, err: e.name, span: 1 })}${inp('ontype', 'Type', { opts: k === 'carriers' ? ['Commercial', 'Medicare', 'Medicaid'] : k === 'pbms' ? ['Pharmacy benefit manager'] : ['Specialty pharmacy', 'Retail pharmacy', 'Mail order'], ph: false })}${inp('onphone', 'Phone', { req: 1, err: e.phone })}${inp('onst', 'Street address', { span: 1 })}${inp('oncity', 'City, state, zip', { span: 1 })}${inp('onfax', k === 'pharmacies' ? 'Fax' : 'PA fax', { req: 1, err: e.fax })}</div>`, `${cancel}<button class="btn primary" data-a="orgnewsave" data-v="${k}">Add ${noun}</button>`)); }
  if (m.type === 'deact') { const [kind, id] = m.id.split(':'); const o = kind === 'fac' ? FACILITIES.find(x => x.id === id) : CARRIERS.concat(PBMS, PHARMACIES).find(x => x.id === id); const on = o.status !== 'Inactive';
    const n = kind === 'fac' ? CASES.filter(c => c.facility === o.name && !['Closed', 'Complete'].includes(c.caseStatus)).length : casesFor(o.name).filter(c => !['Closed', 'Complete'].includes(c.caseStatus)).length;
    return wrap(on ? `Deactivate ${esc(o.name)}?` : `Reactivate ${esc(o.name)}?`, on ? `<p style="margin:0">It will no longer appear in pickers for new cases.${n ? ` <b>${n} open ${n === 1 ? 'case stays' : 'cases stay'}</b> linked and unchanged.` : ''}</p>${inp('deactr', 'Reason', { req: 1, err: e.r, opts: ['No longer in network', 'Merged with another organization', 'Duplicate record', 'Closed'] })}` : `<p style="margin:0">It becomes available again in pickers for new cases.</p>`, `${cancel}<button class="btn ${on ? 'danger' : 'primary'}" data-a="deactsave" data-id="${m.id}">${on ? 'Deactivate' : 'Reactivate'}</button>`); }
  if (m.type === 'facnew') return wide(wrap('Add medical facility', `<div class="polgrid">${inp('fnname', 'Facility name', { req: 1, err: e.name, span: 1 })}${inp('fntype', 'Facility type', { opts: [...new Set(FAC_TYPES)], ph: false })}${inp('fnnpi', 'NPI', { req: 1, err: e.npi })}${inp('fnst', 'Street address', { req: 1, err: e.st, span: 1 })}${inp('fncity', 'City, state, zip', { req: 1, err: e.city })}${inp('fnphone', 'Phone', { req: 1, err: e.phone })}${inp('fnfax', 'Fax', { opt: 1 })}${inp('fntax', 'Tax ID', { opt: 1 })}${inp('fncontact', 'Primary contact', { opt: 1, span: 1 })}</div>`, `${cancel}<button class="btn primary" data-a="facnewsave">Add facility</button>`));
  if (m.type === 'usernew') { const kind = m.id || 'fac'; const facs = kind === 'fac' ? (S.route === 'facility' ? null : FACILITIES.map(f => f.name)) : kind === 'pharm' ? PHARMACIES.map(p => p.name) : null;
    return wide(wrap(kind === 'hub' ? 'Add hub user' : 'Add user', `<div class="polgrid">${inp('unname', 'Full name', { req: 1, err: e.name })}${inp('unemail', 'Email', { req: 1, err: e.email, type: 'email' })}${inp('unrole', 'Role', { req: 1, err: e.role, opts: USER_ROLES[kind], v: S.unRole })}${S.unRole === 'Prescriber' ? inp('unnpi', 'NPI', { req: 1, err: e.npi }) : inp('unphone', 'Phone', { opt: 1 })}${facs ? inp('unorg', kind === 'pharm' ? 'Pharmacy' : 'Facility', { req: 1, err: e.org, opts: facs, span: 1 }) : ''}</div>${chk('uninvite', 'Email an invite to set a password', true)}`, `${cancel}<button class="btn primary" data-a="usernewsave" data-v="${kind}">Add user</button>`)); }
  if (m.type === 'pwreset' || m.type === 'reinvite') { const u = findUser(m.id); return wrap(m.type === 'pwreset' ? 'Send password reset?' : 'Resend invite?', `<p style="margin:0">${m.type === 'pwreset' ? 'A reset link goes to' : 'A new invite link goes to'} <b>${esc(u.email)}</b>. ${m.type === 'pwreset' ? 'The link works for 24 hours and signs them out of other sessions.' : 'The previous invite link stops working.'}</p>`, `${cancel}<button class="btn primary" data-a="usermail" data-v="${m.type}" data-id="${esc(m.id)}">${ic('mail', 16)} Send email</button>`); }
  if (m.type === 'userrm') { const u = findUser(m.id); return wrap(`Remove ${esc(u.name)}?`, `<p style="margin:0">They lose access right away. Cases and notes they worked on keep their name in the audit trail.</p>`, `${cancel}<button class="btn danger" data-a="userrmsave" data-id="${esc(m.id)}">Remove user</button>`); }
  if (m.type === 'locnew') return wide(wrap('Add location', `<div class="polgrid">${inp('lnname', 'Location name', { req: 1, err: e.name, span: 1 })}${inp('lnst', 'Street address', { req: 1, err: e.st, span: 1 })}${inp('lncity', 'City, state, zip', { req: 1, err: e.city })}${inp('lnphone', 'Phone', { req: 1, err: e.phone })}${inp('lnfax', 'Fax', { opt: 1, help: 'Needed to fax PA forms to this location' })}${inp('lnnpi', 'NPI', { opt: 1 })}</div>`, `${cancel}<button class="btn primary" data-a="locnewsave">Add location</button>`));
  if (m.type === 'printlist') { const x = S.printData; return wide(wrap(`Expiring ${x.kind === 'Authorization' ? 'authorizations' : 'benefits'} · ${esc(x.name)}`, `<div class="printable"><div class="phead"><b>HealthPacer · eMAXHealth Patient Services</b><span>Printed ${fmt(TODAY)} by ${ME}</span></div><h3 style="margin:8px 0">${esc(x.name)}</h3><p class="muted" style="margin:0 0 10px;font-size:13px">Patients whose ${x.kind === 'Authorization' ? 'prior authorization' : 'benefit verification'} ends soon. Please send updated information through the provider portal or by fax to 1 (800) 555-0199.</p>
      <table class="dt"><thead><tr><th>Patient</th><th>DOB</th><th>Case</th><th>Payer</th><th>Expires</th></tr></thead><tbody>${x.list.map(e2 => `<tr><td class="strong">${esc(fullName(e2.c))}</td><td class="num">${fmt(e2.c.dob)}</td><td class="num">${e2.c.id}</td><td>${esc(e2.c.payer)}</td><td class="num">${fmt(e2.exp)}</td></tr>`).join('')}</tbody></table></div>`, `${cancel}<button class="btn primary" data-a="doprint">Print</button>`), 'wide printmodal'); }
  if (m.type === 'aenew') return wide(wrap('Record adverse event', `<div class="note-banner">${ic('info', 16)}<span>Report within 24 hours of awareness. The safety team is notified when you submit.</span></div><div class="polgrid">${inp('aecase', 'Case', { req: 1, err: e.case, opts: CASES.slice(0, 20).map(x => `${x.id} · ${fullName(x)}`) })}${inp('aedate', 'Date of awareness', { type: 'date', v: '2026-09-24', req: 1 })}${inp('aesev', 'Seriousness', { opts: ['Non-serious', 'Serious', 'Serious, hospitalization'], ph: false })}${inp('aesrc', 'Reported by', { opts: ['Patient', 'Caregiver', 'Prescriber', 'Pharmacy'], ph: false })}</div>${inp('aedesc', 'What happened', { area: 1, h: 100, req: 1, err: e.desc, phText: 'Describe the event, onset and any action taken' })}`, `${cancel}<button class="btn danger" data-a="aesave">Submit AE</button>`));
  if (m.type === 'orgpolicy') return '';
  return _xm2(m, wrap);
};

/* ---------- Pagination state ---------- */
S.pg = {};
const pagerX = (pid, n, noun) => { const pages = Math.max(1, Math.ceil(n / 25)); const p = Math.min(S.pg[pid] || 1, pages); return `<div class="pager num"><span>${n ? `${(p - 1) * 25 + 1} to ${Math.min(p * 25, n)} of ${n} ${noun}` : `0 ${noun}`}</span><span class="sp"></span><button class="btn sm ghost" data-a="pgo" data-p="${pid}" data-v="${p - 1}" ${p <= 1 ? 'disabled' : ''}>${ic('chevl', 14)} Previous</button><span>Page ${p} of ${pages}</span><button class="btn sm ghost" data-a="pgo" data-p="${pid}" data-v="${p + 1}" ${p >= pages ? 'disabled' : ''}>Next ${ic('chevr', 14)}</button></div>`; };
const pageSlice = (pid, rows) => { const pages = Math.max(1, Math.ceil(rows.length / 25)); const p = Math.min(S.pg[pid] || 1, pages); return rows.slice((p - 1) * 25, p * 25); };

/* ---------- Notifications ---------- */
const NOTIFS = [
  { id: 'n1', icon: 'alert', t: 'Appeal 2 packet is ready to fax', s: 'Johnson, Rachel · E100304', when: '12 min ago', act: 'case', ref: 'E100304', unread: true },
  { id: 'n2', icon: 'chat', t: 'Dr. Kasa Mahale replied', s: 'Updated labs attached for the second appeal', when: '1 hr ago', act: 'case', ref: 'E100304', tab: 'messages', unread: true },
  { id: 'n3', icon: 'fax', t: '2 faxes failed to send', s: 'Fax Transmissions', when: '3 hr ago', act: 'go', ref: 'fax', unread: true },
  { id: 'n4', icon: 'userplus', t: 'New account request', s: 'Hollywood Doctors · office staff', when: 'Yesterday', act: 'go', ref: 'acct', unread: false },
  { id: 'n5', icon: 'users', t: '3 cases reassigned to you', s: 'By Sarah Mitchell · workload balancing', when: 'Yesterday', act: 'go', ref: 'cases', unread: false }
];
function notifPop() {
  const n = NOTIFS.filter(x => x.unread).length;
  return `<div class="menu-pop notifpop" role="dialog" aria-label="Notifications"><div class="np-h"><b>Notifications</b>${n ? `<button class="link-btn" data-a="notifall">Mark all read</button>` : '<span class="muted" style="font-size:12px">All caught up</span>'}</div>${NOTIFS.map(x => `<button class="np-i ${x.unread ? 'unread' : ''}" data-a="notifopen" data-v="${x.id}"><span class="np-ic">${ic(x.icon, 16)}</span><span class="np-t"><b>${esc(x.t)}</b><span>${esc(x.s)}</span></span><span class="np-w">${x.when}</span></button>`).join('')}</div>`;
}
const _util0 = util;
util = function () {
  const n = NOTIFS.filter(x => x.unread).length;
  return _util0().replace(/<button class="iconbtn" aria-label="Notifications" data-a="toast" data-v="3 new notifications">([\s\S]*?)<span class="dot"><\/span><\/button>/, (m, icn) => `<div class="notifwrap"><button class="iconbtn" aria-label="Notifications${n ? `, ${n} unread` : ''}" data-a="menu" data-v="notif" aria-expanded="${S.menu === 'notif'}">${icn}${n ? `<span class="dot"></span>` : ''}</button>${S.menu === 'notif' ? notifPop() : ''}</div>`);
};

/* ---------- Actions ---------- */
function flash(key) { S.flash = key; clearTimeout(flash.t); flash.t = setTimeout(() => { S.flash = null; }, 1600); }
function docFromRow(i) { const d = DOCS[i]; return { name: d[0], type: d[1], date: d[2], by: d[3], size: d[4], di: i, pages: /packet|appeal/i.test(d[0]) ? 6 : 2 }; }
Object.assign(EXTRA, {
  edit(t) { S.drawer = { type: 'edit', id: t.dataset.v }; },
  useredit(t) { S.drawer = { type: 'edit', id: 'user', ref: t.dataset.v }; S.pop = null; },
  editsave(t) {
    const d = S.drawer, E = EDITS[d.id], tgt = editTarget(d), fs = E.fields(tgt), v = {}, err = {};
    fs.forEach(([k, l, o]) => { v[k] = val('ed-' + k); if (o.req && !v[k]) err[k] = `${l} is required`; });
    if (Object.keys(err).length) { d.err = err; return; }
    E.save(tgt, v); if (E.area) auditLog(E.area, E.title.replace('Edit ', '').replace(/^./, x => x.toUpperCase()) + ' updated', 'Edited in side panel');
    S.drawer = null; toast(`${E.title.replace('Edit ', '').replace(/^./, x => x.toUpperCase())} saved`);
  },
  docopen(t) { if (t.dataset.i != null) openDoc(docFromRow(+t.dataset.i)); else openDoc({ name: t.dataset.v, type: t.dataset.type || (/fax|cover/i.test(t.dataset.v) ? 'Fax' : /appeal/i.test(t.dataset.v) ? 'Appeal' : /PA_/i.test(t.dataset.v) ? 'Prior authorization' : 'Document'), date: t.dataset.date, pages: +(t.dataset.pages || 2), src: t.dataset.src }); },
  docpg(t) { const d = S.drawer; d.page = Math.max(1, Math.min(d.doc.pages || 2, (d.page || 1) + +t.dataset.v)); },
  doczoom(t) { const d = S.drawer; d.zoom = Math.round(Math.max(.8, Math.min(1.4, (d.zoom || 1) + .2 * +t.dataset.v)) * 10) / 10; },
  docdl(t) { if (t.dataset.i != null) { const d = docFromRow(+t.dataset.i); downloadDoc(d.name, d); } else downloadDoc(S.drawer.doc.name, S.drawer.doc); S.pop = null; toast('Preparing download'); },
  docprint() { document.body.classList.add('print-doc'); setTimeout(() => { window.print(); document.body.classList.remove('print-doc'); }, 60); },
  docfax() { const di = S.drawer.doc.di; S.drawer = null; S.faxDocs = new Set(di != null ? [di] : []); S.modal = { type: 'sendfax' }; if (S.route === 'case') S.tab = 'faxes'; },
  docshare(t) { const i = +t.dataset.id, k = +t.dataset.v, d = DOCS[i]; d[k] = !d[k]; const who = k === 5 ? 'provider' : 'pharmacy'; auditLog('Documents', d[k] ? `Document shared with ${who}` : `Document no longer shared with ${who}`, d[0]); toast(d[k] ? `Shared with ${who}` : `No longer shared with ${who}`); },
  docpick(t) { S.pickName = t.files && t.files[0] ? t.files[0].name : null; },
  adddocsave(t) {
    const fac = t.dataset.v === 'fac'; const name = val('docname') || S.pickName, type = val('doctype'); const err = {};
    if (!name) err.file = 1; if (!type) err.type = 'Choose a type';
    if (Object.keys(err).length) { S.modal.err = err; return; }
    if (fac) { const f = FACILITIES.find(x => x.id === S.detail.facility) || FACILITIES[0]; f.docs.unshift([name, type, fmt(TODAY)]); }
    else { DOCS.unshift([name, type, fmt(TODAY), ME, S.pickSize || '1.2 MB', val('docpv'), val('docph')]); auditLog('Documents', 'Document added', name); flash('doc0'); S.docq = ''; }
    S.modal = null; S.pickName = null; toast('Document added');
  },
  docrenamesave(t) { const i = +t.dataset.id, n = val('rnname'); if (!n) { S.modal.err = { name: 'Enter a name' }; return; } DOCS[i][0] = n; DOCS[i][1] = val('rntype'); S.modal = null; flash('doc' + i); toast('Document updated'); },
  docrmsave(t) { const d = DOCS.splice(+t.dataset.id, 1)[0]; auditLog('Documents', 'Document removed', d[0]); S.modal = null; toast('Document removed'); },
  msgsend() {
    const v = val('newmsg'), to = val('msgto'); S.msgTo = to;
    if (!v) { S.msgErr = true; return; }
    MESSAGES.unshift([ME, 'Hub', nowStamp(), v, [to === 'To provider' ? 'Shared with provider' : to === 'To pharmacy' ? 'Shared with pharmacy' : 'Internal']]);
    S.msgErr = false; S.msgDraft = ''; flash('msg0'); auditLog('Messages', to === 'Internal note' ? 'Internal message added' : 'Message sent ' + to.toLowerCase(), v.slice(0, 60));
    toast(to === 'Internal note' ? 'Internal message saved' : `Message sent ${to.toLowerCase()}`);
    const el = document.getElementById('newmsg'); if (el) el.value = '';
  },
  msgreply(t) { const m = MESSAGES[+t.dataset.i]; S.msgTo = m[1] === 'Pharmacy' ? 'To pharmacy' : m[1] === 'HCP' ? 'To provider' : 'Internal note'; S.pop = null; S.msgDraft = `Re: ${m[0]}. `; scrollTo({ top: 0, behavior: 'smooth' }); setTimeout(() => { const el = document.getElementById('newmsg'); if (el) { el.focus(); el.setSelectionRange(el.value.length, el.value.length); } }, 80); },
  msgrmsave(t) { MESSAGES.splice(+t.dataset.id, 1); S.modal = null; toast('Message deleted'); },
  casenotehl(t) { const nt = NOTES[+t.dataset.i]; nt[4] = !nt[4]; S.pop = null; flash('note' + t.dataset.i); toast(nt[4] ? 'Note highlighted' : 'Highlight removed'); },
  casenotesave(t) {
    const text = val('cntext'), hl = val('cnhl'); if (!text) { S.modal.err = { text: 'Write the note first' }; return; }
    if (t.dataset.id !== '') { const nt = NOTES[+t.dataset.id]; nt[3] = text; nt[4] = hl; flash('note' + t.dataset.id); }
    else { NOTES.unshift([ME, 'Note', nowStamp(), text, hl]); flash('note0'); auditLog('Notes', 'Note added', text.slice(0, 60)); }
    S.modal = null; toast('Note saved');
  },
  casenotermsave(t) { NOTES.splice(+t.dataset.id, 1); S.modal = null; toast('Note removed'); },
  calldir(t) { S.callDir = t.dataset.v; },
  logcallsave() {
    const who = val('clwho'), out = val('clout'), note = val('clnote'), fu = val('clfu'), err = {};
    if (!who) err.who = 'Choose who you spoke with'; if (!out) err.out = 'Choose an outcome'; if (!note) err.note = 'Add a short summary';
    if (Object.keys(err).length) { S.modal.err = err; return; }
    const c = byId(S.caseId); const dir = S.callDir || 'Outbound';
    NOTES.unshift([ME, 'Phone log', nowStamp(), `${dir === 'Outbound' ? 'Called' : 'Call from'} ${who}, ${val('clnum')}. ${out}, ${val('clmin') || 0} min. ${note}`, val('clhl')]);
    if (fu) { const [y, m, d] = fu.split('-').map(Number); c.follow = new Date(y, m - 1, d); }
    auditLog('Notes', 'Phone log added', `${out}: ${who}`); flash('note0'); S.modal = null; toast(fu ? 'Call saved. Follow-up date updated' : 'Call saved');
  },
  faxopen(t) { const f = FAXES[+t.dataset.i]; openDoc({ name: `Fax_${f[0].split(' ')[0].replace(/\//g, '-')}_${f[2].replace(/\W+/g, '_')}.pdf`, type: `${f[1]} fax`, date: f[0], pages: f[4], src: `${f[1] === 'Outbound' ? 'Sent to' : 'Received from'} ${f[2]} · ${f[3]} · ${f[5]}` }); },
  faxdoc(t) { const i = +t.dataset.i; S.faxDocs.has(i) ? S.faxDocs.delete(i) : S.faxDocs.add(i); S.faxTo = val('fxto'); S.faxNum = val('fxnum'); S.faxCase = val('fxcase'); const er = S.modal.err; if (er) { if (S.faxDocs.size) delete er.docs; if (S.faxTo) delete er.to; if (S.faxNum) delete er.num; if (S.faxCase) delete er.case; } },
  sendfaxsave() {
    const to = val('fxto'), num = val('fxnum'), cs = S.route !== 'case' ? val('fxcase') : S.caseId, err = {};
    if (!to) err.to = 'Choose a recipient'; if (!num) err.num = 'Enter a fax number'; if (!S.faxDocs.size) err.docs = 1; if (!cs) err.case = 'Choose a case';
    if (Object.keys(err).length) { S.faxTo = to; S.faxNum = num; S.modal.err = err; return; }
    const pages = [...S.faxDocs].reduce((n, i) => n + (/packet|appeal/i.test(DOCS[i][0]) ? 6 : 2), val('fxcover') ? 1 : 0);
    const who = to.replace(/ \(.*\)$/, '') === 'Other number' ? 'Manual recipient' : to.replace(/ \(.*\)$/, '');
    FAXES.unshift([nowStamp(), 'Outbound', who, num, pages, 'Sending']);
    const caseId = String(cs).split(' ')[0];
    FAXLOG.unshift({ id: uid('FX'), date: new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate(), new Date().getHours(), new Date().getMinutes()), dir: 'Outbound', who, kind: (to.match(/\((.*)\)/) || [])[1] || 'Other', num, type: 'Case document', caseId, job: String(885000 + Math.floor(Math.random() * 999)), pages, status: 'Sending', error: '' });
    auditLog('Faxes', `Fax sent to ${who}`, `${pages} pages`); flash('fax0'); S.modal = null; S.faxDocs = null; S.faxTo = S.faxNum = S.faxCase = null; toast(`Fax sending to ${who}`);
    setTimeout(() => { if (FAXES[0] && FAXES[0][5] === 'Sending') { FAXES[0][5] = 'Delivered'; if (FAXLOG[0].status === 'Sending') FAXLOG[0].status = 'Delivered'; render(); } }, 4000);
  },
  plansave(t) {
    const c = byId(S.caseId), I = info(c); const v = { order: val('plorder'), name: val('plname'), type: val('pltype'), member: val('plmember'), group: val('plgroup'), bin: val('plbin'), eff: `${usOf(val('plfrom'))} to ${usOf(val('plto'))}` }; const err = {};
    if (!v.order) err.order = 'Choose an order'; if (!v.name) err.name = 'Choose a plan'; if (!v.member) err.member = 'Enter the member ID';
    if (Object.keys(err).length) { S.modal.err = err; return; }
    if (t.dataset.id !== '') { Object.assign(I.plans[+t.dataset.id], v); flash('plan' + t.dataset.id); } else { I.plans.push({ ...v, cov: 'Pending' }); flash('plan' + (I.plans.length - 1)); }
    auditLog('Benefits', t.dataset.id !== '' ? 'Plan updated' : 'Plan added', v.name); S.modal = null; toast(t.dataset.id !== '' ? 'Plan saved' : 'Plan added');
  },
  planrm(t) { const I = info(byId(S.caseId)); const p = I.plans.splice(+t.dataset.id, 1)[0]; auditLog('Benefits', 'Plan removed', p.name); S.modal = null; toast('Plan removed'); },
  bistep(t) {
    const dir = +t.dataset.v, st = S.modal.step || 0, b = S.bi = S.bi || {};
    const grab = { 0: ['plan:biplan', 'method:bimethod', 'rep:birep', 'ref:biref'], 1: ['ded:bided', 'oop:bioop', 'copay:bicopay', 'ql:biql', 'pa:bipa', 'step:bistep'], 2: ['cov:bicov', 'note:binote'] }[st];
    grab.forEach(x => { const [k, id] = x.split(':'); b[k] = val(id); });
    if (dir > 0 && st === 0) { const err = {}; if (!b.plan) err.plan = 'Choose a plan'; if (!b.ref) err.ref = 'Enter the reference number from the call or portal'; if (Object.keys(err).length) { S.modal.err = err; return; } }
    S.modal = { type: 'bi', step: Math.max(0, Math.min(2, st + dir)) };
  },
  bisave() {
    const b = S.bi; b.cov = val('bicov'); b.note = val('binote'); if (!b.cov) { S.modal.err = { cov: 'Choose the coverage outcome' }; return; }
    const c = byId(S.caseId), I = info(c);
    Object.assign(I.bi, { date: fmt(TODAY), by: ME, ded: b.ded, oop: b.oop, copay: b.copay, pa: b.pa, step: b.step, ql: b.ql, ref: b.ref });
    const p = I.plans.find(x => x.name === b.plan); if (p) p.cov = b.cov; if (p === I.plans[0]) c.coverage = b.cov;
    I.covnotes.unshift([fmt(TODAY), ME, `Re-verified ${b.plan} by ${b.method.toLowerCase()}. Reference #${b.ref}${b.rep ? '. Rep: ' + b.rep : ''}.${b.note ? ' ' + b.note : ''}`]);
    auditLog('Benefits', 'Benefits re-verified', `${b.plan}: ${b.cov}`); S.bi = null; S.modal = null; toast('Benefits verified');
  },
  audr(t) { S.audr = t.dataset.v; S.menu = null; },
  audcsv() { downloadCsv(`${S.caseId}_audit_trail.csv`, ['When', 'User', 'Area', 'Action', 'Details'], AUDIT); toast('Audit trail exported'); },
  closecase2save() { const r = val('cc2r'); if (!r) { S.modal.err = { r: 'Choose a reason' }; return; } const c = byId(S.caseId); const was = c.caseStatus; c.caseStatus = 'Closed'; c.follow = null; auditLog('Case', 'Case closed', `${was} to Closed: ${r}`); S.modal = null; toast(`Case closed: ${r}`); },
  refreshcase() { S.menu = null; S.refreshing = true; setTimeout(() => { S.refreshing = false; byId(S.caseId).updated = TODAY; toast('Case refreshed. Everything is up to date'); render(); }, 900); },
  fuquick(t) { S.fuPick = isoOf(fmt(addDays(TODAY, +t.dataset.v))); const el = document.getElementById('bfudate'); if (el) el.value = S.fuPick; },
  bulkfusave() { const d = val('bfudate'); if (!d) { S.modal.err = { d: 'Pick a date' }; return; } const [y, m, dd] = d.split('-').map(Number); const n = S.csel.size; S.csel.forEach(id => { byId(id).follow = new Date(y, m - 1, dd); }); S.modal = null; S.fuPick = null; toast(`Follow-up set to ${usOf(d)} on ${n} ${n === 1 ? 'case' : 'cases'}`); },
  exportcases() { const list = filtered(); downloadCsv('cases.csv', ['Case ID', 'Patient', 'DOB', 'Prescriber', 'Facility', 'Follow-up', 'Case status', 'Coverage', 'Authorization', 'PAP', 'Assigned to'], list.map(c => [c.id, fullName(c), fmt(c.dob), c.prescriber, c.facility, fmt(c.follow), c.caseStatus, c.coverage, c.ar, c.pap, c.owner])); toast(`Exported ${list.length} cases`); },
  pgo(t) { S.pg[t.dataset.p] = +t.dataset.v; scrollTo({ top: 0, behavior: 'smooth' }); },
  notifall() { NOTIFS.forEach(x => x.unread = false); S.menu = 'notif'; },
  notifopen(t) { const x = NOTIFS.find(n => n.id === t.dataset.v); x.unread = false; S.menu = null; if (x.act === 'case') { openCase(x.ref); if (x.tab) S.tab = x.tab; } else go(x.ref); },
  orgnew(t) { S.modal = { type: 'orgnew', id: t.dataset.v, ret: S.modal && S.modal.type === 'policy' ? S.modal : null }; },
  orgnewsave(t) {
    const k = t.dataset.v, v = { name: val('onname'), type: val('ontype'), phone: val('onphone'), st: val('onst'), city: val('oncity'), fax: val('onfax') }, err = {};
    if (!v.name) err.name = 'Enter a name'; if (!v.phone) err.phone = 'Enter a phone number'; if (!v.fax) err.fax = 'Enter a fax number';
    if (Object.keys(err).length) { S.modal.err = err; return; }
    const list = k === 'pbms' ? PBMS : k === 'pharmacies' ? PHARMACIES : CARRIERS; const o = { id: (k === 'pbms' ? 'PB' : k === 'pharmacies' ? 'PH' : 'CR') + (list.length + 1), ...v, status: 'Active' }; list.push(o);
    const ret = S.modal.ret; S.modal = ret || null;
    if (ret) { S.ik.pendingCarrier = o.name; toast(`${o.name} added and selected`); }
    else { S.detail.org = o.id; S.detail.cstat = 'Open'; S.route = k === 'pbms' ? 'pbm' : k === 'pharmacies' ? 'pharmacy' : 'carrier'; toast(`${o.name} added`); }
  },
  deactsave(t) {
    const [kind, id] = t.dataset.id.split(':'); const o = kind === 'fac' ? FACILITIES.find(x => x.id === id) : CARRIERS.concat(PBMS, PHARMACIES).find(x => x.id === id);
    if (o.status !== 'Inactive') { const r = val('deactr'); if (!r) { S.modal.err = { r: 'Choose a reason' }; return; } o.status = 'Inactive'; toast(`${o.name} deactivated`); } else { o.status = 'Active'; toast(`${o.name} reactivated`); }
    S.modal = null;
  },
  facnewsave() {
    const v = { name: val('fnname'), type: val('fntype'), npi: val('fnnpi'), st: val('fnst'), city: val('fncity'), phone: val('fnphone'), fax: val('fnfax'), tax: val('fntax'), contact: val('fncontact') }, err = {};
    ['name', 'npi', 'st', 'city', 'phone'].forEach(k => { if (!v[k]) err[k] = 'Required'; });
    if (Object.keys(err).length) { S.modal.err = err; return; }
    const loc = { name: v.name, st: v.st, city: v.city, phone: v.phone, fax: v.fax, npi: v.npi, tax: v.tax };
    const f = { id: 'MF' + (FACILITIES.length + 1), name: v.name, type: v.type, contact: v.contact || 'Not set', phone: v.phone, fax: v.fax || 'None', npi: v.npi, tax: v.tax || 'Not set', locs: [loc], users: [], pinned: false, status: 'Active', notes: [], docs: [] };
    FACILITIES.push(f); LOCATIONS.push({ ...loc, fac: f }); S.modal = null; S.detail.facility = f.id; S.tab2.facility = 'users'; S.route = 'facility'; toast(`${f.name} added`);
  },
  unrole(t) { },
  usernewsave(t) {
    const kind = t.dataset.v, v = { name: val('unname'), email: val('unemail'), role: val('unrole'), npi: val('unnpi'), org: val('unorg') }, err = {};
    if (!v.name) err.name = 'Enter a name'; if (!/.+@.+\..+/.test(v.email)) err.email = 'Enter a valid email'; if (!v.role) err.role = 'Choose a role'; if (v.role === 'Prescriber' && document.getElementById('unnpi') && !v.npi) err.npi = 'Prescribers need an NPI';
    if (document.getElementById('unorg') && !v.org) err.org = 'Choose one';
    if (Object.keys(err).length) { S.unRole = v.role; S.modal.err = err; return; }
    const inv = val('uninvite'); const u = { name: v.name, email: v.email, role: v.role, status: inv ? 'Invite pending' : 'Active', kind, added: fmt(TODAY) };
    if (kind === 'fac') { const f = S.route === 'facility' ? (FACILITIES.find(x => x.id === S.detail.facility) || FACILITIES[0]) : FACILITIES.find(x => x.name === v.org); f.users.push(u); if (v.role === 'Prescriber') PRESCRIBERS.push([v.name, f.name]); }
    else if (kind === 'pharm') { u.org = v.org; u.ref = uid('PU'); PUSERS.push(u); }
    else { u.ref = uid('HU'); u.last = 'Never'; HUBUSERS.push(u); }
    S.modal = null; S.unRole = null; toast(inv ? `${v.name} added. Invite sent to ${v.email}` : `${v.name} added`);
  },
  usermail(t) { const u = findUser(t.dataset.id); S.modal = null; toast(t.dataset.v === 'pwreset' ? `Password reset sent to ${u.email}` : `Invite sent again to ${u.email}`); },
  userrmsave(t) { const u = findUser(t.dataset.id); if (u.fac) u.fac.users.splice(u.fac.users.indexOf(u), 1); else { const L = u.kind === 'pharm' ? PUSERS : HUBUSERS; L.splice(L.indexOf(u), 1); } S.modal = null; toast(`${u.name} removed`); },
  locnewsave() {
    const v = { name: val('lnname'), st: val('lnst'), city: val('lncity'), phone: val('lnphone'), fax: val('lnfax'), npi: val('lnnpi') }, err = {};
    ['name', 'st', 'city', 'phone'].forEach(k => { if (!v[k]) err[k] = 'Required'; }); if (Object.keys(err).length) { S.modal.err = err; return; }
    const f = FACILITIES.find(x => x.id === S.detail.facility) || FACILITIES[0]; const l = { ...v, npi: v.npi || f.npi, tax: f.tax }; f.locs.push(l); LOCATIONS.push({ ...l, fac: f }); S.modal = null; toast('Location added');
  },
  printlist(t) { const kind = t.dataset.k; const rows = EXPIRING.filter(e => e.kind === kind && e.c.facility === t.dataset.v); S.printData = { kind, name: t.dataset.v, list: rows }; S.modal = { type: 'printlist', id: t.dataset.v }; },
  doprint() { document.body.classList.add('print-list'); setTimeout(() => { window.print(); document.body.classList.remove('print-list'); }, 60); },
  aesave() {
    const cs = val('aecase'), d = val('aedesc'), err = {}; if (!cs) err.case = 'Choose a case'; if (!d) err.desc = 'Describe what happened';
    if (Object.keys(err).length) { S.modal.err = err; return; }
    AES.unshift({ id: 'AE-' + (2031 + AES.length), c: byId(cs.split(' ')[0]), date: usOf(val('aedate')), sev: val('aesev'), src: val('aesrc'), status: 'Submitted', by: ME, desc: d, due: fmt(addDays(TODAY, 1)) });
    S.modal = null; toast('Adverse event submitted to the safety team');
  },
  gonew() { EXTRA.newcase(); },
  settings(t) { S.menu = null; go('settings'); }
});
document.addEventListener('input', (e) => {
  const k = e.target.dataset.in;
  if (k === 'docq') { S.docq = e.target.value; render(); }
  if (k === 'audq') { S.audq = e.target.value; render(); }
  if (k === 'setq') { S.setq = e.target.value; }
  if (e.target.id === 'newmsg') { S.msgDraft = e.target.value; if (S.msgErr && e.target.value) { S.msgErr = false; render(); } }
  if (k === 'pq' || k === 'q') { S.pg[k === 'q' ? 'cases' : e.target.dataset.p] = 1; }
});
document.addEventListener('change', (e) => {
  if (e.target.id === 'msgto') { S.msgTo = e.target.value; render(); }
  if (e.target.id === 'unrole') { S.unRole = e.target.value; render(); }
  if (e.target.id === 'fxto') { const b = FAX_BOOK().find(x => `${x[0]} (${x[1]})` === e.target.value); S.faxTo = e.target.value; S.faxNum = b ? b[2] : ''; const n = document.getElementById('fxnum'); if (n) { n.value = S.faxNum; if (!b) n.focus(); } }
  if (e.target.dataset.set) { SETTINGS[e.target.dataset.set] = e.target.type === 'checkbox' ? e.target.checked : e.target.value; toast('Setting saved'); render(); }
  if (e.target.id === 'docfile') { const f = e.target.files && e.target.files[0]; S.pickName = f ? f.name : null; S.pickSize = f ? (f.size > 1e6 ? (f.size / 1e6).toFixed(1) + ' MB' : Math.max(1, Math.round(f.size / 1000)) + ' KB') : null; render(); }
});
const _afterRender1 = afterRender;
afterRender = function () {
  _afterRender1();
  if (S.ik && S.ik.pendingCarrier) { const el = document.getElementById('pol-carrier'); if (el) { if (![...el.options].some(o => o.value === S.ik.pendingCarrier)) el.add(new Option(S.ik.pendingCarrier, S.ik.pendingCarrier)); el.value = S.ik.pendingCarrier; S.ik.pendingCarrier = null; } }
  document.querySelectorAll('.drawer [id^="ed-"], .modal [id]').forEach(el => { el.dataset.fresh = ''; delete el.dataset.fresh; });
};

/* Clear a field's error as soon as the person fixes it */
['input', 'change'].forEach(ev => document.addEventListener(ev, (e) => {
  const box = e.target.closest && e.target.closest('.modal .input.err, .drawer .input.err'); if (!box) return;
  if (e.target.value === '' && e.target.type !== 'checkbox') return;
  box.classList.remove('err'); const m = box.querySelector('.ikerr'); if (m) m.remove();
  const err = (S.modal && S.modal.err) || (S.drawer && S.drawer.err); if (err && typeof err === 'object') { const k = Object.keys(err).find(k => e.target.id.endsWith(k)); if (k) delete err[k]; }
}));
/* ================= Round 5: pages that were planned for later ================= */
const R13 = rng(913);
const pk13 = (a) => a[Math.floor(R13() * a.length)];
const PHARMACIES = [
  ['Optime', 'Specialty pharmacy', '5000 Optime Way', 'Memphis, TN 38118', '1 (855) 555-0180', '1 (855) 555-0188'],
  ['CarePath Specialty', 'Specialty pharmacy', '120 CarePath Blvd', 'Orlando, FL 32801', '1 (866) 555-0210', '1 (866) 555-0211'],
  ['Meridian Rx', 'Mail order', '48 Meridian Court', 'Columbus, OH 43215', '1 (877) 555-0133', '1 (877) 555-0134']
].map(([name, type, st, city, phone, fax], i) => ({ id: 'PH' + (i + 1), name, type, st, city, phone, fax, status: 'Active' }));
const PUSERS = [['Dana Whitlock', 'Pharmacist', 'Optime'], ['Leo Park', 'Intake coordinator', 'Optime'], ['Mira Castillo', 'Pharmacy technician', 'CarePath Specialty'], ['Omar Haddad', 'Pharmacist', 'CarePath Specialty'], ['Beth Nguyen', 'Administrator', 'Meridian Rx'], ['Sam Ortiz', 'Intake coordinator', 'Meridian Rx']]
  .map(([name, role, org], i) => ({ ref: 'PU' + (i + 1), kind: 'pharm', name, role, org, email: name.toLowerCase().replace(' ', '.') + '@' + org.toLowerCase().replace(/\W+/g, '') + '.example', status: i === 4 ? 'Invite pending' : 'Active', last: i === 4 ? 'Never' : fmt(addDays(TODAY, -(i * 2 + 1))) }));
const HUBUSERS = [['Janet Mills', 'Patient access coordinator'], ['Sarah Mitchell', 'Patient access coordinator'], ['Marketta Howie', 'Case manager'], ['Devon Ruiz', 'Patient access coordinator'], ['Alicia Moreno', 'Supervisor'], ['Grant Pierce', 'Administrator'], ['Nina Shah', 'Read only']]
  .map(([name, role], i) => ({ ref: 'HU' + (i + 1), kind: 'hub', name, role, email: name.toLowerCase().replace(' ', '.') + '@emaxhealth.example', status: i === 6 ? 'Invite pending' : 'Active', last: i === 6 ? 'Never' : i < 4 ? 'Today' : fmt(addDays(TODAY, -(i + 1))), cases: CASES.filter(c => c.owner === name).length }));
const AE_DESC = ['Nausea and dizziness starting two days after dose increase', 'Headache and fatigue reported during follow-up call', 'Rash on forearms, resolved after antihistamine', 'Patient reported low energy and dizziness on standing', 'Missed doses for four days, then resumed; no symptoms reported'];
const AES = Array.from({ length: 7 }, (_, i) => { const c = CASES[(i * 5 + 2) % CASES.length]; return { id: 'AE-' + (2024 + i), c, date: fmt(addDays(TODAY, -[0, 1, 3, 6, 11, 19, 30][i])), sev: i === 2 ? 'Serious' : i === 5 ? 'Serious, hospitalization' : 'Non-serious', src: pk13(['Patient', 'Caregiver', 'Prescriber', 'Pharmacy']), status: ['Draft', 'Submitted', 'Follow-up requested', 'Submitted', 'Closed', 'Closed', 'Closed'][i], by: pk13(TEAM), desc: AE_DESC[i % AE_DESC.length], due: fmt(addDays(TODAY, [1, 0, 2, -1, -5, -12, -24][i])) }; });
const CONSENTS = CASES.filter((c, i) => i % 4 !== 3).slice(0, 16).map((c, i) => ({ c, exp: addDays(TODAY, [-4, 2, 5, 9, 12, 16, 20, 24, 28, 33, 39, 44, 50, 57, 63, 80][i]), via: pk13(['E-signature', 'Paper form', 'Verbal, recorded']), sent: i % 3 === 0 ? fmt(addDays(TODAY, -(i + 2))) : null }));
const SETTINGS = { name: ME, email: 'janet.mills@emaxhealth.example', phone: '(615) 555-0142', landing: 'Dashboard', rows: '25', n_assign: true, n_msg: true, n_fax: true, n_expire: false, n_digest: true, ooo: false, delegate: 'Sarah Mitchell', sig: 'Janet Mills\nPatient Access Coordinator, eMAXHealth Patient Services' };

const statusPill = (s) => pill(s === 'Active' ? 'Active' : s === 'Inactive' ? 'Closed' : 'Pending').replace('>Closed<', '>Inactive<').replace('>Pending<', `>${s}<`);
const aeTone = { Draft: 't-neutral', Submitted: 't-info', 'Follow-up requested': 't-warn', Closed: 't-ok' };

/* ---------- Adverse events ---------- */
ROUTES_X.ae = () => listPage('ae', {
  title: 'Adverse Events', sub: 'Report within 24 hours of awareness', noun: 'events', rows: AES, searchPh: 'Search AE number, patient, case',
  head: `<button class="btn danger" data-a="modal" data-v="aenew">${ic('alert', 16)} Record adverse event</button>`,
  filters: [{ key: 'status', label: 'Status', get: r => r.status, opts: ['Draft', 'Submitted', 'Follow-up requested', 'Closed'] }, { key: 'sev', label: 'Seriousness', get: r => r.sev, opts: ['Non-serious', 'Serious', 'Serious, hospitalization'] }, { key: 'src', label: 'Reported by', get: r => r.src }],
  text: r => [r.id, fullName(r.c), r.c.id].join(' '),
  cols: [
    ['AE', '96px', r => `<span class="strong num">${r.id}</span>`],
    ['Patient', 'auto', r => `<a href="#" data-a="case" data-id="${r.c.id}" class="strong pname">${esc(fullName(r.c))}</a><span class="sub num">${r.c.id}</span>`],
    ['Aware', '110px', r => `<span class="num">${r.date}</span>`],
    ['Seriousness', '190px', r => `<span class="pill ${r.sev === 'Non-serious' ? 't-neutral' : 't-danger'}">${r.sev}</span>`],
    ['Reported by', '120px', r => r.src],
    ['Status', '170px', r => `<span class="pill ${aeTone[r.status]}">${r.status}</span>`],
    ['Due', '110px', r => r.status === 'Closed' ? '<span class="muted">Done</span>' : `<span class="num ${dayDiff(new Date(r.due)) < 0 ? 'overdue' : ''}">${r.due}</span>`]
  ], opts: { rowAct: r => `data-a="drawer" data-v="ae" data-id="${r.id}"`, sel: r => S.drawer && S.drawer.id === r.id }
});

/* ---------- Expiring consents ---------- */
ROUTES_X.expcon = () => listPage('expcon', {
  title: 'Expiring Consents', sub: 'Patient consents ending in the next 90 days', noun: 'patients', rows: CONSENTS, searchPh: 'Search patient, case, facility',
  filters: [{ key: 'win', label: 'Expires within', get: e => dayDiff(e.exp) < 0 ? 'Expired' : dayDiff(e.exp) <= 14 ? '14 days' : dayDiff(e.exp) <= 30 ? '30 days' : '90 days', opts: ['Expired', '14 days', '30 days', '90 days'] }, { key: 'sent', label: 'Renewal link', get: e => e.sent ? 'Sent' : 'Not sent', opts: ['Sent', 'Not sent'] }, { key: 'fac', label: 'Facility', get: e => e.c.facility }],
  text: e => [fullName(e.c), e.c.id, e.c.facility].join(' '),
  cols: [
    ['Patient', 'auto', e => `<a href="#" data-a="case" data-id="${e.c.id}" class="strong pname">${esc(fullName(e.c))}</a><span class="sub num">${e.c.id} · ${esc(e.c.phone)}</span>`],
    ['Facility', '220px', e => esc(e.c.facility)],
    ['Signed via', '150px', e => e.via],
    ['Expires', '130px', e => { const d = dayDiff(e.exp); return `<span class="num ${d <= 14 ? 'overdue' : ''}">${fmt(e.exp)}</span><span class="sub num ${d <= 14 ? 'overdue' : ''}">${d < 0 ? `${-d} days ago` : `in ${d} days`}</span>`; }],
    ['Renewal link', '130px', e => e.renewed ? pill('Consented') : e.sent ? `<span class="num">Sent ${e.sent}</span>` : '<span class="muted">Not sent</span>'],
    ['', '190px', e => e.renewed ? '' : `<div class="rowacts"><button class="btn sm" data-a="modal" data-v="consentrenew" data-id="${e.c.id}">${ic('send', 14)} ${e.sent ? 'Resend' : 'Send'} link</button></div>`, 'r']
  ], opts: {}
});

/* ---------- Pharmacies ---------- */
ROUTES_X.pharmacies = () => listPage('pharmacies', {
  title: 'Pharmacies', sub: 'Specialty and mail-order pharmacies that fill EMX-300', noun: 'pharmacies', rows: PHARMACIES, searchPh: 'Search name, city, phone, fax',
  head: `<button class="btn primary" data-a="orgnew" data-v="pharmacies">${ic('plus', 16)} Add pharmacy</button>`,
  filters: [{ key: 'type', label: 'Type', get: r => r.type }, { key: 'status', label: 'Status', get: r => r.status, opts: ['Active', 'Inactive'] }],
  text: r => [r.name, r.city, r.phone, r.fax].join(' '),
  cols: [
    ['Pharmacy', 'auto', r => `<a href="#" data-a="pharmacy" data-id="${r.id}" class="strong pname">${esc(r.name)}</a><span class="sub">${esc(r.type)}</span>`],
    ['Address', '260px', r => pinAddr(r.st, r.city)], ['Phone', '160px', r => `<span class="num">${r.phone}</span>`], ['Fax', '160px', r => `<span class="num">${r.fax}</span>`],
    ['Open cases', '110px', r => `<span class="num">${CASES.filter(c => c.pharmacy === r.name && !['Closed', 'Complete'].includes(c.caseStatus)).length}</span>`, 'r'],
    ['Status', '110px', r => statusPill(r.status)]
  ], opts: { rowAct: r => `data-a="pharmacy" data-id="${r.id}"` }
});
ROUTES_X.pharmacy = () => {
  const o = PHARMACIES.find(x => x.id === S.detail.org) || PHARMACIES[0];
  const cases = CASES.filter(c => c.pharmacy === o.name), users = PUSERS.filter(u => u.org === o.name);
  const tab = S.tab2.pharmacy || 'cases';
  const body = tab === 'cases' ? dtable([
    ['Patient', 'auto', c => `<a href="#" data-a="case" data-id="${c.id}" class="strong pname">${esc(fullName(c))}</a><span class="sub num">${c.id}</span>`],
    ['Shipment', '170px', c => pill(c.ship)], ['Case status', '220px', c => pill(c.caseStatus)], ['Follow-up', '130px', c => followCell(c)]
  ], pageSlice('pharmacy', cases), { rowAct: c => `data-a="case" data-id="${c.id}"` }) + pagerX('pharmacy', cases.length, 'cases')
    : `<div class="tp-h"><h2>Pharmacy users</h2><button class="btn primary" data-a="modal" data-v="usernew" data-id="pharm">${ic('plus', 16)} Add user</button></div>${userTable(users, false)}`;
  return `<div class="page"><div class="crumbs"><a href="#" data-a="go" data-r="pharmacies">Pharmacies</a>${ic('chevr', 12)}<span>${esc(o.name)}</span></div>
  <section class="card"><div class="casehead"><div class="who"><span class="ini" style="border-radius:10px">${ic('pill', 20)}</span><div><div class="nm">${esc(o.name)}</div><div class="ids"><span>${esc(o.type)}</span><span>${o.status}</span></div></div></div>
  <div class="acts"><button class="btn" data-a="edit" data-v="org">${ic('edit', 16)} Edit</button><button class="btn ${o.status === 'Inactive' ? '' : 'danger'}" data-a="modal" data-v="deact" data-id="org:${o.id}">${o.status === 'Inactive' ? 'Reactivate' : 'Deactivate'}</button></div></div></section>
  <div class="caselayout side-left"><div class="sidecol"><section class="card"><div class="card-h"><h3>Pharmacy details</h3></div><div class="card-b kvp"><div class="fields">${fld('Type', o.type, false)}${fld('Address', `${o.st}, ${o.city}`)}${fld('Phone', o.phone)}${fld('Fax', o.fax)}${fld('NCPDP', '44' + o.id.slice(2).padStart(5, '0'))}</div></div></section></div>
  <div><div class="tabs" role="tablist">${[['cases', 'Cases', cases.length], ['users', 'Users', users.length]].map(([k, l, n]) => `<button role="tab" aria-selected="${tab === k}" data-a="tab2" data-k="pharmacy" data-v="${k}">${l} <span class="n num">${n}</span></button>`).join('')}</div><div class="tabpanel">${body}</div></div></div></div>`;
};

/* ---------- Users (pharmacy, facility, hub) ---------- */
function userTable(rows, withOrg, orgLabel = 'Organization') {
  return dtable([
    ['Name', 'auto', u => `<span class="strong">${esc(u.name)}</span><span class="sub">${esc(u.email)}</span>`],
    ...(withOrg ? [[orgLabel, '220px', u => u.fac ? `<a href="#" data-a="facility" data-id="${u.fac.id}">${esc(u.fac.name)}</a>` : esc(u.org || 'eMAXHealth')]] : []),
    ['Role', '190px', u => esc(u.role)], ['Status', '150px', u => statusPill(u.status)],
    ['Last sign-in', '120px', u => `<span class="num">${u.last || (u.status === 'Active' ? fmt(addDays(TODAY, -((u.name.length * 3) % 20))) : 'Never')}</span>`],
    ['', '120px', u => splitAct('u' + u.ref), 'r']
  ], rows);
}
function usersPage(pid, title, sub, rows, kind, orgLabel) {
  const cfg = {
    title, sub, noun: 'users', rows, searchPh: 'Search name, email, organization',
    head: `<button class="btn primary" data-a="modal" data-v="usernew" data-id="${kind}">${ic('plus', 16)} Add user</button>`,
    filters: [{ key: 'role', label: 'Role', get: u => u.role, opts: USER_ROLES[kind] }, { key: 'status', label: 'Status', get: u => u.status, opts: ['Active', 'Invite pending', 'Inactive'] }, ...(orgLabel ? [{ key: 'org', label: orgLabel, get: u => u.fac ? u.fac.name : u.org }] : [])],
    text: u => [u.name, u.email, u.fac ? u.fac.name : u.org].join(' '), cols: [], opts: {}
  };
  const html = listPage(pid, cfg);
  const shown = pageSlice(pid, applyPF(pid, cfg.filters, rows, cfg.text));
  return html.replace(/<div class="tablewrap">[\s\S]*?<\/table><\/div>/, userTable(shown, !!orgLabel, orgLabel));
}
ROUTES_X.pusers = () => usersPage('pusers', 'Pharmacy Users', 'People at partner pharmacies with portal access', PUSERS, 'pharm', 'Pharmacy');
ROUTES_X.fusers = () => { allUsers(); return usersPage('fusers', 'Facility Users', 'Prescribers and office staff with provider portal access', FACILITIES.flatMap(f => f.users), 'fac', 'Facility'); };
ROUTES_X.hubusers = () => usersPage('hubusers', 'Hub Users', 'eMAXHealth staff accounts and roles', HUBUSERS, 'hub', null).replace('<th style="width:120px" class="">Last sign-in</th>', '<th style="width:120px" class="">Last sign-in</th>');

/* ---------- Reports ---------- */
const REPORTS = [
  { id: 'status', icon: 'folder', t: 'Cases by status', d: 'Where every open case sits in the workflow today', rows: () => CASE_STATUS.map(s => [s, CASES.filter(c => c.caseStatus === s).length]), unit: 'cases' },
  { id: 'payer', icon: 'card', t: 'Denials by payer', d: 'Denied coverage outcomes grouped by payer', rows: () => PAYERS.filter(p => p !== 'No insurance').map(p => [p, CASES.filter(c => c.payer === p && c.coverage === 'Denied').length]).sort((a, b) => b[1] - a[1]), unit: 'denials' },
  { id: 'owner', icon: 'users', t: 'Workload by coordinator', d: 'Open cases assigned to each person', rows: () => [...TEAM, 'Unassigned'].map(p => [p, CASES.filter(c => c.owner === p && !['Closed', 'Complete'].includes(c.caseStatus)).length]).sort((a, b) => b[1] - a[1]), unit: 'open cases' },
  { id: 'aging', icon: 'clock', t: 'Follow-up aging', d: 'How overdue follow-ups are, in buckets', rows: () => [['Due today', 0, 0], ['1 to 3 days late', 1, 3], ['4 to 7 days late', 4, 7], ['8 to 14 days late', 8, 14], ['More than 14 days late', 15, 999]].map(([l, a, b]) => [l, CASES.filter(c => c.follow && -dayDiff(c.follow) >= a && -dayDiff(c.follow) <= b).length]).concat([['No follow-up set', CASES.filter(c => !c.follow).length]]), unit: 'cases' },
  { id: 'auth', icon: 'shield', t: 'Authorizations by status', d: 'Prior authorization and appeal requests in flight', rows: () => AR_STATUS.map(s => [s, CASES.filter(c => c.ar === s).length]), unit: 'requests' },
  { id: 'fax', icon: 'fax', t: 'Fax results', d: 'Outcome of faxes sent and received', rows: () => ['Delivered', 'Received', 'Sending', 'Pending', 'Staged', 'Failed'].map(s => [s, FAXLOG.filter(f => f.status === s).length]), unit: 'faxes' }
];
ROUTES_X.reports = () => `<div class="page"><div class="pagehead"><div><h1>Reports</h1><div class="muted" style="font-size:13px">Operational reports built from live case data. Open one to see the chart, the numbers and export them.</div></div></div>
  <div class="rgrid">${REPORTS.map(r => { const rows = r.rows(); const tot = rows.reduce((n, x) => n + x[1], 0); const max = Math.max(1, ...rows.map(x => x[1])); return `<button class="card rcard" data-a="report" data-v="${r.id}"><span class="rc-h"><span class="rc-ic">${ic(r.icon, 18)}</span><b>${r.t}</b></span><span class="muted">${r.d}</span><span class="spark" aria-hidden="true">${rows.slice(0, 8).map(x => `<i style="height:${Math.max(4, x[1] / max * 100)}%"></i>`).join('')}</span><span class="rc-f"><span class="num"><b>${tot}</b> ${r.unit}</span>${ic('arrowr', 16)}</span></button>`; }).join('')}</div></div>`;
ROUTES_X.report = () => {
  const r = REPORTS.find(x => x.id === S.detail.report) || REPORTS[0]; const rows = r.rows(); const tot = rows.reduce((n, x) => n + x[1], 0); const max = Math.max(1, ...rows.map(x => x[1]));
  const view = S.detail.rview || 'chart';
  return `<div class="page"><div class="crumbs"><a href="#" data-a="go" data-r="reports">Reports</a>${ic('chevr', 12)}<span>${r.t}</span></div>
  <div class="pagehead"><div><h1>${r.t}</h1><div class="muted" style="font-size:13px">${r.d} · as of ${fmt(TODAY)}</div></div><div class="seg lite">${[['chart', 'Chart'], ['table', 'Table']].map(([k, l]) => `<button data-a="rview" data-v="${k}" aria-pressed="${view === k}">${l}</button>`).join('')}</div><button class="btn" data-a="reportcsv" data-v="${r.id}">${ic('download', 16)} Export CSV</button></div>
  <section class="card"><div class="card-h"><h2 class="num">${tot} ${r.unit}</h2></div>
  ${view === 'chart' ? `<div class="hbars" role="img" aria-label="${esc(r.t)} bar chart">${rows.map(([l, n]) => `<div class="hb" title="${esc(l)}: ${n} ${r.unit}"><span class="hb-l">${esc(l)}</span><span class="hb-t"><i style="width:${n / max * 100}%"></i></span><span class="hb-v num">${n}<span class="muted"> · ${tot ? Math.round(n / tot * 100) : 0}%</span></span></div>`).join('')}</div>`
    : dtable([[r.t.split(' by ')[1] ? r.t.split(' by ')[1].replace(/^./, x => x.toUpperCase()) : 'Group', 'auto', x => esc(x[0])], ['Count', '120px', x => `<span class="num">${x[1]}</span>`, 'r'], ['Share', '120px', x => `<span class="num">${tot ? Math.round(x[1] / tot * 100) : 0}%</span>`, 'r']], rows)}</section></div>`;
};

/* ---------- Settings ---------- */
ROUTES_X.settings = () => {
  const sec = S.detail.set || 'profile'; const V = SETTINGS;
  const secs = [['profile', 'Profile', 'users'], ['notif', 'Notifications', 'bell'], ['work', 'Work preferences', 'folder'], ['look', 'Appearance', 'grid'], ['ooo', 'Out of office', 'cal']];
  const tog = (k, l, s) => `<label class="setrow"><span><b>${l}</b><span class="muted">${s}</span></span><input type="checkbox" class="switch" data-set="${k}" ${V[k] ? 'checked' : ''}></label>`;
  const sel = (k, l, opts) => `<div class="input"><label class="lbl" for="set-${k}">${l}</label><select id="set-${k}" data-set="${k}">${opts.map(o => `<option ${V[k] === o ? 'selected' : ''}>${o}</option>`).join('')}</select></div>`;
  let body = '';
  if (sec === 'profile') body = `<div class="card-h"><h2>Profile</h2></div><div class="card-b setform"><div class="setid"><span class="avatar" style="width:56px;height:56px;font-size:18px">JM</span><div><b>${esc(V.name)}</b><div class="muted">Patient access coordinator · Hub user since 2024</div></div></div>
    <div class="polgrid">${inp('set-name', 'Full name', { v: V.name })}${inp('set-phone', 'Direct phone', { v: V.phone })}${inp('set-email', 'Email', { v: V.email, span: 1, help: 'Used for sign-in and notification emails' })}</div>${inp('set-sig', 'Message signature', { area: 1, h: 80, v: V.sig })}
    <div style="display:flex;gap:8px;justify-content:flex-end"><button class="btn" data-a="modal" data-v="pwchange">${ic('key', 16)} Change password</button><button class="btn primary" data-a="setprofile">Save profile</button></div></div>`;
  if (sec === 'notif') body = `<div class="card-h"><h2>Notifications</h2></div><div class="card-b">${tog('n_assign', 'A case is assigned to me', 'Email and in-app')}${tog('n_msg', 'A provider or pharmacy replies', 'In-app, plus email if not read in 1 hour')}${tog('n_fax', 'A fax fails to send', 'In-app')}${tog('n_expire', 'An authorization on my cases is about to expire', 'Email, 14 days ahead')}${tog('n_digest', 'Daily summary', 'Email at 7:30 AM with follow-ups due today')}</div>`;
  if (sec === 'work') body = `<div class="card-h"><h2>Work preferences</h2></div><div class="card-b setform"><div class="polgrid">${sel('landing', 'Start page after sign-in', ['Dashboard', 'Cases', 'Communications', 'Unattached Uploads'])}${sel('rows', 'Rows per page', ['25', '50', '100'])}</div></div>`;
  if (sec === 'look') body = `<div class="card-h"><h2>Appearance</h2></div><div class="card-b setform"><div class="lbl">Color theme</div><div class="swrow">${HUES.map(([k, l, hex]) => `<button class="swbig ${S.hue === k ? 'on' : ''}" data-a="hue" data-v="${k}"><span style="background:${hex}"></span>${l}</button>`).join('')}</div><div class="lbl" style="margin-top:6px">Layout</div><div class="radio-cards">${[['H', 'A'], ['D', 'B'], ['A', 'C']].map(([k, sh]) => `<label data-a="dir" data-v="${k}"><input type="radio" name="dirset" ${S.dir === k ? 'checked' : ''}><span><b>${sh} · ${DIRS[k][0]}</b><br><span class="muted">${DIRS[k][1]}</span></span></label>`).join('')}</div><p class="muted" style="margin:0;font-size:13px">Both are also in the avatar menu at the top right. Saved on this computer.</p></div>`;
  if (sec === 'ooo') body = `<div class="card-h"><h2>Out of office</h2></div><div class="card-b setform">${tog('ooo', 'I am out of office', 'New assignments go to your delegate and senders see an auto reply')}${V.ooo ? `<div class="polgrid">${sel('delegate', 'Delegate', TEAM.filter(t => t !== ME))}${inp('set-back', 'Back on', { type: 'date', v: '2026-10-05' })}</div>` : ''}</div>`;
  return `<div class="page"><div class="pagehead"><div><h1>Settings</h1><div class="muted" style="font-size:13px">Your account and how HealthPacer works for you</div></div></div>
  <div class="caselayout side-left setlayout"><nav class="card setnav" aria-label="Settings sections">${secs.map(([k, l, i]) => `<button data-a="setsec" data-v="${k}" aria-current="${sec === k}">${ic(i, 16)} ${l}</button>`).join('')}</nav><section class="card">${body}</section></div></div>`;
};

/* ---------- Drawer: adverse event ---------- */
const _drawer1 = drawer;
drawer = function () {
  const d = S.drawer; if (!d || d.type !== 'ae') return _drawer1();
  const a = AES.find(x => x.id === d.id);
  const body = `<div style="display:flex;gap:8px;align-items:center"><span class="pill ${aeTone[a.status]}">${a.status}</span><span class="pill ${a.sev === 'Non-serious' ? 't-neutral' : 't-danger'}">${a.sev}</span></div>
    <div class="fields">${fld('Patient', `${fullName(a.c)} · ${a.c.id}`, false)}${fld('Aware on', a.date, false)}${fld('Reported by', a.src, false)}${fld('Recorded by', a.by, false)}${fld('Safety report due', a.status === 'Closed' ? 'Done' : a.due, false)}</div>
    <div class="kv-sub">What happened</div><p style="margin:0;font-size:14px">${esc(a.desc)}</p>
    ${a.status === 'Follow-up requested' ? `<div class="note-banner" style="background:var(--warn-50);color:var(--warn)">${ic('alert', 16)}<span>The safety team asked for the prescriber's assessment and lab values.</span></div>` : ''}`;
  const foot = `<button class="btn" data-a="case" data-id="${a.c.id}">Open case</button><span style="flex:1"></span>${a.status === 'Draft' ? `<button class="btn primary" data-a="aestat" data-id="${a.id}" data-v="Submitted">Submit to safety</button>` : a.status === 'Closed' ? `<button class="btn" data-a="drawerclose">Close</button>` : `<button class="btn" data-a="aestat" data-id="${a.id}" data-v="Follow-up requested">Log follow-up</button><button class="btn primary" data-a="aestat" data-id="${a.id}" data-v="Closed">${ic('check', 16)} Close AE</button>`}`;
  const enter = LAST_DRAWER !== d.type + d.id && !LAST_DRAWER;
  return `<div class="drawer-scrim ${enter ? 'enter' : ''}" data-a="drawerclose"></div><aside class="drawer ${enter ? 'enter' : ''}" role="dialog" aria-label="${a.id}"><div class="drawer-h"><h2>${a.id}</h2><button class="iconbtn" data-a="drawerclose" aria-label="Close">${ic('x', 18)}</button></div><div class="drawer-b">${body}</div><div class="drawer-f">${foot}</div></aside>`;
};

/* ---------- Modals for these pages ---------- */
const _xm3 = extraModal;
extraModal = function (m, wrap) {
  const cancel = `<button class="btn" data-a="mclose">Cancel</button>`, e = m.err || {};
  if (m.type === 'consentrenew') { const c = byId(m.id); return wrap(`Send consent renewal to ${esc(c.first)} ${esc(c.last)}`, `<div class="seg lite">${['Text message', 'Email'].map(x => `<button data-a="cnvia" data-v="${x}" aria-pressed="${(S.cnVia || 'Text message') === x}">${x}</button>`).join('')}</div>${(S.cnVia || 'Text message') === 'Text message' ? inp('cnto', 'Mobile number', { v: c.phone, req: 1 }) : inp('cnto', 'Email', { v: email(c), req: 1 })}<div class="note-banner">${ic('info', 16)}<span>The link opens the e-signature form and expires in 7 days.</span></div>`, `${cancel}<button class="btn primary" data-a="consentsend2" data-id="${c.id}">${ic('send', 16)} Send link</button>`); }
  if (m.type === 'pwchange') return wrap('Change password', `${inp('pw0', 'Current password', { type: 'password', req: 1, err: e.p0 })}${inp('pw1', 'New password', { type: 'password', req: 1, err: e.p1, help: 'At least 12 characters' })}${inp('pw2', 'Confirm new password', { type: 'password', req: 1, err: e.p2 })}`, `${cancel}<button class="btn primary" data-a="pwsave">Change password</button>`);
  return _xm3(m, wrap);
};

Object.assign(EXTRA, {
  pharmacy(t) { S.detail.org = t.dataset.id; S.route = 'pharmacy'; scrollTo(0, 0); },
  report(t) { S.detail.report = t.dataset.v; S.detail.rview = 'chart'; S.route = 'report'; scrollTo(0, 0); },
  rview(t) { S.detail.rview = t.dataset.v; },
  reportcsv(t) { const r = REPORTS.find(x => x.id === t.dataset.v); downloadCsv(`${r.id}_report.csv`, ['Group', 'Count'], r.rows()); toast(`${r.t} exported`); },
  setsec(t) { S.detail.set = t.dataset.v; },
  setprofile() { SETTINGS.name = val('set-name') || SETTINGS.name; SETTINGS.phone = val('set-phone'); SETTINGS.email = val('set-email'); SETTINGS.sig = val('set-sig'); toast('Profile saved'); },
  pwsave() { const a = val('pw0'), b = val('pw1'), c = val('pw2'), err = {}; if (!a) err.p0 = 'Enter your current password'; if (b.length < 12) err.p1 = 'Use at least 12 characters'; if (b !== c) err.p2 = 'Passwords do not match'; if (Object.keys(err).length) { S.modal.err = err; return; } S.modal = null; toast('Password changed'); },
  cnvia(t) { S.cnVia = t.dataset.v; },
  consentsend2(t) { const x = CONSENTS.find(e => e.c.id === t.dataset.id); if (x) x.sent = fmt(TODAY); S.modal = null; toast(`Renewal link sent by ${(S.cnVia || 'Text message').toLowerCase()}`); },
  aestat(t) { const a = AES.find(x => x.id === t.dataset.id); a.status = t.dataset.v; if (a.status === 'Follow-up requested') a.due = fmt(addDays(TODAY, 3)); toast(a.status === 'Closed' ? `${a.id} closed` : a.status === 'Submitted' ? `${a.id} submitted to the safety team` : 'Follow-up logged'); }
});
/* ================= Dashboard layout concepts ================= */
const DASHES = [['deck', 'Command deck', 'Work list in the center, queues and today’s activity on side panels, same as every other page'], ['focus', 'Focus stack', 'One case at a time, dealt like cards, most urgent first'], ['bento', 'Bento board', 'Floating tiles of different sizes, each one a shortcut'], ['flow', 'Pipeline', 'Every case placed along the workflow so bottlenecks stand out'], ['classic', 'Current', 'The dashboard as it is today, for comparison']];
S.dash = 'deck'; try { const d = localStorage.getItem('hp-dash'); if (d && DASHES.some(x => x[0] === d)) S.dash = d; } catch (e) { }
S.fq = 'overdue'; S.fi = 0; S.flowMine = false;
const dashDocks = () => { if (S.dash === 'deck') { S.dockL = true; S.dockR = false; } };
if (S.route === 'dashboard') dashDocks();
const _go0 = go; go = function (r) { if (r === 'dashboard' && S.route !== 'dashboard') dashDocks(); return _go0(r); };
const _viewDashboard0 = viewDashboard;
const greet = () => { const h = new Date().getHours(); return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening'; };
const dueLabel = (c) => !c.follow ? 'No follow-up date' : dayDiff(c.follow) < 0 ? `${-dayDiff(c.follow)} ${dayDiff(c.follow) === -1 ? 'day' : 'days'} overdue` : dayDiff(c.follow) === 0 ? 'Due today' : `Due ${fmt(c.follow)}`;
const openCases = () => CASES.filter(c => !['Closed', 'Complete'].includes(c.caseStatus));
const byUrgency = (L) => L.slice().sort((a, b) => (a.follow ? dayDiff(a.follow) : 999) - (b.follow ? dayDiff(b.follow) : 999));
viewDashboard = function () {
  const v = { deck: dashDeck, focus: dashFocus, bento: dashBento, flow: dashFlow }[S.dash];
  return v ? v() : _viewDashboard0().replace('<div class="card-f muted">Expiring consents board is coming in a later phase.</div>', '<div class="card-f"><a href="#" data-a="go" data-r="expcon">Open Expiring Consents</a></div>');
};
const dashHead = (extra = '') => `<div class="pagehead"><div><h1>${greet()}, Janet</h1><div class="muted" style="font-size:13px">Thursday, September 24, 2026 · ${CASES.filter(c => c.owner === ME).length} cases assigned to you</div></div>${extra}<button class="btn" data-a="go" data-r="cases">${ic('folder', 16)} All cases</button><button class="btn primary" data-a="newcase">${ic('plus', 16)} New case</button></div>`;

/* ---------- 1. Command deck: same layered panels as every other page ---------- */
function dashDeck() {
  const t = due.today(), o = due.overdue(), m = due.missing();
  const wl = { today: ['Due today', t], overdue: ['Overdue', o], missing: ['Missing follow-up date', m] };
  const [wlLabel, wlList] = wl[S.wl];
  const q = (k, icon, label, n, sub, tone) => `<button class="qrow ${S.wl === k ? 'on' : ''} q-${tone}" data-a="wl" data-v="${k}"><span class="qi">${ic(icon, 16)}</span><span class="qt"><b>${label}</b><span>${sub}</span></span><span class="qn num">${n}</span></button>`;
  const link = (r, icon, label, n) => `<button class="qrow sm" data-a="go" data-r="${r}"><span class="qi">${ic(icon, 16)}</span><span class="qt"><b>${label}</b></span>${n ? `<span class="qn num">${n}</span>` : ''}</button>`;
  const left = `<aside class="dock ${S.dockL ? '' : 'closed'}" aria-label="Queues"><div class="dock-head">${ic('list', 16)}<h3>My queues</h3><button class="iconbtn" data-a="dockL" aria-label="Toggle queues">${ic(S.dockL ? 'chevl' : 'chevr', 16)}</button><span class="vlabel">Queues</span></div>
    <div class="dock-body qdock"><div class="qsec">Follow-ups</div>${q('overdue', 'alert', 'Overdue', o.length, `Oldest ${Math.max(...o.map(c => -dayDiff(c.follow)))} days`, 'red')}${q('today', 'clock', 'Due today', t.length, `${t.filter(c => c.owner === ME).length} are yours`, 'yellow')}${q('missing', 'cal', 'Missing a date', m.length, 'Open cases with no date', 'yellow')}
    <div class="qsec">Inbox</div>${link('comms', 'chat', 'Communications', 3)}${link('uploads', 'upload', 'Unattached uploads', 2)}${link('fax', 'fax', 'Failed faxes', FAXLOG.filter(f => f.status === 'Failed').length)}${link('acct', 'userplus', 'Account requests', ACCT.filter(a => a.status === 'Requested').length)}
    <div class="qsec">Boards</div>${link('expauth', 'shield', 'Expiring authorizations', EXPIRING.filter(e => e.kind === 'Authorization').length)}${link('expcon', 'heart', 'Expiring consents', CONSENTS.length)}</div></aside>`;
  const week = Array.from({ length: 7 }, (_, i) => { const d = addDays(TODAY, i); return [d, CASES.filter(c => c.follow && dayDiff(c.follow) === i).length]; }); const wmax = Math.max(1, ...week.map(w => w[1]));
  const right = `<aside class="dock right ${S.dockR ? '' : 'closed'}" aria-label="Today"><div class="dock-head">${ic('bell', 16)}<h3>Today</h3><button class="iconbtn" data-a="dockR" aria-label="Toggle today">${ic(S.dockR ? 'chevr' : 'chevl', 16)}</button><span class="vlabel">Today</span></div>
    <div class="dock-body"><div class="section-t">This week</div><div class="weekbars">${week.map(([d, n], i) => `<button class="wb ${i === 0 ? 'today' : ''}" data-a="drillwl" data-v="today" title="${n} follow-ups on ${fmt(d)}"><span class="wbn num">${n}</span><span class="wbt"><i style="height:${n / wmax * 100}%"></i></span><span class="wbd">${'SMTWTFS'[d.getDay()]}</span></button>`).join('')}</div>
    <div class="section-t">Latest</div><div class="tl">${NOTIFS.map(x => `<button class="tli ${x.unread ? 'unread' : ''}" data-a="notifopen" data-v="${x.id}"><span class="tld">${ic(x.icon, 13)}</span><span><b>${esc(x.t)}</b><span>${esc(x.s)} · ${x.when}</span></span></button>`).join('')}</div></div></aside>`;
  const pipe = [['Requested', 'Intake', 'Requested'], ['Benefits', 'BI'], ['Prior auth', 'Pending PA Submission', 'Pending PA Outcome'], ['Appeals', 'Pending Appeal Submission', 'Pending Appeal Outcome'], ['PAP', 'Pending PAP'], ['On therapy', 'Active']].map(([l, ...st]) => [l, CASES.filter(c => st.includes(c.caseStatus)).length, st[0]]);
  const center = `<div class="center"><div class="page">${dashHead()}
    <div class="pipechips">${pipe.map(([l, n, st], i) => `<button class="pchip" data-a="drill" data-k="caseStatus" data-v="${esc(st)}"><span class="num">${n}</span>${l}</button>${i < pipe.length - 1 ? `<span class="parr">${ic('chevr', 14)}</span>` : ''}`).join('')}</div>
    <div class="grid g-main"><section class="card worklist"><div class="card-h"><h2>${wlLabel}</h2><span class="muted num" style="font-size:12.5px">${wlList.length} cases</span></div>${worklistItems(byUrgency(wlList), 8)}<div class="card-f"><a href="#" data-a="drillwl" data-v="${S.wl}">View all ${wlList.length} ${wlLabel.toLowerCase()} cases</a></div></section>
    ${statCard('Authorization requests', 'ar', AR_STATUS, CASES.filter(c => c.ar !== 'None').length, true)}</div></div></div>`;
  return `<div class="workspace dashws">${left}${center}${right}</div>`;
}

/* ---------- 2. Focus stack: one case at a time ---------- */
function focusList() { return byUrgency({ overdue: due.overdue(), today: due.today(), missing: due.missing() }[S.fq]); }
function dashFocus() {
  const L = focusList(); const i = Math.min(S.fi, Math.max(0, L.length - 1)); S.fi = i;
  const cards = L.slice(i, i + 4);
  const qb = (k, label, n, hot) => `<button class="fqb ${S.fq === k ? 'on' : ''} ${hot ? 'hot' : ''}" data-a="fq" data-v="${k}"><span class="num">${n}</span>${label}</button>`;
  const card = (c, depth) => { const I = info(c); return `<article class="fcard" style="--d:${depth}" ${depth ? 'aria-hidden="true"' : ''}>
    <div class="fc-top"><span class="fc-av">${c.first[0]}${c.last[0]}</span><div><div class="fc-nm">${esc(c.first)} ${esc(c.last)}</div><div class="muted num">${c.id} · DOB ${fmt(c.dob)} · ${esc(c.phone)}</div></div><span class="fc-due ${c.follow && dayDiff(c.follow) < 0 ? 'late' : ''}">${ic('clock', 14)} ${dueLabel(c)}</span></div>
    <div class="fc-next"><span class="lbl">Next step</span><b>${esc(nextStep(c))}</b></div>
    <div class="fc-grid"><div><span class="lbl">Case status</span>${pill(c.caseStatus)}</div><div><span class="lbl">Coverage</span>${pill(c.coverage)}</div><div><span class="lbl">Authorization</span>${c.ar === 'None' ? '<span class="muted">None</span>' : pill(c.ar)}</div><div><span class="lbl">Payer</span>${esc(c.payer)}</div><div><span class="lbl">Prescriber</span>${esc(c.prescriber)}</div><div><span class="lbl">Assigned to</span>${c.owner === 'Unassigned' ? '<span class="overdue">Unassigned</span>' : esc(c.owner)}</div></div>
    ${NOTES[0] && c.id === CASES[0].id ? `<div class="fc-note"><span class="hltext">${esc(NOTES.find(n => n[4]) ? NOTES.find(n => n[4])[3] : '')}</span></div>` : `<div class="fc-note muted">${esc(I.medical.dx)} · ${esc(c.pharmacy)} · ${esc(c.lang)} speaker, best reached ${esc(c.best.toLowerCase())}</div>`}
    <div class="fc-acts"><button class="btn" data-a="fsnooze" data-id="${c.id}">${ic('cal', 16)} Snooze a day</button><button class="btn" data-a="fcall" data-id="${c.id}">${ic('phone', 16)} Log call</button><span class="sp"></span><button class="btn primary" data-a="case" data-id="${c.id}">Open case ${ic('arrowr', 16)}</button></div></article>`; };
  const up = L.slice(i + 1, i + 7);
  return `<div class="page focuspage">${dashHead()}
  <div class="focuswrap"><div class="fq">${qb('overdue', 'Overdue', due.overdue().length, true)}${qb('today', 'Due today', due.today().length)}${qb('missing', 'Missing a date', due.missing().length)}<div class="fq-note muted">Most urgent first. Snooze moves the follow-up to tomorrow and deals the next card.</div></div>
  <div class="fstage">${L.length ? `<div class="fdeck">${cards.map((c, d) => card(c, d)).reverse().join('')}</div><div class="fnav"><button class="iconbtn" data-a="fnav" data-v="-1" ${i ? '' : 'disabled'} aria-label="Previous case">${ic('chevl', 18)}</button><span class="num">${i + 1} of ${L.length}</span><button class="iconbtn" data-a="fnav" data-v="1" ${i < L.length - 1 ? '' : 'disabled'} aria-label="Next case">${ic('chevr', 18)}</button></div>` : `<div class="fempty">${ic('check', 28)}<b>All caught up</b><span class="muted">Nothing left in this queue.</span></div>`}</div>
  <aside class="fup"><div class="section-t">Up next</div>${up.map((c, k) => `<button class="fupi" data-a="fjump" data-v="${i + 1 + k}"><span><b>${esc(fullName(c))}</b><span class="muted">${esc(nextStep(c))}</span></span><span class="num ${c.follow && dayDiff(c.follow) < 0 ? 'overdue' : 'muted'}">${c.follow ? (dayDiff(c.follow) < 0 ? `${-dayDiff(c.follow)}d` : dayDiff(c.follow) === 0 ? 'Today' : fmt(c.follow)) : 'No date'}</span></button>`).join('') || '<div class="muted" style="font-size:13px">Nothing after this one.</div>'}
  <div class="fstats"><button data-a="go" data-r="comms"><span class="num">3</span>messages to answer</button><button data-a="go" data-r="uploads"><span class="num">2</span>uploads to file</button><button data-a="drill" data-k="ar" data-v="Appeal in Progress"><span class="num">${CASES.filter(c => c.ar === 'Appeal in Progress').length}</span>appeals in progress</button></div></aside></div></div>`;
}
let FOCUS_MOVE = null;
function focusCapture(dir) { const top = document.querySelector('.fcard[style*="--d:0"]'); if (!top) return; const r = top.getBoundingClientRect(); const g = top.cloneNode(true); g.classList.add('fghost'); Object.assign(g.style, { position: 'fixed', left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px', margin: 0, zIndex: 60 }); FOCUS_MOVE = { g, dir }; }
function focusPlay() {
  const m = FOCUS_MOVE; FOCUS_MOVE = null; if (!m || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.body.appendChild(m.g);
  const out = m.dir > 0 ? [{ transform: 'none', opacity: 1 }, { transform: 'translate(-70%, -30px) rotate(-14deg)', opacity: 0 }] : [{ transform: 'none', opacity: 1 }, { transform: 'translateY(24px) scale(.95)', opacity: 0 }];
  m.g.animate(out, { duration: 420, easing: 'cubic-bezier(.4,0,.6,.4)', fill: 'forwards' }).onfinish = () => m.g.remove();
  document.querySelectorAll('.fcard').forEach(el => { const d = +getComputedStyle(el).getPropertyValue('--d'); el.animate(m.dir > 0 ? [{ transform: `translateY(${(d + 1) * 14}px) scale(${1 - (d + 1) * .045})`, opacity: d >= 2 ? 0 : 1 }, { transform: `translateY(${d * 14}px) scale(${1 - d * .045})`, opacity: 1 }] : [{ transform: 'translateX(-60%) rotate(-10deg)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 520, delay: m.dir > 0 ? 120 : 0, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'backwards' }); if (m.dir < 0) return; });
}

/* ---------- 3. Bento board ---------- */
function dashBento() {
  const t = due.today(), o = due.overdue(), m = due.missing(); const mine = CASES.filter(c => c.owner === ME);
  const ages = [['1 to 3', 1, 3], ['4 to 7', 4, 7], ['8 to 14', 8, 14], ['15+', 15, 999]].map(([l, a, b]) => [l, o.filter(c => -dayDiff(c.follow) >= a && -dayDiff(c.follow) <= b).length]); const amax = Math.max(1, ...ages.map(x => x[1]));
  const stages = [['Requested', ['Intake', 'Requested']], ['BI', ['BI']], ['PA', ['Pending PA Submission', 'Pending PA Outcome']], ['Appeal', ['Pending Appeal Submission', 'Pending Appeal Outcome']], ['PAP', ['Pending PAP']], ['Active', ['Active']]].map(([l, st]) => [l, CASES.filter(c => st.includes(c.caseStatus)).length, st[0]]);
  const load = [...TEAM, 'Unassigned'].map(p => [p, openCases().filter(c => c.owner === p).length]); const lmax = Math.max(1, ...load.map(x => x[1]));
  const exp = EXPIRING.slice().sort((a, b) => a.exp - b.exp).slice(0, 4);
  const tile = (cls, body, act = '') => `<section class="btile ${cls}" ${act}>${body}</section>`;
  return `<div class="page bentopage"><div class="bento">
  ${tile('b-hero', `<div class="bh-date">Thursday, September 24</div><h1>${greet()}, Janet</h1><p>You have <b>${t.length} follow-ups due today</b> and <b>${o.length} overdue</b>. ${mine.filter(c => c.ar === 'Appeal in Progress').length} of your cases are in appeal.</p><div class="bh-acts"><button class="btn" data-a="dashset" data-v="focus">${ic('arrowr', 16)} Work them one by one</button><button class="btn light" data-a="newcase">${ic('plus', 16)} New case</button></div>`)}
  ${tile('b-over click', `<div class="bt-h"><span>Overdue follow-ups</span>${ic('alert', 16)}</div><div class="bt-big hot num">${o.length}</div><div class="agebars">${ages.map(([l, n]) => `<div title="${n} cases ${l} days late"><span class="num">${n}</span><i style="height:${n / amax * 100}%"></i><em>${l}d</em></div>`).join('')}</div>`, 'data-a="drillwl" data-v="overdue"')}
  ${tile('b-today click', `<div class="bt-h"><span>Due today</span>${ic('clock', 16)}</div><div class="bt-big num">${t.length}</div><div class="muted">${t.filter(c => c.owner === ME).length} are yours · ${m.length} ${m.length === 1 ? 'case has' : 'cases have'} no date</div>`, 'data-a="drillwl" data-v="today"')}
  ${tile('b-work worklist', `<div class="bt-h"><span>My work</span><div class="seg lite">${[['today', 'Today', t], ['overdue', 'Overdue', o], ['missing', 'No date', m]].map(([k, l, L]) => `<button data-a="wl" data-v="${k}" aria-pressed="${S.wl === k}">${l} <span class="num">${L.length}</span></button>`).join('')}</div></div>${worklistItems(byUrgency({ today: t, overdue: o, missing: m }[S.wl]), 6)}`)}
  ${tile('b-pipe', `<div class="bt-h"><span>Where cases are</span><a href="#" data-a="go" data-r="cases">All cases</a></div><div class="bpipe">${stages.map(([l, n, st]) => `<button data-a="drill" data-k="caseStatus" data-v="${esc(st)}"><span class="num">${n}</span><em>${l}</em></button>`).join(`<span class="bparr">${ic('chevr', 12)}</span>`)}</div>`)}
  ${tile('b-inbox', `<div class="bt-h"><span>Inbox</span>${ic('chat', 16)}</div>${COMMS.filter(x => x.tag === 'Action needed').slice(0, 3).map(x => `<button class="bin" data-a="go" data-r="comms"><b>${esc(x.sender)}</b><span>${esc(x.subj)}</span></button>`).join('')}<div class="bin-f"><button data-a="go" data-r="uploads">${ic('upload', 14)} 2 uploads</button><button data-a="go" data-r="fax">${ic('fax', 14)} ${FAXLOG.filter(f => f.status === 'Failed').length} failed faxes</button></div>`)}
  ${tile('b-exp', `<div class="bt-h"><span>Expiring soon</span><a href="#" data-a="go" data-r="expauth">Board</a></div>${exp.map(e => `<button class="bexp" data-a="case" data-id="${e.c.id}"><span><b>${esc(fullName(e.c))}</b><span class="muted">${e.kind === 'Authorization' ? 'Prior authorization' : 'Benefits'} · ${esc(e.c.payer)}</span></span><span class="num ${dayDiff(e.exp) <= 7 ? 'overdue' : ''}">${dayDiff(e.exp)}d</span></button>`).join('')}`)}
  ${tile('b-team', `<div class="bt-h"><span>Team workload</span><a href="#" data-a="report" data-v="owner">Report</a></div>${load.map(([p, n]) => `<div class="tload" title="${n} open cases"><span>${p === ME ? 'You' : esc(p.split(' ')[0])}</span><span class="tbar"><i style="width:${n / lmax * 100}%" class="${p === ME ? 'me' : ''}"></i></span><span class="num">${n}</span></div>`).join('')}`)}
  ${tile('b-auth', `<div class="bt-h"><span>Authorizations</span>${ic('shield', 16)}</div><div class="bauth">${[['Sent to payer', 'Sent to Payer'], ['Appeals', 'Appeal in Progress'], ['Waiting on HCP', 'Sent to HCP'], ['Approved', 'Complete']].map(([l, s]) => `<button data-a="drill" data-k="ar" data-v="${s}"><span class="num">${CASES.filter(c => c.ar === s).length}</span>${l}</button>`).join('')}</div>`)}
  </div></div>`;
}

/* ---------- 4. Pipeline ---------- */
const FLOW = [['Intake', 'Intake', 'Requested'], ['Benefits', 'BI'], ['PA submission', 'Pending PA Submission'], ['PA outcome', 'Pending PA Outcome'], ['Appeal submission', 'Pending Appeal Submission'], ['Appeal outcome', 'Pending Appeal Outcome'], ['PAP', 'Pending PAP'], ['On therapy', 'Active']];
function dashFlow() {
  const pool = S.flowMine ? CASES.filter(c => c.owner === ME) : CASES;
  const cols = FLOW.map(([l, st, st2]) => { const L = byUrgency(pool.filter(c => c.caseStatus === st || c.caseStatus === st2)); return { l, st, L, late: L.filter(c => c.follow && dayDiff(c.follow) < 0).length }; });
  const worst = cols.reduce((a, b) => (b.late > a.late ? b : a), cols[0]);
  const done = pool.filter(c => ['Complete', 'Closed'].includes(c.caseStatus)).length;
  return `<div class="page flowpage">${dashHead(`<div class="seg lite">${[[false, 'Everyone'], [true, 'Mine']].map(([k, l]) => `<button data-a="flowmine" data-v="${k ? 1 : 0}" aria-pressed="${S.flowMine === k}">${l}</button>`).join('')}</div>`)}
  <div class="flowsum"><div><span class="num">${pool.length - done}</span>open cases</div><div class="hot"><span class="num">${cols.reduce((n, c) => n + c.late, 0)}</span>overdue follow-ups</div><div><span class="num">${worst.l}</span>busiest stage for overdue work</div><div><span class="num">${done}</span>complete or closed</div></div>
  <div class="flow" role="list">${cols.map((c, i) => `<section class="fcol ${c === worst && c.late ? 'jam' : ''}" role="listitem" style="--i:${i}"><header><span class="fstep num">${i + 1}</span><b>${c.l}</b><span class="flcount num">${c.L.length}</span></header>${c === worst && c.late ? `<div class="jamtag">${ic('alert', 12)} Bottleneck · ${c.late} overdue</div>` : c.late ? `<div class="latetag num">${c.late} overdue</div>` : '<div class="oktag">On track</div>'}
    <div class="fchips">${c.L.slice(0, 5).map(x => `<button class="fchip ${x.owner === ME ? 'mine' : ''}" data-a="case" data-id="${x.id}"><b>${esc(x.last)}, ${esc(x.first[0])}.</b><span class="num ${x.follow && dayDiff(x.follow) < 0 ? 'overdue' : ''}">${x.follow ? (dayDiff(x.follow) < 0 ? `${-dayDiff(x.follow)}d late` : dayDiff(x.follow) === 0 ? 'Today' : fmt(x.follow)) : 'No date'}</span></button>`).join('') || '<div class="muted fnone">Empty</div>'}</div>
    ${c.L.length > 5 ? `<button class="fmore" data-a="drill" data-k="caseStatus" data-v="${esc(c.st)}">+${c.L.length - 5} more</button>` : ''}</section>`).join('')}</div>
  <div class="grid g-main" style="margin-top:4px"><section class="card worklist"><div class="card-h"><h2>My overdue work</h2><span class="muted num" style="font-size:12.5px">${due.overdue().filter(c => c.owner === ME).length} cases</span></div>${worklistItems(byUrgency(due.overdue().filter(c => c.owner === ME)), 5)}</section>
  ${statCard('Authorization requests', 'ar', AR_STATUS, CASES.filter(c => c.ar !== 'None').length, true)}</div></div>`;
}

/* ---------- Actions ---------- */
Object.assign(EXTRA, {
  dashset(t) { S.dash = t.dataset.v; dashDocks(); try { localStorage.setItem('hp-dash', S.dash); } catch (e) { } if (S.route !== 'dashboard') go('dashboard'); if (t.closest('.acctmenu')) S.menu = 'acct'; },
  fq(t) { S.fq = t.dataset.v; S.fi = 0; },
  fnav(t) { const d = +t.dataset.v; if (d > 0) focusCapture(1); S.fi = Math.max(0, S.fi + d); if (d < 0) FOCUS_MOVE = { g: document.createElement('div'), dir: -1 }; },
  fjump(t) { focusCapture(1); S.fi = +t.dataset.v; },
  fsnooze(t) { const c = byId(t.dataset.id); focusCapture(1); c.follow = addDays(TODAY, 1); auditLog('Case', 'Follow-up snoozed', 'Moved to ' + fmt(c.follow)); toast(`${c.first} ${c.last} snoozed to tomorrow`); },
  fcall(t) { S.caseId = t.dataset.id; S.modal = { type: 'logcall' }; },
  flowmine(t) { S.flowMine = t.dataset.v === '1'; }
});
const _afterRender2 = afterRender;
afterRender = function () { _afterRender2(); if (FOCUS_MOVE) focusPlay(); };
/* ================= Navigation model ================= */
const NAV = [
  { g: 'Tools', d: 'Inbound work waiting to be filed or answered', items: [['uploads', 'Unattached Uploads', 'upload', 2, 'Files from providers not yet on a case'], ['comms', 'Communications', 'chat', 3, 'Provider and pharmacy messages'], ['acct', 'Account Requests', 'userplus', 0, 'New portal account approvals'], ['fax', 'Fax Transmissions', 'fax', 259, 'Inbound and outbound fax log', 'hot']] },
  { g: 'Clinical', d: 'Patients and their cases', items: [['cases', 'Cases', 'folder', null, 'Search, filter and work cases'], ['patients', 'Patients', 'users', null, 'Patient records across cases'], ['ae', 'Adverse Events', 'alert', null, 'Recorded AEs and follow-ups']] },
  { g: 'Boards', d: 'What is expiring soon', items: [['expauth', 'Expiring Authorizations', 'clock', null, 'PAs ending in the next 60 days'], ['expben', 'Expiring Benefits', 'heart', null, 'Plans that need re-verification'], ['expcon', 'Expiring Consents', 'shield', null, 'Consents ending soon']] },
  { g: 'Organizations', d: 'Payers, providers and pharmacies', items: [['carriers', 'Carriers', 'card', null, 'Medical and pharmacy carriers'], ['pbms', 'PBMs', 'link', null, 'Pharmacy benefit managers'], ['pharmacies', 'Pharmacies', 'pill', null, 'Specialty pharmacies'], ['pusers', 'Pharmacy Users', 'users', null, 'Pharmacy portal users'], ['facilities', 'Medical Facilities', 'building', null, 'Prescribing facilities'], ['locations', 'Facility Locations', 'pin', null, 'Addresses and fax numbers'], ['fusers', 'Facility Users', 'users', null, 'Provider portal users']] },
  { g: 'Admin', d: 'Access and reporting', items: [['hubusers', 'Hub Users', 'key', null, 'Staff accounts and roles'], ['reports', 'Reports', 'chart', null, 'Operational reports']] }
];
const BUILT = ['settings', 'ae', 'expcon', 'pharmacies', 'pusers', 'fusers', 'hubusers', 'reports', 'report', 'dashboard', 'cases', 'case', 'uploads', 'comms', 'acct', 'fax', 'patients', 'patient', 'carriers', 'carrier', 'pbms', 'pbm', 'facilities', 'facility', 'locations', 'expauth', 'expben', 'intake', 'created'];
const PARENT = { case: 'cases', patient: 'patients', carrier: 'carriers', pbm: 'pbms', facility: 'facilities', intake: 'cases', created: 'cases', pharmacy: 'pharmacies', report: 'reports' };
const navCount = (n, hot) => n == null ? '' : `<span class="count ${hot ? 'hot' : ''} num">${n}</span>`;
const routeOn = (k) => S.route === k || PARENT[S.route] === k;

function shellA(content) {
  const mini = S.navMini;
  return `<div class="app"><aside class="sidenav ${mini ? 'mini' : ''} ${S.navOpen ? 'open' : ''}" aria-label="Main navigation">
    <div class="brand">${logo(true)}<button class="iconbtn" data-a="navmini" aria-label="Collapse navigation">${ic('sidebar', 18)}</button></div>
    <nav><button class="navitem ${routeOn('dashboard') ? 'on' : ''}" data-a="go" data-r="dashboard">${ic('dash', 18)}<span>Dashboard</span></button>
    ${NAV.map(g => `<div class="navgroup">${g.g}</div>${g.items.map(([k, l, i, n, d, hot]) => `<button class="navitem ${routeOn(k) ? 'on' : ''}" data-a="go" data-r="${k}" title="${l}">${ic(i, 18)}<span>${l}</span>${navCount(n, hot)}</button>`).join('')}`).join('')}</nav>
    <div class="me"><span class="avatar">JM</span><span>Janet Mills<br><span class="muted" style="font-size:12px">Case manager</span></span></div></aside>
    <div class="main"><header class="topbar"><button class="iconbtn mobile-only" data-a="navopen" aria-label="Open navigation">${ic('menu', 20)}</button>${mini ? `<button class="iconbtn" data-a="navmini" aria-label="Expand navigation">${ic('sidebar', 18)}</button>` : ''}<span class="grow"></span>${util()}</header>${content}</div></div>`;
}
function util() {
  return `<div class="util"><label class="search">${ic('search', 16)}<span class="sr">Search</span><input placeholder="Search cases" data-a="gosearch"><kbd>/</kbd></label><button class="iconbtn" aria-label="Notifications" data-a="toast" data-v="3 new notifications">${ic('bell', 20)}<span class="dot"></span></button>${acctMenu()}</div>`;
}
function shellB(content) {
  const menu = [['dashboard', 'Dashboard'], ['work', 'Work queues', ['Tools', 'Boards']], ['clinical', 'Clinical', ['Clinical']], ['orgs', 'Organizations', ['Organizations']], ['admin', 'Admin', ['Admin']]];
  const grp = (NAV.find(g => g.items.some(i => routeOn(i[0]))) || {}).g; const onKey = S.route === 'dashboard' ? 'dashboard' : { Tools: 'work', Boards: 'work', Clinical: 'clinical', Organizations: 'orgs', Admin: 'admin' }[grp] || '';
  let mega = '';
  if (S.mega) {
    let idx = 0; const phase = !LAST_MEGA ? 'enter' : LAST_MEGA !== S.mega ? 'swap' : '';
    const m = menu.find(x => x[0] === S.mega); const groups = NAV.filter(g => m[2].includes(g.g));
    const extra = S.mega === 'clinical' ? `<div><h4>Recently viewed</h4>${CASES.slice(0, 4).map(c => `<a class="mi" style="--i:${idx++}" href="#" data-a="case" data-id="${c.id}">${ic('folder', 18)}<strong>${esc(fullName(c))}</strong><small class="mono">${c.id} · ${esc(c.caseStatus)}</small></a>`).join('')}</div>` : '';
    mega = `<div class="scrim ${phase === 'enter' ? 'enter' : ''}" data-a="megaclose"></div><div class="mega ${phase}" role="menu"><div class="mega-grid">${groups.map(g => `<div class="${g.items.length > 4 ? 'two' : ''}"><h4>${g.g}</h4><div class="mitems">${g.items.map(([k, l, i, n, d, hot]) => `<a class="mi" style="--i:${idx++}" href="#" data-a="go" data-r="${k}">${ic(i, 18)}<strong>${l}</strong>${n != null ? `<span class="count ${hot ? 'hot' : ''} num">${n}</span>` : ''}<small>${d}</small></a>`).join('')}</div></div>`).join('')}${extra}</div>
      <div class="foot"><span>${ic('info', 14)} Tip: press <span class="mono">/</span> to search cases from anywhere.</span></div></div>`;
  }
  const workCount = 2 + 3 + 259;
  return `<header class="topnav"><div class="row">${logo(true)}<button class="iconbtn mobile-only" data-a="menuopen" aria-label="Open menu">${ic('menu', 20)}</button>
    <nav class="menu ${S.navOpen ? 'open' : ''}" aria-label="Main">${menu.map(([k, l, g]) => g ? `<button data-a="mega" data-v="${k}" aria-expanded="${S.mega === k}" class="${onKey === k ? 'on' : ''}">${l}${k === 'work' ? ` <span class="count num">${workCount}</span>` : ''} ${ic('chevd', 14)}</button>` : `<button data-a="go" data-r="${k}" class="${onKey === k ? 'on' : ''}">${l}</button>`).join('')}</nav>
    <span style="flex:1"></span>${util()}</div>${mega}</header>${content}`;
}
function shellC(content, full) {
  const items = [['dashboard', 'Home', 'dash'], ['cases', 'Cases', 'folder'], ['patients', 'Patients', 'users'], ['uploads', 'Inbox', 'upload', 264], ['expauth', 'Boards', 'clock'], ['facilities', 'Orgs', 'building'], ['reports', 'Reports', 'chart']];
  return `<div class="app"><nav class="rail" aria-label="Main">${mark(30, '#ffffff', '#cfe6d6')}<div style="height:10px"></div>${items.map(([k, l, i, n]) => `<button class="railbtn ${routeOn(k) ? 'on' : ''}" data-a="go" data-r="${k}" title="${l}">${ic(i, 20)}${l}${n ? `<span class="dot num">${n > 99 ? '99+' : n}</span>` : ''}</button>`).join('')}<span class="sp"></span><button class="railbtn" data-a="settings">${ic('gear', 20)}Settings</button><span class="avatar" style="background:#fff;color:var(--green-700)">JM</span></nav>
  <div class="main"><header class="topbar"><h1 style="font-size:17px">${S.route === 'dashboard' ? 'Home' : 'Cases'}</h1><span class="grow"></span>${util()}</header>${content}</div></div>`;
}

/* ================= Client notes panel ================= */
const NOTES_MAP = {
  intake: [['New case follows the Figma intake flow', 'Search for duplicates first, then the same sections as the designs: demographics, prescriber and care team, consent, insurance, prescription, medical necessity, review.'], ['Long steps split into shorter ones', 'Per the wizard rule, 7 long steps became 12 short ones in 7 groups: demographics split into Identity and Contact, care team into Prescriber and Internal team, prescription into Dosing and Details, medical necessity into Diagnosis, History and Documents.'], ['Move freely, errors on revisit', 'From the designer notes: any step can be opened any time. Required fields only turn red when you come back to a step you left incomplete. Review lists what is missing with Fix links.'], ['Forms in modals, no stretched fields', 'Insurance policies are added in a modal. Field widths match their content and the form column is capped so fields never stretch across the screen.'], ['Assumptions to confirm with the client', 'Required: gender, full address, mobile or alternate phone, email or no-email box, prescriber and location, consent method, one policy or uninsured, dosing, refills, written date, dispensing, signed Rx, one primary diagnosis. Optional: internal care team, clinical history, supporting documents.']],
  ae: [['Adverse events had no home', 'Every AE is listed with seriousness, status and when the safety report is due. Record one from here or from the case.']],
  expcon: [['Boards', 'Consents ending in the next 90 days, with a one-click renewal link by text or email.']],
  pharmacies: [['Pharmacies', 'Each pharmacy page lists its open cases with shipment status and its portal users.']],
  pusers: [['Users in one place', 'Pharmacy, facility and hub users share one pattern: filters, status, and row actions for edit, password reset, resend invite and remove.']],
  fusers: [['Users in one place', 'Every provider portal user across facilities. Add a user here or from the facility page.']],
  hubusers: [['Users in one place', 'Hub staff with roles and last sign-in.']],
  reports: [['Reports', 'Operational reports built from live case data. Each has a chart, a table view and CSV export.']],
  settings: [['Settings', 'Profile, notifications, work preferences, appearance and out of office. Layout and color theme also live here.']],
  created: [['Confirmation after submit', 'Shows the new case ID, patient, status Requested, assignee and what happens next, with links to the case or to start another.']],
  uploads: [['Filters stay open, maybe move them to the side', 'Filters live in a panel beside the table and stay open while you work (collapsible). They dock on the left in every direction.'], ['Zebra striping on the uploaded documents table', 'Rows alternate shading, with more vertical padding.'], ['Actions per upload', 'Attach to case is one click on every row. Assign and Archive sit in the row menu and the preview panel.']],
  comms: [['Filters stay open on the side', 'Same side filter panel as Unattached Uploads.'], ['Tiny font', 'Subject and message body are 14px regular in dark navy. Nothing on the page is below 12px.'], ['Hard to see what needs a response', 'Each message shows Action needed or FYI plus who owes a response and by when. Overdue turns red.']],
  acct: [['Same as uploads and communications', 'Side filters that stay open, striped rows, larger type.'], ['Reviewing a request', 'Review opens a side panel with requester and facility details plus Approve and Deny, without leaving the list.']],
  fax: [['Same as uploads and communications', 'Side filters that stay open, striped rows, larger type.'], ['Failed faxes', 'Failed faxes show the reason in the row and can be retried from the side panel.']],
  patients: [['Same issues as Cases', 'Side filters, tighter rows, one status per column, address with the map pin next to it.'], ['Patients general cleanup', 'Patient page shows details with copy buttons, all cases, consent history and coverage on one screen.']],
  carriers: [['Carriers: click through to the cases', 'Case counts link to the carrier page, which lists every case for that carrier. Each row opens the case.']],
  pbms: [['Same pattern as Carriers', 'PBM page lists the cases tied to that PBM and each one opens the case.']],
  facilities: [['Facility details on the left', 'Details sit in the left column. Tabs run Prescribers and users, Locations, Notes, Documents, Cases, and open on Prescribers and users.'], ['Medical Facilities: missing actions under notes', 'Each note shows Edit, Highlight and Remove right on the row. Highlighted notes are marked like a highlighter pen instead of red text.']],
  locations: [['Move the icon next to the address', 'The map pin sits directly beside the street address in every location row.']],
  expauth: [['Boards', 'Expiring authorizations by patient with Reverify actions, or grouped by facility with Email and Print.']],
  expben: [['Boards', 'Same pattern as Expiring Authorizations for benefit verifications.']],
  dashboard: [['Switch priority of info', 'Work lists (due today, overdue, missing follow-up) now lead. Summary counts moved below.'], ['Authorization requests matter; make them clickable', 'Authorization requests sit beside My work. Every status row and count opens the filtered case list.'], ['Tiny, light font', 'Body text is 14px Roboto Regular in dark navy. Labels are Medium weight, not light gray.'], ['Keep the left nav open by default', 'Direction C (Left nav) opens with the full labeled nav. It can collapse to icons.']],
  cases: [['Reassign several cases at once', 'Check rows in the Cases table and use Reassign in the bar that appears. Requires a new coordinator and a reason, with an optional handoff note and email.'], ['Shrink the filters', 'About 40 checkboxes are now grouped, collapsible multi-select lists with live counts in a filter panel beside the table.'], ['Too much white space; tighten the rows', 'Rows are 40px with zebra striping. One status per column instead of stacked labels.'], ['Reverse Pending PA and Pending Appeal', 'Case status now runs in workflow order: PA submission, PA outcome, appeal submission, appeal outcome.'], ['Make all the filters multi-select dropdowns', 'Every filter is multi-select with live counts and removable chips.'], ['Filters stay open, maybe on the side', 'Filters dock on the left with a preview panel on the right. In A they tuck behind the page until you open them.']],
  case: [['Reassign case', 'Click Assigned to in the case header, or use the ... menu. Pick the new coordinator and a reason, add a handoff note, and optionally email them.'], ['Status changes need a reason', 'Changing case status opens a modal with reasons specific to that status. Saving without a reason shows an error. Every change lands in the audit trail.'], ['Too much white space', 'Header is one row plus a status strip. Tabs start above the fold. Read-only sections use tight two-column blocks.'], ['Copy to clipboard on demographics', 'Every demographic field and both IDs have a copy button.'], ['Patient demographics visible with other tabs', 'Demographics stay in the Patient side panel on every tab.'], ['Make prescription a tab, with Manage prescription', 'New Prescription tab holds Manage and Triage actions plus history.'], ['Hide header buttons; remove interim drug status, PAP status, pharmacy, active prescription', 'Header keeps only case status, coverage, authorization, follow-up and owner. The rest moved to their tabs.'], ['Authorization request is clunky; make it a linear stepper; up to 3 appeals', 'Authorizations tab is a step-by-step wizard. Each appeal is its own round, with an appeals-used meter (max 3).'], ['Hover highlight on every tab', 'Rows in Documents, Faxes, Notes, Messages, Audit trail and the rest highlight on hover, same as the Cases table.'], ['Notes: highlight means highlight', 'Highlighted notes get a highlighter-pen background on the text, not red text.'], ['Messages: add message at the top', 'The composer sits above the thread, so the newest message and the reply box are together.'], ['Documents, Messages, Audit trail: white space, make them tables', 'Documents, Faxes and Audit trail are compact striped tables. Messages and notes are a tight feed.'], ['Benefits tab white space', 'Plans are a table. BI details and coverage notes sit side by side.']]
};
function notesPanel() {
  const k0 = PARENT[S.route] && S.route !== 'case' ? PARENT[S.route] : S.route; const key = NOTES_MAP[k0] ? k0 : 'dashboard';
  return `<aside style="position:fixed;right:16px;top:60px;z-index:70;width:min(420px,calc(100vw - 32px));max-height:calc(100vh - 80px);overflow:auto" class="card" aria-label="Client feedback addressed">
  <div class="card-h"><h3>Feedback addressed on this screen</h3><button class="iconbtn" data-a="notes" aria-label="Close">${ic('x', 16)}</button></div>
  <div>${NOTES_MAP[key].map(([n, fix]) => `<div style="padding:10px 16px;border-bottom:1px solid var(--line-2);display:grid;grid-template-columns:18px 1fr;gap:4px 10px"><span style="color:var(--green)">${ic('check', 16)}</span><b style="font:600 13.5px var(--f-head)">${esc(n)}</b><span></span><span style="font-size:13px;color:var(--ink-2)">${esc(fix)}</span></div>`).join('')}</div>
  <div class="card-f muted">Also in the feedback, planned for a later phase: Unattached uploads, Communications, Account requests, Fax, Patients, Carriers, Medical facilities and Facility locations cleanup.</div></aside>`;
}

/* ================= Modals / toast ================= */
function modal() {
  const m = S.modal; if (!m) return '';
  const c = byId(S.caseId);
  const wrap = (title, body, foot) => `<div class="modal-wrap" data-a="mclose-bg"><div class="modal" role="dialog" aria-modal="true" aria-label="${esc(title)}"><div class="m-h"><h2>${title}</h2><button class="iconbtn" data-a="mclose" aria-label="Close">${ic('x', 18)}</button></div><div class="m-b">${body}</div><div class="m-f">${foot}</div></div></div>`;
  if (m.type === 'status') return wrap('Set status reason', `<p style="margin:0">Change case status from ${pill(c.caseStatus)} to ${pill(m.v)}</p><div class="input"><label class="lbl" for="reason">Reason</label><select id="reason"><option>Payer requested more information</option><option>Waiting on provider</option><option>Patient request</option><option>Other</option></select></div><div class="input"><label class="lbl" for="rnote">Note (optional)</label><textarea id="rnote" placeholder="Add context for the team"></textarea></div>`, `<button class="btn" data-a="mclose">Cancel</button><button class="btn primary" data-a="savestatus" data-v="${esc(m.v)}">Update status</button>`);
  if (m.type === 'manage') return wrap('Manage prescription', `<div class="radio-cards"><label><input type="radio" name="mp" checked><span><b>Update dosing</b><br><span class="muted">Change strength, directions or quantity</span></span></label><label><input type="radio" name="mp"><span><b>Custom dosing</b><br><span class="muted">Titration or split schedule</span></span></label><label><input type="radio" name="mp"><span><b>Discontinue</b><br><span class="muted">Stop this prescription and record why</span></span></label></div><div class="input"><label class="lbl" for="rxfile">Attach new prescription</label><input id="rxfile" type="file"></div>`, `<button class="btn" data-a="mclose">Cancel</button><button class="btn primary" data-a="mdone" data-v="Prescription updated">Save changes</button>`);
  if (m.type === 'triage') return wrap('Triage prescription', `<div class="input"><label class="lbl" for="tri">Triage outcome</label><select id="tri"><option>Approved for fulfillment</option><option>Needs clarification from prescriber</option><option>Rejected</option></select></div><div class="input"><label class="lbl" for="trin">Note</label><textarea id="trin"></textarea></div>`, `<button class="btn" data-a="mclose">Cancel</button><button class="btn primary" data-a="mdone" data-v="Prescription triaged">Save triage</button>`);
  if (m.type === 'ae') return wrap('Record adverse event', `<div class="note-banner">${ic('info', 16)}<span>Report within 24 hours of awareness. The safety team is notified when you submit.</span></div><div class="input"><label class="lbl" for="aed">Date of awareness</label><input id="aed" type="date" value="2026-09-24"></div><div class="input"><label class="lbl" for="aedesc">What happened</label><textarea id="aedesc" placeholder="Describe the event, onset and any action taken"></textarea></div>`, `<button class="btn" data-a="mclose">Cancel</button><button class="btn danger" data-a="mdone" data-v="Adverse event recorded">Submit AE</button>`);
  if (m.type !== 'deny') { const x = extraModal(m, wrap); if (x) return x; }
  if (m.type === 'deny') return wrap('Record denial', `<div class="input"><label class="lbl" for="dr">Denial reason</label><select id="dr"><option>Additional clinical documentation required</option><option>Step therapy not documented</option><option>Not medically necessary</option><option>Non-formulary</option></select></div><div class="input"><label class="lbl" for="dl">Denial letter</label><input id="dl" type="file"></div>`, `<button class="btn" data-a="mclose">Cancel</button><button class="btn danger" data-a="ardenysave">Record denial</button>`);
  return '';
}
let toastT;
function toast(msg) { S.toast = msg; clearTimeout(toastT); toastT = setTimeout(() => { S.toast = null; render(); }, 2600); }

/* ================= Render ================= */
const isTop = () => S.dir !== 'A';
const isModern = () => 'DEFGH'.includes(S.dir);
const DIRS = { H: ['Modern, layered cards', 'Side panels sit as cards behind the page with only their icons peeking out. Open one and the page shrinks back to reveal it.'], G: ['Floating panels', 'Modern with side panels turned edge-on like cards. Click one to fold it out as a detached, floating panel.'], E: ['Modern, green panels', 'Modern with the green brand gradient on both side panels, left and right.'], F: ['Dark', 'A dark take on Modern: deep green-black surfaces, glowing brand accents, same layout and motion.'], D: ['Modern, panels', 'Brand gradients, a softly moving ambient background, frosted glass panels and smooth motion. Side panels dock beside the page.'], A: ['Left nav', 'Refined version of today\'s layout. Full labeled nav, open by default. Patient panel docks on the right.'], B: ['Top nav + white', 'White top nav with mega menus. Frees the full width for docked filter, patient and activity panels.'], C: ['Top nav + green', 'Green top nav, and every side panel takes the same green theme as the nav.'] };
function reviewBar() { return ''; }
let LAST_MKEY = null, LAST_DKEY = null; let LAST_MEGA = null, CLOSING = false; const ANIM_K = {}, ANIM_T = {};
function render() {
  const open = document.querySelector('.mega');
  if (open && !S.mega && !CLOSING && !open.classList.contains('closing') && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    CLOSING = true; open.classList.remove('enter', 'swap'); open.classList.add('closing'); const sc = document.querySelector('.scrim'); if (sc) sc.classList.add('closing');
    setTimeout(() => { CLOSING = false; render(); }, 190); return;
  }
  const dr = document.querySelector('.drawer');
  if (dr && !S.drawer && !CLOSING && !dr.classList.contains('closing') && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    CLOSING = true; dr.classList.remove('enter'); dr.classList.add('closing'); const ds = document.querySelector('.drawer-scrim'); if (ds) ds.classList.add('closing');
    setTimeout(() => { CLOSING = false; render(); }, 200); return;
  }
  if (CLOSING) return;
  const ae = document.activeElement; const fid = ae && ae.id; const pos = ae && ae.selectionStart;
  const c = byId(S.caseId);
  let body;
  const V = { uploads: viewUploads, comms: viewComms, acct: viewAcct, fax: viewFax, patients: viewPatients, patient: viewPatient, facilities: viewFacilities, facility: viewFacility, locations: viewLocations,
    carriers: () => orgList('carriers', 'Carriers', CARRIERS, 'carrier', 'carriers'), pbms: () => orgList('pbms', 'PBMs', PBMS, 'pbm', 'PBMs'),
    carrier: () => orgDetail(CARRIERS.find(x => x.id === S.detail.org) || CARRIERS[0], 'carriers', 'Carriers'), pbm: () => orgDetail(PBMS.find(x => x.id === S.detail.org) || PBMS[0], 'pbms', 'PBMs'),
    expauth: () => viewBoard('Authorization'), expben: () => viewBoard('Benefits'), intake: viewIntake, created: viewCreated , ...ROUTES_X };
  document.body.classList.toggle('nav-white', S.dir === 'B');
  document.body.classList.toggle('theme-green', 'CDEFGH'.includes(S.dir));
  document.body.classList.toggle('theme-modern', isModern());
  document.body.classList.toggle('green-both', S.dir === 'E');
  document.body.classList.toggle('theme-dark', S.dir === 'F');
  document.body.classList.toggle('float-docks', S.dir === 'G');
  document.body.classList.toggle('stack-docks', S.dir === 'H');
  { const key = S.dir + '|' + S.route + '|' + S.caseId + '|' + (S.detail.facility || '') + (S.detail.org || '') + (S.detail.patient || '') + (S.ik ? (S.ik.step === 'search' ? 's' : 'w') : '');
    const tkey = key + '|' + S.tab + '|' + JSON.stringify(S.tab2);
    const dkey = [S.dockL, S.dockR, S.side, S.fpA].join();
    const flag = (cls, ms) => { document.body.classList.add(cls); clearTimeout(ANIM_T[cls]); ANIM_T[cls] = setTimeout(() => document.body.classList.remove(cls), ms); };
    FILE_MOVE = fileMove(ANIM_K.route, S.route);
    IK_MOVE = S.route === 'intake' && ANIM_K.route === 'intake' ? ikCapture(ANIM_K.ikstep, S.ik && S.ik.step) : null; ANIM_K.ikstep = S.ik && S.ik.step;
    if (isModern()) { if (FILE_MOVE) flag('anim-dock', 700); else if (key !== ANIM_K.page) flag('anim-page', 900); else if (tkey !== ANIM_K.tab) flag('anim-tab', 600); if (dkey !== ANIM_K.dock && ANIM_K.dock) flag('anim-dock', 600); }
    ANIM_K.route = S.route; ANIM_K.page = key; ANIM_K.tab = tkey; ANIM_K.dock = dkey; }
  if (V[S.route]) {
    body = (S.dir === 'A' ? shellA : shellB)(V[S.route]());
  } else if (S.dir === 'A') {
    body = shellA(S.route === 'dashboard' ? viewDashboard() : S.route === 'cases' ? viewCasesA() : viewCaseA(c));
  } else {
    body = shellB(S.route === 'dashboard' ? viewDashboard() : S.route === 'cases' ? viewCasesB() : viewCaseB(c));
  }
  LAST_MEGA = isTop() ? S.mega : null;
  const drw = drawer(); LAST_DRAWER = S.drawer ? S.drawer.type + S.drawer.id : null;
  const PRE_DOCKS = dockWidths();
  const MKEY = S.modal ? JSON.stringify([S.modal.type, S.modal.id ?? '', S.modal.step ?? '']) : null, DKEY = S.drawer ? S.drawer.type + S.drawer.id : null;
  const KEEP = {}; document.querySelectorAll('#root .modal [id], #root .drawer [id]').forEach(el => { if (!/^(INPUT|SELECT|TEXTAREA)$/.test(el.tagName) || el.type === 'file') return; const inModal = !!el.closest('.modal'); if ((inModal && MKEY === LAST_MKEY) || (!inModal && DKEY === LAST_DKEY)) KEEP[el.id] = el.type === 'checkbox' || el.type === 'radio' ? { c: el.checked } : { v: el.value }; });
  const stillModal = MKEY && MKEY === LAST_MKEY; LAST_MKEY = MKEY; LAST_DKEY = DKEY;
  document.getElementById('root').innerHTML = reviewBar() + body + drw + popMenu() + bulkBar() + (S.notesPanel ? notesPanel() : '') + modal().replace('<div class="modal-wrap"', stillModal ? '<div class="modal-wrap still"' : '<div class="modal-wrap"') + (S.toast ? `<div class="toast" role="status">${ic('check', 18)}${esc(S.toast)}</div>` : '');
  Object.entries(KEEP).forEach(([id, o]) => { const el = document.getElementById(id); if (!el || el.dataset.fresh) return; if ('c' in o) el.checked = o.c; else el.value = o.v; });
  if (fid) { const el = document.getElementById(fid); if (el) { el.focus(); try { if (pos != null) el.setSelectionRange(pos, pos); } catch (e) { } } }
  if (typeof afterRender === 'function') afterRender();
  animateDocks(PRE_DOCKS);
  if (FILE_MOVE) { playFileMove(FILE_MOVE); FILE_MOVE = null; }
  if (IK_MOVE) { ikPlay(IK_MOVE); IK_MOVE = null; }
}

/* ================= Events ================= */
function go(r) {
  if (!BUILT.includes(r)) { const item = NAV.flatMap(g => g.items).find(i => i[0] === r); toast(`${item ? item[1] : 'That page'} is planned for a later phase of this prototype`); S.mega = null; S.navOpen = false; render(); return; }
  S.route = r; S.drawer = null; S.pop = null; S.mega = null; S.navOpen = false; S.menu = null; S.openMs = null; window.scrollTo(0, 0); render();
}
function openCase(id) { S.drawer = null; S.pop = null; S.caseId = id; S.sel = id; S.menu = null; S.route = 'case'; window.scrollTo(0, 0); render(); }
function curRound(c) { const r = getAR(c); return [r, r.rounds[r.rounds.length - 1]]; }
function stamp() { return `${TODAY.getMonth() + 1}/${TODAY.getDate()}/${TODAY.getFullYear()}`; }

document.addEventListener('click', (e) => {
  const t = e.target.closest('[data-a]');
  if (!t) { if (S.openMs || S.menu || S.mega || S.pop) { S.openMs = null; S.menu = null; S.mega = null; S.pop = null; render(); } return; }
  const a = t.dataset.a, v = t.dataset.v, k = t.dataset.k;
  if (a === 'col') { S.cols[k] = !S.cols[k]; S.menu = 'cols'; render(); return; }
  if (a === 'opt') { const s = S.f[k]; s.has(v) ? s.delete(v) : s.add(v); render(); return; }
  if (t.tagName === 'A' || t.tagName === 'BUTTON' || t.tagName === 'TR' || t.classList.contains('wi') || t.classList.contains('qitem') || (t.classList.contains('modal-wrap') && e.target === t)) e.preventDefault();
  if (a !== 'ms' && a !== 'menu' && !t.closest('.ms-pop') && !t.closest('.menu-pop')) { S.openMs = null; S.menu = null; }
  if (a !== 'rowmenu' && !t.closest('.pop-fixed')) S.pop = null;
  if (a !== 'rowmenu' && t.closest('.pop-fixed')) S.pop = null;
  const c = byId(S.caseId);
  if (EXTRA[a]) { if (t.tagName !== 'INPUT') e.preventDefault(); EXTRA[a](t, e); render(); return; }
  switch (a) {
    case 'dir': if (!DIRS[v] || !'HDA'.includes(v)) break; if (v === 'H' && S.dir !== 'H') { S.dockL = false; S.dockR = false; } if (v !== 'H' && S.dir === 'H') { S.dockL = true; S.dockR = true; } S.dir = v; S.mega = null; try { localStorage.setItem('hp-dir4', v); } catch (x) { } break;
    case 'go': return go(t.dataset.r);
    case 'case': e.stopPropagation(); return openCase(t.dataset.id);
    case 'sel': S.sel = t.dataset.id; S.dockR = true; break;
    case 'tab': S.tab = v; S.menu = null; if (S.route === 'dashboard') S.route = 'case'; break;
    case 'ms': S.openMs = S.openMs === k ? null : k; S.msq = ''; break;
    case 'msclose': S.openMs = null; break;
    case 'msclear': S.f[k].clear(); break;
    case 'unchip': S.f[k].delete(v); break;
    case 'clearall': Object.values(S.f).forEach(s => s.clear()); S.q = ''; break;
    case 'fgx': S.expanded['f-' + k] = !(S.expanded['f-' + k] ?? ['quick', 'caseStatus', 'ar'].includes(k)); break;
    case 'sort': S.sort = { k, d: S.sort.k === k ? -S.sort.d : 1 }; break;
    case 'pin': { e.stopPropagation(); const x = byId(t.dataset.id); x.pinned = !x.pinned; toast(x.pinned ? 'Case pinned' : 'Case unpinned'); break; }
    case 'drill': Object.values(S.f).forEach(s => s.clear()); if (v !== '*') S.f[k].add(v); else AR_STATUS.forEach(s => S.f.ar.add(s)); return go('cases');
    case 'drillwl': Object.values(S.f).forEach(s => s.clear()); S.f.quick.add(v === 'today' ? 'Overdue follow-up' : v === 'overdue' ? 'Overdue follow-up' : 'Missing follow-up'); if (v === 'today') { S.f.quick.clear(); S.q = ''; toast('Showing cases sorted by follow-up date'); } S.sort = { k: 'follow', d: 1 }; return go('cases');
    case 'wl': S.wl = v; break;
    case 'copy': {
      const done = () => { t.classList.add('done'); t.innerHTML = ic('check', 14); toast(`Copied ${v}`); };
      try { navigator.clipboard.writeText(v).then(done, () => { fallbackCopy(v); done(); }); } catch (x) { fallbackCopy(v); done(); }
      return;
    }
    case 'navmini': S.navMini = !S.navMini; break;
    case 'navopen': case 'menuopen': S.navOpen = !S.navOpen; break;
    case 'mega': S.mega = S.mega === v ? null : v; break;
    case 'megaclose': S.mega = null; break;
    case 'dockL': S.dockL = !S.dockL; break;
    case 'dockR': S.dockR = !S.dockR; break;
    case 'side': S.side = !S.side; S.sideAnim = S.side; break;
    case 'strip': S.strip = !S.strip; break;
    case 'qtab': S.qtab = v; break;
    case 'menu': S.menu = S.menu === v ? null : v; break;
    case 'col': S.cols[k] = !S.cols[k]; S.menu = 'cols'; break;
    case 'setstatus': S.menu = null; if (v !== c.caseStatus) S.modal = { type: 'status', v }; break;
    case 'savestatus': c.caseStatus = v; S.modal = null; toast('Case status updated'); break;
    case 'setcov': c.coverage = v; S.menu = null; toast('Coverage outcome updated'); break;
    case 'modal': e.stopPropagation(); S.modal = { type: v, id: t.dataset.id }; S.pop = null; break;
    case 'mclose': S.modal = null; break;
    case 'mclose-bg': if (e.target === t) S.modal = null; else return; break;
    case 'mdone': S.modal = null; toast(v); break;
    case 'toast': S.mega = null; toast(v); break;
    case 'notes': S.notesPanel = !S.notesPanel; S.menu = null; break;
    case 'density': document.body.classList.toggle('comfy', v === '1'); try { localStorage.setItem('hp-comfy', v); } catch (x) { } break;
    case 'arx': S.expanded[v] = !S.expanded[v]; break;
    case 'arfile': { const [, rd] = curRound(c); rd.pendingFile = v ? (rd.kind === 'pa' ? 'PA_form_completed.pdf' : `Appeal${rd.n}_packet.pdf`) : null; break; }
    case 'arnext': { const [, rd] = curRound(c); rd.dates[rd.stage] = stamp(); if (rd.pendingFile) { rd.file = rd.pendingFile; rd.pendingFile = null; } rd.stage++; toast(v || 'Step completed'); break; }
    case 'arapprove': { const [, rd] = curRound(c); rd.dates[rd.stage] = stamp(); rd.outcome = 'Approved'; rd.stage++; c.coverage = 'Approved'; c.ar = 'Complete'; c.caseStatus = 'Active'; toast('Approval recorded'); break; }
    case 'ardeny': S.modal = { type: 'deny' }; break;
    case 'ardenysave': { const [, rd] = curRound(c); rd.dates[rd.stage] = stamp(); rd.outcome = 'Denied'; rd.reason = document.getElementById('dr').value; rd.stage++; c.coverage = 'Denied'; S.modal = null; toast('Denial recorded'); break; }
    case 'arappeal': { const [r] = curRound(c); const n = r.rounds.filter(x => x.kind === 'appeal').length + 1; r.rounds.push({ kind: 'appeal', n, stage: 0, outcome: null, dates: [] }); c.ar = 'Appeal in Progress'; c.caseStatus = 'Pending Appeal Submission'; toast(`Appeal ${n} of 3 started`); break; }
    case 'arcancel': getAR(c).cancelled = true; c.ar = 'Cancelled'; S.menu = null; toast('Authorization request cancelled'); break;
    case 'arreset': delete AR[c.id]; if (c.id === CASES[0].id) { c.ar = 'Appeal in Progress'; c.coverage = 'Denied'; c.caseStatus = 'Pending Appeal Submission'; } S.menu = null; toast('Demo flow restarted'); break;
    case 'gosearch': return;
  }
  render();
});
function fallbackCopy(v) { const ta = document.createElement('textarea'); ta.value = v; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (e) { } ta.remove(); }
document.addEventListener('input', (e) => {
  const k = e.target.dataset.in; if (!k) return;
  if (k === 'q') { S.q = e.target.value; render(); }
  if (k === 'pq') { S.pq[e.target.dataset.p] = e.target.value; render(); }
  if (k === 'msq') { S.msq = e.target.value; render(); }
});
document.addEventListener('change', (e) => {
  if (e.target.dataset.in === 'fu') { const c = byId(S.caseId); const [y, m, d] = e.target.value.split('-').map(Number); c.follow = e.target.value ? new Date(y, m - 1, d) : null; toast('Next follow-up date updated'); render(); }
});
window.addEventListener('scroll', () => { if (S.pop) { S.pop = null; render(); } }, true);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { S.openMs = null; S.menu = null; S.mega = null; S.pop = null; if (S.modal) S.modal = null; else S.drawer = null; render(); }
  if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) { e.preventDefault(); const el = document.querySelector('.util .search input'); el && el.focus(); }
  if (e.key === 'Enter' && e.target.dataset.a === 'gosearch') { S.q = e.target.value; Object.values(S.f).forEach(s => s.clear()); go('cases'); }
  if (e.key === 'Enter' && (e.target.classList.contains('wi') || e.target.classList.contains('qitem'))) openCase(e.target.dataset.id);
});
window.HP_START = () => render();

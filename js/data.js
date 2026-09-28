/* ============================================================
   SOURCE LEDGER (reference/source-ledger.md, Microsoft-grounded)
   ============================================================ */
const SOURCES = [
  {n:1,g:"Core product and capability docs",t:"Learn about Microsoft Purview (solution families)",u:"https://learn.microsoft.com/en-us/purview/purview",type:"docs",trust:"high",b:"1,2,3"},
  {n:2,g:"Scanning, connectors, and on-prem",t:"Data sources that connect to Purview Data Map (capability matrix)",u:"https://learn.microsoft.com/en-us/purview/data-map-data-sources",type:"docs",trust:"high",b:"3,5"},
  {n:3,g:"Scanning, connectors, and on-prem",t:"Choose the right integration runtime (IR matrix per source)",u:"https://learn.microsoft.com/en-us/purview/data-map-integration-runtime-choose",type:"docs",trust:"high",b:"4,5"},
  {n:4,g:"Gov-cloud, licensing, and compliance",t:"Feature availability for Microsoft Purview (Azure Government exclusions)",u:"https://learn.microsoft.com/en-us/purview/legacy/classic-feature-availability",type:"docs",trust:"high",b:"4,5"},
  {n:5,g:"Gov-cloud, licensing, and compliance",t:"Plan for Microsoft Purview - GCC deployments",u:"https://learn.microsoft.com/en-us/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-gcc-deployments",type:"service description",trust:"high",b:"4"},
  {n:6,g:"Gov-cloud, licensing, and compliance",t:"Plan for Microsoft Purview - GCC High deployments",u:"https://learn.microsoft.com/en-us/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-gcc-high-deployments",type:"service description",trust:"high",b:"4"},
  {n:7,g:"Gov-cloud, licensing, and compliance",t:"Plan for Microsoft Purview - DoD deployments",u:"https://learn.microsoft.com/en-us/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-dod-deployments",type:"service description",trust:"high",b:"4,5"},
  {n:8,g:"Gov-cloud, licensing, and compliance",t:"Cloud feature availability for US Government customers",u:"https://learn.microsoft.com/en-us/azure/security/fundamentals/feature-availability",type:"docs",trust:"high",b:"4"},
  {n:9,g:"Scanning, connectors, and on-prem",t:"Amazon S3 multicloud scanning connector",u:"https://learn.microsoft.com/en-us/purview/register-scan-amazon-s3",type:"docs",trust:"high",b:"5,6"},
  {n:10,g:"Scanning, connectors, and on-prem",t:"Connect to and manage Snowflake",u:"https://learn.microsoft.com/en-us/purview/register-scan-snowflake",type:"docs",trust:"high",b:"5,7"},
  {n:11,g:"Scanning, connectors, and on-prem",t:"Connect to and manage Salesforce",u:"https://learn.microsoft.com/en-us/purview/register-scan-salesforce",type:"docs",trust:"high",b:"5"},
  {n:12,g:"Scanning, connectors, and on-prem",t:"Learn about the information protection scanner",u:"https://learn.microsoft.com/en-us/purview/deploy-scanner",type:"docs",trust:"high",b:"4,5,6"},
  {n:13,g:"Scanning, connectors, and on-prem",t:"Information protection scanner prerequisites",u:"https://learn.microsoft.com/en-us/purview/deploy-scanner-prereqs",type:"docs",trust:"high",b:"4,6"},
  {n:14,g:"Scanning, connectors, and on-prem",t:"DLP for on-premises repositories",u:"https://learn.microsoft.com/en-us/purview/dlp-on-premises-scanner-get-started",type:"docs",trust:"high",b:"5,6"},
  {n:15,g:"AI protections",t:"Learn about DSPM for AI",u:"https://learn.microsoft.com/en-us/purview/dspm-for-ai",type:"docs",trust:"high",b:"5,6"},
  {n:16,g:"AI protections",t:"Purview protections for Microsoft 365 Copilot",u:"https://learn.microsoft.com/en-us/purview/ai-m365-copilot",type:"docs",trust:"high",b:"5"},
  {n:17,g:"AI protections",t:"Purview protections for AI agents (support matrix)",u:"https://learn.microsoft.com/en-us/purview/ai-agents",type:"docs",trust:"high",b:"5"},
  {n:18,g:"AI protections",t:"Purview protections for Copilot Studio agents",u:"https://learn.microsoft.com/en-us/purview/ai-copilot-studio",type:"docs",trust:"high",b:"5"},
  {n:19,g:"AI protections",t:"Considerations for deploying DSPM for AI",u:"https://learn.microsoft.com/en-us/purview/ai-microsoft-purview-considerations",type:"docs",trust:"high",b:"5,7"},
  {n:20,g:"AI protections",t:"Configure DSPM for AI for custom AI apps (Purview SDK)",u:"https://learn.microsoft.com/en-us/purview/developer/configurepurview",type:"docs",trust:"high",b:"5"},
  {n:21,g:"AI protections",t:"Copilot Studio audit fields (CopilotInteraction)",u:"https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-logging-copilot-studio",type:"docs",trust:"high",b:"5"},
  {n:22,g:"AI protections",t:"Discover AI apps and agents (Entra Agent ID + DSPM for AI)",u:"https://learn.microsoft.com/en-us/security/security-for-ai/discover",type:"docs",trust:"high",b:"5"},
  {n:23,g:"Scanning, connectors, and on-prem",t:"Data governance best practices for security (private endpoints, RBAC)",u:"https://learn.microsoft.com/en-us/purview/data-gov-classic-security-best-practices",type:"docs",trust:"high",b:"4,7"},
  {n:24,g:"Gov-cloud, licensing, and compliance",t:"CAF reference architecture: unified data platform (Purview in a data management landing zone)",u:"https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/data/architecture-azure-landing-zones-unify-data-platform",type:"reference architecture",trust:"high",b:"4,8"},
  {n:25,g:"Gov-cloud, licensing, and compliance",t:"Microsoft Purview service description (licensing)",u:"https://learn.microsoft.com/en-us/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description",type:"service description",trust:"high",b:"4"},
  {n:26,g:"Core product and capability docs",t:"What's new in Microsoft Purview",u:"https://learn.microsoft.com/en-us/purview/whats-new",type:"docs",trust:"high",b:"1,5"},
  {n:27,g:"Third-party / partner (used with caution)",t:"OneTrust for Purview DSPM (Microsoft Marketplace listing, partner-authored)",u:"https://marketplace.microsoft.com/en-us/product/azure-applications/onetrustllc1594047340198.azure-sentinel-solution-onetrust?tab=overview",type:"marketplace",trust:"partner listing",b:"5"},
  {n:28,g:"Named technical talks and videos",t:"Microsoft Mechanics: AI and Agent Data Security Controls in Microsoft Purview",u:"https://www.youtube.com/watch?v=4BcVWkSTZ3I",type:"video",trust:"high",b:"5"},
  {n:29,g:"Named technical talks and videos",t:"Microsoft Mechanics: New Data Security Posture Management",u:"https://www.youtube.com/watch?v=NLfoFpFxhrA",type:"video",trust:"high",b:"1,5"},
  {n:30,g:"Named technical talks and videos",t:"Microsoft Mechanics: New Agents in Microsoft Purview",u:"https://www.youtube.com/watch?v=cu2FJ2f7Jho",type:"video",trust:"high",b:"5,7"},
  {n:31,g:"Third-party / partner (used with caution)",t:"OneTrust: Microsoft 365 integration (vendor page, far side of connector only)",u:"https://www.onetrust.com/integrations/microsoft-365/",type:"vendor",trust:"far-side only",b:"5"},
  {n:32,g:"Named technical talks and videos",t:"Microsoft Mechanics: Azure Purview - Map, Discover, and Find Insights Across Data Sources (Mike Flasko + Jeremy Chapman)",u:"https://www.youtube.com/watch?v=27bA4KFiEKk",type:"video",trust:"high",b:"2,3"},
  {n:33,g:"Named technical talks and videos",t:"Microsoft Ignite BRK256: Enhance data security investigations with Microsoft Purview",u:"https://www.youtube.com/watch?v=SKQyfHBfvpY",type:"video (conference talk)",trust:"high",b:"5,7"},
  {n:34,g:"Named technical talks and videos",t:"Microsoft Mechanics: Introducing Microsoft Purview Data Security Investigations",u:"https://www.youtube.com/watch?v=0lefwZeVd2c",type:"video",trust:"high",b:"5,7"},
  {n:35,g:"Gov-cloud, licensing, and compliance",t:"Understanding Compliance Between Commercial, Government, DoD & Secret Offerings (Microsoft Public Sector Blog)",u:"https://techcommunity.microsoft.com/blog/publicsectorblog/understanding-compliance-between-commercial-government-dod--secret-offerings---m/4225436",type:"blog (Microsoft official)",trust:"high",b:"4"},
  {n:36,g:"Named technical talks and videos",t:"Microsoft Purview Data Map (official YouTube playlist)",u:"https://www.youtube.com/playlist?list=PLlUvFtDNTC9_vqdYkpKtJeRWnv3KGESTP",type:"video playlist",trust:"high",b:"2,3"}
];

/* ============================================================
   CURRICULUM, LADDER, GLOSSARY, QUIZ, FAILURE MODES, EA
   ============================================================ */
const DATA = {
  weeks:[
    {n:1,title:"Context and scope",time:"45 min",rungs:"100",lib:"block-01-context-and-scope",
     opener:"Before drawing anything, fix the boundary. Purview is one portal but four separable solution families with different licenses, and its most important neighbors (Defender for Endpoint, Entra ID, Sentinel, SharePoint, Key Vault) sit just outside it [S1].",
     obj:"What Purview is, what it is not, the two halves (Microsoft 365 data security and compliance vs. data governance), and the clouds in scope: Commercial, GCC, GCC High, DoD, and Azure Government. No Secret or Top Secret, no air gap.",
     deliv:"Boundary statement written; neighbor list has at least five systems.",
     mods:[
       {t:"Definition: one platform to govern, protect, and manage data wherever it lives [S1]",rl:"scope · 100",
        action:"Write a two-sentence definition and a one-line boundary statement (what is in, what is out).",
        lookLike:"<b>Boundary statement (example output)</b><pre>IN:  classification, sensitivity labels, DLP, Insider Risk, Data Map + Unified Catalog,\n     Audit, eDiscovery, Compliance Manager, DSPM / DSPM for AI\nOUT: Defender for Endpoint (shares the device sensor for Endpoint DLP)\n     Entra ID / Entra Agent ID (identity, RBAC, agent directory)\n     Sentinel (SIEM; hosts the OneTrust partner solution)\n     SharePoint / OneDrive / Teams (content stores Purview governs)\n     Azure Key Vault (scan secrets) · AWS, Snowflake, Salesforce (scanned sources)</pre>",
        whyMatters:"Most bad Purview designs start by assuming it enforces something a neighbor owns, for example that cataloging data changes who can open it. It does not."},
       {t:"Two halves and four families: data security, data governance, data compliance, AI protections [S1]",rl:"scope · 100",
        action:"Sort every solution into its family and note which ones share classifiers, labels, and activity explorer.",
        lookLike:"<b>Family split</b><pre>Data security    -> Information Protection, DLP, Insider Risk Management, DSPM\nData governance  -> Data Map, Unified Catalog\nData compliance  -> Audit, eDiscovery, Compliance Manager (+ lifecycle, records, comms compliance)\nAI protections   -> DSPM for AI, AI interaction auditing\nShared           -> classifiers, connectors, data/activity explorer, sensitivity labels</pre>",
        whyMatters:"A request that spans families ('govern AND protect AND prove compliance') spans products and licenses. Name the split out loud [S25]."},
       {t:"Clouds in scope and why government variants matter",rl:"physical · 100",
        action:"List the five cloud variants and note that gov-cloud guides only list differences from the commercial baseline [S7].",
        whyMatters:"Parity is the assumption that breaks designs. A blank cell in a gov-cloud table usually means parity, not absence, and a named gap means a real redesign."},
       {t:"Source ledger triage: 36 Microsoft-grounded rows",rl:"sources · 100",
        action:"Skim the ledger and tag each source to the views it feeds. Microsoft Learn, service descriptions, reference architectures, and Mechanics only.",
        whyMatters:"The source rule is the falsifier for the whole day: a claim without a ledger row is marked UNVERIFIED, not repeated."}
     ],
     vids:[{s:1},{s:26},{s:29}]},
    {n:2,title:"Conceptual view",time:"60 min",rungs:"100-200",lib:"view-01-conceptual",
     opener:"Conceptual means what and why, not how. Capabilities and actors only; product names appear only where Microsoft uses them as the capability name.",
     obj:"Microsoft's four pressures (fragmented data, low visibility, fast AI adoption, blurred IT roles) and the five outcomes Purview answers with [S1].",
     deliv:"Conceptual view complete with no product names; OV-1 style picture drawn.",
     mods:[
       {t:"Five capabilities (C1-C5) as the top-level map",rl:"conceptual · 100",
        action:"Fill the capability table with the actor who cares most about each.",
        lookLike:"<b>Capability map [S1]</b><pre>C1 Know your data          -> data owner, steward, compliance admin\nC2 Protect sensitive data  -> compliance admin, end user\nC3 Govern data             -> data steward, data source admin\nC4 Manage risk/regulation  -> compliance admin, investigator, auditor\nC5 Secure AI use           -> security and compliance analyst</pre>",
        whyMatters:"Sponsors buy outcomes. If a sponsor cannot agree with every capability line, the architecture will not survive the funding conversation."},
       {t:"Actors, including the non-human one",rl:"conceptual · 200",
        action:"Add the agent actor: it reads and writes data on a user's behalf and is governed like its parent app [S17].",
        whyMatters:"Treating agents as a separate trust principal leads to inventing controls Purview does not have. Sources describe inheritance, not interception."},
       {t:"Key concepts: classification, sensitivity label, policy, data estate, AI interaction",rl:"conceptual · 100",
        action:"Write one sentence per concept and how it relates to the others.",
        whyMatters:"Policies act on classified or labeled data. Nothing downstream works if classification never ran."},
       {t:"Operational concept (OV-1)",rl:"conceptual · 200",
        action:"Draw people and agents working with data inside the org boundary; non-Microsoft stores and AI apps outside; regulators receiving evidence.",
        lookLike:"<b>OV-1 diagram</b><img class=\"diagram\" src=\"assets/diagrams/01-conceptual-1.png\" alt=\"Conceptual view diagram\">",
        whyMatters:"This is the one picture an executive should be able to repeat back."}
     ],
     vids:[{s:1},{s:32},{s:36}]},
    {n:3,title:"Logical view",time:"60 min",rungs:"200",lib:"view-02-logical",
     opener:"Logical means which parts and how they talk. Components have responsibilities and interfaces; no regions, SKUs, or hostnames.",
     obj:"Ten logical components, the logical data model, and six flows (scan, on-prem label, DLP evaluation, AI audit, AI insight, retain/discover).",
     deliv:"Every capability has at least one logical component; data model drawn.",
     mods:[
       {t:"Decompose capabilities into components",rl:"logical · 200",
        action:"Map each component to the capability it realizes, with inputs and outputs.",
        lookLike:"<b>Component excerpt</b><pre>Classification engine  C1     content, scan results      -> classifications\nData Map               C1,C3  registered sources, creds  -> assets, classifications, lineage\nInformation Protection C2     label policies             -> labeled / encrypted content\nDLP                    C2     DLP policies               -> alerts, blocks, activity events\nAudit                  C4,C5  activity events            -> searchable audit records\nDSPM for AI            C5     AI interactions, SPO data  -> reports, one-click policies</pre>",
        whyMatters:"When the question is 'what data do we have and where', the answer is Data Map + Unified Catalog, not DLP. DLP acts on data already classified; it does not discover it."},
       {t:"Logical data model (ERD)",rl:"logical · 200",
        action:"Draw the entities: label policy, sensitivity label, SIT, content item, data source, asset, policy, AI interaction, audit record, case.",
        lookLike:"<b>Data model</b><img class=\"diagram\" src=\"assets/diagrams/02-logical-1.png\" alt=\"Logical data model\">",
        whyMatters:"AI interaction emits exactly one audit record (1:1). That makes the audit log the completeness backbone for DSPM and eDiscovery."},
       {t:"Logical flows F1-F6",rl:"logical · 200",
        action:"Mark each flow's payload and trigger. Note F1: the scan returns metadata and classifications only [S9].",
        lookLike:"<b>Flow chain</b><img class=\"diagram\" src=\"assets/diagrams/02-logical-2.png\" alt=\"Logical flows\">",
        whyMatters:"Two design decisions live here: connectors never return content, and Fabric / Security Copilot prompts are not captured without a collection policy [S15]."}
     ],
     vids:[{s:2},{s:15},{s:32}]},
    {n:4,title:"Physical view",time:"60 min",rungs:"200-300",lib:"view-03-physical",
     opener:"Physical means what is deployed and where. Every row traces to a logical component. Blank cells are real gaps, not omissions.",
     obj:"Logical-to-physical mapping, the four-cloud topology, scanner host requirements, government cloud variants, licensing traps, and the standards profile.",
     deliv:"Every logical component maps to a physical realization or is marked as a gap.",
     mods:[
       {t:"Four clouds: M365 tenant, Azure subscription, AWS, customer estate",rl:"physical · 200",
        action:"Place every runtime and store in one of the four boxes.",
        lookLike:"<b>Deployment topology</b><img class=\"diagram\" src=\"assets/diagrams/03-physical-1.png\" alt=\"Physical deployment topology\">",
        whyMatters:"The Purview account is an Azure resource, not an M365 tenant resource. Microsoft recommends a dedicated data management landing zone, one per Entra tenant [S24]."},
       {t:"Integration runtimes: Azure IR, AWS IR, Managed VNet IR, self-hosted IR (SHIR, incl. Kubernetes)",rl:"physical · 200",
        action:"For each registered source, pick the runtime and say who operates it [S3].",
        lookLike:"<b>Runtime decision</b><pre>Public-endpoint Azure source  -> Azure IR (Microsoft-managed)\nPrivate endpoints             -> Managed VNet IR\nAmazon S3 / RDS               -> AWS IR, operated by Microsoft in its own AWS account\nOn-prem SQL, file systems     -> SHIR on a customer VM or Kubernetes (JDK 11)</pre>",
        whyMatters:"The customer estate only hosts the SHIR, the scanner, file shares, and onboarded devices. Everything else runs in Microsoft or Azure."},
       {t:"Information protection scanner host",rl:"physical · 200",
        action:"Size the host: 64-bit Windows Server 2016-2025 (no Core/Nano), 4 cores, 8 GB RAM, about 10 GB temp, SQL Server 2016+ with case-insensitive collation, AD account synced to Entra ID [S13].",
        whyMatters:"Every item on this list is a known install failure."},
       {t:"Government cloud variants and the FedRAMP question",rl:"physical · 300",
        action:"Fill the variant matrix. Resolve 'GCC is Moderate' vs 'GCC is High' with [S35].",
        lookLike:"<b>Resolution [S35]</b><pre>GCC formal P-ATO (DHHS)      : FedRAMP Moderate\nGCC audits completed         : FedRAMP High (SARs) -> advertised High \"Equivalency\"\nGCC High agency ATOs         : both Moderate and High\n=> [S5] and [S8] are both accurate; different instruments, same environment</pre>",
        whyMatters:"In an ATO review, calling this a documentation error costs credibility. Name the instruments instead."},
       {t:"Licensing traps",rl:"physical · 300",
        action:"Record: S3 connector is an add-on [S9]; on-prem DLP needs a license for every user who adds or consumes files in scanned locations [S14]; DSPM for AI Copilot insights need Copilot licenses [S19].",
        whyMatters:"Portal configuration succeeds whether or not users are licensed. The failure shows up in an audit, not in the product."}
     ],
     vids:[{s:3},{s:13},{s:24},{s:35}]},
    {n:5,title:"Integration and AI elements",time:"60 min",rungs:"200-300",lib:"view-04-integration-ai",
     opener:"One row per system outside the Purview boundary, with gov-cloud support marked per row, because that is where designs fail. Then trace one AI data path end to end.",
     obj:"Third-party inventory (S3, Snowflake, Salesforce, on-prem shares, OneTrust), APIs and identity, AI features, and the AI data path.",
     deliv:"Third-party inventory has every known external system; AI data path drawn.",
     mods:[
       {t:"Third-party and external systems inventory",rl:"integration · 200",
        action:"Fill mechanism, data exchanged, auth, and gov-cloud support per system.",
        lookLike:"<b>Context diagram</b><img class=\"diagram\" src=\"assets/diagrams/04-integration-ai-1.png\" alt=\"Integration context diagram\">",
        whyMatters:"S3 scanning is not supported in the Azure Government Data Map [S4]. OneTrust gov-cloud support is UNVERIFIED: no Microsoft source states it."},
       {t:"Connector auth: Role ARN + external ID (S3), key pair (Snowflake), OAuth connected app (Salesforce)",rl:"integration · 200",
        action:"Write the auth mechanism and one failure mode for each connector [S9], [S10], [S11].",
        whyMatters:"Snowflake is retiring basic auth in 2026; store the RSA private key with the Azure CLI, not the portal (the portal corrupts multi-line PEM) [S10]."},
       {t:"AI elements: DSPM for AI, interaction logging, collection policy, retention, eDiscovery, agent protections",rl:"AI · 200",
        action:"For each AI feature, record what it reads, what it emits, and the control.",
        whyMatters:"Without a collection policy, Fabric Copilot, Security Copilot, and non-Copilot AI apps emit audit events only, not prompt text [S15]."},
       {t:"The AI data path and the query-time gate",rl:"AI · 300",
        action:"Trace prompt -> AI app -> grounding data -> labels/DLP/access checks -> response, then audit -> DSPM for AI and retention/eDiscovery.",
        lookLike:"<b>AI data path</b><img class=\"diagram\" src=\"assets/diagrams/04-integration-ai-2.png\" alt=\"AI data path\">",
        whyMatters:"What stops Copilot leaking a file the user cannot open is the permission, label, and DLP check between grounding and response. Clean permissions and labels come first; DSPM for AI discovers and assesses, it does not fix bad ACLs."}
     ],
     vids:[{s:15},{s:17},{s:28},{s:30}]},
    {n:6,title:"Hands-on lab",time:"60 min",rungs:"200",lib:"block-06-hands-on-lab",
     opener:"The one answer research alone cannot give: what the product does when you run it.",
     obj:"Configure or trace one end-to-end flow in a tenant, trial, or docs walkthrough. Candidate: label -> DLP -> audit trail on SharePoint content.",
     deliv:"One flow configured or traced with evidence saved.",
     mods:[
       {t:"Pick the flow and write the expected outcome first",rl:"lab · 200",
        action:"Write what the views predict before touching the tenant.",
        lookLike:"<b>Lab card</b><pre>Flow        : sensitivity label -> DLP policy -> unified audit log (SharePoint Online)\nPrediction  : labeled file shared externally -> DLP action -> activity event -> audit record\nEvidence    : policy config, activity explorer entry, audit search result (screenshots)\nDiff log    : every place the docs and the product disagree</pre>",
        whyMatters:"A prediction written in advance is what turns a click-through into evidence."},
       {t:"Capture evidence and note doc/product disagreements",rl:"lab · 200",
        action:"Save screenshots or config snippets. No tenant secrets or real customer data in notes or models.",
        whyMatters:"Disagreements between docs and product are the most valuable output of the day."}
     ],
     vids:[{s:14},{s:16}]},
    {n:7,title:"Failure modes and security",time:"45 min",rungs:"300",lib:"block-07-failure-modes-and-security",
     opener:"What breaks, what leaks, and what the controls actually stop. Cover all four views.",
     obj:"Top failure modes per view with the tell and the control that should catch it, including AI oversharing and connector failure.",
     deliv:"Failure-mode table covers all four views.",
     mods:[
       {t:"Failure-mode table per view",rl:"security · 300",
        action:"Work through the Failure modes section of this console and mark each as understood.",
        whyMatters:"The most likely first failure in a gov-cloud design is S3 scanning being unavailable in the Azure Government Data Map [S4]."},
       {t:"AI oversharing: permissions, labels, and DSPM for AI",rl:"AI · 300",
        action:"Explain why a weekly DSPM for AI oversharing assessment (top 100 SharePoint sites by usage) is detection, not remediation [S15].",
        whyMatters:"Copilot honors existing permissions. An unlabeled file with a permissive ACL is readable, so it is groundable."}
     ],
     vids:[{s:19},{s:33},{s:34}]},
    {n:8,title:"Design review and teach-back",time:"30 min",rungs:"300",lib:"block-08-design-review",
     opener:"Defend the three views and the integration map to a skeptical architect.",
     obj:"Ten-minute teach-back, the quiz bank without notes, three design decisions you would defend and one you would not.",
     deliv:"Teach-back delivered; quiz answered without notes.",
     mods:[
       {t:"Ten-minute teach-back",rl:"review · 300",
        action:"Present conceptual, logical, physical, and integration views out loud or recorded.",
        whyMatters:"If you cannot say what changes between altitudes, you cannot review someone else's design."},
       {t:"Three decisions you would defend, one you would not",rl:"review · 300",
        action:"Use the Prompts section's design-review challenger to rehearse.",
        lookLike:"<b>Decision register (example)</b><pre>DEFEND : Purview account in a dedicated data management landing zone [S24]\nDEFEND : Private Link isolation for the Purview account [S23]\nDEFEND : Labels + permissions cleanup before enabling Copilot [S15]\nWOULD NOT: Relying on OneTrust -> DSPM in GCC High (UNVERIFIED, preview) [S26][S27]</pre>",
        whyMatters:"Naming the decision you would not defend shows you know where the evidence runs out."}
     ],
     vids:[{s:24},{s:25}]}
  ],

  ladder:[
    {key:"governance",img:"governance",name:"Data governance (Data Map & Catalog)",
     r:[
      {n:100,t:"Data Map registers sources, scans, extracts metadata, classifies, and builds lineage; Unified Catalog curates it. Sources contain assets."},
      {n:200,t:"Pick the integration runtime per source (Azure, AWS, Managed VNet, SHIR) and connector auth (Role ARN, key pair, connected app). Connectors return metadata only."},
      {n:300,t:"Landing zone placement, Private Link, RBAC by collection, Azure Government exclusions (S3, RDS, commercial Power BI, preview sources, Synapse lineage), catalog cleanup."}
     ]},
    {key:"security",img:"security",name:"Data security (labels, DLP, IRM)",
     r:[
      {n:100,t:"Sensitive information types, sensitivity labels and label policies, DLP policies, Insider Risk alerts and cases."},
      {n:200,t:"Auto-labeling, the on-prem information protection scanner, Endpoint DLP with device onboarding, AI interactions as IRM signals, per-user licensing."},
      {n:300,t:"Government cloud parity gaps (named-entity SITs), browser extension for third-party AI sites, labels and permissions as the real defense against AI oversharing."}
     ]},
    {key:"compliance",img:"compliance",name:"Data compliance (Audit, eDiscovery)",
     r:[
      {n:100,t:"Unified audit log as the system of record; eDiscovery cases, holds, review, export; Compliance Manager score."},
      {n:200,t:"CopilotInteraction records, ItemClass searches for Copilot Studio, retention location 'Microsoft Copilot Experiences'."},
      {n:300,t:"Evidentiary completeness: thread IDs vs transcripts, collection policies, FedRAMP instruments (P-ATO vs equivalency) in an ATO package."}
     ]},
    {key:"ai",img:"ai",name:"AI protections (DSPM for AI)",
     r:[
      {n:100,t:"AI interaction = prompt + response; DSPM for AI is the front door that discovers AI use and recommends policies."},
      {n:200,t:"The query-time gate in the AI data path, collection policies, agent inheritance of parent-app protections, Entra Agent ID."},
      {n:300,t:"Custom AI apps via Graph Purview APIs and SDK, unsupported agent platforms (ChatGPT Enterprise, Claude Enterprise), GCC High/DoD DSPM for AI limits."}
     ]},
    {key:"ea",img:"hero",name:"Architecture altitudes (EA)",
     r:[
      {n:100,t:"Say what belongs at each altitude: conceptual (what/why), logical (parts/talk), physical (deployed/where)."},
      {n:200,t:"Place each view in TOGAF ADM phases and DoDAF viewpoints (OV-1, CV-2, OV-2, OV-5b, SV-1/2/4/6, DIV-1/2/3, StdV-1)."},
      {n:300,t:"Name a decision only visible at the physical altitude and defend a full design in review."}
     ]}
  ],

  miniModules:[
    {name:"Microsoft Defender for Endpoint",t:"Shares the device sensor that Endpoint DLP and third-party AI site visibility rely on. Unonboarded devices are invisible [S19]."},
    {name:"Microsoft Entra ID and Entra Agent ID",t:"Identity pairing (GCC High and DoD pair with Entra ID in Azure Government), RBAC, Conditional Access, and the agent directory [S8], [S22], [S23]."},
    {name:"Microsoft Sentinel",t:"SIEM next door; hosts the OneTrust partner solution that feeds DSPM (preview, gov support unverified) [S26], [S27]."},
    {name:"SharePoint, OneDrive, Teams",t:"Native locations for labels, DLP, eDiscovery, and audit, and the grounding data for Copilot [S5], [S15]."},
    {name:"Azure Key Vault",t:"Holds the scan credentials the integration runtimes use [S10], [S11]."}
  ],

  prompts:[
    {cat:"Briefing at an altitude",model:"any LLM",desc:"Get oriented on one Purview area at a chosen altitude and rung.",
     items:["Conceptual briefing","Logical component walk","Physical deployment briefing","Gov-cloud diff briefing"],
     flagship:"You are briefing an enterprise architect on Microsoft Purview.\nTopic: <e.g. Data Map scanning of Amazon S3>\nAltitude: <conceptual | logical | physical>\nRung: <100 | 200 | 300>\n\nRules:\n- Use only Microsoft Learn, Microsoft service descriptions, Microsoft reference architectures, and Microsoft Mechanics. Cite the page for every claim.\n- Stay at the requested altitude. Conceptual = capabilities and actors, no product names. Logical = components, entities, flows, no SKUs or regions. Physical = named services, runtimes, clouds, licensing.\n- End with: what changes one altitude down, and one thing the sources are silent on.\n- If you are not sure, say UNVERIFIED instead of guessing."},
    {cat:"Socratic examiner (design review)",model:"any LLM",desc:"Be questioned like block 8: a skeptical architect challenges your views.",
     items:["Physical-view challenge","AI data path challenge","Gov-cloud challenge"],
     flagship:"Act as a skeptical principal architect reviewing my Microsoft Purview design.\nAsk me ONE question at a time, starting at the physical view. After each answer:\n1. Grade it (solid / shaky / wrong) with a one-line reason.\n2. Name the Microsoft doc that settles it.\n3. Ask a harder follow-up.\nProbe especially: where the Purview account lives, which integration runtime scans each source, what the connectors return, what stops Copilot oversharing, and what differs in GCC High / DoD / Azure Government.\nStop after 8 questions and give me the assumption most likely to fall first."},
    {cat:"Failure-mode spotter",model:"any LLM",desc:"Feed a (synthetic) design; get the failure modes with tell and mitigation.",
     items:["Connector failures","Licensing traps","AI oversharing","Gov-cloud gaps"],
     flagship:"Here is a synthetic Microsoft Purview deployment design:\n<paste design, no real tenant names, secrets, or customer data>\n\nList every failure mode you can find as a table: failure | view (conceptual/logical/physical/integration-AI) | first visible tell | root cause | mitigation | Microsoft source.\nInclude at least: connector auth and scope, integration runtime placement, scanner host prerequisites, per-user licensing, collection policies for AI prompt capture, and government cloud exclusions.\nMark anything you cannot source to Microsoft documentation as UNVERIFIED."},
    {cat:"Design redline",model:"any LLM",desc:"Redline an architecture proposal paragraph by paragraph.",
     items:["Landing zone placement","Network isolation","Label-first Copilot rollout"],
     flagship:"Redline this Microsoft Purview architecture section as a reviewer would.\n<paste section>\n\nFor each sentence: KEEP, FIX, or CUT. For FIX, give the corrected sentence and the Microsoft source. Flag overclaims such as 'Purview intercepts retrieval' (sources describe agents inheriting their parent app's protections) or 'the audit log always stores prompt text' (a collection policy is needed for some apps; Copilot Studio audit stores a thread ID)."},
    {cat:"Translation (architect to sponsor)",model:"any LLM",desc:"Turn a technical finding into a one-paragraph sponsor decision.",
     items:["Gov-cloud gap to decision","Licensing trap to budget line","AI oversharing to rollout gate"],
     flagship:"Translate this Microsoft Purview finding for a non-technical sponsor:\n<paste finding, e.g. 'Amazon S3 scanning is not supported in the Azure Government Data Map'>\n\nWrite: (1) what it means in one sentence, (2) the decision they must make with two options and the trade-off, (3) what it costs to be wrong. No jargon; keep the source link."}
  ],

  checklist:[
    {title:"Treating cataloging as enforcement",view:"Conceptual",src:"S1",
     good:"Bind classification to sensitivity labels with protection and to DLP rules that act. Cataloging is visibility; labels, permissions, and DLP are enforcement.",
     bad:"Tell: sensitive data is discovered and cataloged but still open to users, guests, and AI. Root cause: assuming a scan or catalog entry changes ACLs."},
    {title:"No owner per solution family",view:"Conceptual",src:"S1",
     good:"Assign owners by family: compliance admin (policies), security analyst (DLP, IRM, DSPM triage), data source admin / steward (sources, runtimes), investigator (eDiscovery, audit).",
     bad:"Tell: unreviewed DLP and IRM queues, stale catalog assets, unacted improvement actions."},
    {title:"Copilot prompt text missing from investigations",view:"Logical",src:"S15",
     good:"Turn on a collection policy for Copilot in Fabric, Security Copilot, and non-Copilot AI apps; bring custom apps in via Graph Purview APIs / SDK [S20].",
     bad:"Tell: audit shows interaction events but no prompt or response text."},
    {title:"Searching raw Audit for Copilot Studio transcripts",view:"Logical",src:"S21",
     good:"Use DSPM for AI activity explorer to retrieve chat text, or an eDiscovery search on ItemClass IPM.SkypeTeams.Message.Copilot.Studio.* [S18].",
     bad:"Tell: audit search returns a transcript thread ID only."},
    {title:"Expecting enforcement on Amazon S3 from the Data Map",view:"Logical",src:"S9",
     good:"Treat the multicloud connector as read-only discovery and classification; enforce access and encryption natively in AWS.",
     bad:"Tell: expecting DLP or encryption at the bucket. The connector returns metadata and classification only."},
    {title:"Designing S3 or RDS scanning into Azure Government",view:"Physical",src:"S4",
     good:"Scan S3 from a commercial Purview account, or record the accepted gap as a block 8 design decision.",
     bad:"Tell: S3, RDS, and commercial Power BI are excluded from the Data Map in Azure Government (Power BI GCC is supported)."},
    {title:"Assuming DSPM for AI parity in GCC High and DoD",view:"Physical",src:"S7",
     good:"Plan around the limits: no browse-to-URL policy creation; only supported AI sites.",
     bad:"Tell: the policy you designed in commercial cannot be created in the gov tenant."},
    {title:"Scanner host built on the wrong platform",view:"Physical",src:"S13",
     good:"64-bit Windows Server 2016-2025 with desktop experience, 4 cores / 8 GB, SQL Server 2016+ with case-insensitive collation, AD account synced to Entra ID, HTTPS 443 to the listed endpoints, full client installed.",
     bad:"Tell: install or service start fails (Server Core/Nano), DB init fails (case-sensitive collation), or access denied on shares (unsynced account)."},
    {title:"Licensing only the scanner service account",view:"Physical",src:"S14",
     good:"License every user who adds or consumes files in scanned on-prem locations; license Copilot users for DSPM for AI Copilot insights [S19].",
     bad:"Tell: everything configures fine, then fails a license audit."},
    {title:"KMS-encrypted buckets fail to scan",view:"Integration",src:"S9",
     good:"Add kms:Decrypt to the IAM role Purview assumes.",
     bad:"Tell: access denied on encrypted buckets only."},
    {title:"SCP or bucket policy blocks the scanner",view:"Integration",src:"S9",
     good:"Allow AssumeRole, GetBucketLocation, GetObject, ListBucket, GetBucketPublicAccessBlock, and region us-east-1.",
     bad:"Tell: scan fails even though the role trust looks right."},
    {title:"Role ARN / external ID mismatch",view:"Integration",src:"S9",
     good:"Copy the Microsoft account ID and the external ID from the Purview credential into the IAM role trust relationship exactly.",
     bad:"Tell: the AWS IR cannot assume the role."},
    {title:"Snowflake basic auth and corrupted private keys",view:"Integration",src:"S10",
     good:"Move to key pair (RSA, PKCS#8) and store the private key with the Azure CLI, not the portal.",
     bad:"Tell: auth fails after basic auth retirement, or key-pair auth fails because the portal broke the multi-line PEM."},
    {title:"Expecting classification on Salesforce",view:"Integration",src:"S11",
     good:"Plan for technical metadata only (org, objects, fields) from Salesforce; classify elsewhere if needed [S2].",
     bad:"Tell: Salesforce assets appear with no classifications, unlike S3 or Snowflake."},
    {title:"Deleted source objects linger in the catalog",view:"Integration",src:"S10",
     good:"Schedule periodic catalog cleanup for Snowflake and Salesforce sources [S11].",
     bad:"Tell: orphan assets for tables or objects that no longer exist."},
    {title:"Committing to OneTrust -> DSPM in a gov tenant",view:"Integration",src:"S27",
     good:"Treat as UNVERIFIED until Microsoft documents gov support; partner solutions for non-Microsoft sources are in preview [S26].",
     bad:"Tell: the design relies on a Sentinel partner feed with no Microsoft gov-cloud statement."},
    {title:"AI oversharing through permissive SharePoint access",view:"Integration / AI",src:"S15",
     good:"Clean permissions and labels first; use DSPM for AI's weekly oversharing assessment (top 100 SharePoint sites by usage) to find the worst sites.",
     bad:"Tell: Copilot answers with content the user technically could open but should not see. DSPM discovers; it does not fix ACLs."},
    {title:"No visibility into third-party AI sites",view:"Integration / AI",src:"S19",
     good:"Onboard devices and deploy the Purview browser extension so DLP and IRM see pastes into AI sites.",
     bad:"Tell: sensitive data pasted into consumer AI tools produces no events."},
    {title:"Assuming every agent platform is covered",view:"Integration / AI",src:"S17",
     good:"Check the agent support matrix; Copilot Studio and Foundry agents get classification, labels, DLP, IRM.",
     bad:"Tell: ChatGPT Enterprise and Claude Enterprise agents are not supported by Purview's agent protections."},
    {title:"Calling the GCC FedRAMP difference a doc error",view:"Physical",src:"S35",
     good:"Name the instruments: Moderate P-ATO (DHHS) plus FedRAMP High equivalency from completed High audits; GCC High holds agency ATOs at both levels.",
     bad:"Tell: an ATO reviewer catches the 'conflict' and the design loses credibility."}
  ],

  cheat:[
    {h:"Scope and capability",r:[
      "When you need to know <b>what data do we have and where</b>, reach for <b>Data Map + Unified Catalog</b>, not DLP. DLP acts on data you've already classified [S1], [S2].",
      "When the ask is <b>stop this AI app from oversharing</b>, the answer is <b>clean permissions + labels first, DSPM for AI second</b>. DSPM discovers and assesses; it doesn't fix bad ACLs [S15].",
      "When a request spans families (govern AND protect AND prove compliance), name the split: one portal, four separable products with different licenses [S1], [S25]."]},
    {h:"Scanning and connectors",r:[
      "Scanning <b>Amazon S3 or RDS</b>: Purview reaches them only via an <b>AWS IR that Microsoft operates</b> in its own AWS account [S3], [S9].",
      "Scanning <b>on-prem file shares, SQL, or SharePoint Server</b>: you need a <b>self-hosted IR or the information protection scanner</b> on customer Windows Server, the only place customer infrastructure appears [S12], [S13].",
      "Default assumption for connectors: <b>metadata and classification only, never content</b> [S9], [S2].",
      "Snowflake auth breaks: check for <b>basic auth</b> (retiring in 2026); move to <b>key pair (RSA, PKCS#8)</b> stored via Azure CLI [S10].",
      "Salesforce returns <b>technical metadata only, no classification</b> [S2], [S11]."]},
    {h:"Gov-cloud and licensing",r:[
      "<b>S3 or RDS + Azure Government</b> is a hard incompatibility; scan from a commercial account or accept the gap [S4].",
      "<b>GCC Moderate vs High: both are right.</b> Moderate P-ATO, High equivalency [S35].",
      "Gov-cloud tables list <b>differences from the commercial baseline</b>; a blank cell usually means parity [S7].",
      "DSPM for AI in GCC High / DoD: <b>no browse-to-URL policy</b>, supported AI sites only [S7].",
      "<b>Every user who touches a scanned on-prem location needs a license</b>, not just the scanner account [S14]."]},
    {h:"AI data path",r:[
      "What stops Copilot leaking a file the user can't open: the <b>query-time permission/label/DLP check between grounding and response</b> [S15], [S16].",
      "Copilot Studio: <b>Audit stores only a thread ID</b>; DSPM for AI activity explorer retrieves the text [S21].",
      "Prompts 'missing'? Check the <b>collection policy</b> [S15].",
      "Agent support matrix has a <b>hard exclusion list</b>: ChatGPT Enterprise and Claude Enterprise agents [S17]."]},
    {h:"Architecture placement",r:[
      "The Purview account is <b>an Azure resource</b>; one dedicated data management landing zone per Entra tenant [S24].",
      "Four clouds: <b>M365 tenant</b> (portal, solutions, audit) · <b>Azure subscription</b> (account, Key Vault, Managed VNet IR) · <b>AWS</b> (Microsoft-hosted IR) · <b>customer estate</b> (SHIR, scanner, shares, devices).",
      "Network isolation is <b>Azure Private Link</b>, not a firewall allowlist alone [S23]."]}
  ],
  falsifier:"'Purview intercepts the retrieval' is imprecise. Sources describe agents as inheriting their parent app's protections (labels, DLP), not Purview sitting inline as a proxy. Narrate it as inheritance, not interception.",

  quizSections:{1:"Conceptual / logical",2:"Physical / deployment",3:"Integration and third-party",4:"AI elements",5:"Framework / synthesis"},
  quiz:[
    {week:1,rung:200,pillar:"Logical",type:"open",question:"Which logical component realizes capability C1 (Know your data), and what physical service realizes it?",answer:"The classification engine and the Data Map. The Data Map is realized as a Purview account in a customer Azure subscription (ideally its own data management landing zone), scanning through integration runtimes.",explanation:"Logical view component table [S1], [S2]; physical mapping [S24], [S3]."},
    {week:1,rung:200,pillar:"Integration",type:"open",question:"Name three external systems and the mechanism each uses.",answer:"Amazon S3: Data Map multicloud connector via the Microsoft-hosted AWS IR with an IAM role ARN + external ID. Snowflake: Data Map connector via Azure IR, Managed VNet IR, or SHIR with key-pair auth. Salesforce: Data Map connector over REST API v41.0 with an OAuth connected app. (Also: on-prem shares via the scanner over SMB; OneTrust via Sentinel into DSPM.)",explanation:"Integration inventory [S9], [S10], [S11], [S12], [S27]."},
    {week:1,rung:200,pillar:"AI",type:"mc",question:"Which control stops an AI feature from grounding on data the user cannot open?",options:["The Data Map scan schedule","Query-time permission, label, and DLP checks between grounding and response","The Compliance Manager score","A one-time check when the semantic index is built"],answer:"Query-time permission, label, and DLP checks between grounding and response",explanation:"AI data path: every grounding result is re-checked at query time [S15], [S16]."},
    {week:1,rung:100,pillar:"Conceptual",type:"open",question:"Name the five capabilities Microsoft states as Purview's outcomes, and one actor for each.",answer:"C1 Know your data (data steward), C2 Protect sensitive data (compliance admin), C3 Govern data (data source admin), C4 Manage risk and regulation (investigator), C5 Secure AI use (security and compliance analyst).",explanation:"Conceptual view capability table [S1]."},
    {week:1,rung:200,pillar:"Logical",type:"mc",question:"Which components serve C3 (Govern data) rather than C1 (Know your data)?",options:["Data Map and Unified Catalog","DLP and Insider Risk","Audit and eDiscovery","DSPM for AI"],answer:"Data Map and Unified Catalog",explanation:"C1 is served by the classification engine and Data Map; C3 by Data Map and the Unified Catalog that curates its assets [S2]."},
    {week:1,rung:300,pillar:"Logical",type:"open",question:"In the ERD, what does SENSITIVITY_LABEL's many-to-many relationship to CONTENT_ITEM tell you about how labels are modeled?",answer:"Labels are reusable definitions (published by a label policy) applied across many items, and an item's label can change over its life. The ERD is a modeling simplification: at any moment an item typically carries one sensitivity label (general Microsoft behavior, not in the ledger; verify).",explanation:"Logical data model in the Logical view."},
    {week:1,rung:200,pillar:"Logical",type:"open",question:"Which entity emits AUDIT_RECORD, what's the cardinality, and why does that matter operationally?",answer:"AI_INTERACTION emits exactly one AUDIT_RECORD (1:1). Every interaction is therefore accounted for in the audit log, which feeds DSPM for AI, IRM, and eDiscovery. But the record may not contain the prompt text (collection policy, Copilot Studio thread IDs).",explanation:"ERD and flows F4-F6 [S16], [S21]."},
    {week:1,rung:200,pillar:"Logical",type:"open",question:"Trace the logical flow from a scanned data source to an investigation case. Name every stage.",answer:"Data source -> scan and extract metadata -> classify -> (Data Map and catalog) and label and protect -> DLP policy decision -> activity events and alerts -> unified audit log -> DSPM / IRM / eDiscovery -> case.",explanation:"Logical flows diagram."},
    {week:2,rung:200,pillar:"Physical",type:"open",question:"Name the four 'clouds' in the physical topology and one thing that runs in each.",answer:"Microsoft 365 tenant: Purview portal, compliance solutions, unified audit log. Azure subscription: Purview account (Data Map + Unified Catalog), Key Vault, Managed VNet IR. AWS: the AWS IR hosted by Purview for S3. Customer estate: SHIR, information protection scanner + SQL Server, file shares, onboarded devices.",explanation:"Physical deployment topology."},
    {week:2,rung:200,pillar:"Physical",type:"mc",question:"Where does the Purview account itself physically live?",options:["In the Microsoft 365 tenant","In an Azure subscription, ideally a dedicated data management landing zone per Entra tenant","On a customer Windows Server","In the customer's AWS account"],answer:"In an Azure subscription, ideally a dedicated data management landing zone per Entra tenant",explanation:"CAF unified data platform reference architecture [S24]."},
    {week:2,rung:200,pillar:"Physical",type:"open",question:"What OS, sizing, and database does the information protection scanner require?",answer:"64-bit Windows Server 2016, 2019, 2022, or 2025 (no Server Core or Nano); 4 cores, 8 GB RAM, about 10 GB free for temp files; SQL Server 2016 or later with case-insensitive collation.",explanation:"Scanner prerequisites [S13]."},
    {week:2,rung:300,pillar:"Physical",type:"mc",question:"Which sources are explicitly excluded from the Data Map in Azure Government?",options:["Snowflake and Salesforce","Amazon S3, Amazon RDS, and commercial Power BI (Power BI GCC is supported)","SharePoint Online and OneDrive","Azure SQL and Azure Blob"],answer:"Amazon S3, Amazon RDS, and commercial Power BI (Power BI GCC is supported)",explanation:"Azure Government feature availability; preview sources and Synapse lineage are also unsupported [S4]."},
    {week:2,rung:300,pillar:"Physical",type:"mc",question:"True or false: Microsoft documents conflicting FedRAMP levels for GCC, so one of the pages is wrong.",options:["True: one page is a documentation error","False: both are accurate; GCC has a Moderate P-ATO and advertises FedRAMP High equivalency after completed High audits"],answer:"False: both are accurate; GCC has a Moderate P-ATO and advertises FedRAMP High equivalency after completed High audits",explanation:"Resolved by the Microsoft Public Sector Blog [S35]; GCC High holds agency ATOs at both Moderate and High."},
    {week:2,rung:200,pillar:"Physical",type:"open",question:"What licensing trap catches people scanning on-prem file shares with DLP?",answer:"Every user who adds or consumes files in a scanned location needs a license, not just the scanner service account.",explanation:"DLP for on-premises repositories [S14]."},
    {week:2,rung:200,pillar:"Physical",type:"mc",question:"Which integration runtime scans Amazon S3, and who operates it?",options:["A self-hosted IR on a customer EC2 instance","The AWS IR, hosted by Microsoft (Purview) in its own AWS account","The Managed VNet IR in Azure","The information protection scanner"],answer:"The AWS IR, hosted by Microsoft (Purview) in its own AWS account",explanation:"IR decision matrix and S3 connector docs [S3], [S9]."},
    {week:3,rung:200,pillar:"Integration",type:"open",question:"What auth does the Amazon S3 connector use, and what does it explicitly NOT return to Purview?",answer:"An IAM role (Role ARN) trusting the Microsoft account ID with an external ID, not a stored access key. It never returns file content; only metadata and classification.",explanation:"S3 connector [S9]."},
    {week:3,rung:200,pillar:"Integration",type:"open",question:"What replaces Snowflake basic auth, and what's the gotcha when storing the credential?",answer:"Key pair authentication (RSA, PKCS#8). Store the private key with the Azure CLI rather than pasting it into the portal, which corrupts multi-line PEM.",explanation:"Snowflake connector; Snowflake is retiring basic auth in 2026 [S10]."},
    {week:3,rung:200,pillar:"Integration",type:"mc",question:"What's the key difference between the Snowflake and Salesforce connectors?",options:["Snowflake returns content; Salesforce returns metadata","Snowflake returns technical metadata, classification, and static lineage; Salesforce returns technical metadata only, with no classification","Both classify, only Salesforce does lineage","Neither is supported in commercial clouds"],answer:"Snowflake returns technical metadata, classification, and static lineage; Salesforce returns technical metadata only, with no classification",explanation:"Data source capability matrix [S2], [S10], [S11]."},
    {week:3,rung:300,pillar:"Integration",type:"open",question:"How does OneTrust data reach Purview DSPM, and what's the status?",answer:"Through Microsoft Sentinel: a partner solution in the Content Hub feeds OneTrust findings into DSPM. It needs an active OneTrust account and a Sentinel workspace; partner solutions for non-Microsoft sources are in preview.",explanation:"[S27], [S26]."},
    {week:3,rung:300,pillar:"Integration",type:"open",question:"Which integration is marked UNVERIFIED for gov-cloud support, and why?",answer:"OneTrust. No Microsoft source states gov-cloud support; the only sources are a partner-authored Marketplace listing and a vendor page.",explanation:"[S27], [S31]; the source rule forbids treating vendor claims as Microsoft-grounded."},
    {week:3,rung:200,pillar:"Integration",type:"open",question:"List two AWS-side failure modes for S3 scanning and their fixes.",answer:"KMS-encrypted buckets: add kms:Decrypt to the IAM role. SCP or bucket policy blocks: allow AssumeRole, GetBucketLocation, GetObject, ListBucket, GetBucketPublicAccessBlock, and us-east-1. (Also: Role ARN / external ID mismatch.)",explanation:"[S9]."},
    {week:4,rung:200,pillar:"AI",type:"open",question:"What does DSPM for AI do that the index Copilot grounds on doesn't?",answer:"It discovers AI use across Copilots, agents, and third-party AI apps, recommends and applies one-click policies (DLP, IRM, retention, eDiscovery), and runs a weekly oversharing risk assessment of the top 100 SharePoint sites by usage.",explanation:"[S15]."},
    {week:4,rung:300,pillar:"AI",type:"mc",question:"Where does the Copilot Studio chat text live for review?",options:["Inline in the unified audit log record","Audit stores only a transcript thread ID; DSPM for AI activity explorer retrieves the text (eDiscovery can search it by ItemClass)","Only in the Copilot Studio maker portal","Nowhere; it is never retained"],answer:"Audit stores only a transcript thread ID; DSPM for AI activity explorer retrieves the text (eDiscovery can search it by ItemClass)",explanation:"[S21], [S18]."},
    {week:4,rung:200,pillar:"AI",type:"open",question:"Difference between an audit event and a captured prompt/response for Fabric or Security Copilot? What turns on the latter?",answer:"Without a collection policy, you get the audit event (who, when, which app) but no prompt or response text. A collection policy captures the full text.",explanation:"[S15]."},
    {week:4,rung:200,pillar:"AI",type:"mc",question:"Which agent platforms are explicitly NOT supported by Purview's agent protections?",options:["Copilot Studio and Microsoft Foundry","ChatGPT Enterprise and Claude Enterprise agents","Microsoft 365 Copilot and Security Copilot","All agents are supported"],answer:"ChatGPT Enterprise and Claude Enterprise agents",explanation:"Agent support matrix [S17]."},
    {week:4,rung:200,pillar:"AI",type:"open",question:"In the AI data path, what happens between 'grounding data' and 'response'?",answer:"A query-time gate: labels, DLP, and access checks re-evaluate every grounding result against the caller's identity. Only allowed content reaches the response. The interaction is then written to the unified audit log as CopilotInteraction.",explanation:"AI data path diagram [S15], [S16]."},
    {week:4,rung:300,pillar:"AI",type:"open",question:"How does eDiscovery search AI interactions? Give the ItemClass pattern.",answer:"Search AI interactions in an eDiscovery case by ItemClass, for example IPM.SkypeTeams.Message.Copilot.Studio.* for Copilot Studio agents. Retention uses the Data Lifecycle Management location 'Microsoft Copilot Experiences'.",explanation:"[S18]."},
    {week:5,rung:300,pillar:"EA",type:"open",question:"Place the Data Map in a TOGAF ADM phase and a DoDAF viewpoint. Justify both.",answer:"Logically, TOGAF Phase C (data architecture) and DoDAF SV-1 (logical) / DIV-2: it is a component with responsibilities (register, scan, classify, lineage) and owns asset entities. Physically, Phase D and SV-1/SV-2 plus DIV-3: a Purview account in an Azure subscription reached through integration runtimes.",explanation:"View framework lenses in the Logical and Physical views."},
    {week:5,rung:300,pillar:"EA",type:"open",question:"Name one design decision that only makes sense once you've seen the physical view.",answer:"Examples: scanning S3 from a commercial Purview account because the Azure Government Data Map excludes S3 [S4]; placing a SHIR in the customer estate for on-prem SQL; licensing every user of scanned shares [S14]; isolating the account with Private Link [S23].",explanation:"Invisible at the logical altitude, where there are no clouds, runtimes, or SKUs."},
    {week:5,rung:300,pillar:"EA",type:"open",question:"A customer also has an on-prem SQL Server data warehouse. Which physical component do you add, and where does it run?",answer:"A self-hosted integration runtime (JDK 11) on a customer VM or Kubernetes in the customer estate, registered to the Purview account, with scan credentials in Key Vault.",explanation:"IR decision matrix [S3]."}
  ],

  views:{
    conceptual:{lib:"view-01-conceptual",img:["01-conceptual-1.png"],
      rule:"Conceptual means what and why, not how. Capabilities and actors only.",
      tables:[
        {h:"Capabilities",cols:["#","Capability","Outcome","Actors","Source"],rows:[
          ["C1","Know your data","Visibility into data across the organization","Data owner, steward, compliance admin","[S1]"],
          ["C2","Protect sensitive data","Safeguard sensitive data across its lifecycle, wherever it lives","Compliance admin, end user","[S1]"],
          ["C3","Govern data","Catalog, classify, and curate the data estate","Data steward, data source admin","[S1], [S2]"],
          ["C4","Manage risk and regulation","Manage critical data risks and regulatory requirements","Compliance admin, investigator, auditor","[S1]"],
          ["C5","Secure AI use","Prevent oversharing and leakage in generative AI","Security and compliance analyst","[S1], [S15]"]]},
        {h:"Solution families",cols:["Family","Question it answers","Solutions"],rows:[
          ["Data security","Is sensitive data protected and not leaking?","Information Protection, DLP, Insider Risk Management, DSPM"],
          ["Data governance","What data do we have, where, and who owns it?","Data Map, Unified Catalog"],
          ["Data compliance","Can we prove and enforce obligations?","Audit, eDiscovery, Compliance Manager (+ lifecycle, records, communication compliance)"],
          ["AI protections","Is AI use safe and auditable?","DSPM for AI, AI interaction auditing"]]}]},
    logical:{lib:"view-02-logical",img:["02-logical-3.png","02-logical-1.png","02-logical-2.png"],
      rule:"Logical means which parts and how they talk. No regions, SKUs, or hostnames.",
      tables:[
        {h:"Logical components",cols:["Component","Responsibility","Realizes","Outputs","Source"],rows:[
          ["Classification engine","Detect sensitive info types with classifiers","C1","Classifications","[S1]"],
          ["Information Protection","Define and apply sensitivity labels and protection","C2","Labeled or encrypted content","[S1]"],
          ["Data Loss Prevention","Detect and act on sensitive data in use and in motion","C2","Alerts, blocks, activity events","[S1], [S14]"],
          ["Insider Risk Management","Detect risky user activity from signals","C4, C5","Alerts, cases","[S1], [S15]"],
          ["Data Map","Register sources, scan, extract metadata, classify, build lineage","C1, C3","Assets, classifications, lineage","[S2]"],
          ["Unified Catalog","Search and curate assets from the Data Map","C3","Curated catalog","[S1], [S9]"],
          ["Audit","Record user, admin, and AI activity in the unified audit log","C4, C5","Searchable audit records","[S1], [S16]"],
          ["eDiscovery","Search, hold, review, export content as evidence","C4","Cases, holds, exports","[S1], [S18]"],
          ["Compliance Manager","Assess posture against regulations","C4","Compliance score","[S1], [S25]"],
          ["DSPM / DSPM for AI","Discover AI use, recommend and apply policies, assess oversharing","C5","Reports, one-click policies, risk assessments","[S15], [S16]"]]},
        {h:"Logical flows",cols:["Flow","From","To","Payload","Trigger","Source"],rows:[
          ["F1 Scan","Data source","Data Map","Metadata and classifications only","Schedule or once","[S9]"],
          ["F2 On-prem label","Scanner","File share","Label and protection applied in place","Scan job","[S12]"],
          ["F3 DLP evaluation","Content activity","DLP engine","Content plus classifications","User action or scan","[S14]"],
          ["F4 AI audit","AI app","Unified audit log","Interaction metadata; prompt/response where captured","Each interaction","[S16]"],
          ["F5 AI insight","Audit log","DSPM for AI activity explorer","AI interaction events","Continuous","[S16]"],
          ["F6 Retain or discover","AI interactions","Retention and eDiscovery","Interaction items","Policy or case","[S18]"]]}]},
    physical:{lib:"view-03-physical",img:["03-physical-1.png"],
      rule:"Physical means what is deployed and where. Every row traces to a logical component.",
      tables:[
        {h:"Logical to physical",cols:["Logical component","Physical realization","Where it runs","Source"],rows:[
          ["All solutions (admin)","Microsoft Purview portal","Microsoft cloud (SaaS)","[S1]"],
          ["Data Map / Unified Catalog","Purview account; dedicated data management landing zone, one per Entra tenant","Customer Azure subscription","[S24]"],
          ["Data Map scanning","Azure IR, AWS IR (hosted by Purview), Managed VNet IR, SHIR, Kubernetes SHIR","Microsoft-managed, or customer VM / Kubernetes","[S3]"],
          ["Scan credentials","Purview credentials backed by Key Vault secrets","Customer Key Vault","[S10], [S11]"],
          ["On-prem Information Protection and DLP","Information protection scanner: Windows service, config in SQL Server, multi-node","Customer Windows Server","[S12], [S13], [S14]"],
          ["Endpoint DLP, third-party AI sites","Device onboarding (shared with Defender for Endpoint) + Purview browser extension","Managed Windows devices","[S19], [S22]"],
          ["Audit and AI interactions","Microsoft 365 unified audit log","Microsoft cloud","[S16]"],
          ["DSPM for AI","Portal solution; one-click policies; weekly top-100 SharePoint site assessment","Microsoft cloud","[S15]"]]},
        {h:"Standards and protocols (StdV-1)",cols:["Standard","Used for","Source"],rows:[
          ["SMB, NFS (preview) via UNC paths","On-prem file share scanning","[S12]"],
          ["HTTPS 443","Scanner to Microsoft cloud","[S13]"],
          ["AWS IAM role assumption with external ID","S3 scanning","[S9]"],
          ["Salesforce REST API v41.0, OAuth connected app","Salesforce metadata","[S11]"],
          ["RSA key pair (PKCS#8)","Snowflake authentication","[S10]"],
          ["Azure Private Link","Network isolation of the Purview account","[S23]"],
          ["Microsoft Graph Purview APIs","Custom AI app integration","[S20]"]]}]},
    integration:{lib:"view-04-integration-ai",img:["04-integration-ai-1.png","04-integration-ai-2.png"],
      rule:"One row per system outside the boundary, with gov-cloud support per row.",
      tables:[
        {h:"Third-party and external systems",cols:["System","Direction","Mechanism","Data exchanged","Auth","Gov-cloud support"],rows:[
          ["Amazon S3","in","Multicloud scanning connector; AWS IR hosted by Purview [S3], [S9]","Metadata and classification only","IAM role (Role ARN) with external ID","GAP:Not supported in Azure Government [S4]"],
          ["Snowflake","in","Connector via Azure IR, Managed VNet IR v2, or SHIR [S10]","Technical metadata, classification, static lineage","Key pair (basic auth retiring 2026)","Not on the Azure Gov exclusion list; verify in tenant"],
          ["Salesforce","in","Connector over REST API v41.0; Azure IR or SHIR [S11]","Technical metadata only; no classification","OAuth connected app + user password in Key Vault","Not on the Azure Gov exclusion list; verify in tenant"],
          ["On-prem file shares","bi","Information protection scanner over UNC (SMB; NFS preview) [S12]","Discovery, classification, labels and protection in place; on-prem DLP","AD service account synced to Entra ID","Scanner GA in GCC, GCC High, DoD [S8]"],
          ["OneTrust","in (to DSPM)","Partner solution via Microsoft Sentinel feeding DSPM (preview) [S27], [S26]","Sensitive-data findings from OneTrust-scanned sources","OneTrust account + Sentinel workspace","WARN:UNVERIFIED: no Microsoft source"]]},
        {h:"AI elements",cols:["AI feature","What it does","Emits","Controls","Source"],rows:[
          ["DSPM for AI","Secure data for AI apps and monitor AI use","Reports, one-click policies, risk assessments","DLP, IRM, retention, eDiscovery policies it creates","[S15]"],
          ["AI interaction logging","Prompts and responses land in the unified audit log","CopilotInteraction records","Audit retention","[S16], [S21]"],
          ["Collection policy","Captures prompts/responses for Fabric Copilot, Security Copilot, non-Copilot AI apps","Stored interactions","Without it: events only, no text","[S15]"],
          ["Retention for AI","Retain or delete via location 'Microsoft Copilot Experiences'","Retained items","Retention policy","[S18]"],
          ["eDiscovery for AI","Search by ItemClass, e.g. IPM.SkypeTeams.Message.Copilot.Studio.*","Case content","eDiscovery case","[S18]"],
          ["Agent protections","Agents inherit parent-app protections; Copilot Studio and Foundry covered","Audit, DSPM insights","ChatGPT Enterprise, Claude Enterprise agents not supported","[S17]"],
          ["Third-party AI sites","Visibility into sensitive data pasted into AI sites","DLP and IRM events","Device onboarding + browser extension","[S19]"]]}]},
    govcloud:{lib:"view-03-physical",img:[],
      rule:"Baseline = the commercial plan. Government guides list only differences from it [S7].",
      tables:[
        {h:"Cloud and tenant variants",cols:["Capability","Commercial","GCC","GCC High","DoD","Source"],rows:[
          ["Compliance posture claims","—","FedRAMP Moderate P-ATO + High equivalency [S35], CJIS, IRS 1075","DoD IL4/5, DFARS 7012, NIST 800-171, ITAR","same as GCC High","[S5], [S8], [S35]"],
          ["Identity pairing","Entra ID (commercial)","Entra ID (commercial)","Entra ID in Azure Government","Entra ID in Azure Government","[S8]"],
          ["Sensitivity labels, auto-labeling","Baseline","Available","Available","Available","[S5], [S6], [S7]"],
          ["Information protection scanner","Baseline","GA","GA","GA","[S8]"],
          ["Named-entity SITs","Baseline","WARN:In development","WARN:Engineering backlog","WARN:In development","[S5], [S6], [S7]"],
          ["DLP: files, email, endpoint, Teams, on-prem scanner","Baseline","Available","Available","confirm in [S7]","[S5], [S6]"],
          ["Insider Risk: data theft by departing users","Baseline","confirm","confirm","Available (analytics in preview)","[S7]"],
          ["Audit (Standard and Premium)","Baseline","confirm","confirm","Available","[S7]"],
          ["DSPM for AI: policies and analytics","Baseline","confirm","WARN:Available with limits","WARN:Available with limits","[S7]"]]},
        {h:"Data Map in Azure Government",cols:["Item","Status","Source"],rows:[
          ["Amazon S3, Amazon RDS","GAP:Not supported","[S4]"],
          ["Power BI (commercial)","GAP:Not supported (Power BI GCC is supported)","[S4]"],
          ["Preview sources","GAP:Not supported","[S4]"],
          ["Synapse pipeline lineage","GAP:Not supported","[S4]"],
          ["Everything else","Fully supported","[S4]"]]}]}
  },

  eaFrameworks:{
    togaf:[
      {phase:"Phase A: Architecture Vision",t:"Conceptual view",items:["Four pressures: fragmented data, low visibility, fast AI adoption, blurred roles [S1].","Five capabilities C1-C5 as the capability map.","Boundary statement and neighbor list (block 1)."]},
      {phase:"Phase B: Business Architecture",t:"Actors and families",items:["Actors: compliance admin, analyst, data source admin, investigator, end user, agent.","Four solution families with separate owners and licenses [S1], [S25]."]},
      {phase:"Phase C: Information Systems (Data + Application)",t:"Logical view",items:["Ten logical components with responsibilities and interfaces.","Logical data model: label, SIT, policy, source, asset, audit record, AI interaction, case.","Flows F1-F6; connectors return metadata only [S9]."]},
      {phase:"Phase D: Technology Architecture",t:"Physical view",items:["Four-cloud topology; Purview account in a data management landing zone [S24].","Integration runtimes, scanner host, Key Vault, Private Link [S3], [S13], [S23].","Gov-cloud variants and Azure Government Data Map exclusions [S4]."]},
      {phase:"Phase E: Opportunities and Solutions",t:"Gaps and options",items:["S3 in Azure Government: scan from commercial or accept the gap.","OneTrust in gov tenants: UNVERIFIED; defer.","Licensing coverage per capability [S25]."]},
      {phase:"Architecture Governance (AI)",t:"Integration and AI elements",items:["DSPM for AI policies, collection policies, retention and eDiscovery for AI [S15], [S18].","Agent support matrix and Entra Agent ID [S17], [S22]."]}
    ],
    dodaf:[
      {view:"OV-1 / CV-2 / DIV-1",t:"Conceptual",items:["High-level operational concept (people and agents, external stores, AI apps, regulators).","Capability taxonomy C1-C5.","Conceptual data: classification, label, policy, data estate, AI interaction."]},
      {view:"OV-2 / OV-5b / SV-1 (logical) / DIV-2",t:"Logical",items:["Operational resource flows F1-F6.","Activity model: scan, classify, label, evaluate, audit, investigate.","Logical data model (ERD)."]},
      {view:"SV-1/SV-2 / SV-4 / DIV-3 / StdV-1",t:"Physical",items:["Systems interfaces across M365, Azure, AWS, customer estate.","Systems functionality per runtime and scanner.","Standards profile: SMB/NFS, HTTPS 443, IAM external ID, REST v41.0, PKCS#8, Private Link, Graph APIs."]},
      {view:"SV-6 / OV-3 / StdV-1 (APIs)",t:"Integration and AI",items:["Resource flow matrix for S3, Snowflake, Salesforce, file shares, OneTrust.","AI data path and audit flows.","API and protocol standards for connectors and custom AI apps."]}
    ],
    altitudes:[
      {name:"Conceptual",q:"What and why",allowed:"Capabilities, actors, value, concepts",forbidden:"Product names, SKUs, regions, hostnames",lib:"view-01-conceptual"},
      {name:"Logical",q:"Which parts and how they talk",allowed:"Components, responsibilities, interfaces, entities, flows",forbidden:"Regions, SKUs, hostnames",lib:"view-02-logical"},
      {name:"Physical",q:"What is deployed and where",allowed:"Named services, runtimes, clouds, tenants, licensing, protocols",forbidden:"Unmapped components (every row traces to a logical component)",lib:"view-03-physical"},
      {name:"Integration and AI",q:"Who we trust and how data crosses the boundary",allowed:"External systems, auth, APIs, identity, AI data path",forbidden:"Gov-cloud claims without a source (mark UNVERIFIED)",lib:"view-04-integration-ai"}
    ],
    table:[
      ["Classification engine / Information Protection","Phase C, D","SV-1, DIV-2","C1, C2"],
      ["Data Map / Unified Catalog","Phase C (logical), D (physical)","SV-1/SV-2, DIV-2/DIV-3","C1, C3"],
      ["Integration runtimes + scanner","Phase D, E","SV-2, SV-4, StdV-1","C1, C2, C3"],
      ["DLP / Insider Risk","Phase C, D","OV-5b, SV-4","C2, C4, C5"],
      ["Audit / eDiscovery / Compliance Manager","Phase C, Governance","OV-2, SV-6","C4"],
      ["DSPM for AI + AI interaction logging","Phase C, D, Governance for AI","OV-3, SV-6","C5"],
      ["Third-party connectors (S3, Snowflake, Salesforce, OneTrust)","Phase C interfaces, D","SV-1/SV-2 external, SV-6, StdV-1","C1, C3"]
    ]
  },

  deckFlags:{2:"UNVERIFIED: '78% of users bring their own AI tools' is not in the ledger",10:"Overstated: agents inherit parent-app protections [S17]; Copilot Studio audit holds a thread ID [S21]",12:"Inaccurate: both GCC High and DoD support IL4/5 [S8]; the S3 gap is the Azure Government Data Map [S4]",14:"Illustrative: DSPM for AI needs about a day for data [S16]",15:"Deck opinion: 30/60/90 plan is not sourced. The FedRAMP 'disagreement' on this slide is resolved [S35]"}
};

DATA.glossary = [
  {category:"Conceptual",term:"Sensitivity label",rung:100,essential:true,definition:"A persistent marking on content that can carry protection (encryption, watermark, access restriction) and is published by a label policy.",see_also:"Label policy, Information Protection"},
  {category:"Conceptual",term:"Sensitive information type (SIT)",rung:100,essential:true,definition:"A pattern or classifier used to detect a specific category of sensitive data in content or assets.",see_also:"Classification"},
  {category:"Conceptual",term:"Classification",rung:100,essential:true,definition:"The act of detecting sensitive information types with classifiers against content or assets.",see_also:"SIT, Data Map"},
  {category:"Conceptual",term:"Data estate",rung:100,definition:"All sources the Data Map knows about, including non-Microsoft ones [S2].",see_also:"Data source, Asset"},
  {category:"Conceptual",term:"Agent (Purview context)",rung:200,essential:true,definition:"A non-human actor (Copilot Studio, Foundry, etc.) that reads and writes data on a user's behalf and inherits its parent app's protections rather than getting its own [S17].",see_also:"Microsoft Entra Agent ID"},
  {category:"Conceptual",term:"DSPM (Data Security Posture Management)",rung:200,definition:"The solution that assesses data-security risk and recommends or applies policies across the estate.",see_also:"DSPM for AI"},
  {category:"Logical",term:"Data Map",rung:100,essential:true,definition:"The component that registers data sources, scans them, extracts metadata, classifies, and builds lineage [S2].",see_also:"Unified Catalog, Integration runtime"},
  {category:"Logical",term:"Unified Catalog",rung:100,essential:true,definition:"The searchable, curated catalog built from Data Map assets.",see_also:"Data Map, Asset"},
  {category:"Logical",term:"Data source",rung:100,definition:"A registered connection (type, endpoint, collection) that the Data Map scans; contains assets.",see_also:"Asset, Collection"},
  {category:"Logical",term:"Asset",rung:100,definition:"A cataloged object (qualified name, schema, classifications, lineage) belonging to a data source.",see_also:"Data source"},
  {category:"Logical",term:"Policy",rung:100,essential:true,definition:"A rule (DLP, retention, insider risk, or collection type) that targets locations and uses SITs and labels to decide an action.",see_also:"DLP, Collection policy"},
  {category:"Logical",term:"Data Loss Prevention (DLP)",rung:100,essential:true,definition:"Detects and acts on sensitive data in use and in motion using DLP policies and classifications; emits alerts, blocks, and activity events [S1], [S14].",see_also:"Endpoint DLP, Policy"},
  {category:"Logical",term:"Insider Risk Management (IRM)",rung:200,essential:true,definition:"Detects risky user activity from behavioral and activity signals, including AI interactions, and raises alerts and cases.",see_also:"Case"},
  {category:"Logical",term:"Compliance Manager",rung:100,definition:"Assesses organizational posture against named regulations and produces a compliance score.",see_also:""},
  {category:"Logical",term:"Audit (unified audit log)",rung:100,essential:true,definition:"Microsoft 365's system of record for user and admin activity, including AI interactions [S16].",see_also:"CopilotInteraction"},
  {category:"Logical",term:"eDiscovery",rung:100,definition:"Search, hold, review, and export content (including AI interactions) as legal or investigative evidence.",see_also:"Case, ItemClass"},
  {category:"Logical",term:"AI interaction",rung:100,essential:true,definition:"A prompt-and-response pair between a user or agent and an AI app; produces exactly one audit record.",see_also:"CopilotInteraction"},
  {category:"Logical",term:"Case",rung:200,definition:"A container (eDiscovery or IRM type) that collects holds, review sets, and interactions.",see_also:"eDiscovery"},
  {category:"Logical",term:"Data Security Investigations",rung:300,definition:"A newer Purview solution that uses generative AI to help security teams analyze and respond to data breaches and risky-insider incidents [S34].",see_also:"IRM"},
  {category:"Physical",term:"Integration runtime (IR)",rung:200,essential:true,definition:"The compute that performs a Data Map scan: Azure IR (Microsoft-managed, public endpoints), AWS IR (Microsoft-hosted, for S3/RDS), Managed VNet IR (private endpoints), and self-hosted IR (customer VM or Kubernetes) [S3].",see_also:"SHIR, Managed VNet IR"},
  {category:"Physical",term:"Self-hosted integration runtime (SHIR)",rung:200,essential:true,definition:"Customer-run compute (JDK 11) that scans sources Purview's managed runtimes can't reach directly, such as on-prem databases.",see_also:"Integration runtime"},
  {category:"Physical",term:"Managed VNet IR",rung:200,definition:"An Azure-managed integration runtime that scans through private endpoints instead of public ones.",see_also:"Private Link"},
  {category:"Physical",term:"Information protection scanner",rung:200,essential:true,definition:"A Windows service (config in SQL Server) that discovers, classifies, labels, and protects content on on-prem file shares and SharePoint Server, and enforces on-prem DLP [S12].",see_also:"SHIR"},
  {category:"Physical",term:"Data management landing zone",rung:300,definition:"Microsoft's Cloud Adoption Framework pattern: a dedicated Azure subscription per Entra tenant hosting the Purview account [S24].",see_also:"Purview account"},
  {category:"Physical",term:"Collection (Purview)",rung:200,definition:"A container that organizes sources and assets and scopes role-based access within a Purview account [S23].",see_also:"Data source"},
  {category:"Physical",term:"GCC / GCC High / DoD",rung:200,essential:true,definition:"Microsoft's three US-government Microsoft 365 cloud tiers, each with feature-parity gaps versus commercial; GCC High and DoD pair with Entra ID in Azure Government [S8].",see_also:"FedRAMP Equivalency"},
  {category:"Physical",term:"FedRAMP Equivalency",rung:300,essential:true,definition:"Microsoft demonstrating a higher FedRAMP level (High) via completed audit evidence even where the formal instrument is lower (Moderate P-ATO). Resolves the GCC 'Moderate vs High' apparent conflict [S35].",see_also:"GCC"},
  {category:"Physical",term:"Private Link (Azure)",rung:200,definition:"The network-isolation mechanism that keeps the Purview account off the public internet [S23].",see_also:"Managed VNet IR"},
  {category:"Physical",term:"Endpoint DLP",rung:200,definition:"DLP enforced on onboarded Windows devices, sharing the device sensor with Defender for Endpoint; with the Purview browser extension it sees pastes into third-party AI sites [S19].",see_also:"DLP"},
  {category:"Integration & AI",term:"Multicloud scanning connector",rung:200,essential:true,definition:"The Data Map connector family (S3, Snowflake, Salesforce, etc.) that returns metadata and classification only, never source content [S9].",see_also:"Data Map"},
  {category:"Integration & AI",term:"Role ARN / external ID",rung:200,definition:"The AWS IAM mechanism Purview's AWS-hosted IR assumes to scan S3: a cross-account role trust with an external ID, not a stored access key [S9].",see_also:"AWS IR"},
  {category:"Integration & AI",term:"Key pair authentication",rung:200,definition:"RSA (PKCS#8) credential pair for Snowflake, replacing basic auth, which Snowflake is retiring [S10].",see_also:"Snowflake"},
  {category:"Integration & AI",term:"Connected app (Salesforce)",rung:200,definition:"The OAuth mechanism Purview uses to authenticate to Salesforce's REST API for metadata scanning [S11].",see_also:""},
  {category:"Integration & AI",term:"DSPM for AI",rung:200,essential:true,definition:"DSPM's front door for AI: discovers AI use, recommends one-click policies, and runs a weekly oversharing risk assessment of the top 100 SharePoint sites by usage [S15].",see_also:"Collection policy"},
  {category:"Integration & AI",term:"Collection policy (AI)",rung:200,essential:true,definition:"Captures full prompt and response text for Fabric Copilot, Security Copilot, and non-Copilot AI apps. Without it, only audit events are captured [S15].",see_also:"AI interaction"},
  {category:"Integration & AI",term:"CopilotInteraction",rung:200,essential:true,definition:"The unified-audit-log record type emitted for a Copilot prompt/response event. For Copilot Studio it holds a transcript thread ID, not the chat text [S21].",see_also:"Audit"},
  {category:"Integration & AI",term:"Microsoft Entra Agent ID",rung:300,definition:"The directory entry type that gives AI agents from Copilot Studio and Foundry an identity Purview and other tools can govern [S22].",see_also:"Agent"},
  {category:"Integration & AI",term:"Microsoft Copilot Experiences (retention location)",rung:300,definition:"The Data Lifecycle Management location used to retain or delete AI interactions [S18].",see_also:"eDiscovery"},
  {category:"Integration & AI",term:"Graph Purview APIs / Purview SDK",rung:300,definition:"The surface for bringing a custom AI app's prompts and responses under DSPM for AI [S20].",see_also:"DSPM for AI"}
];

/* Deep dive cut script (video/cut-script.json): one label and narration line per slide; cards[i] precedes slide i+2. */
DATA.cut = {
 "labels": [
  "Blueprint",
  "Why now",
  "Boundary",
  "Outcomes",
  "Logical",
  "Engine",
  "Physical",
  "Runtimes",
  "Third party",
  "AI path",
  "OneLake",
  "Gov clouds",
  "Failures",
  "Traceability",
  "Next steps"
 ],
 "slides": [
  "This is the whole platform on one page. Four hubs sit at the center: security and protection, governance and cataloging, risk and compliance, and AI security. Around them are the estates Purview reaches into: other clouds, on-premises stores, and generative AI apps.",
  "The case is simple. AI moves sensitive data faster than older controls can follow. Microsoft frames the answer as visibility, control, and compliance on one platform, in place before Copilot and custom agents scale.",
  "Draw the boundary first. Inside it sit the Data Map, Information Protection, DSPM, and the unified audit log. Outside it are other clouds, on-premises file shares, OneTrust signals arriving through Sentinel, and the AI apps. Purview is not Defender, Entra, or Sentinel. It works with all three.",
  "Microsoft states five outcomes: know your data, protect it, govern the estate, manage risk and compliance, and secure AI use. Each one has an owner, from the data steward to the security analyst.",
  "The logical model has three paths. Metadata: a data source contains assets, and classifiers tag them. Protection: a label policy publishes labels that land on content. AI: every interaction emits an audit record and references the content it touched.",
  "Every trigger meets the same engine. A scan, a user action, or an AI prompt is classified, labeled, and checked against data loss prevention. The result lands in the unified audit log, where DSPM for AI and eDiscovery pick it up.",
  "Physically there are three layers. The Microsoft 365 tenant holds the portal, data loss prevention, labels, and the audit log. An Azure subscription holds the Purview account and Key Vault, and Microsoft recommends a dedicated data management landing zone, one per tenant. Your estate runs only scanners and integration runtimes.",
  "Pick the integration runtime by network reachability. The Azure runtime reaches public endpoints. The managed virtual network runtime adds private endpoints. For on-premises or IP-restricted sources, you need a self-hosted runtime.",
  "Four third-party connections. S3 goes through an AWS-hosted runtime and an IAM role with an external ID, returns metadata and classification only, and is not supported in Azure Government. Snowflake uses key-pair authentication. Salesforce uses its REST API. File shares use the Information Protection scanner, which can label in place.",
  "Here is the AI path. A prompt pulls grounding data. Agents inherit their parent app's protections, so labels and data loss prevention decide what comes back. The interaction is written to the unified audit log. For Copilot Studio agents, the audit keeps a thread ID, and DSPM for AI retrieves the text.",
  "Microsoft's landing zone guidance puts governed data in OneLake, fed by Fabric mirroring, with Azure Data Lake sources registered in Purview. Applications reach data through approved Fabric and Foundry paths, not direct connections.",
  "The government clouds change the design. The scanner and sensitivity labels are available in GCC, GCC High, and DoD. DSPM for AI in GCC High and DoD cannot create browse-to-URL policies. And the Data Map in Azure Government cannot scan S3.",
  "Failure modes come with controls. Auto-labeling and data loss prevention catch an unlabeled sensitive file. A KMS-encrypted bucket needs KMS Decrypt on the IAM role. Endpoint data loss prevention and the browser extension watch what users paste into unmanaged AI sites.",
  "This slide traces one example end to end: a label-based policy, a blocked prompt, and the record an analyst sees in activity explorer. The policy and label names are illustrative. In practice, allow at least a day for DSPM for AI reports to fill.",
  "The deck ends with a thirty, sixty, ninety day plan and an uncertainty register. Two items stay open. OneTrust government-cloud support is unverified, and Microsoft's own sources disagree on the FedRAMP level for GCC."
 ],
 "cards": [
  {
   "question": "Why govern data before scaling AI?",
   "detail": "AI moves sensitive data faster.",
   "why": "Copilot and agents can only respect the labels and policies that already exist.",
   "example": "An unlabeled merger file is just another grounding source."
  },
  {
   "question": "Where does Purview's boundary sit?",
   "detail": "Data Map, protection, DSPM, audit log.",
   "why": "Knowing what sits outside tells you what needs a connector.",
   "example": "OneTrust arrives through Sentinel, not a native connector."
  },
  {
   "question": "Which five outcomes does Purview deliver?",
   "detail": "Know, protect, govern, comply, secure AI.",
   "why": "Each outcome maps to one solution family and one owner.",
   "example": "The data steward owns governance. The security analyst owns AI risk."
  },
  {
   "question": "Does the catalog hold data or metadata?",
   "detail": "Metadata and classifications.",
   "why": "It decides what crosses the boundary back to Microsoft.",
   "example": "An S3 scan returns metadata and classification only, never file contents."
  },
  {
   "question": "Is there one engine or many?",
   "detail": "One classify, label, and DLP path.",
   "why": "A policy you write once applies to scans, users, and prompts.",
   "example": "The same sensitive information type fires on a file share and in a Copilot prompt."
  },
  {
   "question": "What actually runs in your environment?",
   "detail": "Scanners and integration runtimes.",
   "why": "Everything else is Microsoft's cloud, so your footprint is small, but it matters.",
   "example": "The scanner needs Windows Server, SQL Server, and an Entra-synced service account."
  },
  {
   "question": "Which runtime reaches an IP-restricted source?",
   "detail": "Only a self-hosted one.",
   "why": "The wrong runtime is a common reason a scan never connects.",
   "example": "Salesforce with trusted IP ranges needs the self-hosted runtime's address allowed."
  },
  {
   "question": "How does Purview reach each external system?",
   "detail": "A runtime plus the system's own authentication.",
   "why": "Authentication is where these connections break.",
   "example": "Snowflake basic authentication is being retired, so move to key pair."
  },
  {
   "question": "What stops an agent from oversharing?",
   "detail": "Labels and DLP on the grounding data.",
   "why": "Agents inherit their parent app's protections. They add none of their own.",
   "example": "Unlabeled content is not restricted just because an agent reads it."
  },
  {
   "question": "Where should governed data live for AI?",
   "detail": "OneLake, through approved paths.",
   "why": "Direct application connections create copies the platform cannot govern.",
   "example": "Mirror SAP or Oracle into OneLake instead of querying them directly."
  },
  {
   "question": "What changes in the government clouds?",
   "detail": "Feature gaps you design around.",
   "why": "A design that works in commercial can fail in Azure Government.",
   "example": "S3 scanning is not supported by the Data Map in Azure Government."
  },
  {
   "question": "What does each failure look like?",
   "detail": "A symptom, and the control that catches it.",
   "why": "Knowing the tell shortens the outage.",
   "example": "A KMS-encrypted bucket fails to scan until the role gets KMS Decrypt."
  },
  {
   "question": "Can you trace one prompt end to end?",
   "detail": "Policy, block, audit record.",
   "why": "Auditors ask for the trail, not the policy.",
   "example": "In the Audit solution, filter to Copilot activities, then open the interaction in activity explorer."
  },
  {
   "question": "What is still unknown?",
   "detail": "Name it before you commit.",
   "why": "An unverified dependency is a risk, not a plan.",
   "example": "OneTrust government-cloud support has no Microsoft source yet."
  }
 ],
 "open": "This is a technical deep dive on Microsoft Purview. Conceptual, logical, physical, then the integrations and the AI path. Every claim comes from Microsoft sources.",
 "recap": "We drew the boundary, named the five outcomes, followed the metadata, protection, and AI paths, placed them in Microsoft's cloud and in your estate, and checked what changes in the government clouds."
};

/* Daily challenge round 3 drill pools. Each item: prompt, answer (one of the pool's options), why, src. */
DATA.drills = {
  where:{title:"Where does it run?",ask:"Which part of the deployment topology hosts this?",
    options:["Microsoft 365 tenant (Microsoft cloud)","Customer Azure subscription","AWS (Microsoft-hosted runtime)","Customer estate (your infrastructure)"],
    items:[
      {p:"The Purview portal and the compliance solutions (DLP, labels, Insider Risk, eDiscovery)",a:0,why:"The portal and solutions are SaaS in the Microsoft 365 tenant.",src:"S1"},
      {p:"The unified audit log that records CopilotInteraction events",a:0,why:"Audit and AI interactions live in the Microsoft 365 unified audit log.",src:"S16"},
      {p:"DSPM for AI and its weekly oversharing assessment",a:0,why:"DSPM for AI is a solution in the Purview portal running in Microsoft's cloud.",src:"S15"},
      {p:"The Purview account that holds the Data Map and Unified Catalog",a:1,why:"The account is an Azure resource; Microsoft recommends a dedicated data management landing zone per Entra tenant.",src:"S24"},
      {p:"The Key Vault that stores scan credentials",a:1,why:"Purview credentials are backed by Key Vault secrets in the customer's Azure subscription.",src:"S10"},
      {p:"The Managed VNet integration runtime and its private endpoints",a:1,why:"It is an Azure-managed runtime reached through private endpoints alongside the Purview account.",src:"S3"},
      {p:"The runtime that scans Amazon S3 buckets",a:2,why:"S3 is reached only through an AWS IR that Microsoft operates in its own AWS account.",src:"S9"},
      {p:"A self-hosted integration runtime (JDK 11) scanning an on-prem SQL Server",a:3,why:"SHIR runs on a customer VM or Kubernetes cluster.",src:"S3"},
      {p:"The information protection scanner and its SQL Server configuration database",a:3,why:"The scanner is a Windows service on customer Windows Server.",src:"S13"},
      {p:"Onboarded devices running the Purview browser extension",a:3,why:"Endpoint DLP and third-party AI site visibility need managed, onboarded devices.",src:"S19"}
    ]},
  auth:{title:"How does it authenticate?",ask:"Which mechanism does Purview use to reach this system?",
    options:["IAM role (Role ARN) with an external ID","RSA key pair (PKCS#8)","OAuth connected app (consumer key)","AD service account synced to Entra ID"],
    items:[
      {p:"Scanning Amazon S3 buckets",a:0,why:"The AWS IR assumes a cross-account IAM role that trusts Microsoft's account with an external ID; no stored access key.",src:"S9"},
      {p:"Scanning Snowflake after basic auth is retired",a:1,why:"Key pair replaces basic auth, which Snowflake is retiring in 2026. Store the private key with the Azure CLI, not the portal.",src:"S10"},
      {p:"Reading Salesforce objects and fields over REST API v41.0",a:2,why:"Salesforce uses an OAuth connected app (consumer key) plus a user password held in Key Vault.",src:"S11"},
      {p:"Labeling files in place on an on-prem SMB file share",a:3,why:"The information protection scanner runs as an AD account synced to Entra ID with Read, Write, Modify on the shares.",src:"S13"}
    ]},
  altitude:{title:"Which view is this?",ask:"Which architecture view does this belong in?",
    options:["Conceptual","Logical","Physical","Integration and AI"],
    items:[
      {p:"Five capabilities and the actors who own them, with no product names",a:0,why:"Conceptual is what and why: capabilities and actors only.",src:"S1"},
      {p:"An OV-1 picture of people, agents, external stores, and regulators",a:0,why:"The operational concept sits at the conceptual altitude (DoDAF OV-1).",src:"S1"},
      {p:"An ERD showing that each AI interaction emits one audit record",a:1,why:"Entities and relationships belong to the logical data model (DIV-2).",src:"S16"},
      {p:"Flow F1: data source to Data Map, payload metadata and classification only",a:1,why:"Components and flows without regions or SKUs are logical.",src:"S9"},
      {p:"Scanner host sizing: 4 cores, 8 GB RAM, SQL Server 2016+ with case-insensitive collation",a:2,why:"Named hosts, sizing, and databases are physical.",src:"S13"},
      {p:"GCC High and DoD pair with Entra ID in Azure Government",a:2,why:"Cloud and tenant variants are part of the physical view.",src:"S8"},
      {p:"One row per external system with mechanism, auth, and gov-cloud support",a:3,why:"The third-party inventory is the core of the integration view.",src:"S4"},
      {p:"Prompt, grounding, label/DLP/access check, response, then audit",a:3,why:"The AI data path lives in the integration and AI view.",src:"S15"}
    ]}
};

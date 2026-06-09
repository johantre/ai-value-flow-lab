# AI-First Value Stream Assessment — Acme BV
*Test case | Value stream: Van bedrijfsvraag naar bruikbaar inzicht*

> **Outside-In Principle:** Every value stream is defined from the customer's perspective inward — never from internal processes outward. We start with *what the customer needs*, trace back through *how that value is created*, and only then ask *how we are organized*. This lens applies throughout every section of this assessment.

> **Domain Awareness (Cynefin — Dave Snowden):** This assessment operates across two fundamentally different domains. **Part I** (Sections 0–9) is *Complicated* — it requires expertise and structured analysis, but the answers are knowable. **Part II** (Sections 10–16) is *Complex* — the transformation itself is emergent, non-linear, and unpredictable. In Complex, you do not execute a plan. You design safe-to-fail probes, observe what emerges, and respond. Treat Part I as a landscape map. Treat Part II as a set of hypotheses.

> **Recommended two-pass approach:**
> **Pass 1 — Greenfield first (Sections 8–9):** Before analyzing the current state, complete the greenfield and design principles sections. This prevents the current state from anchoring your thinking and ensures you design from customer value, not from internal inertia.
> **Pass 2 — Current state (Sections 0–7):** With the greenfield in mind, map and analyze what actually exists. The delta between greenfield and current state becomes the transformation agenda.

---

# PART I: Landscape Mapping
*(Complicated domain — Sense → Analyze → Respond)*

---

## 0. Strategic Orientation

- **What is the organization's purpose (really)?** Acme BV is the Belgian distribution system operator (DSO) for electricity and gas in Flanders, Brussels, and parts of Wallonia. Core mandate: safe, reliable, accessible energy infrastructure for every household and business in the territory.
- **What value do we deliver (concretely)?** Energy delivery, grid management, smart meter rollout, connection management, energy transition facilitation (solar, EV, batteries). And internally: data-driven insight that supports operational and strategic decisions.
- **For whom?** Households, businesses, municipalities, grid operators, regulators (VREG), and internal business stakeholders.
- **Which value streams exist today?** Grid operations, connection management, meter data processing, reporting & analytics (this assessment), customer service, energy transition programs.

> **Valkuil 3 (Vandamme)**: als de 'Why' van deze transformatie ontbreekt of alleen een opgelegde opdracht is, stop dan hier. Een verandering zonder hogere doelen motiveert niemand — ook niet met de beste tools. De pijn noch de droom is dan voelbaar. Eerst de Why, dan de How.

*Why this transformation:* Business stakeholders are frustrated by the time and effort required to get answers to data questions. The data team is overwhelmed. The reporting capacity is a bottleneck. AI-first redesign of this value stream could free both sides to do higher-value work.

### What people love about working here

- People in the data team genuinely enjoy solving complex analytical puzzles — connecting data from disparate sources to answer a question nobody has answered before.
- Real collaboration happens at the boundary between business and data: when a business person and an analyst sit together to make sense of a dataset, something good happens.
- Learning happens informally — people help each other with Databricks, Power BI, Git. There's genuine knowledge sharing.
- The work feels meaningful when insights lead to real operational decisions: a grid upgrade, a maintenance priority, a policy recommendation.
- What the current context prevents: spending time on insight quality and validation. Too much time goes to mechanics — data extraction, report formatting, re-running queries after spec changes.

### Priority & Focus

- The #1 value stream for this assessment: **Van bedrijfsvraag naar bruikbaar inzicht** (From business question to usable insight)
- Value streams working against each other: operational reporting (recurring, standardized) competes for the same analyst capacity as strategic analytics (one-time, exploratory)
- Estimated capacity dedicated to this value stream: unknown — to be established
- If we kept only the top 1–2 value streams: recurring operational reporting + strategic analytics. Ad-hoc reporting (most frequent, lowest value per unit) would be the first to redesign.

---

## 1. Context & Constraints

> **Valkuil 6 (Vandamme)**: begincondities die niet helder zijn, zijn de meest onderschatte oorzaak van mislukte transformaties. Mandaat, tijd en middelen moeten expliciet zijn — niet aangenomen. Beantwoord onderstaande vragen eerlijk voor je verdergaat.

- **Organization / Domain:** Acme BV — Belgian DSO (Distribution System Operator). Data & Analytics department.
- **Scope of analysis:** The value stream "Van bedrijfsvraag naar bruikbaar inzicht" — covering intake of business questions through delivery of usable insights via Power BI, built on Databricks.
- **Out of scope:** Infrastructure operations, customer-facing systems, grid management systems, HR and finance analytics.
- **Starting point:** Reporting is a bottleneck. Business stakeholders experience long wait times. Analysts spend disproportionate time on mechanics (data retrieval, formatting) vs. interpretation. Training adoption of the Databricks + Power BI + Git platform is uneven.
- **Mandate:** *(To be established explicitly — is this a formal transformation initiative? Who has given the go-ahead? Is there a sponsor? Or is this an exploratory assessment?)*
- **AI ambition / desired future state:** Business stakeholders can get answers to data questions faster, with less friction, with higher quality. Analysts focus on complex, high-value analytical work — not report mechanics. The platform (Databricks + Power BI) is leveraged more fully.
- **Current tech & data landscape:** Databricks (data platform, notebooks, SQL), Power BI (visualization and reporting), Git (version control). Platform is in place; adoption and skill maturity is uneven across the team. AI tooling: not yet formally integrated into the value stream.
- **Constraints:** Regulatory (VREG, GDPR, energy sector compliance), organizational inertia, variable data literacy across business stakeholders, existing reporting contracts and expectations.
- **AI capability evolution:** 
  - *Commodity (stop building):* Standard BI report generation, SQL query writing, data cleaning routines, dashboard templating — all moving to commodity fast.
  - *Custom Built (window of differentiation):* Domain-specific data models (grid topology, meter data, energy flows), business ontology for energy distribution, anomaly detection in grid data.
  - *Genesis (watch, don't build yet):* Agentic analytics — AI that proactively identifies grid anomalies or patterns without being asked.

---

## 2. Value Stream Mapping (Outside-In)

### Van bedrijfsvraag naar bruikbaar inzicht

| Step | Name | Goal | Input | Output | Roles Involved | % Wait / Lead Time | Type of Work | Link to Strategic Goal |
|------|------|------|-------|--------|----------------|-------------------|--------------|------------------------|
| 1 | Intake & vraagformulering | Business question captured and understood | Business need, event, deadline | Vague-to-understood data question | Business stakeholder, Analyst | 30–50% wait | Coordination | Unclear |
| 2 | Vraag → data vertaling | Translate business question into data specification | Business question (often incomplete) | Data spec / query requirements | Analyst (alone) | 20–30% wait | Coordination | Indirect |
| 3 | Data ophalen & transformeren | Get the right data in the right shape | Data spec | Clean dataset in Databricks | Analyst / Data Engineer | 10–15% | Value creation | Direct |
| 4 | Rapport bouwen (Power BI) | Build visualisation that answers the question | Clean dataset | Draft Power BI report | Analyst | 10% | Value creation | Direct |
| 5 | Validatie & review | Confirm report answers original question | Draft report + original question | Approved report OR change request | Business stakeholder, Analyst | 30–40% (loop) | Control | Unclear |
| 6 | Gebruik & learning | Report is used, insights acted on, learning fed back | Approved report | Decisions, actions, (rare) feedback | Business stakeholder | 70%+ idle | Value creation | Direct (when it happens) |

**Observation:** The value creation (steps 3–4) is a small fraction of total lead time. The overhead (steps 1, 2, and 5) is where most time disappears. Step 6 is where the value either lands or is lost — and there is currently no feedback mechanism to close the loop.

---

## 3. Work Deconstruction per Step

> **Conway's Law**: What you observe in this value stream is not a neutral process — it is the organization's communication structure made visible. Every handoff, approval gate, and role boundary is the org's self-portrait. The system design mirrors the org design, whether intended or not.

### Van bedrijfsvraag naar bruikbaar inzicht

#### Step 1 — Intake & vraagformulering

- **What really happens here?** A business stakeholder has a question, often triggered by a meeting, a deadline, or a regulatory request. They reach out to the data team — by email, Teams, informally. The question is rarely fully specified. "Can we see how many connections had issues last quarter?" is a typical input.
- **Why does this step exist?** Because business stakeholders have no structured way to formulate data questions, and no shared language with the data team.
- **What is the output (concretely)?** At best: a shared understanding of the question. At worst: an analyst starts working on an interpretation that doesn't match what the business actually needed.
- **Who is involved and why?** Business stakeholder (has the question), Analyst (has the data knowledge). No structured intake process.
- **Where is there friction or delay?** Availability mismatch. Vague questions. Multiple stakeholders with slightly different versions of the same question. Questions arriving without context or deadline clarity.
- **Role audit:** The analyst's role in this step is *translator*. The problem being solved is: business can't speak data. Is that problem solved by having an analyst translate? Partially — but the translation creates a lossy handoff. The role is not solving the communication gap; it is compensating for it.

#### Step 2 — Vraag → data vertaling

- **What really happens here?** The analyst, working alone, maps the business question to available data sources, tables, fields. They decide what "last quarter" means in the data model. They decide what "issues" counts as. These decisions are made without the business stakeholder.
- **Why does this step exist?** Because the data model is complex and the business stakeholder doesn't know it. And because the data team has built up domain knowledge that isn't documented.
- **What is the output (concretely)?** A mental model or informal spec: "I'll pull from table X, filter by Y, aggregate by Z."
- **Who is involved and why?** Analyst only. Occasionally a data engineer if a new data source is needed.
- **Where is there friction or delay?** Ambiguity in the original question. Missing documentation of the data model. Undocumented business rules ("issues" = what exactly?). Dependency on a specific analyst who knows a specific part of the data landscape.
- **Role audit:** This step exists because business ontology and data ontology are separate and unmapped. The analyst is a bridge between two worlds that don't share a language. That bridge is a person — which makes the value stream dependent on that person's availability and knowledge.

#### Step 3 — Data ophalen & transformeren

- **What really happens here?** The analyst writes SQL in Databricks (or runs an existing notebook), transforms the data, and produces a clean dataset. For complex questions, a data engineer may be involved.
- **Why does this step exist?** Raw data in Databricks is not query-ready for every question. Transformation is needed.
- **What is the output (concretely)?** A clean, structured dataset ready for visualization.
- **Who is involved and why?** Analyst (SQL, Databricks), Data Engineer (if new transformations are needed).
- **Where is there friction or delay?** Waiting for data engineer capacity when existing notebooks don't cover the question. Data quality issues discovered mid-query. Git workflow friction for less experienced analysts.
- **Role audit:** This is genuine value creation. The friction here is partly tooling literacy (Databricks, Git adoption uneven) and partly dependency on data engineers for non-standard queries.

#### Step 4 — Rapport bouwen (Power BI)

- **What really happens here?** The analyst builds a Power BI report or dashboard from the clean dataset. Layout, filters, visuals, formatting.
- **Why does this step exist?** Business stakeholders need a visual, interactive format to interpret the data.
- **What is the output (concretely)?** A Power BI report, shared via the portal or workspace.
- **Who is involved and why?** Analyst only (typically). Design decisions made unilaterally.
- **Where is there friction or delay?** Rework when the visual doesn't match what the business expected. Report formatting takes disproportionate time relative to insight value. No template library — every report starts from scratch.
- **Role audit:** Genuine value creation — but the design decisions are made alone, which sets up step 5 as a necessary correction loop.

#### Step 5 — Validatie & review

- **What really happens here?** The business stakeholder reviews the report and either approves it or raises questions: "this number doesn't match what I see in system X," "can you split this by region too?", "I think the filter is wrong."
- **Why does this step exist?** Because steps 1 and 2 were disconnected from the business stakeholder. The report is the first moment of shared reality — and it often triggers a new translation cycle.
- **What is the output (concretely)?** Approval + deployment OR a change request that sends the analyst back to step 2 or 3.
- **Who is involved and why?** Business stakeholder + Analyst. Sometimes a data steward or domain expert.
- **Where is there friction or delay?** Stakeholder availability. Multiple rounds of revision. "While you're at it, can you also add..." scope creep. Misalignment discovered here that could have been prevented in step 1.
- **Role audit:** This step exists because quality was not built in upstream. It is overhead — not because validation is bad, but because the cost of correction should be near-zero (immediate iteration), not a multi-day loop.

#### Step 6 — Gebruik & learning

- **What really happens here?** The business stakeholder uses the report. Maybe. Sometimes the report is presented in a meeting and then forgotten. Sometimes it triggers a decision. Rarely does the insight get fed back to improve the data model or the next question.
- **Why does this step exist?** This is the only step where value actually lands. Everything else is preparation.
- **What is the output (concretely)?** A decision, an action, a recommendation — or nothing.
- **Who is involved and why?** Business stakeholder primarily. The data team is rarely in the room where the decision is made.
- **Where is there friction or delay?** No feedback loop. The data team doesn't know if the report was used, whether it answered the question, or what decision it informed. The learning that should improve the next iteration is lost.
- **Role audit:** The data team has no formal presence in this step. That is the organizational design flaw: the people who built the insight are cut off from the impact of the insight.

---

## 4. Value Stream Evaluation

### Critical questions

- **If we were starting over today, would we rebuild this value stream?** Yes — but radically differently. The bottleneck-in-translation would be the first thing to eliminate.
- **Does this value stream directly contribute to the organizational goal?** Yes — data-driven decision making is core to grid management, regulatory compliance, and energy transition planning.
- **Is this value stream a core activity or a supporting one?** Supporting — but strategically critical. Without usable insights, operational decisions are made on intuition.
- **Did this value stream arise out of necessity or grow historically?** Historically grown. The current structure (analyst as translator, sequential handoffs) was never designed; it emerged as the organization grew and data volumes increased.
- **Which other value streams influence this one?** Grid operations (main source of questions), meter data (main data source), regulatory reporting (distinct but overlapping).
- **Is there overlap or duplication?** Yes — ad-hoc reporting and recurring operational reporting use the same analyst capacity but have different rhythms and requirements. They compete.
- **Is this work done because it must be, or because it has always been this way?** Both. The insight delivery is necessary. The specific mechanics are historical habit.

### Forcing choices

- **If this value stream stops tomorrow:** Business stakeholders make grid and investment decisions on intuition or lagging data from other systems. Regulatory reporting obligations may be at risk. Real impact: high.
- **Revenue impact:** Indirect — but significant in a regulated utility where data quality and decision speed affect network reliability and regulatory compliance.
- **What would a competitor do?** A greenfield DSO today would build a self-service analytics platform with AI-assisted question formulation and automated report generation for standard queries. Analysts would focus on complex model development, not report mechanics.
- **If we cut 50% of this value stream:** Keep steps 3 (data transformation) and 4 (report building) for genuinely complex questions. Automate or restructure steps 1, 2, and 5. Close the feedback loop in step 6.
- **Which parts exist only to manage internal complexity?** Steps 1 and 2 (translation overhead), and the validation loop in step 5. These are all symptoms of the communication structure gap, not necessary steps in themselves.

### Conclusion

- ☑ This value stream is fundamentally necessary → *continue with critical lens*

---

## 5. Brutal Step Analysis

### Van bedrijfsvraag naar bruikbaar inzicht

#### Step 1 — Intake & vraagformulering

- **If eliminated tomorrow, what breaks?** Questions stop reaching the data team in any structured form. Actually — does anything change? The current intake is already unstructured.
- **Who would miss it?** Nobody misses the *process* — people miss the *outcome* (getting their question answered).
- **Necessary or historical?** Historical. No one designed this step; it is an informal practice.
- **Value creation or coordination?** Coordination — and poorly designed coordination at that.
- **Symptom of another problem?** Yes. Symptom: no shared language between business and data. The intake step is the band-aid.
- **Would a customer pay for this?** No. The customer (business stakeholder) doesn't want to attend an intake meeting. They want their question answered.
- **Here because other steps are failing?** Yes — step 2 (unilateral translation) requires an upstream intake because the analyst can't start from the business stakeholder's raw words.

**Conclusion:** **Eliminate** (in current form) → redesign as AI-assisted self-service intake with structured question templates.

#### Step 2 — Vraag → data vertaling

- **If eliminated tomorrow, what breaks?** Analysts would need to start directly from business language, which the current data model can't handle. Short-term chaos. Long-term: forces the organization to build shared ontology.
- **Who would miss it?** Business stakeholders won't miss it. Analysts might, because it is where they currently exercise their expertise. But that expertise is better used elsewhere.
- **Necessary or historical?** The *gap* it bridges is real. The *way it's bridged* is historical.
- **Value creation or coordination?** Coordination — of a communication gap.
- **Symptom of another problem?** Yes. Symptom: no documented, shared data ontology. No semantic layer that maps business concepts to data model.
- **Would a customer pay for this?** No.
- **Here because other steps are failing?** Yes — this step exists because the data model and the business vocabulary are not connected anywhere outside the analyst's head.

**Conclusion:** **Eliminate** (in current form) → replace with shared semantic layer + AI-assisted mapping from business question to data spec.

#### Step 3 — Data ophalen & transformeren

- **If eliminated tomorrow, what breaks?** Everything. No data, no insight. This is core.
- **Who would miss it?** Everyone.
- **Necessary or historical?** Necessary — raw data is not directly usable.
- **Value creation or coordination?** Value creation.
- **Symptom of another problem?** Partially — some transformation work exists because data quality issues upstream are not resolved at source.
- **Would a customer pay for this?** Implicitly yes — it's the engine.
- **Here because other steps are failing?** No.

**Conclusion:** **Keep** — but optimize. AI can accelerate query writing; template notebooks reduce friction; Git workflow should be standardized to reduce individual friction.

#### Step 4 — Rapport bouwen (Power BI)

- **If eliminated tomorrow, what breaks?** Business stakeholders lose the visual interface. Data would be tables in Databricks — not accessible to non-technical users.
- **Who would miss it?** Business stakeholders.
- **Necessary or historical?** Necessary as a format, but the specific mechanics (build from scratch, no templates) are historical.
- **Value creation or coordination?** Value creation — but inefficiently executed.
- **Symptom of another problem?** Yes — no template library, no design standards, means every report is a full rebuild.
- **Would a customer pay for this?** Yes — for the output. Not for the manual effort.
- **Here because other steps are failing?** Partially — if step 2 were better, fewer design decisions would be made in isolation, reducing rework in step 5.

**Conclusion:** **Keep** — but accelerate with AI-assisted draft generation and standardize with template library.

#### Step 5 — Validatie & review

- **If eliminated tomorrow, what breaks?** Reports would be deployed without confirmation that they answer the right question. Short-term quality drop. Long-term: forces quality to be built upstream.
- **Who would miss it?** Business stakeholders would miss the safety net. Analysts would miss the feedback (even negative feedback is signal).
- **Necessary or historical?** Necessary *as quality signal*. Historical *as a separate, sequential loop*.
- **Value creation or coordination?** Control — currently structured as an expensive correction loop.
- **Symptom of another problem?** Yes — it exists because steps 1 and 2 are disconnected from the business stakeholder. If the business stakeholder is involved earlier, validation becomes a lightweight confirmation, not a correction cycle.
- **Would a customer pay for this?** Not in its current form. They'd pay for quality — not for the rework loop.
- **Here because other steps are failing?** Entirely.

**Conclusion:** **Simplify** → shrink to a lightweight confirmation step when upstream design quality is high; eliminate multi-round revision loops.

#### Step 6 — Gebruik & learning

- **If eliminated tomorrow, what breaks?** Nothing visible short-term. Long-term: the value stream has no feedback mechanism. Quality doesn't improve. Relevance drifts.
- **Who would miss it?** Nobody currently misses it — because it barely exists as a designed step.
- **Necessary or historical?** Necessary — but completely underdeveloped.
- **Value creation or coordination?** Value creation — the only step where real value lands.
- **Symptom of another problem?** Yes. The data team is structurally absent from the moment of impact. They have no visibility into whether their work changed anything.
- **Would a customer pay for this?** Yes — this is the only step they're actually paying for.
- **Here because other steps are failing?** It's failing *because* no one designed it.

**Conclusion:** **Keep and redesign** → build a formal feedback loop. Data team gets visibility into report usage and decision outcomes. Insights feed back to improve ontology, data model, and next question quality.

### Org Topologies — current archetype self-assessment

**Two axes:**
- **Team fluency** (X): how cross-functional and autonomous are teams?
- **Product fluency** (Y): how customer-centric is the organization?

**Seven archetypes:**

| | Archetype | Optimizing for | Team fluency | Product fluency |
|---|---|---|---|---|
| ☐ | **Y0** — Intertwined Projects & Lonely Workers | Resource utilization / cost centers | Very low | Very low |
| ☐ | **Y1** — Narrow-Specialized Teams | Narrow ownership | Low | Low |
| ☑ | **A2** — Hopeful Yet Entangled Teams | Quick wins & conflict avoidance | Medium | Low–medium |
| ☐ | **A3** — Proud & Autonomous Teams | Feature ownership & team throughput | High | Medium |
| ☐ | **B2** — Dependent Teams tied to Customer Journeys | Managing dependencies | High | High |
| ☐ | **B3** — Interdependent Teams collaborating on Customer Journey | Business goals & customer experience | Very high | Very high |
| ☐ | **C3** — Holistic Product Development | Adaptivity in learning & delivery | Full | Full |

**Current archetype: A2 — Hopeful Yet Entangled Teams**

**Notes / nuance:**
- Analysts want to be close to the business and often are personally motivated — but data engineering sits in a separate team, creating structural dependency.
- Business stakeholders are not part of the team — they are external customers of the team, which means product fluency is low to medium.
- The value stream requires skills across at least three domains (business understanding, data engineering, visualization) but no single team holds all three.
- Some analysts are more business-facing, some more technical — an informal split that is not by design.

**Implication:** A2 means AI can augment teams locally, but org-level AI integration hits structural roadblocks. Before agentic AI can operate across the full value stream, the team boundary problem needs to be addressed. An analyst using AI to write better SQL is incremental. Redesigning the value stream so AI mediates between business and data is structural — and requires moving toward at least A3 or B2.

**What structural shift is needed:**
- Bring business context closer to the data team (or vice versa) — either through embedded business representatives or AI-mediated shared ontology.
- Reduce dependency on data engineers for standard queries by increasing analyst autonomy on the platform (training, templates, AI-assisted SQL).
- Design a feedback loop (step 6) that gives the team visibility into impact — which is a prerequisite for product fluency.

---

## 6. Steps Kept

### Van bedrijfsvraag naar bruikbaar inzicht

#### Lean Analysis

##### Step 3 — Data ophalen & transformeren

- Goal: achieved — when the right data is available and the spec is clear.
- Input: sufficient when step 2 delivers a clear spec; often insufficient in current state.
- Output: sufficient to support step 4.
- Roles involved: overkill when a data engineer is needed for queries that should be self-service. Sufficient when analyst can self-serve in Databricks.

##### Step 4 — Rapport bouwen (Power BI)

- Goal: achieved in terms of technical output; not always achieved in terms of insight delivery.
- Input: sufficient (clean dataset from step 3).
- Output: overkill in formatting effort vs. insight value ratio for many reports.
- Roles involved: sufficient — one analyst, but without templates, effort is high.

##### Step 5 — Validatie (simplified)

- Goal: achieved when it results in approval; fails when it triggers a multi-round loop.
- Input: currently too weak (draft built on unvalidated assumptions from step 2).
- Output: either approval or a change request — both are valid signals.
- Roles involved: sufficient.

##### Step 6 — Gebruik & learning (redesigned)

- Goal: not currently achieved — no feedback mechanism exists.
- Input: insufficient (no structured way to receive signal from business on report utility).
- Output: currently absent.
- Roles involved: currently insufficient — data team has no presence.

#### AI Impact Analysis

##### Step 3 — Data ophalen & transformeren

**Can AI:**
- Take over this step? Partially — AI can write SQL, suggest transformations, explain data quality issues. Human oversight remains necessary for domain-specific logic.
- Accelerate it? Yes — significantly. AI-assisted query writing, notebook generation, anomaly flagging.
- Eliminate it? No — data transformation is real work.

**Evolution curve:**

| | Today | In 2–3 years |
|---|---|---|
| ☐ Genesis | | |
| ☑ Custom Built | Domain-specific transformations (grid topology, meter data) | Becoming Product |
| ☑ Product | SQL writing, data cleaning, standard aggregations | Becoming Commodity |
| ☐ Commodity | | Standard queries: already commodity |

**Implication:** ☑ Buy for SQL/query assistance — ☑ Build for domain-specific Databricks notebooks with Acme BV data model knowledge.

**How:** AI coding assistant (e.g., integrated in Databricks) generates first-draft SQL from a natural language spec. Analyst reviews and refines. Upstream: clearer spec from redesigned step 2. Downstream: faster delivery to step 4. New risks: AI-generated SQL that looks correct but applies wrong business rules — requires human review by domain-knowledgeable analyst.

##### Step 4 — Rapport bouwen (Power BI)

**Can AI:**
- Take over this step? Partially — AI can generate first-draft reports from dataset + question description. Human review for insight quality and design.
- Accelerate it? Yes — dramatically, especially for standard report types.
- Eliminate it? Not yet. The human judgment in "does this visual actually communicate the insight?" remains necessary.

**Evolution curve:**

| | Today | In 2–3 years |
|---|---|---|
| ☐ Genesis | | |
| ☐ Custom Built | | |
| ☑ Product | AI-assisted report generation | Becoming Commodity |
| ☐ Commodity | | Standard dashboards: will be commodity |

**Implication:** ☑ Buy — AI report generation tools are available now. Template library reduces manual effort immediately. Invest in template standards, not bespoke report building.

**How:** Define top 10 standard report archetypes for Acme BV. Build AI-assisted first-draft generation for these. Analysts review and refine. Upstream: well-specified question from redesigned step 2. Downstream: validation becomes lightweight confirmation rather than full rework.

##### Step 6 — Gebruik & learning (redesigned)

**Can AI:**
- Take over this step? No — the human decision and the feedback signal must be human-generated.
- Accelerate it? Yes — AI can surface usage patterns (which reports are opened, which filters are used, which go unused), flagging candidates for redesign or retirement.
- Eliminate it? No — this step is the reason the whole value stream exists.

**Evolution curve:**

| | Today | In 2–3 years |
|---|---|---|
| ☑ Genesis | Usage analytics on reports, feedback loops | Custom Built |
| ☐ Custom Built | | |
| ☐ Product | | |
| ☐ Commodity | | |

**Implication:** ☑ Build — no off-the-shelf solution captures the Acme BV-specific feedback loop between insight and operational decision. This is a differentiating capability.

**How:** Instrument Power BI reports with usage analytics. Build a lightweight feedback mechanism (thumbs up/down + one-line comment) at report level. Analyst team reviews usage data monthly. Reports with zero usage in 3 months: retire or redesign. Upstream: no change. Downstream: informs step 1 (which questions recur, which are answered well, which are poorly served).

---

## 7. Decision per Step

### Van bedrijfsvraag naar bruikbaar inzicht

#### Step 1 — Intake & vraagformulering

- Action: ☑ **Eliminate** (current form) → redesign as AI-assisted self-service intake
- Rationale: The current informal intake is not a designed step — it is an absence of design. Business stakeholders should be able to submit structured questions without analyst mediation for standard request types. An AI-assisted intake form with question templates and ontology prompts can capture 80% of questions without a human translator.
- If we do NOT do this: Analyst capacity continues to be consumed by question intake and clarification. Every new business stakeholder needs to learn how to reach the data team informally. Scaling is impossible.

#### Step 2 — Vraag → data vertaling

- Action: ☑ **Eliminate** (current form) → replace with shared semantic layer + AI mapping
- Rationale: This step is the knowledge bottleneck. One analyst holding the mental map from business vocabulary to data model is a single point of failure and a scaling constraint. The fix is structural: build a documented semantic layer (Acme BV business ontology ↔ Databricks data model), and use AI to map incoming questions to that layer.
- If we do NOT do this: Analyst dependency grows with every new data source added. Knowledge walks out the door when people leave. The value stream cannot scale.

#### Step 3 — Data ophalen & transformeren

- Action: ☑ **Keep** + ☑ **Automate** (query generation assistance)
- Rationale: Genuine value creation. Accelerate with AI-assisted SQL and notebook generation. Reduce data engineer dependency for standard queries by increasing analyst self-service capability.
- If we do NOT do this: Analysts remain bottlenecked on query writing. Data engineers remain the last line of defense for non-trivial queries. Platform investment in Databricks is not fully realized.

#### Step 4 — Rapport bouwen (Power BI)

- Action: ☑ **Keep** + ☑ **Automate** (first-draft generation) + ☑ **Simplify** (template library)
- Rationale: Necessary output format. Accelerate with AI-generated first drafts and standard templates. Analyst role shifts from "report builder" to "insight curator."
- If we do NOT do this: Analyst time continues to go to formatting and layout rather than insight quality. Rework in step 5 continues.

#### Step 5 — Validatie & review

- Action: ☑ **Simplify** → shrink to lightweight confirmation when upstream quality is high
- Rationale: This step should become a 10-minute confirmation rather than a multi-day revision loop. The intervention is upstream (steps 1–2), not in step 5 itself.
- If we do NOT do this: The correction loop persists. Even with AI-generated reports, if the question was wrong, the report will be wrong. Garbage in, garbage out — now at AI speed.

#### Step 6 — Gebruik & learning

- Action: ☑ **Keep** + redesign as a formal feedback loop
- Rationale: This is the only step where value lands. Redesign it as a designed step, not an afterthought. Instrument reports for usage. Create a lightweight feedback mechanism. Connect feedback to continuous improvement of the ontology and report templates.
- If we do NOT do this: The value stream optimizes for output (reports delivered) rather than outcome (decisions made). AI-accelerated delivery without a feedback loop produces more useless reports faster.

---

## 8. Greenfield — AI-Native Possibilities

> **Valkuil 14 (Vandamme)**: als je de transformatie kadrert als het oplossen van een probleem, is de status quo je eindpunt. Dit is een ontwerpfout. Kadreer het als ontwikkeling — niet "we lossen X op", maar "we bouwen de organisatie die Y mogelijk maakt." De stip aan de horizon is een mogelijkheid, niet een herstel.

> **Communication structure first** (Conway): before asking "what is the architecture?", ask "who needs to talk to whom, about what, how often?" In the AI-native design, some of those conversations will be human↔AI or AI↔AI. Design communication structure — system architecture follows.

> **Roles as solution patterns** (S3): in this greenfield view, every role should be answerable to: *what problem does this role solve, and when will it no longer be needed?*

### Van bedrijfsvraag naar bruikbaar inzicht — the radical greenfield

**If built from scratch with AI as a native capability:**

- The business stakeholder types a question in natural language into an interface. An AI assistant helps them sharpen the question — not a human analyst.
- The AI maps the question to the shared Acme BV data ontology and identifies the relevant data sources in Databricks. No human translator.
- A first-draft report is generated automatically for standard question types. The business stakeholder sees a v0 in minutes, not days.
- The business stakeholder iterates directly with the AI: "split this by region," "exclude residential connections," "show me the trend over 12 months." Real-time refinement.
- For complex, exploratory, or novel questions: an analyst is engaged as a curator — not a translator. Their job is to ensure the AI's interpretation is domain-correct, and to add the analytical layer that AI cannot.
- Every report is instrumented. Usage, feedback, and decision outcomes flow back automatically. The system learns which question types recur and pre-generates answers. The ontology grows over time.

**Steps that disappear:** intake as a separate activity, translation as a human task, multi-round validation loops.

**Steps that emerge:** AI-assisted question formulation, automated v0 report generation, continuous ontology curation, usage-driven insight retirement.

**Communication structure:**
- Business stakeholder ↔ AI (direct — for intake, iteration, feedback)
- AI ↔ Databricks (automated — for query execution)
- Analyst ↔ AI (curatorial — for complex questions and ontology maintenance)
- Analyst ↔ Business stakeholder (strategic — for genuinely complex analytical work, not standard reporting)
- AI ↔ AI (future — agentic: proactive anomaly detection in grid data generates insights without being asked)

**Roles that survive:** Analyst (transformed — insight curator, ontology steward, complex analytics)
**Roles that are created:** Data Steward / Ontology Owner (maintains the semantic layer between business and data — dissolution criterion: when the ontology is stable and AI maintains it autonomously)
**Roles that dissolve:** Translator analyst (the person whose primary job is intake + question-to-data mapping — when the shared semantic layer + AI intake exist, this role has solved its own problem)

### New value streams that become possible

- **Proactive insight delivery:** instead of waiting for business questions, AI monitors grid data continuously and surfaces anomalies or patterns proactively. "You weren't asking — but you should know this."
- **Regulatory reporting automation:** standard VREG reporting requirements mapped to automated pipelines. Compliance becomes a byproduct of good data design, not a manual exercise.
- **Self-service analytics for non-technical business stakeholders:** business people answer their own operational questions without involving the data team at all — for the long tail of standard questions.

### Operating model design (DAO framework)

<details>
<summary>1. Organization Structure</summary>

- The value stream "Van bedrijfsvraag naar bruikbaar inzicht" needs a cross-functional team that spans business understanding, data engineering, and AI tooling — not three separate teams connected by handoffs.
- Consider: a small "Insight Squad" that includes an analyst (insight curator), a data engineer (platform owner), and a business embedded (rotating or permanent). AI is the fourth team member.
- Shared services (central data engineering) remain relevant for platform management and new data source onboarding — but should not be in the critical path for standard analytical questions.
- Team size: small. The goal is low coordination overhead, not wide coverage. Other business units self-serve.

</details>

<details>
<summary>2. Processes & Integration</summary>

- Coordination happens through the shared ontology and instrumented platform — not through meetings and handoffs.
- Flow efficiency target: business question to first draft report in under 2 hours for standard question types; under 2 days for complex analytical questions.
- Queues currently form at step 1 (intake), step 2 (translation), and step 5 (validation). All three are addressed by redesigning communication structure, not by adding capacity.
- Feedback loops: report usage → ontology improvement → better question formulation → faster delivery. This loop is currently open. It must be designed closed.
- Adaptability needed: operational (respond fast to new business questions) and structural (reorganize as AI capabilities evolve). Strategic reorientation (new value streams) is on a longer horizon.

</details>

<details>
<summary>3. People Practices</summary>

- Analysts develop skills toward insight curation, domain expertise, and AI orchestration — not toward query writing and report formatting (which AI handles).
- The "translator" skill (business vocabulary ↔ data model) becomes a team asset embedded in the ontology, not a personal asset held by individual analysts. This requires deliberate knowledge externalization.
- Roles are created around problems (shared ontology doesn't exist → Ontology Steward needed) and dissolved when problems are solved (ontology is stable and AI-maintained → Ontology Steward role adapts or dissolves).
- Performance: measured on insight impact (did this lead to a decision?) and ontology quality (are questions being answered faster over time?), not on reports delivered.
- Psychological safety: analysts need to feel safe experimenting with AI tools without fear of "being replaced." Frame the transformation explicitly: AI handles mechanics, analysts handle meaning. Make that real, not rhetorical. What gets harder deserves honest acknowledgment.

</details>

---

## 9. AI-First Design Decisions

### AI model per value stream

#### Van bedrijfsvraag naar bruikbaar inzicht

- ☐ **AI as decision support** — human decides, AI informs (co-pilot)
- ☑ **Human-in-the-loop** — AI executes, human approves at key moments
- ☐ **Fully autonomous** — AI executes and decides within defined boundaries

**Rationale:** For standard question types, AI generates the v0 report; a human (analyst or business stakeholder) confirms and deploys. For complex questions, AI assists but the analyst leads. Fully autonomous is the trajectory for high-volume recurring reports (regulatory, operational dashboards) — but not the starting point.

### Data & feedback loop design

#### Van bedrijfsvraag naar bruikbaar inzicht

- **What data does AI need?** The shared Acme BV data ontology (business concepts ↔ data model), historical question-to-report mappings (to learn patterns), report usage data (to improve relevance), Databricks table metadata and documentation.
- **Where does that data come from today?** It lives in analysts' heads. It is not documented, not structured, not machine-readable. Building the ontology is the first prerequisite.
- **Decisions currently made on intuition that could become data-driven:** Which questions recur most? Which reports are actually used? Which data sources are most-queried? Which analysts are bottlenecks vs. which are underutilized? All currently invisible.
- **How does the system learn and improve?** Usage data → ontology refinement. Feedback on v0 reports → template improvement. Recurrence patterns → proactive pre-generation.
- **Feedback loops to build:** Report usage instrumentation (Power BI) → monthly review → ontology update cycle → template library maintenance.

### Design principles for the new organization

> **Valkuil 12 (Vandamme)**: veranderingsprojecten werken te vaak langs elkaar heen of tegen elkaar. Werk steeds gelaagd — inbedding op meerdere sporen tegelijk. Wie weet van dit initiatief? Wie moet dit weten? Hoe verbindt dit met andere lopende trajecten?

**Principles for this transformation:**

- **Inverse Conway Maneuver:** deliberately design team communication structure to produce AI-native insight delivery — not to replicate the current translator-mediated handoff chain. The team boundary problem is the architecture problem.
- **Role fluidity:** every role in the new design has a scope, a term, and a dissolution criterion. The Ontology Steward role exists until the ontology is stable. The "translator analyst" role dissolves when the shared semantic layer exists and AI intake works.
- **Communication over coordination:** eliminate roles whose job is to coordinate the gap between business and data. Close the gap instead — through ontology, AI intake, and embedded business presence.
- **Viability over agility:** do not eliminate junior analyst roles faster than the organization can absorb the change. The training challenge (Databricks + Power BI + Git adoption) is a signal that capability development must parallel AI deployment — not follow it.
- **Feedback loops are structural, not cultural:** do not rely on goodwill to get feedback from business stakeholders. Instrument it. Make it automatic. If it's not designed, it won't happen.
- **Wrong game test:** this transformation is not about producing the same reports faster and cheaper. It is about enabling business stakeholders to ask better questions, get answers faster, and make more informed operational decisions. If the KPI is "analyst FTE reduction," we are playing the wrong game.

---

# PART II: Probe Design
*(Complex domain — Probe → Sense → Respond)*

*You cannot plan an organizational transformation. What follows is not a plan — it is a set of hypotheses, experiments, and sensing mechanisms. Treat every section here as something to observe and update, not execute and check off.*

> **Valkuil 1 (Vandamme)**: verandermanagers zijn goed in staat om menselijkheid plat te slaan met een plan. Een plan geeft houvast, maar blokkeert leren. In het complexe domein kies je voor experimenteren, samen exploreren, niet-weten en iets nieuws laten ontstaan. Wat volgt is geen plan — het is een set hypothesen.

---

## 10. Target Attractor

*Not a plan. A direction.*

> **Valkuil 9 (Vandamme)**: vage, breed geformuleerde idealen werken niet. Vertaal de richting naar iets concreets, meetbaars en positief geformuleerd. Niet "minder bureaucratie" maar "een team dat een klantenvraag van begin tot eind beantwoordt zonder handoff."

**Target attractor (hypothesis):**

> *A Acme BV business stakeholder can get a first answer to a standard data question within 2 hours — by themselves, without scheduling a meeting or waiting for an analyst. Analysts spend the majority of their time on complex, novel analytical work that AI cannot yet do. Every delivered insight has a visible connection to an operational decision.*

### AI-Native Value Stream (hypothesis)

| New Step | Name | Goal | What changes? | Roles | Impact on other VS's | Notes |
|----------|------|------|---------------|-------|----------------------|-------|
| 1 | AI-assisted intake | Business question is well-specified before any analyst is involved | Business stakeholder self-serves through structured interface | Business stakeholder + AI | Reduces analyst queue across all question types | Requires shared ontology to exist first |
| 2 | Automated v0 generation | First-draft report generated from well-specified question | AI queries Databricks, generates Power BI v0 | AI + Databricks | Frees analyst from standard build work | Standard question types only in phase 1 |
| 3 | Insight curation | Analyst (or business stakeholder) refines v0 to correct answer | Human judgment applied to AI output | Analyst (curator role) | Raises analyst ceiling — complexity, not volume | Role requires different skills than current translator role |
| 4 | Gebruik & feedback (designed) | Insight used, decision made, feedback returns to system | Instrumented reports, structured feedback, ontology update cycle | Business stakeholder + Analyst | Improves all future question quality | The loop that currently doesn't exist |

### Guiding principles for this attractor

- Standard questions should not require analyst mediation
- Analyst expertise should be applied to insight quality, not report mechanics
- Every report has a feedback path back to the system
- The ontology grows continuously — it is never "done"
- AI handles mechanics; humans handle meaning

---

## 11. Safe-to-Fail Probes

> **Valkuil 8 (Vandamme)**: begin niet met de mensen die het meeste weerstand bieden. Begin met de gemakkelijkste mensen — maak ze tot ambassadeurs, laat het ripple effect zijn werk doen.

### Probe 1 — AI-Assisted Intake

| | |
|---|---|
| **Hypothesis** | We believe that if we give business stakeholders an AI-assisted intake form (structured question template + ontology prompts), we will observe that 60–70% of questions arrive to the data team already well-specified — without an intake meeting. This will tell us that the translation bottleneck is solvable without analyst mediation. |
| **Safe-to-fail boundary** | 4 weeks. One business unit (the one most motivated to participate). One analyst partially freed from intake. If it fails: revert to current intake, learn what was missing from the form. Maximum cost: 4 weeks of one analyst's partial attention. |
| **Sensing signal** | Analyst can start building within 30 minutes of receiving a question, without a clarification call. Business stakeholder reports: "the form helped me think through what I actually needed." |
| **Amplifier** | If it works: extend to 3 business units. Refine the form based on what types of questions still need clarification. Begin building the formal ontology from the patterns that emerge. |
| **Dampener** | If the form creates more friction than it solves (stakeholders abandon it, questions become worse, analysts spend more time re-clarifying): retire the form, analyze what failed, redesign or drop. |

### Probe 2 — AI-Generated First Draft Report

| | |
|---|---|
| **Hypothesis** | We believe that if we use an AI coding assistant (in Databricks) to generate a first-draft Power BI report from a well-specified question, we will observe that the analyst's build time for standard report types drops by at least 50% and the business stakeholder says "this is going in the right direction" in the first review. This will tell us that automated draft generation is viable and that the bottleneck is question quality, not build capacity. |
| **Safe-to-fail boundary** | 3 standard report types. 1 analyst as curator. 6 weeks. If AI-generated drafts require more rework than starting from scratch: stop, analyze why (was the spec unclear? was the data model not documented? was the AI output quality insufficient?), and redesign. |
| **Sensing signal** | Business stakeholder in first review says "yes, this is roughly right — I can give feedback from here" (not "this is completely wrong, start over"). Analyst reports less time spent on layout and formatting, more time on insight quality. |
| **Amplifier** | Expand to 5–8 report types. Build a template library from the successful patterns. Reduce analyst review time as confidence in AI output grows. |
| **Dampener** | If business stakeholders consistently say "this is wrong" in first review: the spec input was insufficient. Go back to Probe 1 and improve question quality before trying draft generation again. Do not blame the AI. |

### Probe 3 — Shared Business Ontology Sprint

| | |
|---|---|
| **Hypothesis** | We believe that if we run a 2-day structured session with 3 business + 3 data people to map the top 10 most common business questions to the Databricks data model, we will observe that subsequent question intake is faster, clarification sessions drop significantly, and analysts report higher confidence in their data specs. This will tell us that the translation bottleneck is a shared language problem — and that shared language can be built deliberately. |
| **Safe-to-fail boundary** | 2 days of 6 people's time. Output: a documented ontology for top 10 questions. If the ontology produced is not used in practice after 4 weeks: it was either too complex, not in the right format, or not trusted. Interview participants to understand why and redesign. |
| **Sensing signal** | After the sprint: analysts use the ontology document as a reference in the next 10 questions. Business stakeholders use terms from the ontology in their intake questions. Clarification calls drop. |
| **Amplifier** | Extend the ontology to top 25 questions. Embed it in the AI intake form. Use it as training context for the AI-assisted query generation. |
| **Dampener** | If the ontology is produced but not used: the format is wrong (too technical? too wordy?). Simplify to a one-page visual. If it's actively resisted ("that's not how we talk about it"): the session didn't include the right people. Re-run with different participants. |

### Probe 4 — Feedback Loop Instrumentation

| | |
|---|---|
| **Hypothesis** | We believe that if we instrument Power BI reports with a lightweight feedback mechanism (one-click "this answered my question" / "this didn't help" + one-line comment), we will observe that within 8 weeks we have data on which report types are valuable and which are unused — and that this data changes what the data team prioritizes. This will tell us that usage visibility alone changes team behavior toward outcome-orientation. |
| **Safe-to-fail boundary** | Instrument 5 existing reports. 8 weeks of observation. If zero feedback is collected: the mechanism is too friction-heavy or stakeholders don't see the value. Redesign the feedback UX or add a brief prompt from the analyst. |
| **Sensing signal** | At least 30% of report views generate a feedback signal within 8 weeks. The data team can name which of their 5 reports is most and least valued — and why. |
| **Amplifier** | Extend to all reports. Add usage analytics (opens, filter usage, time spent). Create a monthly "insight review" where the team reviews what's being used and what isn't. Retire or redesign low-usage reports. |
| **Dampener** | If feedback is collected but not acted on by the team: the loop is open at the team level, not the tool level. Address team practice first. If feedback is negative across all reports: the problem is upstream (question quality, report relevance) — return to Probes 1–3. |

---

## 12. Sensing Cadence

> **Valkuil 13 (Vandamme)**: fundamentele veranderingen zijn decenniawerk. Calibreer de verwachtingen over tijdshorizon expliciet.

- **Frequency:** 
  - Weekly: probe signal check (is anything failing badly? amplify or dampen?)
  - Monthly: team retro on insight value (what did we deliver? what changed? what feedback did we get?)
  - Quarterly: ontology review + report library audit (what's still relevant? what should be retired?)

- **Vantage points:**
  - Frontline: analysts (are they spending time differently? is AI helping or creating new friction?)
  - Business stakeholders (is their experience changing? are they getting answers faster?)
  - Leadership (are operational decisions visibly better-informed?)
  - Data: usage analytics, feedback scores, question-to-delivery lead time

- **Signals of progress:**
  - Standard question lead time dropping (question to first usable report)
  - Analyst retro sticky notes shifting from "waiting for data" and "explaining the same thing again" toward "interesting analysis" and "complex problem solved"
  - Business stakeholders formulating better questions (more specific, more actionable)
  - Ontology growing through use, not just through design sessions

- **Signals of failure:**
  - Analysts spending more time on AI prompt engineering than on actual analysis (new form of the same waste)
  - Business stakeholders bypassing the new intake and going back to informal "can you just quickly..." requests
  - AI-generated reports that are technically correct but not actually useful (the question was wrong; the garbage-in problem at AI speed)
  - Role calcification: new "AI coordinator" roles appearing that manage the AI tools rather than solve the business problem

- **Decision trigger:**
  - Amplify: a probe shows consistent positive signal for 3+ weeks → expand scope, invest more
  - Dampen: a probe shows consistent negative signal for 2+ weeks → reduce scope, analyze root cause
  - Pivot: a probe reveals a different underlying problem than expected → redesign the probe, don't double down

---

## 13. Amplifiers & Dampeners

*To be updated as probes run. Initial hypotheses only.*

### Amplify

*(Things that are working — increase, spread, invest)*

- If AI-assisted intake reduces clarification calls: spread to more business units, invest in ontology quality
- If AI-generated first drafts are accepted by stakeholders: expand to more report types, reduce analyst review overhead
- If feedback instrumentation generates signal: invest in usage analytics infrastructure, build monthly review practice

### Dampen

*(Things that are failing or creating unexpected harm — reduce, stop, redesign)*

- If AI intake creates more friction than it removes: revert to structured (but human-mediated) intake template, and redesign from observed failures
- If AI-generated reports require more rework than manual builds: stop draft generation for that report type, investigate spec quality upstream
- If the ontology sprint output is not used in practice: simplify the format, re-run with different participants or different scope

---

## 14. Expected Emergence

*Not a prediction — a hypothesis. Update as you observe.*

**What might disappear:**
- Roles: "translator analyst" as a distinct mode of work (not the person — the function)
- Meetings: intake clarification calls, multi-round validation meetings
- Processes: informal "can you quickly..." request patterns

**What might change:**
- Roles: analyst role evolves toward insight curator, ontology steward, complex analytics
- Responsibilities: business stakeholders take more ownership of question quality and feedback
- Team structure: possible move from A2 toward A3 — teams becoming more self-contained per value stream
- Skills / capabilities needed: AI orchestration, ontology design, insight curation (vs. report building)

**What is likely to remain:**
- The need for domain expertise in the data team (Acme BV data model is complex and changes)
- Regulatory reporting requirements and the compliance work that supports them
- Complex analytical questions that require genuine human judgment and domain knowledge
- The fundamentally collaborative nature of insight work — AI does not remove the need for shared sense-making

**Unexpected effects to watch for:**
- Business stakeholders formulating questions that AI can answer but that they don't actually need
- Overproduction of insights that aren't connected to decisions (AI speed without purpose)
- Analysts feeling deskilled or sidelined if the framing is not handled well
- The ontology becoming a political document — business units disagreeing on definitions

**Collaboration & learning signals**

- Are people collaborating more — or is AI increasing isolation and individual task execution? *Watch: does the shared ontology sprint become a recurring practice, or a one-off?*
- Are people learning together — or is AI reducing the moments where shared sense-making happens? *Watch: do analysts and business stakeholders still sit together, or do they now only meet at the "feedback" step?*
- Is the work feeling more meaningful? *Watch: retro output. Are analysts saying "I solved something interesting" or "I validated AI output all day"?*
- What are people writing on retro sticky notes? *Baseline this now. Compare in 6 months.*

**Social distance signals**

- Are AI-mediated interactions replacing human ones where proximity matters? *Risk: business stakeholder formulates question to AI, never talks to an analyst, gets an answer that is technically correct but misses the point. Nobody notices because there was no human touchpoint.*
- Are people less accountable for decisions because "the algorithm decided"? *Risk: "the report said so" replacing "I analyzed this and concluded." Watch for accountability diffusion.*
- Is communication becoming more transactional? *Watch: are analysts and business stakeholders building working relationships — or are they becoming anonymous to each other?*

**Role fluidity signals**

- Is the "translator analyst" function dissolving as ontology + AI take over — or is it calcifying into a new "AI intake manager" role? *Watch for role preservation instinct disguised as specialization.*
- Is the Ontology Steward role temporary (solving a real problem and designed to hand off) or permanent (maintaining its own necessity)? *The dissolution criterion should be explicit from day one.*
- Is role fluidity creating anxiety? *It will. What is in place to support it? Training, honest conversation, clear framing of what the transformation is for. Not rhetorical reassurance.*

**Viability check**

| Dimension | Risk | Mitigation |
|-----------|------|------------|
| Talent pipeline | If AI handles standard query writing, junior analysts don't develop those skills — and may lack the foundation for complex analytics | Keep a deliberate learning path that includes manual query building, even if AI assists. Pair junior and senior analysts on complex questions. |
| Maintainability | AI-generated notebooks and reports may be difficult to maintain if the analyst who reviewed them leaves | Code review standards for AI-generated output. Documentation requirements. Avoid "black box" AI output in critical paths. |
| Organizational identity | Acme BV's data team has an identity as expert problem-solvers. If AI handles the visible "clever" work, that identity needs to migrate to insight curation and domain expertise. | Explicitly name the new expertise. Celebrate ontology quality and insight impact, not report count. |
| SCARF threats | **Status**: analysts may feel their expertise is devalued. **Certainty**: the pace of AI change is disorienting. **Autonomy**: new AI-assisted workflows may feel prescriptive. **Relatedness**: fewer human touchpoints may reduce team cohesion. **Fairness**: if some analysts get access to AI tools first, unequal experience creates friction. | Address all five explicitly. Status: reframe expertise toward curation. Certainty: be honest about what's unknown. Autonomy: involve analysts in tool selection. Relatedness: protect team rituals. Fairness: phase rollout carefully. |

*Agility is a component of viability — not the goal. Calibration over acceleration.*

---

## 15. Summary

*To be completed as the transformation runs — observations, not predictions.*

- Biggest eliminations (observed, not predicted): *[fill in after probes run]*
- Biggest accelerations (observed, not predicted): *[fill in after probes run]*
- Biggest structural changes (observed, not predicted): *[fill in after probes run]*
- Probes still running: *[fill in after probes run]*
- New bottlenecks emerging: *[fill in after probes run]*

---

## 16. Key Insight

> *To be written after the transformation has run. What is the one sentence that summarizes what actually happened?*

---

## References

| Source | Author(s) | Concept used |
|---|---|---|
| *The Toyota Production System* | Taiichi Ohno | 8 Wastes, flow thinking |
| *Lean Thinking* | James Womack & Daniel Jones | Value stream mapping, outside-in |
| *The Goal* | Eliyahu Goldratt | Theory of Constraints — translation bottleneck as system constraint |
| *Working Backwards* | Colin Bryar & Bill Carr (Amazon) | Greenfield-first design |
| *Wardley Mapping* | Simon Wardley | Commodity vs. differentiation (SQL writing → commodity; domain ontology → Custom Built) |
| *Cynefin framework* | Dave Snowden | Complicated (Part I) vs. Complex (Part II); safe-to-fail probes |
| *How Do Committees Invent?* | Melvin Conway (1968) | Communication structure → system design; handoffs as org self-portrait |
| *Org Topologies™* | Krivitsky & Flemm | A2 archetype diagnosis; path toward A3/B2 |
| *Creating Agile Organizations / DAO* | Ramos & Pavlichenko | Operating model: structure, processes & integration, people practices |
| *A Map for Agentic Transformation* | Jurgen Appelo (2025) | Human-in-the-loop model; Zone of Contradiction risk |
| *Forget Downsizing. Try Widesizing.* | Jurgen Appelo (2026) | Wrong game test: efficiency ≠ competitive advantage; new bottleneck = ideas and skills |
| *Sociocracy 3.0* | Bockelbrink, Priest, David | Roles as solution patterns; dissolution criteria |
| *De Corporate Activist* | Rudy Vandamme | Valkuilen 1, 3, 6, 8, 9, 12, 13, 14 |
| *SCARF model* | David Rock | Status, Certainty, Autonomy, Relatedness, Fairness — viability check |

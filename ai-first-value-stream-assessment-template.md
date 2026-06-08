# AI-First Value Stream Assessment

> **Outside-In Principle:** Every value stream is defined from the customer's perspective inward — never from internal processes outward. We start with *what the customer needs*, trace back through *how that value is created*, and only then ask *how we are organized*. This lens applies throughout every section of this assessment.

> **Domain Awareness (Cynefin — Dave Snowden):** This assessment operates across two fundamentally different domains. **Part I** (Sections 0–9) is *Complicated* — it requires expertise and structured analysis, but the answers are knowable. **Part II** (Sections 10–16) is *Complex* — the transformation itself is emergent, non-linear, and unpredictable. In Complex, you do not execute a plan. You design safe-to-fail probes, observe what emerges, and respond. Treat Part I as a landscape map. Treat Part II as a set of hypotheses.

---

# PART I: Landscape Mapping
*(Complicated domain — Sense → Analyze → Respond)*

> **Recommended two-pass approach:**
> **Pass 1 — Greenfield first (Sections 8–9):** Before analyzing the current state, complete the greenfield and design principles sections. This prevents the current state from anchoring your thinking and ensures you design from customer value, not from internal inertia.
> **Pass 2 — Current state (Sections 0–7):** With the greenfield in mind, map and analyze what actually exists. The delta between greenfield and current state becomes the transformation agenda.

---

## 0. Strategic Orientation

- **What is the organization's purpose (really)?**
- **What value do we deliver (concretely)?**
- **For whom?**
- **Which value streams exist today?** *(names only — detail follows in Section 2)*

> **Valkuil 3 (Vandamme)**: als de 'Why' van deze transformatie ontbreekt of alleen een opgelegde opdracht is, stop dan hier. Een verandering zonder hogere doelen motiveert niemand — ook niet met de beste tools. De pijn noch de droom is dan voelbaar. Eerst de Why, dan de How.

### What people love about working here

*Before mapping processes, establish what is worth preserving — and amplifying. The transformation should give people more of this, not less.*

- What do people in this organization genuinely enjoy about their work? *(Ask. Look at retro output. Listen.)*
- Where does real collaboration happen — and what enables it?
- Where do people learn together — formally or informally?
- What work feels meaningful to the people doing it?
- What does the current context prevent people from doing that they would love to do?

### Priority & Focus

- What is the #1 value stream of this organization?
- Which value streams are working against each other?
- How much % of capacity is dedicated to that value stream?
- What would happen if we only kept the top 1-2 value streams?

---

## 1. Context & Constraints

> **Valkuil 6 (Vandamme)**: begincondities die niet helder zijn, zijn de meest onderschatte oorzaak van mislukte transformaties. Mandaat, tijd en middelen moeten expliciet zijn — niet aangenomen. Beantwoord onderstaande vragen eerlijk voor je verdergaat.

- **Organization / Domain:**
- **Scope of analysis:** *(what is in scope)*
- **Out of scope:** *(what are we explicitly not analyzing)*
- **Starting point:** *(trigger / problem)*
- **Mandate:** *(who has given the go-ahead, and for what exactly? Is this explicit or assumed?)*
- **AI ambition / desired future state:** *(what does the organization want to become?)*
- **Current tech & data landscape:** *(existing tools, data quality, AI maturity)*
- **Constraints:** *(budget, regulatory, culture, timeline)*
- **AI capability evolution:** *(Where does this organization sit overall? What are they building that will be commodity within 2 years? Which capabilities in their industry are still Genesis or Custom Built — and represent a window of differentiation?)*

---

## 2. Value Stream Mapping (Outside-In)

Describe the end-to-end stream of value creation.

### [Value Stream]

| Step | Name | Goal | Input | Output | Roles Involved | % Wait Time / Lead Time | Type of Work (*) | Link to Strategic Goal (*) |
|------|------|------|-------|--------|-----------------|-------------------------|------------------|---------------------------|
| 1    |      |      |       |        |                 |                         |                  |                           |
| 2    |      |      |       |        |                 |                         |                  |                           |
| ...  |      |      |       |        |                 |                         |                  |                

**Legend (*)**
<details>
<table>
<tr>
<td valign="top">
**Type of Work**
| **Type**       | **Link to Strategic Goal** |
|----------------|----------------------------|
| Value creation | direct                     |
| Coordination   | indirect                   |
| Control        | unclear                    |
| Waste          | none                       |
</td>
<td valign="top">
**8 Wastes in Lean — Mnemonic: TIMWOOD (+ Talent)**
| Waste              | Meaning                                                        |
|--------------------|----------------------------------------------------------------|
| **Transport**      | Unnecessary movement of products or materials.                 |
| **Inventory**      | Excess inventory that costs money and space.                   |
| **Motion**         | Unnecessary movement of people (walking, searching, reaching). |
| **Waiting**        | Time lost waiting on people, machines, or information.         |
| **Overproduction** | Producing more than needed or too early.                       |
| **Overprocessing** | Doing more than the customer asks or adding extra steps.       |
| **Defects**        | Rework, rejects, or errors that cost time and money.           |
| **Unused Talent**  | Not making optimal use of employees or ignoring their ideas.   |
</td>
</tr>
</table>
</details>

---

## 3. Work Deconstruction per Step

*While filling in this section, watch for signals of misalignment:*

<details>
<summary>Signals of misalignment</summary>

- Multitasking / context switching
- Unclear priorities
- Conflicting goals
- Much parallel work without clear impact
- Activity without clear value
- **Role proliferation**: roles that coordinate a problem rather than solve it; roles whose existence depends on the problem persisting

</details>

> **Conway's Law**: What you observe in this value stream is not a neutral process — it is the organization's communication structure made visible. Every handoff, approval gate, and role boundary is the org's self-portrait. The system design mirrors the org design, whether intended or not.

### [Value Stream]

#### [Step]

- What really happens here?
- Why does this step exist?
- What is the output (concretely)?
- Who is involved and why?
- Where is there friction or delay?
- **Role audit**: for each role involved — *what problem was this role created to solve? Is that problem solved, or is the role maintaining it?*

---

## 4. Value Stream Evaluation

*Answer these questions now that you have a complete picture of the value stream.*

### Critical questions

- If we were starting over today, would we rebuild this value stream?
- Does this value stream directly contribute to the organizational goal?
- Is this value stream a core activity or a supporting one?
- Did this value stream arise out of necessity or grow historically?
- Which other value streams influence this one?
- Is there overlap or duplication with other value streams?
- Is this work done because it must be, or because it has always been this way?

### Forcing choices

- If this value stream stops tomorrow:
  - What is the real impact on the customer?
  - What is the real impact on revenue?
- What would a competitor do if they were starting from scratch today?
- If we had to cut 50% of this value stream — what absolutely remains?
- Which parts of this value stream exist only to manage internal complexity?

### Conclusion

- ☐ This value stream is fundamentally necessary → *continue to Section 5*
- ☐ This value stream needs to be reconsidered → *continue to Section 5 with critical lens*
- ☐ This value stream can disappear / merge → *skip Sections 5–7, document decision in Section 7; still complete Sections 8–9 for greenfield potential*

---

## 5. Brutal Step Analysis

*For each step in this value stream, answer without filtering:*

### [Value Stream]

#### [Step]

- If we eliminate this step tomorrow, what actually breaks?
- Who would miss it?
- Is this necessary or has it grown historically?
- Is this step value creation or analysis/coordination of work?
- Is this step value creation or managing of work? (e.g. managing dependencies)
- Is this a symptom of another problem?
- Would a customer pay for this?
- Is this here because other steps are failing?

**Conclusion:** Mark step for [Keep / Uncertain / Eliminate]

### Org Topologies — current archetype self-assessment

*Done once, at organization level — after completing the step analysis for all value streams. This is not per step or per value stream. It synthesizes what you observed into a structural diagnosis.*

*Where does this organization currently sit on the Org Topologies map? This determines how much structural change is needed before AI-first transformation can take hold.*

**Two axes:**
- **Team fluency** (X): how cross-functional and autonomous are teams? Can a team deliver a complete slice of customer value independently?
- **Product fluency** (Y): how customer-centric is the organization? Do teams understand the problem space, or just their piece of the process?

**Seven archetypes — mark the one that fits best:**

| | Archetype | Optimizing for | Team fluency | Product fluency |
|---|---|---|---|---|
| ☐ | **Y0** — Intertwined Projects & Lonely Workers | Resource utilization / cost centers | Very low | Very low |
| ☐ | **Y1** — Narrow-Specialized Teams | Narrow ownership | Low | Low |
| ☐ | **A2** — Hopeful Yet Entangled Teams | Quick wins & conflict avoidance | Medium | Low–medium |
| ☐ | **A3** — Proud & Autonomous Teams | Feature ownership & team throughput | High | Medium |
| ☐ | **B2** — Dependent Teams tied to Customer Journeys | Managing dependencies | High | High |
| ☐ | **B3** — Interdependent Teams collaborating on Customer Journey | Business goals & customer experience | Very high | Very high |
| ☐ | **C3** — Holistic Product Development | Adaptivity in learning & delivery | Full | Full |

**Current archetype:** ______

**Notes / nuance** *(most organizations are hybrids — describe where the tension is)*:

**Implication for AI-first transformation:**
- Y0–Y1: significant structural change needed before agentic AI can add value; fragmented work will fragment AI output
- A2–A3: AI can augment teams locally, but org-level AI integration hits structural roadblocks
- B2–B3: ready for AI-native value stream design; team structure supports agentic autonomy
- C3: AI as co-governing participant is structurally possible; no ceiling on agentic integration

**What structural shift is needed to reach the minimum viable archetype for this transformation?**

---

## 6. Steps Kept

### [Value Stream]

#### Lean analysis

*For each kept step:*

##### [Step]

- Goal achieved / not achieved / undetermined?
- Input sufficient / overkill / undetermined?
- Output sufficiently supports goal / overkill / undetermined?
- Roles involved sufficient / overkill / undetermined?

#### AI Impact Analysis

*For each kept step:*

##### [Step]

**Can AI:**
- Take over this step?
- Accelerate it?
- Eliminate it?

**Where does the AI capability for this step sit on the evolution curve?**

| | Today | In 2–3 years |
|---|---|---|
| ☐ Genesis | | |
| ☐ Custom Built | | |
| ☐ Product | | |
| ☐ Commodity | | |

**Implication:** ☐ Build — ☐ Buy — ☐ Wait

**How:**
- How concretely?
- What changes upstream (before)?
- What changes downstream (after)?
- New risks / bottlenecks?

---

## 7. Decision per Step

### [Value Stream]

#### [Step]

- Action:
  - ☐ Keep
  - ☐ Simplify
  - ☐ Automate
  - ☐ Eliminate
- Rationale
  - Why this choice?
  - What happens if we do NOT do this?

---

## 8. Greenfield — AI-Native Possibilities

*Stop looking at what exists. Ask what you would build if AI were a native capability from day one.*

> **Valkuil 14 (Vandamme)**: als je de transformatie kadrert als het oplossen van een probleem, is de status quo je eindpunt. Dit is een ontwerpfout. Kadreer het als ontwikkeling — niet "we lossen X op", maar "we bouwen de organisatie die Y mogelijk maakt." De stip aan de horizon is een mogelijkheid, niet een herstel.

> **Communication structure first** (Conway): before asking "what is the architecture?", ask "who needs to talk to whom, about what, how often?" In the AI-native design, some of those conversations will be human↔AI or AI↔AI. Design communication structure — system architecture follows. Do not anchor to current architecture artifacts; they are incomplete by definition and always in flux.

> **Roles as solution patterns** (S3): in this greenfield view, every role should be answerable to: *what problem does this role solve, and when will it no longer be needed?* Roles with no dissolution criteria are identities, not solutions.

### Per value stream: the radical question

#### [Value Stream]

- If you built this value stream from scratch today with AI as a core capability — what would you radically change?
- Which steps would disappear entirely because AI makes them unnecessary?
- Which steps would emerge that don't exist today?
- What is the most radical version of this value stream with AI?
- What does the communication structure look like? (human↔human, human↔AI, AI↔AI)
- Which roles survive? Which are created? Which are dissolved when their problem is solved?

### New value streams that become possible

*AI-first often unlocks value streams that were previously too expensive, too slow, or too complex to exist.*

- What could you offer customers that you can't today?
- What decisions currently made on intuition could become continuous and automated?
- What feedback loops could you close that are currently open?

### Operating model design (DAO framework)

*The greenfield value stream needs a new operating model. Use these three domains as a design scaffold — not a checklist. Answer only what is relevant.*

<details>
<summary>1. Organization Structure</summary>

- How is the product group structured around value streams (not functions)?
- Where are dependencies between value streams — and how are they addressed by design?
- What is the role of shared services in the AI-native model — and do they need to exist?
- How large are teams? What is the decision authority within a team?

</details>

<details>
<summary>2. Processes & Integration</summary>

- How does coordination happen across teams — by design, not by management?
- What does flow efficiency look like? Where do queues form, and how are they eliminated?
- What types of adaptability does the organization need? (operational: respond fast / structural: reorganize / strategic: reorient)
- What feedback loops close automatically vs. requiring human judgment?

</details>

<details>
<summary>3. People Practices</summary>

- How do people develop skills in a world where AI handles a growing share of execution?
- How are roles created, assigned, and dissolved? (Are they solution patterns or career identities?)
- How does performance work when outcomes are AI-augmented? What is measured — activity or value?
- What does psychological safety need to look like for people to experiment with AI in their work?

</details>

---

## 9. AI-First Design Decisions

*Building on the greenfield possibilities from Section 8: fix the design principles before moving into probe design. These choices shape everything in Part II.*

### AI model per value stream

*For each value stream, choose the primary AI model:*

#### [Value Stream]

- ☐ **AI as decision support** — human decides, AI informs (co-pilot)
- ☐ **Human-in-the-loop** — AI executes, human approves at key moments
- ☐ **Fully autonomous** — AI executes and decides within defined boundaries

Rationale:

### Data & feedback loop design

*AI-first organizations are data-driven by design. Map this explicitly.*

#### [Value Stream]

- What data does AI need to operate in this value stream?
- Where does that data come from today — and is it reliable?
- What decisions are currently made on intuition that could become data-driven?
- How does the system learn and improve over time?
- What feedback loops need to be built or closed?

### Design principles for the new organization

*What principles will guide every design decision in Sections 10–16?*

> **Valkuil 12 (Vandamme)**: veranderingsprojecten werken te vaak langs elkaar heen of tegen elkaar. Werk steeds gelaagd — inbedding op meerdere sporen tegelijk. Wie weet van dit initiatief? Wie moet dit weten? Hoe verbindt dit met andere lopende trajecten?

Suggested principles to consider (delete or adapt):

- **Inverse Conway Maneuver**: deliberately design teams and communication structures to produce the AI-native architecture we want — not to replicate the one we have.
- **Role fluidity**: roles are solution patterns, not identities. Every role has a scope, a term, and a dissolution criterion.
- **Communication over coordination**: reduce coordination roles; increase direct communication between value-creating actors (human and AI).
- **Viability over agility**: optimize for long-term sustainability — talent pipeline, maintainability, organizational coherence — not just short-term speed.

Additional principles specific to this organization:

-

---

# PART II: Probe Design
*(Complex domain — Probe → Sense → Respond)*

*You cannot plan an organizational transformation. What follows is not a plan — it is a set of hypotheses, experiments, and sensing mechanisms. Treat every section here as something to observe and update, not execute and check off.*

> **Valkuil 1 (Vandamme)**: verandermanagers zijn goed in staat om menselijkheid plat te slaan met een plan. Een plan geeft houvast, maar blokkeert leren. In het complexe domein kies je voor experimenteren, samen exploreren, niet-weten en iets nieuws laten ontstaan. Wat volgt is geen plan — het is een set hypothesen.

---

## 10. Target Attractor

*Not a plan. A direction. The attractor is what you move toward — not what you execute. It will change as you learn.*

> **Valkuil 9 (Vandamme)**: vage, breed geformuleerde idealen werken niet ("we willen menselijkere organisaties"). Vertaal de richting naar iets concreets, meetbaars en positief geformuleerd. Niet "minder bureaucratie" maar "een team dat een klantenvraag van begin tot eind beantwoordt zonder handoff." De attractor moet voelbaar zijn, niet alleen begrijpbaar.

### AI-Native Value Streams (hypothesis)

| New Step | Name | Goal | What changes? | Roles | Impact on other VS's | New dependencies | Notes |
|----------|------|------|---------------|-------|----------------------|------------------|-------|
| 1        |      |      |               |       |                      |                  |       |
| 2        |      |      |               |       |                      |                  |       |
| 3        |      |      |               |       |                      |                  |       |

### Guiding principles for this attractor

*What principles shape the space without dictating the path? These are your enabling constraints.*

-

---

## 11. Safe-to-Fail Probes

*Design experiments that can fail without damaging the organization. Run them in parallel. Observe what emerges.*

> **Valkuil 8 (Vandamme)**: begin niet met de mensen die het meeste weerstand bieden. Begin met de gemakkelijkste mensen — maak ze tot ambassadeurs, laat het ripple effect zijn werk doen. Stop ermee je te fixeren op wie moeilijk meegaat aan een beweging.

### Probe

| | |
|---|---|
| **Hypothesis** | We believe that if we [do X], we will observe [Y], which will tell us [Z] |
| **Safe-to-fail boundary** | Maximum cost / impact if this fails: |
| **Sensing signal** | What does "working" look like in practice? |
| **Amplifier** | If it works — how do we do more of it? |
| **Dampener** | If it fails — how do we reduce or stop it quickly? |

### Probe

| | |
|---|---|
| **Hypothesis** | We believe that if we [do X], we will observe [Y], which will tell us [Z] |
| **Safe-to-fail boundary** | Maximum cost / impact if this fails: |
| **Sensing signal** | What does "working" look like in practice? |
| **Amplifier** | If it works — how do we do more of it? |
| **Dampener** | If it fails — how do we reduce or stop it quickly? |

---

## 12. Sensing Cadence

*In Complex, you cannot manage what you cannot observe. Define your sensing rhythm before you start.*

> **Valkuil 13 (Vandamme)**: fundamentele veranderingen zijn decenniawerk. Je kunt context bouwen en een kwaliteitsvol proces beloven — geen garanties over tempo. Snel willen gaan is soms meer en sneller iets bereiken met innerlijke rust. Calibreer de verwachtingen over tijdshorizon expliciet.

- **Frequency:** How often do we check in on what's emerging?
- **Vantage points:** Who observes — and from where? *(leadership / frontline / customers / data)*
- **Signals of progress:** What tells us something is working?
- **Signals of failure:** What tells us something is failing or creating unexpected side effects?
- **Decision trigger:** When do we amplify? When do we dampen? When do we pivot?

---

## 13. Amplifiers & Dampeners

*Based on what you observe: what do you do more of, and what do you reduce or stop?*

### Amplify

*(Things that are working — increase, spread, invest)*

-

### Dampen

*(Things that are failing or creating unexpected harm — reduce, stop, redesign)*

-

---

## 14. Expected Emergence

*Not a prediction — a hypothesis about what organizational changes might emerge. Update this as you observe.*

**What might disappear:**
- Roles:
- Meetings:
- Processes:

**What might change:**
- Roles:
- Responsibilities:
- Team structure:
- Skills / capabilities needed:

**What is likely to remain:**
-

**Unexpected effects to watch for:**
-

**Collaboration & learning signals** *(the test: are people getting more of what they love, or less?)*

- Are people collaborating more — or is AI increasing isolation and individual task execution?
- Are people learning together — or is AI reducing the moments where shared sense-making happens?
- Is the work feeling more meaningful — or more transactional?
- What are people writing on retro sticky notes now, compared to before?

**Social distance signals** *(watch for the medium-distance-moral standards pattern)*

- Are AI-mediated interactions replacing human ones in places where proximity matters?
- Are people less accountable for decisions because "the algorithm decided"?
- Is communication becoming more transactional and less relational?
- Are there interactions that now have no human author — and should they?

**Role fluidity signals** *(watch for these as the transformation progresses)*

- Are roles dissolving when problems are solved — or are they calcifying?
- Are people building identity around new AI-adjacent roles (risk: same pattern, new labels)?
- Is role fluidity creating anxiety? What support is in place?
- Which roles are resisting dissolution most — and why? (What problem would re-emerge if they left?)

**Viability check** *(Is this transformation sustainable over time — not just efficient in the short term?)*

| Dimension | Risk | Mitigation |
|-----------|------|------------|
| Talent pipeline | Does replacing junior roles with AI destroy future senior capacity? | |
| Maintainability | Does AI-generated output create technical or process debt nobody can fix later? | |
| Organizational identity | Does the transformation preserve what makes this org coherent? | |
| SCARF threats | Which of Status / Certainty / Autonomy / Relatedness / Fairness are most at risk? | |

*Agility is a component of viability — not the goal. Calibration over acceleration.*

---

## 15. Summary

- Biggest eliminations (observed, not predicted):
- Biggest accelerations (observed, not predicted):
- Biggest structural changes (observed, not predicted):
- Probes still running:
- New bottlenecks emerging:

---

## 16. Key Insight

> What is the one sentence that summarizes this transformation — as it actually happened?

---

## References

### Foundational frameworks used in this assessment

| Source | Author(s) | Concept used |
|---|---|---|
| *The Toyota Production System* | Taiichi Ohno | 8 Wastes, flow thinking |
| *Lean Thinking* | James Womack & Daniel Jones | Value stream mapping, outside-in |
| *The Goal* | Eliyahu Goldratt | Theory of Constraints, anchor bottlenecks |
| *Working Backwards* | Colin Bryar & Bill Carr (Amazon) | Design from end state, work back |
| *Wardley Mapping* | Simon Wardley | Capability evolution: Genesis → Commodity |
| *Designed for Digital* | Jeanne Ross, Cynthia Beath, Martin Mocker | Org capability architecture, transition design |
| *The Second Machine Age* | Erik Brynjolfsson & Andrew McAfee | Human-AI role split, labor economics |
| *AI Transformation Playbook* | Andrew Ng | AI execution sequencing |
| *The Open Group Architecture Framework (TOGAF)* | The Open Group | Current → Target → Transition architecture |
| *Cynefin framework* | Dave Snowden (Cognitive Edge) | Domain awareness: Complex vs. Complicated; Probe → Sense → Respond; safe-to-fail; attractors |
| *How Do Committees Invent?* | Melvin Conway (1968) | Conway's Law; communication structure mirrors system design; Inverse Conway Maneuver; team flexibility over architecture artifacts |
| *Org Topologies™* | Alexey Krivitsky & Roland Flemm | 7 organizational archetypes (Y0→C3); team fluency × product fluency; structural readiness for AI-first |
| *Creating Agile Organizations / DAO* | Cesario Ramos & Ilia Pavlichenko | Operating model design: structure, processes & integration, people practices |
| *A Map for Agentic Transformation* | Jurgen Appelo (2025) | Agentic organization archetypes; coordination × control axes; Zone of Contradiction failure pattern |
| Scientific Management | Frederick W. Taylor | Root of work fragmentation, role specialization, and separation of thinking from doing — the pattern to undo |
| *Sociocracy 3.0 (S3)* | Bernhard Bockelbrink, James Priest, Liliana David | Roles as solution patterns; role fluidity; consent-based governance |
| *De Corporate Activist* | Rudy Vandamme | 9 perspectieven op verandering; 15 valkuilen in veranderingswerk; transitiecanvas; personal mastery als fundament |

### Your personal references

*(Add the books, articles, or thinkers that inform your own perspective — to make this assessment authentically yours.)*

-

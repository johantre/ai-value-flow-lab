# AI-First Transformation — Workflow Overview

Dit document illustreert hoe de drie bestanden samenwerken om van een blanco template naar een volledige AI-first analyse te gaan.

---

## De drie bouwstenen

| Bestand | Rol |
|---|---|
| `toward-ai-native-ai-first.md` | Conceptuele basis — de *waarom* en *hoe* van de methodologie |
| `AI-First Value Stream Assessment Template.md` | Blanco template — wordt ingevuld voor een specifieke organisatie |
| `AI-First Transformation Prompt.md` | System prompt — activeert Claude als AI-first consultant |

---

## Workflow

```mermaid
flowchart TD
    subgraph PREP["① Voorbereiding (lezen)"]
        direction LR
        A["📖 toward-ai-native-ai-first.md\nConceptuele basis:\nCynefin · AI maturity · Wardley\nWidesizing · Human dynamics"]
    end

    subgraph ASSESS["② Assessment invullen (jouw werk)"]
        direction TB
        B["📋 AI-First Value Stream\nAssessment Template.md\n— blanco template —"]
        C["Pass 1 — Greenfield eerst\nSecties 8–9 invullen\nUnconstrained AI-native design"]
        D["Pass 2 — Huidige staat\nSecties 0–7 invullen\nGrounded in reality"]
        E["📄 Bedrijfsnaam - AI-First Value\nStream Assessment.md\nIngevuld voor de specifieke case"]
        B --> C --> D --> E
    end

    subgraph CLAUDE["③ Analyse in Claude Web (claude.ai)"]
        direction TB
        F["🆕 Nieuwe conversatie openen"]
        G["📌 Paste als eerste bericht:\nAI-First Transformation Prompt.md\n= de system prompt / rol van Claude"]
        H["📎 Paste als tweede bericht:\nBedrijfsnaam - AI-First Value\nStream Assessment.md"]
        I{"Claude leest & oriënteert\nintern — niet getoond"}
        J["❓ Claude stelt\n3–5 clarifying questions\ngericht op lacunes & ambiguïteit"]
        K["💬 Jij antwoordt\nop de vragen"]
        F --> G --> H --> I --> J --> K
    end

    subgraph OUTPUT["④ Output van Claude"]
        direction TB
        L["🗺 A · Landscape Diagnosis\nOrg archetype · bottleneck · Conway mirror\nWardley positie · AI maturity gap"]
        M["🔍 B · Greenfield Validation\nAI-native vs AI-enhanced?\nConway traps · role proliferation risk"]
        N["🧪 C · Probe Design\n3–5 safe-to-fail experimenten\nHypothese · signaal · amplifier · dampener"]
        O["🪞 D · Honest Summary\nBlinde vlekken · kritisch oordeel\nDe ene vraag die alles bepaalt"]
    end

    A -.->|"begrip van\nde methode"| B
    PREP --> ASSESS
    ASSESS --> CLAUDE
    K --> L
    K --> M
    K --> N
    K --> O
```

---

## De twee passes — waarom die volgorde?

> Pass 1 eerst (Greenfield) voorkomt dat de huidige staat je denken verankert.
> Je ontwerpt vanuit klantwaarde — niet vanuit interne inertie.

```mermaid
flowchart LR
    P1["✦ Pass 1\nGreenfield\nSecties 8–9\nWat zou je bouwen\nals AI native is?"]
    P2["✦ Pass 2\nCurrent state\nSecties 0–7\nWat bestaat er\necht vandaag?"]
    DELTA["⟹ Delta\n= de transformatie-agenda\nAnchor transformations\nProbe candidates"]

    P1 --> P2 --> DELTA
```

---

## Cynefin — twee domeinen in één assessment

```mermaid
flowchart LR
    subgraph COMP["🔧 Complicated domain\nSense → Analyze → Respond"]
        direction TB
        c1["Part I · Secties 0–9\nLandscape Mapping\nAnalyseerbaar met expertise\nTemplates zijn hier gepast"]
    end

    subgraph CPLX["🌀 Complex domain\nProbe → Sense → Respond"]
        direction TB
        c2["Part II · Secties 10–16\nProbe Design\nEmergent · non-lineair · onvoorspelbaar\nGeen plan — wel hypothesen"]
    end

    COMP -->|"delta bepaalt\nanchor transformations"| CPLX
```

---

## Betrokken bestanden per stap

```mermaid
flowchart TD
    T["toward-ai-native-ai-first.md"] -.->|"conceptuele\nonderbouwing"| TPL
    TPL["AI-First Value Stream\nAssessment Template.md"] -->|"invullen\nvoor specifieke case"| CASE
    CASE["Bedrijfsnaam - AI-First\nValue Stream Assessment.md"] -->|"paste in\nclaude.ai"| CHAT
    PROMPT["AI-First\nTransformation Prompt.md"] -->|"paste als\nsystem prompt"| CHAT
    CHAT["Claude Web\nconversatie"] --> OUT["Analyse-output\nA · B · C · D"]
```

---

*Zie ook: [[toward-ai-native-ai-first]] · [[AI-First Value Stream Assessment Template]] · [[AI-First Transformation Prompt]]*

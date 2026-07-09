---
title: "🧩 Postmortems & AI-inzet: sparsessie samenvatting"
---

# Postmortems & AI-inzet: sparsessie samenvatting

Context voor een vervolgsessie in Claude Code. Doel: een MCP-server bouwen die de
Notion-postmortemdatabase bevraagt en verrijkt, ter ondersteuning van
kennisverspreiding en een terugkerende "meta-discussie" over incidenten.

## Probleemstelling

De organisatie draait op één gedeeld systeem, onderhouden door een klein technisch team. Er is een
actief bijgehouden Notion-database met postmortems, maar:

1. **Kennisverspreiding is beperkt.** Een postmortem blijft grotendeels bekend bij
   degene die het incident behandelde en zijn/haar directe entourage. Omdat iedereen
   op hetzelfde systeem werkt, heeft in principe iedereen belang bij die kennis — maar ze
   verspreidt zich niet spontaan.
2. **De meta-discussie komt niet op gang.** Er wordt wel per incident gerapporteerd,
   maar niet gereflecteerd over verbanden tussen incidenten: terugkerende root causes,
   clusters per component, evolutie van het aantal (gerelateerde) incidenten over tijd,
   etc.

De organisatie wil sowieso meer AI inzetten in het dagelijkse werk — dit is een
concreet toepassingsgebied.

## Uitgangspunt van de eigenaar van dit vraagstuk

Voorkeur om te werken met een **hybride meeting-format** gecombineerd met AI, zodat
de meta-discussie de aanleiding wordt voor **spontane collectieve assimilatie** van
kennis (in plaats van een dashboard dat niemand raadpleegt).

## Bestaande structuur in Notion (bevestigd via screenshot)

- Eén centrale database "Postmortems", actief sinds enkele jaren.
- Tracker-kolommen: **Postmortem (titel), Owner, Date, Status, Tags**.
  - Status: `Draft` (post-mortem wordt geschreven) / `Final` (afgerond, actiepunten
    staan in Jira met referentie op de pagina).
  - Tags worden inconsistent gebruikt — vaak leeg, soms `Bug`, `Performance`,
    `Queue`, `Jobs`.
- Elke pagina volgt een **vast template**:
  - Summary
  - Impact
  - Detection
  - Resolution
  - Root cause & contributing factors
  - Timeline (UTC) — als tabel met Timestamp/Event
- Disclaimer op de databasepagina: focus op systemen fixen, niet op mensen
  beschuldigen.
- Diepgang/kwaliteit varieert sterk per auteur (bv. een kritiek systeemincident is zeer
  gedetailleerd en technisch; andere pagina's mogelijk beknopter).

**Observatie:** dit is al behoorlijk gestructureerde data (vaste kopjes + metadata),
dus goed geschikt voor geautomatiseerde analyse — geen vrije, ongestructureerde tekst.

**Losse observatie uit de titels/tags (zonder volledige data):** mogelijke clusters
rond eenzelfde type technisch probleem, geconcentreerd in een korte periode. Dit soort
verbanden is nu niet expliciet benoemd omdat de data over losse pagina's verspreid zit.

## Twee te onderscheiden AI-toepassingen

### 1. Kennisverspreiding (per individuele postmortem)
AI als **vertaler/samenvatter**, niet als analist:
- Periodieke AI-gegenereerde digest van nieuwe/bijgewerkte postmortems, geschreven
  voor mensen die niet bij het incident betrokken waren (expliciteert context die de
  auteur als evident beschouwt).
- Check per postmortem of "waarom is dit relevant voor de rest van de monoliet"
  beantwoord is; zo niet, prompt terug naar de auteur (bv. "dit raakt module X, wil je
  dat toelichten?").
- Automatische cross-linking: AI zoekt gerelateerde eerdere incidenten en stelt die
  voor als suggestie op de pagina.

### 2. Meta-discussie (patronen, verbanden, trends)
AI als **aanjager van het gesprek**, niet als rapporteur:
- Mining van alle postmortems (root cause categorie, getroffen component,
  resolutietype, doorlooptijd, terugkerende patronen) → lichte taxonomie/structuur,
  ook al is de brondata deels vrije tekst.
- Voor een terugkerende sessie (bv. maandelijks): een "meta-brief" met observaties
  zoals "3 van de laatste 5 incidenten in module Y hangen samen met dezelfde
  onderliggende oorzaak" of "incidenten gerelateerd aan de deployment-flow nemen toe
  sinds Q2" — geen samenvatting van individuele incidenten, maar verbanden.
- Die brief is het startpunt van de hybride sessie: async voorbereid lezen (gelijke
  informatiebasis voor iedereen), live/hybride gedeelte voor discussie en collectieve
  aanpak.

**Meest onderscheidend element:** AI die de juiste discussievraag op het juiste
moment op tafel legt, in plaats van enkel een dashboard te bouwen (dat laatste los je
met gewone BI-tooling op; het spontane collectieve leermoment vraagt meer).

## Openstaande vraag voor verdere sparsessie
Voor de kennisverspreiding-toepassing: hoe ziet het gewenste "moment van consumptie"
eruit voor mensen die niet bij het incident waren — puur async (bv. Slack-digest) of
gekoppeld aan de hybride sessie zelf?

## Technische stand van zaken — Notion-toegang

- Er is **geen** kant-en-klare Notion-connector beschikbaar via de connector-registry
  van deze Claude-omgeving op dit moment.
- Gebruiker heeft geen lokale Notion MCP-server draaien, maar heeft wel toegang tot
  een repo waarin een eigen server opgebouwd kan worden.
- **Belangrijk architecturaal punt:** een lokaal geconfigureerde MCP-server (via
  `claude_desktop_config.json`, stdio-subprocess) werkt alleen binnen de Claude
  Desktop-app op die specifieke machine — niet in de web/mobiele chatomgeving van
  claude.ai. Om in andere Claude-omgevingen (web, mobiel, Cowork) te kunnen gebruiken,
  moet de server **remote** (over het publieke internet bereikbaar) draaien en als
  *custom connector* toegevoegd worden.

### Twee opties die overwogen zijn
- **Pad A (snel, geen code):** Notion's officiële gehoste MCP-server (via
  mcp.notion.com) toevoegen als custom connector, met OAuth naar de Notion-workspace.
  Geeft generieke Notion-tools (pagina's lezen/schrijven/zoeken), geen tools op maat.
- **Pad B (op maat, meer werk):** een eigen MCP-server bouwen in de bestaande repo
  (bv. met de Notion SDK) met specifieke tools die aansluiten op de use cases hierboven,
  bijvoorbeeld:
  - `get_postmortem_digest(since_date)`
  - `find_related_incidents(incident_id)`
  - `tag_suggestions(incident_id)`
  - Hosten op een lichte remote omgeving (VPS, Render, Railway, Fly.io) en toevoegen
    als custom connector.

**Gekozen richting:** Pad B — de eigen server opbouwen in de repo.

## Vervolgstappen (voor de Claude Code sessie)
1. Notion-integratie aanmaken (interne integratie in Notion, API-token, toegang
   geven tot de Postmortems-database).
2. MCP-serverproject opzetten in de repo (taal/stack te bepalen — bv. Node.js met de
   Notion SDK, of Python).
3. Eerste tool implementeren: alle postmortempagina's uitlezen (metadata + secties)
   als gestructureerde data.
4. Op basis daarvan de tools voor digest-generatie, cross-linking en meta-brief
   verder uitwerken en itereren.
5. Bepalen hoe/waar de server gehost wordt zodat hij als custom connector bruikbaar
   is buiten Claude Desktop.

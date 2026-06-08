# Organisatorische Dysfunctions — Catalogus

> Pre-AI organisatiepathologieën. Dit zijn de bestaande gebreken waarop AI inwerkt — als accelerant, versterker en verhulling.  
> Gebruik dit document samen met [AI Org Dysfunction Map](ai-org-dysfunction-map.md), dat beschrijft *hoe* AI elk van deze patronen beïnvloedt.

---

## Hoe dit document te lezen

De dysfunctions zijn geordend in zes categorieën, van micro naar macro. De volgorde is bewust: **team-dysfunctions zijn vaak symptomen van organisatorische dysfunctions**, niet de oorzaak.

Elke dysfunction bevat:
- Een korte beschrijving
- **→ AI-versterking**: welke van de 8 AI-mechanismen dit patroon het sterkst amplificeren

De codes verwijzen naar de mechanismen in [AI Org Dysfunction Map](ai-org-dysfunction-map.md):
`SA` = Snelheidsasymmetrie · `OP` = Opaciteit · `DS` = De-skilling · `MC` = Machtconcentratie · `FR` = Fragmentatie · `HO` = Homogenisering · `LL` = Leer-looponderbreking · `OA` = Onbeheerde afhankelijkheid

> Elke dysfunction in deze catalogus is potentieel onderhevig aan AI-amplificatie — dat is het meta-principe. De codes tonen welke AI-mechanismen de sterkste interactie hebben met een specifieke dysfunction.

---

## 🔴 1. Team-level dysfunctions

*Klassieke patronen binnen teams — zichtbaar in dagelijkse samenwerking.*

> Belangrijk: wat er op teamniveau als gedragsdysfunction verschijnt, is vaak een symptoom van structurele dysfunctions op organisatieniveau (zie categorie 4 en 5). Behandel teamproblemen niet zonder de systeemcontext te onderzoeken.

### Vertrouwen & samenwerking

**Gebrek aan psychologische veiligheid**
Mensen zeggen niet wat ze denken, stellen geen vragen, geven geen eerlijke feedback — uit angst voor oordeel, uitsluiting of negatieve gevolgen.
→ *AI-versterking*: `OP` (AI-output uitdagen voelt riskanter dan menselijke output) · `HO` (afwijken van AI-consensus wordt moeilijker)

**Blame culture**
Fouten leiden tot schuldvragen in plaats van leervragen. Teams sluiten rijen, verhullen problemen.
→ *AI-versterking*: `OP` (AI als schild — "de AI zei het") · `LL`

**Individueel werken in plaats van als team**
Mensen optimaliseren hun eigen output, niet het teamresultaat. Werk wordt over de muur gegooid.
→ *AI-versterking*: `FR` (persoonlijke AI-workflows versterken individualisering)

**"Dat is mijn taak niet"**
Strikte rolopvattingen, weinig bereidheid om buiten de eigen functie bij te dragen.
→ *AI-versterking*: `FR` · `DS` (specialisatie vernauwt nog verder)

### Accountability & ownership

**Geen eigenaarschap over het Sprint Goal**
Het team werkt aan stories, niet aan een doel. Elke taak is een individuele verplichting, niet een gedeeld commitment.
→ *AI-versterking*: `OP` · `LL` (uitvoering zonder begrip van richting)

**Stories over de muur gooien**
Werk wordt overgedragen zonder context, begrip of zorg voor het vervolg.
→ *AI-versterking*: `FR` · `LL`

**Definition of Done niet respecteren**
Werk heet "Done" zonder aan de afgesproken kwaliteitsdrempel te voldoen.
→ *AI-versterking*: `OP` · `LL` (fouten worden later ontdekt)

### Transparantie

**Problemen worden verborgen**
Slechte voortgang, technische schuld of conflicten worden niet gedeeld — uit angst of gewoonte.
→ *AI-versterking*: `OP`

**Velocity manipuleren**
Teams passen hun metrics aan om er beter uit te zien, zonder de realiteit te verbeteren.
→ *AI-versterking*: `OP`

**Fake "Done"**
Werk wordt als afgerond gerapporteerd terwijl het dat niet is — technisch, functioneel of kwalitatief.
→ *AI-versterking*: `OP` · `LL`

### Leren & verbetering

**Retrospectives zonder echte acties**
Terugblikken die leiden tot dezelfde observaties, week na week, zonder structurele verandering.
→ *AI-versterking*: `LL`

**Zelfde problemen blijven terugkomen**
Symptomen worden herhaaldelijk behandeld zonder de onderliggende oorzaak aan te pakken.
→ *AI-versterking*: `LL`

---

## 🟠 2. Product & waarde dysfunctions

*Hier gaat het mis zonder dat teams het doorhebben — de richting is zoek.*

**Geen duidelijke productvisie**
Er is geen gedeeld beeld van wat het product moet zijn, voor wie, en waarom.
→ *AI-versterking*: `SA` (snelheid zonder richting) · `LL`

**Backlog zonder richting**
De backlog is een loslopende itemlijst zonder prioriteit, zonder verbinding aan een doel.
→ *AI-versterking*: `SA` · `OP` (AI vult de backlog, verhult het gebrek aan richting) · `LL`

**Output boven outcome**
Focus op features leveren, niet op impact creëren. "We leveren veel, maar niemand gebruikt het."
→ *AI-versterking*: `SA` (meer output, nog minder zicht op impact) · `LL`

**Oplossingsgedreven cultuur**
"Laten we zien wat we kunnen bouwen" in plaats van "laten we het probleem begrijpen." Antwoorden voor vragen.
→ *AI-versterking*: `SA` (AI genereert oplossingen vóór het probleem begrepen is) · `LL`

**Slechte story-slicing**
Grote, onsprintbare items, technische taken zonder gebruikerswaarde, geen feedbackmomenten.
→ *AI-versterking*: `LL` (batches worden groter naarmate AI meer kan genereren)

---

## 🟡 3. Proces & engineering dysfunctions

*Patronen die delivery en kwaliteit vertragen.*

**Waterfall-denken**
Grote upfront planning, lineaire fasen, late feedbackmomenten. "We moeten het eerst volledig begrijpen voor we starten."
→ *AI-versterking*: `LL` (AI versterkt het gevoel dat je alles vooraf kunt specificeren)

**Gebrek aan iteratieve cultuur**
Geen gewenning aan kleine stappen, vroeg falen, bijsturen. Perfectie voor feedback.
→ *AI-versterking*: `LL`

**Technische schuld & instabiele releases**
Kwaliteit is structureel ondergeschikt gemaakt. Bugs zijn normaal geworden.
→ *AI-versterking*: `SA` (AI versnelt delivery, niet kwaliteit) · `DS`

**Grote batches & lang werk-in-uitvoering (WIP)**
Veel tegelijk, weinig afgemaakt. Wachttijden verborgen in parallelle stromen.
→ *AI-versterking*: `LL`

**Geen automatisatie**
Handmatige processen die geautomatiseerd zouden kunnen zijn — testen, deployment, feedbackverzameling.
→ *AI-versterking*: `SA` (AI-output versnelt, handmatige processen worden bottleneck)

**Gebrek aan standaardisatie**
Iedereen werkt op eigen manier; geen gedeelde conventies voor code, tooling, communicatie.
→ *AI-versterking*: `FR` (persoonlijke AI-workflows verdiepen de chaos)

---

## 🔵 4. Organisatorische dysfunctions (macro)

*De echte rootcauses — zichtbaar in structuur, niet in gedrag.*

**Silos**
Teams, afdelingen of functies die geïsoleerd opereren, zonder gedeeld begrip van het geheel.
→ *AI-versterking*: `SA` (elke silo beweegt sneller in eigen richting) · `FR` (eigen AI-praktijk per silo)

**HiPPO** *(Highest Paid Person's Opinion)*
Beslissingen worden bepaald door hiërarchie of status, niet door kennis of data.
→ *AI-versterking*: `SA` (snellere beslissingen met AI als schijnonderbouwing) · `MC` (AI geeft de machtige persoon nog meer gewapende autoriteit)

**Component teams in plaats van feature teams**
Teams zijn georganiseerd rond technische componenten, niet rondom klantwaarde. Veel handovers nodig voor één feature.
→ *AI-versterking*: `FR`

**Local optimization**
Managers en teams optimaliseren hun eigen afdeling of metric, niet het systeem als geheel.
→ *AI-versterking*: `FR`

**Kennisverlies door verloop**
Wanneer mensen vertrekken, verdwijnt de kennis mee. Institutioneel geheugen zit in hoofden, niet in systemen.
→ *AI-versterking*: `DS` (minder overdracht geweest naarmate AI het werk deed)

**Afhankelijkheid van individuen**
Cruciale kennis of vaardigheden geconcentreerd bij één persoon. Enkeling onvervangbaar.
→ *AI-versterking*: `DS` · `MC`

**Gebrek aan onboarding-structuur**
Juniors worden niet systematisch ingewerkt via graduele taakopbouw. Ze zwemmen of vertrekken.
→ *AI-versterking*: `DS` (AI neemt het werk over dat juist het leerpad was)

**Shadow IT**
Teams bouwen eigen technische oplossingen buiten de officiële structuur — uit frustratie of nood.
→ *AI-versterking*: `FR` (Shadow AI is de directe variant: iedereen heeft eigen tools)

**Bureaucratie**
Regels, lagen en processen als doel op zichzelf. Snelheid en waarde ondergeschikt aan compliance.
→ *AI-versterking*: `OP` (AI legitimeert bureaucratische beslissingen)

**Over-engineered frameworks**
Meer structuur dan de context vereist. Frameworks als statussymbool of vangnet. Coördinatieoverhead.
→ *AI-versterking*: `MC` (wie het framework beheert, beheert de AI-governance)

---

## 🟣 5. Leadership & cultuur dysfunctions

*De moeilijkste, maar meest impactvolle — hier zit de systemische rootcause.*

**Fear-driven cultuur**
Mensen optimaliseren voor evaluatie, niet voor klantwaarde. Fouten zijn gevaarlijk, niet leerzaam.
→ *AI-versterking*: `OP` · `HO` (AI-output bevestigt wat de hiërarchie wil horen)

**Symptomen bestrijden in plaats van oorzaken**
Problemen krijgen een rol, een tool of een proces als antwoord — zonder de structurele grondoorzaak aan te raken.
→ *AI-versterking*: `SA` (AI versnelt de symptoombestrijding) · zie Grondpatroon in [AI Org Dysfunction Map](ai-org-dysfunction-map.md)

**Politiek**
Beslissingen worden beïnvloed door persoonlijk belang, allianties en machtsspelen — niet door feiten of klantwaarde.
→ *AI-versterking*: `MC` (controle over AI-tools wordt een machtsmiddel) · `OP`

**Informatieasymmetrie**
Sommigen hebben context die anderen niet hebben. De informatievoorsprong creëert machtsverschillen.
→ *AI-versterking*: `OP` (prompt-schrijver kent de framing; anderen zien alleen de output) · `MC`

**Conformisme in hiërarchische culturen**
Ongebruikelijke ideeën worden vroeg weggefilterd. De hiërarchie bepaalt wat "klopt."
→ *AI-versterking*: `HO` (AI bevestigt de consensus; afwijken wordt riskanter)

**Afstand tussen beslissers en uitvoering**
Beslissingen worden genomen ver van de plek waar de gevolgen voelbaar zijn.
→ *AI-versterking*: `LL` (beslissers delegeren aan AI, verliezen contact met realiteit)

**Fouten worden afgestraft**
Falen is gevaarlijk, niet normaal. Dus wordt het verborgen of vermeden.
→ *AI-versterking*: `LL` · `OP`

**Geen experimenten**
Alles moet slagen voor het start. Kleine bets, probes en veilig-falen zijn cultureel onmogelijk.
→ *AI-versterking*: `LL` (AI geeft het gevoel dat je alles vooraf kunt weten) · `OA`

**Gebrek aan transparantie**
Problemen, beslissingen en redenering worden niet gedeeld. Openheid is uitzondering, niet norm.
→ *AI-versterking*: `OP` · `MC`

---

## ⚫ 6. Scaling dysfunctions

*Patronen die opduiken zodra meerdere teams betrokken zijn.*

**Gedeelde code zonder ownership**
Meerdere teams werken aan hetzelfde systeem zonder duidelijke eigenaar. Kwaliteit en richting vervagen.
→ *AI-versterking*: `DS` (niemand begrijpt het systeem meer volledig) · `FR`

**Meerdere backlogs zonder afstemming**
Elk team heeft eigen backlog, eigen prioriteiten. Het geheel is niet coherent.
→ *AI-versterking*: `FR` · `SA` (elk team beweegt sneller in eigen richting)

**Coördinatie meetings overload**
De complexiteit die ontstaat door slecht ontworpen teams wordt "opgelost" met meer vergaderingen.
→ *AI-versterking*: `MC` (wie de AI-coördinatie beheert, heeft invloed) · `FR`

**Fake scaling**
Extra lagen, rollen of frameworks worden toegevoegd als antwoord op schaalgrootte, in plaats van de structuur te vereenvoudigen.
→ *AI-versterking*: `MC`

---

## Overzichtsmatrix — welke AI-mechanismen welke dysfunctions versterken

| Categorie | Dysfunctions | Meest betrokken AI-mechanismen |
|---|---|---|
| Team-level | Psych. veiligheid, blame, fake done, geen retro-actie | `OP` `LL` `HO` |
| Product & waarde | Geen visie, output > outcome, oplossingsgedreven | `SA` `LL` `OP` |
| Proces & engineering | Waterfall, grote batches, geen iteratieve cultuur | `LL` `FR` |
| Organisatorisch | Silos, HiPPO, component teams, local optimization | `SA` `MC` `FR` |
| Leadership & cultuur | Fear, politiek, informatieasymmetrie, conformisme | `OP` `MC` `HO` `LL` |
| Scaling | Fake scaling, coördinatie overload, gedeelde code | `FR` `MC` `DS` |

---

> **Het kernprincipe achter alle categorieën**:  
> AI vergroot het signaal van wat al aanwezig is. Sterke systemen worden sterker. Gebroken systemen breken sneller — maar zien er beter uit.

---

*Zie [AI Org Dysfunction Map](ai-org-dysfunction-map.md) — hoe elk AI-mechanisme inwerkt op deze patronen*  
*Zie [AI Org Solutions Map](ai-org-solutions-map.md) — welke frameworks en tools elk patroon tegengaan*  
*Zie ook: [issues-w-ai-in-org](issues-w-ai-in-org.md) (origineel werkdocument)*

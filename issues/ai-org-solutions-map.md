# AI & Organisatie — Solutions Map

> Paralleldocument bij [AI Org Dysfunction Map](ai-org-dysfunction-map.md).  
> Voor elke dysfunction: welke frameworks, tools en mindsets bieden een tegenwicht?

---

## Hoe dit document te lezen

Elke sectie volgt dezelfde structuur:

- **Wat de dysfunction vraagt** — de kern van het probleem
- **Bronnen + mechanisme** — welk framework, welk specifiek tool, hoe het contrasteert
- **Hoe toe te passen in AI-context** — de vertaalstap

De mapping is **intentioneel selectief**: 3 sterke verbindingen per dysfunction zijn waardevoller dan 10 vage.

---

## Overzichtsmatrix

| Dysfunction | Primaire bronnen | Kerninterventie |
|---|---|---|
| [1. Snelheidsasymmetrie](#1-snelheidsasymmetrie) | Lencioni Advantage, Senge, Harari Nexus | Clarity als snelheidsgovernor |
| [2. Opaciteit](#2-opaciteit) | Bennis, Avery, Catmull | Radicale transparantie + eigenaarschap |
| [3. De-skilling](#3-de-skilling) | Senge, Appelo M3.0, Marquet | Mastery naast AI, niet ondanks AI |
| [4. Machtconcentratie](#4-machtconcentratie) | Appelo M3.0, McChrystal, Harari Nexus | Delegatie expliciet + shared consciousness |
| [5. Fragmentatie](#5-fragmentatie) | Conway, Appelo Stop Chasing, Org Topologies | Structuur first, dan tools |
| [6. Homogenisering](#6-homogenisering) | Lencioni Five Dysfunctions, Catmull, Senge | Productief conflict als diversiteitsmechanisme |
| [7. Leer-looponderbreking](#7-leer-looponderbreking) | Cynefin, Senge, Forsgren Accelerate | Probe → Sense → Respond ingebakken |
| [8. Versterking bestaande dysfunctions](#8-versterking-bestaande-dysfunctions) | Meadows, Lencioni Advantage, Harari Nexus | Structuur veranderen, niet parameters |
| [9. Onbeheerde afhankelijkheid](#9-onbeheerde-afhankelijkheid) | Taleb, Anderson Kanban, Appelo M3.0 | Barbell: veilige kern + kleine bets |

---

## 1. Snelheidsasymmetrie

> AI verhoogt de snelheid van output sneller dan de snelheid van begrip, alignment en probleemdefiniëring.

**Wat de dysfunction vraagt**: Een mechanisme dat snelheid van uitvoering *koppelt* aan snelheid van gedeeld begrip — zodat ze niet divergeren.

---

### [Lencioni — The Advantage](../books/lencioni-the-advantage-why-organizational-health-trumps-everything-el.md): Clarity als snelheidsgovernor

**Mechanisme**: De vier disciplines van organisatiegezondheid bevatten Discipline 2 (Create Clarity) en Discipline 3 (Over-communicate Clarity). Clarity vereist dat het leiderschapsteam zes vragen met één stem beantwoordt. Die antwoorden worden zeven keer herhaald voordat mensen ze geloven.

**In AI-context**: AI-snelheid vergroot de afstand tussen "het hoofd van de organisatie beweegt" en "het lichaam begrijpt waarheen." Lencioni's antwoord: leiderschap vertraagt zijn *beslissingsautoriteit* proportioneel aan hoe snel uitvoering versnelt. Clarity wordt de rem — niet op AI, maar op beslissingen die alignment veronderstellen die er niet is.

**Non-obvious**: De gevaarlijkste AI-uitrol is niet wanneer AI fouten maakt die iedereen ziet — maar wanneer AI *correct* beslist en niemand het probleem opmerkt.

Voorbeeld: een recruitmentteam gebruikt AI om cv's te screenen. De geselecteerde kandidaten blijken goede medewerkers — dus niemand stelt vragen. Maar de AI was getraind op historische aanwervingen die naar een bepaald profiel neigden. Drie jaar later is het team ongemerkt homogener geworden, niet door slechte beslissingen, maar door *goede* beslissingen op basis van criteria die nooit expliciet gekozen werden. De organisatie is ergens terechtgekomen waar niemand besloten had te gaan.

De fout zit niet in de output — die klopte. De fout zit in het ontbreken van zichtbaarheid over *waarmee* de output werd gegenereerd. Clarity over richting ("wie willen we zijn als organisatie?") is het enige tegenwicht — want dat is de toetssteen waaraan je AI-beslissingen periodiek moet afmeten.

---

### [Senge — The Fifth Discipline](../books/senge-the-fifth-discipline-the-art-practice-of-the-learning-organi.md): Mental Models en Dialog

**Mechanisme**: Mental models zijn de interne beelden waarmee mensen de wereld interpreteren. AI verandert de wereld sneller dan mental models updaten. De vijfde discipline synchroniseert dit via *dialog* — een structureel langzamere denkpraktijk dan discussie, waarbij aannames opgeschort worden en teams als geheel denken.

**In AI-context**: Organisaties die sneller willen gaan schrappen als eerste de denkmomenten — vergaderingen, reflecties, debat. Dat is precies wanneer ze die het hardst nodig hebben. Elke AI-versnelling vraagt om meer dialog-tijd, niet minder.

**Concrete toepassing**: Bescherm een vaste dialogcyclus — niet een vergadering waar je rapporteert wat AI deed, maar een gesprek waarbij je bevraagt wat AI *niet* zag.

Voorbeeld: een productteam gebruikt AI om sprint retrospective-samenvattingen te genereren. De discussievraag is: "klopt deze samenvatting?" — en het antwoord is bijna altijd ja, want AI smootht alles netjes. De dialogvraag is: "welk ongemak voelden we in de retro dat *niet* in deze samenvatting staat? Wat heeft AI weggemiddeld dat eigenlijk wrijving was?" Die wrijving is precies de informatie die je nodig hebt om te leren.

Het verschil: discussie valideert AI-output. Dialog bevraagt wat AI weglaat.

---

### [Harari — Nexus](../books/harari-nexus-a-brief-history-of-information-networks-from-the-stone.md): Error-correction mechanisms

**Mechanisme**: Informatiesystemen die te snel schalen zonder foutcorrectie worden gevaarlijk — Harari wijst op heksenjachten, radicalisering, desinformatiecycli als historische patronen. Elke communicatiegolf (drukpers, sociale media, AI) die sneller schaalt dan de instituties die fouten corrigeren, produceert instabiliteit.

**In AI-context**: Bouw sensing-cadences in het systeem voordat AI schaalt — niet als afterthought, maar als structurele verwachting. "We bewegen zo snel; we meten zo frequent." De cadence *is* het foutcorrectiesysteem.

**Concrete toepassing**: Bouw een vaste sensing-cyclus in elk AI-werkproces — niet om te checken of AI het goed deed, maar om te zien wat AI systematisch *niet* toont.

**Voorbeeld**: een salesteam gebruikt AI wekelijks om te prioriteren welke leads ze bellen. De sensing-cyclus is: één keer per maand pakt iemand tien leads die AI laag rankte (en die het team dus *niet* gebeld heeft), en controleert of daar goede leads bij zaten. Als dat zo is: wat heeft AI gemist? Waarom? Zonder die controle ziet het team alleen AI's successen — de hoog-gerankte leads die converteerden — en nooit de blinde vlekken.

De frequentie van sensing hoort te passen bij hoe snel een fout zich kan voortplanten. Wekelijks AI gebruiken maar maandelijks meten betekent dat een systematische fout vier weken ongestoord doorloopt.

---

## 2. Opaciteit

> AI-redenering is impliciet en onzichtbaar. Aannames verborgen in output, niet in redenering.

**Wat de dysfunction vraagt**: Eigenaarschap over het beslisproces, niet alleen het resultaat. Transparantie over aannames als leidersvaardigheid.

---

### [Bennis — Transparency](../books/bennis-transparency-how-leaders-create-a-culture-of-candor.md): Drie barrières voor waarheid

**Mechanisme**: Leiders creëren een cultuur van openheid of niet. De drie barrières zijn: (1) bewust liegen, (2) spinnen (gedeeltelijke waarheid ten voordele van zichzelf), (3) achterhouden (niets zeggen). Alle drie zijn aanwezig in organisaties waar AI-beslissingen opaque zijn.

**In AI-context**: Transparantie is geen eigenschap die je aan een AI-systeem toevoegt. Het is een eigenschap van leiderschap die er al dan niet is. Opaque AI is een symptoom van opaque leiderschap. Leiders gaan eerst: ze benoemen expliciet wat ze *niet* weten over de AI, waarover ze onzeker zijn, en op wiens oordeel ze leunen.

**Concrete toepassing**: Vraag bij elk AI-gesteund besluit: "Welke aannames draagt deze analyse? Wat zou dit fout maken?" Als niemand het antwoord weet, is het besluit nog niet rijp.

**Voorbeeld**: een developer gebruikt AI om een data-migratiescript te genereren. De code ziet er schoon uit, de tests slagen, het wordt gemerged. Maar niemand heeft gevraagd: wat doet dit script met null-waarden? Wat gebeurt er met records die handmatig zijn bewerkt? De migratie draait, verliest stilzwijgend 3% van de records, en niemand merkt het wekenlang. Het script was niet fout — het was opaque.

De oplossing zit niet in meer review, maar in betere testdefinitie *vóór* de AI genereert. Wie de randvoorwaarden (null-waarden, afwijkende records, concurrente schrijfoperaties) expliciet als testcases formuleert, maakt de aannames zichtbaar — en kan pas dan eigenaarschap nemen over het gedrag in productie. "Ik heb de AI-code gereviewd" is niet hetzelfde als "ik heb de edge cases gedefinieerd en getest, en neem verantwoordelijkheid voor wat er in productie gebeurt."

Dit is waarom TDD (test-driven development) in een AI-codeercontext *meer* relevant wordt, niet minder. De tests zijn niet alleen een vangnet — ze zijn het instrument waarmee je de aannames van de gegenereerde code expliciet maakt. Je schrijft eerst de testcases die beschrijven wat de code moet doen én wat ze niet mag doen, en laat AI daarna de implementatie genereren. Zonder die volgorde delegeer je ook je begrip aan de AI. De code is dan opaque — niet omdat AI slecht werkt, maar omdat niemand de randvoorwaarden heeft benoemd.

---

### [Avery — The Responsibility Process](../books/avery-the-responsibility-process-unlocking-your-natural-ability-to.md): Obligation vs. Responsibility

**Mechanisme**: Obligation = "Ik doe dit omdat ik moet / omdat de regels het zeggen." Responsibility = "Ik kies dit; ik ben eigenaar van de uitkomst." De meeste organisaties opereren in Obligation — compliance zonder eigenaarschap. De drie sleutels naar Responsibility zijn: Intention (wil je verantwoordelijk zijn?), Awareness (zie je in welke staat je zit?), Confront (zie je de waarheid onder ogen?).

**In AI-context**: Opaciteit gedijt in Obligation-culturen. Niemand is eigenaar van een opaque AI-beslissing omdat iedereen "gewoon de instructies opvolgt." Een AI-systeem met iemand in full Responsibility is structureel transparanter — die persoon *moet* de aannames kennen om eigenaarschap te kunnen nemen.

**Concrete toepassing**: Vraag bij elke AI-werkstroom niet "wie is er verantwoordelijk?" — in Obligation-organisaties is het antwoord daarop een functietitel zonder mandaat, of stilte. Vraag in plaats daarvan: "wie *kiest* ervoor om dit te bezitten?"

Avery's inzicht is dat Responsibility niet toewijsbaar is — je kunt het alleen uitnodigen. Houd bij de uitrol van een AI-werkstroom een expliciete sessie: "wie wil begrijpen hoe dit werkt, wil uitleggen als het fout gaat, en wil het aanpassen als de uitkomsten niet kloppen?" Als niemand zich meldt, is dat zelf de diagnose: de organisatie heeft de voorwaarden voor verantwoord AI-gebruik nog niet — en uitrollen zonder owner is een bewuste keuze voor opaciteit.

**Voorbeeld**: een team rolt een AI-tool uit die automatisch pull requests reviewt en goedkeurt. Niemand claimt eigenaarschap — "het is gewoon een tool." Zes maanden later blijkt de tool een bepaalde klasse van SQL-injectie-kwetsbaarheden consistent te missen, omdat die buiten zijn trainingsdata vielen. Niemand had een feedbackloop ingericht om te controleren wat de tool *niet* vangt. Niemand kan uitleggen waarom de tool werkt zoals hij werkt. En niemand voelt zich verantwoordelijk voor de kwetsbaarheden die er doorheen zijn geglipt — want de tool heeft ze "goedgekeurd."

Dit is het concrete gevolg van ontbrekend ownership: **er is geen feedbackloop**. Niet omdat niemand het wilde, maar omdat ownership de voorwaarde is om een feedbackloop überhaupt te kunnen bouwen en onderhouden. Zonder owner is er niemand die signalen oppikt, interpreteert en ingrijpt. Het systeem beweegt — maar corrigeert zichzelf niet.

Harari zou zeggen: een informatiesysteem zonder foutcorrectie is niet traag gevaarlijk — het is snel gevaarlijk. En dat geldt voor elke dysfunction in dit document: de werkelijke oplossing is telkens het inrichten van een corrigerende feedbackloop. Niet als afterthought, maar als ontwerpeis.

---

### [Catmull — Creativity Inc.](../books/catmull-creativity-inc-overcoming-the-unseen-forces-that-stand-in-th.md): Brain Trust als accountability-forum

**Mechanisme**: Pixar's Brain Trust is een vaste groep die brutaal eerlijke feedback geeft op creatief werk — beschermd door expliciete toestemming zonder represailles. De regel: je mag het werk genadeloos bekritiseren *alleen als* je ook het succes ervan wilt.

**In AI-context**: Creëer accountability-forums waar AI-beslissingen worden geanalyseerd, bevraagd en verdedigd — niet om te straffen maar om aannames te ontdekken. De feedback is cranial (over het werk, niet de persoon) en psychologisch veilig. Elke organisatie die AI op grote schaal inzet heeft een equivalent van de Brain Trust nodig: een vaste groep die regelmatig vraagt: "Wat zit er in de aannames van dit model? Wat missen we?"

**Concrete toepassing**: Richt een vaste reviewcyclus in voor AI-gegenereerde output — niet als kwaliteitscheck ("is het goed genoeg?") maar als aanname-audit ("wat heeft dit stil verondersteld?"). De groep mag klein zijn, maar moet psychologisch veilig genoeg zijn dat iemand zegt "ik vertrouw dit niet" zonder dat dat als blokkade geldt.

**Voorbeeld**: een team gebruikt AI om architectuurbeslissingen voor te stellen op basis van requirements. Elke twee weken houdt het een korte Brain Trust-sessie: niet "is dit een goede architectuur?" maar "welke requirements heeft de AI impliciet geprioriteerd? Welke heeft hij genegeerd? Wat zouden wij anders gewogen hebben?" Eén van de vaste vragen: "als dit voorstel fout blijkt over zes maanden, wat zal dan de oorzaak zijn geweest?" Die vraag dwingt het team om de blinde vlekken van de AI — en van zichzelf — expliciet te benoemen vóór ze bouwen.

---

## 3. De-skilling

> Menselijke capaciteiten eroderen omdat AI het werk overneemt dat vroeger vaardigheden opbouwde.

**Wat de dysfunction vraagt**: Een antwoord op de vraag: hoe bouwen we menselijke expertise op *naast* AI, niet ondanks AI?

---

### [Senge — The Fifth Discipline](../books/senge-the-fifth-discipline-the-art-practice-of-the-learning-organi.md): Personal Mastery en creative tension

**Mechanisme**: Personal mastery is de individuele discipline van continue ontwikkeling, gebouwd op *creative tension* — de spanning tussen huidige realiteit en gewenste toekomst. Wie die spanning onderhoudt groeit; wie haar elimineert (door doelen te verlagen of moeizaam werk te vermijden) stagneer.

**In AI-context**: AI elimineert de wrijving die voorheen leerervaring genereerde. De oplossing is niet AI weerstaan — maar de *masteryfrontier* bewust verplaatsen. Elke AI-implementatie zou vergezeld moeten gaan van een leerplan: welke nieuwe capaciteit ontwikkelen mensen om effectief *met* deze AI samen te werken?

**Concrete toepassing**: Definieer per AI-tool: welke vaardigheid delegeer je aan de AI, welke nieuwe vaardigheid vraagt het van de mens? Expliciteer de verwachte kennisoverdracht — niet als afterthought, maar als implementatievoorwaarde. Bouw daar een feedbackloop in: niet alleen "gebruikt het team de tool?" maar "groeit de expertise van het team nog?"

**Voorbeeld**: een team gebruikt GitHub Copilot voor alle boilerplate code. Na drie maanden kunnen juniors nog steeds geen basisstructuren schrijven zonder AI — de creative tension is weg, want AI lost het probleem op vóór het ongemak van niet-weten kan ontstaan. De feedbackloop die ontbreekt: een maandelijkse "zonder AI"-sessie waarbij één feature of module volledig zonder AI-ondersteuning wordt gebouwd. Niet als straf, maar als masterycheck — het team stelt zichzelf de vraag: "wat kunnen we nog zelf?" Het antwoord daarop is de sensing-cyclus voor de-skilling. Als het antwoord krimpt, is dat het signaal dat de masteryfrontier verschoven is zonder dat iemand het besloten heeft.

---

### [Appelo — Management 3.0](../books/appelo-management-30-leading-agile-developers-developing-agile-lead.md): T-shaped professionals en kennisverbreding als teamverantwoordelijkheid

**Mechanisme**: T-shaped professionals hebben diepe expertise in één domein én breedte over andere domeinen. Competentieontwikkeling is geen HR-aangelegenheid — het is een teamverantwoordelijkheid. Het team is zelf eigenaar van de skills die nodig zijn om werk naar Done te krijgen. Heeft het team een bepaalde kennis volledig niet, dan is externe injectie soms nodig. Maar dat is zelden het echte probleem.

Vaker is de kennis er wél — maar geconcentreerd bij één persoon. Die persoon wordt dan een bottleneck: anderen wachten, leren niet, en de teamcapaciteit hangt aan één punt. De oplossing is kennisverbreding: die expertise expliciet over meer teamleden verspreiden zodat het team als geheel de capability bezit, niet één individu.

**In AI-context**: AI verdiept dit patroon. Als één teamlid de enige is die weet hoe een AI-tool effectief te prompten, hoe de output te valideren, of hoe de aannames te doorgronden — dan is de AI-capability van het team in feite een single point of failure. De rest leunt op die persoon in plaats van op de tool. Kennisverbreding is hier dubbel nodig: zowel het domeinwerk als het AI-gebruik zelf moet gedistribueerd zijn over het team.

**Concrete toepassing**: Breng als team in kaart welke skills nodig zijn voor de komende sprints — en wie die skills heeft. Markeer waar er maar één persoon is. Dat zijn de bottlenecks. Maak het verspreiden van die kennis een expliciete sprintactiviteit, niet iets wat "vanzelf" gebeurt. Bouw de feedbackloop in via de retrospective: "welke kennis zat deze sprint nog bij één persoon die we als team zouden moeten beheersen?"

**Voorbeeld**: een team bouwt een API-integratie met een externe dienst. Eén developer kent de authenticatieflow en de foutafhandeling; de rest heeft er nooit naar gekeken. AI helpt de code genereren — maar alleen die ene developer kan beoordelen of de gegenereerde output correct is. De feedbackloop: in de volgende sprint wordt de integratie niet door dezelfde developer uitgebreid, maar door een ander teamlid — met de eerste als vraagbaak, niet als uitvoerder. Na die sprint kan het team zichzelf de vraag stellen: "kunnen twee mensen nu uitleggen hoe dit werkt?" Als het antwoord nee is, is de kennisverspreiding nog niet geslaagd.

---

### [Marquet — Turn the Ship Around](../books/marquet-turn-the-ship-around-a-true-story-of-turning-followers-into.md): Leader-Leader en intent-based learning

**Mechanisme**: Op een nucleaire onderzeeboot verving Marquet "leader-follower" (kapitein beslist, bemanning voert uit) door "leader-leader" (iedereen oefent oordeel uit binnen de intentie). Dit *vereiste* dat de competentie van de bemanning steeg — ze moesten begrijpen *waarom* beslissingen werden genomen, niet alleen ze uitvoeren.

**In AI-context**: De-skilling is wat er gebeurt als AI de uitvoerder wordt en mensen op knoppen drukken. Het omgekeerde is mogelijk: gebruik AI om simpele compliance te automatiseren zodat mensen een *groter* cognitief oordeel dragen, niet kleiner. Ze worden de judgemental layer op AI's execution layer. Dat vereist continue competentieontwikkeling — geen erosie.

**Concrete toepassing**: Formuleer per AI-tool een intentie: wat wil je dat het team begrijpt, beoordeelt en beslist — en wat mag de AI uitvoeren? Die intentie is de grens tussen "AI helpt" en "AI vervangt het denken." Bouw de feedbackloop in via een vaste vraag in de retrospective: "waar heeft AI deze sprint een beslissing genomen die wij eigenlijk zelf hadden moeten nemen?"

**Voorbeeld**: een team gebruikt AI om code te reviewen en merge-suggesties te doen. De leader-leader intentie: developers begrijpen *waarom* een suggestie goed of fout is — ze klikken niet klakkeloos op "accept." De feedbackloop: eens per sprint bespreekt het team drie AI-suggesties die ze hebben geaccepteerd zonder ze echt te doorgronden. De vragen: "hadden we dit zelf gezien? Zouden we dit zelf hebben voorgesteld? Begrijpen we nu waarom dit beter is?" Als het antwoord consequent "nee" is, delegeert het team zijn oordeel aan de AI — en dat is precies de de-skilling die Marquet wil voorkomen.

---

### [Appelo — Widesizing](../articles/appelo-widesizing.md): efficiency is een commodity geworden

**Mechanisme**: In "Forget Downsizing. Try Widesizing." stelt Appelo dat AI de bottleneck verschuift: vroeger was arbeidscapaciteit schaars, nu zijn creativiteit, aanpassingsvermogen en snelheid van leren schaars. Efficiency is een commodity — AI levert het overal en goedkoop. Wie AI inzet om efficiënter te worden, optimaliseert voor het verkeerde spel.

Widesizing is ook organisatorisch: bredere teams, minder rigide functieomschrijvingen, meer slack om te leren en te experimenteren — multi-capable structuren, niet alleen multi-skilled individuen.

**In AI-context**: De-skilling is de keerzijde van efficiency-denken — je delegeert het werk en verliest daarmee de capaciteitsontwikkeling. Widesizing keert dit om door bewust te investeren in wat AI *niet* commoditiseert: oordeel, creativiteit, contextbegrip, aanpassingsvermogen. De vraag is niet "hoeveel FTE besparen we?" maar "welke capaciteiten willen wij internaliseren?"

**Concrete toepassing**: Stel per AI-implementatie de widesizing-vraag: "Welke activiteit delegeren we, en welke nieuwe breedte verwachten we van de mensen die overblijven?" Maak die breedte expliciet — anders krimpt ze stilzwijgend. De feedbackloop: check elke kwartaal of de gecreëerde ruimte ook effectief benut wordt voor bredere competentieontwikkeling, of dat ze stil opgegeten is door meer van hetzelfde werk.

**Voorbeeld**: een backend-team gebruikt AI om routinematige CRUD-endpoints te genereren. Dat werk nam vroeger 40% van de sprintcapaciteit in. Nu is die tijd vrij — maar niemand heeft besloten waarvoor. Drie maanden later doet het team meer CRUD-endpoints dan ooit, want de product backlog vult de vrijgekomen ruimte op. De widesizing is niet gebeurd: efficiency steeg, breedte niet.

De widesizing-aanpak: het team besluit expliciet dat de vrijgekomen tijd gaat naar capaciteiten die AI niet levert — bijvoorbeeld: het leren lezen en beoordelen van query execution plans, zodat ze de door AI gegenereerde databasecode ook kunnen evalueren op performantie en niet alleen op correctheid. De feedbackloop: aan het einde van het kwartaal stelt het team zichzelf de vraag: "kunnen we nu dingen beoordelen die we drie maanden geleden niet konden?" Als het antwoord nee is, heeft AI de capaciteit overgenomen zonder dat de breedte groeide.

---

## 4. Machtconcentratie

> AI versterkt disproportioneel de invloed van degenen die het beheersen of de outputs controleren.

**Wat de dysfunction vraagt**: Macht expliciet en beheersbaar maken — niet weggemoffeld in wie de beste prompts schrijft.

---

### [Appelo — Management 3.0](../books/appelo-management-30-leading-agile-developers-developing-agile-lead.md): Delegation Board en zeven niveaus van delegatie

**Mechanisme**: De Delegation Board maakt per beslissingstype expliciet welk autonomieniveau van toepassing is — van "Manager beslist en deelt mee" (Niveau 1) tot "Team beslist volledig zelfstandig" (Niveau 7). Meeste organisaties laten dit impliciet — wat betekent dat macht onzichtbaar, politiek en betwist is.

**In AI-context**: Pas de Delegation Board toe op AI: welke beslissingen neemt AI? Welke het team? Welke vraagt menselijke goedkeuring? Maak het zichtbaar en bespreekbaar. Macht is er hoe dan ook — maar het is niet langer verborgen.

**Concrete toepassing**: Maak een Delegation Board specifiek voor AI-beslissingen in het team. Lijst de meest voorkomende AI-acties op — code suggesties accepteren, testscenario's genereren, architectuurkeuzes voorstellen, prioriteiten bepalen — en ken aan elk expliciet een niveau toe. Bespreek het als team: niet als bureaucratisch document, maar als gesprek over waar jullie AI vertrouwen en waar niet.

**Voorbeeld**: een team gebruikt AI voor codesuggesties (niveau 6: team accepteert vrijwel altijd) en voor het samenvatten van bugs uit de backlog (niveau 5: AI presenteert, team gebruikt als input). Sprint-prioritering staat expliciet *buiten* de Delegation Board voor AI — dat is een PO-bevoegdheid, geen AI-bevoegdheid. Niet op niveau 1, niet op niveau 2: gewoon niet op de board. Dit is hetzelfde patroon als WSJF in Excel: zodra een tool de prioritering doet — ook als "voorstel" — verdampt het mandaat van de PO stilletjes. De tool wordt de autoriteit, de PO de executor. De Delegation Board maakt dat gevaar zichtbaar door prioritering expliciet buiten het AI-domein te houden. De feedbackloop: elke retrospective één vraag: "heeft AI deze sprint een beslissing genomen op een niveau dat we eigenlijk niet hadden toegewezen?" Als ja — was dat bewust, of is de grens stilletjes verschoven?

---

### [McChrystal — Team of Teams](../books/mcchrystal-team-of-teams-new-rules-of-engagement-for-a-complex-world.md): Shared Consciousness en Empowered Execution

**Mechanisme**: Op een gedistribueerde task force verving McChrystal "ik neem alle grote beslissingen" door "iedereen ziet dezelfde informatie (shared consciousness), lokale commandanten nemen snelle beslissingen in lijn met de intentie (empowered execution)." Macht verschoof van centralisatie naar distributie.

**In AI-context**: In een softwareteam lopen informatie-stromen constant parallel en onzichtbaar voor elkaar: tickets in Jira, gesprekken in Slack, code in GitHub, alerts in monitoring. Iedereen ziet zijn eigen stroom; niemand ziet het geheel. AI kan die stromen aggregeren tot één leesbaar beeld — zichtbaar voor iedereen, niet alleen voor wie toevallig alle kanalen bijhoudt. Dat is wat McChrystal bedoelde met shared consciousness: niet meer vergaderen, maar hetzelfde zien.

Het cruciale onderscheid: AI levert de *informatie*laag. De empowered execution — het oordeel, het vertrouwen, de beslissing — blijft menselijk. Organisaties die AI gebruiken om informatie te concentreren bij enkelen (een "AI-team" dat analyses vertaalt voor de rest) repliceren de oude hiërarchie in nieuwe vorm. De tussenpersoon is de machtconcentratie.

**Concrete toepassing**: Gebruik AI om informatiestromen te consolideren tot een gedeeld, doorzoekbaar overzicht dat iedereen direct kan raadplegen — zonder filter. Niet "het AI-team rapporteert wat het gezien heeft" maar "iedereen kan het zelf zien."

**Voorbeeld**: Een collega bouwt een systeem dat alle informatiestromen van zijn organisatie — tickets, deployments, monitoring, teamberichten — samenbrengt in één view die iedereen kan raadplegen. Niet als rapport dat iemand samenstelt, maar als levend dashboard dat continu bijwerkt. Het effect: teamleden hoeven niet meer te wachten op de standup om te weten wat er in andere hoeken van het systeem speelt. Ze zien het zelf, stellen hun eigen vragen, en nemen beslissingen op basis van hetzelfde beeld. De machtconcentratie die ontstaat wanneer één persoon "het overzicht heeft" verdwijnt structureel — omdat het overzicht nu van niemand en van iedereen is.

De feedbackloop: merk je dat teamleden hun beslissingen nog steeds baseren op wat één collega hen vertelt in plaats van op wat ze zelf zien? Dan is de shared consciousness nog niet geland — en is er nog een tussenpersoon die de informatie filtert.

---

### [Harari — Nexus](../books/harari-nexus-a-brief-history-of-information-networks-from-the-stone.md): AI als actor, alignment als machtsvraag

**Mechanisme**: Harari's kernwaarschuwing: AI is geen tool maar een actor in het informatienetwerk — het neemt beslissingen, creëert inhoud, beïnvloedt gedrag, zonder menselijke autorisatie of begrip. De alignment-vraag is fundamenteel een machtsvraag: wiens belangen dient deze AI-actor?

**In AI-context**: Maak de machtstructuur expliciet: "Dit AI-systeem optimaliseert voor X. Dat betekent dat het Y deprioritiseert. Die afweging bevoordeelt Z en benadeelt W. Is dit de afweging die we collectief accepteren?" Macht is er altijd — de vraag is of het benoemd en gerechtvaardigd is, of verborgen en verondersteld.

**Concrete toepassing**: Stel bij elke AI-tool die beslissingen beïnvloedt de alignmentvraag expliciet: "Waarvoor optimaliseert dit systeem?" Dat is niet altijd bekend — maar het onbekende benoemen is al een stap. Bouw de feedbackloop in door periodiek te checken of de uitkomsten die AI produceert overeenkomen met wat het team werkelijk waardevol vindt.

**Voorbeeld**: een team gebruikt een AI-tool die technische schuld *in kaart brengt* op basis van impact op deployment frequency — als input voor het team, niet als prioritering. De tool optimaliseert voor snelheid van delivery. Maar het team hecht ook aan leesbaarheid en onboarding-vriendelijkheid — waarden die niet in het optimalisatiecriterium zitten. Als het team de AI-output klakkeloos als prioritering gebruikt, dient de AI stilletjes andere belangen dan het team zelf heeft. Hetzelfde gevaar als bij WSJF: het rekenmodel neemt het oordeel over, de verantwoordelijke verliest zijn mandaat. De feedbackloop: elk kwartaal stelt het team de vraag: "optimaliseren wij nog voor wat wij waardevol vinden — of voor wat het model meet?" Structurele afwijkingen zijn het signaal dat de alignment-vraag opnieuw gesteld moet worden.

---

## 5. Fragmentatie

> Individueel AI-gebruik breekt gedeelde werkwijzen en gedeelde realiteit af.

**Wat de dysfunction vraagt**: Een governance-structuur die coherentie creëert *voordat* tools worden gekozen.

---

### [Conway — How Do Committees Invent](../articles/conway-how-do-committees-invent.md): Flexibele teams, niet architectuurgebonden teams

**Mechanisme**: De populaire lezing van Conway's paper is: "organisaties produceren systemen die hun communicatiestructuur weerspiegelen." Dat klopt — maar het is niet zijn eigenlijke conclusie.

Wat Conway aan het einde van zijn paper stelt (en wat Larman als de kern benadrukt): **teams moeten onafhankelijk van de architectuur ontworpen worden.** Architectuur is nooit af — ze is permanent onderwerp van verandering. Teams die zich organiseren *rond* een bestaande architectuur, worden een rem op die verandering: ze hebben belang bij het behoud van de structuur waaromheen ze gebouwd zijn. Het logische gevolg: teams moeten breder geskilled zijn dan de huidige architectuur vereist, zodat ze verandering van architectuur — en verandering in het soort werk dat op hen afkomt — kunnen opvangen.

**In AI-context**: AI-architectuur verandert sneller dan welke architectuur ooit. Teams die zich organiseren rond een specifieke AI-tool, een specifieke integratie, of een specifiek AI-patroon, zullen die tool en dat patroon verdedigen — niet uit kwaad opzet, maar omdat hun teamidentiteit eraan vastzit. Gefragmenteerde AI is dan niet alleen een coördinatieprobleem; het is een vastvriesrisico. De oplossing zit niet in betere governance van huidige tools, maar in teams die breed genoeg geskilled zijn om de volgende architectuur ook op te kunnen pakken.

**Concrete toepassing**: Ontwerp teams niet rond de huidige AI-stack. Vraag bij elke teamsamenstelling: "als onze AI-tooling morgen fundamenteel verandert, kan dit team die transitie aan?" Als het antwoord nee is, is het team te nauw georganiseerd rond de huidige architectuur. De feedbackloop: evalueer elk kwartaal of de AI-werkwijzen van het team zijn veranderd — en of het team die verandering zelf initieerde of uitstelde.

**Voorbeeld**: twee teams bouwen onafhankelijk een integratie met dezelfde externe API — één met een AI-gegenereerde REST-wrapper, de andere met een AI-gegenereerde GraphQL-laag. Beide werken, maar zijn incompatibel. De populaire Conway-lezing zegt: "ze hadden beter gecommuniceerd." Conway's echte punt gaat verder: als beide teams zich nu hebben georganiseerd rond hun eigen integratie, zullen ze die verdedigen wanneer er een herstructurering nodig is. De feedbackloop is niet een maandelijks afstemoverleg — het is de vraag of elk team breed genoeg is om ook de andere aanpak te begrijpen, te onderhouden, en zo nodig te laten vallen.

---

### [Appelo — Stop Chasing AI Tools](../articles/appelo-stop-chasing-ai-tools.md): FOBO Firewall en bewuste terughoudendheid

**Mechanisme**: FOBO = Fear Of Becoming Obsolete. Het drijft organisaties om elke nieuwe AI-tool die uitkomt te adopteren. De FOBO Firewall: (1) Identificeer je rol (explorer/pioneer/settler), (2) Houd een meedogenloze korte waardelijst (max 3 items), (3) Volg hype bewust 6-12 maanden later, (4) Meet ROI per tool, (5) Bewijs maandelijks dat ignoreren van hype geen schade veroorzaakt.

**In AI-context**: Fragmentatie explodeert wanneer iedereen verschillende tools najaagt. Een bewuste terughoudendsheidsstrategie — beslissen wat je *niet* adopteert — is het enige wat de fragmentatiespiraal stopt. De moeilijke keuze is niet "welke AI gebruiken we?" maar "welke AI's gaan we expliciet *niet* gebruiken?"

**Concrete toepassing**: Stel als team een shortlist op van maximaal drie AI-tools die jullie actief gebruiken. Alles buiten die lijst vereist een expliciete beslissing om toe te voegen — en een andere tool moet er dan uit. Dat dwingt een gesprek over waarde, niet over hype. De feedbackloop: maandelijks één vraag: "hebben we deze maand een tool gebruikt die niet op de lijst staat?" Als ja — was dat een bewuste uitzondering of sluipende fragmentatie?

**Voorbeeld**: een ontwikkelteam gebruikt officieel GitHub Copilot. Drie teamleden experimenteren daarnaast met Cursor, twee met Claude in de browser, en één met een lokaal model. Niemand deelt wat werkt en wat niet. De kennis fragmenteert, de tooling fragmenteert, en de praktijken worden onvergelijkbaar. De FOBO Firewall zegt: kies één tool als standaard, wijs één persoon aan als "explorer" die alternatieven evalueert, en bespreek bevindingen collectief — in plaats van ieder voor zich te experimenteren zonder gedeelde leerloop.

---

### [Krivitsky & Flemm — Org Topologies](../articles/krivitsky-flemm-org-topologies.md): Structuur als fragmentatievoorspeller

**Mechanisme**: Org Topologies mapt organisaties op twee assen: team-level fluency (smalle specialisten vs. cross-functionele teams) en product-level fluency (kostencentrum-denken vs. klantgericht denken). C3 (hoogste archetype) heeft geen organisatorische muren — alle teams functioneren als één entiteit.

**In AI-context**: Fragmentatie is structureel, niet alleen technisch. Als de organisatie op Y0 of Y1 zit (smalle specialisten, kostencentrum-denken), zal AI fragmenteren. Elke specialist adopteert tools voor zijn functie; niemand is eigenaar van integratie. Beweging naar C3 vereist structuurwijziging: cross-functionele teams, klantgericht denken. Dan volgt coherente AI automatisch.

**Concrete toepassing**: Kijk naar hoe AI-gebruik verdeeld is over je organisatie. Als frontend, backend, QA en data elk hun eigen AI-tools en werkwijzen hebben zonder gedeeld eigenaarschap, is dat een directe afspiegeling van de teamstructuur. De vraag is niet "welke AI-tool kiezen we?" maar "zijn onze teams georganiseerd rond klantwaarde of rond functies?" De AI-fragmentatie los je niet op met een toolbeleid — je lost hem op door de structuur te veranderen.

**Voorbeeld**: een organisatie heeft aparte teams voor frontend, backend en data. Elk team gebruikt AI voor zijn eigen domein: frontend voor component-generatie, backend voor API-boilerplate, data voor query-optimalisatie. Niemand heeft AI-gebruik over de domeinen heen afgestemd. Een feature die alle drie raakt, wordt gebouwd met drie incompatibele AI-patronen. De feedbackloop: bij elke feature die meerdere teams raakt, evalueert het team achteraf: "zaten er inconsistenties in hoe wij elk AI gebruikten? Wat was de coördinatiekost?" Als die kost structureel hoog is, is dat het signaal dat de teamstructuur zelf het probleem is — niet de tools.

---

## 6. Homogenisering

> AI convergeert denken en output, wat cognitieve diversiteit en innovatiecapaciteit reduceert.

**Wat de dysfunction vraagt**: Bescherming van minderheidsstandpunten en productief conflict als structureel onderdeel van het werk.

---

### [Lencioni — The Five Dysfunctions](../books/lencioni-the-five-dysfunctions-of-a-team.md): Mining als diversiteitsmechanisme

**Mechanisme**: Teams zonder psychologische veiligheid vermijden conflict. Maar conflict is waar cognitieve diversiteit wordt getest en geïntegreerd. Zonder conflict convergeert een team naar groupthink — de illusie van overeenstemming waarbij echte meningsverschillen verborgen zijn. Lencioni's tool "Mining": iemand expliciet aanwijzen om begraven meningsverschillen boven water te halen.

**In AI-context**: Mining is een diversiteitsbehoudstool. Vraag per AI-sessie: wie is verantwoordelijk voor het tegenargument? Wie benoemt de aannames die AI niet heeft? Als niemand die rol heeft, is groepsdenken + AI-amplificatie onvermijdelijk.

**Non-obvious**: De meest gehomogeniseerde organisaties zijn die waarbij conflict het meest onderdrukt is. AI amplifieerd die onderdrukking. Het tegenmiddel is niet consensus (dat *is* de homogenisering), maar *productief conflict* — expliciet beschermd.

**Concrete toepassing**: Wijs bij elke AI-gestuurde beslissing of AI-review-sessie expliciet iemand aan als miner. Die persoon heeft één taak: tegenargumenten en vergeten aannames boven water halen. Roteer de rol per sessie zodat niemand er structureel "de criticus" van wordt — het is een functie, geen karaktereigenschap.

**Voorbeeld**: een team bespreekt een AI-gegenereerde oplossingsrichting voor een performanceprobleem. Iedereen is het ermee eens. De miner stelt drie vragen: "Welke alternatieven heeft de AI niet voorgesteld? Welke niet-functionele eisen zijn hier impliciet deprioriteerd? Als dit voorstel over zes maanden fout blijkt, wat zal dan de reden zijn?" De eerste twee vragen produceren stille reacties — het team realiseert zich dat ze de AI-output nooit echt bevraagd hebben.

De feedbackloop: één keer per sprint evalueert het team of de mining ook daadwerkelijk effect had. Niet als checkbox ("ja, iemand stelde vragen") maar als kwaliteitscheck: "heeft iemand deze sprint een AI-aanbeveling succesvol bijgesteld dankzij mining?" Als het antwoord steeds nee is, is de mining ritueel geworden zonder inhoud.

---

### [Catmull — Creativity Inc.](../books/catmull-creativity-inc-overcoming-the-unseen-forces-that-stand-in-th.md): Brain Trust als bescherming van de minderheidsvisie

**Mechanisme**: Pixar's Brain Trust is structureel ontworpen om de minderheidsvisie te beschermen. Iedereen wordt aangespoord het oneens te zijn. Geen Brain Trust-sessie eindigt zonder dat iemand fundamenteel heeft tegengesproken.

**In AI-context**: Wanneer AI een richting aanbeveelt — wie is het oneens? Wie heeft de psychologische veiligheid om te zeggen "ik denk dat AI hier iets mist"? Maak een expliciet forum waarbij minderheidsvisies niet alleen getolereerd maar *vereist* zijn. AI-aanbevelingen zijn inputs voor menselijk oordeel, geen conclusions.

**Concrete toepassing**: Richt een vaste Brain Trust-cyclus in voor AI-output — niet om output te valideren ("is het goed genoeg?") maar om het te bevragen ("wat veronderstelt dit stilzwijgend?"). Stel als structurele regel: elke sessie eindigt pas als iemand een fundamenteel bezwaar heeft gemaakt. Geen bezwaar betekent dat de sessie niet klaar is — dan is er gecapituleerd voor de AI-aanbeveling zonder echte toetsing.

**Voorbeeld**: een team gebruikt AI om refactoringsuggesties te genereren voor een oud codebaseonderdeel. De Brain Trust-sessie begint niet met "is deze refactoring goed?" maar met "welk begrip van de codebase heeft de AI *niet* meegenomen?" Iemand merkt op dat de AI de niet-gedocumenteerde performanceassumpties van de originele code niet kende — de refactoring zou ze stilletjes verwijderen. Dat was geen fout van de AI; het was een aanname die pas zichtbaar werd omdat de sessiestructuur ernaar zocht.

De feedbackloop: na elke sessie noteert het team het meest waardevolle bezwaar. Dat bezwaar is het leermoment. Als er na drie sessies geen inhoudelijke bezwaren meer zijn, is de groep gehomogeniseerd — ze dagen elkaar niet meer echt uit.

---

### [Senge — The Fifth Discipline](../books/senge-the-fifth-discipline-the-art-practice-of-the-learning-organi.md): Dialog als cognitieve diversiteitspraktijk

**Mechanisme**: Dialog (tegenover discussie) is wanneer teams hun aannames opschorten en samen denken — structureel langzamer dan discussie, maar cognitief generatiever. Dialog brengt de mental models boven die groupthink creëren; discussie versterkt ze.

**In AI-context**: Homogenisering versnelt in organisaties die te snel bewegen voor dialog. Expliciteer dialog-tijd. Gebruik AI voor het transactionele — zodat mensen meer ruimte hebben voor echt gezamenlijk denken. Cognitieve diversiteit is een functie van *tijd*: in tien minuten denk je niet samen, je informeert elkaar.

**Concrete toepassing**: Bescherm een vaste dialogruimte — niet een vergadering waar AI-output wordt doorgenomen, maar een sessie waarbij aannames worden opgeschort en het team bevraagt wat ze *samen* denken. De praktische trigger: gebruik AI voor het transactionele (samenvattingen, statusrapporten, boilerplate) zodat de vrijgekomen tijd beschikbaar wordt voor echte dialog over richting en aannames.

**Voorbeeld**: een team gebruikt AI om wekelijkse statusrapporten te genereren. Dat scheelt 45 minuten per week. Die 45 minuten worden beschermd als dialog-tijd: een sessie zonder output-verplichting, waarbij één vraag centraal staat — "wat begrijpen wij nu over ons systeem dat we drie maanden geleden niet begrepen?" De vragen die in die sessies opkomen zijn de vragen die in de waan van de dag nooit gesteld worden.

De feedbackloop: het team noteert na elke dialog-sessie één inzicht dat ze anders niet zouden hebben gehad. Als er na een aantal sessies geen nieuwe inzichten meer zijn, is de dialog routine geworden — en heeft ze haar functie verloren. Dan is het tijd om de vraagstelling te vernieuwen.

---

## 7. Leer-looponderbreking

> AI maakt uitvoering mogelijk zonder continue menselijke betrokkenheid, waardoor leren tijdens het doen verdwijnt.

**Wat de dysfunction vraagt**: Feedback loops herontwerpen zodat ze meeschalen met uitvoeringssnelheid.

---

### [Snowden — Cynefin](../books/snowden-cynefin.md): Probe → Sense → Respond als leerarchitectuur

**Mechanisme**: In het Complexe domein is de juiste cyclus Probe → Sense → Respond — niet Plan → Execute. Probes zijn kleine, safe-to-fail experimenten ontworpen om te leren, niet om een punt te bewijzen. Meerdere probes lopen parallel; signalen worden versterkt als ze werken, gedempt als niet.

**In AI-context**: Leer-looponderbreking ontstaat wanneer organisaties proberen te bewijzen vóór ze bewegen ("analyseer eerst") of bewegen vóór ze leren ("uitvoeren, feedback later"). Cynefin zegt: probe in parallel, sense continu, respond op signalen. Snelheid en leren zijn niet tegengesteld; ze worden gesynchroniseerd via probe-ontwerp.

**Concrete toepassing**: Elk AI-project heeft een sensing-cadence: wanneer meten we? Wat meten we? Wie ziet het signaal? Hoe snel reageren we? Dit is geen bijlage bij het projectplan — het is de kern.

**Voorbeeld**: een team wil een AI-aanbevelingsengine testen. In plaats van één grote implementatie te plannen en te deployen, ontwerpen ze drie parallelle probes: (1) een eenvoudige regelgebaseerde fallback die altijd werkt maar weinig leert, (2) een AI-model op een klein gebruikerssegment met expliciete monitoring, (3) een A/B-test waarbij de helft handmatige aanbevelingen krijgt. Na twee weken: welke probe geeft het sterkste signaal? Dat is de richting. Niet de planning — het signaal.

De feedbackloop zit in de probestructuur zelf: elke probe heeft expliciete stopcriteria — wanneer is de probe klaar? Wanneer is het signaal sterk genoeg? Wie beslist dat? Door die vragen vooraf te beantwoorden is de leer-loop ingebouwd, niet achteraf toegevoegd.

---

### [Senge — The Fifth Discipline](../books/senge-the-fifth-discipline-the-art-practice-of-the-learning-organi.md): Systeemarchetypen en feedbackvertraging

**Mechanisme**: Systemische archetypes (Shifting the Burden, Limits to Growth, Eroding Goals) bevatten allemaal een variant van hetzelfde probleem: het signaal van symptoom en oorzaak zijn ontkoppeld in tijd of ruimte. Feedback reist niet snel genoeg van effect naar oorzaak.

**In AI-context**: AI kan feedback loops dramatisch versnellen — dashboards, alerts, anomaliedetectie. Maar als de organisatie nog steeds is gestructureerd voor trage feedback (wekelijkse meetings, goedkeuringscycli), versnelt de AI-output maar leert de organisatie niet. Herontwerp het feedbackpad: wie heeft welk signaal nodig, hoe snel, en wat is hun responstijd?

**Concrete toepassing**: Identificeer welk systemisch archetype het meest van toepassing is op je AI-context. Het meest voorkomende bij AI-adoptie is *Shifting the Burden*: AI lost een symptoom op (de sneloplossing) terwijl de fundamentele oplossing steeds minder aandacht krijgt. Teken het archetype op: wat is het symptoom? Wat is de sneloplossing (AI)? Wat is de fundamentele oplossing die verdrongen wordt? Welke bijwerking maakt die fundamentele oplossing moeilijker naarmate AI meer wordt ingezet?

**Voorbeeld**: een team heeft regelmatig regressions na deployments. De symptoomoplossing: AI-gegenereerde tests schrijven voor elke bug die opduikt. Dat werkt — regressions nemen af. Maar de fundamentele oplossing (architectuurverbetering zodat de codebase minder breekbaar is) raakt steeds verder op de achtergrond, want het urgentiegevoel is weg. Na een jaar heeft het team duizend AI-gegenereerde tests die elk een specifieke regression afdekken, maar de architectuur is nog steeds fragiel. De "shift" naar AI-tests heeft de druk op architectuurverbeteringen weggenomen — het systeem is verbeterd in het symptoom, verslechterd in de oorzaak.

De feedbackloop: een jaarlijkse systeemdiagnose — niet "welke metrics zijn beter?" maar "welk fundamenteel probleem heeft dit jaar minder aandacht gekregen doordat AI het symptoom oploste?" Als het steeds hetzelfde probleem is, is het archetype actief.

---

### [Forsgren — Accelerate](../books/forsgren-accelerate-building-and-scaling-high-performing-technology-o.md): DORA Metrics en feedbacksensitiviteit

**Mechanisme**: De vier kernmetrics (Deployment Frequency, Lead Time for Changes, MTTR, Change Failure Rate) voorspellen zowel software-delivery als organisatieprestatie. Kerninsight: organisaties die vaker deployen leren sneller — omdat ze sneller feedback krijgen.

**In AI-context**: Equivalent voor AI: hoe snel observeer je het resultaat van een AI-beslissing, herken je of het fout is, en stel je bij? Als je AI-wijzigingen wekelijks uitrolt maar uitkomsten maandelijks meet, is de leer-loop kapot. Ontwerp sensing op de schaal van deployment — niet op de schaal van comfort.

**Concrete toepassing**: Pas de DORA-logica toe op AI-gebruik: definieer vier AI-equivalente metrics — (1) hoe snel rollen we AI-configuratiewijzigingen uit? (2) hoe lang duurt het van AI-aanbeveling tot zichtbaar resultaat? (3) hoe snel detecteren we een fout in AI-output? (4) welk percentage AI-aanbevelingen leidt achteraf tot problemen? Zonder deze metrics weet je niet of je leer-loop werkt.

**Voorbeeld**: een team gebruikt AI voor code reviews. Ze meten: gemiddeld zes weken voor detectie van een gemiste fout. Dat is het probleem: een AI-review-fout lekt zes weken door voordat iemand het ziet. De DORA-aanpak: verklein de leer-loop. Bouw een maandelijkse audit in — neem tien gemergede PRs die AI heeft goedgekeurd en laat een senior developer ze opnieuw beoordelen. Zijn er patronen in wat AI mist? Dat is het signaal dat de leer-loop nodig heeft om te verbeteren.

De feedbackloop is de audit zelf — niet als kwaliteitscontrole ("heeft AI het goed gedaan?") maar als leer-instrument ("wat heeft AI systematisch gemist dat we moeten aanpassen in hoe we AI code review inzetten?"). Naarmate de detectietijd daalt, werkt de leer-loop.

---

## 8. Versterking van bestaande dysfunctions

> AI maakt bestaande organisatorische problemen sneller, groter en minder zichtbaar.

**Wat de dysfunction vraagt**: Structurele verandering vóór AI-inzet — niet parameters tweaken, maar het systeem zelf herontwerpen.

---

### [Meadows — Thinking in Systems](../books/meadows-thinking-in-systems-a-primer.md): Leverage points en systeemstructuur

**Mechanisme**: De meeste problemen worden veroorzaakt door systeemstructuur, niet door individuele actoren. Meadows beschrijft 12 leverage points van laagst (parameters aanpassen) naar hoogst (doelen en mentale modellen veranderen). AI inzetten zonder de structuur te wijzigen is parameters aanpassen — de laagst mogelijke hefboomwerking.

**In AI-context**: Als de organisatie slechte cross-team communicatie heeft, en je rolt AI per team uit, verergert de fragmentatie. Als de organisatie een HiPPO-cultuur heeft, en je geeft de HiPPO AI-tools, versterkt zijn invloed. Verander eerst de structuur: beslissingsrechten (Delegation Board), informatiestroom (Shared Consciousness), governance (Lencioni's Four Disciplines). Dan AI deployen.

**Concrete toepassing**: Voer een structuurcheck uit vóór AI-uitrol: welke bestaande dysfunctions zijn aanwezig? Hoe versterkt AI ze elk? Welke structuurverandering is nodig als voorwaarde?

**Voorbeeld**: een organisatie heeft drie aparte teams — frontend, backend, data — die weinig communiceren. Ze besluiten AI in te zetten om delivery te versnellen. Elk team adopteert eigen AI-tools en workflows. Zes maanden later: elk team is sneller geworden in zijn silo, maar de interfaces zijn breder dan ooit — drie incompatibele AI-patronen, drie dataschemata die door AI zijn uitgebreid zonder afstemming, en coördinatiemeetings die zijn geëxplodeerd. De parameters zijn aangepast (AI toegevoegd) maar de structuur (silo-organisatie) is dezelfde. Meadows' leverage point was: verander de informatiestroomstructuur vóór AI-uitrol. Die vraag was nooit gesteld.

De feedbackloop: na elke kwartaalreview stelt de organisatie zichzelf de vraag: "welke dysfunctions zijn dit kwartaal sneller of minder zichtbaar geworden?" Als het antwoord "allebei" is, is dat het signaal dat AI problemen verhult en versnelt — en dat er een structuurverandering nodig is, geen toolaanpassing.

---

### [Lencioni — The Advantage](../books/lencioni-the-advantage-why-organizational-health-trumps-everything-el.md): Organisatiegezondheid als AI-voorwaarde

**Mechanisme**: Organisatiegezondheid is niet slim zijn — het is gezond zijn: minimale politiek, minimale verwarring, hoog moreel, laag verloop. Gebouwd via vier disciplines: (1) cohesief leiderschapsteam, (2) clarity, (3) over-communicatie, (4) reinforcement (aanwerving, ontslag, beloning aligned met clarity).

**In AI-context**: Als de organisatie niet gezond is *vóór* AI, wordt AI ingezet in een ongezond systeem — en maakt het zieker. Als er geen vertrouwen is in het leiderschapsteam, is clarity troebel (elke leider heeft een andere interpretatie). Dan wordt AI uitgerold op basis van die troebele clarity, repliceert de verwarring op schaal. Start met gezondheid — vertrouwen, clarity, communicatie. Dan AI.

**Concrete toepassing**: Voer vóór elke significante AI-uitrol een gezondheidscheck uit op de vier disciplines. Niet als audit maar als risicokaart: welke discipline ontbreekt? Dat is de amplificatiezone. Als clarity ontbreekt, zal AI conflicterende interpretaties versnellen. Als het leiderschapsteam niet cohesief is, zal AI die incoherentie repliceren op schaal. Gebruik de check niet om AI uit te stellen — gebruik hem om te weten waar je extra alert op moet zijn.

**Voorbeeld**: een team heeft lang geworsteld met een onduidelijke definition of done — verschillende developers hanteren verschillende kwaliteitsnormen. Ze rollen AI-code review in. Maar AI is geconfigureerd op basis van de normen van de senior developer die het installeerde — niet de gedeelde normen. Gevolg: AI keurt werk goed dat sommigen als onvoldoende beschouwen, en blokkeert werk dat anderen acceptabel vinden. De conflict-as-clarity die er altijd was, is nu een AI-conflict: "de AI zegt het goed" versus "ik zeg het niet goed." Clarity over definition of done was de voorwaarde — niet een nice-to-have.

De feedbackloop: traceer welke AI-gegenereerde conflicten in het team terugkeren. Als twee teamleden consequent botsen over AI-aanbevelingen, is dat geen meningsverschil over de tool — dat is een clarity-probleem dat AI zichtbaar maakt. Gebruik die herhaalde conflicten als diagnose voor welke van de vier disciplines ontbreekt.

---

### [Harari — Nexus](../books/harari-nexus-a-brief-history-of-information-networks-from-the-stone.md): Foutcorrectie en morele afstand

**Mechanisme**: Informatienetwerken zonder foutcorrectie worden gevaarlijk. Bovendien: netwerken die sociale afstand vergroten verlagen morele normen — mensen doen in async gemedieerde communicatie wat ze nooit face-to-face zouden doen.

**In AI-context**: Als de organisatie al een lage-vertrouwens cultuur heeft, zullen AI-gemedieerde beslissingen (async, auteurloos, geautomatiseerd) die erosie versnellen. De structuur amplifieerd de dysfunction. De oplossing: (1) foutcorrectie ingebakken in het AI-systeem (sensing cadences, human checkpoints), (2) AI ontwerpen om menselijke verbinding te *vergroten*, niet te vervangen. Als AI het transactionele afhandelt, kunnen mensen meer investeren in relationeel werk — waar morele normen van nature herstellen.

**Concrete toepassing**: Ontwerp AI-implementaties met twee expliciete mechanismen: (1) foutcorrectie als structureel onderdeel — sensing cadences en human checkpoints ingebakken, niet toegevoegd achteraf; (2) AI vervangt het transactionele zodat mensen meer ruimte krijgen voor het relationele — de gesprekken en het vertrouwen dat morele normen onderhoudt.

**Voorbeeld**: een team werkt al in een cultuur met weinig psychologische veiligheid — feedback wordt spaarzaam gegeven, conflicten worden vermeden. Ze schakelen over op AI-gedreven code reviews: de AI geeft automatisch commentaar op elke pull request, en teamleden reageren op die commentaren zonder elkaar te spreken. Na een paar maanden is de toon scherper geworden — mensen schrijven "de AI heeft dit al opgemerkt, waarom staat dit er nog in?" in een PR-comment, in plaats van er een gesprek over te hebben. Tegelijk verdwijnen de subtielere architectuurgesprekken: die vonden vroeger in een korte call of aan de koffiemachine plaats. Nu is de PR-thread het enige communicatiekanaal — gefilterd door wat de AI al heeft opgemerkt.

De AI-metrics zijn groen: meer comments, snellere review times. Maar de menselijke kwaliteit van samenwerking is gedaald. De foutcorrectie die ontbreekt: niemand ziet de cultuurverslechtering, want het dashboard toont verbetering. AI heeft een bestaand low-trust patroon versneld door de sociale kost van eerlijk zijn te verlagen en de morele afstand te vergroten.

De tegenaanpak: AI doet de technische checks (linting, security scans, testdekking), zodat de menselijke code review vrijkomt voor wat AI niet kan voeren: architectuurgesprekken, tradeoffs, kennisoverdracht. De PR-review is het moment van menselijke verbinding; AI is de technische voorbereiding.

De feedbackloop: meet niet alleen reviewsnelheid, maar ook hoe vaak een PR leidde tot een gesprek (call, pairing). Als gesprekken verdwijnen terwijl comments groeien, is morele afstand gestegen — en is het systeem verkeerd ontworpen.

---

## 9. Onbeheerde afhankelijkheid

> AI introduceert een nieuwe operationele afhankelijkheid die zelden expliciet gemaakt, gewogen of beheerd wordt.

**Wat de dysfunction vraagt**: Bewuste afhankelijkheidsstrategie — niet het vermijden van AI, maar het beheersen van de afhankelijkheid.

---

### [Taleb — Antifragile](../books/taleb-antifragile-things-that-gain-from-disorder.md): Barbell-strategie en optionaliteit

**Mechanisme**: Fragiele systemen breken onder stress. Robuuste systemen overleven stress. Antifragiele systemen *winnen* van stress. De barbell-strategie: combineer een zeer veilige kern (laag risico, hoge weerbaarheid) met vele kleine, agressieve bets (optionaliteit). Nooit in het midden: matig risico is het slechtste.

**In AI-context**: Organisaties die volledig afhangen van propriëtaire vendor-AI zitten in het midden van de barbell — risicovol, zonder de upside. De antifragiele aanpak: (1) onderhoud een veilige kern van capaciteiten die je *bezit* (open-source modellen, interne data, in-house expertise), (2) experimenteer agressief met vendor-AI (optionaliteit), (3) laat het kritieke pad nooit volledig afhangen van één vendor. De stresstest: "Als Vendor X morgen verdwijnt, zijn we dan operationeel?"

**Concrete toepassing**: Teken de barbell voor je AI-stack: wat zit op de veilige kern (open-source, intern bezit, interne expertise)? Wat zit op de agressieve-bet-zijde (vendor-AI, propriëtaire modellen, experimentele tools)? Wat zit gevaarlijk in het midden (één vendor voor alle kritieke functies, zonder alternatief)? Verplaats het middelste naar de kern of naar de bet — maar laat het nooit in het midden.

**Voorbeeld**: een team gebruikt GPT-4 voor alle code-generatie, code-review en documentatie — het gehele kritieke pad. Dat is het midden van de barbell: hoge afhankelijkheid, geen alternatieven, beperkt intern begrip. De barbell-aanpak: (1) **veilige kern opbouwen** — het team schrijft een uitgebreide testsuite die alle AI-gegenereerde code valideert. Die testsuite bezitten ze zelf en werkt ongeacht welk AI-model de code genereerde. Ze bouwen ook interne prompt-templates die overdraagbaar zijn over modellen. (2) **Bets plaatsen** — experimenteer met andere vendors voor specifieke taken, test een lokaal model voor niet-kritieke functies. Wanneer OpenAI de API-prijzen verdubbelt, kan het team switchen — omdat de testsuite en prompt-logica intern zijn. De stresstest versterkt het systeem: het dwingt te diversifiëren.

De feedbackloop: elk kwartaal de stresstest uitvoeren — "als vendor X morgen verdwijnt, zijn we dan operationeel?" Niet als gevreesde hypothese, maar als ontwerpdiscipline.

---

### [Anderson — Kanban](../books/anderson-kanban-successful-evolutionary-change-for-your-technology-bu.md): Start Where You Are en evolutionaire verandering

**Mechanisme**: Kanban vereist geen Big Bang-transformatie. Het respecteert de huidige toestand, visualiseert hem, en verbetert evolutionair. Filosofie: "Start where you are. Use what you have. Do what you can."

**In AI-context**: Vendor lock-in voelt onvermijdelijk als je denkt dat je naar een volledig nieuwe AI-native toestand moet springen. Evolutionaire verandering is mogelijk: (1) Identificeer de capaciteiten die je moet bezitten (kernwaardestroom), (2) Welke kun je vandaag in-house met open tools doen? Doe ze, (3) Welke vereisen vendor-AI voor nu? Gebruik ze — met optionaliteit als ontwerpprincipe (APIs, interfaces, swappability), (4) Groei in-house competentie geleidelijk, vergroot de "bezit"-zone, verklein de "vendor-afhankelijke" zone.

**Concrete toepassing**: Visualiseer je AI-afhankelijkheden als een stroom — welke activiteiten hangen vandaag af van externe AI? Wat zou er stoppen als de vendor niet beschikbaar is? Begin met één activiteit op het kritieke pad en ontwerp een alternatief pad: niet als volledige vervanging, maar als noodoptie. Voer één kleine evolutionaire stap per kwartaal uit: verklein de afhankelijkheidszone, vergroot de bezit-zone.

**Voorbeeld**: een team gebruikt een cloud-AI-dienst voor het genereren van integratietests. Die dienst is essentieel: zonder hem duurt het schrijven van integratietests drie keer zo lang. Evolutionaire stap: het team besteedt één sprint aan het evalueren van een open-source alternatief. Ze draaien beide parallel voor één categorie tests. Resultaat: het lokale model is langzamer maar vergelijkbaar in kwaliteit voor eenvoudige tests. Beslissing: eenvoudige integratietests via het lokale model, complexe via de cloud-vendor. De afhankelijkheidszone is kleiner geworden — niet geëlimineerd, maar beheerst.

De feedbackloop: visualiseer elk kwartaal opnieuw de afhankelijkheidskaart. Welke afhankelijkheden zijn kleiner geworden? Welke zijn gegroeid? Ongeplande groei van afhankelijkheden is het signaal dat de evolutionaire aanpak is losgelaten.

---

### [Appelo — Management 3.0](../books/appelo-management-30-leading-agile-developers-developing-agile-lead.md): Competentieontwikkeling als afhankelijkheidsreductie

**Mechanisme**: T-shaped professionals hebben diepe mastery in één domein en breedte over andere. Organisaties met sterke interne competentie zijn minder kwetsbaar voor externe schokken — kennis is gedistribueerd.

**In AI-context**: Vendor lock-in is deels een kennismin: cruciale kennis is geconcentreerd bij de vendor (zij begrijpen hun model beter dan jij). Remedie: investeer in diep intern begrip van de AI die je gebruikt. Bouw breedte over het team. Naarmate interne competentie groeit, krimpt vendor-afhankelijkheid — je bent minder gevangen door hun roadmap, meer in staat alternatieven te evalueren, meer bekwaam om eigen oplossingen te bouwen.

**Concrete toepassing**: Breng de AI-competenties van het team in kaart: wie begrijpt welk AI-systeem, hoe diep? Identificeer single points of failure — één persoon die als enige kan beoordelen of AI-output correct is voor een bepaald domein. Plan kennisverspreiding als expliciete sprintactiviteit: pair-work op AI-evaluatietaken, kennisdelingsessies over modelgedrag, reviewrotatie.

**Voorbeeld**: één developer is de enige in het team die begrijpt hoe de AI-codetool werkt en hoe je zijn output beoordeelt — de anderen vertrouwen blindelings op haar oordeel. Zij vertrekt. Het team is nu afhankelijk van vendor-documentatie en trial-and-error, want de interne expertise was geconcentreerd bij één persoon. De T-shaped aanpak vóór haar vertrek: twee andere developers leren actief de output evalueren — niet als documentatiesessie maar als hands-on beoordeling van echte AI-output, met expliciete discussie over waarom bepaalde output goed of fout is.

De feedbackloop: na twee sprints kunnen de twee developers zelfstandig beoordelen wat goede AI-output is voor hun domein. Maatstaf: "kan dit teamlid nu onafhankelijk een AI-voorstel weigeren met een goed onderbouwd argument?" Als ja, is de competentie gedistribueerd. Als nee, is de overdracht ritueel gebleven zonder echte kennis-transfer.

---

## Patroonherkenning — wat over alle 9 dysfunctions heen terugkomt

### Drie systemische verbindingen

**1. Structuur is upstream van dysfunction**

Conway's Law, Org Topologies, Appelo's archetypes — ze wijzen alle op dezelfde waarheid: de communicatiestructuur en beslissingsautoriteitsstructuur bepalen welke dysfunctions mogelijk zijn. AI repareert geen gebroken structuur — het versnelt de instorting. Fix structuur eerst.

**2. Psychologische veiligheid is het gemeenschappelijk substraat**

Lencioni (Five Dysfunctions, vertrouwen als basis), Google Project Aristotle (psychologische veiligheid als #1 predictor), Catmull (Brain Trust) — allemaal identificeren ze hetzelfde fundament: zonder psychologische veiligheid verbergen teams problemen, vermijden conflict, zien dysfunctions niet totdat ze catastrofaal zijn. Dit is het eigenlijke transformatiewerk; AI-tools zijn secundair.

**3. Feedback loops zijn de foutcorrectie van het systeem**

Harari (error-correction mechanisms), Senge (feedback delays en archetypes), Cynefin (probe-sense-respond), Forsgren (DORA metrics) — de gemeenschappelijke draad: systemen bewegen sneller dan ze leren wanneer feedback ontkoppeld is van besluitvorming. In het AI-tijdperk is dit geen marginaal probleem; het is het kernmechanisme dat AI-adoptie laat ontsporen. Sensing cadences zijn geen nice-to-have — het is de infrastructuur die de rest draagbaar maakt.

---

### Welke boeken clusteren rond welke dysfunctions?

| Bron | Primaire dysfunctions |
|---|---|
| **Lencioni** (Advantage, Five Dysfunctions) | 1, 2, 6, 8 |
| **Senge** (Fifth Discipline) | 1, 3, 6, 7, 8 |
| **Harari** (Nexus) | 1, 4, 8, 9 |
| **Appelo** (M3.0, Stop Chasing) | 3, 4, 5, 9 |
| **Avery** (Responsibility Process) | 2, 3 |
| **McChrystal** (Team of Teams) | 4, 5 |
| **Conway / Org Topologies** | 5, 8 |
| **Catmull** (Creativity Inc.) | 2, 6 |
| **Snowden** (Cynefin) | 1, 7 |
| **Meadows** (Thinking in Systems) | 7, 8 |
| **Taleb** (Antifragile) | 9 |
| **Anderson** (Kanban) | 7, 9 |
| **Forsgren** (Accelerate) | 7 |
| **Marquet** (Turn the Ship Around) | 3, 4 |
| **Laloux** (Reinventing Organizations) | 9 |

---

*Paralleldocument bij [AI Org Dysfunction Map](ai-org-dysfunction-map.md)*  
*Zie ook: [issues-w-ai-in-org](issues-w-ai-in-org.md) (origineel werkdocument)*

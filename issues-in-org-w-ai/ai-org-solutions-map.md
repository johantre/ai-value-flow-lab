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

### Lencioni — The Advantage: Clarity als snelheidsgovernor

**Mechanisme**: De vier disciplines van organisatiegezondheid bevatten Discipline 2 (Create Clarity) en Discipline 3 (Over-communicate Clarity). Clarity vereist dat het leiderschapsteam zes vragen met één stem beantwoordt. Die antwoorden worden zeven keer herhaald voordat mensen ze geloven.

**In AI-context**: AI-snelheid vergroot de afstand tussen "het hoofd van de organisatie beweegt" en "het lichaam begrijpt waarheen." Lencioni's antwoord: leiderschap vertraagt zijn *beslissingsautoriteit* proportioneel aan hoe snel uitvoering versnelt. Clarity wordt de rem — niet op AI, maar op beslissingen die alignment veronderstellen die er niet is.

**Non-obvious**: De gevaarlijkste AI-uitrol is niet wanneer AI fouten maakt die iedereen ziet — maar wanneer AI *correct* beslist en niemand het probleem opmerkt.

Voorbeeld: een recruitmentteam gebruikt AI om cv's te screenen. De geselecteerde kandidaten blijken goede medewerkers — dus niemand stelt vragen. Maar de AI was getraind op historische aanwervingen die naar een bepaald profiel neigden. Drie jaar later is het team ongemerkt homogener geworden, niet door slechte beslissingen, maar door *goede* beslissingen op basis van criteria die nooit expliciet gekozen werden. De organisatie is ergens terechtgekomen waar niemand besloten had te gaan.

De fout zit niet in de output — die klopte. De fout zit in het ontbreken van zichtbaarheid over *waarmee* de output werd gegenereerd. Clarity over richting ("wie willen we zijn als organisatie?") is het enige tegenwicht — want dat is de toetssteen waaraan je AI-beslissingen periodiek moet afmeten.

---

### Senge — The Fifth Discipline: Mental Models en Dialog

**Mechanisme**: Mental models zijn de interne beelden waarmee mensen de wereld interpreteren. AI verandert de wereld sneller dan mental models updaten. De vijfde discipline synchroniseert dit via *dialog* — een structureel langzamere denkpraktijk dan discussie, waarbij aannames opgeschort worden en teams als geheel denken.

**In AI-context**: Organisaties die sneller willen gaan schrappen als eerste de denkmomenten — vergaderingen, reflecties, debat. Dat is precies wanneer ze die het hardst nodig hebben. Elke AI-versnelling vraagt om meer dialog-tijd, niet minder.

**Concrete toepassing**: Bescherm een vaste dialogcyclus — niet een vergadering waar je rapporteert wat AI deed, maar een gesprek waarbij je bevraagt wat AI *niet* zag.

Voorbeeld: een productteam gebruikt AI om sprint retrospective-samenvattingen te genereren. De discussievraag is: "klopt deze samenvatting?" — en het antwoord is bijna altijd ja, want AI smootht alles netjes. De dialogvraag is: "welk ongemak voelden we in de retro dat *niet* in deze samenvatting staat? Wat heeft AI weggemiddeld dat eigenlijk wrijving was?" Die wrijving is precies de informatie die je nodig hebt om te leren.

Het verschil: discussie valideert AI-output. Dialog bevraagt wat AI weglaat.

---

### Harari — Nexus: Error-correction mechanisms

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

### Bennis — Transparency: Drie barrières voor waarheid

**Mechanisme**: Leiders creëren een cultuur van openheid of niet. De drie barrières zijn: (1) bewust liegen, (2) spinnen (gedeeltelijke waarheid ten voordele van zichzelf), (3) achterhouden (niets zeggen). Alle drie zijn aanwezig in organisaties waar AI-beslissingen opaque zijn.

**In AI-context**: Transparantie is geen eigenschap die je aan een AI-systeem toevoegt. Het is een eigenschap van leiderschap die er al dan niet is. Opaque AI is een symptoom van opaque leiderschap. Leiders gaan eerst: ze benoemen expliciet wat ze *niet* weten over de AI, waarover ze onzeker zijn, en op wiens oordeel ze leunen.

**Concrete toepassing**: Vraag bij elk AI-gesteund besluit: "Welke aannames draagt deze analyse? Wat zou dit fout maken?" Als niemand het antwoord weet, is het besluit nog niet rijp.

**Voorbeeld**: een developer gebruikt AI om een data-migratiescript te genereren. De code ziet er schoon uit, de tests slagen, het wordt gemerged. Maar niemand heeft gevraagd: wat doet dit script met null-waarden? Wat gebeurt er met records die handmatig zijn bewerkt? De migratie draait, verliest stilzwijgend 3% van de records, en niemand merkt het wekenlang. Het script was niet fout — het was opaque.

De oplossing zit niet in meer review, maar in betere testdefinitie *vóór* de AI genereert. Wie de randvoorwaarden (null-waarden, afwijkende records, concurrente schrijfoperaties) expliciet als testcases formuleert, maakt de aannames zichtbaar — en kan pas dan eigenaarschap nemen over het gedrag in productie. "Ik heb de AI-code gereviewd" is niet hetzelfde als "ik heb de edge cases gedefinieerd en getest, en neem verantwoordelijkheid voor wat er in productie gebeurt."

Dit is waarom TDD (test-driven development) in een AI-codeercontext *meer* relevant wordt, niet minder. De tests zijn niet alleen een vangnet — ze zijn het instrument waarmee je de aannames van de gegenereerde code expliciet maakt. Je schrijft eerst de testcases die beschrijven wat de code moet doen én wat ze niet mag doen, en laat AI daarna de implementatie genereren. Zonder die volgorde delegeer je ook je begrip aan de AI. De code is dan opaque — niet omdat AI slecht werkt, maar omdat niemand de randvoorwaarden heeft benoemd.

---

### Avery — The Responsibility Process: Obligation vs. Responsibility

**Mechanisme**: Obligation = "Ik doe dit omdat ik moet / omdat de regels het zeggen." Responsibility = "Ik kies dit; ik ben eigenaar van de uitkomst." De meeste organisaties opereren in Obligation — compliance zonder eigenaarschap. De drie sleutels naar Responsibility zijn: Intention (wil je verantwoordelijk zijn?), Awareness (zie je in welke staat je zit?), Confront (zie je de waarheid onder ogen?).

**In AI-context**: Opaciteit gedijt in Obligation-culturen. Niemand is eigenaar van een opaque AI-beslissing omdat iedereen "gewoon de instructies opvolgt." Een AI-systeem met iemand in full Responsibility is structureel transparanter — die persoon *moet* de aannames kennen om eigenaarschap te kunnen nemen.

**Concrete toepassing**: Vraag bij elke AI-werkstroom niet "wie is er verantwoordelijk?" — in Obligation-organisaties is het antwoord daarop een functietitel zonder mandaat, of stilte. Vraag in plaats daarvan: "wie *kiest* ervoor om dit te bezitten?"

Avery's inzicht is dat Responsibility niet toewijsbaar is — je kunt het alleen uitnodigen. Houd bij de uitrol van een AI-werkstroom een expliciete sessie: "wie wil begrijpen hoe dit werkt, wil uitleggen als het fout gaat, en wil het aanpassen als de uitkomsten niet kloppen?" Als niemand zich meldt, is dat zelf de diagnose: de organisatie heeft de voorwaarden voor verantwoord AI-gebruik nog niet — en uitrollen zonder owner is een bewuste keuze voor opaciteit.

**Voorbeeld**: een team rolt een AI-tool uit die automatisch pull requests reviewt en goedkeurt. Niemand claimt eigenaarschap — "het is gewoon een tool." Zes maanden later blijkt de tool een bepaalde klasse van SQL-injectie-kwetsbaarheden consistent te missen, omdat die buiten zijn trainingsdata vielen. Niemand had een feedbackloop ingericht om te controleren wat de tool *niet* vangt. Niemand kan uitleggen waarom de tool werkt zoals hij werkt. En niemand voelt zich verantwoordelijk voor de kwetsbaarheden die er doorheen zijn geglipt — want de tool heeft ze "goedgekeurd."

Dit is het concrete gevolg van ontbrekend ownership: **er is geen feedbackloop**. Niet omdat niemand het wilde, maar omdat ownership de voorwaarde is om een feedbackloop überhaupt te kunnen bouwen en onderhouden. Zonder owner is er niemand die signalen oppikt, interpreteert en ingrijpt. Het systeem beweegt — maar corrigeert zichzelf niet.

Harari zou zeggen: een informatiesysteem zonder foutcorrectie is niet traag gevaarlijk — het is snel gevaarlijk. En dat geldt voor elke dysfunction in dit document: de werkelijke oplossing is telkens het inrichten van een corrigerende feedbackloop. Niet als afterthought, maar als ontwerpeis.

---

### Catmull — Creativity Inc.: Brain Trust als accountability-forum

**Mechanisme**: Pixar's Brain Trust is een vaste groep die brutaal eerlijke feedback geeft op creatief werk — beschermd door expliciete toestemming zonder represailles. De regel: je mag het werk genadeloos bekritiseren *alleen als* je ook het succes ervan wilt.

**In AI-context**: Creëer accountability-forums waar AI-beslissingen worden geanalyseerd, bevraagd en verdedigd — niet om te straffen maar om aannames te ontdekken. De feedback is cranial (over het werk, niet de persoon) en psychologisch veilig. Elke organisatie die AI op grote schaal inzet heeft een equivalent van de Brain Trust nodig: een vaste groep die regelmatig vraagt: "Wat zit er in de aannames van dit model? Wat missen we?"

**Concrete toepassing**: Richt een vaste reviewcyclus in voor AI-gegenereerde output — niet als kwaliteitscheck ("is het goed genoeg?") maar als aanname-audit ("wat heeft dit stil verondersteld?"). De groep mag klein zijn, maar moet psychologisch veilig genoeg zijn dat iemand zegt "ik vertrouw dit niet" zonder dat dat als blokkade geldt.

**Voorbeeld**: een team gebruikt AI om architectuurbeslissingen voor te stellen op basis van requirements. Elke twee weken houdt het een korte Brain Trust-sessie: niet "is dit een goede architectuur?" maar "welke requirements heeft de AI impliciet geprioriteerd? Welke heeft hij genegeerd? Wat zouden wij anders gewogen hebben?" Eén van de vaste vragen: "als dit voorstel fout blijkt over zes maanden, wat zal dan de oorzaak zijn geweest?" Die vraag dwingt het team om de blinde vlekken van de AI — en van zichzelf — expliciet te benoemen vóór ze bouwen.

---

## 3. De-skilling

> Menselijke capaciteiten eroderen omdat AI het werk overneemt dat vroeger vaardigheden opbouwde.

**Wat de dysfunction vraagt**: Een antwoord op de vraag: hoe bouwen we menselijke expertise op *naast* AI, niet ondanks AI?

---

### Senge — The Fifth Discipline: Personal Mastery en creative tension

**Mechanisme**: Personal mastery is de individuele discipline van continue ontwikkeling, gebouwd op *creative tension* — de spanning tussen huidige realiteit en gewenste toekomst. Wie die spanning onderhoudt groeit; wie haar elimineert (door doelen te verlagen of moeizaam werk te vermijden) stagneer.

**In AI-context**: AI elimineert de wrijving die voorheen leerervaring genereerde. De oplossing is niet AI weerstaan — maar de *masteryfrontier* bewust verplaatsen. Elke AI-implementatie zou vergezeld moeten gaan van een leerplan: welke nieuwe capaciteit ontwikkelen mensen om effectief *met* deze AI samen te werken?

**Concrete toepassing**: Definieer per AI-tool: welke vaardigheid delegeer je aan de AI, welke nieuwe vaardigheid vraagt het van de mens? Expliciteer de verwachte kennisoverdracht — niet als afterthought, maar als implementatievoorwaarde. Bouw daar een feedbackloop in: niet alleen "gebruikt het team de tool?" maar "groeit de expertise van het team nog?"

**Voorbeeld**: een team gebruikt GitHub Copilot voor alle boilerplate code. Na drie maanden kunnen juniors nog steeds geen basisstructuren schrijven zonder AI — de creative tension is weg, want AI lost het probleem op vóór het ongemak van niet-weten kan ontstaan. De feedbackloop die ontbreekt: een maandelijkse "zonder AI"-sessie waarbij één feature of module volledig zonder AI-ondersteuning wordt gebouwd. Niet als straf, maar als masterycheck — het team stelt zichzelf de vraag: "wat kunnen we nog zelf?" Het antwoord daarop is de sensing-cyclus voor de-skilling. Als het antwoord krimpt, is dat het signaal dat de masteryfrontier verschoven is zonder dat iemand het besloten heeft.

---

### Appelo — Management 3.0: T-shaped professionals en kennisverbreding als teamverantwoordelijkheid

**Mechanisme**: T-shaped professionals hebben diepe expertise in één domein én breedte over andere domeinen. Competentieontwikkeling is geen HR-aangelegenheid — het is een teamverantwoordelijkheid. Het team is zelf eigenaar van de skills die nodig zijn om werk naar Done te krijgen. Heeft het team een bepaalde kennis volledig niet, dan is externe injectie soms nodig. Maar dat is zelden het echte probleem.

Vaker is de kennis er wél — maar geconcentreerd bij één persoon. Die persoon wordt dan een bottleneck: anderen wachten, leren niet, en de teamcapaciteit hangt aan één punt. De oplossing is kennisverbreding: die expertise expliciet over meer teamleden verspreiden zodat het team als geheel de capability bezit, niet één individu.

**In AI-context**: AI verdiept dit patroon. Als één teamlid de enige is die weet hoe een AI-tool effectief te prompten, hoe de output te valideren, of hoe de aannames te doorgronden — dan is de AI-capability van het team in feite een single point of failure. De rest leunt op die persoon in plaats van op de tool. Kennisverbreding is hier dubbel nodig: zowel het domeinwerk als het AI-gebruik zelf moet gedistribueerd zijn over het team.

**Concrete toepassing**: Breng als team in kaart welke skills nodig zijn voor de komende sprints — en wie die skills heeft. Markeer waar er maar één persoon is. Dat zijn de bottlenecks. Maak het verspreiden van die kennis een expliciete sprintactiviteit, niet iets wat "vanzelf" gebeurt. Bouw de feedbackloop in via de retrospective: "welke kennis zat deze sprint nog bij één persoon die we als team zouden moeten beheersen?"

**Voorbeeld**: een team bouwt een API-integratie met een externe dienst. Eén developer kent de authenticatieflow en de foutafhandeling; de rest heeft er nooit naar gekeken. AI helpt de code genereren — maar alleen die ene developer kan beoordelen of de gegenereerde output correct is. De feedbackloop: in de volgende sprint wordt de integratie niet door dezelfde developer uitgebreid, maar door een ander teamlid — met de eerste als vraagbaak, niet als uitvoerder. Na die sprint kan het team zichzelf de vraag stellen: "kunnen twee mensen nu uitleggen hoe dit werkt?" Als het antwoord nee is, is de kennisverspreiding nog niet geslaagd.

---

### Marquet — Turn the Ship Around: Leader-Leader en intent-based learning

**Mechanisme**: Op een nucleaire onderzeeboot verving Marquet "leader-follower" (kapitein beslist, bemanning voert uit) door "leader-leader" (iedereen oefent oordeel uit binnen de intentie). Dit *vereiste* dat de competentie van de bemanning steeg — ze moesten begrijpen *waarom* beslissingen werden genomen, niet alleen ze uitvoeren.

**In AI-context**: De-skilling is wat er gebeurt als AI de uitvoerder wordt en mensen op knoppen drukken. Het omgekeerde is mogelijk: gebruik AI om simpele compliance te automatiseren zodat mensen een *groter* cognitief oordeel dragen, niet kleiner. Ze worden de judgemental layer op AI's execution layer. Dat vereist continue competentieontwikkeling — geen erosie.

---

### Appelo — Widesizing: efficiency is een commodity geworden

**Mechanisme**: In "Forget Downsizing. Try Widesizing." stelt Appelo dat AI de bottleneck verschuift: vroeger was arbeidscapaciteit schaars, nu zijn creativiteit, aanpassingsvermogen en snelheid van leren schaars. Efficiency is een commodity — AI levert het overal en goedkoop. Wie AI inzet om efficiënter te worden, optimaliseert voor het verkeerde spel.

Widesizing is ook organisatorisch: bredere teams, minder rigide functieomschrijvingen, meer slack om te leren en te experimenteren — multi-capable structuren, niet alleen multi-skilled individuen.

**In AI-context**: De-skilling is de keerzijde van efficiency-denken — je delegeert het werk en verliest daarmee de capaciteitsontwikkeling. Widesizing keert dit om door bewust te investeren in wat AI *niet* commoditiseert: oordeel, creativiteit, contextbegrip, aanpassingsvermogen. De vraag is niet "hoeveel FTE besparen we?" maar "welke capaciteiten willen wij internaliseren?"

**Concrete toepassing**: Stel per AI-implementatie de widesizing-vraag: "Welke activiteit delegeren we, en welke nieuwe breedte verwachten we van de mensen die overblijven?" Maak die breedte expliciet — anders krimpt ze stilzwijgend.

---

## 4. Machtconcentratie

> AI versterkt disproportioneel de invloed van degenen die het beheersen of de outputs controleren.

**Wat de dysfunction vraagt**: Macht expliciet en beheersbaar maken — niet weggemoffeld in wie de beste prompts schrijft.

---

### Appelo — Management 3.0: Delegation Board en zeven niveaus van delegatie

**Mechanisme**: De Delegation Board maakt per beslissingstype expliciet welk autonomieniveau van toepassing is — van "Manager beslist en deelt mee" (Niveau 1) tot "Team beslist volledig zelfstandig" (Niveau 7). Meeste organisaties laten dit impliciet — wat betekent dat macht onzichtbaar, politiek en betwist is.

**In AI-context**: Pas de Delegation Board toe op AI: welke beslissingen neemt AI? Welke het team? Welke vraagt menselijke goedkeuring? Maak het zichtbaar en bespreekbaar. Macht is er hoe dan ook — maar het is niet langer verborgen.

**Concrete toepassing**: Stel per AI-werkstroom de delegatievragen: "Wie heeft gezegd dat AI dit mag beslissen? Met welk mandaat? Onder welke condities kan een mens overschrijven?"

---

### McChrystal — Team of Teams: Shared Consciousness en Empowered Execution

**Mechanisme**: Op een gedistribueerde task force verving McChrystal "ik neem alle grote beslissingen" door "iedereen ziet dezelfde informatie (shared consciousness), lokale commandanten nemen snelle beslissingen in lijn met de intentie (empowered execution)." Macht verschoof van centralisatie naar distributie.

**In AI-context**: AI kan de shared consciousness laag leveren — iedereen ziet dezelfde data, dezelfde patronen, dezelfde risico's. Die transparantie distribueert macht. Organisaties die AI gebruiken om informatie te concentreren bij enkelen (de "AI-team," de "data scientists") repliceren de oude hiërarchie in nieuwe vorm. Organisaties die AI gebruiken om informatie te democratiseren, verminderen machtconcentratie structureel.

---

### Harari — Nexus: AI als actor, alignment als machtsvraag

**Mechanisme**: Harari's kernwaarschuwing: AI is geen tool maar een actor in het informatienetwerk — het neemt beslissingen, creëert inhoud, beïnvloedt gedrag, zonder menselijke autorisatie of begrip. De alignment-vraag is fundamenteel een machtsvraag: wiens belangen dient deze AI-actor?

**In AI-context**: Maak de machtstructuur expliciet: "Dit AI-systeem optimaliseert voor X. Dat betekent dat het Y deprioritiseert. Die afweging bevoordeelt Z en benadeelt W. Is dit de afweging die we collectief accepteren?" Macht is er altijd — de vraag is of het benoemd en gerechtvaardigd is, of verborgen en verondersteld.

---

## 5. Fragmentatie

> Individueel AI-gebruik breekt gedeelde werkwijzen en gedeelde realiteit af.

**Wat de dysfunction vraagt**: Een governance-structuur die coherentie creëert *voordat* tools worden gekozen.

---

### Conway — How Do Committees Invent: Conway's Law en de Inverse Maneuver

**Mechanisme**: "Organisaties die systemen ontwerpen zullen ontwerpen produceren die de communicatiestructuur weerspiegelen." De inverse: ontwerp bewust de communicatiestructuur om de architectuur te produceren die je wilt.

**In AI-context**: Gefragmenteerde AI is een symptoom van gefragmenteerde communicatiestructuur. Als teams niet met elkaar kunnen praten over AI-keuzes, bouwen ze incompatibele AI. De ontwerpvraag komt eerst: "Wie moet met wie praten over AI-beslissingen?" Bouw die communicatiestructuur. Coherente AI-architectuur volgt.

**Concrete toepassing**: Voordat AI-tools worden uitgerold: ontwerp de governance-structuur. Wie beslist wat wordt geautomatiseerd? Hoe worden conflicten opgelost? Wat is de gedeelde vocabulaire? Bouw het gesprek eerst; tools volgen.

---

### Appelo — Stop Chasing AI Tools: FOBO Firewall en bewuste terughoudendheid

**Mechanisme**: FOBO = Fear Of Becoming Obsolete. Het drijft organisaties om elke nieuwe AI-tool die uitkomt te adopteren. De FOBO Firewall: (1) Identificeer je rol (explorer/pioneer/settler), (2) Houd een meedogenloze korte waardelijst (max 3 items), (3) Volg hype bewust 6-12 maanden later, (4) Meet ROI per tool, (5) Bewijs maandelijks dat ignoreren van hype geen schade veroorzaakt.

**In AI-context**: Fragmentatie explodeert wanneer iedereen verschillende tools najaagt. Een bewuste terughoudendsheidsstrategie — beslissen wat je *niet* adopteert — is het enige wat de fragmentatiespiraal stopt. De moeilijke keuze is niet "welke AI gebruiken we?" maar "welke AI's gaan we expliciet *niet* gebruiken?"

---

### Krivitsky & Flemm — Org Topologies: Structuur als fragmentatievoorspeller

**Mechanisme**: Org Topologies mapt organisaties op twee assen: team-level fluency (smalle specialisten vs. cross-functionele teams) en product-level fluency (kostencentrum-denken vs. klantgericht denken). C3 (hoogste archetype) heeft geen organisatorische muren — alle teams functioneren als één entiteit.

**In AI-context**: Fragmentatie is structureel, niet alleen technisch. Als de organisatie op Y0 of Y1 zit (smalle specialisten, kostencentrum-denken), zal AI fragmenteren. Elke specialist adopteert tools voor zijn functie; niemand is eigenaar van integratie. Beweging naar C3 vereist structuurwijziging: cross-functionele teams, klantgericht denken. Dan volgt coherente AI automatisch.

---

## 6. Homogenisering

> AI convergeert denken en output, wat cognitieve diversiteit en innovatiecapaciteit reduceert.

**Wat de dysfunction vraagt**: Bescherming van minderheidsstandpunten en productief conflict als structureel onderdeel van het werk.

---

### Lencioni — The Five Dysfunctions: Mining als diversiteitsmechanisme

**Mechanisme**: Teams zonder psychologische veiligheid vermijden conflict. Maar conflict is waar cognitieve diversiteit wordt getest en geïntegreerd. Zonder conflict convergeert een team naar groupthink — de illusie van overeenstemming waarbij echte meningsverschillen verborgen zijn. Lencioni's tool "Mining": iemand expliciet aanwijzen om begraven meningsverschillen boven water te halen.

**In AI-context**: Mining is een diversiteitsbehoudsgereedschap. Vraag per AI-sessie: wie is verantwoordelijk voor het tegenargument? Wie benoemt de aannames die AI niet heeft? Als niemand die rol heeft, is groepsdenken + AI-amplificatie onvermijdelijk.

**Non-obvious**: De meest gehomogeniseerde organisaties zijn die waarbij conflict het meest onderdrukt is. AI amplifiedit die onderdrukking. Het tegenmiddel is niet consensus (dat *is* de homogenisering), maar *productief conflict* — expliciet beschermd.

---

### Catmull — Creativity Inc.: Brain Trust als bescherming van de minderheidsvisie

**Mechanisme**: Pixar's Brain Trust is structureel ontworpen om de minderheidsvisie te beschermen. Iedereen wordt aangespoord het oneens te zijn. Geen Brain Trust-sessie eindigt zonder dat iemand fundamenteel heeft tegengesproken.

**In AI-context**: Wanneer AI een richting aanbeveelt — wie is het oneens? Wie heeft de psychologische veiligheid om te zeggen "ik denk dat AI hier iets mist"? Maak een expliciet forum waarbij minderheidsvisies niet alleen getolereerd maar *vereist* zijn. AI-aanbevelingen zijn inputs voor menselijk oordeel, geen conclusions.

---

### Senge — The Fifth Discipline: Dialog als cognitieve diversiteitspraktijk

**Mechanisme**: Dialog (tegenover discussie) is wanneer teams hun aannames opschorten en samen denken — structureel langzamer dan discussie, maar cognitief generatiever. Dialog brengt de mental models boven die groupthink creëren; discussie versterkt ze.

**In AI-context**: Homogenisering versnelt in organisaties die te snel bewegen voor dialog. Expliciteer dialog-tijd. Gebruik AI voor het transactionele — zodat mensen meer ruimte hebben voor echt gezamenlijk denken. Cognitieve diversiteit is een functie van *tijd*: in tien minuten denk je niet samen, je informeert elkaar.

---

## 7. Leer-looponderbreking

> AI maakt uitvoering mogelijk zonder continue menselijke betrokkenheid, waardoor leren tijdens het doen verdwijnt.

**Wat de dysfunction vraagt**: Feedback loops herontwerpen zodat ze meeschalen met uitvoeringssnelheid.

---

### Snowden — Cynefin: Probe → Sense → Respond als leerarchitectuur

**Mechanisme**: In het Complexe domein is de juiste cyclus Probe → Sense → Respond — niet Plan → Execute. Probes zijn kleine, safe-to-fail experimenten ontworpen om te leren, niet om een punt te bewijzen. Meerdere probes lopen parallel; signalen worden versterkt als ze werken, gedempt als niet.

**In AI-context**: Leer-looponderbreking ontstaat wanneer organisaties proberen te bewijzen vóór ze bewegen ("analyseer eerst") of bewegen vóór ze leren ("uitvoeren, feedback later"). Cynefin zegt: probe in parallel, sense continu, respond op signalen. Snelheid en leren zijn niet tegengesteld; ze worden gesynchroniseerd via probe-ontwerp.

**Concrete toepassing**: Elk AI-project heeft een sensing-cadence: wanneer meten we? Wat meten we? Wie ziet het signaal? Hoe snel reageren we? Dit is geen bijlage bij het projectplan — het is de kern.

---

### Senge — The Fifth Discipline: Systeemsarche-typen en feedbackvertraging

**Mechanisme**: Systemische archetypes (Shifting the Burden, Limits to Growth, Eroding Goals) bevatten allemaal een variant van hetzelfde probleem: het signaal van symptoom en oorzaak zijn ontkoppeld in tijd of ruimte. Feedback reist niet snel genoeg van effect naar oorzaak.

**In AI-context**: AI kan feedback loops dramatisch versnellen — dashboards, alerts, anomaliedetectie. Maar als de organisatie nog steeds is gestructureerd voor trage feedback (wekelijkse meetings, goedkeuringscycli), versnelt de AI-output maar leert de organisatie niet. Herontwerp het feedbackpad: wie heeft welk signaal nodig, hoe snel, en wat is hun responstijd?

---

### Forsgren — Accelerate: DORA Metrics en feedbacksensitiviteit

**Mechanisme**: De vier kernmetrics (Deployment Frequency, Lead Time for Changes, MTTR, Change Failure Rate) voorspellen zowel software-delivery als organisatieprestatie. Kerninsight: organisaties die vaker deployen leren sneller — omdat ze sneller feedback krijgen.

**In AI-context**: Equivalent voor AI: hoe snel observeer je het resultaat van een AI-beslissing, herken je of het fout is, en stel je bij? Als je AI-wijzigingen wekelijks uitrolt maar uitkomsten maandelijks meet, is de leer-loop kapot. Ontwerp sensing op de schaal van deployment — niet op de schaal van comfort.

---

## 8. Versterking van bestaande dysfunctions

> AI maakt bestaande organisatorische problemen sneller, groter en minder zichtbaar.

**Wat de dysfunction vraagt**: Structurele verandering vóór AI-inzet — niet parameters tweaken, maar het systeem zelf herontwerpen.

---

### Meadows — Thinking in Systems: Leverage points en systeemstructuur

**Mechanisme**: De meeste problemen worden veroorzaakt door systeemstructuur, niet door individuele actoren. Meadows beschrijft 12 leverage points van laagst (parameters aanpassen) naar hoogst (doelen en mentale modellen veranderen). AI inzetten zonder de structuur te wijzigen is parameters aanpassen — de laagst mogelijke hefboomwerking.

**In AI-context**: Als de organisatie slechte cross-team communicatie heeft, en je rolt AI per team uit, verergert de fragmentatie. Als de organisatie een HiPPO-cultuur heeft, en je geeft de HiPPO AI-tools, versterkt zijn invloed. Verander eerst de structuur: beslissingsrechten (Delegation Board), informatiestroom (Shared Consciousness), governance (Lencioni's Four Disciplines). Dan deployen AI.

**Concrete toepassing**: Voer een structuurcheck uit vóór AI-uitrol: welke bestaande dysfunctions zijn aanwezig? Hoe versterkt AI ze elk? Welke structuurverandering is nodig als voorwaarde?

---

### Lencioni — The Advantage: Organisatiegezondheid als AI-voorwaarde

**Mechanisme**: Organisatiegezondheid is niet slim zijn — het is gezond zijn: minimale politiek, minimale verwarring, hoog moreel, laag verloop. Gebouwd via vier disciplines: (1) cohesief leiderschapsteam, (2) clarity, (3) over-communicatie, (4) reinforcement (aanwerving, ontslag, beloning aligned met clarity).

**In AI-context**: Als de organisatie niet gezond is *vóór* AI, wordt AI ingezet in een ongezond systeem — en maakt het zieker. Als er geen vertrouwen is in het leiderschapsteam, is clarity troebel (elke leider heeft een andere interpretatie). Dan wordt AI uitgerold op basis van die troebele clarity, repliceert de verwarring op schaal. Start met gezondheid — vertrouwen, clarity, communicatie. Dan AI.

---

### Harari — Nexus: Foutcorrectie en morele afstand

**Mechanisme**: Informatienetwerken zonder foutcorrectie worden gevaarlijk. Bovendien: netwerken die sociale afstand vergroten verlagen morele normen — mensen doen in async gemedieerde communicatie wat ze nooit face-to-face zouden doen.

**In AI-context**: Als de organisatie al een lage-vertrouwens cultuur heeft, zullen AI-gemedieerde beslissingen (async, auteurloos, geautomatiseerd) die erosie versnellen. De structuur amplifiedit de dysfunction. De oplossing: (1) foutcorrectie ingebakken in het AI-systeem (sensing cadences, human checkpoints), (2) AI ontwerpen om menselijke verbinding te *vergroten*, niet te vervangen. Als AI het transactionele afhandelt, kunnen mensen meer investeren in relationeel werk — waar morele normen van nature herstellen.

---

## 9. Onbeheerde afhankelijkheid

> AI introduceert een nieuwe operationele afhankelijkheid die zelden expliciet gemaakt, gewogen of beheerd wordt.

**Wat de dysfunction vraagt**: Bewuste afhankelijkheidsstrategie — niet het vermijden van AI, maar het beheersen van de afhankelijkheid.

---

### Taleb — Antifragile: Barbell-strategie en optionaliteit

**Mechanisme**: Fragiele systemen breken onder stress. Robuuste systemen overleven stress. Antifragiele systemen *winnen* van stress. De barbell-strategie: combineer een zeer veilige kern (laag risico, hoge weerbaarheid) met vele kleine, agressieve bets (optionaliteit). Nooit in het midden: matig risico is het slechtste.

**In AI-context**: Organisaties die volledig afhangen van propriëtaire vendor-AI zitten in het midden van de barbell — risicovol, zonder de upside. De antifragiele aanpak: (1) onderhoud een veilige kern van capaciteiten die je *bezit* (open-source modellen, interne data, in-house expertise), (2) experimenteer agressief met vendor-AI (optionaliteit), (3) laat het kritieke pad nooit volledig afhangen van één vendor. De stresstest: "Als Vendor X morgen verdwijnt, zijn we dan operationeel?"

---

### Anderson — Kanban: Start Where You Are en evolutionaire verandering

**Mechanisme**: Kanban vereist geen Big Bang-transformatie. Het respecteert de huidige toestand, visualiseert hem, en verbetert evolutionair. Filosofie: "Start where you are. Use what you have. Do what you can."

**In AI-context**: Vendor lock-in voelt onvermijdelijk als je denkt dat je naar een volledig nieuwe AI-native toestand moet springen. Evolutionaire verandering is mogelijk: (1) Identificeer de capaciteiten die je moet bezitten (kernwaardestroom), (2) Welke kun je vandaag in-house met open tools doen? Doe ze, (3) Welke vereisen vendor-AI voor nu? Gebruik ze — met optionaliteit als ontwerpprincipe (APIs, interfaces, swappability), (4) Groei in-house competentie geleidelijk, vergroot de "bezit"-zone, verklein de "vendor-afhankelijke" zone.

---

### Appelo — Management 3.0: Competentieontwikkeling als afhankelijkheidsreductie

**Mechanisme**: T-shaped professionals hebben diepe mastery in één domein en breedte over andere. Organisaties met sterke interne competentie zijn minder kwetsbaar voor externe schokken — kennis is gedistribueerd.

**In AI-context**: Vendor lock-in is deels een kennismin: cruciale kennis is geconcentreerd bij de vendor (zij begrijpen hun model beter dan jij). Remedie: investeer in diep intern begrip van de AI die je gebruikt. Bouw breedte over het team. Naarmate interne competentie groeit, krimpt vendor-afhankelijkheid — je bent minder gevangen door hun roadmap, meer in staat alternatieven te evalueren, meer bekwaam om eigen oplossingen te bouwen.

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

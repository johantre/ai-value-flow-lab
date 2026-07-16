---
lang: nl
title: "OSS: The Cathedral and the Bazaar"
author: "Raymond Eric S."
year: 1999
status: reference
tags: [open-source, OSS, bazaar-model, RFC, ADR, inner-source, leermodellen, mass-learning, kennisdeling, organisatieleren]
source: http://www.catb.org/~esr/writings/cathedral-bazaar/cathedral-bazaar/
---

> [!note]- Bronnen
> - [Raymond, E.S. (1999). "The Cathedral and the Bazaar"](http://www.catb.org/~esr/writings/cathedral-bazaar/cathedral-bazaar/) — oorspronkelijk gepresenteerd 1997, gepubliceerd 1999
> - [Wikipedia — The Cathedral and the Bazaar](https://en.wikipedia.org/wiki/The_Cathedral_and_the_Bazaar)
> - [von Hippel, E. & von Krogh, G. (2003). "Open Source Software and the 'Private-Collective' Innovation Model: Issues for Organization Science". *Organization Science*, 14(2), 209–223](https://pubsonline.informs.org/doi/10.1287/orsc.14.2.209.14992)
> - [Benkler, Y. (2002). "Coase's Penguin, or, Linux and 'The Nature of the Firm'". *Yale Law Journal*, 112(3)](https://en.wikipedia.org/wiki/Commons-based_peer_production) — via Wikipedia (Commons-based peer production)
> - [Wikipedia — Inner source](https://en.wikipedia.org/wiki/Inner_source) — term gemunt door Tim O'Reilly (2000)
> - [Nygard, M. (2011). "Documenting Architecture Decisions"](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions)

> [!abstract]- TL;DR
> Raymond beschrijft twee ontwikkelmodellen: de kathedraal (gesloten, gecentraliseerd, periodieke releases) en de bazaar (open, gedecentraliseerd, "release early, release often").\
> Zijn kernstelling — **Linus's Law**: *"given enough eyeballs, all bugs are shallow"* — genoeg parallelle blikken maken elk probleem oppervlakkig.\
> Von Hippel & von Krogh verklaren *waarom* mensen gratis bijdragen (het private-collective model); Benkler verklaart *hoe* het zonder centrale sturing kan schalen (modulariteit + granulariteit + goedkope integratie).\
> Voor een organisatie is de vertaalslag "inner source": dezelfde bazaar-mechanismen toepassen binnen de firma, met RFC's als de "release early"-stap en ADR's als het geheugen dat de bazaar een kathedraal-niveau nalatenschap geeft.

## Core idea

De bazaar wint niet omdat er meer mensen aan het werk zijn dan bij de kathedraal — hij wint omdat het ontwikkelproces zelf publiek, parallel en vroeg-zichtbaar is.\
Fouten en foute aannames worden daardoor sneller blootgelegd dan één architect, hoe goed ook, ze alleen kan vinden.

## Key concepts

[[rfc]], [[adr]], [[wegner-transactive-memory]], [[wenger-communities-of-practice]], [[intrinsic-motivation]], [[mass-learning]], [[learning-models]], [[snowden-complex-acts-of-knowing]]

## What I took from it

### General

Raymond schreef het essay als reflectie op zijn eigen ervaring met Fetchmail: een project dat hij bewust volgens de bazaar-principes leidde, als tegenpool van de kathedraal-stijl waarin hij zelf was opgegroeid (GNU Emacs, GCC).\
Het resultaat overtuigde niet via theorie maar via een concreet, herhaalbaar patroon — en had reële impact: Netscape citeerde het essay expliciet als aanleiding om Netscape Communicator open source te maken en Mozilla te lanceren (1998).

De kern is contra-intuïtief voor wie uit een architectuurcultuur komt: meer publieke blootstelling, vroeger in het proces, verhoogt de kwaliteit — het verlaagt ze niet.\
Dat werkt alleen onder specifieke voorwaarden, die Benkler later preciseerde (zie onder).

### Connection to our work

Een tech-council-achtige structuur (zie [[mass-learning]]) heeft al een aantal bazaar-elementen: open voor iedereen, een schriftelijke agenda, een laagdrempelig submission-template.\
Wat ontbreekt, is precies wat Raymond's model *wél* borgt: bij Fetchmail was elke bugfix, elke discussie, elke afweging publiek en doorzoekbaar — de bazaar liet geen redenering achter zich verloren gaan, omdat alles op één plek gebeurde (de mailinglist, later de patch-geschiedenis zelf).

In een intern proces valt dat vaak uiteen in twee sporen: het topic/de [[rfc]] (het voorstel) en de meeting notes (de deliberatie) — niet gekoppeld, niet samen doorzoekbaar.\
Dat is geen falen van de bazaar-gedachte zelf, maar een falen van de **integratielaag**: Benkler noemt dit expliciet een vereiste, niet een bijzaak.

---

## Samenvatting

### Kathedraal versus bazaar

**Kathedraal**: broncode wordt periodiek vrijgegeven, maar de ontwikkeling zelf gebeurt binnen een kleine, afgeschermde groep — het klassieke model van GNU Emacs en GCC in Raymonds tijd.\
Eén architect (of klein team) bewaakt de visie; consistentie is hoog, maar het tempo van bugdetectie is beperkt tot wie toegang heeft.

**Bazaar**: ontwikkeling gebeurt publiek, met vroege en frequente releases, en iedereen kan meekijken, testen, en patchen.\
Linus Torvalds demonstreerde dit met de Linux-kernel; Raymond herhaalde het bewust met Fetchmail als experiment.

### Linus's Law

De centrale stelling van het essay:
> "given enough eyeballs, all bugs are shallow"

Vertaald: een bug die voor de ene ontwikkelaar ondoorgrondelijk is, is voor een andere — met net iets andere context of ervaring — vaak evident.\
Hoe meer parallelle blikken, hoe groter de kans dat *iemand* het patroon herkent.\
Dit is geen argument voor willekeurig veel mensen — het is een argument voor **parallelle blootstelling vroeg in het proces**, in plaats van sequentiële review laat in het proces.

### Kernlessen uit het essay

Raymond destilleerde negentien concrete lessen uit zijn Fetchmail-ervaring. Twee ervan dragen het hele model:

> "Release early. Release often. And listen to your customers."

> "Treating your users as co-developers is your least-hassle route to rapid code improvement."

Beide lessen keren zich tegen een instinctieve reflex: pas releasen als het "af" is, en gebruikers zien als afnemers van kwaliteit in plaats van bron ervan.\
De bazaar draait dat om — de gebruiker die vroeg een ruwe versie test, is waardevoller dan een interne reviewer die een gepolijste versie laat beoordeelt.

### Waarom mensen gratis bijdragen: het private-collective model (von Hippel & von Krogh)

Raymond beschrijft *dat* de bazaar werkt. Von Hippel & von Krogh (2003) verklaren *waarom* individuen bereid zijn hun werk gratis weg te geven.

Ze onderscheiden drie modellen:

**❶ Private-investment model** — innovators beschermen hun uitvinding met IP en verdienen terug via exclusiviteit.

**❷ Collective-action model** — samenwerking ontstaat om marktfalen op te lossen en een publiek goed te produceren; het klassieke probleem hierbij is de free-rider.

**❸ Private-collective model** — open source bijdragers lossen *hun eigen* technisch probleem op (privaat voordeel), en delen de oplossing tegelijk met de gemeenschap (collectief voordeel) — zonder daar direct geld voor terug te vragen.

De paradox lost zich op zodra je beseft dat de bijdrager al zijn beloning heeft binnengehaald vóór hij deelt: het probleem is voor hemzelf al opgelost.\
Delen kost dan weinig extra, en levert reputatie, wederkerigheid en een beter product op als het door anderen wordt verbeterd.\
Dit verbindt rechtstreeks met [[intrinsic-motivation]] (Pink): mastery — het eigen probleem goed oplossen — is de eigenlijke drijfveer, delen is een goedkope bijkomstigheid.

### Hoe het schaalt zonder centrale sturing: modulariteit en granulariteit (Benkler)

Von Hippel & von Krogh verklaren de motivatie. Benkler (2002) verklaart de **structuur** die nodig is opdat duizenden ongecoördineerde bijdragers toch een coherent product opleveren — wat hij *commons-based peer production* noemt: een derde productiemodel naast de firma (hiërarchie) en de markt (prijssignalen).

Drie structurele voorwaarden maken dit mogelijk:

**❶ Modulariteit** — taken moeten opdeelbaar zijn in onafhankelijke stukken, zodat mensen asynchroon kunnen werken zonder op elkaar te wachten of voortdurend te moeten coördineren.

**❷ Granulariteit** — de brokstukken moeten in verschillende groottes bestaan, zodat mensen met uiteenlopende beschikbaarheid en toewijding toch een passend stuk kunnen vinden — van een typo-fix tot een nieuwe module.

**❸ Lage-kost integratie** — er moet een mechanisme zijn voor kwaliteitscontrole én integratie van bijdragen tegen relatief lage kost, anders verzuipt het systeem in coördinatie-overhead zodra het aantal bijdragers groeit.

Zonder deze drie werkt "iedereen mag meedoen" niet — het produceert chaos, geen bazaar.\
Dit is precies waarom een open tech-council-achtige structuur (bazaar-toegang, iedereen mag een topic indienen) niet automatisch een functionerend bazaar-*systeem* is: toegang is niet hetzelfde als modulariteit, en een submission-template is niet hetzelfde als lage-kost integratie van de *redenering* achter een beslissing.

---

## Van open source naar inner source: [[rfc]] en [[adr]]

**Inner source** — de term is gemunt door Tim O'Reilly (2000) — is de toepassing van open-source-werkwijzen *binnen* een organisatie, zonder de code zelf publiek te maken.\
Drie praktijken maken de vertaalslag concreet:

**❶ Open collaboration** — ontwikkelartefacten (code, documentatie, issue-trackers) zijn toegankelijk voor iedereen intern, zodat bijdragen op verdienste kunnen gebeuren, over teamgrenzen heen.

**❷ Open communication** — discussies zijn schriftelijk, publiek binnen de organisatie, gearchiveerd en asynchroon — wat automatisch een passief documentatiespoor van de redenering achterlaat.

**❸ Quality assurance** — code review en een onderscheid tussen bijdragers en integrators (met schrijftoegang) bewaken kwaliteit zonder de open toegang te sluiten.

Een **[[rfc]]** (Request for Comments — de term komt uit de IETF-traditie en is overgenomen door tech-organisaties voor interne designvoorstellen) is de "release early"-stap van Raymond vertaald naar besluitvorming: een voorstel wordt vroeg, publiek en in geschreven vorm gedeeld — vóór het definitief is — precies om Linus's Law te activeren op ideeën in plaats van op code.

Een **[[adr]]** (Architecture Decision Record — Nygard, 2011) is het stuk dat een bazaar-proces een kathedraal-niveau nalatenschap geeft.\
Nygard's structuur is opzettelijk minimaal: **Title, Context, Decision, Status, Consequences** — één tot twee pagina's, geschreven "als een gesprek met een toekomstige ontwikkelaar".\
Zonder ADR heeft een toekomstige lezer maar twee opties bij een oude beslissing: blind aanvaarden, of blind terugdraaien. Geen van beide is leren.

De koppeling tussen RFC (het voorstel), de open discussie (Linus's Law op het idee), en het ADR (de vastgelegde redenering) is wat Benkler's "lage-kost integratie" concreet betekent op organisatieniveau.\
Ontbreekt die koppeling — bestaat het voorstel wel, bestaat de discussie wel, maar zijn ze niet aan elkaar gelinkt — dan heb je de bazaar-toegang zonder de bazaar-nalatenschap: een [[wegner-transactive-memory]]-directory ("er is ooit over gepraat, vraag het aan wie erbij was") in plaats van een doorzoekbaar ADR-archief.

---

## Verbinding met de kennisbank

- [[rfc]] — de "release early"-stap vertaald naar besluitvorming; het voorstel-deel van de inner-source koppeling
- [[adr]] — de vastgelegde redenering; het geheugen-deel van de inner-source koppeling
- [[mass-learning]] — de tech-council-achtige structuur als casus: bazaar-toegang aanwezig, ADR-koppeling (nog) niet
- [[wegner-transactive-memory]] — TMS is wat overblijft wanneer de RFC/ADR-koppeling ontbreekt: de redenering bestaat, maar is alleen vindbaar via de specialist die erbij was
- [[wenger-communities-of-practice]] — CoP en de bazaar delen het uitgangspunt dat kennis in de gemeenschap zit, niet bij één architect; CoP is de sociale vorm, de bazaar is het productieproces
- [[snowden-complex-acts-of-knowing]] — Snowden's "wat geëxternaliseerd wordt is wat de schrijver bewust weet" geldt evengoed voor een RFC: het document vangt de conclusie, het ADR moet ook de afgewogen alternatieven vangen om niet in dezelfde valkuil te lopen
- [[intrinsic-motivation]] — von Hippel & von Krogh's private-collective model is Pink's mastery-drijfveer toegepast op bijdragen aan gedeelde code/documentatie
- [[learning-models]] — open source communities als één van de leermodellen in de bredere synthese; dit artikel werkt dat model volledig uit

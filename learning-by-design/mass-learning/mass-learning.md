---
title: "🧩 Mass Learning"
icon: 🧩
author: "Synthese"
year: 2026
status: synthesis
tags: [mass-learning, organisatiecontext, post-mortem, kennisverspreiding, LeSS, psychologische-veiligheid, trust-by-design]
---

# Organisatiecontext

## Organisatie

- Snel gegroeide, technische organisatie
- Eenzelfde stack voor iedereen — één gedeeld systeem in plaats van geïsoleerde diensten, wat kenniseilanden by design vermijdt
- Meerdere teams zonder vaste architecturale boundaries
- Sterke alignment: mensen praten over de juiste dingen

## Cultuur en rituelen

Sterk kennisdelingsethos, zichtbaar in dagelijkse PR-reviews: teamleden tonen hun werk, anderen reageren. \
Dit is het bewijs dat synchrone peer-to-peer formats hier werken.

Sprint cadence (2 weken):
- **Planning**: aanwezig maar chaotisch — te veel mix van onzekerheden
- **Refinements**: te technisch, maar gealigneerd — mensen spreken over de juiste dingen
- **Retro's**: aanwezig maar flauw — te weinig inhoud met echte impact

## Tech Council

*Hypothetisch — nog niet persoonlijk bijgewoond, gebaseerd op interne documentatie.*

Tweewekelijks cross-team overleg dat architectuur- en kwaliteitsbeslissingen bewaakt:

- **Werkt met schriftelijke agenda** en een submission template: iedereen kan een topic indienen
- **Eigenaar van "homeless incidents"**: incidenten die vastlopen of complexe opvolging vragen zonder duidelijke eigenaar
- **Bewaart architectuur & codekwaliteit** van alle interne producten

**OSS-perspectief op de Tech Council** (zie [[raymond-the-cathedral-and-the-bazaar]] voor het volledige model):\
De structuur heeft al bazaar-elementen: open voor iedereen, schriftelijke agenda, laagdrempelig indienen. Maar de redenering achter beslissingen verdwijnt waarschijnlijk in de meeting — de topics tonen status (Done / In progress) maar niet het *waarom*.\
Dat maakt de Tech Council momenteel een **TMS-directory** ("de council weet het") eerder dan een **[[adr]]-systeem** ("de beslissing én de redenering zijn opgeschreven en doorzoekbaar").\
Het verschil voor mass-learning: toekomstige developers weten *dat* een bepaalde technische keuze gemaakt is, niet *waarom* — en herhalen de discussie of maken de verkeerde aanname.

## AI-gebruik

- Iedereen beschikt over een Claude account
- Actieve exploratie deze week begeleid door een AI-expert
- Focus: skills, commands, centrale gedeelde repo voor die skills
- Concepten in gebruik: "harness", "LLM as second brain"
- Ze zijn ook bezig AI te integreren in hun SDLC (PR-automatisatie, pipelines)

## Bredere adviescontext

Dit project is onderdeel van een ruimer adviestraject rond **trust-by-design**: \
de organisatie wordt begeleid naar een cultuur die psychologische veiligheid expliciet hoog stelt — en wil dat bewust *behouden* naarmate ze groeit.

Dat advies is onderbouwd via wetenschappelijke literatuur (Edmondson, Felps e.a.) en casestudies van organisaties die prestatie, evaluatie en samenwerking anders aanpakken.

**Radical Candor** (Kim Scott) is het framework dat als actieve norm gehanteerd wordt voor oprechte, directe communicatie met echte zorg voor de persoon.

Implicatie voor dit project: de post-mortem oplossing moet **consistent zijn met** en **bijdragen aan** deze cultuurrichting. \
Ze mag de opgebouwde veiligheid niet ondermijnen, en ze mag geen schuldmechanisme worden.

## Het post-mortem probleem

**Huidig proces:**
1. Incident treedt op (start vermoedelijk bij support, maar niet altijd)
2. Iemand fixt het incident
3. Diezelfde persoon schrijft een Notion-pagina: de post-mortem
4. De pagina wordt niet-structureel doorlopen met een deel van de organisatie
5. De volledige organisatie bereikt de kennis niet

**Gevolg:** De post-mortem blijft dode letter. \
De kennis die vergaard werd bij het fixen van het incident verspreidt zich niet. \
Incidenten worden niet ingezet om de organisatie anti-fragiel te maken.

**Wat de organisatie wil:** een schaalbaar middel om incident-kennis snel en breed te verspreiden — zodat elke post-mortem de volledige organisatie sterker maakt, niet alleen het team dat het incident fixte.

## Synthese: TMS, de bazaar, en de ADR-gap

De Tech Council en de post-mortem-praktijk blijken twee symptomen van hetzelfde patroon te zijn.

**❶ TMS als diagnostisch signaal** (zie [[wegner-transactive-memory]])\
De post-mortem database registreert wie welk incident oploste — dat is een onbewuste TMS-directory: ze wijst naar de expert, maar draagt de kennis zelf niet over.\
De Tech Council doet hetzelfde met besluiten: de council "weet het", maar de redenering zit vast aan wie in de meeting zat.\
Beide zijn TMS-structuren die zich voordoen als kennisdeling.

**❷ De bazaar is aanwezig, de nalatenschap niet** (zie [[raymond-the-cathedral-and-the-bazaar]])\
De Tech Council heeft al bazaar-toegang: open voor iedereen, schriftelijk, laagdrempelig.\
Wat ontbreekt is Benkler's derde voorwaarde — lage-kost integratie van de redenering. Het topic/de [[rfc]] bestaat, de discussie bestaat (in meeting notes), maar ze zijn niet gekoppeld tot een doorzoekbaar [[adr]].\
Hetzelfde geldt voor de post-mortem: de Notion-pagina is het "product", maar het antenarratief en de story elicitation (zie [[snowden-complex-acts-of-knowing]]) die de eigenlijke tacit knowledge dragen, ontbreken.

**❸ LeSS Traveller als richting, niet TMS** (zie [[less-traveller]])\
Het doel is niet een betere directory ("vraag het aan X") — het doel is dat X overbodig wordt.\
TMS optimaliseert voor snelle retrieval via de specialist; mass-learning optimaliseert voor het verdwijnen van die afhankelijkheid.

**❹ Kaizen-event versus kata** (zie [[rother-toyota-kata]])\
De post-mortem is in zijn huidige vorm een kaizen-event: een eenmalige, geïsoleerde interventie na een incident.\
Rother's onderscheid verklaart waarom dat zelden beklijft — het traint geen routine, het produceert alleen een eenmalige oplossing.\
Wat ontbreekt is een ingeoefende denkroutine ([[gemba]] → doelconditie → iteratie) die bij élk incident herhaald wordt, niet enkel de oplossing van dít incident.

**❺ Post-mortem en retro zijn complementair, geen alternatieven** (zie [[whitehouse-modes-of-religiosity]])\
De post-mortem is van nature imagistic: zeldzaam, intens, memorabel voor wie erbij was — maar niet schaalbaar.\
De retro is doctrinal: frequent, kalm, schaalbaar — maar oppervlakkig.\
Geen van beide vervangt de andere; mass-learning heeft de koppeling van beide nodig, niet een keuze ertussen.

Zie [[postmortem-voorbeeld]] voor een volledig, fictief uitgewerkt voorbeeld van hoe een postmortem met deze lagen eruitziet — inclusief het verschil in bruikbaarheid voor de meta-discussie.

**De gemeenschappelijke fix**\
Zowel de Tech Council als de post-mortem-praktijk missen dezelfde drie stukken:
- Een gekoppeld ADR/narratief-archief (Raymond + Snowden): niet enkel de conclusie, maar de weg ernaartoe, doorzoekbaar op situatie in plaats van op titel
- Een actief verspreidingsmechanisme (LeSS Traveller): iets dat de kennis naar de teams brengt, in plaats van te wachten tot teams de kennis komen halen
- Een ingeoefende routine in plaats van een eenmalig event (Kata): dezelfde denkstappen bij elk incident herhaald, gekoppeld aan het frequente, doctrinal ritme van de retro

De AI-laag (zie [[ai-assisted-scalable-learning]]) is waar beide samenkomen: een LLM kan het archief doorzoekbaar maken op situatie (Snowden's narrative database) én fungeren als schaalbare Traveller — kennis actief naar de juiste persoon op het juiste moment brengen, in plaats van een passieve database te zijn die niemand raadpleegt.

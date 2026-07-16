---
lang: nl
title: "🧩 Postmortem-voorbeeld: klassiek vs. Snowden-geïnformeerd"
icon: 🧩
author: "Synthese"
year: 2026
status: synthesis
tags: [post-mortem, snowden, antenarrative, sensemaker, narrative-database, mass-learning, template]
---

Dit is een volledig **fictief** voorbeeld — geen echt incident, geen echte namen, geen echte systemen.\
Het scenario (een queue die vastloopt tijdens een deploy) is hetzelfde als de losse fragmenten in [[snowden-complex-acts-of-knowing]]; hier staat het voor het eerst als één samenhangend, volledig document.

Het doel: laten zien wat een postmortem *wint* als je Snowden's eerste vier mechanismen toevoegt — niet als extra bureaucratie, maar als vier lagen die samen een postmortem transformeren van een archiefdocument naar een bruikbaar kennisartefact.

---

## Deel 1 — De klassieke postmortem

Dit is hoe een goede, degelijke postmortem er vandaag uitziet. Niets hieraan is fout — root cause, timeline en lessen zijn precies wat een postmortem-template vraagt.

> [!note]- Klassieke postmortem: "Queue-verwerking gestokt tijdens deploy"
> **Summary**\
> Tijdens een rolling deploy liep de job-queue vol. Verwerking van gebruikersacties (exports, notificaties) stond ~25 minuten stil.
>
> **Impact**\
> ~25 minuten vertraagde verwerking voor alle klanten met openstaande jobs. Geen dataverlies.
>
> **Detection**\
> Monitoring-alert op queue-lengte, gevolgd door een melding in het incident-kanaal.
>
> **Resolution**\
> De deploy werd voltooid; de queue verwerkte zichzelf leeg zodra alle workers op de nieuwe versie draaiden.
>
> **Root cause & contributing factors**\
> De nieuwe workerconfiguratie startte trager op dan de oude. Tijdens de overgang waren er tijdelijk te weinig actieve workers om de instroom van jobs bij te houden.
>
> **Timeline (UTC)**
>
> | Tijdstip | Gebeurtenis |
> |---|---|
> | 14:00 | Deploy start |
> | 14:23 | Queue-lengte begint te stijgen |
> | 14:41 | Alert triggert, incident geopend |
> | 14:48 | Deploy voltooid, alle workers actief |
> | 14:52 | Queue verwerkt, incident gesloten |
>
> **What went well**\
> Automatisch herstel zodra de deploy klaar was. Geen handmatige ingreep nodig.
>
> **Actions**\
> Onderzoek of workers sneller kunnen opstarten tijdens een rolling deploy.
>
> **Lessons learned**\
> Let beter op queue-metrics tijdens deploys.

Dit document is niet fout. Het is alleen **niet genoeg**: het antwoordt op *wat* er gebeurde, maar niet op wat de betrokkenen wísten vóór het duidelijk werd, hóe het voelde om erin te zitten, of hoe dit later terug te vinden is door iemand die iets vergelijkbaars meemaakt.

---

## Deel 2 — Dezelfde postmortem, Snowden-geïnformeerd

Zelfde incident. Vier lagen toegevoegd, zoals uitgewerkt in [[snowden-complex-acts-of-knowing]].

### Laag 1 — Antenarratief: de rauwe stroom vóór het verhaal

> [!quote]- Slack-thread, #incidents, dezelfde dag
> **14:23** — "is het normaal dat deze job al 40 minuten draait?"\
> **14:24** — "ja waarschijnlijk zware load"\
> **14:24** — "ok"\
> **14:41** — "wacht ik zie hier iets raars met de queue"\
> **14:41** — "queue length is 340, dat is niet normaal"\
> **14:42** — "@hier kan iemand meekijken?"

Deze thread staat niet in de klassieke versie. Maar de eerste "is dit normaal?" komt 18 minuten vóór het incident officieel geopend werd — iemand had het signaal al gezien, en las het verkeerd (of durfde het niet hard genoeg te zeggen). Dat is precies de tacit knowledge die een Root Cause-veld niet vangt.

### Laag 2 — Story elicitation: het verhaal van de betrokkene

**Klassieke vraag:** "Wat ging er fout?"\
**Antwoord:** "De workers startten trager op dan verwacht tijdens de rolling deploy."

**Snowden-vraag:** "Vertel me hoe het verliep."\
**Antwoord:** "Ik was aan het deployen en zag de queue-length al een beetje stijgen terwijl de deploy nog maar halverwege was. Normaal doet die dat pas na de laatste restart. Ik twijfelde even of ik moest pauzeren, maar er stond niemand anders op te letten en ik dacht: waarschijnlijk gewoon een piek. Tien minuten later kwam de alert."

Die twijfel — en de reden om toch door te gaan — staat nergens in de klassieke versie. Maar het is precies de kennis die de volgende persoon nodig heeft: *"als de queue tijdens een deploy sneller stijgt dan normaal, ook al is er geen alert, pauzeer en check."*

### Laag 3 — SenseMaker: de zelf-interpretatie van de betrokkene

Na de debrief plaatst elke betrokkene het incident op drie triades:

| Triade | Positie |
|---|---|
| Technisch / menselijk / procesmatig | Vooral **procesmatig** — het signaal was er, maar er was geen duidelijk "wie kijkt hier op" |
| Voorspelbaar / deels voorspelbaar / verrassend | **Deels voorspelbaar** — vergelijkbare stijgingen zijn al eerder gezien bij andere deploys |
| Makkelijk te voorkomen / moeilijk te voorkomen / onvermijdelijk | **Makkelijk te voorkomen** — een simpele drempelwaarde-alert tijdens deploys had dit voorkomen |

Eén incident geeft drie datapunten — op zich niet interessant. Maar zodra tien vergelijkbare incidenten dezelfde positie innemen ("procesmatig", "deels voorspelbaar", "makkelijk te voorkomen"), wordt een patroon zichtbaar dat niemand vooraf had benoemd: *niet de techniek faalt structureel, het is de "wie kijkt hier op tijdens een deploy"-vraag die telkens onbeantwoord blijft.*

### Laag 4 — Narrative database: geïndexeerd op situatie, niet op titel

Klassiek: dit document is vindbaar via de titel "Queue-verwerking gestokt tijdens deploy". Wie een ander probleem heeft, vindt het nooit.

Snowden-geïnformeerd: het incident wordt geïndexeerd op de **situatie**, niet enkel het label:

```
situatie: queue-lengte stijgt tijdens rolling deploy, vóór alert-drempel
component: job-queue, worker-opstart
signaal: iemand merkt het al op vóór het incident officieel opent
triade-positie: procesmatig / deels voorspelbaar / makkelijk te voorkomen
```

Zoekt iemand later op *"queue lengte loopt op tijdens deploy"*, dan vindt een LLM dit incident — niet omdat de titel overeenkomt, maar omdat de **situatie** overeenkomt. Dat is het verschil tussen "we hebben dit ooit gedocumenteerd" en "we hebben dit ooit geleerd."

---

## Vergelijking

| | Klassiek | Snowden-geïnformeerd |
|---|---|---|
| **Wat je leert** | Wat er technisch fout ging | Wat er technisch fout ging + wat iemand al vermoedde, hoe het voelde, en of het patroon is |
| **Vindbaar via** | Titel/tags | Situatie (LLM-doorzoekbaar) |
| **Bruikbaar voor de meta-discussie?** | Nee — één geïsoleerd document | Ja — SenseMaker-data stapelt op over incidenten heen |
| **Extra tijdsinvestering** | — | ~10-15 min: Slack-thread bewaren, twee extra vragen stellen, drie triades invullen |

---

## Waarom dit de meta-discussie makkelijker start

Het [[mass-learning]]-probleem is niet dat er te weinig postmortems zijn — de analyse van 23 echte postmortems (privé document, niet in deze KB) toonde vijf duidelijke clusters van herhaalde incidenten, **zonder dat één postmortem naar een andere verwees**. De informatie om die clusters te zien was er telkens al. Ze was alleen niet **geïndexeerd op een manier die het patroon zichtbaar maakt**.

Dat is exact waar de vier lagen samen het verschil maken:
- Zonder **Laag 3 (SenseMaker)** heb je geen vergelijkbare datapunten over incidenten heen — elk incident blijft een geïsoleerd verhaal.
- Zonder **Laag 4 (narrative database)** kan niemand — mens of AI — de vergelijkbare incidenten ook effectief terugvinden, zelfs als de datapunten er zijn.

Samen maken ze mogelijk wat [[ai-assisted-scalable-learning]] als AI-toepassing "meta-discussie" noemt: een periodieke "meta-brief" die observaties als *"3 van de laatste 5 incidenten met dit triade-patroon hangen samen met dezelfde onbeantwoorde 'wie kijkt hier op'-vraag"* naar boven haalt — niet omdat iemand het toevallig opmerkte, maar omdat de data het structureel toelaat.

De eerste stap is niet het bouwen van een narrative database. Het is het toevoegen van twee vragen aan de bestaande postmortem-debrief (zie [[snowden-complex-acts-of-knowing]]) en drie triades aan het einde — zonder het bestaande format te slopen.

---

## Verbinding met de kennisbank

- [[snowden-complex-acts-of-knowing]] — de vier lagen in detail, met de theoretische onderbouwing (Polanyi, Nonaka's grens)
- [[mass-learning]] — de synthese en de vijf clusters die dit voorbeeld motiveren
- [[rother-toyota-kata]] — waarom dit een ingeoefende routine moet worden, geen eenmalige toevoeging
- [[whitehouse-modes-of-religiosity]] — waarom een postmortem als geïsoleerd document (imagistic) een aparte, frequente laag (doctrinal) nodig heeft om te schalen
- [[ai-assisted-scalable-learning]] — de AI-toepassing die Laag 4 praktisch maakt: digest per postmortem + periodieke meta-brief

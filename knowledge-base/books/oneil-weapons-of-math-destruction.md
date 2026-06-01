---
title: "Weapons of Math Destruction: How Big Data Increases Inequality and Threatens Democracy"
author: "Cathy O'Neil"
year: 2016
status: reference
rating: not rated
tags: [ai-ethics, algorithmic-bias, inequality, data, discrimination]
source: reference
---

## Core idea

Algoritmen die ingezet worden bij onderwijs, krediet, aanwerving en justitie zijn niet neutraal — ze zijn verpakte vooroordelen op schaal. Ze zijn ondoorzichtig, moeilijk aanvechtbaar, en versterken systematisch de ongelijkheid die ze beweren objectief te meten. O'Neil noemt ze Weapons of Math Destruction (WMD's).

## Key concepts

[[algorithmic-bias]], [[opacity]], [[feedback-loops]], [[proxy-discrimination]], [[scale-damage]], [[wmd-definition]]

## What I took from it

### General

*Samenvatting gebaseerd op externe bronnen.*

O'Neil is zelf wiskundige en voormalig Wall Street-kwant. Ze schrijft vanuit insider-kennis over hoe modellen gebouwd worden — en vanuit groeiend ongemak over wat er mis gaat als die modellen op mensen worden losgelaten. Het boek is geen theoretisch betoog maar een reeks concrete case studies: onderwijs, krediet, aanwerving, verzekering, politiewerk, politieke targeting.

### Connection to our work

**De operationalisering van Véliz.** Waar Véliz het filosofisch-politieke argument maakt (predictie als machtsinstrument), toont O'Neil het mechanisme in de praktijk — domein per domein, met namen, data en gevolgen. Samen zijn ze het sterkste duo voor concrete AI-ethiek.

**De drie kenmerken van een WMD.** O'Neil's definitie is bruikbaar als diagnostisch instrument voor elke AI-implementatie: is het systeem ondoorzichtig? Heeft het schaal? Veroorzaakt het schade? Drie vinkjes = WMD-risico.

**Feedback loops als systeemprobleem.** O'Neil beschrijft hoe WMD's reinforcing loops creëren: een arme buurt krijgt slechte kredietscores → bewoners kunnen niet verhuizen of investeren → de buurt blijft arm → de scores blijven slecht. Dit is Meadows' reinforcing loop rechtstreeks toegepast op algoritmische discriminatie.

**Proxy-discriminatie.** Algoritmen mogen wettelijk niet op ras of gender selecteren — maar ze selecteren op postcode, school, naam, en andere variabelen die sterk correleren met ras en gender. Het resultaat is juridisch verdedigbaar en maatschappelijk identiek aan directe discriminatie.

Related: [Prophecy: Prediction, Power, and the Fight for the Future, from Ancient Oracles to AI](veliz-prophecy-prediction-power-and-the-fight-for-the-future.md), [The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power](zuboff-the-age-of-surveillance-capitalism.md), [De meeste mensen deugen: Een nieuwe geschiedenis van de mens](bregman-de-meeste-mensen-deugen-een-nieuwe-geschiedenis-van-de-mens.md), [Power and Perspectives Not Taken](../articles/galinsky-power-and-perspectives-not-taken.md), [Thinking In Systems: A Primer](meadows-thinking-in-systems-a-primer.md)

---

## Samenvatting

### De definitie: wat maakt een WMD?

O'Neil's diagnostische criteria — elk algoritme dat aan de drie voldoet is een Weapon of Math Destruction:

| Criterium | Betekenis | Risico |
|---|---|---|
| **Opacity** | Het model is ondoorzichtig voor de getroffen persoon | Geen bezwaar mogelijk, geen verklaring |
| **Scale** | Het model treft miljoenen mensen consistent | Systematische fouten worden miljoenen keer herhaald |
| **Damage** | Het model veroorzaakt aantoonbare schade | Kansen ontzegd, levens beperkt |

### Concrete cases

**Leraarbeoordelingsmodellen (onderwijs)**
New York City implementeerde in 2009 een model om "slechte leraren" te identificeren op basis van leerlingprestaties. Leraren kregen scores, de laagste werden ontslagen. Probleem: de scores fluctueerden willekeurig van jaar tot jaar voor dezelfde leraren — een statistische eigenschap van het model, niet van de leraren. Leraren verloren hun baan op basis van ruis.

**Kredietmodellen**
Een student uit een arme buurt krijgt een hoge risicoklasse toegewezen op basis van postcode. Lening geweigerd → geen opleiding → blijft in armoede → bevestigt de risicoscore. De spiraal is gesloten. Het model heeft geen ongelijk — maar het model *creëerde* gelijk.

**Recidive-algoritmen (justitie)**
COMPAS (Correctional Offender Management Profiling for Alternative Sanctions) voorspelt recidiverisico voor rechtbanken. ProPublica-onderzoek (2016) toonde aan dat het systeem zwarte verdachten significant vaker als hoog-risico classificeerde dan blanke verdachten met vergelijkbare achtergrond.

**Aanwervingsalgoritmen**
Systemen die sollicitanten screenen op basis van "succesvolle" historische profielen reproduceren wie er in het verleden aangenomen *werd* — niet wie er succesvol *had kunnen zijn*. Historisch witte, mannelijke profielen worden de standaard. Diversiteit wordt algoritmisch gefilterd.

**Predictive policing**
Algoritmen voorspellen criminaliteit op buurt- en persoonsniveau. Maar de trainingsdata is gebouwd op historische arrestaties — die zelf het product zijn van ongelijke politie-aanwezigheid. Zwarte buurten werden intensiever gepatrouilleerd → meer arrestaties → hogere risicoklasse → meer patrouillering. De bias wordt niet gecorrigeerd; ze wordt versterkt.

### Het kernprobleem: modellen zijn geen spiegels

> *"Models are opinions embedded in mathematics."*

Een model is geen objectieve meting van de werkelijkheid. Het is een gecodeerde mening over welke variabelen relevant zijn, welke uitkomsten gewenst zijn, en welke groepen tellen. Die mening is verborgen achter de autoriteit van wiskunde.

### Verbinding met Galinsky en Véliz

Galinsky toont dat mensen met macht automatisch minder rekening houden met het perspectief van anderen. O'Neil toont dat algoritmen gebouwd door mensen met macht datzelfde perspectief institutionaliseren — op schaal, consistent, zonder gezicht. Véliz voegt toe: de taal van objectiviteit (het model zegt) maakt dat onzichtbaar.

---

## Bronnen

- [Wikipedia — Weapons of Math Destruction](https://en.wikipedia.org/wiki/Weapons_of_Math_Destruction)
- [Ford Foundation — interview O'Neil](https://www.fordfoundation.org/news-and-stories/stories/weapons-of-math-destruction-data-scientist-cathy-oneil-on-how-unfair-algorithms-perpetuate-inequality/)
- [Scientific American — recensie](https://www.scientificamerican.com/blog/roots-of-unity/review-weapons-of-math-destruction/)
- [ResearchGate — academische recensie](https://www.researchgate.net/publication/314165204_Cathy_O'Neil_Weapons_of_Math_Destruction_How_Big_Data_Increases_Inequality_and_Threatens_Democracy_New_York_Crown_Publishers_2016_272p_Hardcover_26_ISBN_978-0553418811)

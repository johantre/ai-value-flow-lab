---
title: "On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?"
author: "Emily M. Bender, Timnit Gebru, Angelina McMillan-Major, Margaret Mitchell"
year: 2021
status: reference
rating: 5/5
tags: [ai-ethics, large-language-models, bias, environmental-cost, meaning]
source: https://dl.acm.org/doi/10.1145/3442188.3445922
---

## Core idea

Grote taalmodellen (LLMs) begrijpen niets van wat ze produceren. Ze zijn statistische papegaaien — ze combineren taalpatronen uit trainingsdata zonder enige referentie aan betekenis. Dat is niet alleen een technisch probleem: het heeft directe gevolgen voor bias, milieu, en de illusie van begrip die ze wekken.

## Key concepts

[[stochastic-parrot]], [[meaning-vs-form]], [[training-data-bias]], [[environmental-cost-ai]], [[coherence-illusion]], [[marginalised-communities]]

## What I took from it

### General

Gepubliceerd in de proceedings van FAccT 2021 (ACM Conference on Fairness, Accountability, and Transparency). Het artikel leidde tot het ontslag van Timnit Gebru bij Google — ze had het paper intern gecirculeerd en Google wilde publicatie blokkeren. De controverse rond de publicatie is zelf een illustratie van een van de centrale argumenten: de machtsstructuren in de AI-industrie onderdrukken kritische stemmen, met name die van vrouwen en mensen van kleur.

### Connection to our work

**De coherentie-illusie.** Een LLM produceert vloeiende, overtuigende tekst — maar die vloeiendheid zegt niets over de waarheid of het begrip erachter. Dit is direct relevant voor organisaties die AI-output behandelen als betrouwbare analyse: het systeem *klinkt* als iemand die weet wat hij zegt. Het is een stochastische papegaai die patronen combineert.

**Newspeak via statistiek.** LLMs trainen op het corpus van wat mensen schreven — inclusief alle bias, uitsluiting en machtsasymmetrie daarin. Ze reproduceren de dominante stem, de dominante taal, het dominante perspectief. Gemarginaliseerde perspectieven zijn ondervertegenwoordigd in trainingsdata en worden dus systematisch ondergegenereerd. Het model spreekt met de autoriteit van "taal in het algemeen" terwijl het een deelset reproduceert.

**Milieu- en machtskost.** De energie- en financiële kosten van grote modellen zijn niet democratisch verdeeld. Ze worden gedragen door de samenleving (CO₂, water voor koeling) en door de gemeenschappen die het minst profiteren van de technologie — en die het meest schade ondervinden van haar bias.

**Geen grootte als oplossing.** De industrie-aanname "groter = beter" wordt hier systematisch ondermijnd. Meer parameters los geen fundamenteel probleem op: een model dat taal zonder betekenis verwerkt, verwerkt meer taal zonder betekenis als je het opschaalt.

Related: [Prophecy: Prediction, Power, and the Fight for the Future, from Ancient Oracles to AI](../books/veliz-prophecy-prediction-power-and-the-fight-for-the-future.md), [Weapons of Math Destruction: How Big Data Increases Inequality and Threatens Democracy](../books/oneil-weapons-of-math-destruction.md), [The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power](../books/zuboff-the-age-of-surveillance-capitalism.md), [Newspeak](../concepts/newspeak.md)

---

## Samenvatting

### Wat is een stochastische papegaai?

> *"A system for haphazardly stitching together sequences of linguistic forms it has observed in its vast training data, according to probabilistic information about how they combine, but without any reference to meaning."*

Een LLM voorspelt welk token (woord, subwoord) waarschijnlijk volgt op de vorige tokens — op basis van patronen in trainingsdata. Het produceert tekst die coherent *lijkt* omdat het getraind is op coherente tekst. Maar het heeft geen model van de wereld, geen intenties, geen begrip van wat de woorden betekenen.

De naam "stochastische papegaai" vat het samen: een papegaai herhaalt klanken die bij de context passen — niet omdat hij begrijpt wat hij zegt, maar omdat het patroon klopt.

### De vijf centrale gevaren

**1. Omgevingskosten**
Training van grote modellen verbruikt enorme hoeveelheden energie. De auteurs berekenden dat het trainen van een groot taalmodel evenveel CO₂ uitstoot als vijf auto's over hun volledige levensduur. Die kosten worden geëxternaliseerd naar de samenleving — en treffen ongelijk: de gemeenschappen die het kwetsbaarst zijn voor klimaatgevolgen, profiteren het minst van de technologie.

**2. Trainingsdata als bevroren bias**
LLMs trainen op het internet — een corpus dat dominant wit, Engels en westers is, en dat historische machtsrelaties weerspiegelt. Bias in de data wordt bias in het model, opgeschaald naar miljoenen interacties. Het model leert niet "taal" — het leert de taal van wie er geschreven heeft en wiens tekst gecrawled werd.

**3. De coherentie-illusie**
Vloeiende output wekt de indruk van begrip en betrouwbaarheid. Gebruikers vertrouwen output die goed klinkt — ook als die feitelijk onjuist of ideologisch gekleurd is. Dit is gevaarlijker dan een systeem dat duidelijk faalt: het faalt onzichtbaar.

**4. Risico op misbruik**
Tekst die overtuigend klinkt maar inhoudsloos is, is een gereedschap voor desinformatie, manipulatie en propaganda op schaal. De drempel voor het produceren van geloofwaardige maar valse inhoud daalt dramatisch.

**5. Verdringing van alternatieve benaderingen**
De focus op schaal en compute verbruikt onderzoekscapaciteit en middelen die anders naar meer gerichte, ethisch doordachte benaderingen zouden gaan. Groter worden als standaard-antwoord op elk probleem is een wetenschappelijke en morele keuze — geen neutrale evolutie.

### Waarom dit artikel historisch is

Het paper werd intern gecirculeerd bij Google in 2020. Google vroeg Timnit Gebru haar naam van het paper te verwijderen of publicatie uit te stellen. Ze weigerde. Ze werd ontslagen. De zaak werd wereldnieuws en leidde tot brede discussie over de suppressie van kritische AI-ethiek door de industrie die ze zou moeten corrigeren.

De controverse illustreert een van de papers eigen punten: de machtstructuren in de AI-industrie bepalen welke vragen gesteld mogen worden — en welke niet.

### Verbinding met Newspeak en Véliz

Véliz: "de voorspelling is een beslissing vermomd als objectiviteit."
Stochastic Parrots: "de coherente tekst is een patroon vermomd als begrip."

Beide beschrijven hetzelfde mechanisme op verschillende niveaus: de taal van autoriteit (objectiviteit, coherentie, wiskunde) verhult het ontbreken ervan. Newspeak in de Orwelliaanse zin werkt niet via censuur maar via de schijn van normaliteit — en een LLM die overtuigend schrijft over onderwerpen hij niet begrijpt, is een perfecte Newspeak-machine.

---

## Bronnen

- [ACM Digital Library — originele publicatie](https://dl.acm.org/doi/10.1145/3442188.3445922)
- [PDF via auteurs](https://s10251.pcdn.co/pdf/2021-bender-parrots.pdf)
- [Wikipedia — Stochastic parrot](https://en.wikipedia.org/wiki/Stochastic_parrot)
- [Science for the People — toegankelijke uitleg](https://magazine.scienceforthepeople.org/vol24-2-dont-be-evil/stochastic-parrots/)

---
title: "Accelerate: Building and Scaling High Performing Technology Organizations"
author: "Nicole Forsgren"
year: 2018
status: read
rating: 5/5
tags: [agile]
source: goodreads
---

## Core idea

Research-backed evidence that software delivery performance predicts organizational performance. Four key metrics (DORA): Deployment Frequency, Lead Time for Changes, MTTR, Change Failure Rate.

## Key concepts

[[dora-metrics]], [[deployment-frequency]], [[lead-time]], [[mttr]], [[change-failure-rate]], [[evidence-based-management]], [[capabilities-vs-maturity]]

## What I took from it

### General

Het onderscheidende aan dit boek is dat het wetenschappelijk is in een veld vol meningen. Forsgren en co-auteurs bouwden een rigoureuze research-methodologie — niet enquêtes met "wat denk je dat werkt?" maar structurele regressiemodellen die voorspellen welke praktijken leiden tot welke uitkomsten. De DORA-metrics zijn niet een mening — ze zijn predictors met aangetoonde causale richting.

### Connection to our work

Measurement framework for the sensing cadence. When AI is applied to software/data processes, DORA metrics indicate health. Evidence-based management approach aligns with probe-sense-respond. Related: [The DevOps Handbook: How to Create World-Class Agility, Reliability, and Security in Technology Organizations](kim-the-devops-handbook-how-to-create-world-class-agility-reliab.md)

---

## Samenvatting

### Centrale stelling

Er is geen inherente trade-off tussen snelheid en stabiliteit. High-performing software teams deployen *frequenter* én hebben *minder incidenten* én herstellen *sneller* van incidenten. De aanname dat "snel" en "stabiel" tegengestelden zijn is een beperking van cultuur en praktijk, geen wet van de natuur.

---

### De vier DORA-metrics

| Metric | Wat het meet | High performer |
|---|---|---|
| **Deployment Frequency** | Hoe vaak deploy je naar productie? | Meerdere keren per dag |
| **Lead Time for Changes** | Hoe lang van code commit tot productie? | Minder dan een uur |
| **Time to Restore Service (MTTR)** | Hoe lang herstellen van een incident? | Minder dan een uur |
| **Change Failure Rate** | Welk % deployments veroorzaakt problemen? | 0–15% |

**Kernbevinding**: deze vier metrics clusteren samen. Organisaties die goed zijn op één zijn systematisch goed op alle vier. Ze meten hetzelfde onderliggende fenomeen: de kwaliteit van de feedbackloop.

---

### Wat werkt — causale verbanden

**Sterkste technische predictors:**
- Continuous Integration
- Trunk-based development (kleine, frequente commits op main)
- Test Automation
- Deployment Automation
- Monitoring & Observability
- Loosely coupled architecture

**Lean management practices:**
- Kleine batch sizes
- Visueel werkbeheer
- Klantfeedbackloops
- Experimenteren als normaal onderdeel van werk

**Cultuur (Westrum's generative culture)**:
Sterkste enkele predictor voor zowel software delivery performance als organisatiegezondheid. High-trust, informatie-georiënteerde cultuur — niet als soft "nice to have" maar als causale factor.

---

### De leer-loop als kern

De meta-observatie: high-performing teams leren sneller — niet omdat ze slimmer zijn, maar omdat hun systeem sneller feedback geeft.

Deploy frequently → zie resultaten sneller → leer sneller → verbeter sneller.

Het is een feedbackloop, niet een talent. Hoe sneller de loop, hoe sneller het leren. Organisaties die zeldzaam deployen breken de leer-loop structureel.

---

### Psychologische veiligheid als structurele predictor

De verrassende bevinding: psychologische veiligheid (Google Project Aristotle's #1 factor) is ook in Forsgren's data een significante predictor van software delivery performance. Teams die fouten kunnen benoemen zonder angst deployen beter — niet alleen werken ze fijner.

> Cultuur is niet de context van het werk. Het is een causale factor.

---

### DORA-logica toegepast op AI

De analogie voor AI-adoptie: definieer vier equivalente metrics —
1. Hoe snel rollen we AI-configuratiewijzigingen uit?
2. Hoe lang van AI-aanbeveling tot zichtbaar resultaat in productie?
3. Hoe snel detecteren we een fout in AI-output?
4. Welk percentage AI-aanbevelingen leidt achteraf tot problemen?

Zonder deze metrics weet je niet of je AI-leer-loop werkt. En een kapotte leer-loop is het stilste en gevaarlijkste organisatieprobleem — het produceert geen alarmen, alleen langzame degradatie.

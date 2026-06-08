---
title: "AI Productivity Paradox Report"
author: "Faros AI"
year: 2025
status: reference
tags: [ai-adoption, software-development, bottleneck, code-review, metrics]
source: https://www.faros.ai/ai-productivity-paradox
---

## Core finding

Telemetrie-analyse van **10.000+ developers verdeeld over 1.255 teams**: individuen worden sneller met AI, maar dat vertaalt zich niet naar betere teamresultaten — de bottleneck verschuift gewoon van *produceren* naar *controleren*.

## Key findings

- Developers in teams met hoge AI-adoptie ronden 21% meer taken af en mergen 98% meer pull requests
- Maar: PR review-tijd steeg met 91%; gemiddelde PR-grootte +154%; bugs per developer +9%
- **Vervolgrapport, ander cijfer dat veel rondzwerft — vaak met een verkeerde uitleg erbij**: Faros publiceerde in 2026 een tweede rapport op een groter dataset (22.000 developers, 4.000+ teams, twee jaar telemetrie) — [*The AI Acceleration Whiplash*](https://www.faros.ai/blog/ai-acceleration-whiplash-takeaways) — met daarin, [in Faros' eigen woorden](https://www.faros.ai/blog/ai-acceleration-whiplash-takeaways): *"Code churn, the ratio of lines deleted to lines added for merged code in a given quarter, has increased **861%** under high AI adoption. At nearly 10 times the prior rate, significantly more code is being removed relative to what is being added."* Dat is iets anders dan hoe dit cijfer meestal wordt doorverteld ("het aandeel code dat na oplevering hersteld moest worden steeg met 861%") — **het gaat niet over bugs** maar over **churn**: de verhouding tussen geschreven en alwéér weggegooide of herschreven code. Bijna 10 keer zoveel herschrijfwerk als voorheen — **een signaal van massale onzekerheid over wat er net is opgeleverd: schrijven, heroverwegen, weggooien, opnieuw beginnen**
- Op organisatieniveau: geen significante correlatie tussen AI-adoptie en verbetering — in [Faros' eigen woorden](https://www.faros.ai/blog/ai-software-engineering): *"we observed no significant correlation between AI adoption and improvements at the company level. Across overall throughput, DORA metrics, and quality KPIs, the gains observed in team behavior do not scale when aggregated"*
- De kern van de paradox, in [Faros' eigen formulering](https://www.faros.ai/blog/ai-software-engineering): *"Developers using AI are writing more code and completing more tasks... Any correlation between AI adoption and key performance metrics evaporates at the company level"*

## Connection to our work

Dit is het scherpste cijfermatige bewijs dat we tot nu toe hebben voor een **dynamiek die nog geen eigen plek heeft** in de [AI Org Dysfunction Map](../issues/ai-org-dysfunction-map.md): de **verschuiving van de bottleneck** van creatie naar verificatie, zonder dat die verificatielast ergens georganiseerd is.

Vanuit Theory of Constraints-perspectief (zie [The Goal](../books/goldratt-the-goal.md)): je lost een bottleneck niet op door de doorvoer ervóór te verhogen — je verhoogt enkel de druk erop, tenzij je het hele systeem herontwerpt. Dat is precies wat hier gebeurt: de instroom versnelt (individu), maar de bottleneck verschuift niet mee — hij wordt zwaarder belast (review).

De churn-cijfers uit het vervolgrapport scherpen dat beeld nog verder aan: als bijna tien keer zoveel net-geschreven code alweer wordt weggegooid of herschreven, is een deel van de "gestegen output" zelf een optisch effect — werk dat twee (of meer) keer gedaan wordt, telt in de doorvoercijfers mee als snelheid, terwijl het in werkelijkheid evengoed onderdeel is van de bottleneck: tijd en aandacht die opnieuw door dezelfde nauwe doorgang moeten.

Versterkt ook **Snelheidsasymmetrie** (output stijgt sneller dan het vermogen om ze te valideren) en is de cijfermatige tegenhanger hiervan.

---
title: "State of AI-Assisted Software Development 2025"
author: "Google Cloud / DORA team"
year: 2025
status: reference
tags: [ai-adoption, software-development, productivity, amplification, trust]
source: https://services.google.com/fh/files/misc/2025_state_of_ai_assisted_software_development.pdf
---

## Core finding

> "AI's primary role in software development is that of an amplifier. It magnifies the strengths of high-performing organizations and the dysfunctions of struggling ones."

Op basis van het volledige PDF-rapport (142 p., survey liep 13 juni – 21 juli 2025, ruim 100 uur kwalitatieve data + bijna 5.000 respondenten): AI-adoptie steeg naar 90% (+14,1% t.o.v. vorig jaar), met een mediaan van 2 uur per dag actief AI-gebruik — ongeveer een kwart van een werkdag. Meer dan 80% rapporteert hogere productiviteit — maar 30% heeft weinig tot geen vertrouwen in AI-gegenereerde code (7% "helemaal niet", 23% "een beetje" — tegenover 70% met minstens een zekere mate van vertrouwen).

## Key findings

- **Reflexief gebruik blijft laag**: slechts 7% van de AI-gebruikers grijpt "altijd" naar AI bij een probleem of taak; wel gebruikt 60% AI "ongeveer de helft van de tijd" of vaker — AI is alomtegenwoordig, maar nog geen automatische reflex
- **Frictie verdwijnt niet, ze verschuift**: *"friction doesn't vanish so much as move: it shifts from manual grind to deciding and verifying, possibly in the form of prompt iteration, result vetting, and assessing code that looks remarkably similar to correct code"* — een bijna woordelijke bevestiging van de bottleneck-verschuiving die ook Faros cijfermatig meet
- **Scherpe perceptie-realiteit kloof (METR-onderzoek, aangehaald door DORA)**: developers die door AI-tools 19% *trager* werkten, geloofden zelf dat diezelfde tools hen 20% *sneller* maakten — een omkering die niet in de output zit, maar in de zelfwaarneming
- **"The landscape of AI's impact" (Fig. 28, gestandaardiseerde effectgroottes)**: hogere AI-adoptie correleert met hogere individuele effectiviteit (sterkste effect), hogere organisatieprestatie, meer "valuable work", hogere codekwaliteit, productprestatie, software delivery throughput én teamprestatie — maar óók met **hogere software delivery instability** (expliciet als ongewenst gemarkeerd). Burnout en frictie blijven nagenoeg vlak: AI verschuift de uitkomsten die dicht bij het individu liggen, maar raakt nauwelijks aan wat **systemisch** verankerd zit
- Adoptie wordt voor een belangrijk deel gedreven door **"fear of missing out" (FOMO)** — sociale druk, geen doordachte strategie, aldus de geïnterviewden zelf

## Connection to our work

Dit is directe empirische bevestiging van onze **centrale these**: *"AI introduceert geen dysfunctions uit het niets. Het versnelt, vergroot en verhult."* DORA onderbouwt daarmee ook het **meta-principe** in [AI Org Dysfunction Map](../issues/ai-org-dysfunction-map.md#het-meta-principe-ai-als-versterker-van-bestaande-dysfunctions) — letterlijk tot in de formulering ("amplifier... magnifies the strengths... and the dysfunctions").

De zin over frictie die *"shifts from manual grind to deciding and verifying"* is vrijwel een parafrase van wat [Faros AI Productivity Paradox](faros-ai-productivity-paradox.md) cijfermatig aantoont (PR review-tijd +91%, hersteld-na-oplevering +861%): **twee onafhankelijke bronnen die exact dezelfde bottleneck-verschuiving beschrijven** — van *creëren* naar *controleren*. Dat maakt "verschuiving van de bottleneck" een sterke kandidaat voor een **nieuwe, eigen plek** in de dysfunction map.

De METR-bevinding (19% trager, maar 20% sneller "gevoeld") is wellicht het scherpste bewijs in deze hele bronnenreeks voor **Opaciteit**: niet alleen output kan een illusie van kwaliteit wekken — het *gevoel van eigen snelheid* blijkt even hard te kunnen bedriegen. Dat ondermijnt het argument dat zelfrapportage ("ik voel me productiever") op zich voldoende is om AI-adoptie te verantwoorden — en versterkt waarom de [Faros](faros-ai-productivity-paradox.md)- en [Workday](workday-beyond-productivity-measuring-real-value-of-ai.md)-bevindingen over de **verificatielast** zo'n noodzakelijke correctie zijn op het zelfbeeld van developers.

Tot slot: dat burnout en frictie in dit onderzoek nauwelijks bewegen terwijl individuele effectiviteit en instabiliteit wél stijgen, is zelf een illustratie van de **amplifier**-these — AI raakt het snelst aan wat al los zat (snelheid, output, instabiliteit), en het traagst aan wat dieper in cultuur en systeem verankerd zit (burnout, frictie). Precies het mechanisme dat de [AI Org Dysfunction Map](../issues/ai-org-dysfunction-map.md) als meta-principe beschrijft.

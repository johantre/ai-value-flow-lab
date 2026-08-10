---
lang: nl
---

# CLAUDE.md — AI Value Flow Lab

## Wat is dit project?

Een publieke kennisbank over organiseren in het AI-tijdperk: hoe AI value flow verandert, waar het bestaande organisatieproblemen versterkt, en wat een geloofwaardig pad naar "AI-native" eruitziet.

Gebouwd met [Quartz v5](https://quartz.jzhao.xyz/) en gepubliceerd op GitHub Pages: `https://johantre.github.io/ai-value-flow-lab/`

De eigenaar en primaire auteur is **Johan** — organisatieontwerper, change manager, Lean/LeSS-practitioner (C-OTC 2025, DAO 2024).

---

## Mapstructuur

```
books/          213 boeksamenvattingen (eigen notities + analyses)
concepts/       557 conceptpagina's (definities, verbanden, KB-entries)
articles/       21 samenvattingen van wetenschappelijke artikelen
trust-by-design/ 4 synthesedocumenten (zie hieronder)
issues/         AI-organisatie disfuncties en oplossingen
ai-first/       Workflow-templates voor AI-native organisaties
presentations/  Presentatiemateriaal
quartz-custom/  Custom JS, SCSS en build-scripts voor Quartz
```

### trust-by-design — het centrale syntheseswerk

Vier synthesedocumenten die wetenschappelijke literatuur + praktijkcases verbinden:

| Synthese | Focus |
|---|---|
| `beyond-the-review/` | Alternatieven voor klassieke performance reviews |
| `the-performance-illusion/` | Waarom traditionele evaluatie niet werkt |
| `beyond-the-bonus/` | Alternatieve beloningsmodellen |
| `the-kindness-trap/` | Bad apples, sociale dynamiek, interventiebarrières |

Dit werk vormt de basis van een adviestraject rond **trust-by-design**: organisaties begeleiden naar een cultuur van psychologische veiligheid, Radical Candor, en eerlijke prestatiebeoordeling.

---

## Technische setup

- **Quartz v5** bouwt de site vanuit deze repo als `content/`-map
- **Deploy** via GitHub Actions (`.github/workflows/quartz-deploy.yml`) op elke push naar `master` van `.md`-bestanden of `quartz-custom/`
- **Custom JS**: `quartz-custom/sidebar-resize.js` — sidebar resizing, explorer scroll-positie, anchor scroll fix, book cover relocatie
- **Custom SCSS**: `quartz-custom/custom.scss`
- **Listing metadata**: `quartz-custom/extract-listing-meta.py` + `listing-sort.js`

### Bekende Quartz-beperking

Cross-synthese links vanuit folder-index pagina's (bv. `trust-by-design/beyond-the-review/beyond-the-review.md`) geven 404 op de live site. Oorzaak: Quartz behandelt `{folder}/{folder}.md` als folder-index en berekent relatieve URLs incorrect. Geaccepteerd als known limitation.

### Explorer-sortering

De sidebar-Explorer sorteert **niet** op het `order`-veld in frontmatter — Quartz's content-index geeft dat veld niet door aan de client, dus de standaard-sortering valt terug op alfabetisch. De echte volgorde wordt bepaald door een hardcoded slug-lijst (`window.__explorerSlugOrder`) in `quartz-custom/explorer-order-patch.js`. Wil je dat een nieuwe folder of pagina in een specifieke volgorde in de sidebar verschijnt, voeg het slug-pad daar toe — `order:` in frontmatter aanpassen heeft geen enkel effect op de sidebar-volgorde.

### Link-conventie

- **1 niveau diep** (`books/` → `concepts/`): gebruik `../concepts/bestand.md`
- **2+ niveaus diep**: gebruik bare wikilink `[[bestandsnaam]]` (Quartz-bug met `../../`)

---

## Inhoudsconventies

### Boekpagina's (`books/`)

Frontmatter:
```yaml
---
title: "Volledige boektitel"
author: "Achternaam Voornaam"
year: 2024
tags: [relevante, tags]
source: goodreads   # of URL
---
```

- Altijd `![cover](./slugnaam/cover.jpg)` zetten als eerste regel na frontmatter — ook als de afbeelding er nog niet is
- Nooit `status: read` of `rating:` invullen tenzij Johan dit expliciet bevestigt
- Elke quote of cijfer krijgt een inline link naar de exacte bron-URL

### Conceptpagina's (`concepts/`)

Frontmatter:
```yaml
---
type: concept
tags: [concept, relevante-tags]
---
```

### Schrijfstijl

- Gebruik `\` aan het einde van een zin voor een harde regelbreuk wanneer de volgende zin een zelfstandig inzicht is (gevolg, conclusie, omkering) — niet mechanisch elke zin
- Geen correctienoten in de KB ("Noot: eerdere versie zei X") — fix stilzwijgend, git houdt history bij
- Wikilinks `[[concept]]` voor interne KB-verbanden; relatieve paden voor directe bestandslinks

### Bronvermelding

- Verifieer altijd broninhoud via WebFetch voor je een claim toevoegt — ook als je er zeker van bent
- Paywalled bronnen: vermeld zowel origineel (credit) als de pagina die je echt las
- Elke wikilink in een KB-artikel moet gedekt zijn door een bestaand bestand — controleer na elke schrijftaak

---

## Werkafspraken

- **Taal**: Nederlands in gesprek, tenzij Johan zelf naar het Engels overschakelt
- **Commits**: altijd in het Engels, wacht op expliciete vraag van Johan voor committen/pushen
- **Commit Co-Author**: geen `Co-Authored-By`-regel toevoegen — commits blijven puur onder Johans eigen git-identiteit
- **Mermaid-diagrammen**: gebruik Unicode cirkelnummers (❶❷❸) voor genummerde nodes — `1.` triggert markdown-lijst parsing
- **Voor CSS/JS-fixes**: eerst testen via browser-console snippet, dan pas in code committen

---

## Uitgebreide geheugenbestanden

Gedetailleerde werkafspraken en projectcontext staan voor de linux box in:
`/home/johan/.claude/projects/-home-johan-ai-value-flow-lab/memory/`

Indexbestand: `MEMORY.md` in die map.

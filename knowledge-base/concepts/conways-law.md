---
type: concept
tags: [concept, organizational-design, system-design, communication-structure]
---

# Conway's Law

Any organization that designs a system will produce a design whose structure mirrors its communication structure. First articulated by Melvin Conway in 1968.

Three layers:

1. **The Law** (descriptive): your system design *will* reflect your org's communication structure, whether intended or not. Silos in the org produce seams in the system.

2. **The Inverse Conway Maneuver** (prescriptive): deliberately design teams and communication structures to produce the system architecture you *want*. Used intentionally as an org design tool. Popularized by Skelton & Pais (*Team Topologies*).

3. **Conway's own nuance** (often missed): teams should be *flexible relative to architecture* — not shaped by it. Architecture is never complete; it is always in flux. Anchoring teams to current architecture artifacts locks them to yesterday's design. Design teams around the *communication need*, and let architecture follow.

---

## Books that address this concept

- [How Do Committees Invent?](../articles/conway-how-do-committees-invent.md)

---

## Connection to our work

**In value stream mapping (Section 3)**: every handoff, role boundary, and approval gate you observe is the organization's communication structure made visible. What exists is not a neutral process — it is the org's self-portrait.

**In greenfield design (Section 8)**: the question "who needs to talk to whom, about what?" comes before the question "what is the architecture?" Communication structure is the design input; system architecture is the output.

**In AI-first design decisions (Section 9)**: the Inverse Conway Maneuver is an explicit, named design choice. State it as a principle: "We will deliberately restructure teams and communication to produce the AI-native system architecture we want."

**Warning for AI transformations**: if you implement AI tooling without changing the communication structure, Conway's Law guarantees the AI will replicate the existing org's dysfunction in digital form.

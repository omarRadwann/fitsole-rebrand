# 68 — Client Conversion vs Award Taste

The tension every senior project hits: the user wants the site to **convert**, and the operator wants the site to **win**. These two goals overlap more than people think — but where they diverge, this file is the tie-breaker.

## The shared truth

A site that converts well usually has:
- a clear pitch
- a believable proof
- a present primary action
- a fast first paint
- a mobile composition that works

A site that wins awards usually has:
- a clear idea
- a signature interaction
- a memorable screenshot
- restraint
- craft

There is enormous overlap. Most genuine craft makes conversion better, not worse. The disagreements are narrower than the war stories suggest.

## Where they actually disagree (and what to do)

### 1. Hero copy

- **Conversion** wants: outcome-led headline, present CTA, sub-headline that names the audience and pain.
- **Award taste** wants: editorial, restrained, idea-led. Sometimes a fragment of a sentence, sometimes a single noun.

**Resolution**: idea-led hero is acceptable only if the section *immediately after the fold* does the conversion job. A single-screen editorial hero with no follow-through is an award gamble at the cost of revenue.

### 2. Above-the-fold

- **Conversion** wants: H1, sub-headline, primary CTA, secondary CTA, trust signal.
- **Award taste** wants: a single composition, no clutter.

**Resolution**: H1 + sub + primary CTA above the fold; secondary CTA and trust signal can move below if the composition needs it. Removing the primary CTA is rarely worth it.

### 3. Motion

- **Conversion** wants: motion that doesn't delay comprehension.
- **Award taste** wants: motion as language.

**Resolution**: any motion above the fold must complete in under 1.5s for first paint. Long cinematic sequences belong below the fold, where the user has chosen to stay.

### 4. 3D / WebGL

- **Conversion** wants: nothing that slows mobile.
- **Award taste** wants: signature 3D moment.

**Resolution**: 3D earns its place only if it (a) does a job that 2D can't and (b) has a poster fallback that ships under 350KB. If both, ship the 3D. If only (a), ship 2D with motion. If neither, drop it.

### 5. Density

- **Conversion** wants: every section answering an objection.
- **Award taste** wants: editorial restraint, fewer sections.

**Resolution**: cut sections that repeat or restate. Keep the section that answers the buyer's actual hesitation, even if it's "unphotogenic". A site is allowed to have one boring section that earns its place.

### 6. Imagery

- **Conversion** wants: real, specific, recognizable.
- **Award taste** wants: produced, art-directed, surprising.

**Resolution**: real photography wins both, when the budget supports it. When it doesn't: stylized custom illustration / 3D / type-driven imagery beats stock photos *and* beats generic AI generation.

### 7. Pricing / process transparency

- **Conversion** wants: visible, clear.
- **Award taste** can want: hidden, exclusive.

**Resolution**: for B2B with sales cycles, hide. For self-serve, show. For premium services, show the *process* even if you don't show the price. Hiding both is almost always a conversion loss.

## The "conversion-and-taste" pattern

Sites that win **and** convert share a structure:

1. **Editorial hero** (idea + clear pitch + present CTA).
2. **Proof or mechanism** (the second section answers "is this real?").
3. **Signature interaction** (the memorable moment, third or fourth section in).
4. **Detail** (case study, process, or product depth).
5. **Quiet CTA** (a second, less-pressured opportunity to act).
6. **Footer with personality** (final voice moment).

This six-beat structure converts and wins. Most strong sites are some variant of it.

## When the user explicitly chooses one

If the user says "I want this to convert; I don't care about awards":
- skip the moonshot concept track entirely
- run only safe-premium and experimental
- spend the saved hours on copy specificity, proof, and CTA testing

If the user says "I want to win awards; conversion is secondary":
- treat conversion as a floor, not a target — never drop below baseline usability
- run all three concept tracks
- earn the brave decision

Most users don't say either explicitly. Most users want both. Assume both unless told otherwise, and apply the resolutions above.

## The honesty rule with the user

Always tell the user where you've taken an award-bias decision that costs conversion, and vice versa. Make those decisions visible in `docs/concept-scorecard.md` § Trade-offs. The user can override; they can't override what they don't see.

## The trap to avoid

The most common failure is **awards-flavored conversion site** — a site that looks like it wants to win but doesn't have the idea, and converts like a template because the operator removed the conversion mechanics to make it look "premium". Worst of both worlds.

If the project doesn't have the idea or the budget for true award ambition, build the best conversion site possible and don't fake the ambition. A great conversion site is a better deliverable than a mediocre award attempt.

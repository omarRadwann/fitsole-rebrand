# 09 — Accessibility / WCAG Master

## Mission

Make the site premium for everyone.

Target WCAG 2.2 AA as baseline.

## Required Checks

### Structure
- one h1 per page
- logical heading order
- landmarks: header, nav, main, footer
- buttons for actions
- links for navigation

### Keyboard
- every interactive element reachable
- visible focus
- logical order
- no keyboard traps
- escape closes modal/menu
- focus returns after modal

### Forms
- labels, not placeholder-only
- errors near field
- aria-describedby
- success state
- required fields clear
- preserve input after error

### Contrast
- normal text 4.5:1
- large text/UI 3:1
- do not rely on color alone

### Motion
- respect prefers-reduced-motion
- disable parallax/smooth scroll/camera scrub
- no flashing
- pause controls for meaningful motion/video

### Media
- meaningful images have alt
- decorative images empty alt
- video captions if speech
- no autoplay audio
- mute toggle for audio

### Touch
- target size at least 24x24 CSS px where applicable
- prefer 44x44 for mobile controls
- no hover-only essential info

### Creative Sites
- WebGL must not contain only copy/content
- canvas controls labeled
- custom cursor does not hide native usability
- mobile interaction equivalent exists
- reduced-motion fallback is designed

## Manual Test

1. Unplug mouse.
2. Tab through page.
3. Open nav.
4. Activate CTA.
5. Submit form empty.
6. Fix form.
7. Close modal.
8. Use screen reader quick nav if possible.
9. Enable reduced motion.
10. Try mobile viewport.

## No-Ship Accessibility Failures

- cannot use nav by keyboard
- invisible focus
- CTA not reachable
- form unlabeled
- color contrast unreadable
- content hidden behind hover only
- WebGL blocks essential content
- motion ignores reduced-motion

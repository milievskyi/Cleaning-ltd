# Design System Specification

## 1. Overview & Creative North Star: "The Crystalline Sanctuary"

This design system is built upon the concept of **"The Crystalline Sanctuary."** In the context of high-end Canadian cleaning, we are not just selling a service; we are selling the restorative feeling of a pristine, light-filled space. 

The "Creative North Star" rejects the cluttered, utility-first patterns of traditional service apps. Instead, it adopts a high-end editorial philosophy inspired by "iOS 26" aesthetics: extreme depth, hyper-fluidity, and "Aero-Glass" surfaces. The system breaks the standard "boxed" web layout by utilizing intentional asymmetry, overlapping translucent layers, and a "Mobile-First" architecture that feels like a native, high-performance liquid interface.

---

## 2. Colors & Materiality

The palette is anchored by a deep, noble Emerald Green, representing the lush Canadian forests and the concept of premium, eco-conscious stewardship.

### The Color Tokens
*   **Primary Brand Anchor:** `primary-container` (#064E3B) — Use this for high-impact brand moments.
*   **The Deep Base:** `primary` (#003527) — Reserved for heavy editorial type or footer foundations.
*   **The "Aero" Neutrals:** `surface` (#f7f9fb) and `surface-container-lowest` (#ffffff). These are the air your design breathes.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. Boundaries must be defined through:
1.  **Tonal Transitions:** A `surface-container-low` section sitting against a `surface` background.
2.  **Refraction:** Using backdrop-blur (minimum 20px) to define the edge of a glass container.
3.  **Negative Space:** Utilizing exaggerated vertical margins to separate concepts.

### Glass & Gradient Soul
To achieve the signature high-end feel, all primary CTAs must utilize a subtle linear gradient: `primary-container` to `primary`. 
Floating elements (modals, navigation bars) must use **Glassmorphism**: 
*   **Fill:** `surface-container-lowest` at 60-70% opacity.
*   **Effect:** Backdrop-blur (32px to 64px) + a 10% opacity `outline-variant` "Ghost Border" to simulate light catching a glass edge.
*   **Texture:** A 2% monochromatic noise grain overlay to prevent digital color banding and add tactile "tooth."

---

## 3. Typography: Editorial Authority

We use **Inter** not as a standard sans-serif, but as a precision tool for weight contrast.

*   **Display (lg/md):** Set with -0.04em letter spacing and "SemiBold" weight. These should feel like a physical magazine headline.
*   **Headline & Title:** Use "Medium" weight for `headline-lg` to create an authoritative but welcoming tone.
*   **The Weight Gap:** To create a premium feel, pair `display-md` (SemiBold) with `body-md` (Regular) in the same component. The contrast in optical weight is what signals "High-End."
*   **Leading:** For `body-lg`, increase line-height to 1.6 to ensure the text feels airy and effortless, mimicking the "clean" nature of the brand.

---

## 4. Elevation & Depth: Tonal Layering

Traditional shadows are replaced with **Tonal Layering** and **Ambient Light.**

*   **The Layering Principle:** Treat the UI as a physical stack. 
    *   *Base Layer:* `surface`
    *   *Mid-Layer (Content Cards):* `surface-container-low`
    *   *Interactive Layer (Buttons/Inputs):* `surface-container-lowest`
*   **Ambient Shadows:** When a floating element (like a booking drawer) requires lift, use a shadow color derived from `on-surface` at 5% opacity, with a 40px blur and 10px Y-offset. It should feel like a soft glow, not a drop shadow.
*   **Ghost Borders:** If a boundary is strictly required for accessibility, use `outline-variant` at 15% opacity.

---

## 5. Components

### Buttons
*   **Primary:** Gradient of `primary-container` to `primary`. Roundedness: `full`. Padding: 16px 32px. No border.
*   **Secondary (Glass):** Backdrop-blur (20px), `surface-container-lowest` at 40% opacity. `Ghost Border` enabled.
*   **Tertiary:** Purely typographic using `label-md` in `on-surface-variant`, with a subtle underline on hover.

### Inputs & Fields
*   **The "Aero" Field:** Background is `surface-container-highest` at 30% opacity. On focus, the background shifts to `surface-container-lowest` (100% white) with a soft ambient shadow.
*   **Labels:** Use `label-sm` in `outline`, positioned 8px above the field.

### Cards & Lists
*   **Rule:** Forbid divider lines.
*   **Structure:** Use a `surface-container-low` background for the card. Separate list items using 12px of vertical white space.
*   **Refraction Edge:** Apply a subtle `primary-fixed` top-inner-stroke (1px at 20% opacity) to cards to simulate light hitting the top of a glass pane.

### Signature Component: The "Fluid Booking Bar"
A bottom-docked, full-width glass component using `surface-container-lowest` at 80% opacity and 40px blur. It houses the primary CTA and total price, floating 16px above the screen bottom to maintain the "Mobile-First" fluid layout.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical image placements. Let images of pristine Canadian interiors bleed off the edge of the screen.
*   **Do** prioritize "Breathing Room." If you think you have enough padding, double it.
*   **Do** use `primary-fixed-dim` for subtle background accents behind glass layers to create depth.

### Don't
*   **Don't** use black (#000000) for text. Use `on-surface` (#191c1e) to maintain a natural, soft-contrast look.
*   **Don't** use 90-degree corners. Refer to the Roundedness Scale; use `xl` (1.5rem) for main containers and `full` for interactive elements.
*   **Don't** use standard "box-shadow" presets. Every shadow must be diffused and tinted by the background color.
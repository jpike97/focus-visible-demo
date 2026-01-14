# Interactive States Guide for Design Systems

A comprehensive guide to understanding and documenting `:hover`, `:focus`, `:focus-visible`, and `:active` states in your design system.

**Intended Audience:** UX/UI Designers, Product Designers, Design System Teams

---

## Table of Contents
1. [State Overview](#state-overview)
2. [Detailed Explanations](#detailed-explanations)
3. [Design System Implementation](#design-system-implementation)
4. [Documenting States in Figma](#documenting-states-in-figma)
5. [Best Practices](#best-practices)
6. [Accessibility Considerations](#accessibility-considerations)
7. [Common Pitfalls](#common-pitfalls)

---

## State Overview

| State | Trigger | Input Method | Primary Use Case |
|-------|---------|--------------|------------------|
| `:hover` | Cursor over element | Mouse/trackpad only | Visual feedback for pointer devices |
| `:focus` | Element has focus | Mouse click OR keyboard | General focus indication |
| `:focus-visible` | Element has keyboard focus | Keyboard navigation (Tab) | Accessibility-focused keyboard indication |
| `:active` | Element being pressed | Mouse or keyboard | Visual feedback during interaction |

---

## Detailed Explanations

### 1. `:hover` - Mouse Over State

**What it is:**
- Triggered when a user moves their mouse cursor over an element
- Only works with pointer devices (mouse, trackpad, stylus)
- Does not trigger on touch devices or keyboard navigation

**When to use:**
- Providing visual feedback that an element is interactive
- Indicating clickable areas
- Creating smooth transitions for user interactions

**Design specification example:**
```
Default:    Background #FF6B35
Hover:      Background #FF8555 (8% lighter)
Transition: 200ms ease
```

**Visual behavior:**
- Button background lightens when mouse hovers over it
- Returns to default state when mouse moves away
- Does not affect keyboard navigation
- Common approach: Lighten background by 5-10% or increase shadow

---

### 2. `:focus` - General Focus State

**What it is:**
- Triggered when an element receives focus through ANY method
- Applies to BOTH mouse clicks AND keyboard navigation (Tab key)
- Remains active until focus moves to another element

**When to use:**
- Providing subtle feedback that an element currently has focus
- Base focus styles that apply to all focus methods
- Often used as a fallback for browsers that don't support `:focus-visible`

**Design specification example:**
```
Focus shadow:   0px 0px 0px 3px at 30% opacity (brand color)
Application:    Both mouse AND keyboard
Style:          Subtle, non-intrusive
```

**Visual behavior:**
- Adds a subtle shadow or outline around the element
- Applies when clicking with a mouse OR tabbing with keyboard
- Should be less prominent than `:focus-visible`
- Indicates "this element currently has focus"
- Common approach: Subtle glow or thin border at 20-40% opacity

---

### 3. `:focus-visible` - Keyboard Focus State (The Accessibility Hero)

**What it is:**
- The most important state for accessibility
- Triggered ONLY when an element receives focus via keyboard navigation
- Does NOT trigger on mouse clicks
- Browser automatically determines when focus should be visible based on user input method

**Why it matters:**
- Keyboard users need prominent visual indicators to know where they are on the page
- Mouse users don't need prominent focus rings since they can see their cursor
- Solves the long-standing tension between accessibility and design aesthetics

**When to use:**
- ALWAYS include this for keyboard accessibility
- Make it more prominent than regular `:focus`
- Essential for WCAG 2.1 compliance (accessibility standards)

**Design specification example:**
```
Focus shadow:      0px 0px 0px 4px at 50% opacity (brand color)
Outline:           2px dotted (high contrast color)
Outline offset:    2px
Contrast ratio:    Minimum 3:1 against background
Application:       Keyboard navigation ONLY
```

**Visual behavior:**
- Adds a prominent, high-contrast outline and stronger shadow
- ONLY appears when using Tab key navigation
- Does NOT appear when clicking with a mouse
- Must be clearly visible on all backgrounds
- Common approach: Dotted or dashed outline + thicker shadow than `:focus`

**The Key Difference:**
```
Mouse Click → :focus applies (subtle) → :focus-visible does NOT apply
Tab Key     → :focus applies (subtle) → :focus-visible ALSO applies (prominent)
```

---

### 4. `:active` - Pressed/Clicking State

**What it is:**
- Triggered while an element is being actively pressed
- Occurs between mousedown and mouseup events
- Very brief state (typically milliseconds)
- Also triggered when pressing Enter/Space on a focused button

**When to use:**
- Providing immediate tactile feedback
- Creating "pressed button" effects
- Enhancing perceived interactivity

**Design specification example:**
```
Background:    10% darker than default
Transform:     Scale to 98% (slight shrink)
Shadow:        Reduced or removed
Duration:      Instant (no transition delay)
```

**Visual behavior:**
- Button appears "pressed down" with darker color and smaller size
- Creates immediate tactile feedback
- Works on both mouse clicks and keyboard presses (Enter/Space)
- Very brief state (milliseconds)
- Common approaches: Darken color, reduce size, decrease shadow depth

---

## Design System Implementation

### Complete Button State Specification

Here's how all states work together in a comprehensive button design:

**State Hierarchy:**
```
DEFAULT
  ↓
HOVER (mouse over)
  ↓
FOCUS (clicked or tabbed to) ← FOCUS-VISIBLE (keyboard only, more prominent)
  ↓
ACTIVE (being pressed)
```

### Visual Specification Template

Use this template when documenting button states in your design system:

| State | Background | Border/Outline | Shadow | Transform | Trigger |
|-------|-----------|----------------|--------|-----------|---------|
| **Default** | Primary color | None | Subtle elevation | None | Initial state |
| **Hover** | +8% lighter | None | Increased elevation | None | Mouse over |
| **Focus** | Same as default | Subtle glow (3px, 30% opacity) | Subtle | None | Clicked or Tab |
| **Focus-Visible** | Same as default | Prominent (2px dotted, high contrast) | Strong (4px, 50% opacity) | None | Tab only |
| **Active** | -10% darker | None | Reduced | Scale(0.98) | Being pressed |

### Real-World User Interaction Flows

**Scenario 1: Mouse User Clicks a Button**
```
1. Default state        → Base appearance
2. Mouse enters         → Hover state activates (lighter background)
3. Mouse button down    → Active state (darker, smaller)
4. Mouse button up      → Focus state (subtle shadow)
5. Mouse leaves button  → Focus remains until clicking elsewhere
```

**Scenario 2: Keyboard User Navigates with Tab**
```
1. Default state        → Base appearance
2. Press Tab           → Focus-Visible state (prominent outline + strong shadow)
3. Press Enter/Space   → Active state (darker, smaller)
4. Release Enter/Space → Returns to Focus-Visible state
5. Press Tab again     → Focus moves to next element
```

**Key Insight:**
- Mouse users see: Default → Hover → Active → Focus (subtle)
- Keyboard users see: Default → Focus-Visible (prominent) → Active → Focus-Visible

---

## Documenting States in Figma

### Component Variants Structure

When creating button components in Figma, structure your variants to include all interactive states:

**Recommended Variant Properties:**
```
Property 1: State
  - Default
  - Hover
  - Focus
  - Focus-Visible
  - Active
  - Disabled (optional)

Property 2: Type
  - Primary
  - Secondary
  - Tertiary

Property 3: Size
  - Small
  - Medium
  - Large
```

### Naming Conventions

Use clear, consistent naming that developers can easily map to CSS:

```
✅ Good:
- Button/Primary/Default
- Button/Primary/Hover
- Button/Primary/Focus
- Button/Primary/Focus-Visible
- Button/Primary/Active

❌ Avoid:
- Button-primary-default
- PrimaryButton_hover
- btn_primary_focused (confusing - focus or focus-visible?)
```

### Visual Annotations

Add annotations to your Figma components explaining:

1. **Focus vs Focus-Visible:**
   ```
   Focus: Subtle shadow - appears on mouse click OR keyboard Tab
   Focus-Visible: Prominent outline - appears ONLY on keyboard Tab
   ```

2. **Trigger Method:**
   ```
   Hover: Mouse/trackpad only (not on touch devices)
   Active: All devices (mouse, touch, keyboard)
   ```

3. **Accessibility Notes:**
   ```
   Focus-Visible contrast ratio: 3:1 minimum (WCAG 2.1)
   Ensure visibility on all background colors
   ```

### Design Tokens

Define states using design tokens for consistency:

```
// Color Tokens
button.primary.default:        #FF6B35
button.primary.hover:          #FF8555
button.primary.active:         #E55A2B

// Shadow Tokens
button.focus.shadow:           0px 0px 0px 3px rgba(255, 107, 53, 0.3)
button.focus-visible.shadow:   0px 0px 0px 4px rgba(255, 107, 53, 0.5)

// Border Tokens
button.focus-visible.outline:  2px dotted #FFFFFF
button.focus-visible.offset:   2px

// Transform Tokens
button.active.scale:           0.98
```

### Storybook Documentation

If using Storybook, document each state with:

1. **Interactive Example:** Users can hover, focus, and interact
2. **Code Snippet:** Showing the CSS implementation
3. **Usage Guidelines:** When to use this component
4. **Accessibility Notes:** Keyboard navigation instructions

Example documentation structure:
```
# Primary Button

## States
- **Default:** Initial appearance
- **Hover:** Shown when mouse hovers (desktop only)
- **Focus:** Subtle indication when focused by any method
- **Focus-Visible:** Prominent outline for keyboard users (Tab navigation)
- **Active:** Appears while being clicked/pressed

## Accessibility
- Keyboard navigable with Tab key
- Activates with Enter or Space key
- Focus-Visible state meets WCAG 2.1 Level AA (3:1 contrast)

## Testing
- Mouse: Hover and click should show appropriate feedback
- Keyboard: Tab to button, press Enter - should see focus-visible outline
- Screen reader: Button should announce role and label
```

### Design Handoff Checklist

When handing off designs to developers, ensure you include:

- [ ] All five states clearly labeled (Default, Hover, Focus, Focus-Visible, Active)
- [ ] Difference between Focus and Focus-Visible explained
- [ ] Color values for all states (with tokens if available)
- [ ] Shadow/outline specifications
- [ ] Transform/animation specifications
- [ ] Transition timing and easing
- [ ] Accessibility requirements (contrast ratios)
- [ ] Mobile/touch behavior notes
- [ ] Keyboard navigation expectations

---

## Best Practices

### 1. Always Design All Five States

Every interactive component should have designs for:
- **Default** - How it looks initially
- **Hover** - Mouse feedback (desktop/trackpad only)
- **Focus** - Subtle indication (both mouse and keyboard)
- **Focus-Visible** - Prominent keyboard-only indicator
- **Active** - Pressed/clicking state

**Why:** Incomplete state coverage leads to inconsistent user experiences and accessibility issues.

### 2. Make Focus-Visible Significantly More Prominent Than Focus

**Design Principle:**
```
Focus (mouse):          Subtle → 20-40% opacity, thin shadow
Focus-Visible (keyboard): Prominent → 50%+ opacity, dotted/dashed outline, thicker shadow
```

**Rationale:**
- Mouse users can see their cursor, so subtle feedback is sufficient
- Keyboard users rely entirely on visual focus indicators to navigate
- This approach satisfies both aesthetic preferences and accessibility requirements

**Example Comparison:**
```
Focus:           3px glow at 30% opacity
Focus-Visible:   4px glow at 50% opacity + 2px dotted outline

Visual difference: Focus-Visible should be 1.5-2x more visible
```

### 3. Never Remove Focus Indicators Without Providing Alternatives

**❌ Bad Practice:**
- Removing all focus indicators for aesthetic reasons
- Using only color change (insufficient contrast for visually impaired users)
- Making focus state invisible to "clean up" the design

**✅ Good Practice:**
- Replace default browser focus with custom, branded indicators
- Ensure focus-visible meets WCAG contrast requirements (3:1 minimum)
- Use multiple visual cues: outline + shadow + color change

### 4. Design for Multiple Input Methods

**Consider these device contexts:**

| Device Type | Has Hover | Has Keyboard | Focus Strategy |
|------------|-----------|--------------|----------------|
| Desktop with mouse | ✅ | ✅ | All states needed |
| Desktop with keyboard only | ❌ | ✅ | Focus-Visible critical |
| Tablet/Touch | ❌ | ❌ | Skip hover, use active |
| Mobile | ❌ | ❌ | Skip hover, use active |

**Design Implications:**
- Hover states won't work on touch devices → rely on active state
- Touch devices need larger tap targets (minimum 44×44px)
- Active state is universal → works across all input methods

### 5. Use Consistent State Patterns Across Components

Establish design system rules:
```
Hover:          Always lighten by 8%
Focus:          Always 3px shadow at 30% opacity
Focus-Visible:  Always 4px shadow + 2px dotted outline
Active:         Always darken by 10% + scale to 98%
```

**Benefits:**
- Predictable user experience
- Faster design iteration
- Easier developer implementation
- Reduced design system maintenance

### 6. Test with Real Devices and Input Methods

**Testing Checklist:**
- [ ] Mouse interaction on desktop (hover, click)
- [ ] Keyboard navigation with Tab key (focus-visible must be visible)
- [ ] Touch interaction on mobile/tablet (active state)
- [ ] Screen reader compatibility
- [ ] High contrast mode (Windows)
- [ ] Dark mode variations
- [ ] Color blindness simulation

### 7. Prioritize Accessibility Without Compromising Aesthetics

**The Win-Win Approach:**
- Use `:focus` for subtle mouse feedback (aesthetically clean)
- Use `:focus-visible` for prominent keyboard feedback (accessible)
- This strategy satisfies both designers and accessibility requirements

**Not a compromise—it's an enhancement:**
- Designers get clean interfaces for mouse users
- Accessibility advocates get prominent focus indicators for keyboard users
- Everyone wins

---

## Accessibility Considerations

### WCAG 2.1 Requirements

**Success Criterion 2.4.7 (Level AA): Focus Visible**
- Any keyboard operable interface must have a visible focus indicator
- Use `:focus-visible` to meet this requirement
- Focus indicator must have sufficient contrast (minimum 3:1)

**Example compliant implementation:**
```
Focus-Visible specifications:
- Shadow: 4px spread at 50% opacity (provides soft glow)
- Outline: 2px dotted line in high-contrast color
- Offset: 2px (creates clear separation from button)
- Contrast ratio: 3:1 minimum against adjacent colors
```

**Measuring contrast:**
1. Test outline color against button background
2. Test outline color against page background
3. Use tools like WebAIM Contrast Checker or Figma plugins
4. Ensure 3:1 ratio minimum (4.5:1 preferred)

### Testing Checklist

- [ ] Can you see where focus is when pressing Tab?
- [ ] Is the focus indicator visible on all backgrounds?
- [ ] Does the focus indicator have enough contrast?
- [ ] Can you navigate the entire interface with only the keyboard?
- [ ] Does clicking with a mouse provide appropriate feedback?
- [ ] Is the `:active` state clearly different from the default state?

---

## Common Pitfalls

### Pitfall 1: Confusing Focus and Focus-Visible

**❌ Wrong Approach:**
Designing one "focus" state with prominent styling that applies to both mouse and keyboard.

**Problem:** Mouse users will see an aggressive outline when clicking, which feels visually cluttered.

**✅ Correct Approach:**
Design TWO separate focus states:
- **Focus:** Subtle (for mouse clicks) → 2px shadow at 20% opacity
- **Focus-Visible:** Prominent (for keyboard) → 3px outline + 4px shadow at 50% opacity

**In Figma:** Create separate component variants for "Focus" and "Focus-Visible"

### Pitfall 2: Designing Only for Desktop Mouse Users

**❌ Wrong Approach:**
- Only designing hover states
- Forgetting keyboard navigation
- Ignoring touch devices

**Problem:**
- Hover doesn't work on mobile/tablets (no cursor)
- Keyboard-only users can't navigate
- Touch users have no feedback

**✅ Correct Approach:**

| User Type | Input | Critical States |
|-----------|-------|----------------|
| Desktop mouse | Mouse + keyboard | All 5 states |
| Desktop keyboard-only | Keyboard | Focus-Visible + Active |
| Mobile/Tablet | Touch | Active (no hover) |

**Design implication:** Never rely solely on hover for interactivity indicators.

### Pitfall 3: Using Only Color to Indicate States

**❌ Wrong Approach:**
```
Default:  Blue background
Hover:    Darker blue background
Focus:    Even darker blue background
```

**Problem:**
- Color-blind users can't distinguish states
- Insufficient for WCAG compliance
- Subtle changes are hard to perceive

**✅ Correct Approach:**
Use multiple visual indicators:
```
Default:  Blue background
Hover:    Darker blue + slight shadow increase
Focus:    Darker blue + subtle glow
Focus-Visible: Darker blue + strong outline + pronounced shadow
```

**Accessibility rule:** Never use color as the only visual differentiator.

### Pitfall 4: Not Testing with Actual Keyboard Navigation

**Common mistake:** Designers assume the default browser focus ring is "good enough" or don't test keyboard navigation at all.

**Testing protocol for designers:**
1. Open your prototype or live site
2. Click anywhere on the page
3. Press Tab repeatedly to navigate through interactive elements
4. Ask yourself:
   - Can I clearly see where focus is at all times?
   - Is the focus indicator visible on all backgrounds?
   - Can I tell which element will activate if I press Enter?

**Tools for testing:**
- Chrome DevTools: Emulate focused state
- Browser: Physical Tab key testing (most reliable)
- axe DevTools: Automated accessibility testing

### Pitfall 5: Removing Focus Indicators for Aesthetics

**❌ Wrong reasoning:**
"The focus outline looks ugly and doesn't match our design system, so we removed it."

**Problem:**
- Violates WCAG 2.1 (legal liability for some organizations)
- Makes interface unusable for keyboard users
- Affects users with motor disabilities who can't use a mouse

**✅ Correct reasoning:**
"The default focus outline doesn't match our design system, so we designed a custom focus-visible indicator that's both beautiful and accessible."

**Design solution:**
- Replace, don't remove
- Make it on-brand (use brand colors, match design language)
- Ensure it meets contrast requirements
- Make focus-visible prominent, focus subtle

### Pitfall 6: Inconsistent State Styling Across Components

**❌ Wrong Approach:**
- Buttons have blue focus, links have red focus
- Primary button hover is lighter, secondary button hover is darker
- Some components have focus indicators, others don't

**Problem:**
- Unpredictable user experience
- Increased cognitive load
- Harder to maintain design system

**✅ Correct Approach:**
Establish system-wide state rules:
```
All interactive components:
- Hover: Lighten by 8%
- Focus: 3px shadow at 30% brand color
- Focus-Visible: 2px dotted outline + 4px shadow at 50% brand color
- Active: Darken by 10% + scale 98%
```

**Benefit:** Users learn the pattern once and understand it everywhere.

### Pitfall 7: Not Documenting the Difference Between States

**❌ Wrong Approach:**
Handing off Figma files with states labeled "hover" and "focused" without explanation.

**Problem:**
- Developers don't know whether "focused" means :focus or :focus-visible
- Implementation doesn't match design intent
- Accessibility requirements get lost in translation

**✅ Correct Approach:**
Include annotations in handoff:
```
State: Focus
Trigger: Mouse click OR Tab key
Style: Subtle 3px shadow
Note: This is :focus in CSS - applies to all focus methods

State: Focus-Visible
Trigger: Tab key ONLY (not mouse)
Style: Prominent 2px dotted outline + 4px shadow
Note: This is :focus-visible in CSS - keyboard accessibility
Requirement: Must meet WCAG 2.1 Level AA (3:1 contrast)
```

---

## Browser Support

### Current Support (2024+)

| State | Browser Support | Notes for Designers |
|-------|----------------|---------------------|
| `:hover` | All modern browsers | Doesn't work on touch devices |
| `:focus` | All browsers | Universal support |
| `:focus-visible` | Chrome 86+, Firefox 85+, Safari 15.4+ | **This is the key innovation!** |
| `:active` | All browsers | Universal support |

### What Does This Mean for Design?

**Good news:** `:focus-visible` is now supported in all major browsers (95%+ global coverage as of 2024).

**Design implication:** You can confidently design separate Focus and Focus-Visible states knowing they'll work as intended for the vast majority of users.

**Graceful degradation:** For older browsers that don't support `:focus-visible`, developers will implement fallbacks where prominent focus indicators show for all focus types (both mouse and keyboard). This is acceptable because it errs on the side of accessibility.

### Global Browser Coverage

```
✅ Chrome/Edge 86+     → 75% of global users
✅ Firefox 85+         → 8% of global users
✅ Safari 15.4+        → 12% of global users
✅ Opera 72+           → 3% of global users

Total: ~98% support for :focus-visible
```

**Designer takeaway:** Design with focus-visible in mind. It's no longer experimental—it's the standard.

---

## Summary

**Quick Reference:**

- **:hover** = Mouse is over it → Use for visual feedback
- **:focus** = Element has focus (any method) → Use for subtle indication
- **:focus-visible** = Keyboard navigated to it → Use for accessibility (MOST IMPORTANT!)
- **:active** = Being clicked/pressed → Use for tactile feedback

**The Golden Rule:**
Always implement `:focus-visible` with prominent styling for keyboard accessibility, while keeping `:focus` subtle for mouse users. This creates the best experience for both mouse and keyboard users.

---

## Resources for Designers

### Accessibility Guidelines
- [WCAG 2.1 - Focus Visible (2.4.7)](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html) - Official accessibility guidelines
- [WebAIM - Keyboard Accessibility](https://webaim.org/articles/keyboard/) - Comprehensive guide to keyboard navigation
- [A11y Project Checklist](https://www.a11yproject.com/checklist/) - Practical accessibility checklist

### Technical Documentation
- [MDN Web Docs - :focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) - Technical CSS documentation
- [MDN Web Docs - :focus](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)
- [MDN Web Docs - :hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover)
- [MDN Web Docs - :active](https://developer.mozilla.org/en-US/docs/Web/CSS/:active)

### Design Tools & Testing
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - Test color contrast ratios
- [Figma A11y Focus Orderer Plugin](https://www.figma.com/community/plugin/731310036968334777/A11y---Focus-Orderer) - Design accessible focus order
- [Stark for Figma](https://www.getstark.co/) - Accessibility testing in Figma
- [Chrome DevTools - Accessibility Inspector](https://developer.chrome.com/docs/devtools/accessibility/reference/)

### Articles & Case Studies
- [Focus Visible Explained](https://css-tricks.com/focus-visible-and-backwards-compatibility/) - CSS Tricks guide
- [Sara Soueidan - A guide to designing accessible, WCAG-conformant focus indicators](https://www.sarasoueidan.com/blog/focus-indicators/)
- [Nielsen Norman Group - Keyboard-Only Navigation](https://www.nngroup.com/articles/keyboard-accessibility/)

### Design System Examples
- [Material Design - States](https://m2.material.io/design/interaction/states.html) - Google's approach to interactive states
- [Carbon Design System - Interaction States](https://carbondesignsystem.com/guidelines/interaction/states/) - IBM's design system
- [Atlassian Design System - Accessibility](https://atlassian.design/foundations/accessibility) - Atlassian's guidelines

---

## Quick Reference Card

**Print this out or save as a reference:**

```
╔══════════════════════════════════════════════════════════════════╗
║                    INTERACTIVE STATES CHEAT SHEET                 ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                    ║
║  STATE            TRIGGER              DESIGN GUIDANCE            ║
║  ─────────────────────────────────────────────────────────────   ║
║  DEFAULT          Initial state        Base appearance            ║
║                                                                    ║
║  HOVER            Mouse over           Lighten by 5-10%           ║
║  :hover           (Desktop only)       Increase shadow            ║
║                                        Does NOT work on mobile    ║
║                                                                    ║
║  FOCUS            Click OR Tab         Subtle indication          ║
║  :focus           (Both inputs)        3px shadow, 30% opacity    ║
║                                        Less prominent             ║
║                                                                    ║
║  FOCUS-VISIBLE    Tab key only         PROMINENT outline          ║
║  :focus-visible   (Keyboard nav)       4px shadow, 50% opacity    ║
║                                        + 2px dotted outline       ║
║                                        3:1 contrast minimum       ║
║                                        ⚠️  ACCESSIBILITY CRITICAL  ║
║                                                                    ║
║  ACTIVE           Being pressed        Darken by 10%              ║
║  :active          (All inputs)         Scale to 98%               ║
║                                        Works everywhere           ║
║                                                                    ║
╠══════════════════════════════════════════════════════════════════╣
║  THE GOLDEN RULE:                                                 ║
║  • Focus = Subtle (mouse users)                                   ║
║  • Focus-Visible = Prominent (keyboard users)                     ║
║  • This satisfies both aesthetics AND accessibility               ║
╚══════════════════════════════════════════════════════════════════╝
```

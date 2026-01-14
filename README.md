# Focus-Visible Demo

An interactive demo showcasing the differences between `:hover`, `:focus`, `:focus-visible`, and `:active` CSS pseudo-classes for button components.

## Purpose

This demo helps designers and developers understand the different button states needed for a comprehensive design system, particularly the distinction between `:focus` and `:focus-visible` for accessibility.

## Button Variants

- **Primary**: Orange background with white text
- **Secondary**: Gray background with blue text
- **Tertiary**: Blue background with white text

## States Demonstrated

1. **:hover** - Mouse over state
2. **:focus** - Any focus (mouse or keyboard)
3. **:focus-visible** - Keyboard-only focus (accessibility)
4. **:active** - Pressed/clicking state

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## How to Use the Demo

1. Start the dev server and open in your browser
2. **Test with Mouse**: Click buttons to see `:focus` and `:active` states
3. **Test with Keyboard**: Press Tab to navigate and see `:focus-visible` states
4. Notice how `:focus-visible` only shows prominent outlines for keyboard users

## Key Takeaway

`:focus-visible` is crucial for modern design systems - it provides clear visual feedback for keyboard users (accessibility) while keeping mouse interactions cleaner.
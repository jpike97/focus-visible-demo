import Button from './components/Button'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Button States Demo</h1>
        <p className="subtitle">Understanding :hover, :focus, :focus-visible, and :active</p>
      </header>

      <main className="main-content">
        {/* Explanation Section */}
        <section className="explanation-section">
          <h2>What's the difference?</h2>
          <div className="state-explanations">
            <div className="state-card">
              <h3>:hover</h3>
              <p>Triggered when the mouse cursor is over the element.</p>
              <p className="test-instruction">Test: Move your mouse over a button</p>
            </div>

            <div className="state-card">
              <h3>:focus</h3>
              <p>Triggered when the element has focus, either from clicking with a mouse OR navigating with a keyboard (Tab key).</p>
              <p className="test-instruction">Test: Click a button or Tab to it</p>
            </div>

            <div className="state-card highlight">
              <h3>:focus-visible</h3>
              <p>Triggered ONLY when the element has focus from keyboard navigation. This is the key for accessibility - it shows a prominent dotted outline for keyboard users while keeping mouse interactions cleaner.</p>
              <p className="test-instruction">Test: Press Tab to navigate between buttons</p>
            </div>

            <div className="state-card">
              <h3>:active</h3>
              <p>Triggered while the element is being pressed/clicked (mouse button is down).</p>
              <p className="test-instruction">Test: Click and hold a button</p>
            </div>
          </div>
        </section>

        {/* Button Variants Section */}
        <section className="variants-section">
          <h2>Button Variants</h2>
          <p className="section-description">
            Try interacting with each button variant using both mouse and keyboard (Tab key) to see the different states in action.
          </p>

          <div className="variant-group">
            <h3>Primary Button</h3>
            <p className="variant-description">Orange background, white text</p>
            <Button variant="primary">Primary Button</Button>
          </div>

          <div className="variant-group">
            <h3>Secondary Button</h3>
            <p className="variant-description">Gray background, blue text</p>
            <Button variant="secondary">Secondary Button</Button>
          </div>

          <div className="variant-group">
            <h3>Tertiary Button</h3>
            <p className="variant-description">Blue background, white text</p>
            <Button variant="tertiary">Tertiary Button</Button>
          </div>
        </section>

        {/* Testing Guide */}
        <section className="testing-section">
          <h2>How to Test Each State</h2>
          <div className="testing-grid">
            <div className="test-card">
              <h4>1. Test :hover</h4>
              <ol>
                <li>Move your mouse over a button</li>
                <li>Notice the background color changes</li>
                <li>Move mouse away - it returns to default</li>
              </ol>
            </div>

            <div className="test-card">
              <h4>2. Test :focus (Mouse)</h4>
              <ol>
                <li>Click a button with your mouse</li>
                <li>Notice a subtle shadow/outline appears</li>
                <li>This is less prominent than :focus-visible</li>
              </ol>
            </div>

            <div className="test-card">
              <h4>3. Test :focus-visible (Keyboard)</h4>
              <ol>
                <li>Press Tab to navigate to a button</li>
                <li>Notice a prominent dotted outline appears</li>
                <li>This is more visible for accessibility</li>
                <li>Press Tab again to move to next button</li>
              </ol>
            </div>

            <div className="test-card">
              <h4>4. Test :active</h4>
              <ol>
                <li>Click and HOLD on a button</li>
                <li>Notice it slightly shrinks and darkens</li>
                <li>Release to see it return to normal</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Design System Recommendations */}
        <section className="recommendations-section">
          <h2>Design System Recommendations</h2>
          <div className="recommendation-card">
            <h3>States to Include in Figma/Storybook:</h3>
            <ul>
              <li><strong>Default</strong> - The base button appearance</li>
              <li><strong>Hover</strong> - Subtle background color change</li>
              <li><strong>Focus (Mouse)</strong> - Subtle outline/shadow</li>
              <li><strong>Focus-Visible (Keyboard)</strong> - Prominent dotted outline for accessibility</li>
              <li><strong>Active/Pressed</strong> - Pressed state with scale/color change</li>
              <li><strong>Disabled</strong> - (Optional) Grayed out state</li>
            </ul>
            <p className="note">
              Note: :focus and :focus-visible are different! :focus-visible only shows for keyboard users,
              making interfaces cleaner for mouse users while maintaining accessibility.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

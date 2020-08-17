// hidden-message.js
import React , {useState }from 'react'

// NOTE: React Testing Library works with React Hooks _and_ classes just as well
// and your tests will be the same however you write your components.
function TestingExample({children}) {
  const [showMessage, setShowMessage] = useState(0);
  return (
    <div>
      <label htmlFor="toggle">Show Message Now</label>
      <input
        id="toggle"
        type="checkbox"
        onChange={e => setShowMessage(e.target.checked)}
        checked={showMessage}
      />
      {showMessage ? children : null}
    </div>
  )
}

export default TestingExample

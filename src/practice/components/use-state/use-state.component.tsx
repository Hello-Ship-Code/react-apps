import { useState } from "react"

import { CountButtonComponent } from "../buttons/count-button.component"
import { HOneComponent } from "../styleComponents/h1-component"

export const UseStateComponent = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    // Using `setCount(count + 1)` twice may not work as expected because `count` is read directly from the current state.
    // Since state updates are asynchronous, both updates would use the same initial `count` value (e.g., 0 + 1, 0 + 1).

    // To ensure the updates are sequential and reflect the latest state, use the **updater function** instead:
    setCount(count => count + 1)  // Correctly increments by 1
    setCount(count => count + 1)  // Correctly increments by 1 again (now total +2)
  }

  const decrementCount = () => {
    setCount(c => c - 1)
    setCount(c => c - 1)
  }
  return (<>
    <HOneComponent text={count.toString()} />
    <CountButtonComponent event={decrementCount} text="Decrement" />
    <CountButtonComponent event={() => setCount(0)} text="Reset" />
    <CountButtonComponent event={incrementCount} text="Increment" />
  </>)
}
import { useState } from "react"

import { CountButtonComponent } from "../buttons/count-button.component"
import { HOneComponent } from "../styleComponents/h1-component"

export const UseStateComponent = () => {
  const [count, setCount] = useState(0)
  return (<>
    <HOneComponent text={count.toString()} />
    < CountButtonComponent event={() => setCount(count - 1)} text="Decrement" />
    < CountButtonComponent event={() => setCount(0)} text="reset" />
    < CountButtonComponent event={() => setCount(count + 1)} text="Increment" />
  </>
  )
}
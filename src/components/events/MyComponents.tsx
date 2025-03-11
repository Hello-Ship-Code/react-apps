import { useState } from "react"

export const MyComponent = () => {

  const [name, setName] = useState("guest")

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  return (
    <>
      <input value={name} onChange={handleOnChange} />
      <p>Name: {name}</p>
      <button type="submit">Add</button>
    </>
  )
}
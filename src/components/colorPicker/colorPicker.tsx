import { useState } from "react"

export const ColorPicker = () => {

  const [color, setColor] = useState("#FFFFFF")

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value)
  }

  return (
    <div className="color-picker">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Select Color:{color}</p>
      </div>
      <label>select a color:</label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  )
}
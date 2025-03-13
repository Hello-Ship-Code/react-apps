import { useState } from "react"

import { addNewItem } from "../../utils/addNewItem"
import { handleOnChange } from "../../utils/handleChange"

export type Car = {
  make: string,
  model: string,
  year: number | ''
}

export const UpdateObject = () => {

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

  //   const { name, value } = e.target

  //   setNewCar((prevCar) => ({
  //     ...prevCar,
  //     [name]: name === 'year' ? Number(value) : value
  //   }))

  // }

  const [car, setCar] = useState<Car[]>([])
  const [newCar, setNewCar] = useState<Car>({
    make: '',
    model: '',
    year: ''
  })

  const clearNewCar = () => setNewCar({ make: '', model: '', year: '' })

  const handleNewCars = () => {
    if (newCar.make && newCar.model && newCar.year) {
      addNewItem(newCar, setCar, clearNewCar, ['make', 'model', 'year'])

    }
  }

  return (
    <>
      <ul>
        {car.map((c, index) => (
          <li key={index}>
            {c.year} {c.make} {c.model}
          </li>
        ))}
      </ul>

      <div>
        <input type="text" value={newCar.make} name="make" onChange={(e) => handleOnChange(e, setNewCar, 'make')} placeholder="Enter the car maker" />
        <input type="text" value={newCar.model} name="model" onChange={(e) => handleOnChange(e, setNewCar, 'model')} placeholder="Enter the car model" />
        <input type="number" value={newCar.year} name="year" onChange={(e) => handleOnChange(e, setNewCar, 'year')} placeholder="Enter the year" />
        <button onClick={handleNewCars}>Add</button>
      </div>
    </>

  )
}
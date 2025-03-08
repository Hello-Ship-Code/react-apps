
export const FoodsComponent = () => {

  const foodItems = ['Apple', 'Banana', 'Grapes']

  return (
    <ul>
      {foodItems.map((item, index) => (
        <li key={index}>{item.toUpperCase()}</li>
      ))}
    </ul>
  )
}
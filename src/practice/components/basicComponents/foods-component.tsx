
export const FoodsComponent = () => {

  const foodItems: string[] = ['Apple', 'Banana', 'Grapes']

  return (
    <ul>
      {foodItems.map((item, index) => (
        <li key={index}>{item.toUpperCase()}</li>
      ))}
    </ul>
  )
}
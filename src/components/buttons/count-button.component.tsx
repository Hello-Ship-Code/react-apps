
type countButtonProp = React.FC<
  { text: string, event: () => void }>

export const CountButtonComponent: countButtonProp = (props) => {
  return (
    <>
      <button onClick={props.event}>{props.text}</button></>
  )
}
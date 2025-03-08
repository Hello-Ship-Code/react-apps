import "./basic.button.component.css"

type ButtonProps = {
  text: string,
  alertMessage: string
}
export const BasicButtonComponent = ({ text, alertMessage }: ButtonProps) => {
  return (
    <>
      <button className="button" onClick={() => alert(alertMessage)}>
        {text}
      </button>
    </>
  )
}
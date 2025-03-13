import styles from './basic-button-component.module.css'

type ButtonProps = {
  text: string,
  alertMessage: string
}

export const BasicButtonComponent: React.FC<ButtonProps> = (props) => {

  const handleClick = () => alert(props.alertMessage)
  return (
    <>
      <button className={styles.button} onClick={handleClick}>
        {props.text}
      </button>
    </>
  )
}

// Instead use react.FC

// BasicButtonComponent.propTypes = {
//   text: propTypes.string,
//   alertMessage: propTypes.string,
//   age: propTypes.number,
//   isEmployed: propTypes.bool,
// }

// inline styles

{/* <button
style={{
  backgroundColor: "blue",
  color: "white",
  padding: "10px 20px",
  border: "none",
  cursor: "pointer",
  borderRadius: "5px",
  fontSize: "16px",
}}
onClick={() => alert(alertMessage)}
>
{text}
</button> */}

// tstyles

// type ButtonProps = {
//   text: string;
//   alertMessage: string;
// };

// const tstyles = {
//   button: {
//     backgroundColor: "blue",
//     color: "white",
//     padding: "10px 20px",
//     border: "none",
//     cursor: "pointer",
//     borderRadius: "5px",
//     fontSize: "16px",
//   },
// };

// export const BasicButtonComponent = ({ text, alertMessage }: ButtonProps) => {
//   return (
//     <>
//       <button style={tstyles.button} onClick={() => alert(alertMessage)}>
//         {text}
//       </button>
//     </>
//   );
// };
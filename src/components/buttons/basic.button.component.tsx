import styles from "./basic.button.component.module.css"

type ButtonProps = {
  text: string,
  alertMessage: string
}

export const BasicButtonComponent = (props: ButtonProps) => {
  return (
    <>
      <button className={styles.button} onClick={() => alert(props.alertMessage)}>
        {props.text}
      </button>
    </>
  )
}
// should install propTypes package waste of time. We are using TS

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
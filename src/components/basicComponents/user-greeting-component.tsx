
type UserGreeting = React.FC<
  {
    isLoggedIn: boolean
    userName: string
  }
>

export const UserGreeting: UserGreeting = (props) => {
  const welcomeMessage = <h2>Welcome, {props.userName}</h2>
  const loginPrompt = <h2>Please login</h2>

  return props.isLoggedIn ? welcomeMessage : loginPrompt
}

// return (
//   <>
//     {props.isLoggedIn ?
//       <h1>Hello, {props.userName}</h1> :
//       <h1>please login {props.userName}</h1>}
//   </>
// )

// if (props.isLoggedIn) {
//   return <h1>Hello, {props.userName}</h1>
// } else {
//   return <h1>please login</h1>
// }
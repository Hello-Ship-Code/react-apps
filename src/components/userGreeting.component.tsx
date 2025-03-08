
type userGreetingProps = {
  isLoggedIn: boolean,
  userName: string
}

export const UserGreeting = (props: userGreetingProps) => {
  // return (
  //   <>
  //     {props.isLoggedIn ?
  //       <h1>Hello, {props.userName}</h1> :
  //       <h1>please login {props.userName}</h1>}
  //   </>
  // )

  if (props.isLoggedIn) {
    return <h1>Hello, {props.userName}</h1>
  } else {
    return <h1>please login {props.userName}</h1>
  }
}
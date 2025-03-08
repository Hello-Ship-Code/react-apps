// import { CardComponent } from "./components/cardComponent/card.component"
// import { FoodsComponent } from "./components/food.component"
import { FooterComponent } from "./components/footer.component"
import { HeaderComponent } from "./components/header.component"
import { UserGreetingComponent } from "./components/userGreeting.component"

export const App = () => {

  return (
    <>
      < HeaderComponent />
      <UserGreetingComponent isLoggedIn={true} userName="Peter" />
      <UserGreetingComponent isLoggedIn={false} userName="Pranay" />
      {/* < FoodsComponent /> */}
      {/* < CardComponent /> */}
      < FooterComponent />

    </>
  )
}
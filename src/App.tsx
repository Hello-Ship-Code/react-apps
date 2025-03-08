// import { CardComponent } from "./components/cardComponent/card.component"
// import { FoodsComponent } from "./components/food.component"
import { FooterComponent } from "./components/footer-component"
import { HeaderComponent } from "./components/header-component"
import { UserGreeting } from "./components/user-greeting-component"

export const App = () => {

  return (
    <>
      < HeaderComponent />
      <UserGreeting isLoggedIn={true} userName="Peter" />
      <UserGreeting isLoggedIn={false} userName="Pranay" />
      {/* < FoodsComponent /> */}
      {/* < CardComponent /> */}
      < FooterComponent />

    </>
  )
}
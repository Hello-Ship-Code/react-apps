import { CardComponent } from "./components/cardComponent/card.component"
// import { FoodsComponent } from "./components/food.component"
import { FooterComponent } from "./components/footer.component"
import { HeaderComponent } from "./components/header.component"

export const App = () => {

  return (
    <>
      < HeaderComponent />
      {/* < FoodsComponent /> */}
      < CardComponent />
      < FooterComponent />

    </>
  )
}
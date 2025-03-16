import { ButtonNav } from "../components/common/button"
import { Footer } from "../components/html-element-reference/semantic-elements/footer/footer"
import { Header } from "../components/html-element-reference/semantic-elements/header/header"
import { Hero } from "../components/html-element-reference/semantic-elements/hero/hero"

export const HomePage = () => {

  const logFunction = () => {
    alert('Button component testing')
  }
  return (
    <>
      <Header />
      <Hero />
      < ButtonNav type="button" variant="secondary-btn" size="large" text="click me" onClick={logFunction} />
      <Footer />
    </>

  )
}
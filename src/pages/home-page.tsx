import { ButtonNav } from "../components/common/button"
import { Header } from "../components/html-element-reference/semantic-elements/hero/header/header"
import { Hero } from "../components/html-element-reference/semantic-elements/hero/hero"

export const HomePage = () => {

  const logFunction = () => {
    alert('Button component testing')
  }
  return (
    <>
      <Header />
      <Hero />
      < ButtonNav type="button" variant="primary-btn" size="large" text="click me" onClick={logFunction} />
    </>

  )
}
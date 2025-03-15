import { HeadingTag } from "../../../text-content/heading-tag"
import { NavBar } from "../../../interactive-elements/navbar/nav-bar"

export const Header = () => {
  return (
    <header className="flex justify-between p-5 text-primary-500  bg-background-500">
      <div id="logo">
        < HeadingTag>🚀 React Apps</HeadingTag>
      </div>
      < NavBar />
    </header >
  )
}
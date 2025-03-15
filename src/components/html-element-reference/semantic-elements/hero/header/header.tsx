import { NavLink } from "../../../interactive-elements/links-navigation/navigation-link"
import { NavBar } from "../../../interactive-elements/navbar/nav-bar"
import { HeadingTag } from "../../../text-content/heading-tag"

export const Header = () => {
  return (
    <header className="flex justify-between p-5 text-primary-500  bg-background-500">
      <div id="logo">
        <HeadingTag><NavLink text="🚀 React Apps" link="/" /></HeadingTag>
      </div>
      < NavBar />
    </header >
  )
}
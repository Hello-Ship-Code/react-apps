import { NavLink } from "react-router-dom"

import { NavBar } from "../../interactive-elements/navbar/nav-bar"
import { HeadingTag } from "../../text-content/heading-tag"

export const Header = () => {
  return (
    <header className="flex fixed left-0 top-0 right-0 justify-between p-4 text-primary-500  bg-background-500">
      <div id="logo">
        <HeadingTag>
          < NavLink to="/">🚀 React-app</NavLink>
        </HeadingTag>
      </div>
      < NavBar />
    </header >
  )
}
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="text-sky-300">
      <Link to='/'>Home</Link>
      <Link to='/watch'>Watch</Link>
      <Link to='/todo'>Todo</Link>
      <Link to='/weather'>Weather</Link>
    </nav>)
}
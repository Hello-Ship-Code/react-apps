import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="flex gap-10 pr-8">
      <Link to='/about' className="hover:text-secondary-500">About</Link>
      <Link to='/watch' className="hover:text-secondary-500">Watch</Link>
      <Link to='/todo' className="hover:text-secondary-500">Todo</Link>
      <Link to='/weather' className="hover:text-secondary-500">Weather</Link>
    </nav>)
}
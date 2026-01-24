import { Link } from "react-router-dom";
import logo from "../assets/react.svg";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img width="100" height="100" src={logo} alt="Logo" />
        </Link>

        <Link to="/home">Home</Link>
        <Link to="/content">Content</Link>
        <Link to="/about">About</Link>
        <Link to="/join">Join</Link>
      </nav>
    </>
  );
}

export default Navbar;

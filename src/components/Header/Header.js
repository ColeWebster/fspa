import Logo from "./fspa.jpg";
import "./style.css";

export default function Header() {
  return (
   <header className="Header">
      <img src={Logo} className="Logo" alt="logo" />
      <nav className="Nav">
        <button className="LogIn">Log In</button>
        <button className="Join">Join Now! </button>
      </nav>
   </header>
  )
}
import Logo from "./fspa.jpg";
import "./style.css"

export default function Header() {
  return (
    <div className="header">
      <img src={Logo} className="headerLogo" />
      <button>Log In</button>
      <button>Join!</button>
      
    </div>
  );
}

import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <NavLink className="nav-link" to="/" exact={true}>
        Home
      </NavLink>
      <NavLink className="nav-link" to="/Articles">
        Beers
      </NavLink>
      {/* <NavLink className="nav-link" to="/Details">
        Details
      </NavLink> */}
    </div>
  );
}

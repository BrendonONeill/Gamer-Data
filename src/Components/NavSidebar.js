import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faTrophy,
  faGamepad,
  faPersonRunning,
  faCar,
  faCrosshairs,
  faShieldHalved,
  faFutbol,
  faChess,
  faUser,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

function NavSidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <span className="testing-icon">
            <FontAwesomeIcon icon={faUser} />
          </span>{" "}
          Profile
        </li>
        <NavLink to={"/games/User-games"}>
          <li>
            <span className="testing-icon">
              <FontAwesomeIcon icon={faLayerGroup} />
            </span>{" "}
            My Games
          </li>
        </NavLink>
      </ul>
      <ul className="main-sidenav">
        <NavLink to={"/games/"}>
          <li>
            <span className="testing-icon">
              <FontAwesomeIcon icon={faTrophy} />
            </span>{" "}
            The Best
          </li>
        </NavLink>
        <NavLink to={"/games-genre/action"}>
          <li>
            <span className="testing-icon">
              <FontAwesomeIcon icon={faGamepad} />
            </span>{" "}
            Action
          </li>
        </NavLink>
        <NavLink to={"/games-genre/adventure"}>
          <li>
            <span className="testing-icon">
              <FontAwesomeIcon icon={faPersonRunning} />
            </span>{" "}
            Adventure
          </li>
        </NavLink>
        <NavLink to={"/games-genre/racing"}>
          <li>
            <span className="testing-icon">
              <FontAwesomeIcon icon={faCar} />
            </span>{" "}
            Racing
          </li>
        </NavLink>
        <NavLink to={"/games-genre/shooter"}>
          <li>
            <span className="testing-icon">
              <FontAwesomeIcon icon={faCrosshairs} />
            </span>{" "}
            Shooter
          </li>
        </NavLink>
        <NavLink to={"/games-genre/role-playing-games-rpg"}>
          <li>
            <span className="testing-icon">
              <FontAwesomeIcon icon={faShieldHalved} />
            </span>{" "}
            RPG
          </li>
        </NavLink>
        <NavLink to={"/games-genre/sports"}>
          <li>
            <span className="testing-icon">
              <FontAwesomeIcon icon={faFutbol} />
            </span>{" "}
            Sports
          </li>
        </NavLink>
        <NavLink to={"/games-genre/strategy"}>
          <li>
            <span className="testing-icon">
              <FontAwesomeIcon icon={faChess} />
            </span>{" "}
            Strategy
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default NavSidebar;

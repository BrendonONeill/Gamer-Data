import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
import GlobalContext from "../GlobalContext";
import { useContext } from "react";

function NavSidebar() {
  const { setCards, resetPagination } = useContext(GlobalContext);
  const resetState = () => {
    setCards([]);
  };
  return (
    <div className="sidebar">
      <ul>
        <NavLink to={"/games/profile"}>
          <li>
            <span className="testing-icon">
              <FontAwesomeIcon icon={faUser} />
            </span>{" "}
            Profile
          </li>
        </NavLink>
        <NavLink to={"/games/User-games"} onClick={resetPagination}>
          <li>
            <span className="testing-icon">
              <FontAwesomeIcon icon={faLayerGroup} />
            </span>{" "}
            My Games
          </li>
        </NavLink>
      </ul>
      <ul className="main-sidenav">
        <NavLink to={"/games"}>
          <li>
            <span className="testing-icon">
              <FontAwesomeIcon icon={faTrophy} />
            </span>{" "}
            The Best
          </li>
        </NavLink>
        <NavLink to={"/games-genre/action"} onClick={resetPagination}>
          <li>
            <span className="testing-icon">
              <FontAwesomeIcon icon={faGamepad} />
            </span>{" "}
            Action
          </li>
        </NavLink>
        <NavLink to={"/games-genre/adventure"} onClick={resetPagination}>
          <li>
            <span className="testing-icon">
              <FontAwesomeIcon icon={faPersonRunning} />
            </span>{" "}
            Adventure
          </li>
        </NavLink>
        <NavLink to={"/games-genre/racing"} onClick={resetPagination}>
          <li>
            <span className="testing-icon">
              <FontAwesomeIcon icon={faCar} />
            </span>{" "}
            Racing
          </li>
        </NavLink>
        <NavLink to={"/games-genre/shooter"} onClick={resetPagination}>
          <li>
            <span className="testing-icon">
              <FontAwesomeIcon icon={faCrosshairs} />
            </span>{" "}
            Shooter
          </li>
        </NavLink>
        <NavLink
          to={"/games-genre/role-playing-games-rpg"}
          onClick={resetPagination}
        >
          <li>
            <span className="testing-icon">
              <FontAwesomeIcon icon={faShieldHalved} />
            </span>{" "}
            RPG
          </li>
        </NavLink>
        <NavLink to={"/games-genre/sports"} onClick={resetPagination}>
          <li>
            <span className="testing-icon">
              <FontAwesomeIcon icon={faFutbol} />
            </span>{" "}
            Sports
          </li>
        </NavLink>
        <NavLink to={"/games-genre/strategy"} onClick={resetPagination}>
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

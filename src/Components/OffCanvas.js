import { NavLink } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../GlobalContext";
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
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";

function OffCanvas() {
  // Context call
  const { loginStatus, setCurrentUser, setLoginStatus, offCanvasActive } =
    useContext(GlobalContext);
  // Logs user out
  const logout = () => {
    setCurrentUser([]);
    setLoginStatus(false);
  };

  return (
    <div className="sidebar offCanvas-nav">
      <ul className="main-sidenav">
        <NavLink
          to={"/games-userp/profile"}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <li className="user-links">
            <span className="nav-icon">
              <FontAwesomeIcon icon={faUser} />
            </span>{" "}
            Profile
          </li>
        </NavLink>

        <NavLink
          to={"/games-user/User-games"}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <li className="user-links">
            <span className="nav-icon">
              <FontAwesomeIcon icon={faLayerGroup} />
            </span>{" "}
            My Games
          </li>
        </NavLink>

        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <li>
            <span className="nav-icon">
              <FontAwesomeIcon icon={faTrophy} />
            </span>{" "}
            The Best
          </li>
        </NavLink>

        <NavLink
          to={"/games-genre/action"}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <li>
            <span className="nav-icon">
              <FontAwesomeIcon icon={faGamepad} />
            </span>{" "}
            Action
          </li>
        </NavLink>

        <NavLink
          to={"/games-genre/adventure"}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <li>
            <span className="nav-icon">
              <FontAwesomeIcon icon={faPersonRunning} />
            </span>{" "}
            Adventure
          </li>
        </NavLink>

        <NavLink
          to={"/games-genre/racing"}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <li>
            <span className="nav-icon">
              <FontAwesomeIcon icon={faCar} />
            </span>{" "}
            Racing
          </li>
        </NavLink>

        <NavLink
          to={"/games-genre/shooter"}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <li>
            <span className="nav-icon">
              <FontAwesomeIcon icon={faCrosshairs} />
            </span>{" "}
            Shooter
          </li>
        </NavLink>

        <NavLink
          to={"/games-genre/role-playing-games-rpg"}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <li>
            <span className="nav-icon">
              <FontAwesomeIcon icon={faShieldHalved} />
            </span>{" "}
            RPG
          </li>
        </NavLink>

        <NavLink
          to={"/games-genre/sports"}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <li>
            <span className="nav-icon">
              <FontAwesomeIcon icon={faFutbol} />
            </span>{" "}
            Sports
          </li>
        </NavLink>

        <NavLink
          to={"/games-genre/strategy"}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <li>
            <span className="nav-icon">
              <FontAwesomeIcon icon={faChess} />
            </span>{" "}
            Strategy
          </li>
        </NavLink>
        {loginStatus ? (
          <li className="user-links" onClick={logout}>
            <span className="nav-icon">
              <FontAwesomeIcon icon={faPowerOff} />
            </span>{" "}
            Log Out
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}

export default OffCanvas;

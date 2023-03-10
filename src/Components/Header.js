import { useNavigate } from "react-router-dom";
import GlobalContext from "../GlobalContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const navigate = useNavigate();
  // Context call
  const { currentUser, loginStatus, activeNav } = useContext(GlobalContext);

  return (
    <nav className="nav">
      <div className="offCanvas">
        <button className="offCanvasButton" onClick={activeNav}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div
        className="logo-nav"
        onClick={() => {
          navigate("/");
        }}
      >
        <h1 className="logo">Gamer-Data</h1>
      </div>
      {loginStatus === true ? (
        <div className="nav-user">
          <p>
            {Object.keys(currentUser).length === 0
              ? "none"
              : `${currentUser.fname}.${currentUser.lname.substring(0, 1)}`}
          </p>
        </div>
      ) : (
        <ul>
          <li>
            <button
              className="sign-in"
              data-bg-colour="purple"
              onClick={() => {
                navigate("../games/Login");
              }}
            >
              Login
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Header;

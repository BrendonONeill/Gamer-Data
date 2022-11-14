import { useNavigate } from "react-router-dom";
import GlobalContext from "../GlobalContext";
import { useContext } from "react";

function Header() {
  const navigate = useNavigate();
  const { currentUser, loginStatus } = useContext(GlobalContext);

  return (
    <nav className="nav">
      <div
        className="logo-nav"
        onClick={() => {
          navigate("/games");
        }}
      >
        <h1>Gamer-Data</h1>
      </div>
      {loginStatus === true ? (
        <div>
          <h3>Sammy</h3>
        </div>
      ) : (
        <ul>
          <li>
            <a
              data-bg-colour="purple"
              onClick={() => {
                navigate("../games/Login");
              }}
            >
              Sign In
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Header;

import { useNavigate } from "react-router-dom";
import GlobalContext from "../GlobalContext";
import { useContext } from "react";

function Header() {
  const navigate = useNavigate();
  // Context call
  const { currentUser, loginStatus } = useContext(GlobalContext);

  return (
    <nav className="nav">
      <div
        className="logo-nav"
        onClick={() => {
          navigate("/games");
        }}
      >
        <h1 className="logo">Gamer-Data</h1>
      </div>
      {loginStatus === true ? (
        <div>
          <h3>
            {Object.keys(currentUser).length === 0
              ? "none"
              : `${currentUser.fname}.${currentUser.lname.substring(0, 1)}`}
          </h3>
        </div>
      ) : (
        <ul>
          <li>
            <a
              className="sign-in"
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

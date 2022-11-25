import { useNavigate } from "react-router-dom";
function LoginButton() {
  const navigate = useNavigate();
  return (
    <>
      <div className="not-login-button-section">
        <p>Please Login first to see this page</p>
        <button
          onClick={() => navigate("../games/Login")}
          className="not-login-button"
        >
          Login
        </button>
      </div>
    </>
  );
}

export default LoginButton;

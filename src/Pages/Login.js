import { useContext } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import GlobalContext from "../GlobalContext";

function Login() {
  const { setEmail, setPassword, firebaseLogin, loginError, setLoginError } =
    useContext(GlobalContext);

  return (
    <>
      <div className="main-container">
        <Header />
        {loginError ? (
          <div className="error-tab">
            <h2>Email or Password wrong, please try again.</h2>
          </div>
        ) : (
          ""
        )}
        <div className="login-bg">
          <div className="login-container">
            <form className="login-form" onSubmit={firebaseLogin}>
              <label className="login-form-label">email</label>
              <input
                className="login-form-input"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (loginError !== "") {
                    setLoginError("");
                  }
                }}
              />
              <label className="login-form-label">password</label>
              <input
                className="login-form-input"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (loginError !== "") {
                    setLoginError("");
                  }
                }}
              />
              <button className="login-form-button" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Login;

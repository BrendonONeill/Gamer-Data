import { useContext } from "react";
import Header from "../Components/Header";
import GlobalContext from "../GlobalContext";

function Login() {
  const { uid, setEmail, setPassword, firebaseLogin } =
    useContext(GlobalContext);

  return (
    <>
      <div className="main-container">
        <Header />
        <div>
          <div className="login-container">
            <form onSubmit={firebaseLogin}>
              <label className="form-label">email</label>
              <input
                className="form-input"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="form-label">password</label>
              <input
                className="form-input"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">test</button>
            </form>
            <p>{uid}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

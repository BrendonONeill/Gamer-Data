import Profile from "../Components/Profile";
import NavSidebar from "../Components/NavSidebar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useContext } from "react";
import GlobalContext from "../GlobalContext";
import LoginButton from "../Components/LoginButton";

function User() {
  const { loginStatus } = useContext(GlobalContext);
  return (
    <>
      <div className="main-container">
        <Header />
        <main className="main-container-content">
          <NavSidebar />
          {loginStatus === true ? <Profile /> : <LoginButton />}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default User;

import Profile from "../Components/Profile";
import NavSidebar from "../Components/NavSidebar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useContext, useEffect } from "react";
import GlobalContext from "../GlobalContext";
import LoginButton from "../Components/LoginButton";
import OffCanvas from "../Components/OffCanvas";
import { useLocation } from "react-router-dom";
function User() {
  let location = useLocation();
  const { loginStatus, offCanvasActive, setOffCanvasActive } =
    useContext(GlobalContext);

  useEffect(() => {
    setOffCanvasActive(false);
  }, [location]);

  return (
    <>
      <div className="main-container">
        <Header />
        <main className="main-container-content">
          <NavSidebar />
          {offCanvasActive && <OffCanvas />}
          {loginStatus === true ? <Profile /> : <LoginButton />}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default User;

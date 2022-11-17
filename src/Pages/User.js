import Profile from "../Components/Profile";
import NavSidebar from "../Components/NavSidebar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function User() {
  return (
    <>
      <div className="main-container">
        <Header />
        <main className="main-container-content">
          <NavSidebar />
          <Profile />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default User;

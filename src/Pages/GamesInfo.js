import NavSidebar from "../Components/NavSidebar";
import Header from "../Components/Header";
import GameDetails from "../Components/GameDetails";
import Footer from "../Components/Footer";

function GamesInfo() {
  return (
    <div className="main-container">
      <Header />
      <main className="main-container-content">
        <NavSidebar />
        <GameDetails />
        <Footer />
      </main>
    </div>
  );
}

export default GamesInfo;

import NavSidebar from "../Components/NavSidebar";
import Header from "../Components/Header";
import GameDetails from "../Components/GameDetails";
import Footer from "../Components/Footer";
import OffCanvas from "../Components/OffCanvas";
import GlobalContext from "../GlobalContext";
import { useContext } from "react";

function GamesInfo() {
  const { offCanvasActive } = useContext(GlobalContext);

  return (
    <div className="main-container">
      <Header />
      <main className="main-container-content">
        <NavSidebar />
        {offCanvasActive && <OffCanvas />}
        <GameDetails />
      </main>
      <Footer />
    </div>
  );
}

export default GamesInfo;

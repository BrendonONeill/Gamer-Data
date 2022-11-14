import NavSidebar from "../Components/NavSidebar";
import Header from "../Components/Header";
import GameDetails from "../Components/GameDetails";

function GamesInfo() {
  return (
    <div className="main-container">
      <Header />
      <main className="main-container-content">
        <NavSidebar />
        <GameDetails />
      </main>
    </div>
  );
}

export default GamesInfo;

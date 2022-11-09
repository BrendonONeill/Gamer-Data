import { useContext } from "react";
import GlobalContext from "../GlobalContext";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import Header from "../Components/Header";
import UserCardList from "../Components/UserCardList";
import NavSidebar from "../Components/NavSidebar";

function Usergames() {
  const { games, uid, setGames } = useContext(GlobalContext);

  // gathers data from database
  useEffect(() => {
    const getGames = async () => {
      const gamesCollectionRef = collection(db, "users", `${uid}`, "games");
      const dbGames = await getDocs(gamesCollectionRef);
      setGames(dbGames.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getGames();
    console.log(games);
  }, [uid]);
  console.log(uid);

  return (
    <>
      <div className="main-container">
        <Header />
        {games.length > 0 && (
          <main className="main-container-content">
            <NavSidebar />
            <UserCardList />
          </main>
        )}
      </div>
    </>
  );
}

export default Usergames;

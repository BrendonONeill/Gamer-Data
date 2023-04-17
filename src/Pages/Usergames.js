import { useContext, useState } from "react";
import GlobalContext from "../GlobalContext";
import { useEffect } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { qsGames } from "../Fetch/SortData";
import Header from "../Components/Header";
import UserCardList from "../Components/UserCardList";
import NavSidebar from "../Components/NavSidebar";
import Footer from "../Components/Footer";
import LoginButton from "../Components/LoginButton";
import OffCanvas from "../Components/OffCanvas";
import { useLocation } from "react-router-dom";

function Usergames() {
  let location = useLocation();
  const {
    uid,
    games,
    setSortedGames,
    setGames,
    setCurrentUser,
    loginStatus,
    offCanvasActive,
    setOffCanvasActive,
  } = useContext(GlobalContext);
  const [filter, setFilter] = useState("");

  // gathers data from database
  useEffect(() => {
    const getGames = async () => {
      const gamesCollectionRef = collection(db, "users", `${uid}`, "games");
      const dbGames = await getDocs(gamesCollectionRef);
      setGames(dbGames.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getGames();
    const userinfo = async (user) => {
      const gamesCollectionRef = collection(db, "users");
      const userRef = doc(gamesCollectionRef, `${user}`);
      const userObj = await getDoc(userRef);
      const userObjFields = userObj?._document?.data?.value?.mapValue?.fields;
      const Obj = {
        fname: userObjFields.fname.stringValue,
        lname: userObjFields.lname.stringValue,
        email: userObjFields.email.stringValue,
        uid: user,
      };
      setCurrentUser(Obj);
    };
    if (loginStatus !== false) {
      userinfo(uid);
    }
    return () => {};
  }, [uid]);

  useEffect(() => {
    setOffCanvasActive(false);
  }, [location]);

  const test = (e) => {
    e.preventDefault();
    console.log(filter);
    if (!filter) {
      setSortedGames(games);
    } else {
      const sortedGames = qsGames(games, filter, 0, games.length - 1);
      console.log(sortedGames);
      setSortedGames(sortedGames);
    }
    setFilter("");
  };

  return (
    <>
      <div className="main-container">
        <Header />
        <div>
          <div className="user-stats">
            <form className="sort" onSubmit={(e) => test(e)}>
              <label htmlFor="filter">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  name="filter"
                  id="filter"
                >
                  <option value=""></option>
                  <option value="metacritic">Metacritic</option>
                  <option value="rating">Your Score</option>
                  <option value="released">Release Date</option>
                </select>
              </label>
              <input type="submit" value={" Sort Games"}></input>
            </form>
            <p>Games in Collection: ( {games.length}/20 )</p>
          </div>
        </div>
        <main className="main-container-content">
          <NavSidebar />
          {offCanvasActive && <OffCanvas />}
          {loginStatus === true ? <UserCardList /> : <LoginButton />}
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Usergames;

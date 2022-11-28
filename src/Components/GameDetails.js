import GlobalContext from "../GlobalContext";
import { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import Loading from "./Loading";
import CardInfo from "./CardInfo";

function GameDetails() {
  let params = useParams();
  // Context call
  const {
    games,
    cardInfomrationData,
    setCardInfomrationData,
    setGameinDB,
    gameinDB,
    setGames,
    uid,
  } = useContext(GlobalContext);

  //First checking if game in the games colection, if so calls the object in the collection or it calls the api.
  useEffect(() => {
    const value = games.some((game) => game.game_id.toString() === params.id);
    if (value) {
      const game = games.find((game) => game.game_id.toString() === params.id);
      setCardInfomrationData(game);
      setGameinDB(true);
    } else if (!value) {
      const fetchData = async (para) => {
        const response = await fetch(
          `https://api.rawg.io/api/games/${para.id}?key=${process.env.REACT_APP_API_KEY}`
        );
        const api = await response.json();
        setCardInfomrationData(api);
        setGameinDB(false);
      };
      fetchData(params);
      window.scrollTo(0, 0);
    }

    return () => {};
  }, []);

  useEffect(() => {
    const getGames = async () => {
      const gamesCollectionRef = collection(db, "users", `${uid}`, "games");
      const dbGames = await getDocs(gamesCollectionRef);
      setGames(dbGames.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getGames();

    return () => {};
  }, [gameinDB]);

  return (
    <>
      {Object.keys(cardInfomrationData).length > 0 ? <CardInfo /> : <Loading />}
    </>
  );
}

export default GameDetails;

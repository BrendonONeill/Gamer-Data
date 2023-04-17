import GlobalContext from "../GlobalContext";
import { useContext, useEffect, useState } from "react";
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
  const [err, setErr] = useState(null);

  //First checking if game in the games collection, if so calls the object in the collection or it calls the api. this is to prevent extra api calls

  useEffect(() => {
    const value = games.some((game) => game.game_id.toString() === params.id);
    if (value) {
      const game = games.find((game) => game.game_id.toString() === params.id);
      setCardInfomrationData(game);
      setGameinDB(true);
    } else if (!value) {
      const fetchData = async (para) => {
        try {
          const response = await fetch(
            `https://nodeproxy-production.up.railway.app/gamer/gameDetails`,
            {
              headers: {
                id: `${para.id}`,
              },
            }
          );
          const api = await response.json();
          setCardInfomrationData(api);
          setGameinDB(false);
        } catch (error) {
          console.log("this is an error oh no and error run....." + error);
          setErr({
            message: error.message,
            status: error.status | 404,
          });
        }
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
      {Object.keys(cardInfomrationData).length > 0 ? (
        <CardInfo />
      ) : err !== null ? (
        <h1>{err.message + " " + err.status}</h1>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default GameDetails;

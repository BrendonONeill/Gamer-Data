import GlobalContext from "../GlobalContext";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";

function GameDetails() {
  const [apiCalled, setApiCalled] = useState(false);
  const [gameInDB, setGameinDB] = useState(false);
  let params = useParams();
  const { cardClicked, setCardClicked, uid, loginStatus, games } =
    useContext(GlobalContext);

  useEffect(() => {
    console.log("useEffect called");
    const fetchData = async (para) => {
      const response = await fetch(
        `https://api.rawg.io/api/games/${para.id}?key=${process.env.REACT_APP_API_KEY}`
      );
      const api = await response.json();
      setCardClicked(api);
      setApiCalled(true);
    };
    fetchData(params);
  }, []);

  const addToFirebase = (data) => {
    if (games.length > 5) {
      return;
    }
    const firebaseObject = createObject(data);
    const addData = async () => {
      const gamesCollectionRef = collection(db, "users", `${uid}`, "games");
      await addDoc(gamesCollectionRef, firebaseObject);
    };
    addData();
  };

  const deleteFromFirebase = (id) => {};

  const createObject = (data) => {
    const obj = {
      game_id: data.id,
      name: data.name,
      image: data.background_image,
      metacritic: data.metacritic,
      platforms: data.platforms,
      parent_platforms: data.parent_platforms,
      released: data.released,
      description_raw: data.description_raw,
      developers: data.developers,
      publishers: data.publishers,
      esrb_rating: data.esrb_rating,
    };
    return obj;
  };

  return (
    <>
      {console.log(cardClicked)}
      {apiCalled ? (
        <div className="games-information-card">
          <div>
            <img src={cardClicked.background_image}></img>
          </div>
          <div className="game-information-card-text">
            <h3 className="game-information-card-text-title">
              {cardClicked.name}
            </h3>
            <div className="game-information-card-text-platforms">
              <p className="game-header">Platforms</p>
              <p>{cardClicked.platforms[0].platform.name}</p>
            </div>
            <div className="game-information-card-text-button">
              {!gameInDB ? (
                <button onClick={() => addToFirebase(cardClicked)}>Plus</button>
              ) : (
                <button onClick={() => deleteFromFirebase(cardClicked.id)}>
                  Min
                </button>
              )}
            </div>
            <div className="game-information-card-text-genre">
              <p className="game-header">Genres</p>
              <p>{cardClicked.genres[0].name}</p>
            </div>
            <div className="game-information-card-text-score">
              <p className="game-header">Metacritic</p>
              <p>{cardClicked.metacritic}</p>
            </div>
            <div className="game-information-card-text-release">
              <p className="game-header">Release-Date</p>
              <p>{cardClicked.released}</p>
            </div>
            <div className="game-information-card-text-dev">
              <p className="game-header">Developers</p>
              <p>{cardClicked.developers[0].name}</p>
            </div>
            <div className="game-information-card-text-pub">
              <p className="game-header">Publishers</p>
              <p>{cardClicked.publishers[0].name}</p>
            </div>
            <div className="game-information-card-text-rating">
              <p className="game-header">Rating</p>
              <p>{cardClicked.esrb_rating.name}</p>
            </div>
            <div className="game-information-card-text-details">
              <p>{cardClicked.description_raw}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2>Still loading</h2>
        </div>
      )}
    </>
  );
}

export default GameDetails;

import GlobalContext from "../GlobalContext";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { db } from "../Firebase";
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";

function CardInfo() {
  const {
    loginStatus,
    cardInfomrationData,
    gameInDB,
    uid,
    games,
    setGameinDB,
  } = useContext(GlobalContext);

  // Adds a new game to the DB
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
    setGameinDB(true);
  };

  // Delets a game from the DB
  const deleteFromFirebase = (id) => {
    const deleteData = async () => {
      const gamesCollectionRef = collection(db, "users", `${uid}`, "games");
      const docRef = doc(gamesCollectionRef, `${id}`);
      await deleteDoc(docRef);
    };
    deleteData();
    setGameinDB(false);
  };

  //creates a new object of game to be added to the DB
  const createObject = (data) => {
    const obj = {
      game_id: data.id,
      name: data.name,
      background_image: data.background_image,
      metacritic: data.metacritic,
      platforms: data.platforms,
      parent_platforms: data.parent_platforms,
      released: data.released,
      description_raw: data.description_raw,
      developers: data.developers,
      publishers: data.publishers,
      esrb_rating: data.esrb_rating,
      genres: data.genres,
    };
    return obj;
  };

  return (
    <div className="games-information-card">
      <div>
        <img src={cardInfomrationData.background_image}></img>
      </div>
      <div className="game-information-card-text">
        <h3 className="game-information-card-text-title">
          {cardInfomrationData.name}
        </h3>
        <div className="game-information-card-text-platforms">
          <p className="game-header">Platforms</p>
          <p>{cardInfomrationData.platforms[0]?.platform?.name || "test"}</p>
        </div>
        {loginStatus && (
          <>
            <div className="game-information-card-text-form">
              <form>
                <label>
                  Game Status{" "}
                  <select>
                    <option>Not Played</option>
                    <option>Playing</option>
                    <option>Completed</option>
                  </select>
                </label>
                <label>
                  Rating{" "}
                  <input type="number" min="0" max="100" value={0}></input>
                </label>
                <button>Update</button>
              </form>
            </div>
            <div className="game-information-card-text-button">
              {!gameInDB ? (
                <button
                  className="firebase-button "
                  data-colour="Plus"
                  onClick={() => addToFirebase(cardInfomrationData)}
                >
                  {" "}
                  <FontAwesomeIcon icon={faPlus} /> My Games
                </button>
              ) : (
                <button
                  className="firebase-button "
                  data-colour="Minus"
                  onClick={() => deleteFromFirebase(cardInfomrationData.id)}
                >
                  <FontAwesomeIcon icon={faMinus} /> My Games
                </button>
              )}
            </div>
          </>
        )}
        <div className="game-information-card-text-genre">
          <p className="game-header">Genres</p>
          <p>{cardInfomrationData.genres[0]?.name || "NA"}</p>
        </div>
        <div className="game-information-card-text-score">
          <p className="game-header">Metacritic</p>
          <p>{cardInfomrationData?.metacritic}</p>
        </div>
        <div className="game-information-card-text-release">
          <p className="game-header">Release-Date</p>
          <p>{cardInfomrationData?.released}</p>
        </div>
        <div className="game-information-card-text-dev">
          <p className="game-header">Developers</p>
          <p>{cardInfomrationData?.developers[0]?.name}</p>
        </div>
        <div className="game-information-card-text-pub">
          <p className="game-header">Publishers</p>
          <p>{cardInfomrationData?.publishers[0]?.name}</p>
        </div>
        <div className="game-information-card-text-rating">
          <p className="game-header">Rating</p>
          <p>{cardInfomrationData?.esrb_rating?.name || "N/A"}</p>
        </div>
        <div className="game-information-card-text-details">
          <p>{cardInfomrationData?.description_raw}</p>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;

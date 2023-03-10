import GlobalContext from "../GlobalContext";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faArrowRotateBack,
} from "@fortawesome/free-solid-svg-icons";
import { db } from "../Firebase";
import { collection, addDoc, deleteDoc, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

// context call
function CardInfo() {
  const [gameStatus, setGameStaus] = useState("");
  const [rating, setRating] = useState(0);
  const {
    loginStatus,
    cardInfomrationData,
    gameInDB,
    uid,
    games,
    setGameinDB,
    dbFull,
    setDBFull,
  } = useContext(GlobalContext);
  const navigate = useNavigate();

  // Adds a new game to the DB
  const addToFirebase = (data) => {
    if (games.length > 30) {
      setDBFull(true);
      return;
    }
    setDBFull(false);
    const firebaseObject = createObject(data);
    const addData = async () => {
      const gamesCollectionRef = collection(db, "users", `${uid}`, "games");
      await addDoc(gamesCollectionRef, firebaseObject);
    };
    addData();
    setGameinDB(true);
    navigate("../games-user/User-games");
  };

  // Deletes a game from the DB
  const deleteFromFirebase = (id) => {
    const deleteData = async () => {
      const gamesCollectionRef = collection(db, "users", `${uid}`, "games");
      const docRef = doc(gamesCollectionRef, `${id}`);
      await deleteDoc(docRef);
    };
    deleteData();
    setGameinDB(false);
    setDBFull(false);
    navigate("../games-user/User-games");
  };

  //Creates a new object of a game to be added to the DB
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
      rating: 0,
      gammeStatus: "Not Played",
    };
    return obj;
  };

  //Adds Users rating to selected game
  const updateInFirebase = (id, data, rating, gameStatus) => {
    if (rating > 100) {
      rating = 100;
    } else if (rating < 0) {
      rating = 0;
    }
    const updateData = async () => {
      const gamesCollectionRef = collection(db, "users", `${uid}`, "games");
      const docRef = doc(gamesCollectionRef, `${id}`);
      const newData = {
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
        rating: rating,
        gameStatus: gameStatus,
      };
      await setDoc(docRef, newData);
    };
    updateData();
    setRating(0);
    navigate("../games-user/User-games");
  };

  return (
    <>
      {dbFull && (
        <div>
          <p>Game list full, please remove some games before trying again. </p>
        </div>
      )}
      <div className="games-information-card">
        <div className="card-info-image-section">
          <img
            src={cardInfomrationData.background_image || "../test.jpg"}
            alt="Video game cover"
          ></img>
        </div>
        <div className="game-information-card-text">
          <h3 className="game-information-card-text-title">
            {cardInfomrationData.name}
          </h3>
          <div className="game-information-card-text-platforms">
            <p className="game-header">Platforms</p>
            {cardInfomrationData?.platforms.map((platform) => (
              <p className="mapped-text" key={platform.platform.id}>
                {platform.platform.name}
              </p>
            ))}
          </div>
          {loginStatus && (
            <>
              {gameInDB && (
                <div className="game-information-card-text-form">
                  <form className="game-info-form">
                    <label className="game-info-form-lable">
                      Game Status{" "}
                      <select
                        className="game-info-form-input"
                        onChange={(e) => setGameStaus(e.target.value)}
                      >
                        <option selected></option>
                        <option value={"Not Played"}>Not Played</option>
                        <option value={"Playing"}>Playing</option>
                        <option value={"Completed"}>Completed</option>
                      </select>
                    </label>
                    <label className="game-info-form-lable">
                      Rating{" "}
                      <input
                        className="game-info-form-input"
                        type="number"
                        min="0"
                        max="100"
                        placeholder={cardInfomrationData?.rating || 10}
                        onChange={(e) => setRating(Number(e.target.value))}
                      ></input>
                    </label>
                    {gameStatus !== "" && (
                      <button
                        className="game-info-form-button"
                        onClick={() =>
                          updateInFirebase(
                            cardInfomrationData.id,
                            cardInfomrationData,
                            rating,
                            gameStatus
                          )
                        }
                      >
                        Update
                      </button>
                    )}
                  </form>
                </div>
              )}
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
            {cardInfomrationData?.genres.map((genre) => (
              <p className="mapped-text" key={genre.id}>
                {genre.name}
              </p>
            ))}
          </div>
          <div className="game-information-card-text-score">
            <p className="game-header">Metacritic</p>
            <p className="game-text-align">{cardInfomrationData?.metacritic}</p>
          </div>
          <div className="game-information-card-text-release">
            <p className="game-header">Release-Date</p>
            <p className="game-text-align">{cardInfomrationData?.released}</p>
          </div>
          <div className="game-information-card-text-dev">
            <p className="game-header">Developers</p>
            {cardInfomrationData?.developers.map((developer) => (
              <p className="mapped-text" key={developer.id}>
                {developer.name}
              </p>
            ))}
          </div>
          <div className="game-information-card-text-pub">
            <p className="game-header">Publishers</p>
            {cardInfomrationData?.publishers.map((publisher) => (
              <p className="mapped-text" key={publisher.id}>
                {publisher.name}
              </p>
            ))}
          </div>
          <div className="game-information-card-text-rating">
            <p className="game-header">Rating</p>
            <p className="game-text-align">
              {cardInfomrationData?.esrb_rating?.name || "N/A"}
            </p>
          </div>
          <div className="game-information-card-text-details">
            <p className="game-header">Description</p>
            <p>{cardInfomrationData?.description_raw}</p>
          </div>
        </div>
        <button className="go-back-button" onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faArrowRotateBack} /> Go Back
        </button>
      </div>
    </>
  );
}
export default CardInfo;

import GlobalContext from "../GlobalContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faArrowRotateBack,
} from "@fortawesome/free-solid-svg-icons";
import { db } from "../Firebase";
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

// context call
function CardInfo() {
  const {
    loginStatus,
    cardInfomrationData,
    gameInDB,
    uid,
    games,
    setGameinDB,
  } = useContext(GlobalContext);
  const navigate = useNavigate();

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

  // Deletes a game from the DB
  const deleteFromFirebase = (id) => {
    const deleteData = async () => {
      const gamesCollectionRef = collection(db, "users", `${uid}`, "games");
      const docRef = doc(gamesCollectionRef, `${id}`);
      await deleteDoc(docRef);
    };
    deleteData();
    setGameinDB(false);
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
    };
    return obj;
  };

  return (
    <div className="games-information-card">
      <div className="card-info-image-section">
        <img
          src={cardInfomrationData.background_image}
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
          <p>{cardInfomrationData?.description_raw}</p>
        </div>
      </div>
      <button className="go-back-button" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowRotateBack} /> Go Back
      </button>
    </div>
  );
}
export default CardInfo;

import GlobalContext from "../GlobalContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Cards({ d }) {
  const { setCardClicked, cardClicked } = useContext(GlobalContext);
  const navigate = useNavigate();

  const gameInformation = (d) => {
    navigate(`../games-info/${d}`);
  };

  return (
    <>
      <div
        className="game-card"
        key={d.id}
        onClick={() => gameInformation(d.id)}
      >
        <div className="game-card-image">
          <img
            className="test"
            src={d.background_image}
            alt="Girl in a jacket"
          />
          <div className="game-card-consoles">
            <ul>
              {d.parent_platforms.some((e) => e.platform.name === "PC") ? (
                <li>
                  <img
                    src={"../pc.svg"}
                    alt="Girl in a jacket"
                    width="30px"
                    height="30px"
                  />
                </li>
              ) : (
                ""
              )}
              {d.parent_platforms.some(
                (e) => e.platform.name === "PlayStation"
              ) ? (
                <li>
                  <img
                    src="../playstation.svg"
                    alt="Girl in a jacket"
                    width="30px"
                    height="30px"
                  />
                </li>
              ) : (
                ""
              )}
              {d.parent_platforms.some((e) => e.platform.name === "Xbox") ? (
                <li>
                  <img
                    src="../xbox.svg"
                    alt="Girl in a jacket"
                    width="30px"
                    height="30px"
                  />
                </li>
              ) : (
                ""
              )}
              {d.parent_platforms.some(
                (e) => e.platform.name === "Nintendo"
              ) ? (
                <li>
                  <img
                    src="../nintendo.svg"
                    alt="Girl in a jacket"
                    width="30px"
                    height="30px"
                  />
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
        <div className="game-card-title">
          <h3 className="game-card-name">{d.name}</h3>
          <p className="game-card-score">{d.metacritic}</p>
          <p className="game-card-release">{d.released.substring(0, 4)}</p>
        </div>
      </div>
    </>
  );
}

export default Cards;

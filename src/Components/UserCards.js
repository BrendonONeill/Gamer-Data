function UserCards({ d }) {
  return (
    <>
      <div className="game-card" key={d.id}>
        <div className="game-card-image">
          <img className="test" src={d.image} alt="Girl in a jacket" />
          <div className="game-card-consoles">
            <ul>
              {d.platforms.some((e) => e.platform.name === "PC") ? (
                <li>
                  <img
                    src="pc.svg"
                    alt="Girl in a jacket"
                    width="30px"
                    height="30px"
                  />
                </li>
              ) : (
                ""
              )}
              {d.platforms.some((e) => e.platform.name === "PlayStation") ? (
                <li>
                  <img
                    src="playstation.svg"
                    alt="Girl in a jacket"
                    width="30px"
                    height="30px"
                  />
                </li>
              ) : (
                ""
              )}
              {d.platforms.some((e) => e.platform.name === "Xbox") ? (
                <li>
                  <img
                    src="xbox.svg"
                    alt="Girl in a jacket"
                    width="30px"
                    height="30px"
                  />
                </li>
              ) : (
                ""
              )}
              {d.platforms.some((e) => e.platform.name === "Nintendo") ? (
                <li>
                  <img
                    src="nintendo.svg"
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
          <h2>{d.name}</h2>
          <h3>{d.score}</h3>
          <h3>{d.released}</h3>
        </div>
      </div>
    </>
  );
}

export default UserCards;

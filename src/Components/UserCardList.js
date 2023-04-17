import UserCards from "./UserCards";
import GlobalContext from "../GlobalContext";
import { useContext, useEffect } from "react";
import { qsGames } from "../Fetch/SortData";

function UserCardList() {
  // Context call
  const { games, sortedGames, setSortedGames } = useContext(GlobalContext);

  useEffect(() => {
    if (games) {
      const test = qsGames(games, "metacritic", 0, games.length - 1);
      setSortedGames(test);
    }
  }, [games]);

  return (
    <>
      {sortedGames ? (
        <div className="games-grid">
          {sortedGames.map((d) => (
            <UserCards d={d} key={d.id} />
          ))}
        </div>
      ) : null}
    </>
  );
}

export default UserCardList;

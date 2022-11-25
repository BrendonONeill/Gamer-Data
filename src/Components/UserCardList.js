import UserCards from "./UserCards";
import GlobalContext from "../GlobalContext";
import { useContext } from "react";

function UserCardList({ d }) {
  // Context call
  const { games } = useContext(GlobalContext);

  return (
    <div className="games-grid">
      {games.map((d) => (
        <UserCards d={d} key={d.id} />
      ))}
    </div>
  );
}

export default UserCardList;

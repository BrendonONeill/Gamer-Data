import Cards from "../Components/Cards";
import GlobalContext from "../GlobalContext";
import { useContext } from "react";

function CardList({ d }) {
  const { cards } = useContext(GlobalContext);

  return (
    <div className="games-grid">
      {cards?.map((d) => (
        <Cards d={d} />
      ))}
    </div>
  );
}

export default CardList;

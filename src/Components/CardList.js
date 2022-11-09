import Cards from "../Components/Cards";
import GlobalContext from "../GlobalContext";
import { useContext } from "react";

function CardList({ d }) {
  const { data } = useContext(GlobalContext);

  return (
    <div className="games-grid">
      {data.map((d) => (
        <Cards d={d} />
      ))}
    </div>
  );
}

export default CardList;

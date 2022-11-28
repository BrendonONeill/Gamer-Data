import Cards from "../Components/Cards";
import { Fragment } from "react";
function CardList({ pages }) {
  return (
    <div className="games-grid">
      {pages.map((result, i) => {
        return (
          <Fragment key={i}>
            {result?.results.map((d) => (
              <Cards key={d.id} d={d} />
            ))}
          </Fragment>
        );
      })}
    </div>
  );
}
export default CardList;

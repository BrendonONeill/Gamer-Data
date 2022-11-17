import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../GlobalContext";
import { useContext } from "react";

function Filter() {
  const { setCards, cards } = useContext(GlobalContext);
  const [filterSelect, setFilterSelect] = useState(false);
  const navigate = useNavigate();
  const searchNav = (searchWord) => {
    navigate(`../games-id/${searchWord}`);
  };

  const consoleFilter = (value) => {
    console.log("switched");
    console.log(value);

    if (value !== "none") {
      const filteredCards = cards.filter((card) => {
        return card.parent_platforms.some((platform) => {
          return platform.platform.name === value;
        });
      });
      setCards([...filteredCards]);
    }
  };

  const [searchInput, setSerachInput] = useState("");
  return (
    <div className="filter">
      <div>
        <label>
          Console
          <select onChange={(e) => consoleFilter(e.target.value)}>
            <option value="0">None</option>
            <option value="Playstation">Playstation</option>
            <option value="Nintendo">Nintendo</option>
            <option value="Xbox">Xbox</option>
            <option value="PC">PC</option>
          </select>
        </label>
      </div>
      <div>
        <form>
          <input
            value={searchInput}
            onChange={(e) => setSerachInput(e.target.value)}
          ></input>
          <button onClick={() => searchNav(searchInput)}>test</button>
        </form>
      </div>
    </div>
  );
}

export default Filter;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Filter() {
  const navigate = useNavigate();
  const searchNav = (searchWord) => {
    navigate(`../games-id/${searchWord}`);
  };

  const [searchInput, setSerachInput] = useState("");
  return (
    <div className="filter">
      <div>
        <button>Console</button>
        <button>Genre</button>
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

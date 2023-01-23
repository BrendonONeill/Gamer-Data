import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Filter() {
  const navigate = useNavigate();
  const searchNav = (searchWord) => {
    navigate(`../games-id/${searchWord}`);
  };

  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="filter">
      <div>
        <form>
          <label HTMLfor="searchGame">
            <input
              id="searchGame"
              className="filter-input"
              value={searchInput}
              placeholder="Pokemon"
              onChange={(e) => setSearchInput(e.target.value)}
            ></input>
          </label>
          <button
            className="filter-input-button"
            onClick={() => searchNav(searchInput)}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Filter;

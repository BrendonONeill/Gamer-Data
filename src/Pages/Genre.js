import GlobalContext from "../GlobalContext";
import { useContext } from "react";
import { useEffect } from "react";
import NavSidebar from "../Components/NavSidebar";
import Header from "../Components/Header";
import CardList from "../Components/CardList";
import Filter from "../Components/Filter";
import { Link, useParams } from "react-router-dom";

function Genre() {
  const { data, setData } = useContext(GlobalContext);
  let params = useParams();

  // calls to api for games info
  useEffect(() => {
    const fetchData = async (para) => {
      const response = await fetch(
        `https://api.rawg.io/api/games?ordering=-metacritic&key=${process.env.REACT_APP_API_KEY}&page=1&genres=${para.genre}`
      );
      console.log(params);
      const api = await response.json();
      setData(api.results);
      console.log(api);
    };
    fetchData(params);
  }, [params]);
  return (
    <>
      <div className="main-container">
        <Header />
        <Filter />
        {data.length > 0 && (
          <main className="main-container-content">
            <NavSidebar />
            <CardList />
            <button>More</button>
          </main>
        )}
      </div>
    </>
  );
}

export default Genre;

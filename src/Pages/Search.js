import CardList from "../Components/CardList";
import NavSidebar from "../Components/NavSidebar";
import Header from "../Components/Header";
import Filter from "../Components/Filter";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import GlobalContext from "../GlobalContext";
import { useContext } from "react";

function Search() {
  let params = useParams();
  const { setCards } = useContext(GlobalContext);

  useEffect(() => {
    setCards([]);
    console.log("useEffect called");
    const fetchData = async (para) => {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&search=${para.word}&ordering=-metacritic`
      );
      const api = await response.json();
      setCards(api.results);
    };
    fetchData(params);
  }, []);

  return (
    <>
      <div className="main-container">
        <Header />
        <Filter />
        <main className="main-container-content">
          <NavSidebar />

          <CardList />
        </main>
      </div>
    </>
  );
}

export default Search;

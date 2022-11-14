import GlobalContext from "../GlobalContext";
import { useContext } from "react";
import { useEffect } from "react";
import NavSidebar from "../Components/NavSidebar";
import Header from "../Components/Header";
import CardList from "../Components/CardList";
import CardCaro from "../Components/CardCaro";
import Filter from "../Components/Filter";

function Main() {
  const { data, uid, storeData, setData, loginStatus } =
    useContext(GlobalContext);

  // calls to api for games info
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.rawg.io/api/games?ordering=-metacritic&key=${process.env.REACT_APP_API_KEY}&page=1`
      );
      const api = await response.json();
      setData(api.results);
    };
    fetchData();
    console.log(data);
  }, []);

  return (
    <>
      <div className="main-container">
        <Header />
        <CardCaro />
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

export default Main;

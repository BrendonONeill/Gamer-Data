import GlobalContext from "../GlobalContext";
import { useContext } from "react";
import { useEffect } from "react";
import NavSidebar from "../Components/NavSidebar";
import Header from "../Components/Header";
import CardList from "../Components/CardList";
import CardCaro from "../Components/CardCaro";
import Filter from "../Components/Filter";
import { fetchData } from "../Fetch/ApiFetch";
import { useQuery } from "@tanstack/react-query";
import Footer from "../Components/Footer";
import Loading from "../Components/Loading";

function Main() {
  const { cards, setData, setCards, pagination, setPagination } =
    useContext(GlobalContext);

  const { data, isSuccess, isError, isLoading } = useQuery(
    ["apiGames"],
    fetchData
  );

  useEffect(() => {
    if (cards.length > 0) {
      console.log("called");
      const fetchPagination = async (paga) => {
        const response = await fetch(
          `https://api.rawg.io/api/games?ordering=-metacritic&key=${process.env.REACT_APP_API_KEY}&page=${paga}`
        );
        const app = await response.json();
        setCards([...cards, ...app.results]);
      };
      fetchPagination(pagination);
    }
  }, [pagination]);

  useEffect(() => {
    if (isSuccess) {
      setCards(data?.results);
    }
  }, [data]);

  if (isError) {
    return (
      <>
        <h1>Error </h1>
      </>
    );
  }

  return (
    <>
      <div className="main-container">
        <Header />
        <CardCaro />
        <Filter />
        <main className="main-container-content">
          <NavSidebar />
          {isLoading && <Loading />}
          {isSuccess && (
            <>
              <CardList />
              <button
                onClick={() => setPagination((pagination) => pagination + 1)}
              >
                More
              </button>
            </>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Main;

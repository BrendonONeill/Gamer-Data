import GlobalContext from "../GlobalContext";
import { useContext } from "react";
import NavSidebar from "../Components/NavSidebar";
import Header from "../Components/Header";
import CardList from "../Components/CardList";
import CardCaro from "../Components/CardCaro";
import Filter from "../Components/Filter";
import { fetchData } from "../Fetch/ApiFetch";
import { useInfiniteQuery } from "@tanstack/react-query";
import Footer from "../Components/Footer";
import Loading from "../Components/Loading";

function Main() {
  const {
    cards,
    setApiData,
    apiData,
    setCards,
    pagination,
    setPagination,
    resetCardInfo,
    cardInfomrationData,
  } = useContext(GlobalContext);

  const {
    data,
    isSuccess,
    isError,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(["apiGames"], fetchData, {
    getNextPageParam: (_lastPage, pages) => pages.length + 1,
  });

  return (
    <>
      <div className="main-container">
        <Header />
        <CardCaro />
        <Filter />
        <main className="main-container-content">
          <NavSidebar />
          {isLoading && isFetching && isFetchingNextPage ? <Loading /> : ""}
          {isSuccess && (
            <>
              <CardList pages={data.pages} />
              <button disabled={!hasNextPage} onClick={fetchNextPage}>
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

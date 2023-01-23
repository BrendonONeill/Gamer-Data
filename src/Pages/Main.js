import NavSidebar from "../Components/NavSidebar";
import Header from "../Components/Header";
import CardList from "../Components/CardList";
import Filter from "../Components/Filter";
import GlobalContext from "../GlobalContext";
import { useContext, useEffect } from "react";
import { fetchData } from "../Fetch/ApiFetch";
import { useInfiniteQuery } from "@tanstack/react-query";
import Footer from "../Components/Footer";
import Loading from "../Components/Loading";
import OffCanvas from "../Components/OffCanvas";
import { useLocation } from "react-router-dom";
import CardCaro from "../Components/CardCaro";

function Main() {
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
  let location = useLocation();
  const { offCanvasActive, setOffCanvasActive, setDBFull } =
    useContext(GlobalContext);

  useEffect(() => {
    setOffCanvasActive(false);
    setDBFull(false);
  }, [location]);

  return (
    <>
      <div className="main-container">
        <Header />
        <Filter />
        <CardCaro />
        <main className="main-container-content">
          <NavSidebar />
          {offCanvasActive && <OffCanvas />}
          {isLoading && isFetching && isFetchingNextPage ? <Loading /> : ""}
          {isSuccess && (
            <>
              <CardList pages={data.pages} />
              <div></div>
              <div className="pagination-button-section">
                <button
                  className="pagination-button"
                  disabled={!hasNextPage}
                  onClick={fetchNextPage}
                >
                  Load more games
                </button>
              </div>
            </>
          )}
          {isError && <h2>Error has occured, please try again later</h2>}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Main;

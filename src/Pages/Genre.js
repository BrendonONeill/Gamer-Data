import NavSidebar from "../Components/NavSidebar";
import Header from "../Components/Header";
import CardList from "../Components/CardList";
import Filter from "../Components/Filter";
import { useParams, useLocation } from "react-router-dom";
import { fetchGenre } from "../Fetch/ApiFetch";
import { useInfiniteQuery } from "@tanstack/react-query";
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import Footer from "../Components/Footer";
import OffCanvas from "../Components/OffCanvas";
import GlobalContext from "../GlobalContext";
import { useContext, useEffect } from "react";

function Genre() {
  const { offCanvasActive, setOffCanvasActive, setDBFull } =
    useContext(GlobalContext);
  let location = useLocation();

  let { genre } = useParams();
  // React Query Api call
  const {
    data,
    isSuccess,
    isError,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(["apiGenres", genre], fetchGenre, {
    getNextPageParam: (_lastPage, pages) => pages.length + 1,
  });

  useEffect(() => {
    setOffCanvasActive(false);
    setDBFull(false);
  }, [location]);

  return (
    <>
      <div className="main-container">
        <Header />
        <Filter />
        <main className="main-container-content">
          <NavSidebar />
          {offCanvasActive && <OffCanvas />}
          {isLoading || isFetching || isFetchingNextPage ? (
            <Loading />
          ) : isError ? (
            <Error />
          ) : isSuccess ? (
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
          ) : (
            ""
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Genre;

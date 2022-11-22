import CardList from "../Components/CardList";
import NavSidebar from "../Components/NavSidebar";
import Header from "../Components/Header";
import Filter from "../Components/Filter";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchId } from "../Fetch/ApiFetch";
import { useInfiniteQuery } from "@tanstack/react-query";
import Loading from "../Components/Loading";
import Footer from "../Components/Footer";

function Search() {
  let { word } = useParams();

  const { data, isSuccess, isError, isLoading, isFetching } = useInfiniteQuery(
    ["gamesId", word],
    fetchId,
    {
      getNextPageParam: (_lastPage, pages) => pages.length + 1,
    }
  );

  return (
    <>
      <div className="main-container">
        <Header />
        <Filter />
        <main className="main-container-content">
          <NavSidebar />
          {isLoading && isFetching ? <Loading /> : ""}
          {isSuccess && <CardList pages={data.pages} />}
          {isError ? <h2>error</h2> : ""}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Search;

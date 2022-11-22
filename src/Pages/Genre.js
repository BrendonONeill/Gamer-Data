import GlobalContext from "../GlobalContext";
import { useContext, useState } from "react";
import { useEffect } from "react";
import NavSidebar from "../Components/NavSidebar";
import Header from "../Components/Header";
import CardList from "../Components/CardList";
import Filter from "../Components/Filter";
import { Link, useParams } from "react-router-dom";
import { fetchGenre } from "../Fetch/ApiFetch";
import { useInfiniteQuery } from "@tanstack/react-query";
import Loading from "../Components/Loading";
import Footer from "../Components/Footer";

function Genre() {
  let { genre } = useParams();

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

  return (
    <>
      <div className="main-container">
        <Header />
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
          {isError ? <h2>error</h2> : ""}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Genre;

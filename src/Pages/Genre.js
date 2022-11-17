import GlobalContext from "../GlobalContext";
import { useContext, useState } from "react";
import { useEffect } from "react";
import NavSidebar from "../Components/NavSidebar";
import Header from "../Components/Header";
import CardList from "../Components/CardList";
import Filter from "../Components/Filter";
import { Link, useParams } from "react-router-dom";
import { fetchGenre } from "../Fetch/ApiFetch";
import { useQuery } from "@tanstack/react-query";
import { async } from "@firebase/util";
import Loading from "../Components/Loading";

function Genre() {
  const { cards, setCards, pagination, setPagination } =
    useContext(GlobalContext);
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
      setCards(api.results);
      setData(api);
      console.log(api);
    };
    fetchData(params);
  }, [params]);

  useEffect(() => {
    if (cards.length > 0) {
      console.log("called");
      const fetchPagination = async (paga, para) => {
        const response = await fetch(
          `https://api.rawg.io/api/games?ordering=-metacritic&key=${process.env.REACT_APP_API_KEY}&page=${paga}&genres=${para.genre}`
        );
        const app = await response.json();
        setCards([...cards, ...app.results]);
      };
      fetchPagination(pagination, params);
    }
  }, [pagination]);

  useEffect(() => {
    if (cards > 0) {
      console.log("I should be a new deck");
      setCards([...cards, ...data?.results]);
    }
  }, [data]);

  const testing = async () => {
    const response = await fetch(data.next);
    const api = await response.json();
    setData(api);
    console.log("data is changed");
  };

  return (
    <>
      <div className="main-container">
        <Header />
        <Filter />
        {cards.length > 0 ? (
          <main className="main-container-content">
            <NavSidebar />
            <CardList />
            <button
              onClick={() => setPagination((pagination) => pagination + 1)}
            >
              More
            </button>
          </main>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}

export default Genre;

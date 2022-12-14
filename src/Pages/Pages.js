import Main from "./Main";
import Login from "./Login";
import Search from "./Search";
import Usergames from "./Usergames";
import Genre from "./Genre";
import { Route, Routes } from "react-router-dom";
import GamesInfo from "./GamesInfo";
import User from "./User";

function Pages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/games/Login" element={<Login />} />
        <Route path="/games-id/:word" element={<Search />} />
        <Route path="/games-user/User-Games" element={<Usergames />} />
        <Route path="/games-genre/:genre" element={<Genre />} />
        <Route path="/games-info/:id" element={<GamesInfo />} />
        <Route path="/games-userp/profile" element={<User />} />
      </Routes>
    </>
  );
}

export default Pages;

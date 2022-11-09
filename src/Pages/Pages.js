import Main from "./Main";
import Login from "./Login";
import Search from "./Search";
import Usergames from "./Usergames";
import Genre from "./Genre";
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/:id" element={<Search />} />
        <Route path="/User-Games" element={<Usergames />} />
        <Route path="/" element={<Genre />} />
      </Routes>
    </>
  );
}

export default Pages;

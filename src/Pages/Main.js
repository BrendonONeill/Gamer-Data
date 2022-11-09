import GlobalContext from "../GlobalContext";
import { useContext } from "react";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { useEffect } from "react";
import NavSidebar from "../Components/NavSidebar";
import Header from "../Components/Header";
import CardList from "../Components/CardList";

function Main() {
  const { data, uid, storeData, setData } = useContext(GlobalContext);

  useEffect(() => {
    const addData = async () => {
      console.log("test 3");
      const gamesCollectionRef = collection(db, "users", `${uid}`, "games");
      console.log("test 3.5");
      await addDoc(gamesCollectionRef, {
        name: storeData.name,
        image: storeData.background_image,
        score: storeData.metacritic,
        platforms: storeData.parent_platforms,
        released: storeData.released,
      });
      console.log("test 4");
    };
    addData();
  }, [storeData]);

  // calls to api for games info
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("");
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
        {data.length > 0 && (
          <main className="main-container-content">
            <NavSidebar />
            <CardList />
          </main>
        )}
      </div>
    </>
  );
}

export default Main;

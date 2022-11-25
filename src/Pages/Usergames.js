import { useContext } from "react";
import GlobalContext from "../GlobalContext";
import { useEffect } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";
import Header from "../Components/Header";
import UserCardList from "../Components/UserCardList";
import NavSidebar from "../Components/NavSidebar";
import Footer from "../Components/Footer";
import LoginButton from "../Components/LoginButton";

function Usergames() {
  const { uid, setGames, setCurrentUser, loginStatus } =
    useContext(GlobalContext);

  // gathers data from database
  useEffect(() => {
    const getGames = async () => {
      const gamesCollectionRef = collection(db, "users", `${uid}`, "games");
      const dbGames = await getDocs(gamesCollectionRef);
      setGames(dbGames.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getGames();
    const userinfo = async (user) => {
      const gamesCollectionRef = collection(db, "users");
      const userRef = doc(gamesCollectionRef, `${user}`);
      const userObj = await getDoc(userRef);
      const userObjFields = userObj?._document?.data?.value?.mapValue?.fields;
      const Obj = {
        fname: userObjFields.fname.stringValue,
        lname: userObjFields.lname.stringValue,
        email: userObjFields.email.stringValue,
        uid: user,
      };
      setCurrentUser(Obj);
    };
    if (loginStatus !== false) {
      userinfo(uid);
    }
    return () => {};
  }, [uid]);

  return (
    <>
      <div className="main-container">
        <Header />

        <main className="main-container-content">
          <NavSidebar />
          {loginStatus === true ? <UserCardList /> : <LoginButton />}
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Usergames;

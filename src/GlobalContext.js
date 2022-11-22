import { createContext, useState } from "react";
import { auth } from "./Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [apiData, setApiData] = useState([]);
  const [cardInfomrationData, setCardInfomrationData] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [cards, setCards] = useState([]);
  const [games, setGames] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [uid, setUid] = useState("test");
  const [currentUser, setCurrentUser] = useState([]);
  const [storeData, setStoreData] = useState("");
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState(false);
  const [gameInDB, setGameinDB] = useState(false);

  const firebaseLogin = (e) => {
    e.preventDefault();
    console.log("test 1");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("test 2");
        const user = userCredential.user;
        setCurrentUser(user);
        setUid(user.reloadUserInfo.localId);
        console.info("yes you have signed in");
        setPassword("");
        setEmail("");
        setLoginStatus(true);
        navigate("../games/User-Games");
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    console.log("test 3");
  };

  const resetPagination = () => {
    setPagination(1);
    setCards([]);
  };

  const resetCardInfo = () => {
    setCardInfomrationData([]);
  };

  const storeCardInfo = (id) => {};

  return (
    <GlobalContext.Provider
      value={{
        apiData,
        games,
        email,
        password,
        uid,
        currentUser,
        storeData,
        setApiData,
        setEmail,
        setGames,
        setPassword,
        setUid,
        setCurrentUser,
        setStoreData,
        firebaseLogin,
        storeCardInfo,
        loginStatus,
        setLoginStatus,
        pagination,
        setPagination,
        cards,
        setCards,
        resetPagination,
        cardInfomrationData,
        setCardInfomrationData,
        resetCardInfo,
        gameInDB,
        setGameinDB,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;

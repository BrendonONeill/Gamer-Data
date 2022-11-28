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
  const [loginError, setLoginError] = useState("");
  const [offCanvasActive, setOffCanvasActive] = useState(false);
  const [dbFull, setDBFull] = useState(false);

  const activeNav = () => {
    setOffCanvasActive(!offCanvasActive);
  };

  const firebaseLogin = (e) => {
    e.preventDefault();
    console.log("test 1");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUid(user.reloadUserInfo.localId);
        setPassword("");
        setEmail("");
        setLoginStatus(true);
        navigate("../games-user/User-Games");
      })
      .catch((error) => {
        const errorCode = error.code;
        setLoginError(errorCode);
      });
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
        loginError,
        setLoginError,
        offCanvasActive,
        setOffCanvasActive,
        activeNav,
        dbFull,
        setDBFull,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;

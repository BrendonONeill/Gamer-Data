import { createContext, useState } from "react";
import { auth } from "./Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [data, setData] = useState([]);
  const [games, setGames] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [uid, setUid] = useState("test");
  const [currentUser, setCurrentUser] = useState([]);
  const [storeData, setStoreData] = useState("");
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState(false);

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
        navigate("/User-Games");
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    console.log("test 3");
  };

  const storeCardInfo = (id) => {
    console.log(id);
    console.log("test 1");
    const poke = data.find((x) => x.id === id);
    setStoreData(poke);
    console.log("test 2");
    console.log(storeData);
  };

  return (
    <GlobalContext.Provider
      value={{
        data,
        games,
        email,
        password,
        uid,
        currentUser,
        storeData,
        setData,
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;

import "./App.css";
import Pages from "./Pages/Pages";
import { GlobalProvider } from "./GlobalContext";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <GlobalProvider>
          <Pages />
        </GlobalProvider>
      </Router>
    </>
  );
}
export default App;

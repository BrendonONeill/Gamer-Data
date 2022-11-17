import "./App.css";
import Pages from "./Pages/Pages";
import { GlobalProvider } from "./GlobalContext";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient();
  return (
    <>
      <QueryClientProvider client={client}>
        <Router>
          <GlobalProvider>
            <Pages />
          </GlobalProvider>
        </Router>
      </QueryClientProvider>
    </>
  );
}
export default App;

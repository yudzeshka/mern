import "./App.css";
import { useRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../src/hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { token, login, logout, userId, ready } = useAuth();
  const isAutentificated = !!token;
  const routes = useRoutes(isAutentificated);

  if (!ready) {
    return <div>Loading....</div>;
  }

  return (
    <AuthContext.Provider
      value={{ token, login, logout, userId, isAutentificated }}
    >
      <BrowserRouter>
        <div className="App">{routes}</div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

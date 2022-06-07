import "./App.css";
import { useRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import { useSelector } from "react-redux";
import { AppStateType } from "./types/common";
import { userDataType } from "./types/dataTypes";

function App() {
  //const { token, login, logout, userId, ready } = useAuth();
  const userData: userDataType | null = useSelector(
    (store: AppStateType) => store.user.userData
  );
  // const userData = localStorage.getItem("userData");
  const isAuthenticated = !!userData;
  const routes = useRoutes(isAuthenticated);

  return (
    <BrowserRouter>
      <div className="App">{routes}</div>
    </BrowserRouter>
  );
}

export default App;

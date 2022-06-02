import "./App.css";
import { useRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../src/hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import { useSelector } from "react-redux";

function App() {
  //const { token, login, logout, userId, ready } = useAuth();
  const userData = useSelector((store) => store.user.userData);
  // const userData = localStorage.getItem("userData");
  const isAutentificated = !!userData;
  const routes = useRoutes(isAutentificated);
  //console.log(userData);
  // if (!ready) {
  //   return <div>Loading....</div>;
  // }

  return (
    <BrowserRouter>
      <div className="App">{routes}</div>
    </BrowserRouter>
  );
}

export default App;

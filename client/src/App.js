import "./App.css";
import HomePage from "./pages/Home";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegistrationPage from "./pages/Registration";
import CONSTANTS from "./constants";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { refresh } from "./redux/slices/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const refreshTokenFromCookies = Cookies.get(CONSTANTS.REFRESH_TOKEN);

    if(refreshTokenFromCookies) {
      dispatch(refresh(refreshTokenFromCookies))
    }
  }, [dispatch]);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/registration" component={RegistrationPage} />
      </Switch>
    </div>
  );
}

export default App;

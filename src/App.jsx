import { Route, Switch, useHistory } from "react-router-dom";
import Login from "./Login.jsx";
import Main from "./Main.jsx";
function App() {
  const history = useHistory();
  return (
    <Switch>
      <Route path="/login" render={() => <Login />} />

      <Route
        path="/main"
        render={() => {
          const checkLogin = localStorage.getItem("admin99");
          console.log("main",checkLogin)
          if (!checkLogin) {
            history.push("/login");
            return;
          }
          return <Main />;
        }}
      />
      <Route
        path="/*"
        render={() => {
          const checkLogin = localStorage.getItem("login");
          if (!checkLogin) {
            history.push("/login");
            return;
          }
          return <Main />;
        }}
      />
    </Switch>
  );
}

export default App;

import { createContext, useContext, useReducer } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Login from "./Login.jsx";
import Main from "./Main.jsx";
export const contextValue=createContext()
const auth =false

const authorReducer=(state=auth,action)=>{
  switch(action.type){
    case "SET_AUTH":{
      console.log("sadf",state)
      return !state
    }
    default :
    return state
  }
}

function App() {

  const [state,dispatch]=useReducer(authorReducer,auth)
 
  return (
  
  <contextValue.Provider value={{state,dispatch}}>
    <Switch>
      <Route path="/login" render={() => <Login />} />

      <Route
        path="/main"
        render={() => {
          if(!state){
            return <Redirect to="/login"/>
          }
          return <Main />;
        }}
      />
      <Route
        path="/*"
        render={() => {
         
          if(!state){
            return <Redirect to="/login"/>
          }
          return <Main />;
        }}
      />
    </Switch></contextValue.Provider>
  );
}

export default App;

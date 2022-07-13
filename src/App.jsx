

import { useState } from "react";
import "./app.css";

function App() {
  const [state, setstate] = useState({
    username: null,
    password: null,
  });
  const handleSubmit = (e) => {
    if(state.username=="admin99" && state.password=="admin99"){
      console.log("pass",process.env.REACT_APP_USERNAME)
    }
    
  };
  return (
    <div className="App full_screen d-flex flex-row  justify-content-center align-items-center">
      <form className="w-25 " >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Tên đăng nhập
          </label>
          <input
            name="username"
        
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setstate({ ...state, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Mật khẩu
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setstate({ ...state, [e.target.name]: e.target.value });
            }}
          />
        </div>
      
        
      
        <button type="button" className="btn btn-primary" onClick={(e)=>{handleSubmit(e)}}>
          Đăng nhập
        </button>
      </form>
    </div>
  );
}

export default App;

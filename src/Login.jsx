import { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const history  =useHistory()
  const [state, setstate] = useState({
    username: null,
    password: null,
  });
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    if (state.username === "admin99" && state.password === "admin99") {
      localStorage.setItem("admin99",true)
      setError(true);
      history.push("/")
    } else {
      setError(false);
    }
  };
  const handleError = () => {
    if (error === null) {
      return <></>;
    } else if (error === false) {
      return (
        <div className="alert alert-danger p-2" role="alert">
          Wrong !
        </div>
      );
    } else if (error === true) {
      return (
        <div className="alert alert-success p-2" role="alert">
          Hacking !
        </div>
      );
    }
  };
  return (
    <div className="App full_screen d-flex flex-row  justify-content-center align-items-center">
      <form style={{width:300}}>
      <h2 className="form-label text-secondary">
            HARDCODE
          </h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label text-secondary">
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
          <label htmlFor="exampleInputPassword1" className="form-label text-secondary">
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

        <button
          type="button"
          className="btn btn-primary mb-4"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Đăng nhập
        </button>
        <div>{handleError()}</div>
      </form>
    </div>
  );
}

export default Login;

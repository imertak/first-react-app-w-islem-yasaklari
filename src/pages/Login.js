import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleMouseClickedRegister = () => {
    window.location.href = "http://localhost:3000/kayit-ol";
  };

  const handleLogin = async () => {
    console.log("Giriş işlemi ");
    let response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
      }),
    });
    const data = await response.json();
    console.log(data.accessToken);
    console.log(data.tokenType);
    console.log(data);
    setToken(data.accessToken);
    console.log(token);
  };

  return (
    <div>
      <div>
        <h2>Giriş Yapın</h2>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              $
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <button className="btn btn-primary" type="submit" onClick={handleLogin}>
          Giriş
        </button>
        <Link onClick={handleMouseClickedRegister}>Kayit Ol</Link>
      </div>
    </div>
  );
}

export default Login;

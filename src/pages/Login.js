import React, { useContext, useState } from "react";
import { Link, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { TokenContext } from "../contexts/TokenContext";
import WelcomeModal from "../components/WelcomeModal";
import ReCaptchaComponent from "../components/ReCaptchaComponent";

function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { changeToken } = useContext(TokenContext);

  const handleMouseClickedRegister = () => {
    window.location.href = "http://localhost:3000/kayit-ol";
  };

  const handleLogin = () => {
    console.log("Giriş işlemi");
    fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Login request failed"); // Handle errors here
        }
        return response.json();
      })
      .then((data) => {
        changeToken(data.accessToken);
        console.log(data.accessToken);
      })
      .catch((error) => {
        console.error("Login error:", error); // Handle errors
      });
  };

  return (
    <div>
      <div>
        <h2>Giriş Yapın</h2>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Kullanıcı Adı:
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
              Parola:
            </span>
          </div>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <div>
          <ReCaptchaComponent></ReCaptchaComponent>
        </div>

        <button className="btn btn-primary" type="submit" onClick={handleLogin}>
          <WelcomeModal userName={userName}></WelcomeModal>
        </button>
        <Link onClick={handleMouseClickedRegister}>Kayit Ol</Link>
      </div>
    </div>
  );
}

export default Login;

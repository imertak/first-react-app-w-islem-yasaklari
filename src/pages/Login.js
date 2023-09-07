import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { TokenContext } from "../contexts/TokenContext";
import WelcomeModal from "../components/WelcomeModal";
import ReCaptchaComponent from "../components/ReCaptchaComponent";
import "./Login.css";

function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {
    token,
    changeToken,
    assessmentResult,
    changeIsVerifyLogin,
    changeRefreshToken,
  } = useContext(TokenContext);

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
          throw new Error("Login request failed");
        }
        return response.json();
      })
      .then((data) => {
        changeToken(data.accessToken);
        changeRefreshToken(data.refreshToken);
        changeIsVerifyLogin(true);
        localStorage.setItem("userName", `${userName}`);
      })
      .catch((error) => {
        console.error("Login error:", error); // Handle errors
      });
    console.log(token);
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://mccourt.georgetown.edu/wp-content/uploads/2021/03/data-2000x1125.jpg')",
      }}
    >
      <div className="body">
        <h2>GİRİŞ YAP</h2>
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
        <button
          disabled={!assessmentResult}
          className="btn btn-primary"
          type="submit"
          onClick={handleLogin}
        >
          <WelcomeModal></WelcomeModal>
        </button>
        <p style={{ color: "white" }}>
          Henüz hesabın yok mu? <Link to={"/kayit-ol"}>Hesap aç</Link>
        </p>
        <div className="socialMediaIcons">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-google"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
  );
}

export default Login;

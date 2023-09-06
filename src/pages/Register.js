import React, { useContext, useState } from "react";
import ReCaptchaComponent from "../components/ReCaptchaComponent";
import { TokenContext } from "../contexts/TokenContext";
import RegisterWelcomeModal from "../components/RegisterWelcomeModal";

function Register() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {
    changeToken,
    assessmentResult,
    changeIsVerifyLogin,
    changeRefreshToken,
  } = useContext(TokenContext);

  const handleRegister = () => {
    console.log("kayıt işlemi");
    fetch("http://localhost:8080/api/auth/register", {
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
        changeRefreshToken(data.refreshToken);
        console.log(data.refreshToken);
        console.log(data.accessToken);
        changeIsVerifyLogin(true);
      })
      .catch((error) => {
        console.error("Login error:", error); // Handle errors
      });
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://mccourt.georgetown.edu/wp-content/uploads/2021/03/data-2000x1125.jpg')",
      }}
    >
      <div className="body">
        <h2>KAYIT OL</h2>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Kullanıcı Adı:
            </span>
          </div>
          <input
            type="text"
            className="form-control"
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
          onClick={handleRegister}
        >
          <RegisterWelcomeModal userName={userName}></RegisterWelcomeModal>
        </button>
      </div>
    </div>
  );
}

export default Register;

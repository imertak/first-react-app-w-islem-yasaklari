import React, { useState } from "react";

function Register() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    console.log("Kayıt işlemi ");
    let response = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
      }),
    });

    console.log(response);
  };

  return (
    <div>
      <div className="register-input">
        <h2>Kayıt Olun</h2>
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Kayıt Ol</button>
      </div>
    </div>
  );
}

export default Register;

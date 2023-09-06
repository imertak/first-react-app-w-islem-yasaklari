import React, { useContext, useState } from "react";
import "../App.css";
import { TokenContext } from "../contexts/TokenContext";
import LoginAlert from "../components/LoginAlert";

function Add() {
  const [unvan, setUnvan] = useState("");
  const [mkkSicilNo, setMkkSicilNo] = useState("");
  const [kurulKararNo, setKurulKararNo] = useState("");
  const [kurulKararTarihi, setKurulKararTarihi] = useState("");
  const [pay, setPay] = useState("");
  const [payKodu, setPayKodu] = useState("");

  const { token, isVerifyLogin } = useContext(TokenContext);

  const handleAdding = async () => {
    console.log("Kayıt işlemi ");
    const response = await fetch("http://localhost:8080/api/add", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-type": "application/json",
      },

      body: JSON.stringify({
        unvan: unvan,
        mkkSicilNo: mkkSicilNo,
        kurulKararNo: kurulKararNo,
        kurulKararTarihi: kurulKararTarihi,
        pay: pay,
        payKodu: payKodu,
      }),
    });
    console.log(response);
  };

  return (
    <div>
      {isVerifyLogin ? (
        <div>
          <h2>İŞLEM YASAĞI EKLE</h2>
          <input
            type="text"
            className="form-control"
            aria-describedby="basic-addon1"
            placeholder="Username"
          ></input>
          <input
            type="text"
            placeholder="Unvan"
            value={unvan}
            onChange={(e) => setUnvan(e.target.value)}
          />
          <input
            type="text"
            placeholder="Mkk Sicil No"
            value={mkkSicilNo}
            onChange={(e) => setMkkSicilNo(e.target.value)}
          />
          <input
            type="text"
            placeholder="Kurul Karar No"
            value={kurulKararNo}
            onChange={(e) => setKurulKararNo(e.target.value)}
          />
          <input
            type="text"
            placeholder="Kurul Karar Tarihi"
            value={kurulKararTarihi}
            onChange={(e) => setKurulKararTarihi(e.target.value)}
          />
          <input
            type="text"
            placeholder="Pay"
            value={pay}
            onChange={(e) => setPay(e.target.value)}
          />
          <input
            type="text"
            placeholder="Pay Kodu"
            value={payKodu}
            onChange={(e) => setPayKodu(e.target.value)}
          />

          <button onClick={handleAdding}>Kaydet</button>
        </div>
      ) : (
        <LoginAlert value={"Ekleme"}></LoginAlert>
      )}
    </div>
  );
}

export default Add;

import React, { useState } from "react";
import "../App.css";

function Add() {
  const [unvan, setUnvan] = useState("");
  const [mkkSicilNo, setMkkSicilNo] = useState("");
  const [kurulKararNo, setKurulKararNo] = useState("");
  const [kurulKararTarihi, setKurulKararTarihi] = useState("");
  const [pay, setPay] = useState("");
  const [payKodu, setPayKodu] = useState("");

  const handleAdding = async () => {
    console.log("Kayıt işlemi ");
    const response = await fetch("http://localhost:8080/api/add", {
      method: "POST",
      headers: {
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
      <div>
        <h2>İŞLEM YASAĞI EKLE</h2>
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
    </div>
  );
}

export default Add;

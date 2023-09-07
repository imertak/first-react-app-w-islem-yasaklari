import React, { useContext, useState } from "react";
import "../App.css";
import { TokenContext } from "../contexts/TokenContext";
import LoginAlert from "../components/LoginAlert";
import AddModal from "../components/AddModal";

function Add() {
  const [user, setuser] = useState([]);
  //const [unvan, setUnvan] = useState("");
  //const [mkkSicilNo, setMkkSicilNo] = useState("");
  //const [kurulKararNo, setKurulKararNo] = useState("");
  //const [kurulKararTarihi, setKurulKararTarihi] = useState("");
  //const [pay, setPay] = useState("");
  //const [payKodu, setPayKodu] = useState("");

  const { isVerifyLogin } = useContext(TokenContext);

  return (
    <div>
      {isVerifyLogin ? (
        <div
          className="add-container"
          style={{
            marginTop: "25px",
            marginBottom: "25px",
            width: "33%",
            marginLeft: "33%",
            padding: "25px",
            border: "dashed",
          }}
        >
          <h4 style={{ width: "50%", marginLeft: "25%" }}>İŞLEM YASAĞI EKLE</h4>
          <input
            type="text"
            className="form-control"
            aria-describedby="basic-addon1"
            placeholder="Unvan"
            onChange={(e) => setuser({ ...user, unvan: e.target.value })}
          ></input>
          <input
            type="text"
            className="form-control"
            aria-describedby="basic-addon1"
            placeholder="Mkk Sicil No"
            onChange={(e) => setuser({ ...user, mkkSicilNo: e.target.value })}
          ></input>
          <input
            type="text"
            className="form-control"
            aria-describedby="basic-addon1"
            placeholder="Kurul Karar No"
            onChange={(e) => setuser({ ...user, kurulKararNo: e.target.value })}
          ></input>
          <input
            type="text"
            className="form-control"
            aria-describedby="basic-addon1"
            placeholder="Kurul Karar Tarihi"
            onChange={(e) =>
              setuser({
                ...user,
                kurulKararTarihi: e.target.value,
              })
            }
          />
          <input
            type="text"
            className="form-control"
            aria-describedby="basic-addon1"
            placeholder="Pay"
            onChange={(e) => setuser({ ...user, pay: e.target.value })}
          ></input>
          <input
            type="text"
            className="form-control"
            aria-describedby="basic-addon1"
            placeholder="Pay Kodu"
            onChange={(e) => setuser({ ...user, payKodu: e.target.value })}
          ></input>

          <AddModal user={user}></AddModal>
        </div>
      ) : (
        <LoginAlert value={"Ekleme"}></LoginAlert>
      )}
    </div>
  );
}

export default Add;

import { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { TokenContext } from "../contexts/TokenContext";
import { Link } from "react-router-dom";

function AddModal({ user }) {
  const [show, setShow] = useState(false);
  const { token } = useContext(TokenContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClickedAdd = async () => {
    console.log("Kayıt işlemi ");
    const response = await fetch("http://localhost:8080/api/add", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        Accept: "application/json",
        "Content-type": "application/json",
      },

      body: JSON.stringify({
        unvan: user.unvan,
        mkkSicilNo: user.mkkSicilNo,
        kurulKararNo: user.kurulKararNo,
        kurulKararTarihi: user.kurulKararTarihi,
        pay: user.pay,
        payKodu: user.payKodu,
      }),
    });
    console.log(response);
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ marginLeft: "25%", width: "50%" }}
      >
        Kaydet
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>İşlem Yasağı Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>Unvan: {user.unvan}</li>
            <li>Mkk Sicil No: {user.mkkSicilNo}</li>
            <li>Kurul Karar No: {user.kurulKararNo}</li>
            <li>Kurul Karar Tarihi: {user.kurulKararTarihi}</li>
            <li>Pay: {user.pay}</li>
            <li>Pay Kodu: {user.payKodu}</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            İptal
          </Button>
          <Link to={"/sorgula"}>
            <Button variant="primary" onClick={handleClickedAdd}>
              Kaydet
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;

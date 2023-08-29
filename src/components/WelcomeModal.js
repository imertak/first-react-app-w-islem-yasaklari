import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function WelcomeModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClickedSave = async () => {};

  return (
    <>
      <Button onClick={handleShow}>Giriş Yap</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hoşgeldin {props.userName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Sorgulama Ekranına Gitmek İster Misiniz?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            İptal
          </Button>
          <Button variant="primary" onClick={() => handleClickedSave()}>
            <Link to={"/sorgula"}>Git</Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WelcomeModal;

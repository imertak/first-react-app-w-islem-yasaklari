import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { TokenContext } from "../contexts/TokenContext";

function WelcomeModal() {
  const [show, setShow] = useState(false);
  const { isVerifyLogin } = useContext(TokenContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClickedSave = async () => {};

  return (
    <>
      <Button onClick={handleShow}>Giriş Yap</Button>
      {isVerifyLogin ? (
        <Modal show={show}>
          <Modal.Header closeButton>
            <Modal.Title>
              Hoşgeldin {localStorage.getItem("userName").toUpperCase()}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>Sorgulama Ekranına Gitmek İster Misiniz?</Modal.Body>
          <Modal.Footer>
            <Link to={"/profil"}>
              <Button variant="secondary" onClick={handleClose}>
                İptal
              </Button>
            </Link>

            <Link
              to={"/sorgula"}
              style={{ color: "white", textDecoration: "none" }}
            >
              <Button variant="primary" onClick={() => handleClickedSave()}>
                Git
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>
      ) : (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Kullanıcı Adı veya Şifre Yanlış!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Lütfen Tekrar Deneyiniz...</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Kapat
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default WelcomeModal;

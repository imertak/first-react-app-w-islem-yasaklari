import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import useIslemYasaklariStore from "../states/IslemYasaklariStore";

function RegisterWelcomeModal(props) {
  const [show, setShow] = useState(false);
  const store = useIslemYasaklariStore();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClickedSave = async () => {};

  return (
    <>
      <Button onClick={handleShow}>Kayıt Ol</Button>
      {store.isVerifyLogin ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.userName} Kaydınız Oluşturuldu</Modal.Title>
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
            <Modal.Title>
              Kullanıcı Adı veya Şifre Bilgisinde Hata Var!
            </Modal.Title>
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

export default RegisterWelcomeModal;

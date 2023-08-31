import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { TokenContext } from "../contexts/TokenContext";

function DeleteModal(props) {
  const [show, setShow] = useState(false);
  const { fetchData } = useContext(TokenContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClickedSave = async (user) => {
    fetchData();
    try {
      const url = `http://localhost:8080/api/delete/${user.unvan}`;
      const response = await fetch(url, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Bir hata oluştu.");
      }

      console.log(response);
    } catch (error) {
      console.error("İsteğin gönderilmesi sırasında hata oluştu:", error);
    }
    handleClose();
  };

  return (
    <>
      <Button className="trash-icon" variant="danger" onClick={handleShow}>
        <i class="fa-solid fa-trash"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.unvan} Kişisini Silmek İstediğinize Emin Misiniz?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            İptal
          </Button>
          <Button
            variant="primary"
            onClick={() => handleClickedSave(props.user)}
          >
            Sil
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;

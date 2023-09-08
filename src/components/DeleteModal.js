import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useIslemYasaklariStore from "../states/IslemYasaklariStore";

function DeleteModal(props) {
  const [show, setShow] = useState(false);
  const store = useIslemYasaklariStore();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClickedDelete = async (user) => {
    try {
      const url = `http://localhost:8080/api/delete/${user.unvan}`;
      const response = await fetch(url, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Bir hata oluştu.");
      }

      console.log(response);
      store.fetchData();
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
          {props.user.unvan} Kişisini Silmek İstediğinize Emin Misiniz?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            İptal
          </Button>
          <Button
            variant="primary"
            onClick={() => handleClickedDelete(props.user)}
          >
            Sil
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;

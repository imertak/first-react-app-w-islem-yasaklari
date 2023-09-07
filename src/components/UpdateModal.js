import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { TokenContext } from "../contexts/TokenContext";

function UpdateModal(props) {
  const [show, setShow] = useState(false);
  const [newUnvan, setNewUnvan] = useState("");
  const { fetchData } = useContext(TokenContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClickedUpdateSave = async (newUnvan, user) => {
    handleClose();
    try {
      const response = await fetch(
        `http://localhost:8080/api/update/${user.unvan}`,
        {
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          method: "PUT",

          body: JSON.stringify({
            unvan: newUnvan,
            mkkSicilNo: user.mkkSicilNo,
            kurulKararNo: user.kurulKararNo,
            kurulKararTarihi: user.kurulKararTarihi,
            pay: user.pay,
            payKodu: user.payKodu,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Bir hata oluştu.");
      }
      fetchData();
      const responseData = await response.text();
      console.log(responseData);
    } catch (error) {
      console.error("İsteğin gönderilmesi sırasında hata oluştu:", error);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <i class="fa-solid fa-pen"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {props.user.unvan} Kişisinin Bilgilerini Değiştirmek İstiyorsunuz
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Yeni Bilgileri Giriniz</Form.Label>
              <Form.Control
                type="text"
                placeholder="Unvan"
                autoFocus
                value={newUnvan}
                onChange={(e) => setNewUnvan(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            İptal
          </Button>
          <Button
            variant="primary"
            onClick={() => handleClickedUpdateSave(newUnvan, props.user)}
          >
            Değişiklikleri Kaydet
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateModal;

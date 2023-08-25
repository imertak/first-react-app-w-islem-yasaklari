import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function UpdateModal(props) {
  const [show, setShow] = useState(false);
  const [newUnvan, setNewUnvan] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleClickedUpdateSave = async (newUnvan, unvan) => {

    try {
        const response = await fetch(`http://localhost:8080/update/${unvan}/${newUnvan}`,{ method:"PUT" });
        if (!response.ok) {
            throw new Error("Bir hata oluştu.");
        }
        const responseData = await response.text(); // Sunucudan dönen yanıt metni alınıyor
        console.log(responseData); // Sunucudan gelen yanıt konsola yazdırılıyor
    } catch (error) {
        console.error("İsteğin gönderilmesi sırasında hata oluştu:", error);
    }
    
    
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.unvan} Kişisinin Unvanını Değiştirmek İstiyorsunuz</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Yeni Unvanı Giriniz</Form.Label>
              <Form.Control
                type="text"
                placeholder="Yeni Unvan"
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
          <Button variant="primary" onClick={() => handleClickedUpdateSave(newUnvan,props.unvan)}>
            Değişiklikleri Kaydet
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateModal;
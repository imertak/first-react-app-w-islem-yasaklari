import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function UpdateModal(props) {
  const [show, setShow] = useState(false);
  const [newUnvan, setNewUnvan] = useState("")
  const [newMkkSicilNo, setNewMkkSicilNo] = useState("")
  const [newKurulKararNo, setNewKurulKararNo] = useState("")
  const [newKurulKararTarihi, setNewKurulKararTarihi] = useState("")
  const [newPayKodu, setNewPayKodu] = useState("")
  const [newPay, setNewPay] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleClickedUpdateSave = async (newUnvan,newKurulKararNo,newKurulKararTarihi,newMkkSicilNo,newPay,newPayKodu, unvan) => {

    try {
        const response = await fetch(`http://localhost:8080/update/${unvan}`, {
          
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },

    
          body: JSON.stringify({
            unvan: newUnvan,
            mkkSicilNo: newMkkSicilNo,
            kurulKararNo: newKurulKararNo,
            kurulKararTarihi: newKurulKararTarihi,
            pay: newPay,
            payKodu: newPayKodu,
          }),
        });
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
        <i class="fa-solid fa-pen"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.unvan} Kişisinin Bilgilerini Değiştirmek İstiyorsunuz</Modal.Title>
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

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">  
              <Form.Control
                type="text"
                placeholder="MKK Sicil No"
                autoFocus
                value={newMkkSicilNo}
                onChange={(e) => setNewMkkSicilNo(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"></Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              
              <Form.Control
                type="text"
                placeholder="Kurul Karar No"
                autoFocus
                value={newKurulKararNo}
                onChange={(e) => setNewKurulKararNo(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              
              <Form.Control
                type="text"
                placeholder="Kurul Karar Tarihi"
                autoFocus
                value={newKurulKararTarihi}
                onChange={(e) => setNewKurulKararTarihi(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              
              <Form.Control
                type="text"
                placeholder="Pay"
                autoFocus
                value={newPay}
                onChange={(e) => setNewPay(e.target.value)}
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Pay Kodu"
                autoFocus
                value={newPayKodu}
                onChange={(e) => setNewPayKodu(e.target.value)}
              />
            </Form.Group>
            
           
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            İptal
          </Button>
          <Button variant="primary" onClick={() => handleClickedUpdateSave(newUnvan,newKurulKararNo,newKurulKararTarihi,newMkkSicilNo,newPay,newPayKodu,props.unvan)}>
            Değişiklikleri Kaydet
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateModal;
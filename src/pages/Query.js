import React, { useState, useEffect } from "react"; // useState ve useEffect'ü içe aktar
import "../App.css";
import DeleteModal from "../components/DeleteModal";
import UpdateModal from "../components/UpdateModal";
import {useToken } from "../contexts/TokenContext";


function Query() {
  const [users, setUsers] = useState([]);
  const {token} = useToken();


  useEffect(() => {
    const fetchData = async () => {
  
      console.log(token);

      try {
        const response = await fetch("http://localhost:8080/api/get-db", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); 
  }, []); // Boş bağımlılık dizisi, sadece bir kez çağrılmasını sağlar

  return (
    <div className="IslemYasaklari">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Unvan</th>
            <th scope="col">MKK Sicil No</th>
            <th scope="col">Kurul Karar Tarihi</th>
            <th scope="col">Kurul Karar No</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <th scope="row">{user.unvan}</th>
              <td>{user.mkkSicilNo}</td>
              <td>{user.kurulKararTarihi}</td>
              <td>{user.kurulKararNo}</td>
              <td>
                <DeleteModal unvan={user.unvan}></DeleteModal>
              </td>
              <td>
                <UpdateModal unvan={user.unvan}></UpdateModal>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Query;
//<Persons
//  unvan={user.unvan}
//  mkkSicilNo={user.mkkSicilNo}
//  kurulKararTarihi={user.kurulKararTarihi}
//  kurulKararNo={user.kurulKararNo}
//  payKodu={user.payKodu}
//  pay={user.pay}
///>;

//try {
//  const response = await fetch(`http://localhost:8080/api/update/${unvan}`, {
//      method: "PUT", // HTTP PUT metodu kullanılıyor
//      headers: {
//          "Content-Type": "application/json"
//      },
//      body: JSON.stringify({ newUnvan, unvan }) // Gövdeye JSON verileri ekleniyor
//  });
//
//  if (!response.ok) {
//      throw new Error("Bir hata oluştu.");
//  }
//
//  console.log(response);
//  // Gerekirse sayfayı yeniden yükleme veya başka işlemler yapılabilir
//} catch (error) {
//  console.error("İsteğin gönderilmesi sırasında hata oluştu:", error);
//}

/*<button onClick={() => handleUpdateClicked(user.unvan)} type="button" className="btn btn-primary" title="Düzenle">
                    <i className="fa-solid fa-pen"></i>
                  </button>*/

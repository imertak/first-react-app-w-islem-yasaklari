import React, { useContext, useEffect } from "react";
import "../App.css";
import DeleteModal from "../components/DeleteModal";
import UpdateModal from "../components/UpdateModal";
import { TokenContext } from "../contexts/TokenContext";
import LoginAlert from "../components/LoginAlert";

function Query() {
  const { isVerifyLogin, users, fetchData } = useContext(TokenContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {isVerifyLogin ? (
        <div className="IslemYasaklari">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Unvan</th>
                <th scope="col">MKK Sicil No</th>
                <th scope="col">Kurul Karar Tarihi</th>
                <th scope="col">Kurul Karar No</th>
                <th scope="col">Pay</th>
                <th scope="col">Pay Kodu</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={i}>
                  <th scope="row">{user.unvan}</th>
                  <td>{user.mkkSicilNo}</td>
                  <td>{user.kurulKararTarihi}</td>
                  <td>{user.kurulKararNo}</td>
                  <td>{user.pay}</td>
                  <td>{user.payKodu}</td>
                  <td>
                    <DeleteModal user={user}></DeleteModal>
                  </td>
                  <td>
                    <UpdateModal user={user}></UpdateModal>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <LoginAlert value={"Sorgulama"}></LoginAlert>
      )}
    </div>
  );
}

export default Query;

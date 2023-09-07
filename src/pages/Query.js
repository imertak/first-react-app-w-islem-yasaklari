import React, { useContext, useEffect, useRef } from "react";
import "../App.css";
import DeleteModal from "../components/DeleteModal";
import UpdateModal from "../components/UpdateModal";
import { TokenContext } from "../contexts/TokenContext";
import LoginAlert from "../components/LoginAlert";

function Query() {
  const { isVerifyLogin, users, fetchData } = useContext(TokenContext);
  const bottomEl = useRef(null);

  const scrollToBottom = () => {
    bottomEl.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {isVerifyLogin ? (
        <div className="IslemYasaklari">
          <div
            className="scroll-down"
            style={{
              zIndex: "100",
              position: "fixed",
              bottom: "20px",
              right: "20px",
            }}
          >
            <i
              className="fa-solid fa-circle-down "
              style={{
                fontSize: "50px",
                cursor: "pointer",
              }}
              onClick={scrollToBottom}
            ></i>
          </div>

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
          <div ref={bottomEl}></div>
        </div>
      ) : (
        <LoginAlert value={"Sorgulama"}></LoginAlert>
      )}
    </div>
  );
}

export default Query;

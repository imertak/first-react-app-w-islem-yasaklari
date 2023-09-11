import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import DeleteModal from "../components/DeleteModal";
import UpdateModal from "../components/UpdateModal";

import LoginAlert from "../components/LoginAlert";
import useIslemYasaklariStore from "../states/IslemYasaklariStore";
import CustomPagination from "../components/CustomPagination";

function Query() {
  const bottomEl = useRef(null);

  //const users = useIslemYasaklariStore((state) => state.users);
  //const fetchData = useIslemYasaklariStore((state) => state.fetchData);
  //const isVerifyLogin = useIslemYasaklariStore((state) =>  state.isVerifyLogin);
  const store = useIslemYasaklariStore();

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  let last = currentPage * usersPerPage;
  let first = last - usersPerPage;

  const scrollToBottom = () => {
    bottomEl.current.scrollIntoView({ behavior: "smooth" });
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    store.fetchData();
  }, []);

  return (
    <div>
      {store.isVerifyLogin ? (
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
              {store.users.slice(first, last).map((user, i) => (
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
          <CustomPagination
            usersPerPage={usersPerPage}
            totalUsers={store.users.length}
            paginate={paginate}
          ></CustomPagination>
        </div>
      ) : (
        <LoginAlert value={"Sorgulama"}></LoginAlert>
      )}
    </div>
  );
}

export default Query;

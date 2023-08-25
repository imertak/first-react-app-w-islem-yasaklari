import React, { useState } from "react";
import "../App.css";

function Navbar() {
  const [isVisibleDropDown, setIsVisibleDropDown] = useState(false);

  const handleMouseClickedQueryButton = () => {
    window.location.href = "http://localhost:3000/sorgula";
  };

  const handleMouseClickedAddButton = () => {
    window.location.href = "http://localhost:3000/ekle";
  };

  const handleMouseClickedLogo = () => {
    window.location.href = "http://localhost:3000/";
  };

  const handleMouseClickedProfileIcon = () => {
    setIsVisibleDropDown(!isVisibleDropDown);
    window.location.href = "http://localhost:3000/giris";
  };

  return (
    <div>
      <div className="navBar">
        <div className="header">
          <img
            className="headerLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/MKK_logo.jpg"
            width={100}
            alt="MKK Logo"
            onClick={() => handleMouseClickedLogo()}
          ></img>
          <h2 className="headerName">İŞLEM YASAKLARI</h2>
        </div>

        <div className="buttonContainer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => handleMouseClickedQueryButton()}
          >
            SORGULA
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => handleMouseClickedAddButton()}
          >
            EKLE
          </button>

          <div className="dropdown" onClick={handleMouseClickedProfileIcon}>
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Profil
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Giriş Yap
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Kayıt Ol
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profil Bilgileri
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

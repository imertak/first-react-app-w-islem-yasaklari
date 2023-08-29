import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isVisibleDropDown, setIsVisibleDropDown] = useState(false);

  return (
    <div>
      <div className="navBar">
        <div className="header">
          <img
            className="headerLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/MKK_logo.jpg"
            width={100}
            alt="MKK Logo"
          ></img>
          <h2 className="headerName">
            <Link to={"/"}>
              <span className="logo-text">İŞLEM YASAKLARI</span>
            </Link>
          </h2>
        </div>

        <div className="buttonContainer">
          <button type="button" className="btn btn-secondary">
            <Link to={"/sorgula"}>
              <span className="query-link">SORGULA</span>
            </Link>
          </button>

          <button type="button" className="btn btn-secondary">
            <Link to={"/ekle"}>
              <span className="add-link">EKLE</span>
            </Link>
          </button>

          <button type="button" className="btn btn-secondary">
            <Link to={"/giris"}>
              <span className="profile-link">PROFİL</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

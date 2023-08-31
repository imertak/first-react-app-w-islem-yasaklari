import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navBar">
        <div className="header">
          <Link to={"/"}>
            <img
              className="headerLogo"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/MKK_logo.jpg"
              width={100}
              alt="MKK Logo"
            ></img>
          </Link>

          <h2 className="headerName">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <span className="logo-text">İŞLEM YASAKLARI</span>
            </Link>
          </h2>
        </div>

        <div className="buttonContainer">
          <button type="button" className="btn btn-secondary">
            <Link to={"/sorgula"} style={{ textDecoration: "none" }}>
              <span className="query-link">SORGULA</span>
            </Link>
          </button>

          <button type="button" className="btn btn-secondary">
            <Link to={"/ekle"} style={{ textDecoration: "none" }}>
              <span className="add-link">EKLE</span>
            </Link>
          </button>

          <button type="button" className="btn btn-secondary">
            <Link to={"/giris"} style={{ textDecoration: "none" }}>
              <span className="profile-link">PROFİL</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

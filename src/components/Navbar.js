import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ProfileDropDownButton from "./ProfileDropDownButton";
import useIslemYasaklariStore from "../states/IslemYasaklariStore";

function Navbar() {
  const store = useIslemYasaklariStore();

  return (
    <div>
      <div className="navBar">
        <Link to={"/"}>
          <img
            className="headerLogo"
            src="https://www.mkk.com.tr/themes/custom/mkk/logo.png"
            alt="MKK Logo"
            style={{ width: "200px" }}
          ></img>
        </Link>

        <h2 className="headerName">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <span
              className="logo-text"
              style={{
                color: "black",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "'Black Ops One'",
              }}
            >
              İŞLEM YASAKLARI
            </span>
          </Link>
        </h2>

        <div className="buttonContainer">
          <Link to={"/sorgula"} style={{ textDecoration: "none" }}>
            <button type="button" className="btn btn-dark btn-rounded">
              <span className="query-link">
                <i class="fa-solid fa-magnifying-glass"></i> SORGULA
              </span>
            </button>
          </Link>

          <Link to={"/ekle"} style={{ textDecoration: "none" }}>
            <button type="button" className="btn btn-dark btn-rounded">
              <span className="add-link">
                <i class="fa-solid fa-plus"></i> EKLE
              </span>
            </button>
          </Link>
          {store.isVerifyLogin ? (
            <ProfileDropDownButton></ProfileDropDownButton>
          ) : (
            <Link
              to={"/giris"}
              className="giris-button"
              style={{ textDecoration: "none" }}
            >
              <button type="button" className="btn btn-dark btn-rounded">
                <span className="profile-link">
                  <i class="fa-solid fa-right-to-bracket"></i> GİRİŞ YAP
                </span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

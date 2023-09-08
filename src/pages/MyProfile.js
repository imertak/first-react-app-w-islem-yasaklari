import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import useIslemYasaklariStore from "../states/IslemYasaklariStore";

function MyProfile(props) {
  const [setRole] = useState("");
  const store = useIslemYasaklariStore();

  useEffect(() => {
    const fetchUserData = async (name) => {
      console.log(props.name);
      try {
        const response = await fetch(`http://localhost:8080/user/get/${name}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setRole(response.roleName);
      } catch (ex) {
        console.error(ex);
      }
    };

    console.log(props.name);
    fetchUserData(props.name);
  }, []);

  if (store.isVerifyLogin) {
    return (
      <div
        className="profile-container"
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          padding: "10px",
          display: "flex",
          gap: "40px",
          border: "solid",
          borderRadius: "10px",
        }}
      >
        <div className="profile-image">
          <img
            style={{ borderRadius: "50%" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3wepFpVrpdhMasGyQqvn_316A7SzgRe-MEyWICNz32ox1MYZvEABRPuFXxDV49fvSAe8&usqp=CAU"
          ></img>
        </div>
        <div
          className="profile-info"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h3>{localStorage.getItem("userName").toUpperCase()}</h3>
          <a href="#!">
            <i class="far fa-envelope display-25 me-3 text-secondary"></i>
            {localStorage.getItem("userName").toLowerCase()}@gmail.com
          </a>
          <a href="#!">
            <i class="fas fa-mobile-alt display-25 me-3 text-secondary"></i>
            +012 (345) 6789
          </a>
          <a href="#!">
            <i class="fas fa-map-marker-alt display-25 me-3 text-secondary"></i>
            Sarıyer, İstanbul
          </a>
        </div>
      </div>
    );
  } else {
    window.location.href = "/giris";
  }
}

export default MyProfile;

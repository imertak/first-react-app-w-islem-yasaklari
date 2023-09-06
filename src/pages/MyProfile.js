import React, { useContext, useEffect, useState } from "react";
import { TokenContext } from "../contexts/TokenContext";
import "../App.css";

function MyProfile(props) {
  const [role, setRole] = useState("");
  const { token, isVerifyLogin } = useContext(TokenContext);

  useEffect(() => {
    const fetchUserData = async (name) => {
      console.log(props.name);
      try {
        const response = await fetch(`http://localhost:8080/user/get/${name}`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });
        setRole(response.roleName);
      } catch (ex) {
        console.error(ex);
      }
    };

    console.log(props.name);
    fetchUserData(props.name);
  }, []);

  if (isVerifyLogin) {
    return (
      <div class="profile-container col-lg-4 mb-5 mb-lg-0 wow fadeIn">
        <div class="card border-0 shadow">
          <img
            className="profile-image"
            src="https://www.bootdey.com/img/Content/avatar/avatar6.png"
            alt="..."
          ></img>
          <div class="card-body p-1-9 p-xl-5">
            <div class="mb-4">
              <h3 class="h4 mb-0">İsmail Mert</h3>
            </div>
            <ul class="list-unstyled mb-4">
              <li class="mb-3">
                <a href="#!">
                  <i class="far fa-envelope display-25 me-3 text-secondary"></i>
                  mert@gmail.com
                </a>
              </li>
              <li class="mb-3">
                <a href="#!">
                  <i class="fas fa-mobile-alt display-25 me-3 text-secondary"></i>
                  +012 (345) 6789
                </a>
              </li>
              <li>
                <a href="#!">
                  <i class="fas fa-map-marker-alt display-25 me-3 text-secondary"></i>
                  205 Main Street, USA
                </a>
              </li>
            </ul>
            <ul class="social-icon-style2 ps-0">
              <li>
                <a href="#!" class="rounded-3">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#!" class="rounded-3">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#!" class="rounded-3">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#!" class="rounded-3">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    window.location.href = "/giris";
  }
}

export default MyProfile;

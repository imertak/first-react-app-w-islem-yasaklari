import { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";
import { TokenContext } from "../contexts/TokenContext";

function ProfileDropDownButton() {
  const {
    changeIsVerifyLogin,
    changeToken,
    changeRefreshToken,
    changeAssestmentResult,
  } = useContext(TokenContext);
  const handleLogOutClicked = () => {
    changeIsVerifyLogin(false);
    changeRefreshToken("");
    changeToken("");
    changeAssestmentResult(false);
  };
  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="isim gelecek buraya"
      variant="dark"
    >
      <Dropdown.Item>
        <Link
          to={"/profil"}
          className="giris-button"
          style={{ textDecoration: "none", color: "black" }}
        >
          <i class="fa-solid fa-user"></i> Profilim
        </Link>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handleLogOutClicked()}>
        <Link to={"/giris"} style={{ textDecoration: "none", color: "black" }}>
          <i class="fa-solid fa-right-from-bracket"></i> Çıkış Yap
        </Link>
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default ProfileDropDownButton;

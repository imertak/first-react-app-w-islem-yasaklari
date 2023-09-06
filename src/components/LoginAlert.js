import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

function LoginAlert(props) {
  return (
    <div
      style={{
        margin: "10px 25%",
        width: "50%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Alert variant="danger">
        <Alert.Heading>
          {props.value} Ekranına Erişim Yetkiniz Yok!
        </Alert.Heading>
        <p>
          Maalesef giriş yapmak istediğiniz URL adresine erişim yetkiniz yok.
        </p>
        <hr />
        <p className="mb-0">
          Lütfen{" "}
          <Link to={"/kayit-ol"} style={{ color: "black" }}>
            kayıt olunuz
          </Link>
          . Eğer hazırda bir hesabınız varsa lütfen{" "}
          <Link to={"/giris"} style={{ color: "black" }}>
            giriş yapınız.
          </Link>
        </p>
      </Alert>
    </div>
  );
}

export default LoginAlert;

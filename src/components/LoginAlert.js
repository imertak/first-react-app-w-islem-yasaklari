import Alert from 'react-bootstrap/Alert';

function LoginAlert() {
  return (
    <Alert variant="success">
      <Alert.Heading>Erişim Yetkiniz Yok!</Alert.Heading>
      <p>
        Maalesef giriş yapmak istediğiniz URL adresine erişim yetkiniz yok. 
      </p>
      <hr />
      <p className="mb-0">
        Lütfen kayıt olunuz. Eğer hazırda bir hesabınız varsa lütfen giriş yapınız.
      </p>
    </Alert>
  );
}

export default LoginAlert;
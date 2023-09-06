import { useContext } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { TokenContext } from "../contexts/TokenContext";

function ReCaptchaComponent() {
  const SITE_KEY = "6Lc89uMnAAAAADF285zekEnkqPTamSXowCu0W6pZ";

  const { changeAssestmentResult } = useContext(TokenContext);

  const handleRecaptchaVerification = async (token) => {
    console.log(token);
    try {
      const response = await fetch("http://localhost:8080/api/google", {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          token: token,
        }),
      });

      const data = await response.json();

      changeAssestmentResult(true);
    } catch (error) {
      console.error("Hata:", error);
      changeAssestmentResult(false);
    }
  };

  return (
    <div>
      <ReCAPTCHA
        sitekey={SITE_KEY}
        onChange={handleRecaptchaVerification}
      ></ReCAPTCHA>
    </div>
  );
}

export default ReCaptchaComponent;

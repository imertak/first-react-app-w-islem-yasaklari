import { useContext, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { TokenContext } from "../contexts/TokenContext";

function ReCaptchaComponent() {
  const SITE_KEY = "6Lc89uMnAAAAADF285zekEnkqPTamSXowCu0W6pZ";
  const SECRET_KEY = "6Lc89uMnAAAAABlD3je21MenfK_a4KW82_Ah63vM";

  const { assessmentResult, changeAssestmentResult } = useContext(TokenContext);

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
          secretKey: SECRET_KEY,
          token: token,
        }),
      });

      const data = await response.json();
      console.log(data.success);
      changeAssestmentResult();
      console.log(assessmentResult);
    } catch (error) {
      console.error("Hata:", error);
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

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function ReCaptchaComponent() {
  const SITE_KEY = "6Lc89uMnAAAAADF285zekEnkqPTamSXowCu0W6pZ";
  const SECRET_KEY = "6Lc89uMnAAAAABlD3je21MenfK_a4KW82_Ah63vM";
  const [assessmentResult, setAssessmentResult] = useState("");

  const handleRecaptchaVerification = async (token) => {
    console.log(token);
    try {
      const response = await fetch("http://localhost:8080/api/verify-token", {
        method: "POST",
        body: JSON.stringify({
          secretKey: SECRET_KEY,
          token: token,
        }),
      });

      //const data = await response.json();
      if (response.success) {
        setAssessmentResult(true);
      }
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

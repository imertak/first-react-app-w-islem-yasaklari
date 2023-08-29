//import fetch from "node-fetch";
//
//const express = require("express");
//const cors = require("cors");
//const fetch = require("node-fetch"); // node-fetch kütüphanesini kullanacağız
//
//const app = express();
//const PORT = 3001; // Proxy sunucusu için kullanacağınız port
//
//app.use(cors()); // CORS hatasını çözmek için cors() fonksiyonunu kullanıyoruz
//app.use(express.json());
//
//app.post("/recaptcha", async (req, res) => {
//  const recaptchaUrl = "https://www.google.com/recaptcha/api/siteverify";
//  const responseToken = req.query.token;
//
//  const verifyUrl = `${recaptchaUrl}?secret=${SECRET_KEY}&response=${responseToken}`;
//
//  try {
//    const response = await fetch(verifyUrl, { method: "POST" });
//    const data = await response.json();
//    res.json(data);
//  } catch (error) {
//    console.error("ReCaptcha verification failed", error);
//    res.status(500).json({ error: "ReCaptcha verification failed" });
//  }
//});
//
//app.listen(PORT, () => {
//  console.log(`Proxy server is running on port ${PORT}`);
//});
//

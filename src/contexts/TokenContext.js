// TokenContext.js

import React, { createContext, useState } from "react";

const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isVerifyLogin, setIsVerifyLogin] = useState(false);
  console.log("token bu", token);
  const changeToken = (newToken) => {
    setToken(newToken);
  };

  const changeIsVerifyLogin = () => {
    setIsVerifyLogin(true);
  };

  return (
    <TokenContext.Provider
      value={{ token, changeToken, isVerifyLogin, changeIsVerifyLogin }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export { TokenContext, TokenProvider };

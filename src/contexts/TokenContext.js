// TokenContext.js

import React, { createContext, useState } from "react";

const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isVerifyLogin, setIsVerifyLogin] = useState(false);
  const [assessmentResult, setAssessmentResult] = useState(false);

  const changeToken = (newToken) => {
    setToken(newToken);
  };

  const changeIsVerifyLogin = () => {
    setIsVerifyLogin(true);
  };

  const changeAssestmentResult = () => {
    setAssessmentResult(true);
  };

  return (
    <TokenContext.Provider
      value={{
        token,
        changeToken,
        isVerifyLogin,
        changeIsVerifyLogin,
        assessmentResult,
        changeAssestmentResult,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export { TokenContext, TokenProvider };

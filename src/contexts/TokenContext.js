// TokenContext.js

import React, { createContext, useState } from "react";

const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [assessmentResult, setAssessmentResult] = useState(false);

  const changeAssestmentResult = (x) => {
    setAssessmentResult(x);
  };

  return (
    <TokenContext.Provider
      value={{
        assessmentResult,
        changeAssestmentResult,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export { TokenContext, TokenProvider };

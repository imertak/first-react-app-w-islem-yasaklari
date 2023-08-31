// TokenContext.js

import React, { createContext, useState } from "react";

const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isVerifyLogin, setIsVerifyLogin] = useState(false);
  const [assessmentResult, setAssessmentResult] = useState(false);
  const [users, setUsers] = useState([]);

  const changeToken = (newToken) => {
    setToken(newToken);
  };

  const changeIsVerifyLogin = () => {
    setIsVerifyLogin(true);
  };

  const changeAssestmentResult = () => {
    setAssessmentResult(true);
  };

  const fetchData = async () => {
    console.log(token);
    if (token) {
      changeIsVerifyLogin();
    }
    console.log(isVerifyLogin);
    try {
      const response = await fetch("http://localhost:8080/api/get-db", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
        users,
        fetchData,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export { TokenContext, TokenProvider };

// TokenContext.js

import React, { createContext, useEffect, useState } from "react";

const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [refresh, setRefreshToken] = useState(null);
  const [isVerifyLogin, setIsVerifyLogin] = useState(false);
  const [assessmentResult, setAssessmentResult] = useState(false);
  const [users, setUsers] = useState([]);

  const changeToken = (newToken) => {
    console.log("anlık token:", token);
    setToken(newToken);
    console.log("yeni token: ", newToken);
    console.log("son token:", token);
  };

  const changeRefreshToken = (newRefresh) => {
    setRefreshToken(newRefresh);
  };

  const changeIsVerifyLogin = (x) => {
    setIsVerifyLogin(x);
  };

  const changeAssestmentResult = (x) => {
    setAssessmentResult(x);
  };

  const fetchData = async () => {
    console.log(isVerifyLogin);
    console.log(token);
    try {
      const response = await fetch("http://localhost:8080/api/get-db", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        const response2 = await fetch(
          "http://localhost:8080/api/auth/refreshToken",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-type": "application/json",
            },

            body: JSON.stringify({
              refreshToken: refresh,
            }),
          }
        );

        if (response2.ok) {
          const data2 = await response2.json();
          changeToken(data2.accessToken);
          console.log(token);
          fetchData();
        } else {
          setIsVerifyLogin(false);
        }
      } else {
        setIsVerifyLogin(true);
        const data = await response.json();
        setUsers(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsVerifyLogin(false);
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
        refresh,
        changeRefreshToken,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export { TokenContext, TokenProvider };

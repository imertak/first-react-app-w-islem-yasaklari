import React, { createContext, useState } from "react";

const QueryContext = createContext();

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

const QueryProvider = ({ children }) => {
  return <QueryContext.Provider value={{}}>{children}</QueryContext.Provider>;
};

export { QueryContext, QueryProvider };

import React, { createContext, useContext, useState } from 'react';

const TokenContext = createContext();

export function TokenProvider({ children }) {
    const [token, setToken] = useState("");

    const changeToken = newToken => {
        setToken(newToken);
    };

    return (
        <TokenContext.Provider value={{ token, changeToken }}>
            {children}
        </TokenContext.Provider>
    )
}

export function useToken() {
    return useContext(TokenContext);
}
// import React, {createContext, useEffect, useState} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export const AuthContext = createContext({
//   token: '',
//   onLogout: () => {},
//   authenticate: () => {},
//   isAuthenticated: false,
// });

// export function AuthContextProvider({children}) {
//   const [authToken, setAuthToken] = useState();
//   async function handleTokenFromStorage() {
//     const tokenStored = awaitAsyncStorage.getItem('token');
//     if (tokenStored) {
//       setAuthToken(tokenStored);
//     }
//   }

//   useEffect(() => {
//     handleTokenFromStorage();
//   }, []);

//   async function logoutHandler() {
//     setAuthToken(null);
//     await AsyncStorage.removeItem('token');
//   }

//   async function authenticateHandler(token) {
//     setAuthToken(token);
//     await AsyncStorage.setItem('token', token);
//   }
//   const value = {
//     isAuthenticated: !!authToken,
//     token: authToken,
//     onLogout: logoutHandler,
//     authenticate: authenticateHandler,
//   };

//   return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
// }

// AuthContext.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useState,useEffect} from 'react';

// Create context
export const AuthContext = createContext({
  token: '',
  onLogout: () => {},
  authenticate: () => {},
  isAuthenticated: false,
});

// Define the AuthContextProvider
export function AuthContextProvider({children}) {
  const [authToken, setAuthToken] = useState(null);

  async function handleTokenFromStorage() {
    const tokenStored = await AsyncStorage.getItem('token');
    if (tokenStored) {
      setAuthToken(tokenStored);
    }
  }

  useEffect(() => {
    handleTokenFromStorage();
  }, []);

  // Define functions for login/logout, etc.
  async function logoutHandler() {
    setAuthToken(null);
    await AsyncStorage.removeItem('token');
  }

  async function authenticateHandler(token) {
    setAuthToken(token);
    await AsyncStorage.setItem('token', token);
  }
  const value = {
    isAuthenticated: !!authToken,
    token: authToken,
    onLogout: logoutHandler,
    authenticate: authenticateHandler,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

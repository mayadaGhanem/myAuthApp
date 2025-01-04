import axios from 'axios';
import {useContext} from 'react';
import {AuthContext} from '../store/auth-context';

const BASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:';
const BASE_URL_MESSAGE =
  'https://react-native-app-1075a-default-rtdb.firebaseio.com/message.json';
const API_KEY = 'AIzaSyAmlNhRs26lRhFPPZQFPux0-huI_a2qIgI';

export function handleAuth(mode, {email, password}) {
  if (mode === 'signup') {
    return axios.post(BASE_URL + `signUp?key=${API_KEY}`, {
      email,
      password,
    });
  } else {
    return axios.post(BASE_URL + `signInWithPassword?key=${API_KEY}`, {
      email,
      password,
    });
  }
}

export function getMessage(token) {
  return axios.get(BASE_URL_MESSAGE + `?auth=${token}`);
}
export function handleLogout() {
  const authCtx = useContext(AuthContext);

  authCtx.onLogout();

  return axios.post(BASE_URL + `signInWithCustomToken?key=${API_KEY}`);
}

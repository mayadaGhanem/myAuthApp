import axios from 'axios';

const BASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:';
const API_KEY = 'AIzaSyAmlNhRs26lRhFPPZQFPux0-huI_a2qIgI';
 
export function handleAuth(mode, {email, password}) {
  if (mode === 'signup') {
    return axios.post(BASE_URL + `signUp?key=${API_KEY}`, {email, password});
  } else {
    return axios.post(BASE_URL + `signInWithPassword?key=${API_KEY}`, {
      email,
      password,
    });
  }
}



export function handleLogout() {
  return axios.post(BASE_URL + `signInWithCustomToken?key=${API_KEY}`);
}

import React, {useState, useContext} from 'react';
import {View} from 'react-native';
import AuthContent from '../components/AuthContent';
import {handleAuth} from '../services/firebase';
import Error from '../components/Error';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { AuthContext } from '../store/auth-context';

export default function Login() {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);

  async function onAuthenticate(values) {
    setIsLoading(true);

    try {
      const res = await handleAuth('login', values);
      authCtx.authenticate(res.data.idToken);

      console.log({res});
    } catch (e) {
      setError(e.message);
      console.log({e});
      setIsLoading(false);
    }
  }
  function handleBack() {
    setError(null);
    authCtx.onLogout();
  }
  if (isLoading) {
    return <LoadingSpinner message="Sign In..." />;
  }
  if (error && !isLoading) {
    return <Error message={error} handleBack={handleBack} />;
  }
  return (
    <View>
      <AuthContent isLogin={true} onAuthenticate={onAuthenticate} />
    </View>
  );
}

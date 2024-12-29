import React, {useState} from 'react';
import {View} from 'react-native';
import AuthContent from '../components/AuthContent';
import {handleAuth} from '../services/firebase';
import Error from '../components/Error';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import {useNavigation} from '@react-navigation/native';

export default function Signup() {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  async function onAuthenticate(values) {
    setIsLoading(true);

    try {
      const res = await handleAuth('signup', values);
      console.log(res);
      navigation.navigate('hello');
    } catch (e) {
      setError(e.message);
      console.log(e);
    }
    setIsLoading(false);
  }
  function handleBack() {
    setError(null);
  }
  if (isLoading) {
    return <LoadingSpinner message="Signing up..." />;
  }
  if (error && !isLoading) {
    return <Error message={error} handleBack={handleBack} />;
  }
  return (
    <View>
      <AuthContent isLogin={false} onAuthenticate={onAuthenticate} />
    </View>
  );
}

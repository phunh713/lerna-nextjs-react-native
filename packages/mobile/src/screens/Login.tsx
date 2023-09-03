import {
  authenticationActions,
  baseClient,
  constants,
  setAccessToken,
  useAppDispatch,
  useAppSelector,
  utils,
} from 'common';
import React, {useCallback} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import {authorize} from 'react-native-app-auth';
import {config} from '../config/auth';

const Login = () => {
  const {user, accessToken, refreshToken} = useAppSelector(
    state => state.authentication,
  );
  const dispatch = useAppDispatch();
  const handleAuthorize = useCallback(async () => {
    try {
      const newAuthState = await authorize({
        ...config,
        connectionTimeoutSeconds: 5,
      });
      dispatch(setAccessToken(newAuthState.accessToken));
      dispatch(
        authenticationActions.setRefreshToken(newAuthState.refreshToken),
      );
    } catch (error: any) {
      Alert.alert('Failed to log in!', error.message);
    }
  }, [dispatch]);

  return (
    <View>
      <Button onPress={() => handleAuthorize()} title="Login" />
      <Button
        onPress={async () => {
          const newToken = await utils.token.refreshAccessToken({
            clientId: constants.azure.MOBILE_CLIENT_ID,
            isPublicApp: true,
            refreshToken: refreshToken ?? '',
          });
          console.log({newToken});
        }}
        title="Refresh"
      />
      <Button
        onPress={() =>
          baseClient
            .get('https://jsonplaceholder.typicode.com/todos')
            .then((res: any) => console.log(res.config))
        }
        title="Get Todos"
      />
      <View>
        <Text>
          {JSON.stringify({user, accessToken, refreshToken}, null, 2)}
        </Text>
      </View>
    </View>
  );
};

export default Login;

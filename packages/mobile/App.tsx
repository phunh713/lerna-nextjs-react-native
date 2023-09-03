import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {ReduxProvider, initHttpClient, store, utils} from 'common';
import Login from './src/screens/Login';
import {refreshTokenFn} from './src/utils/token';
const queryClient = new QueryClient();

initHttpClient(() => utils.token.getAccessToken(store, refreshTokenFn));

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider>
        <SafeAreaView>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Login />
          </ScrollView>
        </SafeAreaView>
      </ReduxProvider>
    </QueryClientProvider>
  );
}

export default App;

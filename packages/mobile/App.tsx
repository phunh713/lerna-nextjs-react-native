import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {ReduxProvider, initHttpClient, store, utils} from 'shared';
import Todo from './src/components/Todos';
const queryClient = new QueryClient();

initHttpClient(() => utils.token.getAccessToken(store, () => {}));

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider>
        <SafeAreaView>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Todo />
          </ScrollView>
        </SafeAreaView>
      </ReduxProvider>
    </QueryClientProvider>
  );
}

export default App;

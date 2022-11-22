import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootStack from 'src/stacks/RootStack';

const App = () => {
  return (
    <SafeAreaProvider>
      <RootStack />
    </SafeAreaProvider>
  );
};

export default App;

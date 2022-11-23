import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRoot} from 'global/Styles';
import RootStack from 'navigation/RootStack';

const App = () => {
  return (
    <GestureHandlerRoot>
      <SafeAreaProvider>
        <RootStack />
      </SafeAreaProvider>
    </GestureHandlerRoot>
  );
};

export default App;

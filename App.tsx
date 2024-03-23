import React from 'react';
import {SafeAreaView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Tile} from './src/components/Tile';

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView>
      <Tile />
    </SafeAreaView>
  </SafeAreaProvider>
);

export default App;

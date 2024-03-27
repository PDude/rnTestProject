import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Navigation} from '@/routes/navigation';
// import 'react-native-gesture-handler';

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.wrapper}>
      <Navigation />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#292929',
  },
});

export default App;

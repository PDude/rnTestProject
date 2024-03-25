import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Navigation} from '@/routes/navigation';

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
  },
});

export default App;

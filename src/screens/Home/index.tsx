import {TileList} from '@/components/TileList';
import {useStyles} from '@/screens/Home/style';
import React from 'react';
import {View} from 'react-native';

export const HomeScreen = () => {
  const styles = useStyles();

  return (
    <View style={styles.wrapper}>
      <TileList />
    </View>
  );
};

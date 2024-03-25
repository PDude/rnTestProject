import React, {memo} from 'react';
import {View} from 'react-native';
import {useStyles} from '@/components/TileList/style';

export const TileListSeparator = memo(() => {
  const styles = useStyles();
  return <View style={styles.separator} />;
});

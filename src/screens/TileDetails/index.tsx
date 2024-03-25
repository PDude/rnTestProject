import {Label} from '@/components/Label';
import {
  RootStackNavigationProps,
  TileDetailsScreenRouteProp,
} from '@/routes/types';
import {useStyles} from '@/screens/TileDetails/style';
import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';

export const TileDetailsScreen = () => {
  const styles = useStyles();

  const navigation = useNavigation<RootStackNavigationProps>();
  const {params} = useRoute<TileDetailsScreenRouteProp>();

  const navigateToList = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.actions}>
        <Label value={'To the list'} onPress={navigateToList} />
        <Label value={params?.name} activeOpacity={1} />
      </View>
    </View>
  );
};

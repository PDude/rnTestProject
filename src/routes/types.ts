import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  TileDetails: {name: string};
};

export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;

export type TileDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'TileDetails'
>;

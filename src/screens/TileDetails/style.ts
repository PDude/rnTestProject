import {StyleSheet} from 'react-native';

export const useStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: '#292929',
      height: '100%',
      paddingVertical: 16,
      paddingHorizontal: 8,
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

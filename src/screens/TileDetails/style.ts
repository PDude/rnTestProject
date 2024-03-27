import {StyleSheet} from 'react-native';

export const useStyles = () =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: '#292929',
      height: '100%',
      paddingVertical: 16,
      paddingHorizontal: 8,
      gap: 40,
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

import {StyleSheet} from 'react-native';

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: '#292929',
      height: '100%',
      paddingVertical: 24,
    },
    listItem: {
      backgroundColor: '#333',
      borderRadius: 8,
      padding: 8,
      borderWidth: 2,
      borderColor: 'transparent',
    },
    activeListItem: {
      borderColor: 'white',
    },
    text: {
      color: '#eee',
      fontSize: 12,
      fontWeight: 'bold',
    },
    separator: {
      width: 8,
    },
  });
};

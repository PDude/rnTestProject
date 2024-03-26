import {StyleSheet} from 'react-native';

export const useStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: '#333',
      borderRadius: 8,
      padding: 8,
      borderWidth: 2,
      borderColor: 'transparent',
      minHeight: 40,
      justifyContent: 'center',
    },
    activeItem: {
      borderColor: 'white',
    },
    text: {
      color: '#eee',
      fontSize: 12,
      fontWeight: 'bold',
    },
  });

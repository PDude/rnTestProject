import {useStyles} from '@/components/Label/style';
import React, {memo} from 'react';
import {LayoutChangeEvent, Text, TouchableOpacity, View} from 'react-native';

interface IProps {
  onLayout?: (event: LayoutChangeEvent) => void;
  onPress?: () => void;
  activeOpacity?: number;
  isActive?: boolean;
  value: string;
}

export const Label = memo(
  ({onLayout, isActive, value, onPress, activeOpacity}: IProps) => {
    const styles = useStyles();

    return (
      <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity}>
        <View
          onLayout={onLayout}
          style={[styles.container, isActive && styles.activeItem]}>
          <Text style={styles.text}>{value}</Text>
        </View>
      </TouchableOpacity>
    );
  },
);

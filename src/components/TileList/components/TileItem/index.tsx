import React, {memo, RefObject, useCallback, useRef} from 'react';
import {FlatList, useWindowDimensions} from 'react-native';
import {IComment} from '@/components/TileList/types';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from '@/routes/types';
import {Label} from '@/components/Label';

interface IProps {
  item: IComment;
  scrollRef: RefObject<FlatList>;
  index: number;
  setActiveId: (index: number) => void;
  activeId: number | null;
}

export const TileItem = memo(
  ({item, scrollRef, index, setActiveId, activeId}: IProps) => {
    const navigation = useNavigation<RootStackNavigationProps>();

    const {width} = useWindowDimensions();
    const elementLayoutRef = useRef<{width: number}>({width: 0});

    const handlePress = useCallback(() => {
      scrollRef.current?.scrollToIndex({
        index,
        animated: true,
        viewOffset: width / 2 - elementLayoutRef.current.width / 2,
      });

      setActiveId(item.id);

      setTimeout(() => {
        navigation.navigate('TileDetails', {name: item.email.split('@')[0]});
      }, 500);
    }, [index, item.email, item.id, navigation, scrollRef, setActiveId, width]);

    return (
      <Label
        onPress={handlePress}
        value={item.email.split('@')[0]}
        isActive={item.id === activeId}
        onLayout={({nativeEvent}) =>
          (elementLayoutRef.current = nativeEvent.layout)
        }
      />
    );
  },
);

import React, {memo, useEffect, useRef, useState} from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useStyles} from './style';
import {IComment} from './types';

// gap between list items
const LIST_GAP = 8;

export const Tile = memo(() => {
  const styles = useStyles();

  // fetched comments
  const [comments, setComments] = useState<IComment[]>([]);

  // active index for changing the active list item style
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // widths of list items for calculating the offset
  const [itemWidths, setItemWidths] = useState<Record<number, number>>({});

  // width of the flat list for calculating the offset
  const [flatListWidth, setFlatListWidth] = useState(0);

  const fetchComments = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/comments?_limit=30',
    );

    const data = await response.json();
    setComments(data);
  };

  const commentsParsed = comments.map(comment => ({
    email: comment.email,
    key: comment.id.toString(),
  }));

  const separator = <View style={styles.separator} />;

  const refList = useRef<FlatList>(null);

  const handlePress = (index: number) => {
    let offset = LIST_GAP + LIST_GAP + LIST_GAP * index; // header + footer + inner gap

    for (let i = 0; i < index; i++) {
      offset += itemWidths[i] || 0;
    }

    offset += ((itemWidths[index] || 0) - flatListWidth) / 2;

    refList.current?.scrollToOffset({
      offset,
      animated: true,
    });

    setActiveIndex(index);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <FlatList
        ref={refList}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={commentsParsed}
        ItemSeparatorComponent={() => separator}
        ListFooterComponent={separator}
        ListHeaderComponent={separator}
        onLayout={({nativeEvent}) => {
          setFlatListWidth(nativeEvent.layout.width);
        }}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => handlePress(index)}
            onLayout={({nativeEvent}) => {
              setItemWidths(prevWidths => ({
                ...prevWidths,
                [index]: nativeEvent.layout.width,
              }));
            }}>
            <View
              style={[
                styles.listItem,
                activeIndex === index && styles.activeListItem,
              ]}>
              <Text style={styles.text}>{item.email.split('@')[0]}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
});

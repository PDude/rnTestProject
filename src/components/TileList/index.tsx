import {TileItem} from '@/components/TileList/components/TileItem';
import {TileListSeparator} from '@/components/TileList/components/TileListSeparator';
import {IComment} from '@/components/TileList/types';
import React, {memo, useEffect, useMemo, useRef, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {useStyles} from '@/components/TileList/style';

export const TileList = memo(() => {
  const styles = useStyles();

  const refList = useRef<FlatList>(null);

  const [comments, setComments] = useState<IComment[] | null>(null);
  const [activeId, setActiveId] = useState<null | number>(null);

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/comments?_limit=200',
        );
        const data = await response.json();
        setComments(data);
      })();
    }, 0); // test delay
  }, []);

  const commentsParsed = useMemo(
    () =>
      comments?.map((comment, id) => ({
        id,
        email: comment.email,
        key: comment.id.toString(),
      })),
    [comments],
  );

  if (!comments) {
    return <ActivityIndicator style={styles.listWrapper} />;
  }

  return (
    <View style={styles.listWrapper}>
      <FlatList
        ref={refList}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={commentsParsed}
        ItemSeparatorComponent={TileListSeparator}
        ListHeaderComponent={TileListSeparator}
        ListFooterComponent={TileListSeparator}
        renderItem={args => (
          <TileItem
            {...args}
            scrollRef={refList}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        )}
      />
    </View>
  );
});

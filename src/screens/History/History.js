/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import React, { useCallback, useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  RefreshControl,
} from 'react-native';

const History = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setRefreshing(false);
  }, []);

  const DATA = [
    {
      id: '1',
      name: 'Hoa don 1',

    },
    {
      id: '2',
      name: 'Hoa don 2',
    },
    {
      id: '3',
      name: 'Hoa don 3',
    },
  ];
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex: 1,
    backgroundColor: '#FFFFF0',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default History;
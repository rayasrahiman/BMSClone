import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

export default function EventsComp({data, title, subtitle}) {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.subTitleText}>{subtitle}</Text>
      </View>
      <FlatList
        numColumns={2}
        data={data}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <View style={styles.imageContainer}>
            <Image
              source={{uri: item.img}}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginLeft: 10,
  },
  titleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subTitleText: {
    color: '#7e7e7e',
    fontSize: 15,
  },
  imageContainer: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 10,
  },
});

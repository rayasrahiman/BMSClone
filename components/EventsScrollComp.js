import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';

export default function EventsScrollComp({data, title, subtitle}) {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.subtitleText}>{subtitle}</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        scrollEnabled
        scrollEventThrottle={16}
        decelerationRate={'fast'}
        horizontal={true}>
        <FlatList
          contentContainerStyle={{flex: 1}}
          numColumns={4}
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginLeft: 10,
    marginVertical: 15,
  },
  titleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitleText: {
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

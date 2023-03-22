import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

export default function CardComp({data, buttonText}) {
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate={'fast'}
        data={data}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image
                source={{uri: item.img}}
                style={styles.image}
                resizeMode="contain"
              />
              <View style={styles.titleContainer}>
                <Text numberOfLines={2} style={styles.titleText}>
                  {item.title}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: Dimensions.get('window').width,
    backgroundColor: '#333545',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    height: 200,
    width: 150,
    borderRadius: 10,
  },
  titleContainer: {
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  buttonContainer: {
    backgroundColor: '#f84464',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

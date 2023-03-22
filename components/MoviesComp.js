import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import OctIcon from 'react-native-vector-icons/dist/Octicons';

export default function MoviesComp({data}) {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Recommended Movies</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={data}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image
                source={{uri: item.img}}
                style={styles.image}
                resizeMode="cover"
              />
              <View style={styles.ratingContainer}>
                <OctIcon name="star-fill" size={15} color="#f84464" />
                <Text style={styles.ratingText}> {item.rating}</Text>
                <Text style={styles.ratingText}> {item.votes} votes</Text>
              </View>
            </View>
            <Text style={styles.movieText}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginLeft: 10,
    marginBottom: 20,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  container: {
    marginHorizontal: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  imageContainer: {
    borderRadius: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    height: 230,
  },
  image: {
    width: 150,
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  ratingText: {
    color: 'white',
  },
  movieText: {
    color: 'black',
    fontSize: 16,
  },
});

import React from 'react';
import {View, Text, ScrollView, Dimensions, StyleSheet} from 'react-native';
import MaterialComIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import OctIcon from 'react-native-vector-icons/dist/Octicons';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import FontistoIcon from 'react-native-vector-icons/dist/Fontisto';

export default function SubHeader() {
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={styles.iconContainer}>
          <MaterialComIcon name="movie-roll" size={30} color="black" />
          <Text style={styles.text}>Movies</Text>
        </View>
        <View style={styles.iconContainer}>
          <FeatherIcon name="music" size={30} color="black" />
          <Text style={styles.text}>Music Shows</Text>
        </View>
        <View style={styles.iconContainer}>
          <MaterialComIcon name="cricket" size={30} color="black" />
          <Text style={styles.text}>IPL</Text>
        </View>
        <View style={styles.iconContainer}>
          <OctIcon name="video" size={30} color="black" />
          <Text style={styles.text}>Stream</Text>
        </View>
        <View style={styles.iconContainer}>
          <MaterialIcon name="sports-handball" size={30} color="black" />
          <Text style={styles.text}>Sports</Text>
        </View>
        <View style={styles.iconContainer}>
          <FontistoIcon name="persons" size={30} color="black" />
          <Text style={styles.text}>Meetups</Text>
        </View>
        <View style={styles.iconContainer}>
          <OctIcon name="stack" size={30} color="black" />
          <Text style={styles.text}>See All</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: Dimensions.get('window').width,
  },
  iconContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});

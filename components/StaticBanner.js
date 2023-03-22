import {View, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function StaticBanner({container, imgCont}) {
  return (
    <View style={{...styles.container, ...container}}>
      <Image
        source={{
          uri: 'https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png',
        }}
        resizeMode="center"
        style={{...styles.image, ...imgCont}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '2%',
    backgroundColor: '#000000',
    marginVertical: 30,
  },
  image: {
    height: 60,
    width: '100%',
    borderRadius: 3,
  },
});

import React from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel-v4';

let width = Dimensions.get('window').width;

export default function HeaderBanner({data}) {
  return (
    <View>
      <Carousel
        autoplay={true}
        autoplayDelay={3000}
        loop={true}
        scrollEnabled={true}
        layout={'default'}
        ref={ref => (this.carousel = ref)}
        data={data}
        sliderWidth={width}
        itemWidth={width}
        renderItem={({item}) => (
          <View>
            <Image
              source={{uri: item.img}}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: width,
  },
});

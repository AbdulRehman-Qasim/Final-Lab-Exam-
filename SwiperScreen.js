import React, { useState, useEffect } from 'react';
import { Text, Image, View, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';
import tw from 'twrnc';

function SwiperScreen() {
  return (
    <View style={tw`flex-1 mt-20`}>
      <Swiper
        showsPagination={true}
        autoplay={true}
        autoplayTimeout={3}
        paginationStyle={{
          bottom: 10,
        }}
        dotStyle={{
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          width: 10,
          height: 10,
          borderRadius: 5,
        }}
        activeDotStyle={{
          backgroundColor: 'white',
          width: 12,
          height: 12,
          borderRadius: 6,
        }}
      >
        <View style={tw`flex-1`}>
          <Image
            style={tw`w-full h-full`}
            source={require('./assets/pizza shop.webp')}
            resizeMode="cover"
          />
        </View>
        <View style={tw`flex-1`}>
          <Image
            style={tw`w-full h-full`}
            source={require('./assets/pizzashop2.jpg')}
            resizeMode="cover"
          />
        </View>
        <View style={tw`flex-1`}>
          <Image
            style={tw`w-full h-full`}
            source={require('./assets/shop3.jpg')}
            resizeMode="cover"
          />
        </View>
        <View style={tw`flex-1`}>
          <Image
            style={tw`w-full h-full`}
            source={require('./assets/shop4.jpg')}
            resizeMode="cover"
          />
        </View>
      </Swiper>
    </View>   
  );
}

export default SwiperScreen;

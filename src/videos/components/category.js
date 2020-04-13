import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

function Category(props) {
  return (
    <ImageBackground
      style={styles.wrapper}
      source={{
        uri: props.background_image,
      }}>
      <View>
        <Text style={styles.genre}>{props.genres[0]}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 250,
    height: 100,
    borderRadius:10,
    overflow: 'hidden',
    alignItems:'center',
    justifyContent: 'center',
  },
  genre: {
    color: 'white',
    textShadowColor:'rgba(0,0,0, .99)',
    textShadowOffset:{
        width:2,
        height:2
    },
    textShadowRadius:10,
    fontSize: 40,
    fontWeight:'bold',

  },
});

export default Category;

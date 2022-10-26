import React from "react";
import { ImageBackground, StyleSheet, View , Image} from "react-native";
export const image = require('../assets/splash.png'); 
export const logo = require('../assets/Title.png');

export default function IntroScreen() {
  return (
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Image source={logo} style={{margin: "auto"}}></Image>
    </ImageBackground>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems:'center',
     justifyContent:'center'
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

import React from "react";
import { ImageBackground, StyleSheet, View , Text , Image , TouchableOpacity} from "react-native";
export const image = require('../assets/splash.png'); 
export const head = require('../assets/head.png');

export default function AddPersonScreen() {
  return (
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Image source={head} style={{position: 'absolute', top: 72}}></Image>
      <TouchableOpacity style={styles.btn} >
        <Text style={styles.next} >Add a Person</Text>
      </TouchableOpacity>
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
  },
  btn:{
    top: 72,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    marginTop: '10%',
    alignItems:'center',
    backgroundColor:'#414471',
    height:48,
    width: 300,
    borderRadius:12,
  },
  next:{
    color:'#FFFFFF',
    fontSize:16,
    fontWeight:'600'
  }
});

import React from "react";
import { ImageBackground, StyleSheet, View , Text , Image , TouchableOpacity , TextInput} from "react-native";
export const image = require('../assets/splash.png'); 
export const head = require('../assets/head_.png');

export default function AddingPersona() {
  return (
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Image source={head}></Image>
      <View style={{flexDirection: "column"}}>
        <View style={{top: 32}}>
            <View style={{flexDirection: "column", marginBottom: 16}}>
                <Text style={{marginBottom: 6, color: "#777B9B"}}>FullName</Text>
                <TextInput style={styles.input} keyboardType='default'/>
            </View>
            <View style={{flexDirection: "column" , marginBottom: 16}}>
                <Text style={{marginBottom: 6, color: "#777B9B"}}>Age</Text>
                <TextInput style={styles.input} keyboardType='default'/>
            </View>
            <View style={{flexDirection: "column", marginBottom: 16}}>
                <Text style={{marginBottom: 6, color: "#777B9B"}}>PhoneNumber</Text>
                <TextInput style={styles.input} keyboardType='default'/>
            </View>
            <View style={{flexDirection: "column", marginBottom: 16}}>
                <Text style={{marginBottom: 6, color: "#777B9B"}}>Location</Text>
                <TextInput style={styles.input} keyboardType='default'/>
            </View>
            <View style={{flexDirection: "column"}}>
                <Text style={{marginBottom: 6, color: "#777B9B"}}>Disease</Text>
                <TextInput style={[styles.input , {height: 72}]} keyboardType='default'/>
            </View>
            
        <TouchableOpacity style={styles.btn} >
          <Text style={styles.next} >Add a Person</Text>
        </TouchableOpacity>
       </View>
      </View>
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
  },
  input: {
    borderRadius:8,
    height: 40,
    borderWidth: 2,
    borderColor:'#777B9B',
    padding: 10,
    fontSize:14,
    color:'#777B9B',
  }
});

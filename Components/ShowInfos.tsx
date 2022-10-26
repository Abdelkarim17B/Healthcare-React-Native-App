import React from "react";
import { ImageBackground, StyleSheet, View , Text , Image , TouchableOpacity , TextInput} from "react-native";
export const image = require('../assets/splash.png'); 
export const healthcare = require('../assets/HealthCare.png');
export const Rounded = require('../assets/Rounded.png');
export const infos= require('../assets/Informations.png');
export const location = require('../assets/location.png');

export default function ShowInfos() {
  return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Image source={healthcare}></Image>
            <View style={[styles.div , {marginTop: 72}]}>
                <Image source={Rounded} style={{marginHorizontal: 88, marginTop: -24}}></Image>
                <View style={{flexDirection: "row" , alignItems: "baseline"}}>
                    <Text style={{fontSize: 20, marginLeft: 20 , marginRight: 60}}>Abdelkarim</Text>
                    <Text style={{fontSize: 16}}>18 Years Old</Text>
                </View>
                <Text style={{textDecorationLine: 'underline', fontSize:24, marginTop:10, marginBottom:10, marginLeft: 90}}>Diagnosis</Text>
                <Image source={infos} style={{width: 280,height: 280,resizeMode:'contain', marginTop: -50, marginLeft: 8}}></Image>
                <View style={{flexDirection: 'row', marginTop: -20, alignItems: 'center', marginLeft: 80}}>
                    <Image source={location} style={{width: 40, height: 24, resizeMode:'contain'}}></Image>
                    <Text style={{fontSize:24}}>Algiers</Text>
                </View>
                <TouchableOpacity style={styles.btn} >
                    <Text style={styles.next} >Call nearest ambulance</Text>
                 </TouchableOpacity>
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
  div: {
    borderRadius:8,
    borderWidth: 2,
    borderColor:'#414471',
    width: 300,
    height: 520,
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
  },
  btn:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    marginTop: '10%',
    alignItems:'center',
    marginLeft: 12,
    backgroundColor:'#414471',
    height:48,
    width: 272,
    borderRadius:12,
  },
 
});

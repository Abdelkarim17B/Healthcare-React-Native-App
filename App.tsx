import React from "react";
import { StyleSheet, View} from "react-native";
import IntroScreen from './Components/IntroScreen'
import AddPersonScreen from "./Components/AddPersonScreen";
import AddingPersona from "./Components/AddingPersona";
import ShowInfos from "./Components/ShowInfos";

export default function App() {
  return (
    <View style={styles.container}>
      <ShowInfos />
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

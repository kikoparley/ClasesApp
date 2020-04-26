import React from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";

function Loading(props) {
  return (
    <View style={styles.container}>
      <Text>Cargando...</Text>
      {/* <Image source={require("../../assets/logo2.png")} style={styles.logo} /> */}
      <ActivityIndicator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: "contain",
    marginBottom: 10,
  },
});

export default Loading;

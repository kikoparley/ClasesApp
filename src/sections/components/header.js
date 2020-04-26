import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";


function Header(props) {
  return (
       <SafeAreaView style={styles.statusBar}>
        <View style={styles.container}>
          {/* <Text>Diamante School</Text> */}
          <Image
            source={require('../../assets/logo2.png')}
            style={styles.logo}
          />
          <View style={styles.right}>
            {props.children}
          </View>
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 26,
    resizeMode: "contain",
  },

  statusBar: {
    backgroundColor: "white",
  },
  container: {
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  right: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default Header;

import React, { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class Login extends Component {
  handleLogin = () => {
    const token = "ABCDEFGHIJK";
    this.props.dispatch({
      type: "SET_USER",
      payload: {
        token,
        username: "Alexander", //this.state.username
      },
    });
    this.props.navigation.navigate('Loading');
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Image source={require("../../assets/logo3.jpg")} style={styles.logo} />
          <Text style={styles.name}> DIAMANTE ACADÉMICO </Text>
          <TextInput style={styles.input} placeholder='Nombre de usuario' placeholderTextColor='white' />
          <TextInput
            style={styles.input}
            placeholder='Contraseña'
            placeholderTextColor='white'
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={this.handleLogin} style={styles.button}>
            <Text style={styles.buttonLabel}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  logo: {
    alignSelf: "center",
    width: 200,
    height: 80,
    resizeMode: "contain",
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
    width: 250,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#838383",
    color: "white",
  },
  name: {
    textAlign: "center",
    marginBottom: 12,
    fontSize: 18,
    fontWeight: "bold",
    width: 250,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: "black",
  },
  button: {
    backgroundColor: "#1B56D0",
    borderRadius: 5,
  },
  buttonLabel: {
    color: "white",
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default connect(null)(Login);

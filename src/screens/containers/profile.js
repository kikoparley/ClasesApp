import React, { Component } from "react";
import { View, Text, SafeAreaView, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";

class Profile extends Component {
    handleLogout = () => {
        this.props.dispatch({
            type:'REMOVE_USER',
        })
        this.props.navigation.navigate('Loading') //Loading o Login
    }
 
    render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Usuario: {this.props.user.username}</Text>
        <Button title='Cerrar sesión' color='#1B56D0' onPress={this.handleLogout} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

function mapStateToProps(state) {
    return{
        user: state.user
    }

}


export default connect(mapStateToProps) (Profile);

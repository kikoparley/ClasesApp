import React, { Component, Fragment } from "react";
import { View, StyleSheet, Image, StatusBar, Button } from "react-native";
 import Header from "../../sections/components/header";
// import {Header} from 'react-native-elements'
import { Avatar, Badge, ListItem, Text } from "react-native-elements";
import { connect } from "react-redux";


class About extends Component {
  handleLogout = () => {
    this.props.dispatch({
      type: "REMOVE_USER",
    });
    this.props.navigation.navigate("Loading"); //Loading o Login
  };
  componentDidMount() {
    this.props.navigation.addListener("didFocus", () => {
      StatusBar.setBarStyle("light-content");
      //  StatusBar.setBackgroundColor("white"); Android
    });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <View style={styles.container}>
          <Text style={styles.text} h1>
            {this.props.user.username}
          </Text>
          <Avatar
            size='large'
            rounded
            source={{
              uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
            }}
          />
          <Badge status='success' />
          <ListItem
            key={1}
            title={this.props.user.username}
            subtitle='Promedio= 4.5'
            badge={{ value: "3°", textStyle: { color: "white" }, containerStyle: { marginTop: -20 } }}
          />
          <Text>Usuario: {this.props.user.username}</Text>
          <Button title='Cerrar sesión' color='#1B56D0' onPress={this.handleLogout} />
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    // justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#022c43",
  },
  avatar: {
    padding: 10,
    // justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    marginBottom: 5,
    color: "black",
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
});

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}


export default connect(mapStateToProps) (About);

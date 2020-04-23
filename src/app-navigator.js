import {
   createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator
} from "react-navigation";
import React from 'react';
import Home from "./screens/containers/home";
import Movie from "./screens/containers/movie";
import Category from "./screens/containers/category";
import Header from "./sections/components/header";
import About from './screens/containers/about'
import Lucky from "./screens/containers/lucky";
import Profile from "./screens/containers/profile";
import Loading from "./screens/containers/loading";
import Login from "./screens/containers/login";
// import Icon from './sections/components/icon';
//  import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Main = createStackNavigator(
  {
    Home: Home,
    Movie: Movie,
    Category,
  },
  {
    navigationOptions: {
      header: Header,
    },
  }
);


const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Main,
      navigationOptions: {
        title: "inicio",
        tabBarIcon: <FontAwesome name={"home"} size={24} />,
      },
    },
    About: {
      screen: About,
      navigationOptions: {
        title: "Nosotros",
        tabBarIcon: <FontAwesome name={"building"} size={24} />,
      },
    },
    Lucky: {
      screen: Lucky,
      navigationOptions: {
        title: "Busqueda",
        tabBarIcon: <FontAwesome name={"search"} size={24} />,
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: "Perfil",
        tabBarIcon: <FontAwesome name={"user"} size={24} />,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "white",
      activeBackgroundColor: "#1B56D0",
    },
  }
);
 

const SwitchNavigator = createSwitchNavigator(
  {
    App: TabNavigator,
    Login: Login,
    Loading: Loading,
  },
  {
    initialRouteName: 'Loading'
  }


)



export default SwitchNavigator;

import {
   createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator,
    createDrawerNavigator
} from "react-navigation";
import { Platform, StatusBar } from "react-native";
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
import Drawer from './sections/components/drawer'
// import Icon from './sections/components/icon';
//  import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Main = createStackNavigator(
  {
    Home: Home,
    Movie,
  },
  {
    navigationOptions: {
      header: Header,
      gestiresEnabled:true
    },
    mode:'modal',
    cardStyle:{
        backgroundColor:'white'
      }
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
        title: "Perfil",
        tabBarIcon: <FontAwesome name={"user"} size={24} />,
      },
    },
    Lucky: {
      screen: Lucky,
      navigationOptions: {
        title: "Busqueda",
        tabBarIcon: <FontAwesome name={"search"} size={24} />,
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
 
const WithModal = createStackNavigator(
  {
    Main: {
      screen: TabNavigator,
    },
    Category,
  },
  {
    mode: "modal",
    headerMode: "none",
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
      backgroundColor: "white",
    },
    navigationOptions:{
      gesturesEnable: true,
    }
  }
);


// const DrawerNavigator = createDrawerNavigator(
//   {
//     Main: {
//       screen: WithModal,
//       navigationOptions: {
//         title: "inicio",
//         tabBarIcon: <FontAwesome name={"home"} size={24} />,
//       },
//     },
//     Sobre: {
//       screen: About,
//       navigationOptions: {
//         title: "Nosotros",
//         tabBarIcon: <FontAwesome name={"building"} size={24} />,
//       },
//     },
//     suerte: {
//       screen: Lucky,
//       navigationOptions: {
//         title: "Nosotros",
//         tabBarIcon: <FontAwesome name={"search"} size={24} />,
//       },
//     },
//   },
//   {
//     drawerWidth: 200,
//     drawerBackgroundColor: "#f6f6f6",
//     contentComponent: Drawer,
//     contentOptions: {
//       activeBackgroundColor: "#7aba2f",
//       activeTintColor: "white",
//       inactiveTintColor: "#828282",
//       inactiveBackgroundColor: "white",
//       itemStyle: {
//         borderBottomWidth: 0.5,
//         borderBottomColor: "rgba(0,0,0,.05)",
//       },
//       labelStyle: {
//         marginHorizontal:20,
//       },
//       iconContainerStyle:{
//         marginHorizontal:5, 
//       }
//     },
      
//   }
// );

const SwitchNavigator = createSwitchNavigator(
  {
    App: WithModal,
    Login: Login,
    Loading: Loading,
  },
  {
    initialRouteName: "Loading",
  }
);



export default SwitchNavigator;

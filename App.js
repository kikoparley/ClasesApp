import React, { Component } from "react";
import { Text, View } from "react-native";

import API from "./utils/api";
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import Loading from './src/sections/components/loading';
import AppNavigatorWithState from './src/app-navigator-with-state'
import AppLayout from './src/app';

type Props = {};
export default class App extends Component<Props> {

  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<Loading />}>
          <AppNavigatorWithState />
        </PersistGate>
      </Provider>
    );
  }
}

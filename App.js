import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from "react-redux"
import {store,persistor} from "./store/store"
import { LogBox } from 'react-native';
import {PersistGate} from 'redux-persist/integration/react'

LogBox.ignoreLogs(['Reanimated 2']);

import Navigation from './navigation/Navigation';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}

// import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StyleSheet, View, LogBox} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './redux/store';
import Navigation from './Navigation/Navigation';

export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigation />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

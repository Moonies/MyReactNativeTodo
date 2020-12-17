import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
const store = configureStore();

import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';

const HomeScreen = () => (
  <Layout style={styles.container}>
    <StatusBar />
    <SafeAreaView>
      <Text category="h1">HOME</Text>
    </SafeAreaView>
  </Layout>
);

export default () => (
  <Provider store={store}>
    <ApplicationProvider {...eva} theme={eva.dark}>
      <HomeScreen />
    </ApplicationProvider>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

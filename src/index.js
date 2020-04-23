import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import './config/reactotron';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
});

console.tron.log('Hello World!');

export default function App() {
  return (
    <View style={styles.body}>
      <Text style={styles.sectionTitle}>Hello World</Text>
    </View>
  );
}

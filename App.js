import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const renderColor = color => {
  return {};
};

const App = () => (
  <View style={{padding: 20}}>
    {/* <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
    </View> */}
    <View style={[styles.container, {backgroundColor: '#c9c9ff'}]}>
      <Text style={styles.text}>Purple: #C9C9FF</Text>
    </View>
    <View style={[styles.container, {backgroundColor: '#3d85c6'}]}>
      <Text style={styles.text}>Blue: #3D85C6</Text>
    </View>
    <View style={[styles.container, {backgroundColor: '#96cc96'}]}>
      <Text style={styles.text}>Green: #96CC96</Text>
    </View>
    <View style={[styles.container, {backgroundColor: '#f4b940'}]}>
      <Text style={styles.text}>Yellow: #F4B940</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    minHeight: 150,
    marginBottom: 10,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
});

export default App;

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';

const App = () => {
  return (
    /* */
    <View>
      <View style={styles.buleBox}>
        <Text style={styles.textInput}>Test View</Text>
      </View>
      <View style={styles.mintBox}></View>
      <View style={styles.darkblueBox}></View>
      <View style={styles.skyblueBox}>
        <TouchableOpacity style={styles.yellowBtn}>
          <Button color={`#0b0b0b`} title="Test"></Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 30,
    color: `#fff`,
    fontWeight: `600`,
  },
  buleBox: {
    height: 200,
    backgroundColor: `#0c6aad`,
    alignItems: `center`,
    justifyContent: `center`,
  },
  mintBox: {
    height: 300,
    backgroundColor: `#29e3dd`,
  },
  darkblueBox: {
    height: 200,
    backgroundColor: `#182b80`,
  },
  skyblueBox: {
    height: 300,
    backgroundColor: `#5fe4ed`,
    alignItems: `center`,
  },
  yellowBtn: {
    width: 120,
    height: 40,
    borderRadius: 5,
    backgroundColor: `#ebed68`,

    marginTop: 40,
  },
});

export default App;

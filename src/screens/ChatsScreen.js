import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class ChatsScreen extends Component {
  render() {
    return (
      <View style={[styles.container, {backgroundColor: '#fff'}]}>
        <Text style={styles.text}>Chats Screen</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 26,
    color: '#222',
    fontWeight: 'bold',
  },
});

export default ChatsScreen;

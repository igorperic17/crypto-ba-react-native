import React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.image}></Image>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 40,
    width: 40,
    margin: 5,
    resizeMode: 'contain'
  },
  text: {
    margin: 5,
    color: 'white',
    textAlignVertical: 'center',
    fontFamily: 'Menlo-Regular'
  }
});

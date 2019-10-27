import React from 'react';
import { ScrollView, StyleSheet, WebView, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function LinksScreen() {
  return (
     <ScrollView style={styles.container}> 

    <WebView
      source={{uri: 'https://git.crypto.ba'}}
      style={{marginTop: 20, height: 300, width: 100}}
    />

    <Text>Web view...</Text>

    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

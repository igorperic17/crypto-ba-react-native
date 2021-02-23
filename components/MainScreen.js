import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import TypeWriter from 'react-native-typewriter'

export default function MainScreen(props) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>

        <Image style={styles.headerImageNodes} source={require('../assets/images/nodes-background.png')}></Image>
        
        <View style={styles.headerLogoView}>
          <Animatable.Image animation="slideInDown"
            source={require('../assets/images/logo-crypto-ba.png')}
            style={styles.headerLogo}
          />
        </View>

        <View style={styles.typerBackgroundStripe}>
          <TypeWriter typing={1} 
          initialDelay={300} 
          style={styles.typewriterText}>{props.typewriterText}</TypeWriter>
        </View>

        <View style={styles.pageHeaderContainer}>
          <Text style={styles.pageHeaderText}>
            {props.screenTitle}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
            {props.children}
        </View>

      </ScrollView>

    </View>
  );
}

MainScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00091A',
  },
  contentContainer: {
    flex: 1,
    paddingTop: 30,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  headerLogoView: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  headerLogo: {
    width: 200,
    height: 50,
    resizeMode: 'contain',
  },
  headerImageNodes: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 210,
    zIndex: -1
  },
  typerBackgroundStripe: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  typewriterText: {
    fontSize: 16,
    fontFamily: 'Menlo-Regular',
    color: 'white',
  },
  pageHeaderText: {
    fontSize: 24,
    color: '#00091A',
    textAlign: 'center',
    fontFamily: 'Menlo-Regular',
  },
  pageHeaderContainer: {
    marginTop: 40,
    height: 30,
    backgroundColor: 'rgba(255,255,255,0.8)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

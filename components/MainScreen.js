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
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>

        <Image style={styles.headerImageNodes} source={require('../assets/images/nodes-background.png')}></Image>
        
        <View style={styles.headerLogoView}>
          <Animatable.Image animation="slideInDown"
            source={
              __DEV__
                ? require('../assets/images/logo-crypto-ba.png')
                : require('../assets/images/logo-crypto-ba.png')
            }
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
    paddingTop: 30,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
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
    fontWeight: 'bold'
  },
  button: {
    width: 200,
    height: 50,
    resizeMode: 'contain',
    marginTop: 0,
    marginLeft: 0,
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  pageHeaderText: {
    fontSize: 24,
    color: 'white',
    lineHeight: 24,
    textAlign: 'center',
    fontFamily: 'Menlo-Regular',
    top: 100
  },
  tabBarInfoContainer: {
    // position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 100,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  buttonContainer: {
    marginTop: 150,
    alignItems: 'center',
  }
});

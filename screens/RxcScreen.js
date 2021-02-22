import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MainButton from '../components/MainButton';

import TypeWriter from 'react-native-typewriter'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
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

        <Image style={styles.headerImageNodes} source={require('../assets/images/nodes-background.png')}></Image>

        <View style={styles.typerBackgroundStripe}>
          <TypeWriter typing={1} 
          initialDelay={300} 
          style={styles.typewriterText}>Learn the basics of blockchain tech</TypeWriter>
        </View>

        <View style={styles.pageHeaderContainer}>
          <Text style={styles.pageHeaderText}>
            rxc ecosystem
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          
        <MainButton 
          buttonImage={require('../assets/images/icons/crypto-ba-logo.png')}
          buttonText={'rxc'}
          onPressHandler={handleRxcPress} />
        <MainButton 
          buttonImage={require('../assets/images/icons/wallet-image.png')}
          buttonText={'wallet'}
          onPressHandler={handleWalletPress} />
        <MainButton 
          buttonImage={require('../assets/images/icons/explorer-image.png')}
          buttonText={'explorer'}
          onPressHandler={handleExplorerPress} />
        <MainButton 
          buttonImage={require('../assets/images/icons/pay-image.png')}
          buttonText={'pay'}
          onPressHandler={handlePayPress} />
        <MainButton 
          buttonImage={require('../assets/images/icons/market-image.png')}
          buttonText={'market'}
          onPressHandler={handleMarketPress} />
        <MainButton 
          buttonImage={require('../assets/images/icons/games-image.png')}
          buttonText={'games'}
          onPressHandler={handleGamesPress} />

        </View>
      </ScrollView>

    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function handleRxcPress() {
  WebBrowser.openBrowserAsync(
    'https://rxc.crypto.ba'
  );
}

function handleWalletPress() {
  WebBrowser.openBrowserAsync(
    'https://wallet.crypto.ba'
  );
}

function handleExplorerPress() {
  WebBrowser.openBrowserAsync(
    'https://explorer.crypto.ba'
  );
}

function handleGamesPress() {
  WebBrowser.openBrowserAsync(
    'https://rxcgames.com'
  );
}

function handleMarketPress() {
  WebBrowser.openBrowserAsync(
    'https://rxcmarket.com'
  );
}

function handlePayPress() {
  WebBrowser.openBrowserAsync(
    'https://rxcpay.crypto.ba'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00091A',
  },
  contentContainer: {
    paddingTop: 30,
  },
  headerLogoView: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  headerLogo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  headerImageNodes: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 300,
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
    fontFamily: 'Menlo',
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
  pageHeaderContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
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
    fontFamily: 'Menlo',
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
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import {
  Platform,
  StyleSheet,
} from 'react-native';
import MainButton from '../components/MainButton';
import MainScreen from '../components/MainScreen';

export default function RxcScreen() {
  return (
    <MainScreen screenTitle='rxc ecosystem'typewriterText='Learn the basics of blockchain tech'>
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
    </MainScreen>

  );
}

RxcScreen.navigationOptions = {
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


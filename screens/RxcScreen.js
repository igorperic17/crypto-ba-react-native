import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Platform, StyleSheet } from 'react-native';
import MainButton from '../components/MainButton';
import MainScreen from '../components/MainScreen';

export default function RxcScreen() {
	return (
		<MainScreen
			screenTitle='rxc ecosystem'
			typewriterText='Learn the basics of blockchain tech'
		>
			<MainButton
				buttonImage={require('../assets/images/icons/crypto-ba-logo.png')}
				buttonText={'rxc'}
				onPressHandler={handleRxcPress}
			/>
			<MainButton
				buttonImage={require('../assets/images/icons/explorer-image.png')}
				buttonText={'explorer v1'}
				onPressHandler={handleExplorerPress}
			/>

			<MainButton
				buttonImage={require('../assets/images/icons/explorer-image.png')}
				buttonText={'explorer v2'}
				onPressHandler={handleExplorer2Press}
			/>
			<MainButton
				buttonImage={require('../assets/images/icons/trader-image.png')}
				buttonText={'trade'}
				onPressHandler={handleTradePress}
			/>
			<MainButton
				buttonImage={require('../assets/images/icons/games-image.png')}
				buttonText={'games'}
				onPressHandler={handleGamesPress}
			/>
		</MainScreen>
	);
}

RxcScreen.navigationOptions = {
	header: null,
};

function handleRxcPress() {
	WebBrowser.openBrowserAsync('https://rxc.crypto.ba');
}

function handleWalletPress() {
	WebBrowser.openBrowserAsync('https://wallet.crypto.ba');
}

function handleExplorerPress() {
	WebBrowser.openBrowserAsync('https://rxcinfo.crypto.ba/');
}

function handleExplorer2Press() {
	WebBrowser.openBrowserAsync('https://explorer.crypto.ba/insight');
}

function handleGamesPress() {
	WebBrowser.openBrowserAsync('https://rxcgames.com');
}

function handleTradePress() {
	WebBrowser.openBrowserAsync('https://whitebit.com/trade/RXC_USDT');
}

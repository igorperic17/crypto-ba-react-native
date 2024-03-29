import React from 'react';
import { StyleSheet, Text } from 'react-native';
import MainScreen from '../components/MainScreen';
import { Linking } from 'react-native';

export default function HomeScreen() {
	return (
		<MainScreen
			screenTitle='about us'
			typewriterText='The first Balkan crypto community'
		>
			<Text style={styles.contentText}>
				Crypto.ba is a Balkan community of {'\n'}
				crypto enthusiasts, helping each {'\n'}
				other learn fundamentals of {'\n'}
				blockchain technologies.{'\n'}
				{'\n'}
				We share news, discuss algorithms,{'\n'}
				flag scammers and suspicious crypto {'\n'}
				projects, help each other spin up {'\n'}
				new masternodes, set up mining {'\n'}
				equipment, discuss trading {'\n'}
				strategies and more!{'\n'}
				{'\n'}
				We are here for the tech.{'\n'}
				Seriously.{'\n'}
				{'\n'}
				Find us on Discord and {'\n'}
				let’s learn together!
			</Text>
			<Text
				style={[
					styles.contentText,
					{ textDecorationLine: 'underline', marginTop: 5 },
				]}
				onPress={() => Linking.openURL('https://discord.gg/TY75KS8UFj')}
			>
				Visit Discord
			</Text>
			<Text
				style={[
					styles.contentText,
					{ textDecorationLine: 'underline', marginTop: 5 },
				]}
				onPress={() =>
					Linking.openURL('https://t.me/joinchat/StKdh9PlvptnYpie')
				}
			>
				Visit Telegram
			</Text>
		</MainScreen>
	);
}

HomeScreen.navigationOptions = {
	header: null,
};

const styles = StyleSheet.create({
	contentText: {
		color: 'white',
		textAlign: 'right',
		fontSize: 11,
		fontFamily: 'Menlo-Regular',
		borderColor: 'white',
		// borderWidth: 1,
		width: '80%',
	},
});

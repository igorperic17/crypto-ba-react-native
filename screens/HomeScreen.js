import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/crypto.png')
                : require('../assets/images/crypto.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>

          <Text style={styles.getStartedText}>
            Lista Crypto.ba servisa
          </Text>
        </View>

        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleGitPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>
              git.crypto.ba
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCloudPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>
              cloud.crypto.ba
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleMarketPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>
              market.crypto.ba
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOfficePress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>
              office.crypto.ba
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          This is a tab bar. You can edit it in:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>
            navigation/MainTabNavigator.js
          </MonoText>
        </View>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function handleGitPress() {
  WebBrowser.openBrowserAsync(
    'https://git.crypto.ba/'
  );
}

function handleCloudPress() {
  WebBrowser.openBrowserAsync(
    'https://cloud.crypto.ba'
  );
}

function handleMarketPress() {
  WebBrowser.openBrowserAsync(
    'https://market.crypto.ba'
  );
}

function handleOfficePress() {
  WebBrowser.openBrowserAsync(
    'https://office.crypto.ba'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 200,
    height: 160,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
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
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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
  helpContainer: {
    marginTop: 15,
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
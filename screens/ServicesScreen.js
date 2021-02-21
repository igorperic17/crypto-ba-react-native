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
import * as Animatable from 'react-native-animatable';
import MainButton from '../components/MainButton';

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

        <View style={styles.typerBackgroundStripe}></View>

        <View style={styles.pageHeaderContainer}>
          <Text style={styles.pageHeaderText}>
            services
          </Text>
        </View>

        <View style={styles.buttonContainer}>

        <MainButton 
          buttonImage={require('../assets/images/icons/forum-image.png')}
          buttonText={'forum'}
          onPressHandler={handleForumPress} />

        <MainButton 
          buttonImage={require('../assets/images/icons/cloud-image.png')}
          buttonText={'cloud'}
          onPressHandler={handleCloudPress} />

        <MainButton 
          buttonImage={require('../assets/images/icons/office-image.png')}
          buttonText={'email'}
          onPressHandler={handleOfficePress} />
        
        <MainButton 
          buttonImage={require('../assets/images/icons/git.png')}
          buttonText={'git'}
          onPressHandler={handleGitPress} />

        </View>
      </ScrollView>

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

function handleForumPress() {
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
    height: 60
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

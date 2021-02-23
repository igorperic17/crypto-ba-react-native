import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import MainButton from '../components/MainButton';
import MainScreen from '../components/MainScreen';

export default function HomeScreen() {
  return (
    <MainScreen screenTitle='services' typewriterText='Connect with crypto enthusiasts'>
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
    </MainScreen>
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
    'https://oblak.crypto.ba'
  );
}

function handleForumPress() {
  WebBrowser.openBrowserAsync(
    'https://crypto.ba'
  );
}

function handleOfficePress() {
  WebBrowser.openBrowserAsync(
    'https://email.crypto.ba'
  );
}
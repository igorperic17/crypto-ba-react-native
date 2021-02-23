import React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MainButton({ buttonImage, buttonText, onPressHandler}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPressHandler}>
            <View style={styles.buttonContentView}>
                <Image source={buttonImage} style={styles.image}></Image>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
   container: {
    // flex: 1,
    margin: 3,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 220,
    borderRadius: 100,
    backgroundColor: 'white',
    shadowColor: 'white',
    shadowRadius: 2,
    shadowOffset: {
        x: 2,
        y: 2
    },
    shadowOpacity: 0.5
   },
   buttonContentView: {
    flex: 1,
    width: '55%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    alignContent: 'center',
    justifyContent: 'center'
   },
   image: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    margin: 5
   },
   buttonText: {
    fontFamily: 'Menlo-Regular',
    textAlign: 'center',
    width: '100%',
    fontSize: 24,
    textAlignVertical: 'center'
   }
});
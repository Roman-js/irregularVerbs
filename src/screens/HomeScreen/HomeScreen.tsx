import React, { FC } from "react";
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import SafeAreaView from 'react-native-safe-area-view';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen: FC = () => {

    return (
        <LinearGradient colors={['#4c669f', '#ccb654', '#FFFFFF']} style={styles.linearGradient}>

            <ImageBackground source={require('../../assets/imgs/wingLeft.png')} style={{ width: 150, height: 150, marginRight: 75 }}>
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                    <Text style={{ color: 'white', fontSize: 24 }}>4</Text>
                </View>
            </ImageBackground>
            <ImageBackground source={require('../../assets/imgs/wingRight.png')} style={{ width: 150, height: 150, marginLeft: 75 }}>
                <View style={{ position: 'absolute', top: 0, right: 0, bottom: 0 }}>
                    <Text style={{ color: 'white', fontSize: 24 }}>3</Text>
                </View>
            </ImageBackground>
            <ImageBackground source={require('../../assets/imgs/wingLeftCompleted.png')} style={{ width: 150, height: 150, marginRight: 75 }}>
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                    <Text style={{ color: 'white', fontSize: 24 }}>2</Text>
                </View>
            </ImageBackground>
            <ImageBackground source={require('../../assets/imgs/wingRightCompleted.png')} style={{ width: 150, height: 150, marginLeft: 75 }}>
                <View style={{ position: 'absolute', top: 0, right: 0, bottom: 0 }}>
                    <Text style={{ color: 'white', fontSize: 24 }}>1</Text>
                </View>
            </ImageBackground>
        </LinearGradient>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#A5F8D3',
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default HomeScreen
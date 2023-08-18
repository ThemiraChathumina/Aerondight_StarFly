import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from "react-native";
import {Stack} from "expo-router";
import Constants from "expo-constants/src/Constants";

const Screen = ({children, style}) => {
    return (
        <View style={[styles.screen, style]}>
            <Stack.Screen options={{ headerShown: false }}/>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    }
});

export default Screen;
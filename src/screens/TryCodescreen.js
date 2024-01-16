import React from "react";
import { View, StyleSheet } from "react-native";

const TryCode = () => {
    return(
        <View style={styles.mainContainer}>
            <View style={styles.secondContainer}>
                <View style={styles.blueBox}></View>
                <View style={styles.redBox}></View>
                <View style={styles.blueBox}></View>
                <View style={styles.blueBox}></View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'skyblue'
    },
    secondContainer: {
        padding: 16,
        margin: 16,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'mistyrose'
    },
    blueBox: {
        backgroundColor: 'blue',
        width: '25%',
        height : '25%',
        borderWidth: 1
    },
    redBox : {
        backgroundColor: 'red',
        width: '25%',
        height: '25%',
        borderWidth: 1
    }
});

export default TryCode;
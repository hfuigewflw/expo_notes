import React, { useState } from "react";
import { View,Text,TextInput,StyleSheet,TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";



export const HeaderComponents= (props) => {
    const { title } = props;

    return (
        <View style={styles.HeaderContainer}>
            

            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity
                style={styles.button}
                {...props}
            >
                <Icon
                    name="check"
                    type="font-awesome-5"
                    size={18}
                />
            </TouchableOpacity>
        </View>
    )
};

export const MainComponent = (props) => {
    const {date} = props;

    return (
        <View style={styles.MainContainer}> 
            <Text style={styles.date}>{date}</Text>
            <TextInput
                multiline
                placeholder="write here"
                style={styles.input}
                {...props}
            />
        </View>
    )
};



const styles = StyleSheet.create({
    MainContainer: {
        flex: 1
    },
    HeaderContainer: {
        padding: 8,
        backgroundColor: 'moccasin',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    title: {
        fontSize: 20,
        fontWeight:'bold',
    },
    button: {
        padding: 8,
    },
    date: {
        paddingTop: 16,
        paddingLeft: 16
    },
    input: {
        fontSize: 16,
        flex: 1,
        paddingRight: 16,
        paddingLeft: 16
    }
})


import React from "react";  
import { StyleSheet, Text, View, Dimensions } from "react-native";

const { height } = Dimensions.get("window")
const { width } = Dimensions.get("window")

interface ButtonProps {
    text: string;
    color?: string;
}

const Button = ({text, color}: ButtonProps) => {
    return (
        <View style = {styles.root}>
            <View style = {[styles.main, {backgroundColor: color? color: "#720d5d"}]}>
                <Text style = {styles.text}>{text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create((
    {
        root: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
        },

        main: {
            borderRadius: Math.min(width/5, height/7)/2,
            height: Math.min(width/5, height/7),
            width: Math.min(width/5, height/7),
            justifyContent: "center",
            alignItems: "center",
        },

        text: {
            color: "white",
            fontFamily: 'Roboto-Light',
            fontSize: Math.min(width/10, height/14),
        }
    }
))

export default Button;

import {SafeAreaView} from "react-native";
import React from "react";

export const Container = ({children}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            {children}
        </SafeAreaView>
    )
}
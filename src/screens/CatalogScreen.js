import React from "react";
import {Button, View} from "react-native";

export const CatalogScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Button onPress={navigation.openDrawer} title="Open navigation drawer" />
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}
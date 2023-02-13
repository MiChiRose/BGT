import React, {memo} from "react";
import {Button, View} from "react-native";

const CatalogScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Button onPress={navigation.openDrawer} title="Open navigation drawer" />
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

export default memo(CatalogScreen);
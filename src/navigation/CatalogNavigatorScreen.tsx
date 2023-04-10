import React from "react";
import {Image, TouchableOpacity, StyleSheet} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import CatalogScreen from "../screens/CatalogScreen";
import CatalogDetailScreen from "../screens/CatalogDetailScreen";
import CatalogProductDetailScreen from "../screens/CatalogProductDetailScreen";
import {Gradient} from "../components/Gradient";
import {Color} from "../constants/color";

const Stack = createStackNavigator();

export const CatalogNavigatorScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={({navigation}) => ({
                    headerBackground: () => <Gradient style={styles.flex}/>,
                    headerLeft: () => (
                        <TouchableOpacity style={styles.drawerButton} onPress={() => navigation.toggleDrawer()}>
                            <Image source={require("../../assets/drawer/drawer_white.png")}/>
                        </TouchableOpacity>
                    ),
                    title: "Каталог",
                    headerTitleStyle: styles.titleStyle
                })}
                name="Catalog"
                component={CatalogScreen}
            />
            <Stack.Screen
                options={({route,navigation}) => ({
                    headerBackground: () => <Gradient style={styles.flex}/>,
                    headerLeft: () => (
                        <TouchableOpacity style={styles.drawerButton} onPress={() => navigation.goBack()}>
                            <Image source={require("../../assets/arrow/arrow_white_back.png")}/>
                        </TouchableOpacity>
                    ),
                    //@ts-ignore
                    title: route.params?.name,
                    headerTitleStyle: styles.titleStyle
                })}
                name="CatalogDetails"
                component={CatalogDetailScreen}
            />
            <Stack.Screen
                options={({route,navigation}) => ({
                    headerBackground: () => <Gradient style={styles.flex}/>,
                    headerLeft: () => (
                        <TouchableOpacity style={styles.drawerButton} onPress={() => navigation.goBack()}>
                            <Image source={require("../../assets/arrow/arrow_white_back.png")}/>
                        </TouchableOpacity>
                    ),
                    //@ts-ignore
                    title: route.params?.name,
                    headerTitleStyle: styles.titleStyle
                })}
                name="CatalogProductDetails"
                component={CatalogProductDetailScreen}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    drawerButton: {
        paddingVertical: 12,
        paddingLeft: 30,
        paddingRight: 12
    },
    titleStyle: {
        color: Color.white,
        fontSize: 20,
        fontWeight: "700",
        width: "100%",
    },
    flex: {flex: 1}
})
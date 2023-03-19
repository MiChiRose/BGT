import React from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import HomeScreen from "../screens/HomeScreen";
import CatalogDetailScreen from "../screens/CatalogDetailScreen";
import {Gradient} from "../components/Gradient";
import {createStackNavigator} from "@react-navigation/stack";
import {Color} from "../constants/color";

const Stack = createStackNavigator();

export const HomeNavigatorScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: "center"
            }}>
            <Stack.Screen
                options={({navigation}) => ({
                    headerBackground: () => <Gradient style={styles.flex}/>,
                    headerLeft: () => (
                        <TouchableOpacity style={styles.drawerButton} onPress={() => navigation.toggleDrawer()}>
                            <Image source={require("../../assets/drawer/drawer_white.png")}/>
                        </TouchableOpacity>
                    ),
                    headerTitle: () => (
                        <View>
                            <Image
                                style={styles.drawerButton}
                                source={require('../../assets/BTGLogo/belgaztechnika_new.png')}
                                resizeMode={'contain'}
                            />
                        </View>
                    ),
                })}
                name="Home"
                component={HomeScreen}
            />
            <Stack.Screen
                options={({route,navigation}) => ({
                    headerBackground: () => <Gradient style={styles.flex}/>,
                    headerLeft: () => (
                        <TouchableOpacity style={styles.drawerButton} onPress={() => navigation.goBack()}>
                            <Image source={require("../../assets/drawer/drawer_white.png")}/>
                        </TouchableOpacity>
                    ),
                    //@ts-ignore
                    title: route.params?.name,
                    headerTitleStyle: styles.titleStyle,
                })}
                name="CatalogDetailsHome"
                component={CatalogDetailScreen}
            />
        </Stack.Navigator>
    )
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
        fontWeight: '700'
    },
    flex: {flex: 1}
})
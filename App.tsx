import React from "react";
import {Image, View, SafeAreaView, Dimensions, Platform, TouchableOpacity, StyleSheet} from "react-native";
import {createDrawerNavigator, DrawerItemList} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import ContactsScreen from "./src/screens/ContactsScreen";
import CatalogScreen from "./src/screens/CatalogScreen";
import {Color} from "./src/constants/color";

const Drawer = createDrawerNavigator();
const screenWidth = Dimensions.get("window").width;
const drawerWidth = screenWidth - 72;

export default function App() {

    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home"
                screenOptions={({navigation}) => ({
                    headerLeft: () => (
                        <TouchableOpacity style={styles.drawerButton} onPress={() => navigation.toggleDrawer()}>
                            <Image source={require("./assets/drawer/drawer.png")}/>
                        </TouchableOpacity>
                    ),
                    drawerStyle: {
                        backgroundColor: Color.mainBlue,
                        width: drawerWidth,
                    },
                })}
                drawerContent={(props) => {
                    return (
                        <SafeAreaView style={styles.container}>
                            <Image
                                style={styles.drawerLogo}
                                source={require('./assets/BTGLogo/belgaztechnika.png')}
                            />
                            <DrawerItemList {...props}/>
                        </SafeAreaView>
                    )
                }}
            >
                <Drawer.Screen
                    name="Home"
                    options={{drawerLabel: "Главная", title: '', drawerLabelStyle: styles.drawerLabelStyle}}
                    component={HomeScreen}
                />
                <Drawer.Screen
                    name="Catalog"
                    options={{drawerLabel: "Каталог", title: 'Каталог', drawerLabelStyle: styles.drawerLabelStyle}}
                    component={CatalogScreen}
                />
                <Drawer.Screen
                    name="Contacts"
                    options={{drawerLabel: "Конакты", title: 'Конакты', drawerLabelStyle: styles.drawerLabelStyle}}
                    component={ContactsScreen}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 12,
        marginTop: Platform.OS === "android" ? 30 : 0
    },
    drawerButton: {
        paddingVertical: 12,
        paddingLeft: 30,
        paddingRight: 12
    },
    drawerLabelStyle: {
        color: 'white',
        fontSize: 18,
    },
    drawerLogo: {
        marginVertical: 30,
        marginLeft: 10
    }
})

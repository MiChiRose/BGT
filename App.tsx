import React from "react";
import {Image, View, SafeAreaView, Dimensions, Platform, TouchableOpacity, StyleSheet} from "react-native";
import {createDrawerNavigator, DrawerItemList} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import ContactsScreen from "./src/screens/ContactsScreen";
import CatalogScreen from "./src/screens/CatalogScreen";
import AboutInfoScreen from "./src/screens/AboutInfoScreen";
import ServicesScreen from "./src/screens/ServicesScreen";
import {Color} from "./src/constants/color";
import {Gradient} from "./src/components/Gradient";

const Drawer = createDrawerNavigator();
const screenWidth = Dimensions.get("window").width;
const drawerWidth = screenWidth - 72;

export default function App() {

    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home"
                screenOptions={({navigation}) => ({
                    headerBackground: () => <Gradient style={styles.flex}/>,
                    headerLeft: () => (
                        <TouchableOpacity style={styles.drawerButton} onPress={() => navigation.toggleDrawer()}>
                            <Image source={require("./assets/drawer/drawer_white.png")}/>
                        </TouchableOpacity>
                    ),
                    drawerStyle: {width: drawerWidth},
                })}
                drawerContent={(props) => {
                    return (
                        <Gradient style={styles.flex}>
                            <SafeAreaView style={styles.container}>
                                <Image
                                    style={styles.drawerLogo}
                                    source={require('./assets/BTGLogo/belgaztechnika_new.png')}
                                    resizeMode={'contain'}
                                />
                                <DrawerItemList {...props}/>
                            </SafeAreaView>
                        </Gradient>
                    )
                }}
            >
                <Drawer.Screen
                    name="Home"
                    options={({navigation}) => ({
                        drawerLabel: "Главная",
                        title: '',
                        headerLeft: () => (
                            <TouchableOpacity style={styles.drawerButton} onPress={() => navigation.toggleDrawer()}>
                                <Image source={require("./assets/drawer/drawer_white.png")}/>
                            </TouchableOpacity>
                        ),
                        headerTitle: () => (
                            <View>
                                <Image
                                    style={styles.drawerButton}
                                    source={require('./assets/BTGLogo/belgaztechnika_new.png')}
                                    resizeMode={'contain'}
                                />
                            </View>
                        ),
                        drawerLabelStyle: styles.drawerLabelStyle,
                        headerTitleStyle: styles.titleStyle,
                    })}
                    component={HomeScreen}
                />
                <Drawer.Screen
                    name="Catalog"
                    options={{
                        drawerLabel: "Каталог",
                        title: 'Каталог',
                        drawerLabelStyle: styles.drawerLabelStyle,
                        headerTitleStyle: styles.titleStyle
                    }}
                    component={CatalogScreen}
                />
                <Drawer.Screen
                    name="Service"
                    options={{
                        drawerLabel: "Услуги",
                        title: 'Услуги',
                        drawerLabelStyle: styles.drawerLabelStyle,
                        headerTitleStyle: styles.titleStyle
                    }}
                    component={ServicesScreen}
                />
                <Drawer.Screen
                    name="AboutInfo"
                    options={{
                        drawerLabel: "О Предприятии",
                        title: 'О предприятии',
                        drawerLabelStyle: styles.drawerLabelStyle,
                        headerTitleStyle: styles.titleStyle
                    }}
                    component={AboutInfoScreen}
                />
                <Drawer.Screen
                    name="Contacts"
                    options={{
                        drawerLabel: "Конакты",
                        title: 'Конакты',
                        drawerLabelStyle: styles.drawerLabelStyle,
                        headerTitleStyle: styles.titleStyle
                    }}
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
    },
    titleStyle: {
        color: Color.white,
        fontSize: 20,
        fontWeight: '700'
    },
    flex: {flex: 1}
})

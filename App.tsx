import {createDrawerNavigator, DrawerItemList} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import {HomeScreen} from "./src/screens/HomeScreen";
import {ContactsScreen} from "./src/screens/ContactsScreen";
import {Image, View, SafeAreaView, Dimensions, Platform, TouchableOpacity} from "react-native";
import {Color} from "./src/constants/color";
import {CatalogScreen} from "./src/screens/CatalogScreen";

const Drawer = createDrawerNavigator();
const screenWidth = Dimensions.get("window").width;
const drawerWidth = screenWidth - 72;

export default function App() {
  const drawerLabelStyle = {
    color: 'white',
    fontSize: 18,
  }

  return (
      <NavigationContainer>
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={({navigation}) => ({
              // headerShown: false,
              headerLeft: () => (
                  <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Image style={{marginLeft: 30}} source={require("./assets/drawer/drawer.png")}/>
                  </TouchableOpacity>
              ),
              drawerStyle: {
                backgroundColor: Color.mainBlue,
                width: drawerWidth,
              },
            })}
            drawerContent={(props) => {
              return (
                  <SafeAreaView style={{flex: 1, marginLeft: 12, marginTop: Platform.OS === "android" ? 30 : 0}}>
                    <Image
                        style={{marginVertical: 30, marginLeft: 10}}
                        source={require('./assets/BTGLogo/belgaztechnika.png')}
                    />
                    <DrawerItemList {...props}/>
                  </SafeAreaView>
              )
            }}
        >
          <Drawer.Screen
              name="Home"
              options={{drawerLabel: "Главная", title: '', drawerLabelStyle: drawerLabelStyle}}
              component={HomeScreen}
          />
          <Drawer.Screen
              name="Catalog"
              options={{drawerLabel: "Каталог", title: 'Каталог', drawerLabelStyle: drawerLabelStyle}}
              component={CatalogScreen}
          />
          <Drawer.Screen
              name="Contacts"
              options={{drawerLabel: "Конакты", title: 'Конакты', drawerLabelStyle: drawerLabelStyle}}
              component={ContactsScreen}
          />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}

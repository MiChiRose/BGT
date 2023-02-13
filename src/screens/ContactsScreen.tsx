import React, {useMemo} from "react";
import {Image, ScrollView, Text, View, StyleSheet} from "react-native";
import {Container} from "../components/Container";
import {MapViewBGTFixed} from "../components/MapViewBGTFixed";
import {contactsData_Phones, contactsData_Address} from "../constants/data";

const MenuItem = ({data, image}) => {
    return (
        <View style={styles.menuItemContainer}>
            {data.map((element, index) => (
                <View style={{marginBottom: 10, flexDirection: 'row'}} key={index}>
                    <View>
                        {index === 0 ? <Image
                            source={image}
                            style={styles.image}
                        /> : <View style={styles.image}/>}
                    </View>
                    <View style={{flex: 1}}>
                        <Text>{element.header}</Text>
                        <Text>{element.title}</Text>
                    </View>
                </View>
            ))}
        </View>
    )
}

export const ContactsScreen = ({navigation}) => {
    return (
        <Container>
            <ScrollView style={{flex: 1}}>
                <MapViewBGTFixed/>
                <MenuItem
                    data={contactsData_Address}
                    image={require("../../assets/address/address.png")}
                />
                <MenuItem
                    data={contactsData_Phones}
                    image={require("../../assets/phone/phone.png")}
                />
            </ScrollView>
        </Container>
    );
}

const styles = StyleSheet.create({
    image: {
        marginRight: 30,
        height: 50,
        width: 50
    },
    menuItemContainer: {
        marginLeft: 25,
        marginRight: 115,
        marginTop: 20,
        flexDirection: 'column'
    }
})
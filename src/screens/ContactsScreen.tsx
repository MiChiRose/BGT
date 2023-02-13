import React, {memo} from "react";
import {Image, ScrollView, Text, View, StyleSheet, ImageProps} from "react-native";
import Container from "../components/Container";
import {MapViewBGTFixed} from "../components/MapViewBGTFixed";
import {contactsData_Phones, contactsData_Address} from "../constants/data";

interface MenuItemProps {
    data: Array<any>;
    image: any;
}
const MenuItem = ({data, image}: MenuItemProps): JSX.Element => {
    return (
        <View style={styles.menuItemContainer}>
            {data.map((element, index) => (
                <View style={styles.dataContainer} key={index}>
                    <View>
                        {index === 0 ? <Image
                            source={image}
                            style={styles.image}
                        /> : <View style={styles.image}/>}
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.textHeader}>{element.header}</Text>
                        <Text style={styles.textTitle}>{element.title}</Text>
                    </View>
                </View>
            ))}
        </View>
    )
}

const ContactsScreen = (): JSX.Element => {
    return (
        <Container>
            <ScrollView style={styles.flex}>
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

export default memo(ContactsScreen);

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
    },
    dataContainer: {
        marginBottom: 10,
        flexDirection: 'row'
    },
    textHeader: {
        fontSize: 14,
        fontWeight: "700"
    },
    textTitle: {
        fontSize: 14,
        fontWeight: "400"
    },
    flex: {
        flex: 1
    }
})
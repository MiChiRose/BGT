import {servicesData} from "../../../constants/data";
import React from "react";
import {Image, Text, View, StyleSheet} from "react-native";
import {Color} from "../../../constants/color";
import {HomeScreenDropdownInfoProps, HomeScreenItemProps} from "../../../constants/types";

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
    },
    itemImage: {
        width: 122,
        height: 85
    },
    itemText: {
        flex: 1,
        fontSize: 16,
        color: Color.detailsButton,
        marginLeft: 18
    }
});


const ItemContainer = ({image, text, last}: HomeScreenItemProps) => {
    return (
        <View style={[styles.itemContainer, {marginBottom: last ? 0 : 20}]}>
            <Image resizeMode={"contain"} source={{uri: image}} style={styles.itemImage}/>
            <Text style={styles.itemText}>
                {text}
            </Text>
        </View>
    )
}

export const HomeScreenDropdownInfo = ({ data }: HomeScreenDropdownInfoProps) => {
    return (
        <View>
            {data.map((item, index) => {
                return (
                    <ItemContainer
                        key={item.id}
                        image={item.image}
                        text={item.title}
                        last={index + 1 === servicesData.length}
                    />
                )
            })}
        </View>
    )
}
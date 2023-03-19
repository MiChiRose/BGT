import {servicesData} from "../../../constants/data";
import React from "react";
import {Image, Text, View, StyleSheet} from "react-native";
import {Color} from "../../../constants/color";

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

type ItemProps = {
    image: string;
    text: string;
    last: boolean;
};

const ItemContainer = ({image, text, last}: ItemProps) => {
    return (
        <View style={[styles.itemContainer, {marginBottom: last ? 0 : 20}]}>
            {/*@ts-ignore*/}
            <Image resizeMode={"contain"} source={image} style={styles.itemImage}/>
            <Text style={styles.itemText}>
                {text}
            </Text>
        </View>
    )
}

type Props = {
    data: {image: string, id: string, title: string}[];
};

export const HomeScreenDropdownInfo = ({ data }: Props) => {
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
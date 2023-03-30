import React, {memo} from "react";
import {Image, Text, TouchableOpacity, StyleSheet, View} from "react-native";
import {Color} from "../../../constants/color";
import {ListItemProductProps, ProductButtonProps} from "../../../constants/types";
import {Gradient} from "../../../components/Gradient";

const ProductButton = ({ disabled, text, onPress}: ProductButtonProps) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={styles.flex}
            activeOpacity={0.8}
        >
            <Gradient style={styles.detailsButton}>
                <Text style={styles.detailsButtonText}>{text}</Text>
            </Gradient>
        </TouchableOpacity>
    )
}

const ListItemProduct = ({
                             image,
                             title,
                             about,
                             pressDetailsButton,
                             pressOrderButton,
                             disabled,
                         }: ListItemProductProps): JSX.Element => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{title}</Text>
            <View style={styles.rowAlign}>
                <Image source={{uri: image}} resizeMode={'contain'} style={styles.imageUrl}/>
                <Text style={{flex: 1}}>{about}</Text>
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.rowAlign}>
                    <ProductButton
                        disabled={disabled ?? false}
                        //@ts-ignore
                        onPress={pressOrderButton}
                        text={"Заказать"}
                    />
                    <View style={styles.spaceBetween}/>
                    <ProductButton
                        disabled={disabled ?? false}
                        //@ts-ignore
                        onPress={pressDetailsButton}
                        text={"Подробнее"}
                    />
                </View>
            </View>
        </View>
    );
}

export default memo(ListItemProduct);

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.listItem,
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginBottom: 15
    },
    header: {
        flex: 1,
        textAlign: "center",
        marginBottom: 15,
        color: Color.detailsButton,
        fontWeight: "500",
        fontSize: 16
    },
    image: {
        flex: 1,
        height: "100%",
        marginRight: 15
    },
    imageUrl: {
        height: 75,
        width: 110,
        marginRight: 15,
    },
    detailsContainer: {
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    detailsButton: {
        flex: 1,
        marginTop: 15,
        backgroundColor: Color.detailsButton,
        paddingVertical: 5,
        borderRadius: 5,
        alignItems: "center"
    },
    detailsButtonText: {
        color: Color.white
    },
    flex: {
        flex: 1
    },
    spaceBetween: {
        marginHorizontal: 5
    },
    rowAlign: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    }
})
import React, {memo} from "react";
import {Image, Text, TouchableOpacity, StyleSheet, View} from "react-native";
import {Color} from "../../../constants/color";
import {ListItemProductProps} from "../../../constants/types";

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
            <Text style={{flex: 1, textAlign: "center", marginBottom: 15}}>{title}</Text>
            <View style={{flex: 1, flexDirection: "row", alignItems: 'center'}}>
                <Image source={{uri: image}} resizeMode={'contain'} style={styles.imageUrl}/>
                <View style={styles.detailsContainer}>
                    <Text style={{flex: 1}}>{about}</Text>
                    <View style={{flex: 1, flexDirection: "row"}}>
                        <TouchableOpacity
                            disabled={disabled}
                            onPress={pressOrderButton}
                            style={styles.detailsButton}
                        >
                            <Text style={styles.detailsButtonText}>Заказать</Text>
                        </TouchableOpacity>
                        <View style={{marginHorizontal: 5}}/>
                        <TouchableOpacity
                            disabled={disabled}
                            onPress={pressDetailsButton}
                            style={styles.detailsButton}
                        >
                            <Text style={styles.detailsButtonText}>Подробнее</Text>
                        </TouchableOpacity>
                    </View>
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
    }
})
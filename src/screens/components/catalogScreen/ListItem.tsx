import React, {memo} from "react";
import {Image, Text, TouchableOpacity, StyleSheet, View} from "react-native";
import {Color} from "../../../constants/color";
import {ListItemProps} from "../../../constants/types";

const ListItem = ({
                      image,
                      title,
                      onPress,
                      pressDetailsButton,
                      disabled,
                      showDetailsButton = false
                  }: ListItemProps): JSX.Element => {

    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.container}>
            <Image source={{uri: image}} resizeMode={'contain'} style={styles.imageUrl}/>
            <View style={styles.detailsContainer}>
                <Text style={{width: '100%'}}>{title}</Text>
                {showDetailsButton &&
                    <TouchableOpacity
                        disabled={false}
                        onPress={pressDetailsButton}
                        style={styles.detailsButton}
                    >
                        <Text style={styles.detailsButtonText}>Подробнее</Text>
                    </TouchableOpacity>
                }
            </View>
        </TouchableOpacity>
    );
}

export default memo(ListItem);

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.listItem,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 20,
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
        marginTop: 15,
        backgroundColor: Color.detailsButton,
        paddingVertical: 5,
        width: "100%",
        borderRadius: 5,
        alignItems: "center"
    },
    detailsButtonText: {
        color: Color.white
    }
})
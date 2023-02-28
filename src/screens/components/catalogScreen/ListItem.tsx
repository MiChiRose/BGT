import React, {memo} from "react";
import {Color} from "../../../constants/color";
import {width} from "../../../constants/deviceParam";
import {Image, Text, TouchableOpacity, StyleSheet, View} from "react-native";

interface ListItemProps {
    image: any,
    title: string,
    onPress?: () => void,
    disabled?: boolean;
    showDetailsButton?: boolean
}
const ListItem = ({image, title, onPress, disabled, showDetailsButton = false}: ListItemProps): JSX.Element => {
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.container}>
            <Image source={image} resizeMode={'contain'} style={styles.image}/>
            <View style={styles.detailsContainer}>
                <Text style={{width: '100%'}}>{title}</Text>
                {showDetailsButton &&
                    <TouchableOpacity
                        disabled={false}
                        onPress={() => {}}
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
        backgroundColor: Color.catalogItem,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        height: (width - 50) / 2,
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginBottom: 15
    },
    image: {
        flex: 1,
        height: '100%',
        marginRight: 15
    },
    detailsContainer: {
        height: "100%",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    detailsButton: {
        marginTop: 15,
        backgroundColor: Color.detailsButton,
        paddingVertical: 5,
        width: '100%',
        borderRadius: 5,
        alignItems: 'center'
    },
    detailsButtonText: {
        color: Color.white
    }
})
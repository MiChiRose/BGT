import React, {memo} from "react";
import {Color} from "../../../constants/color";
import {width} from "../../../constants/deviceParam";
import {Image, Text, TouchableOpacity, StyleSheet, View} from "react-native";

interface CatalogItemProps {
    image: any,
    title: string,
    onPress: () => void,
    disabled?: boolean;
}
const CatalogItem = ({image, title, onPress, disabled}: CatalogItemProps): JSX.Element => {
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.container}>
            <Image source={image} resizeMode={'contain'} style={styles.image}/>
            <Text style={{flex: 1}}>{title}</Text>
        </TouchableOpacity>
    );
}

export default memo(CatalogItem);

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
    }
})
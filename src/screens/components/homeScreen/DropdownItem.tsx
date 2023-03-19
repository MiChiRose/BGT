import React, {memo} from "react";
import {Image, Text, TouchableOpacity, StyleSheet, View} from "react-native";
import {Color} from "../../../constants/color";

interface DropdownProps {
    show: boolean;
    setShow: (val: boolean) => void;
    children: JSX.Element;
    title: string;
}
const DropdownItem = ({show, setShow, children, title}: DropdownProps): JSX.Element => {
    return (
        <View style={{marginBottom: 25}}>
            <TouchableOpacity onPress={() => setShow(!show)} style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Image source={require("../../../../assets/arrow/arrow.png")} style={{transform: [{ rotate: show ? '180deg' : '0deg' }]}}/>
            </TouchableOpacity>
            {show && children}
        </View>
    )
}

export default memo(DropdownItem);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: Color.grey_8F
    },
})
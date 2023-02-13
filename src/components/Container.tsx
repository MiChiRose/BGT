import {SafeAreaView} from "react-native";
import React, {memo} from "react";

interface Props {
    children: any;
}
const Container = ({children}: Props): JSX.Element => {
    return (
        <SafeAreaView style={{flex: 1}}>
            {children}
        </SafeAreaView>
    )
}

export default memo(Container);
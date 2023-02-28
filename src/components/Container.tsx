import React, {memo} from "react";
import {SafeAreaView, StyleSheet} from "react-native";

interface Props {
    children: any;
}

const Container = ({children}: Props): JSX.Element => {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    )
}

export default memo(Container);

const styles = StyleSheet.create({
    container: {flex: 1, marginHorizontal: 25, marginVertical: 30}
})
import React, {memo, useEffect, useState} from "react";
import Container from "../components/Container";
import {Text, StyleSheet, Image} from "react-native";
import {CustomScrollView} from "../components/CustomScrollView";
import {getData} from "../components/data";
import Spinner from "react-native-loading-spinner-overlay";

const AboutInfoScreen = () => {
    const [data, setData] = useState<{image: string, text: string}>();
    const [loading, isLoading] = useState(false);

    const dataLoad = () => {
        isLoading(true);
        getData({mainPath: "main", documentPath: "about"})
            .then((resp) => {
                setData(resp[0]);
                isLoading(false);
            })
            .catch((e) => {
                isLoading(false);
                console.log(e);
            });
    }

    useEffect(() => {
        dataLoad()
    }, []);

    return (
        <Container>
            <CustomScrollView refreshing={loading} refresh={dataLoad}>
                <Image style={styles.image} source={require("../../assets/aboutBgt/aboutBgt.png")}/>
                <Text style={styles.text}>{data?.text}</Text>
            </CustomScrollView>
            <Spinner visible={loading}/>
        </Container>
    )
}

export default memo(AboutInfoScreen);

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: '400'
    },
    image: {
        width: '100%',
        marginBottom: 25
    }
});
import React, {memo} from "react";
import Container from "../components/Container";
import {Text, StyleSheet, Image} from "react-native";
import {aboutCompanyText} from "../constants/data";
import {CustomScrollView} from "../components/CustomScrollView";

const AboutInfoScreen = () => {
    return (
        <Container>
            <CustomScrollView>
                <Image style={styles.image} source={require("../../assets/aboutBgt/aboutBgt.png")}/>
                <Text style={styles.text}>{aboutCompanyText.text}</Text>
            </CustomScrollView>
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
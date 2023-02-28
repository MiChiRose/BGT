import React, {memo} from "react";
import Container from "../components/Container";
import {ScrollView, Text, StyleSheet} from "react-native";
import {aboutCompanyText} from "../constants/data";

const AboutInfoScreen = () => {
    return (
        <Container>
            <ScrollView>
                <Text style={styles.text}>{aboutCompanyText.text}</Text>
            </ScrollView>
        </Container>
    )
}

export default memo(AboutInfoScreen);

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: '400'
    }
});
import React, {memo} from "react";
import Container from "../components/Container";
import {Text, StyleSheet} from "react-native";
import {aboutCompanyText} from "../constants/data";
import {CustomScrollView} from "../components/CustomScrollView";

const AboutInfoScreen = () => {
    return (
        <Container>
            <CustomScrollView>
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
    }
});
import React, {memo} from "react";
import Container from "../components/Container";
import {ScrollView, Text, View} from "react-native";
import {aboutCompanyText} from "../constants/data";

const AboutInfoScreen = () => {
    return (
        <Container>
            <ScrollView style={{marginHorizontal: 25, marginTop: 10}}>
                <Text>{aboutCompanyText.text}</Text>
            </ScrollView>
        </Container>
    )
}

export default memo(AboutInfoScreen)
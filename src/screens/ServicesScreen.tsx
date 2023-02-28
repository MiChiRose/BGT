import React, {memo} from "react";
import {Button, ScrollView, View} from "react-native";
import Container from "../components/Container";
import {servicesData} from "../constants/data";
import ListItem from "./components/catalogScreen/ListItem";

const ServicesScreen = ({ }) => {
    return (
        <Container>
            <ScrollView>
                {servicesData.map(item => (
                    <ListItem
                        key={item.id}
                        title={item.title}
                        image={item.image}
                        disabled={true}
                        showDetailsButton={true}
                    />
                ))}
            </ScrollView>
        </Container>
    );
}

export default memo(ServicesScreen)
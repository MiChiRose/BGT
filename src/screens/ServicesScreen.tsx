import React, {memo} from "react";
import Container from "../components/Container";
import {servicesData} from "../constants/data";
import ListItem from "./components/catalogScreen/ListItem";
import {CustomScrollView} from "../components/CustomScrollView";

const ServicesScreen = ({ }) => {
    return (
        <Container>
            <CustomScrollView>
                {servicesData.map(item => (
                    <ListItem
                        key={item.id}
                        title={item.title}
                        image={item.image}
                        disabled={true}
                        showDetailsButton={true}
                    />
                ))}
            </CustomScrollView>
        </Container>
    );
}

export default memo(ServicesScreen)
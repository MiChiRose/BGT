import React, {memo} from "react";
import Container from "../components/Container";
import {ScrollView} from "react-native";
import CatalogItem from "./components/catalogScreen/CatalogItem";

interface Props {
    data: any;
}
const CatalogDetailScreen = ({data}: Props): JSX.Element => {
    return (
        <Container>
            <ScrollView>
                {data.map((item: any) => {
                    return (
                        <CatalogItem
                            key={item.id}
                            title={item.title}
                            image={item.image}
                            onPress={() => {}}
                        />
                    )
                })}
            </ScrollView>
        </Container>
    )
}

export default memo(CatalogDetailScreen);
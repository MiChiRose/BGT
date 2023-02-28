import React, {memo} from "react";
import Container from "../components/Container";
import {ScrollView} from "react-native";
import CatalogItem from "./components/catalogScreen/ListItem";

interface Props {
    route?: any;
    navigation?: any;
}
const CatalogDetailScreen = ({route, navigation}: Props): JSX.Element => {
    const data = route.params.data;
    return (
        <Container>
            <ScrollView>
                {data?.map((item: any) => {
                    return (
                        <CatalogItem
                            key={item.id}
                            title={item.title}
                            image={item.image}
                            onPress={() => {}}
                            disabled={true}
                        />
                    )
                })}
            </ScrollView>
        </Container>
    )
}

export default memo(CatalogDetailScreen);
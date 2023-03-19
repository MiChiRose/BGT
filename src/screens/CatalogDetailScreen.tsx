import React, {memo} from "react";
import Container from "../components/Container";
import ListItem from "./components/catalogScreen/ListItem";
import {CustomScrollView} from "../components/CustomScrollView";

interface Props {
    route?: any;
    navigation?: any;
}
const CatalogDetailScreen = ({route}: Props): JSX.Element => {
    const data = route.params.data;
    return (
        <Container>
            <CustomScrollView>
                {data?.map((item: any) => (
                    <ListItem
                        key={item.id}
                        title={item.title}
                        image={item.image}
                        onPress={() => {}}
                        disabled={true}
                    />
                ))}
            </CustomScrollView>
        </Container>
    )
}

export default memo(CatalogDetailScreen);
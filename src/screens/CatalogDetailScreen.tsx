import React, {memo} from "react";
import Container from "../components/Container";
import CatalogItem from "./components/catalogScreen/ListItem";
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
                    <CatalogItem
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
import React, {memo} from "react";
import {SafeAreaView} from "react-native";
import Container from "../components/Container";
import {catalogData} from "../constants/data";
import CatalogItem from "./components/catalogScreen/ListItem";
import {CustomScrollView} from "../components/CustomScrollView";

interface Props {
    navigation: any;
}

const CatalogScreen = ({navigation: {navigate}}: Props) => {
    return (
        <Container>
            <SafeAreaView>
                <CustomScrollView>
                    {catalogData.map((item, index) => (
                        <CatalogItem
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            onPress={() => navigate("CatalogDetails", {data: item.data, name: item.title})}
                            disabled={!item.data}
                        />
                    ))}
                </CustomScrollView>
            </SafeAreaView>
        </Container>
    );
}

export default memo(CatalogScreen);
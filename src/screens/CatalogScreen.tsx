import React, {memo} from "react";
import {Button, Dimensions, Image, SafeAreaView, ScrollView, Text, View} from "react-native";
import Container from "../components/Container";
import {width} from "../constants/deviceParam";
import {Color} from "../constants/color";
import {catalogData} from "../constants/data";
import CatalogItem from "./components/catalogScreen/CatalogItem";
import CatalogDetailScreen from "./CatalogDetailScreen";

interface Props {
    navigation: any
}

const CatalogScreen = ({navigation: {navigate}}: Props) => {
    return (
        <Container>
            <SafeAreaView>
                <ScrollView>
                    {catalogData.map((item, index) => (
                        <CatalogItem
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            onPress={() => navigate("CatalogDetails", {data: item.data, name: item.title})}
                            disabled={!item.data}
                        />
                    ))}
                </ScrollView>
            </SafeAreaView>
        </Container>
    );
}

export default memo(CatalogScreen);
import React, {memo} from "react";
import {ScrollView} from "react-native";
import GradientButton from "../components/GradientButton";
import {CarouselHome} from "./components/homeScreen/Carousel";

const buttons = [
    {
        title: "Арматура",
        onPress: () => {
        }
    },
    {
        title: "Приборы и устройства",
        onPress: () => {
        }
    },
    {
        title: "Оборудование для систем газоснабжения",
        onPress: () => {
        }
    },
    {
        title: "Технологическое оборудование для ГНС и АЗС",
        onPress: () => {
        }
    }
]

const HomeScreen = ({}) => {
    return (
        <ScrollView style={{flex: 1, paddingHorizontal: 25, paddingTop: 25}}>
            <CarouselHome/>
            {buttons.map((item, index) => (
                <GradientButton
                    key={index}
                    text={item.title}
                    onPress={item.onPress}
                    style={{marginBottom: 30}}
                />
            ))}
        </ScrollView>
    );
}

export default memo(HomeScreen)
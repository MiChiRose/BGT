import React, {memo, useState} from "react";
import {ScrollView, TouchableOpacity, Text, Image, View} from "react-native";
import GradientButton from "../components/GradientButton";
import {CarouselHome} from "./components/homeScreen/Carousel";
import {Color} from "../constants/color";
import {aboutCompanyText} from "../constants/data";
import Container from "../components/Container";
import DropdownItem from "./components/homeScreen/DropdownItem";

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
];

const HomeScreen = ({}) => {
    const [showServices, setShowServices] = useState<boolean>(false);
    const [showAbout, setShowAbout] = useState<boolean>(false);
    const [showNews, setShowNews] = useState<boolean>(false);

    return (
        <Container>
            <ScrollView>
                <CarouselHome/>
                {buttons.map((item, index) => (
                    <GradientButton
                        key={index}
                        text={item.title}
                        onPress={item.onPress}
                        style={{marginBottom: 30}}
                    />
                ))}
                <DropdownItem
                    title={"Предоставляемые услуги"}
                    show={showServices}
                    setShow={setShowServices}
                    children={
                        <></>
                    }
                />
                <DropdownItem
                    title={"О Компании"}
                    show={showAbout}
                    setShow={setShowAbout}
                    children={
                        <View>
                            <Text>{aboutCompanyText.text}</Text>
                        </View>
                    }
                />
                <DropdownItem
                    title={"Новости"}
                    show={showNews}
                    setShow={setShowNews}
                    children={
                        <></>
                    }
                />
            </ScrollView>
        </Container>
    );
}

export default memo(HomeScreen)
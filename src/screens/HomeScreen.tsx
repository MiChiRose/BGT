import React, {memo, useEffect, useState} from "react";
import {Text} from "react-native";
import GradientButton from "../components/GradientButton";
import {CarouselHome} from "./components/homeScreen/Carousel";
import {aboutCompanyText, catalogData, newsData, servicesData} from "../constants/data";
import Container from "../components/Container";
import DropdownItem from "./components/homeScreen/DropdownItem";
import {CustomScrollView} from "../components/CustomScrollView";
import {HomeScreenDropdownInfo} from "./components/homeScreen/HomeScreenDropdownInfo";
import dataBase from "../../Firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

type Props = {
    navigation: any
}

const HomeScreen = ({navigation: {navigate}}: Props) => {
    const [showServices, setShowServices] = useState<boolean>(false);
    const [showAbout, setShowAbout] = useState<boolean>(false);
    const [showNews, setShowNews] = useState<boolean>(false);

    // useEffect(() => {

    const a = async () => {
        const querySnapshot = await getDocs(collection(dataBase, "contacts"));
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
        });
    }

    useEffect(() => {
        a();
    }, []);
    // }, []);

    const buttons = [
        {
            title: "Арматура",
            onPress: () => navigate("CatalogDetailsHome", {data: catalogData[3].data, name: catalogData[3].title})
        },
        {
            title: "Приборы и устройства",
            onPress: () => navigate("CatalogDetailsHome", {data: catalogData[0].data, name: catalogData[0].title})
        },
        {
            title: "Оборудование для систем газоснабжения",
            onPress: () => navigate("CatalogDetailsHome", {data: catalogData[1].data, name: catalogData[1].title})
        },
        {
            title: "Технологическое оборудование для ГНС и АЗС",
            onPress: () => navigate("CatalogDetailsHome", {data: catalogData[2].data, name: catalogData[2].title})
        }
    ];

    return (
        <Container>
            <CustomScrollView>
                <CarouselHome/>
                <>
                    {buttons.map((item, index) => (
                        <GradientButton
                            key={index}
                            text={item.title}
                            onPress={item.onPress}
                            style={{marginBottom: 30}}
                        />
                    ))}
                </>
                <DropdownItem
                    title={"Предоставляемые услуги"}
                    show={showServices}
                    setShow={setShowServices}
                    children={<HomeScreenDropdownInfo data={servicesData}/>}
                />
                <DropdownItem
                    title={"О Компании"}
                    show={showAbout}
                    setShow={setShowAbout}
                    children={<Text>{aboutCompanyText.text}</Text>}
                />
                <DropdownItem
                    title={"Новости"}
                    show={showNews}
                    setShow={setShowNews}
                    children={<HomeScreenDropdownInfo data={newsData}/>}
                />
            </CustomScrollView>
        </Container>
    );
}

export default memo(HomeScreen)
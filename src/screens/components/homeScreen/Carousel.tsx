import React from "react";
import {Dimensions, Text, View} from "react-native";
import Carousel from 'react-native-reanimated-carousel';
import {useSharedValue} from "react-native-reanimated";
import {PaginationItem} from "./PaginationItem";

const width = Dimensions.get('screen').width

const colors = [
    "#26292E",
    "#899F9C",
    "#B3C680",
    "#5C6265",
    "#F5D399",
    "#F1F1F1",
];
export const CarouselHome = (): JSX.Element => {
    const progressValue = useSharedValue<number>(0)
    return (
        <View style={{marginBottom: 30, borderRadius: 15}}>
        <Carousel
            loop
            pagingEnabled={true}
            snapEnabled={true}
            autoPlay={true}
            autoPlayInterval={5000}
            width={width - 50}
            height={(width - 50) / 2}
            mode="parallax"
            modeConfig={{
                parallaxScrollingScale: 0.9,
                parallaxScrollingOffset: 50,
            }}
            onProgressChange={(_, absoluteProgress) =>
                (progressValue.value = absoluteProgress)
            }
            data={colors}
            scrollAnimationDuration={1000}
            // onSnapToItem={(index:number) => console.log('current index:', index)}
            renderItem={({ index }:{index:number}) => (
                <View
                    style={{
                        backgroundColor: 'red',
                        flex: 1,
                        justifyContent: 'center',
                    }}
                >
                    <Text style={{ textAlign: 'center', fontSize: 30 }}>
                        {index}
                    </Text>
                </View>
            )}
        />
            <View
                style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: 100,
                            alignSelf: "center",
                        }
                }
            >
                {colors.map((backgroundColor, index) => {
                    return (
                        <PaginationItem
                            backgroundColor={backgroundColor}
                            animValue={progressValue}
                            index={index}
                            key={index}
                            length={colors.length}
                        />
                    );
                })}
            </View>
            </View>
    )
}

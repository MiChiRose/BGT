import React from "react";
import {View, Image} from "react-native";
import Carousel from 'react-native-reanimated-carousel';
import {useSharedValue} from "react-native-reanimated";
import {PaginationItem} from "./PaginationItem";
import {width} from "../../../constants/deviceParam";
import {carouselSlots} from "../../../constants/data";
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
                height={(width - 50) / 1.5}
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50,
                }}
                onProgressChange={(_, absoluteProgress) =>
                    (progressValue.value = absoluteProgress)
                }
                data={carouselSlots}
                scrollAnimationDuration={1000}
                renderItem={({item, index}: { item: string, index: number }) => (
                    <View
                        style={{
                            backgroundColor: 'red',
                            flex: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Image
                            style={{width: '100%', flex: 1, backgroundColor: 'blue'}}
                            //@ts-ignore
                            source={item}
                            resizeMode={'cover'}
                        />
                    </View>
                )}
            />
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 50,
                    alignSelf: "center",
                }
                }
            >
                {carouselSlots.map((item, index) => {
                    return (
                        <PaginationItem
                            backgroundColor={"black"}
                            animValue={progressValue}
                            index={index}
                            key={index}
                            length={carouselSlots.length}
                        />
                    );
                })}
            </View>
        </View>
    )
}

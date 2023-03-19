import {ScrollView} from "react-native";

type ScrollViewProps = {
    children: JSX.Element | JSX.Element[];
}

export const CustomScrollView = ({ children }: ScrollViewProps) => {
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            {children}
        </ScrollView>
    );
}
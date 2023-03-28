import {ScrollView,RefreshControl} from "react-native";
import {ScrollViewProps} from "../constants/types";

export const CustomScrollView = ({ children, refresh, refreshing }: ScrollViewProps) => {
    return (
        <ScrollView
            refreshControl={<RefreshControl refreshing={refreshing ? refreshing : false} onRefresh={refresh}/>}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            {children}
        </ScrollView>
    );
}
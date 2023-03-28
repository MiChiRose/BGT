import {ScrollView,RefreshControl} from "react-native";

type ScrollViewProps = {
    children: JSX.Element | JSX.Element[];
    refresh?: () => void;
    refreshing?: boolean
}


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
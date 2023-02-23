import {LinearGradient} from "expo-linear-gradient";
import {StyleProp, ViewStyle} from "react-native";

interface GradientProps {
    children?: any;
    style?: StyleProp<ViewStyle>
}

export const Gradient = ({children, style}: GradientProps): JSX.Element => {
    return (
        <LinearGradient colors={['#0060AB', '#161973']} style={[{flex: 1}, style]}>
            {children}
        </LinearGradient>
    )
}
import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    leftStepNumber: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
    leftImage: { width: 150, height: 150, marginRight: 75 },
    rightStepNumber: { position: 'absolute', top: 0, right: 0, bottom: 0 },
    rightImage: { width: 150, height: 150, marginLeft: 75 },
    textNumber: { color: colors.white, fontSize: 24 }
})
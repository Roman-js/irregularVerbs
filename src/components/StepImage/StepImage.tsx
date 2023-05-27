import React, { FC } from "react";
import { ImageBackground, Text, View } from "react-native";
import { ExerciseType } from "../../types/lessonContentTypes";
import { styles } from "./styles";

type StepImageType = {
    item: ExerciseType[],
    index: number
};

export const StepImage: FC<StepImageType> = ({ item, index }) => {

    const renderStepItemLayout = (item: ExerciseType[], index: number) => {
        if (index % 2) {
            return <ImageBackground
                source={require('../../assets/imgs/wingLeftCompleted.png')}
                style={styles.leftImage}>
                <View style={styles.leftStepNumber}>
                    <Text style={styles.textNumber}>{index}</Text>
                </View>
            </ImageBackground>
        } else {
            return <ImageBackground
                source={require('../../assets/imgs/wingRightCompleted.png')}
                style={styles.rightImage}>
                <View style={styles.rightStepNumber}>
                    <Text style={styles.textNumber}>{index}</Text>
                </View>
            </ImageBackground>
        };
    };

    return <>
        {renderStepItemLayout(item, index + 1)}
    </>
};
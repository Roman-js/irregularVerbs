import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC, useCallback } from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { HomeTabParamList } from "../../navigations/HomeNavigation/HomeTab";
import { setCurrentLessonAction, setCurrentStepAction } from "../../store/actions/actions";
import { STATUSSTEP } from "../../types/commonTypes";
import { ExerciseType } from "../../types/lessonContentTypes";
import { StepNumber } from "../StepNumber/StepNumber";
import { styles } from "./styles";

type StepImageType = {
    item: ExerciseType[],
    index: number,
    availableStep: number
};

export const StepImage: FC<StepImageType> = ({ item, index, availableStep }) => {

    const modifyIndex = index + 1;

    const navigation = useNavigation<StackNavigationProp<HomeTabParamList>>();
    const dispatch = useDispatch();

    const goToLessonScreen = useCallback(() => {
        dispatch(setCurrentLessonAction(item));
        dispatch(setCurrentStepAction(modifyIndex));
        navigation.navigate('LessonScreen');
    }, [navigation])

    const getStatus =
        availableStep === modifyIndex ? STATUSSTEP.ACTIVE
            : availableStep > modifyIndex ? STATUSSTEP.COMPLETED
                : STATUSSTEP.DISABLED

    const renderStepItemLayout = (index: number, availableStep: number) => {

        const isLeftPosition = index % 2;

        if (isLeftPosition) {
            if (getStatus === STATUSSTEP.ACTIVE) {
                return <ImageBackground
                    source={require('../../assets/imgs/wingLeftCurrent.png')}
                    style={styles.leftImage}>
                    <StepNumber
                        position={isLeftPosition}
                        stepNumber={index}
                        status={getStatus}
                    />
                </ImageBackground>
            }
            else if (getStatus === STATUSSTEP.COMPLETED) {
                return <ImageBackground
                    source={require('../../assets/imgs/wingLeftCompleted.png')}
                    style={styles.leftImage}>
                    <StepNumber
                        position={isLeftPosition}
                        stepNumber={index}
                        status={getStatus}
                    />
                </ImageBackground>
            } else {
                return <ImageBackground
                    source={require('../../assets/imgs/wingLeft.png')}
                    style={styles.leftImage}>
                    <StepNumber
                        position={isLeftPosition}
                        stepNumber={index}
                        status={getStatus}
                    />
                </ImageBackground>
            };
        } else {
            if (getStatus === STATUSSTEP.ACTIVE) {
                return <ImageBackground
                    source={require('../../assets/imgs/wingRightCurrent.png')}
                    style={styles.rightImage}>
                    <StepNumber
                        position={isLeftPosition}
                        stepNumber={index}
                        status={getStatus}
                    />
                </ImageBackground>
            }
            if (getStatus === STATUSSTEP.COMPLETED) {
                return <ImageBackground
                    source={require('../../assets/imgs/wingRightCompleted.png')}
                    style={styles.rightImage}>
                    <StepNumber
                        position={isLeftPosition}
                        stepNumber={index}
                        status={getStatus}
                    />
                </ImageBackground>
            } else {
                return <ImageBackground
                    source={require('../../assets/imgs/wingRight.png')}
                    style={styles.rightImage}>
                    <StepNumber
                        position={isLeftPosition}
                        stepNumber={index}
                        status={getStatus}
                    />
                </ImageBackground>
            };
        };
    };

    return (
        <TouchableOpacity
            onPress={goToLessonScreen}
            disabled={getStatus === STATUSSTEP.DISABLED}>
            {renderStepItemLayout(modifyIndex, availableStep)}
        </TouchableOpacity>
    )
};
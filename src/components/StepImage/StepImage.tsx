import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC, useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import StepLeft from "../../assets/svg/steps/StepLeft";
import StepRight from "../../assets/svg/steps/StepRight";
import { colors } from "../../constants/colors";
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

    const renderStepItemLayout = (index: number) => {

        const isLeftPosition = index % 2;

        const stepColor =
            getStatus === STATUSSTEP.ACTIVE ? colors.active
                : getStatus === STATUSSTEP.COMPLETED ? colors.completed
                    : colors.disabled

        const step = isLeftPosition
            ? <StepLeft style={styles.leftImage} color={stepColor} />
            : <StepRight style={styles.rightImage} color={stepColor} />;

        return (
            <>
                <StepNumber
                    position={isLeftPosition}
                    stepNumber={index}
                    status={getStatus}
                />
                {step}
            </>
        )
    };

    return (
        <TouchableOpacity
            onPress={goToLessonScreen}
            disabled={getStatus === STATUSSTEP.DISABLED}>
            {renderStepItemLayout(modifyIndex)}
        </TouchableOpacity>
    )
};
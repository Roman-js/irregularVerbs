import React, { FC } from "react";
import { ImageBackground} from "react-native";
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

    const renderStepItemLayout = (item: ExerciseType[], index: number, availableStep: number) => {

        const getStatus =
        availableStep === index ? STATUSSTEP.ACTIVE
                : availableStep > index ? STATUSSTEP.COMPLETED
                    : STATUSSTEP.DISABLED

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

    return <>
        {renderStepItemLayout(item, index + 1, availableStep)}
    </>
};
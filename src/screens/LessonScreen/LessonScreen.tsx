import React from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "../../store/store";
import { useTranslation } from 'react-i18next';
import { ImageBackground, Text } from "react-native";
import { styles } from "./styles";

export const LessonScreen = () => {

    const { currentLesson } = useSelector((state: AppStateType) => state.home);

    const { t } = useTranslation();

    return (
            <ImageBackground
                source={require('../../assets/imgs/lessonBackground.jpg')}
                style={styles.wrapper}
            >
                <Text>{t('Test.wordTest')}</Text>
            </ImageBackground>
    )
}
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "../../store/store";
import { useTranslation } from 'react-i18next';
import { ImageBackground, Text } from "react-native";
import { styles } from "./styles";
import { locale } from "../../utils/locale";
import { verbContent } from "../../constants/verbContent";
import { VerbType } from "../../types/lessonContentTypes";

export const LessonScreen = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const { currentLesson } = useSelector((state: AppStateType) => state.home);
    const {verbid, form} = currentLesson[currentQuestion];

    //12
    const activeQuestion: VerbType = verbContent.find((question)=>question.verbid === verbid) || verbContent[0];

    //@ts-ignore
    const formWord = activeQuestion[`v${form}`];
    const translation = activeQuestion[locale];

    console.log('question', activeQuestion);
    console.log('currentLesson', currentLesson);
    

    const { t } = useTranslation();
    {/* <Text>{t('Test.wordTest')}</Text> */}

    return (
            <ImageBackground
                source={require('../../assets/imgs/lessonBackground.jpg')}
                style={styles.wrapper}
            >
                <Text>{formWord}</Text>
                <Text>{translation}</Text>
                
            </ImageBackground>
    )
}
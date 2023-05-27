import React, { FC } from "react";
import { FlatList } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { lessonContent } from "../../constants/lessonContent";
import { StepImage } from "../../components/StepImage/StepImage";
import { colors } from "../../constants/colors";
import { styles } from "./styles";

export const HomeScreen: FC = () => {

    return (
        <LinearGradient colors={colors.firstArrayOfGradients} style={styles.linearGradient}>
            <FlatList
                style={{ marginHorizontal: 20 }}
                keyExtractor={(item, index) => index.toString()}
                data={lessonContent}
                inverted={true}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) =>
                    <StepImage item={item} index={index} />
                }
            />
        </LinearGradient>
    )
};
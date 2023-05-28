import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import LeftChevronIcon from "../../assets/svg/LeftChevronIcon";
import SoundIcon from "../../assets/svg/SoundIcon";
import NoSoundIcon from "../../assets/svg/NoSoundIcon";
import { HomeTabParamList } from "../../navigations/HomeNavigation/HomeTab";
import { AppStateType } from "../../store/store";
import Typography from "../Typography";
import { styles } from "./styles";
import { setSoundAvailableAction } from "../../store/actions/actions";

export const LessonHeader = () => {

    const navigation = useNavigation<StackNavigationProp<HomeTabParamList>>();
    const dispatch = useDispatch();

    const state = useSelector((state: AppStateType) => state);
    const { currentStep } = state.home;
    const { soundAvailable } = state.lesson;

    const goToThePrevPage = () => {
        navigation.goBack()
    };

    const onPressSoundSwitcher = () => {
        dispatch(setSoundAvailableAction());
    };

    const soundIcon = soundAvailable ? <SoundIcon /> : <NoSoundIcon />;

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity onPress={goToThePrevPage}>
                <LeftChevronIcon
                    style={styles.backIcon} />
            </TouchableOpacity>
            <Typography.H1 style={styles.title}>
                {currentStep}
            </Typography.H1>
            <TouchableOpacity onPress={onPressSoundSwitcher}>
                {soundIcon}
            </TouchableOpacity>
        </View>
    )
};
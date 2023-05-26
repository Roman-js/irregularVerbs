import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";

export type HomeTabParamList = {
    HomeScreen?: {}
}

const HomeTab = () => {

    const HomeTabStack = createStackNavigator<HomeTabParamList>();

    return (
        <HomeTabStack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
            <HomeTabStack.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
        </HomeTabStack.Navigator>
    )
};

export default HomeTab
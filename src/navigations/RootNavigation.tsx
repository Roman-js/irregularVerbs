import React, { FC, memo } from 'react';

import {
    NavigationContainer,
    NavigatorScreenParams
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab, { HomeTabParamList } from './HomeNavigation/HomeTab';
import ProfileTab, { ProfileTabParamList } from './ProfileNavigation/ProfileTab';
import { Image } from 'react-native';
import Typography from '../components/Typography'
import { colors } from '../constants/colors';

export type TabStackParamList = {
    Home: NavigatorScreenParams<HomeTabParamList>;
    Profile: NavigatorScreenParams<ProfileTabParamList>
};

const Router: FC = () => {

    const Tab = createBottomTabNavigator<TabStackParamList>();

    const styleTabLabel = (focused: boolean) =>
    focused ? colors.peach : colors.darkGrey;

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarHideOnKeyboard: true,
                }}
            >
                <Tab.Screen
                    name='Home'
                    component={HomeTab}
                    options={{
                        tabBarLabelPosition: 'below-icon',
                        tabBarLabel: ({ focused }) => (
                          <Typography.H3 style={{ color: styleTabLabel(focused) }}>
                            Home
                          </Typography.H3>
                        ),
                        tabBarIcon: ({ focused }) => (
                            focused
                            ? <Image
                            source={require('../assets/tabs/homeColor.gif')}  
                            style={{width: 30, height: 30 }}
                           />
                           : <Image
                           source={require('../assets/tabs/homeColorStatic.png')}  
                           style={{width: 30, height: 30 }}
                          />
                        ),
                        //tabBarStyle: { display: hideTabNavigation ? "none" : "flex" }
                      }}
                />

                <Tab.Screen
                    name='Profile'
                    component={ProfileTab}
                    options={{
                        tabBarLabelPosition: 'below-icon',
                        tabBarLabel: ({ focused }) => (
                          <Typography.H3 style={{ color: styleTabLabel(focused) }}>
                            Profile
                          </Typography.H3>
                        ),
                        tabBarIcon: ({ focused }) => (
                            focused
                            ? <Image
                            source={require('../assets/tabs/settings.gif')}  
                            style={{width: 30, height: 30 }}
                           />
                           : <Image
                           source={require('../assets/tabs/settingsStatic.png')}  
                           style={{width: 30, height: 30 }}
                          />
                        ),
                        //tabBarStyle: { display: hideTabNavigation ? "none" : "flex" }
                      }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
};

export default memo(Router)


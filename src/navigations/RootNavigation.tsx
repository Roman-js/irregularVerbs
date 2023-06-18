import React, {FC, memo} from 'react';

import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab, {HomeTabParamList} from './HomeNavigation/HomeTab';
import ProfileTab, {ProfileTabParamList} from './ProfileNavigation/ProfileTab';
import {Image} from 'react-native';
import Typography from '../components/Typography';
import {navRef} from '../utils/rootNav';
import {useRootNavigation} from './hooks/useRootNavigation';
import {styles} from './styles/styles';
import { SplashScreen } from '../screens/SplashScreen/SplashScreen';

export type TabStackParamList = {
  Home: NavigatorScreenParams<HomeTabParamList>;
  Profile: NavigatorScreenParams<ProfileTabParamList>;
};

const Router: FC = () => {
  const Tab = createBottomTabNavigator<TabStackParamList>();
  const {
    setHideTabNavigation,
    styleTabLabel,
    hideTabNavigation,
    styleTabIcon,
    loading,
    setIsLoading,
  } = useRootNavigation();

  if (loading) return(
    <SplashScreen setIsLoading={setIsLoading}/>
  )

  return (
    <NavigationContainer ref={navRef} onStateChange={setHideTabNavigation}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeTab}
          options={{
            tabBarLabelPosition: 'below-icon',
            tabBarLabel: ({focused}) => (
              <Typography.H3 style={{color: styleTabLabel(focused)}}>
                Home
              </Typography.H3>
            ),
            tabBarIcon: ({focused}) => (
              <Image
                source={styleTabIcon(focused, 'Home')}
                style={styles.tabStyle}
              />
            ),
            tabBarStyle: {display: hideTabNavigation ? 'none' : 'flex'},
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileTab}
          options={{
            tabBarLabelPosition: 'below-icon',
            tabBarLabel: ({focused}) => (
              <Typography.H3 style={{color: styleTabLabel(focused)}}>
                Profile
              </Typography.H3>
            ),
            tabBarIcon: ({focused}) => (
              <Image
                source={styleTabIcon(focused, 'Profile')}
                style={styles.tabStyle}
              />
            ),
            tabBarStyle: {display: hideTabNavigation ? 'none' : 'flex'},
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default memo(Router);

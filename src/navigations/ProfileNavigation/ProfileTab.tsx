import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProfileScreen} from '../../screens/ProfileScreen/ProfileScreen';

export type ProfileTabParamList = {
  ProfileScreen?: {};
};

const ProfileTabStack = createStackNavigator<ProfileTabParamList>();

const ProfileTab = () => {
  return (
    <ProfileTabStack.Navigator>
      <ProfileTabStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </ProfileTabStack.Navigator>
  );
};

export default ProfileTab;

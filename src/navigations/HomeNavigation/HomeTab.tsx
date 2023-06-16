import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../../screens/HomeScreen/HomeScreen';
import {LessonScreen} from '../../screens/LessonScreen/LessonScreen';
import {LessonHeader} from '../../components/LessonHeader/LessonHeader';

export type HomeTabParamList = {
  HomeScreen?: {};
  LessonScreen?: {};
};

const HomeTab = () => {
  const HomeTabStack = createStackNavigator<HomeTabParamList>();

  return (
    <HomeTabStack.Navigator>
      <HomeTabStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeTabStack.Screen
        name="LessonScreen"
        component={LessonScreen}
        options={{
          header: () => <LessonHeader />,
        }}
      />
    </HomeTabStack.Navigator>
  );
};

export default HomeTab;

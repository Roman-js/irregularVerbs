import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../../screens/HomeScreen/HomeScreen';
import {LessonScreen} from '../../screens/LessonScreen/LessonScreen';
import {LessonHeader} from '../../components/LessonHeader/LessonHeader';
import {LevelCompletedScreen} from '../../screens/LevelCompletedScreen/LevelCompletedScreen';

export type HomeTabParamList = {
  HomeScreen?: {};
  LessonScreen?: {};
  LevelCompletedScreen?: {};
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
      <HomeTabStack.Screen
        name="LevelCompletedScreen"
        component={LevelCompletedScreen}
        options={{
          header: () => <LessonHeader />,
        }}
      />
    </HomeTabStack.Navigator>
  );
};

export default HomeTab;

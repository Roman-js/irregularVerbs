import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import {LessonHeader} from '../LessonHeader';

it('Lesson Header snapShot', () => {
  const snap = renderer.create(<LessonHeader />).toJSON();
  expect(snap).toMatchSnapshot();
});

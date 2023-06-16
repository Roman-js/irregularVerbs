import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import {StepImage} from '../StepImage';

it('Step Image snapShot', () => {
  const snap = renderer
    .create(
      <StepImage
        item={[
          {
            verbid: 1,
            form: 2,
          },
        ]}
        index={1}
        availableStep={2}
      />,
    )
    .toJSON();
  expect(snap).toMatchSnapshot();
});

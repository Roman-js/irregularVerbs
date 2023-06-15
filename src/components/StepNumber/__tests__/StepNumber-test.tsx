import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import { StepNumber } from '../StepNumber';
import { STATUSSTEP } from '../../../types/commonTypes';

it('Home Screen snapShot', () => {
  const snap = renderer.create(
    <StepNumber
      position={1}
      status={STATUSSTEP.ACTIVE}
      stepNumber={1} />
  ).toJSON();
  expect(snap).toMatchSnapshot();
});

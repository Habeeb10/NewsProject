// components/__tests__/Hello.tsx
import React from 'react';
import renderer from 'react-test-renderer';
import Navigator from '../src/navigation/navigation';
it('renders correctly with defaults', () => {
  const button = renderer.create(<Navigator />).toJSON();
  expect(button).toMatchSnapshot();
});

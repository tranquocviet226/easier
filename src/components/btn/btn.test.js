import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Btn from './Btn';

test('disabled button on click', () => {
  const button = render(<Btn />).getByTestId('useless-button');

  expect(button.disabled).toBeFalsy();

  fireEvent.click(button, {button: 1});

  expect(button.disabled).toBeTruthy();
});
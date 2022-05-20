import React from 'react';
import { render, screen } from '@testing-library/react';
import AppOld from './AppOld';

test('renders learn react link', () => {
  render(<AppOld />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

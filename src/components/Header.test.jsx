// src/components/Header.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders welcome message', () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/Welcome to Eris Web App/i);
  expect(linkElement).toBeInTheDocument();
});

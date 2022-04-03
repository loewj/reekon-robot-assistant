import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the robot map component
jest.mock("./components/RobotMap/RobotMap", () => ({ RobotMap: () => <></> }));

test('renders app', () => {
  render(<App />);
  const appEl = screen.getByTestId('app');
  expect(appEl).toBeInTheDocument();
});

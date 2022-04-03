import React from 'react';
import { render, screen } from '@testing-library/react';
import {Nav} from './Nav';

it('renders nav', () => {
    render(<Nav />);
    expect(screen.getByTestId('nav')).toBeInTheDocument();
});

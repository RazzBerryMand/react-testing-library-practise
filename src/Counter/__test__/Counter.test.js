/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import Counter from '../Counter';
import { render } from '@testing-library/react';

test('header renders with correct text', () => {
    // const view = render(<Counter />);
    // const headerEl = view.getByTestId("header");

    const { getByTestId } = render(<Counter/>);
    const headerEl = getByTestId('header');

    expect(headerEl.textContent).toBe('My Counter');
})
import 'jsdom-global/register';
import '@testing-library/jest-dom';

import React from 'react';
import {
    cleanup,
    render,
    screen,
} from '@testing-library/react';

import RomanOutputText from './RomanOutputText';

afterEach(cleanup);

describe('Test the Roman Numeral Output', () => {
    it('should test the message', () => {
        const message = {
            input: '123',
            output: 'CXXIII'
        };
        render(<RomanOutputText message={message} />);
        expect(screen.getByTestId('text-section-el')).toHaveTextContent('Roman numeral: CXXIII');
    });

    it('should test the message', () => {
        const message = {};
        render(<RomanOutputText message={message} />);
        expect(screen.getByTestId('text-section-el')).not.toHaveValue('Roman numeral');
    });
});
import 'jsdom-global/register';
import '@testing-library/jest-dom';

import React from 'react';
import { Provider, defaultTheme } from "@adobe/react-spectrum";
import {
    cleanup,
    fireEvent,
    render,
    screen,
    waitFor
} from '@testing-library/react';

import NumberInput from './NumberInput';

afterEach(cleanup);

jest.mock('@adobe/react-spectrum', () => ({
    Button: ({ children, ...props }) => <button {...props}>{children}</button>,
    Provider: ({ children }) => <div>{children}</div>,
    defaultTheme: {},
}));

describe('Test the NumberInput Component', () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Reset mocks before each test
    });

    it('should render the NumberInput component without crashing', () => {
        render(
            <NumberInput />
        );
    });

    it('should render the "input" element correctly', () => {
        const { getByText, getByTestId } = render(
            <NumberInput />
        );
        const inputEl = getByTestId("number-input-elem");

        expect(getByText('Enter a number')).toBeInTheDocument();

        fireEvent.change(inputEl, { target: { value: "123" } });
        expect(inputEl.value).toBe("123");
    });

    it ('should render the "button" correctly initially', () => {
        const { getByText, getByTestId } = render(
                <NumberInput />
        );
        const btn = getByTestId('convert-btn');
        expect(getByText('Covert to roman numeral')).toBeInTheDocument();
        expect(btn).toBeDisabled(); // Button should be enabled initially before typing the input
    });

    it("should enable the button when input is filled", () => {
        render(
            <NumberInput />
        );
        const input = screen.getByTestId("number-input-elem");
        const button = screen.getByTestId("convert-btn");

        // Simulate user typing in input field
        fireEvent.change(input, { target: { value: "123" } });

        // Button should be enabled after input
        expect(button).toBeEnabled();
    });

    it("should call the API and update the roman text on button click", async () => {
        render(
            <NumberInput />
        );

        const input = screen.getByTestId("number-input-elem");
        const button = screen.getByTestId("convert-btn");

        // Mock the fetch response
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve({ input: '123', output: "CXXIII" }),
            })
        );

        // Simulate user input
        fireEvent.change(input, { target: { value: "123" } });
        fireEvent.click(button);

        await waitFor(() => {
            expect(fetch).toHaveBeenCalledTimes(1);
            expect(fetch).toHaveBeenCalledWith("/romannumeral?query=123");
        });

        // Ensure the UI updates with the response
        expect(await screen.findByText("Roman numeral: CXXIII")).toBeInTheDocument();
    });

    it("should call the API and update the roman text on button click", async () => {
        render(
            <NumberInput />
        );

        const input = screen.getByTestId("number-input-elem");
        const button = screen.getByTestId("convert-btn");

        // Mock the fetch response
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: false,
                json: () => Promise.resolve({ error: 'Please enter a valid number in the range of 1-3999.' }),
            })
        );

        // Simulate user input
        fireEvent.change(input, { target: { value: "9000" } });
        fireEvent.click(button); // Simulate user click

        await waitFor(() => {
            expect(fetch).toHaveBeenCalledWith("/romannumeral?query=9000");
        });

        // Ensure the Roman text section is empty
        expect(screen.getByTestId("text-section-el")).not.toHaveValue('Roman numeral');
    });
});

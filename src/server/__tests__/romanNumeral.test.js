import { romanNumeralConvertor } from "../utils/romanNumeralConverter.mjs";

describe('Testing the roman numeral util function', () => {
    it ('Should have the string length of zero', () => {
        const output = romanNumeralConvertor();
        expect(output).toHaveLength(0);
    });

    it ('Should output an empty string if the argument passed is null', () => {
        const output = romanNumeralConvertor(null);
        expect(output).toHaveLength(0);
    });

    it ('Should output an empty string if entered an invalid input', () => {
        const output = romanNumeralConvertor('test_string');
        expect(output).toEqual('');
    });

    it ('Should output a valid roman numeral', () => {
        const output = romanNumeralConvertor(123);
        expect(output).toEqual('CXXIII');
    });
});

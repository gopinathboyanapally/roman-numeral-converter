import { romanNumeralConvertor } from '../utils/romanNumeralConverter.mjs';

export const getQueryNumeral = (req, res) => {
    const queryParam = req.query;

    // If empty query string, then return 400.
    if (Object.keys(queryParam).length === 0 || queryParam.query === '') {
        return res.status(400).send({
            error: 'The number shouldn\'t be empty.'
        });
    }

    // If the value entered is not a valid number or outside of the range 1-3999, then return 400.
    if (
        isNaN(parseInt(queryParam.query, 10))
        || (queryParam.query < 1 || queryParam.query > 3999)
    ) {
        return res.status(400).send({
            error: 'Please enter a valid number in the range of 1-3999.'
        });
    }

    // Utility function to accept numbers and return a roman numeral.
    const romanNumeral = romanNumeralConvertor(parseInt(queryParam.query, 10));

    return res.status(200).send({
        input: queryParam.query,
        output: romanNumeral
    });
}
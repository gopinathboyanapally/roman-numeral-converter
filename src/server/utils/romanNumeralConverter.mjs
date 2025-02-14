/**
 * Converts a number to a Roman numeral.
 * Follows standard Roman numeral rules (1 - 3999).
 * @param {number} num - The number to convert (1-3999).
 * @returns {string} The corresponding Roman numeral.
 * @see https://en.wikipedia.org/wiki/Roman_numerals
 */

export const romanNumeralConvertor = (num) => {
    if (!num) return '';
    if (isNaN(parseInt(num, 10))) return '';

    const valueSymbols = [
        [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
        [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
        [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ];

    let result = '';
  
    for (const [value, symbol] of valueSymbols) {
        if (num === 0) break; // Break out of the loop if num is 0
        const count = Math.floor(num / value); // Divide the number by value in the array to check how many times the roman numeral fits.
        result += symbol.repeat(count); // Using the Javascript String.prototype.repeat() to add the symbol 'count' times to result.
        num = num % value; // Reminder of the number and update the number
    }
  
    return result;    
};

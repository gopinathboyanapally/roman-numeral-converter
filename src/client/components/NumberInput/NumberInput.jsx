import React, { useState } from 'react';
// import { Provider, defaultTheme, TextField } from '@adobe/react-spectrum'
import RomanOutputText from '../RomanNumeral/RomanOutputText';

const NumberInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [successMessage, setMessage] = useState({});

    const handleChange = (value) => {
        setInputValue(value);
        if (value === '') {
            setMessage({});
        }
    };

    const handleClick = async () => {
        await fetch(`/romannumeral?query=${inputValue}`) 
        .then(async response => {
            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.error || `Error ${response.status}: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            setMessage(data)
        })
        .catch(error => alert(error.message));
    };

    return (
        <div className="input-section">
            <label htmlFor="number-input">Enter a number</label>
            {/* <TextField
                label="Enter a number"
                type="number"
                id="number-input"
                data-testid="number-input-elem"
                value={inputValue ? inputValue : ''}
                onChange={handleChange}
            /> */}
            <input
                type="number"
                id="number-input"
                data-testid="number-input-elem"
                value={inputValue}
                onChange={(e) => handleChange(e.target.value)}
            />
            <button
                disabled={inputValue.length === 0}
                onClick={handleClick}
                data-testid="convert-btn"
            >
                Covert to roman numeral
            </button>
            { inputValue.length > 0 && <RomanOutputText message={successMessage} /> }
        </div>
    );
};

export default NumberInput;
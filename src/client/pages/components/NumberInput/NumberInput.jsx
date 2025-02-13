import React, { useState } from 'react';
import RomanOutputText from '../RomanNumeral/RomanOutputText';

const NumberInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [successMessage, setMessage] = useState({});

    const handleChange = (event) => {
        setInputValue(event.target.value);
        if (event.target.value === '') {
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
        .then(data => setMessage(data))
        .catch(error => alert(error.message));
    };

    return (
        <div className="input-section">
            <label htmlFor="number-input">Enter a number</label>
            <input type="number" id="number-input" value={inputValue} onChange={handleChange} />
            <button
                disabled={inputValue.length === 0}
                onClick={handleClick}
            >
                Covert to roman numeral
            </button>
            { inputValue.length > 0 && <RomanOutputText message={successMessage} /> }
        </div>
    );
};

export default NumberInput;
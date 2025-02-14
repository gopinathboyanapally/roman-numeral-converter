import React, { useState } from 'react';
import RomanOutputText from '../RomanNumeral/RomanOutputText';
import Modal from "../common/Modal";

const NumberInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [successMessage, setMessage] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (value) => {
        setInputValue(value);
        if (value === '') {
            setMessage({});
        }
    };

    // Fetch request to GET the Roman Numeral on click
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
            setMessage(data);
        })
        .catch(error => {
            setIsModalOpen(true);
            setErrorMessage(error.message);
        });
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') { // Trigger the handleClick on Enter
            handleClick();
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setErrorMessage('');
    }

    return (
        <div className="input-section">
            <Modal isOpen={isModalOpen} onClose={closeModal} title="Error">
                <p>{ errorMessage }</p>
            </Modal>
            <label htmlFor="number-input">Enter a number</label>
            <input
                type="number"
                id="number-input"
                data-testid="number-input-elem"
                value={inputValue}
                onChange={(e) => handleChange(e.target.value)}
                onKeyDown={e => handleKeyPress(e)}
            />
            <button
                disabled={inputValue.length === 0}
                onClick={handleClick}
                data-testid="convert-btn"
                className="roman-convert-btn"
            >
                Covert to roman numeral
            </button>
            { inputValue.length > 0 && <RomanOutputText message={successMessage} /> }
        </div>
    );
};

export default NumberInput;
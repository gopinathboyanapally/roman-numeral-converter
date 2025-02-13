import React from 'react';

const RomanOutputText = ({ message }) => {
    return (
        <p className="text-section">
            {Object.keys(message).length > 0 ? `Roman numeral: ${message.output}` : ''}
        </p> 
    );
};

export default RomanOutputText;
import React, { useState } from 'react';
import './three.css';

function Three() {
    const [input, setInput] = useState('');

    return (
        <div className="three-container">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="three-input"
            />
            <p className="three-paragraph">
                User Input: {input}
            </p>
        </div>
    );
}

export default Three;
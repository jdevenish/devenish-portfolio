/*
 * React & Bootstrap Imports
 */
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

/*
 * CSS Files
 */
import '../scss/Terminal.scss'

function Terminal() {
    const [close, setClose] = useState(false)

    const onClose = () => {

        setClose(!close);
    };

    return (
        <div className={close ? "terminal__closed" : "terminal"}>
            <div className="terminal--header">
                <div>
                    <div
                        onClick={onClose}
                        className="close-icon"/>
                    <div className="minimize-icon"/>
                    <div className="expand-icon"/>
                </div>
            </div>
            <div className="terminal--body">
                <p>justin-devenish.com % </p>
            </div>
        </div>
    );
}

export default Terminal;

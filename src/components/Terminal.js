/*
 * React & Bootstrap Imports
 */
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import TerminalText from "./TerminalText";

/*
 * CSS Files
 */
import '../scss/Terminal.scss'
import '../scss/TerminalText.scss'
const terminalData = require('../data/terminal_script.json')


function Terminal() {
    const [close, setClose] = useState(false);

    const onClose = () => {
        setClose(!close);
    };

    const terminalCommands = terminalData.map((command, index) => {
        return(
            <TerminalText command={command} index={index} key={index} />
        )
    });

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
                <div className="term--body--height">
                    {terminalCommands}
                    <div
                        style={{ animationDelay: '9s' }}
                        className="input-prompt-final">
                        <p>justin-devenish.com %</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Terminal;


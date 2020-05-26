/*
 * React & Bootstrap Imports
 */
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

/*
 * CSS Files
 */
import '../scss/TerminalText.scss'


function TerminalText({ command, index }) {

    const outputCommands = command.output.map((output, index) => {
       return(
           <p key={index}>{output}</p>
       )
    });

    return (
        <>
            <p key={index}><span>justin-devenish.com %</span> {command.input}</p>
            {outputCommands}
            <br/>
        </>
    );
}

export default TerminalText;


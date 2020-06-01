/*
 * React & Bootstrap Imports
 */
import React, {Fragment, useState} from 'react';

/*
 * CSS Files
 */
import '../scss/TerminalText.scss'


function TerminalText({ command, index }) {

    const outputCommands = command.output.map((output, outIndex) => {
        const noBreak =
            <Fragment key={outIndex}>
                <div style={{animationDelay: `${((index+1)*2300)+(index*3000)+(outIndex*50)}ms`}}
                     className="output-command">
                    <p>{output}</p>
                </div>
            </Fragment>;

        const addBreak =
            <Fragment key={outIndex}>
                <div style={{ animationDelay: `${((index+1)*2500)+(index*3000)+(outIndex*50)}ms` }}
                     className="output-command__with-br">
                    <p>{output}</p>
                    <br/>
                </div>
            </Fragment>;

       return outIndex === (command.output.length - 1) ? addBreak : noBreak
    });

    return (
        <>
            <div
                style={{ animationDelay: `${(index*5500)+50}ms` }}
                className="input-line">
                <div
                    style={{ animationDelay: `${(index*5500)+100}ms` }}
                    className="input-prompt">
                    <p>justin-devenish.com %</p>
                </div>
                <div
                    style={{
                        animationTimingFunction: `steps(${command.input.length * 2}, end)`,
                        animationDelay: `${(index*5500)+250}ms`
                    }}
                    className="input-command">
                    <p key={index}>{command.input}</p>
                </div>
            </div>
            {outputCommands}
        </>
    );
}

export default TerminalText;


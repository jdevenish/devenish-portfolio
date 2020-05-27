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
        const noBreak = <Fragment key={outIndex}>
            <div style={{animationDelay: `${((index+1)*2300)+(outIndex*50)}ms`}}
                 className="output-command">
                <p>{output}</p>
            </div>
        </Fragment>;

        const addBreak = <Fragment key={outIndex}>
            <div style={{ animationDelay: `${((index+1)*2300)+(outIndex*50)}ms` }}
                 className="output-command__br">
                <p>{output}</p>
                <br/>
            </div>
        </Fragment>

       return outIndex === (command.output.length - 1) ? addBreak : noBreak
    });

    return (
        <>
            <div className="input-line">
                <div
                    style={{ animationDelay: `${(index*2500)+100}ms` }}
                    className="input-prompt">
                    <p>justin-devenish.com %</p>
                </div>
                <div
                    style={{
                        animationTimingFunction: `steps(${command.input.length * 2}, end)`,
                        animationDelay: `${(index*2500)+250}ms`
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


/*
 * React & Bootstrap Imports
 */
import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';

/*
 * CSS Files
 */
import '../scss/TerminalText.scss'


function TerminalText({ command, index }) {

    const outputCommands = command.output.map((output, outIndex) => {
        console.log("length = ", command.output.length);
        console.log("outIndex = ", outIndex);
        console.log(outIndex === (command.output.length - 1) ? "true" : "false");

        const noBreak = <Fragment>
            <div style={{animationDelay: `${((index+1)*2300)+(outIndex*50)}ms`}}
                 className="output-command">
                <p key={index}>{output}</p>
            </div>
        </Fragment>;

        const addBreak = <Fragment>
            <div style={{
                animationDelay: `${((index+1)*2300)+(outIndex*50)}ms`
            }}
                 className="output-command__br">
                <p key={index}>{output}</p>
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


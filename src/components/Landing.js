/*
 * React & Bootstrap Imports
 */
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

/*
 * Components
 */
import Terminal from "./Terminal";

/*
 * CSS Files
 */
import '../scss/Landing.scss'
import '../scss/Name.scss'


function Landing() {

    return (
        <div className="landing">
            <div className="name-and-title">
                <h1>Justin Devenish</h1>
                <h3>Software Engineer</h3>
                <h3>Product Manager</h3>
            </div>
            <div className="mainContent">
                <div className="socialMedia">
                    <a href="https://www.linkedin.com/in/justin-devenish/"><span className="iconify" data-icon="brandico:linkedin-rect" data-inline="false"/></a>
                    <a href="https://github.com/"><span className="iconify" data-icon="fa:github-square" data-inline="false"/></a>
                    <a href="https://codesandbox.io/u/jdevenish"><span className="iconify" data-icon="cib:codesandbox" data-inline="false"/></a>
                    <a href="https://repl.it/@jdevenish"><span className="iconify" data-icon="simple-icons:repl-dot-it" data-inline="false"/></a>
                </div>

                <div className="emailAddress">
                    <a href="mailto:justin.devenish@gmail.com">justin.devenish@gmail.com</a>
                </div>
            </div>
            <div className="terminal--container">
                <Terminal/>
            </div>

        </div>
    );
}

export default Landing;

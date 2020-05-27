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
                    <span className="iconify" data-icon="brandico:linkedin-rect" data-inline="false"/>
                    <span className="iconify" data-icon="fa:github-square" data-inline="false"/>
                    <span className="iconify" data-icon="cib:codesandbox" data-inline="false"/>
                    <span className="iconify" data-icon="simple-icons:repl-dot-it" data-inline="false"/>
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

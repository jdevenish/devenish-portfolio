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


function Landing() {

    return (
        <div className="landing">
            <div className="name-and-title">

            </div>
            <Terminal/>
        </div>
    );
}

export default Landing;

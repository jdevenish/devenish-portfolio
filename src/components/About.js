/*
 * React & Bootstrap Imports
 */
import React, {useState} from 'react';

/*
 * CSS Files
 */
import '../scss/About.scss'

function About( { projects } ) {
    // let iconsArr = [];
    // projects.forEach(project => {
    //     project.techStack.forEach(icon => {
    //         if(!iconsArr.includes(icon)){
    //             iconsArr.push(icon)
    //         }
    //     })
    // });
    //
    // const techStackIconsArr = iconsArr.map(icon => {
    //     return(
    //         <span className="iconify" data-icon={icon.dataIcon} data-inline="false"/>
    //     )
    // });

    return (
       <div className="about-container">

           <div className="about-content">
               <div className="image-container">
                   <img src="https://res.cloudinary.com/doaftkgbv/image/upload/c_crop,h_632,w_632/v1590433650/PersonalProfile_tmriaj.png" alt="profile pic" className="profile-pic"/>
               </div>
               <div className="about-description">
                   <p>
                       I've been programming and building things for almost 10 years. I started by building robots in C/C++ on Arduinos and other embedded devices. This
                       eventually progressed to building measurement and testing tools with Python and Java. I've now entered a new phase and have started building
                       cloud based tools and websites using a wide range of amazing tools like React, SASS, Express, Bootstrap, Node.js, and MongoDB to name a few.
                   </p>
                   <p>
                       I am driven, almost to the point of obsessive, to create dependable software that helps improve productivity. I have spent my professional career
                       learning how to build just that. Starting out in QA, I gained insight into how software is often used in ways the development teams never
                       anticipated. I took that knowledge as a transitioned into Product Management to ensure my products improved my users experience and was flexible
                       enough to adapt to their changing needs. Now as I transition to a web developer, I can pull from my experiences to build software that can stand the
                       test of time and will be their to support your customers.
                   </p>
               </div>
            </div>
           <div className="contact">
               <a href="https://www.linkedin.com/in/justin-devenish/" target="_blank"><span className="iconify" title="LinkedIn" data-icon="logos:linkedin" data-inline="false"/></a>
               <a href="https://github.com/jdevenish" target="_blank"><span className="iconify" title="GitHub" data-icon="logos:github" data-inline="false"/></a>
               <a href="https://drive.google.com/file/d/1lHAdcPsgu0nSZvBqYso0nO6D_CJ7sxjZ/view?usp=sharing" target="_blank"><span className="iconify" title="Resume" data-icon="bx:bxs-file-pdf" data-inline="false"/></a>
           </div>
       </div>
    );
}

export default About;


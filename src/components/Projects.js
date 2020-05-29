/*
 * React & Bootstrap Imports
 */
import React, {useState} from 'react';
import Project from "./Project";

/*
 * CSS Files
 */
import '../scss/Projects.scss'

function Projects({ projects }) {

    const dateSortedNewToOld = projects.sort((p1, p2) => {
       const p1DateArr = p1.date.split("-");
       const p1Date = new Date(Number(p1DateArr[2]), Number(p1DateArr[0])-1, Number(p1DateArr[1]));
       const p2DateArr = p2.date.split("-");
       const p2Date = new Date(Number(p2DateArr[2]), Number(p2DateArr[0])-1, Number(p2DateArr[1]));

       return p1Date - p2Date;
    });

    const dateSortedOldToNew = projects.sort((p1, p2) => {
        const p1DateArr = p1.date.split("-");
        const p1Date = new Date(Number(p1DateArr[2]), Number(p1DateArr[0])-1, Number(p1DateArr[1]));
        const p2DateArr = p2.date.split("-");
        const p2Date = new Date(Number(p2DateArr[2]), Number(p2DateArr[0])-1, Number(p2DateArr[1]));

        return p2Date - p1Date;
    });

    const projectComponents = dateSortedNewToOld.map(project => {
        return <Project project={project} key={project._id}/>
    });

    return (
        <div className="projects-container">
            <div className="projects--header">
                <h1>PROJECTS</h1>
            </div>
            {projectComponents}
        </div>
    );
}

export default Projects;


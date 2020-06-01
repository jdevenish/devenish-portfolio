/*
 * React & Bootstrap Imports
 */
import React, {useState} from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

/*
 * CSS Files
 */
import '../scss/Project.scss'

function Project( { project } ) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === project.desktopImages.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? project.desktopImages.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const desktopImgs = project.desktopImages.map(img => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={img._id}
            >
                <img src={img.imgURL} alt={img.altId} className="desktopImg"/>
            </CarouselItem>
        );
    });

    const techStackIconsArr = project.techStack.map(icon => {
        return(
            <span className="iconify" data-icon={icon.dataIcon} data-inline="false"/>
        )
    });

    return (
        <div className="project-container">
            <div className="project--header">
                <h1>{project.name}</h1>
            </div>
            <div className="projectContent--container">
                <div className="desktopImg--container">
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                    >
                        <CarouselIndicators items={project.desktopImages} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {desktopImgs}
                    </Carousel>
                </div>
                <div className="project--details">
                    <div>
                        <h3>Tech Stack</h3>
                    </div>
                    <div className="techStack--icons">
                        {techStackIconsArr}
                    </div>
                    <div className="description" >
                        <h3>Project Overview</h3>
                        <p>{project.description}</p>
                    </div>
                    <div className="btns--container">
                        <a href={project.liveURL} target="_blank"><button className="btn btn-primary btn--style">Live Site</button></a>
                        {project.showRepo ? <a href={project.repoURL} target="_blank"><button  className="btn btn-primary btn--style ">GitHub Repo</button></a> : ""}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Project;

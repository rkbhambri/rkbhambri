import React from 'react';
import Project from './Project/Project';

const Projects = (props) => {
    return (
        <div className="projects">
            <div className="projects-list col-md-11 row mb-3">
                {
                    props.projects.length > 0 && props.projects.map(item => {
                        return <Project projectData={item} key={item.name} />;
                    })
                }
            </div>
        </div>
    );
};

export default Projects;
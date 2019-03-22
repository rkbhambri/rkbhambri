import React from 'react';
import Project from './Project/Project';

const Projects = (props) => {
    return (
        <div className="projects-list w-100 row p-5 ml-3" >
            {
                props.projects.length > 0 && props.projects.map(item => {
                    return <Project projectData={item} key={item.name} />;
                })
            }
        </div>
    );
};

export default Projects;
import React from 'react';
import Project from './Project/Project';

const Projects = (props) => {
    return (
        <div className="projects-list p-5 ml-5 row" style={{ width: '95%' }} >
            {
                props.projects.length > 0 && props.projects.map(item => {
                    return <Project projectData={item} key={item.name} />;
                })
            }
        </div>
    );
};

export default Projects;
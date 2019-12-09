import React from 'react';
import './Project.css';
const Project = (props) => {
    return (
        <div className="projects-item col-lg-3 col-md-3 col-sm-12 col-xs-11 offset-1 mt-4">
            <div className="project-image">
                <img src={require('../../../images/' + props.projectData.img_src)} style={{ width: '100%', height: '220px' }} alt="Rk Bhambri" />
            </div>
            <div className="project-details p-3" style={{ minHeight: '200px' }}>
                <div className="project-name">{props.projectData.name}</div>
                <div className="project-description">{props.projectData.description}</div>
            </div>
            <div className="footer text-right p-2 w-100">
                <span className="demo p-2">
                    <a href={props.projectData.demo} target="_blank" rel="noopener noreferrer" style={{ color: '#777' }}>Demo</a>
                </span>
                <span className="code p-2">
                    <a href={props.projectData.code} target="_blank" rel="noopener noreferrer" style={{ color: '#777' }}>Code</a>
                </span>
            </div>
        </div>
    );
};

export default Project;
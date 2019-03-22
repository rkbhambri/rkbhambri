import React, { useState, useEffect } from 'react';
import data from '../../data.json';
import Header from '../../components/Header/Header';
import Projects from '../../components/Projects/Projects';

const Layout = (props) => {
    const [projects, setProjectData] = useState([]);
    useEffect(() => {
        setProjectData(data.projects);
    }, []);
    console.log(projects)
    return (
        <div className="layout">
            <Header />
            <Projects projects={projects} />
        </div>
    );
};

export default Layout;

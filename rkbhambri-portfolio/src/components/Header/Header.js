import React from 'react';
import githubLogo from '../../images/github-logo.svg';
import linkedInLogo from '../../images/linkedin.svg';

import './Header.css';

const Header = (props) => {
    return (
        <div className="header w-100 text-center">
            <h1>Rk Bhambri</h1>
            <div className="social-icons text-center pb-3">
                <span className="p-3">
                    <a href="https://github.com/rkbhambri" target="_blank" rel="noopener noreferrer" style={{ color: '#777' }}>
                        <img className="github-logo" src={githubLogo} alt="Rk Bhambri" />
                    </a>
                </span>
                <span className="p-3">
                    <a href="https://www.linkedin.com/in/rk-bhambri-462778116" target="_blank" rel="noopener noreferrer" style={{ color: '#777' }}>
                        <img className="linkedIn-logo" src={linkedInLogo} alt="Rk Bhambri" />
                    </a>
                </span>
            </div>
        </div>
    );
};

export default Header;

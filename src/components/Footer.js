import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <p>© rohit yadav</p>
                    <a
                        href="https://github.com/rohyadav/movies-time"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/images/github_logo.png" alt="github-repo" />
                        Repository
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

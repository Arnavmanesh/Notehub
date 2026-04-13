import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <p>&copy; 2026 NotesHub. Organized for Computer Science Engineering students.</p>
                <p className="author-credit">
                    Notes by <a href="https://www.instagram.com/roshan_b_panicker/" target="_blank" rel="noopener noreferrer" className="author-link" style={{ textDecoration: 'none' }}><span>Roshan B Panicker</span></a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;

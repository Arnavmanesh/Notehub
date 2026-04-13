import React from 'react';

const ModuleCard = ({ delay, badge, title, description, link }) => {
    return (
        <div className={`card reveal delay-${delay}`}>
            <span className="card-badge">{badge}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn-download">📄 Download PDF</a>
        </div>
    );
};

export default ModuleCard;

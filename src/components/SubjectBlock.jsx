import React from 'react';
import ModuleCard from './ModuleCard';

const SubjectBlock = ({ title, description, syllabusLink, modelPaperLink, modules }) => {
    return (
        <div className="subject-block reveal">
            <div className="subject-header">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="subject-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <a href={syllabusLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">📥 Download Subject Syllabus</a>
                    <a href={modelPaperLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">📝 Download Model Question Paper</a>
                </div>
            </div>
            <div className="cards-grid">
                {modules.map((mod, index) => (
                    <ModuleCard 
                        key={index}
                        delay={index + 1}
                        badge={mod.badge}
                        title={mod.title}
                        description={mod.description}
                        link={mod.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default SubjectBlock;

import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [viewCount, setViewCount] = useState(0);

    // 🔥 Smooth animation function
    const animateCount = (target) => {
        let start = 0;
        const duration = 800; // total animation time (ms)
        const stepTime = 20;
        const increment = Math.ceil(target / (duration / stepTime));

        const timer = setInterval(() => {
            start += increment;

            if (start >= target) {
                start = target;
                clearInterval(timer);
            }

            setViewCount(start);
        }, stepTime);
    };

    useEffect(() => {
        const counted = sessionStorage.getItem('counted');

        const url = counted
            ? 'https://abacus.jasoncameron.dev/get/notehub/students'
            : 'https://abacus.jasoncameron.dev/hit/notehub/students';

        fetch(url)
            .then(res => res.json())
            .then(data => {
                const finalCount = data.value + 15; // optional base boost

                animateCount(finalCount);

                if (!counted) {
                    sessionStorage.setItem('counted', 'true');
                }
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <section className="hero">
            <div className="container hero-content">
                <div className="hero-text">
                    <span className="eyebrow">Computer Science Engineering</span>

                    <div className="user-count-badge">
                        <span className="icon">👨‍🎓</span>
                        <span id="view-count">{viewCount.toLocaleString()}</span>
                        <span className="text">Students studying here</span>
                    </div>

                    <h1>All Your S4 Semester Notes, Ready to Download.</h1>
                    <p>Access descriptive syllabi and module-wise PDF materials for Mathematics, DBMS, OS, and COA.</p>

                    <div className="hero-actions">
                        <a href="#subjects" className="btn-primary">Browse Subjects ↓</a>
                        <a href="https://drive.google.com/file/d/1AcllKf0u4ahh2Y-Izrv11j7d8ZZp33Hh/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-outline">📥 Download Full S4 Syllabus</a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="illustration-placeholder">
                        <img src="/casual-life-3d-young-man-surrounded-by-gadgets-taking-notes.webp" alt="Student studying" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
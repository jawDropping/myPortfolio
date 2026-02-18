import { useEffect, useRef, useState } from 'react';
import '../pages/about.css'
import backGround from "../assets/images/Me2.svg";

function About() {
    const heroImageRef = useRef(null);
    const heroTextRef = useRef(null);
    const backgroundRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detect mobile devices
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const handleScroll = () => {
            // Disable parallax on mobile for better performance
            if (isMobile) return;
            
            const scrolled = window.scrollY;
            
            // Parallax for background elements - moves slowest (more noticeable)
            if (backgroundRef.current) {
                backgroundRef.current.style.transform = `translateY(${scrolled * 0.7}px)`;
            }
            
            // Parallax for image - moves medium speed
            if (heroImageRef.current) {
                heroImageRef.current.style.transform = `translateY(${scrolled * -0.2}px)`;
            }
            
            // Parallax for text - moves faster
            if (heroTextRef.current) {
                heroTextRef.current.style.transform = `translateY(${scrolled * -0.4}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Intersection Observer for scroll animations WITH RESET
        const elements = document.querySelectorAll('.animate-on-scroll');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add 'show' class when element enters viewport
                    entry.target.classList.add('show');
                } else {
                    // Remove 'show' class when element leaves viewport
                    entry.target.classList.remove('show');
                }
            });
        }, {
            threshold: 0.2, // triggers when 20% visible
            rootMargin: '-50px' // Adds buffer before triggering
        });

        elements.forEach(el => observer.observe(el));
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkMobile);
            elements.forEach(el => observer.unobserve(el));
        };
    }, [isMobile]);

    return (
        <div className='mainAbout'>
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background" ref={backgroundRef}></div>
                
                <div className="hero-content">
                    {/* Left side - Main content */}
                    <div className="hero-text" ref={heroTextRef}>
                        <div className="hero-greeting">
                            <span className="wave">👋</span>
                            <h3>Hi, I'm</h3>
                        </div>
                        <h1 className="hero-title">Carlos Joshua Igpit</h1>
                        <p className="hero-subtitle">Combining curiosity, creativity, and tech to make life a little more fun and meaningful every day.</p>
                        
                        <div className="hero-cta">
                            <button className="btn-primary">View My Work</button>
                            <button className="btn-secondary">Get in Touch</button>
                        </div>
                        
                        {/* Stats */}
                        <div className="hero-stats">
                            <div className="stat-item">
                                <span className="stat-number">3+</span>
                                <span className="stat-label">Years Learning</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Projects</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">∞</span>
                                <span className="stat-label">Creativity</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right side - Image */}
                    <div className="hero-image-container">
                        <div className="hero-image-wrapper" ref={heroImageRef}>
                            <div className="hero-image-background"></div>
                            <img src={backGround} alt="Carlos Joshua Igpit" className="hero-image"/>
                        </div>
                    </div>
                </div>
                
                {/* Scroll indicator */}
                <div className="scroll-indicator">
                    <span>Scroll to explore</span>
                    <div className="scroll-arrow">↓</div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section">
                <div className="about-content">
                    <h2 className="section-title animate-on-scroll">My Goal</h2>
                    <p className="section-description animate-on-scroll">
                        To combine curiosity, creativity, and technology to create meaningful experiences 
                        that make a difference. I'm passionate about building solutions that are both 
                        functional and delightful to use.
                    </p>
                    
                    <div className="skills-grid">
                        <div className="skill-card animate-on-scroll">
                            <div className="skill-icon">💻</div>
                            <h3>Development</h3>
                            <p>Building responsive and modern web applications</p>
                        </div>
                        <div className="skill-card animate-on-scroll">
                            <div className="skill-icon">🎨</div>
                            <h3>Design</h3>
                            <p>Creating intuitive and beautiful user experiences</p>
                        </div>
                        <div className="skill-card animate-on-scroll">
                            <div className="skill-icon">🚀</div>
                            <h3>Innovation</h3>
                            <p>Exploring new technologies and creative solutions</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Journey Section */}
            <section className="journey-section">
                <div className="journey-content">
                    <h2 className="section-title dark animate-on-scroll">My Journey</h2>
                    <p className="section-description dark animate-on-scroll">
                        A timeline of my growth and learning in tech
                    </p>
                    
                    <div className="timeline">
                        <div className="timeline-item animate-on-scroll">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-year">2022</span>
                                <h3>Started My Tech Journey</h3>
                                <p>Discovered my passion for coding and began learning web development fundamentals.</p>
                            </div>
                        </div>
                        
                        <div className="timeline-item animate-on-scroll">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-year">2023</span>
                                <h3>Built First Projects</h3>
                                <p>Created multiple personal projects to practice and improve my skills.</p>
                            </div>
                        </div>
                        
                        <div className="timeline-item animate-on-scroll">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-year">2024</span>
                                <h3>Expanding Horizons</h3>
                                <p>Learning advanced frameworks and diving deeper into modern web technologies.</p>
                            </div>
                        </div>
                        
                        <div className="timeline-item animate-on-scroll">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-year">2025</span>
                                <h3>Current Focus</h3>
                                <p>Building this portfolio and working on exciting new projects with React.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="tech-section">
                <div className="tech-content">
                    <h2 className="section-title animate-on-scroll">Technologies I Use</h2>
                    <p className="section-description animate-on-scroll">
                        Tools and frameworks I'm comfortable working with
                    </p>
                    
                    <div className="tech-grid">
                        <div className="tech-item animate-on-scroll">
                            <span className="tech-name">React</span>
                        </div>
                        <div className="tech-item animate-on-scroll">
                            <span className="tech-name">JavaScript</span>
                        </div>
                        <div className="tech-item animate-on-scroll">
                            <span className="tech-name">HTML & CSS</span>
                        </div>
                        <div className="tech-item animate-on-scroll">
                            <span className="tech-name">Git</span>
                        </div>
                        <div className="tech-item animate-on-scroll">
                            <span className="tech-name">Node.js</span>
                        </div>
                        <div className="tech-item animate-on-scroll">
                            <span className="tech-name">Responsive Design</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-content">
                    <h2 className="cta-title animate-on-scroll">Let's Work Together</h2>
                    <p className="cta-description animate-on-scroll">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                    <button className="btn-cta animate-on-scroll">Start a Conversation</button>
                </div>
            </section>
        </div>
    );
}

export default About;
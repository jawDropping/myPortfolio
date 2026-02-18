import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Hobbies.css";

const hobbies = [
  {
    id: "cycling",
    title: "Cycling",
    description: "Hitting the open road, feeling the wind, and exploring new paths on two wheels.",
    icon: "🚴",
    detail: "From mountain trails to city streets, cycling keeps me grounded and energized.",
    link: "/hobbies/cycling",
  },
  {
    id: "drawing",
    title: "Drawing",
    description: "Translating thoughts and imagination into lines, shapes, and stories on paper.",
    icon: "✏️",
    detail: "Sketching is how I slow down and see the world more carefully.",
    link: "/hobbies/drawing",
  },
  {
    id: "photography",
    title: "Photography",
    description: "Freezing moments in time — chasing light, shadow, and the perfect frame.",
    icon: "📷",
    detail: "Every photo is a story. I love hunting for the shot others walk past.",
    link: "/hobbies/photography",
  },
  {
    id: "gardening",
    title: "Gardening",
    description: "Nurturing life from soil — growing plants, flowers, and a little peace of mind.",
    icon: "🌱",
    detail: "There's something deeply satisfying about watching something you planted bloom.",
    link: "/hobbies/gardening",
  },
];

function Hobbies() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedEls = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    animatedEls?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mainHobbies" ref={sectionRef}>

      {/* ── Hero ── */}
      <section className="hobbies-hero">
        <div className="hero-background" />
        <div className="hobbies-hero-blob-1" />
        <div className="hobbies-hero-blob-2" />

        <div className="hobbies-hero-content">
          <p className="hobbies-eyebrow">— what I do for fun</p>
          <h1 className="hobbies-hero-title">
            My<br />
            <span className="hobbies-hero-title--outline">Hobbies</span>
          </h1>
          <p className="hobbies-hero-sub">
            A few passions that keep me curious, creative, and alive outside of code.
          </p>
        </div>

        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* ── Cards Grid ── */}
      <section className="hobbies-section">
        <div className="hobbies-content">
          <h2 className="section-title animate-on-scroll">Explore Each Hobby</h2>
          <p className="section-description animate-on-scroll">
            Hover over any card to flip it and learn more — then dive deeper.
          </p>

          <div className="hobbies-grid">
            {hobbies.map((hobby, i) => (
              <div
                key={hobby.id}
                className="flip-card animate-on-scroll"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="flip-card-inner">

                  {/* FRONT */}
                  <div className="flip-card-front">
                    <div className="flip-card-glow" />
                    <span className="hobby-icon">{hobby.icon}</span>
                    <h3 className="hobby-title">{hobby.title}</h3>
                    <p className="hobby-desc">{hobby.description}</p>
                    <span className="flip-hint">Hover to explore →</span>
                  </div>

                  {/* BACK */}
                  <div className="flip-card-back">
                    <div className="flip-card-back-glow" />
                    <span className="hobby-icon">{hobby.icon}</span>
                    <h3 className="hobby-title">{hobby.title}</h3>
                    <p className="hobby-back-detail">{hobby.detail}</p>
                    <Link to={hobby.link} className="hobby-explore-btn">
                      Explore {hobby.title}
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="hobbies-cta-section">
        <div className="hobbies-cta-blob" />
        <div className="cta-content animate-on-scroll">
          <h2 className="cta-title">Let's Connect Over Shared Interests</h2>
          <p className="cta-description">
            Whether it's a cycling route, a photo spot, or a garden tip — I'm always up for a good conversation.
          </p>
          <Link to="/contact" className="btn-cta">
            Get in Touch
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Hobbies;
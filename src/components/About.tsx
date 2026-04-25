import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 md:py-32 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-sm font-sans text-accent uppercase tracking-widest">About Us</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-foreground mt-4" style={{ lineHeight: 1.1 }}>
            Where <span className="italic text-muted">technology</span> meets <span className="italic text-muted">transformation.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left - Text */}
          <div className="space-y-6 reveal">
            <p className="text-lg leading-relaxed text-muted font-sans">
              Established in <strong className="text-foreground">2017</strong>, Infotechmon Private Limited (ITM) has been at the forefront of IT education in
              Mohali. We deliver specialized training programs designed to bridge the gap between
              academic learning and industry demands.
            </p>
            <p className="text-lg leading-relaxed text-muted font-sans">
              From fluent English communication skills to advanced cybersecurity certifications like
              <strong className="text-foreground"> CISSP</strong>, our courses are crafted by expert faculty using smartboard technology
              and regular evaluations to ensure every student achieves their professional goals.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Certified Faculty', 'Smart Classrooms', 'Placement Support', 'Flexible Timings'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-accent/5 border border-accent/10 text-sm font-sans text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Feature Cards */}
          <div className="grid grid-cols-2 gap-4 reveal">
            {[
              { icon: '🎓', title: 'Expert Faculty', desc: 'Highly specialized instructors with real-world industry experience' },
              { icon: '💻', title: 'Modern Labs', desc: 'State-of-the-art infrastructure with smartboard technology' },
              { icon: '📊', title: 'Regular Evaluations', desc: 'Continuous assessments to track progress and ensure mastery' },
              { icon: '🚀', title: 'Career Growth', desc: 'Placement assistance and career guidance for every graduate' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-base font-sans font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted font-sans leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

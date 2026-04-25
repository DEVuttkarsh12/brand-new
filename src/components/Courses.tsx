import { useEffect, useRef } from 'react';

const courses = [
  {
    title: 'CISSP Certification',
    category: 'Cybersecurity',
    description: 'Certified Information Systems Security Professional — the gold standard in cybersecurity. Master information security governance, risk management, and access control.',
    duration: '12 Weeks',
    mode: 'Online & Offline',
    color: 'from-accent to-accent-blue',
  },
  {
    title: '3D Modeling & Design',
    category: 'Creative Tech',
    description: 'Learn industry-standard 3D modeling tools and techniques. From concept to render, create stunning 3D assets for gaming, architecture, and product design.',
    duration: '10 Weeks',
    mode: 'Classroom',
    color: 'from-accent-violet to-accent-blue',
  },
  {
    title: 'Communication Mastery',
    category: 'Soft Skills',
    description: 'Hone your English communication skills for professional fluency. Build confidence in presentations, interviews, and corporate conversations.',
    duration: '8 Weeks',
    mode: 'Classroom',
    color: 'from-accent-blue to-accent',
  },
  {
    title: 'Web Development',
    category: 'Development',
    description: 'Full-stack web development from HTML/CSS to React and Node.js. Build responsive, modern web applications ready for deployment.',
    duration: '16 Weeks',
    mode: 'Online & Offline',
    color: 'from-accent to-accent-violet',
  },
  {
    title: 'Digital Marketing',
    category: 'Marketing',
    description: 'Master SEO, social media marketing, Google Ads, and analytics. Learn to drive results through data-driven digital campaigns.',
    duration: '8 Weeks',
    mode: 'Online',
    color: 'from-accent-violet to-accent',
  },
  {
    title: 'Corporate IT Training',
    category: 'Enterprise',
    description: 'Customized training programs for corporate teams. Upskill your workforce in cloud computing, DevOps, and enterprise security.',
    duration: 'Custom',
    mode: 'On-site / Online',
    color: 'from-accent-blue to-accent-violet',
  },
];

const Courses = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="courses" ref={sectionRef} className="relative py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-sm font-sans text-accent uppercase tracking-widest">Our Programs</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-foreground mt-4" style={{ lineHeight: 1.1 }}>
            Courses designed for <span className="italic text-muted">real‑world impact.</span>
          </h2>
          <p className="text-lg text-muted font-sans mt-6 max-w-2xl mx-auto leading-relaxed">
            Industry-aligned programs taught by experts, with hands-on projects and placement support.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {courses.map((course, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl border border-border/60 overflow-hidden hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
            >
              {/* Color Strip */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${course.color}`} />

              <div className="p-7">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/5 text-xs font-sans text-accent font-medium">
                    {course.category}
                  </span>
                  <svg className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                <h3 className="text-xl font-serif text-foreground mb-3">{course.title}</h3>
                <p className="text-sm text-muted font-sans leading-relaxed mb-6">{course.description}</p>

                <div className="flex items-center gap-4 text-xs font-sans text-muted pt-4 border-t border-border/40">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    {course.mode}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;

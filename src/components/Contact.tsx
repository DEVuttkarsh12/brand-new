import { useEffect, useRef } from 'react';

const Contact = () => {
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
    <section id="contact" ref={sectionRef} className="relative py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-sm font-sans text-accent uppercase tracking-widest">Get in Touch</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-foreground mt-4" style={{ lineHeight: 1.1 }}>
            Let's start your <span className="italic text-muted">journey.</span>
          </h2>
          <p className="text-lg text-muted font-sans mt-6 max-w-xl mx-auto">
            Visit us or reach out — we'd love to guide you towards the right course.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left - Contact Info */}
          <div className="space-y-8 reveal">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-accent/5 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-sans font-semibold text-foreground">Phone</h3>
                <a href="tel:08401971400" className="text-muted font-sans hover:text-accent transition-colors">084-0197-1400</a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-accent/5 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-sans font-semibold text-foreground">Address</h3>
                <p className="text-muted font-sans text-sm leading-relaxed">
                  SCO-84, 3rd Floor, Balongi Road,<br />
                  Phase 5 Industrial Area, Sas Nagar,<br />
                  Mohali — 160055, Punjab
                </p>
                <a
                  href="https://maps.google.com/?q=SCO+84+Balongi+Road+Phase+5+Mohali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-accent font-sans mt-2 hover:underline"
                >
                  Get Directions
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-accent/5 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-sans font-semibold text-foreground">Business Hours</h3>
                <p className="text-muted font-sans text-sm">Mon – Sat: 9:30 AM – 7:30 PM</p>
                <p className="text-muted font-sans text-sm">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-surface rounded-2xl p-8 shadow-card reveal">
            <h3 className="text-xl font-serif text-foreground mb-6">Send us a message</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-sans text-muted mb-1.5">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-border/60 bg-white text-sm font-sans text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-sans text-muted mb-1.5">Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-border/60 bg-white text-sm font-sans text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/30 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-sans text-muted mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-border/60 bg-white text-sm font-sans text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/30 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-sans text-muted mb-1.5">Course of Interest</label>
                <select className="w-full px-4 py-3 rounded-xl border border-border/60 bg-white text-sm font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/30 transition-all">
                  <option value="">Select a course</option>
                  <option>CISSP Certification</option>
                  <option>3D Modeling & Design</option>
                  <option>Communication Mastery</option>
                  <option>Web Development</option>
                  <option>Digital Marketing</option>
                  <option>Corporate Training</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-sans text-muted mb-1.5">Message</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your goals..."
                  className="w-full px-4 py-3 rounded-xl border border-border/60 bg-white text-sm font-sans text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/30 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl py-4 text-base font-sans bg-accent text-white hover:bg-accent-light hover:scale-[1.01] transition-all duration-200 shadow-elevated"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-screen"
      style={{ paddingTop: 'calc(8rem - 20px)', paddingBottom: '6rem' }}
    >
      {/* Badge */}
      <div className="animate-fade-rise mb-8">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/5 border border-accent/10 text-sm font-sans text-accent">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          9+ Years of Excellence in IT Training
        </span>
      </div>

      <div className="max-w-5xl mx-auto">
        <h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-foreground animate-fade-rise"
          style={{ lineHeight: 0.95, letterSpacing: '-2.46px' }}
        >
          Shaping <span className="text-muted italic">brilliant minds</span> for the{' '}
          <span className="text-muted italic">digital future.</span>
        </h1>

        <p className="text-base sm:text-lg max-w-2xl mt-8 mx-auto leading-relaxed text-muted font-sans animate-fade-rise-delay">
          Specialized IT training institute empowering professionals with industry-ready skills
          in cybersecurity, 3D modeling, communication, and more. Your career transformation starts here.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 animate-fade-rise-delay-2">
          <a
            href="#courses"
            className="rounded-full px-14 py-5 text-base font-sans bg-accent text-white hover:bg-accent-light hover:scale-[1.03] transition-all duration-200 shadow-elevated"
          >
            Explore Courses
          </a>
          <a
            href="#about"
            className="rounded-full px-14 py-5 text-base font-sans border-2 border-accent/20 text-foreground hover:border-accent/40 hover:scale-[1.03] transition-all duration-200"
          >
            Learn More
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 animate-fade-rise-delay-3">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-serif text-foreground">4.7<span className="text-accent">★</span></div>
            <div className="text-sm text-muted font-sans mt-1">Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-serif text-foreground">278+</div>
            <div className="text-sm text-muted font-sans mt-1">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-serif text-foreground">9+</div>
            <div className="text-sm text-muted font-sans mt-1">Years in Business</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-serif text-foreground">15+</div>
            <div className="text-sm text-muted font-sans mt-1">Expert Courses</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

const Hero = () => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-screen" style={{ paddingTop: 'calc(8rem - 75px)', paddingBottom: '10rem' }}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-normal leading-tight-none tracking-tightest text-foreground animate-fade-rise">
          Beyond <span className="text-muted italic">silence,</span> we build <span className="text-muted italic">the eternal.</span>
        </h1>
        
        <p className="text-base sm:text-lg max-w-2xl mt-8 mx-auto leading-relaxed text-muted font-sans animate-fade-rise-delay">
          Building platforms for brilliant minds, fearless makers, and thoughtful souls. 
          Through the noise, we craft digital havens for deep work and pure flows.
        </p>
        
        <button className="mt-12 rounded-full px-14 py-5 text-base font-sans bg-foreground text-background hover:scale-105 transition-transform duration-200 animate-fade-rise-delay-2">
          Begin Journey
        </button>
      </div>
    </section>
  );
};

export default Hero;

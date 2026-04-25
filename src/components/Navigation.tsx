const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/0 backdrop-blur-none">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        <div className="text-3xl tracking-tight font-serif text-foreground">
          Aethera<sup>®</sup>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-sm font-sans text-foreground transition-colors">Home</a>
          <a href="#" className="text-sm font-sans text-muted hover:text-foreground transition-colors">Studio</a>
          <a href="#" className="text-sm font-sans text-muted hover:text-foreground transition-colors">About</a>
          <a href="#" className="text-sm font-sans text-muted hover:text-foreground transition-colors">Journal</a>
          <a href="#" className="text-sm font-sans text-muted hover:text-foreground transition-colors">Reach Us</a>
        </div>

        <button className="rounded-full px-6 py-2.5 text-sm font-sans bg-foreground text-background hover:scale-105 transition-transform duration-200">
          Begin Journey
        </button>
      </div>
    </nav>
  );
};

export default Navigation;

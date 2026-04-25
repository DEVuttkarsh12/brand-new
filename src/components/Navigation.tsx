import { useState } from 'react';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg font-sans">IT</span>
          </div>
          <div>
            <span className="text-xl font-serif tracking-tight text-foreground">Infotechmon</span>
            <span className="hidden sm:inline text-xs text-muted ml-1.5 font-sans">Pvt. Ltd.</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-sans text-foreground font-medium transition-colors">Home</a>
          <a href="#about" className="text-sm font-sans text-muted hover:text-foreground transition-colors">About</a>
          <a href="#courses" className="text-sm font-sans text-muted hover:text-foreground transition-colors">Courses</a>
          <a href="#testimonials" className="text-sm font-sans text-muted hover:text-foreground transition-colors">Reviews</a>
          <a href="#contact" className="text-sm font-sans text-muted hover:text-foreground transition-colors">Contact</a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="tel:08401971400"
            className="hidden lg:flex items-center gap-2 text-sm font-sans text-muted hover:text-foreground transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            084-0197-1400
          </a>
          <a
            href="#contact"
            className="rounded-full px-6 py-2.5 text-sm font-sans bg-accent text-white hover:bg-accent-light hover:scale-[1.03] transition-all duration-200"
          >
            Enroll Now
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-foreground transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-5 h-0.5 bg-foreground transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-foreground transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border/50 px-6 py-4 space-y-3 animate-fade-rise">
          <a href="#home" onClick={() => setMobileOpen(false)} className="block text-sm font-sans text-foreground py-2">Home</a>
          <a href="#about" onClick={() => setMobileOpen(false)} className="block text-sm font-sans text-muted py-2">About</a>
          <a href="#courses" onClick={() => setMobileOpen(false)} className="block text-sm font-sans text-muted py-2">Courses</a>
          <a href="#testimonials" onClick={() => setMobileOpen(false)} className="block text-sm font-sans text-muted py-2">Reviews</a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="block text-sm font-sans text-muted py-2">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

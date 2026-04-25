const Footer = () => {
  return (
    <footer className="bg-accent text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg font-sans">IT</span>
              </div>
              <span className="text-xl font-serif">Infotechmon</span>
            </div>
            <p className="text-sm text-white/60 font-sans leading-relaxed">
              Shaping brilliant minds for the digital future since 2017.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-sans font-semibold uppercase tracking-wider mb-4 text-white/80">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Courses', 'Reviews', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm font-sans text-white/50 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-sm font-sans font-semibold uppercase tracking-wider mb-4 text-white/80">Top Courses</h4>
            <ul className="space-y-3">
              {['CISSP Certification', '3D Modeling', 'Web Development', 'Digital Marketing', 'Communication'].map((course) => (
                <li key={course}>
                  <a href="#courses" className="text-sm font-sans text-white/50 hover:text-white transition-colors">
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-sans font-semibold uppercase tracking-wider mb-4 text-white/80">Contact</h4>
            <ul className="space-y-3">
              <li className="text-sm font-sans text-white/50">
                SCO-84, 3rd Floor, Balongi Road,<br />Mohali — 160055
              </li>
              <li>
                <a href="tel:08401971400" className="text-sm font-sans text-white/50 hover:text-white transition-colors">
                  084-0197-1400
                </a>
              </li>
              <li className="text-sm font-sans text-white/50">
                Mon – Sat: 9:30 AM – 7:30 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-sans text-white/40">
            © {new Date().getFullYear()} Infotechmon Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs font-sans text-white/30">
            Built with ❤️ in Mohali, Punjab
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

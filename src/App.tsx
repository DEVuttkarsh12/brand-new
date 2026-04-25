import Navigation from './components/Navigation';
import VideoBackground from './components/VideoBackground';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main className="relative w-full overflow-hidden bg-background">
      {/* Hero area with video background */}
      <div className="relative min-h-screen">
        <VideoBackground />
        <Navigation />
        <Hero />
      </div>

      {/* Content sections */}
      <About />
      <Courses />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;

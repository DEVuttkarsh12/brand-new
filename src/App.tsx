import Navigation from './components/Navigation';
import VideoBackground from './components/VideoBackground';
import Hero from './components/Hero';

function App() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background">
      <VideoBackground />
      <Navigation />
      <Hero />
    </main>
  );
}

export default App;

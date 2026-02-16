import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { Showcase } from './sections/Showcase';
import { DownloadSection } from './sections/Download';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import Header from './components/Header';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 antialiased">
      <Header />
      <main>
        <Hero />
        <FeatureGrid />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-400">
        Built for the real-time collaborative drawing assignment.
      </footer>
    </div>
  );
}

export default App;

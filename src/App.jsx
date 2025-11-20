import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative">
      {/* decorative bg */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_60%)]" />

      <Navbar />
      <Hero />
      <Sections />
    </div>
  )
}

export default App

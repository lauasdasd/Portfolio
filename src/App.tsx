import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import LevaCoreFeatured from './sections/LevaCoreFeatured';
import Projects from './sections/Projects';
import Stacks from './sections/Stacks';
import Education from './sections/Education';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <LevaCoreFeatured />
        <Projects />
        <Stacks />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;

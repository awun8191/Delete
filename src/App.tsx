import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background transition-colors duration-300">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}

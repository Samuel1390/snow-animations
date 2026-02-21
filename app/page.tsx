import Hero from "./components/Hero";
import AnimationCardsCollection from "./components/AnimationCardsCollection";
import Header from "./Header";
import SecuencialGrid from "./components/SequencialGrid";
import { AnimationProvider } from "./components/context/AnimationContext";
import Footer from "./components/Footer";
import RevealOnScrollSection from "./components/RevealOnScrollSection";
import { GridProvider } from "./components/context/GridContext";
import AnimationModal from "./components/AnimationModal";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />
      <Hero />

      {/* Grid de animaciones */}

      <main>
        <AnimationProvider>
          <AnimationCardsCollection />
          <RevealOnScrollSection />
          <GridProvider>
            <SecuencialGrid />
          </GridProvider>
        </AnimationProvider>
      </main>

      <Footer />
      <AnimationModal />
    </div>
  );
}

import Hero from "./components/Hero";
import AnimationCardsCollection from "./components/AnimationCardsCollection";
import Header from "./Header";
import { useAnimationContext } from "./components/context/AnimationContext";
import SecuencialGrid from "./components/SecuencialGrid";
import TimingFunctionBox from "./components/TimingFunctionBox";
import { AnimationProvider } from "./components/context/AnimationContext";
import RevealOnScrollSection from "./components/RevealOnScrollSection";
import GlobalControls from "./components/GlobalControls";
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
          <GlobalControls context={useAnimationContext} />
          <TimingFunctionBox />
          <AnimationCardsCollection />
          <RevealOnScrollSection />
          <GridProvider>
            <SecuencialGrid />
          </GridProvider>
        </AnimationProvider>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500 dark:text-gray-400">
          Snow Animations — Copy, paste, and enjoy.
        </div>
      </footer>
      <AnimationModal />
    </div>
  );
}

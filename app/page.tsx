import Hero from "./components/Hero";
import AnimationCardsCollection from "./components/AnimationCardsCollection";
import TimingFunctionBox from "./components/TimingFunctionBox";
import { AnimationProvider } from "./components/AnimationContext";
import GlobalControls from "./components/GlobalControls";
import AnimationModal from "./components/AnimationModal";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Snow Animations
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2"></p>
        </div>
      </header>
      <Hero />

      {/* Grid de animaciones */}
      <AnimationProvider>
        <GlobalControls />
        <TimingFunctionBox />
        <AnimationCardsCollection />
      </AnimationProvider>

      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500 dark:text-gray-400">
          Snow Animations — Copy, paste, and enjoy.
        </div>
      </footer>
      <AnimationModal />
    </main>
  );
}

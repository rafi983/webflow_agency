import Header from "./components/Header";
import Hero from "./components/Hero";
import Preview from "./components/Preview";
import Statistics from "./components/Statistics";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-gray-300 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-gray-300 rounded-lg rotate-45"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 border-2 border-gray-300 rounded-full"></div>
        <div className="absolute top-60 left-1/3 w-16 h-16 border-2 border-gray-300 rounded-lg"></div>
        <div className="absolute bottom-60 right-1/3 w-28 h-28 border-2 border-gray-300 rounded-full"></div>
        <div className="absolute top-32 right-1/2 w-12 h-12 border-2 border-gray-300 rounded-lg rotate-12"></div>
        <div className="absolute bottom-32 left-1/2 w-36 h-36 border-2 border-gray-300 rounded-full"></div>
        <div className="absolute top-80 right-10 w-14 h-14 border-2 border-gray-300 rounded-lg rotate-45"></div>
      </div>

      {/* 100vh Banner Section (Header + Hero Content) */}
      <div className="min-h-screen flex flex-col">
        <Header />
        <Hero />
      </div>

      {/* Main Content (rest of the sections) */}
      <main className="bg-[#EEF2FF]">
        <div>
          <Preview />
        </div>
        <div>
          <Statistics />
        </div>
        <div>
          <Testimonials />
        </div>
        <div>
          <FinalCTA />
        </div>
        <div>
          <Pricing />
        </div>
        <div>
          <Contact />
        </div>
        <div className="bg-white">
          <Footer />
        </div>
      </main>
    </div>
  );
}

import React from "react";

const Hero: React.FC = () => (
  <section className="relative w-full min-h-screen flex flex-col items-center justify-center">
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
      <img
        src="/src/assets/Hero-bg.png"
        alt="Hero Background"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-center">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 max-w-5xl leading-tight px-8">
        Cool Dark UI Template for <br className="hidden sm:block" />
        Webflow Agencies!
      </h1>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium text-lg">
        Stay Focused
      </button>
    </div>
  </section>
);

export default Hero;

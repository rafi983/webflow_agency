import React from "react";

const FinalCTA: React.FC = () => (
  <section className="relative z-10 py-20 mb-20 bg-[#EEF2FF]">
    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg px-8 py-16 flex flex-col items-center">
      <img
        src="/src/assets/wc-big.png"
        alt="Webflow Agency"
        className="w-20 h-20 mb-6 rounded-2xl shadow-md"
      />
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Ready to focus better
      </h2>
      <p className="text-xl text-gray-600 mb-8">
        {"This template instantly leveled up our presence."} – Studio Vertex
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg mb-10">
        Get Started Free
      </button>
      {/* Enhanced Preview Mockup */}
      <div className="relative w-full max-w-5xl mx-auto mt-8">
        <div className="bg-gradient-to-br from-green-400 via-blue-500 via-purple-600 to-orange-500 rounded-3xl p-1 shadow-2xl">
          <div className="bg-black rounded-3xl p-8 relative overflow-hidden">
            {/* Mock Browser Header */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 bg-gray-800 rounded-lg px-4 py-2 ml-4">
                <div className="text-gray-400 text-sm">webflow.com</div>
              </div>
            </div>
            {/* Enhanced Navigation */}
            <div className="flex justify-between items-center mb-8 text-white">
              <div className="text-sm font-medium">webflow Conf</div>
              <div className="flex gap-6 text-sm">
                <span>Agenda</span>
                <span>Speakers</span>
                <span>Sponsors</span>
                <span>Community</span>
                <span>FAQ</span>
                <button className="bg-white text-black hover:bg-gray-100 text-xs px-3 py-1 rounded-md h-8">
                  Watch sessions →
                </button>
              </div>
            </div>
            {/* Main Content with Gradient Background */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-blue-500/20 via-purple-600/20 to-orange-500/20 rounded-2xl"></div>
              <div className="relative grid lg:grid-cols-2 gap-8 p-8">
                {/* Left Content */}
                <div className="text-white space-y-6">
                  <h3 className="text-5xl md:text-6xl font-bold">
                    Webflow
                    <br />
                    Conf 2022
                  </h3>
                  <p className="text-gray-300 leading-relaxed max-w-md">
                    Thank you for making Webflow Conf 2022 our best event yet.
                    Catch up on what was announced and watch all the breakout
                    sessions now on Webflow TV.
                  </p>
                  <button className="bg-white text-black hover:bg-gray-100 px-4 py-2 rounded-md font-medium">
                    Watch sessions
                  </button>
                </div>
                {/* Right Content */}
                <div className="space-y-4">
                  {/* Event Info Card */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                    <div className="text-sm text-gray-300 mb-1">
                      WHEN AND WHERE
                    </div>
                    <div className="font-semibold">November 1</div>
                    <div className="text-sm text-gray-300">The Midway</div>
                  </div>
                  {/* Profile Card */}
                  <div className="bg-gradient-to-r from-orange-400 to-pink-400 rounded-lg p-4 flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg font-bold">👤</span>
                    </div>
                    <div className="text-white">
                      <div className="font-semibold">webflow Conf</div>
                      <button className="bg-white text-black hover:bg-gray-100 text-xs mt-2 px-3 py-1 rounded-md h-8">
                        Watch sessions
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-20 right-20 w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="absolute bottom-20 left-20 w-4 h-4 bg-green-400 rounded-sm rotate-45"></div>
            <div className="absolute top-40 left-1/3 w-2 h-2 bg-purple-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FinalCTA;

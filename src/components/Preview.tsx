import React from "react";

const Preview: React.FC = () => (
  <section className="relative z-10 px-8 py-20 max-w-7xl mx-auto mb-20">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          See It in Action
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          Explore the live preview and imagine your brand in this bold new look.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg">
          Launch Live Preview
        </button>
      </div>
      {/* Right Preview Mockup */}
      <div className="relative">
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 rounded-3xl p-8 shadow-2xl">
          {/* Mock Browser Header */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 bg-gray-700 rounded-lg px-4 py-2 ml-4">
              <div className="text-gray-400 text-sm">webflow.com</div>
            </div>
          </div>
          {/* Mock Navigation */}
          <div className="flex justify-between items-center mb-8 text-white">
            <div className="text-sm font-medium">webflow Conf</div>
            <div className="flex gap-6 text-sm">
              <span>Agenda</span>
              <span>Speakers</span>
              <span>S</span>
            </div>
          </div>
          {/* Main Content */}
          <div className="text-white">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Webflow
              <br />
              Conf 2022
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Thank you for making Webflow Conf 2022 our best event yet. Catch
              up on what was announced and watch all the breakout sessions now
              on Webflow TV.
            </p>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="absolute bottom-20 right-8 w-16 h-16 border border-gray-600 rounded-lg opacity-30"></div>
        </div>
      </div>
    </div>
  </section>
);

export default Preview;

import React from "react";

const Header: React.FC = () => (
  <header className="relative z-10 flex items-center justify-between w-full pt-6 pb-6">
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none -z-10">
      <img
        src="/src/assets/Hero-bg.png"
        alt="Hero Background"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="relative flex items-center w-full px-40">
      <div className="text-2xl font-bold text-blue-600 mr-auto">
        Webflow Agency
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
        Sign Up
      </button>
    </div>
  </header>
);

export default Header;

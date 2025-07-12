import React from "react";

const Footer: React.FC = () => (
  <footer className="relative z-10 py-16">
    <div className="max-w-4xl mx-auto px-8 text-center space-y-8">
      {/* Logo */}
      <div className="text-4xl font-bold text-blue-600">Webflow Agency</div>
      {/* Description */}
      <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
        Ready to elevate your online presence? Contact us today to discuss your
        project and discover how we can bring your vision to life.
      </p>
      {/* Navigation Links */}
      <nav className="flex justify-center gap-8 text-gray-600">
        <a href="#" className="hover:text-blue-600 transition-colors">
          Home
        </a>
        <a href="#" className="hover:text-blue-600 transition-colors">
          About
        </a>
        <a href="#" className="hover:text-blue-600 transition-colors">
          How it Works
        </a>
        <a href="#" className="hover:text-blue-600 transition-colors">
          Services
        </a>
      </nav>
    </div>
  </footer>
);

export default Footer;

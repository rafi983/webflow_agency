import React from "react";

const Contact: React.FC = () => (
  <section className="relative z-10 py-20 mb-20 bg-[#EEF2FF]">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            {"Let's Get in"} <br />
            Touch
          </h2>
        </div>
        {/* Right Contact Form */}
        <div className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-lg font-medium text-gray-900"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@email.com"
              className="h-14 text-lg border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="name" className="text-lg font-medium text-gray-900">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="full name"
              className="h-14 text-lg border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-lg font-medium text-gray-900"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="write your message...."
              rows={6}
              className="text-lg border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-blue-500 resize-none"
            />
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 text-lg font-medium rounded-lg">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;

import React from "react";

const Statistics: React.FC = () => (
  <section className="relative z-10 mb-20 bg-[#EEF2FF]">
    <div className="max-w-6xl mx-auto px-8 py-20 rounded-3xl bg-indigo-100 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-16">
        Joined Thousands of Productive Users
      </h2>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <div className="text-5xl md:text-6xl font-bold text-indigo-600">
            50K
          </div>
          <div className="text-lg text-indigo-700/80">Active Users</div>
        </div>
        <div className="space-y-4">
          <div className="text-5xl md:text-6xl font-bold text-indigo-600">
            2M+
          </div>
          <div className="text-lg text-indigo-700/80">Focus Sessions</div>
        </div>
        <div className="space-y-4">
          <div className="text-5xl md:text-6xl font-bold text-indigo-600">
            95%
          </div>
          <div className="text-lg text-indigo-700/80">Satisfaction Rate</div>
        </div>
      </div>
    </div>
  </section>
);

export default Statistics;

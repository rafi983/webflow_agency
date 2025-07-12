import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Riya N.",
    date: "June 2025",
    initials: "RN",
    quote: "This template instantly leveled up our presence.",
    company: "Studio Vertex",
    gradient: "from-blue-400 to-purple-500",
  },
  {
    name: "Samir P.",
    date: "May 2025",
    initials: "SP",
    quote: "The design is so smooth and modern. Highly recommended!",
    company: "PixelCraft",
    gradient: "from-green-400 to-blue-500",
  },
  {
    name: "Ava L.",
    date: "April 2025",
    initials: "AL",
    quote: "Support was quick and helpful. Great experience.",
    company: "Designify",
    gradient: "from-purple-400 to-pink-500",
  },
];

const gradientMap: Record<string, string> = {
  "from-blue-400 to-purple-500":
    "bg-gradient-to-br from-blue-400 to-purple-500",
  "from-green-400 to-blue-500": "bg-gradient-to-br from-green-400 to-blue-500",
  "from-purple-400 to-pink-500":
    "bg-gradient-to-br from-purple-400 to-pink-500",
  productive: "bg-[#4E47FF]",
};

const Testimonials: React.FC = () => (
  <section className="relative z-10 py-20 mb-20 bg-[#EEF2FF]">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-14">
      What our users say
    </h2>
    <div className="flex gap-8 overflow-x-auto pb-4 pt-4 justify-center">
      {testimonials.map((t, idx) => (
        <div
          key={idx}
          className={`min-w-[320px] max-w-[340px] flex flex-col items-center bg-white rounded-[2rem_0.5rem_2rem_0.5rem] shadow-xl border-2 border-indigo-100 px-6 py-8 transition-transform duration-200 hover:-translate-y-2 hover:scale-[1.03] hover:border-indigo-500 relative ${
            t.gradient === "productive" ? "bg-[#4E47FF] text-white" : ""
          }`}
        >
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <blockquote className="text-lg font-medium text-indigo-900 text-center mb-4 leading-relaxed">
            “{t.quote}”
            <span className="block text-indigo-500 mt-2 text-base">
              – {t.company}
            </span>
          </blockquote>
          <div className="flex items-center gap-3 mt-2">
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-md ${
                gradientMap[t.gradient] ?? "bg-indigo-400"
              }`}
            >
              {t.initials}
            </div>
            <div>
              <div className="text-base font-semibold text-indigo-900">
                {t.name}
              </div>
              <div className="text-sm text-indigo-400">{t.date}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;

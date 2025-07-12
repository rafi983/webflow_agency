import React from "react";

const plans = [
  {
    name: "Starter",
    price: "$299",
    features: ["1 Webflow site", "Basic SEO setup", "Email support"],
    popular: false,
  },
  {
    name: "Professional",
    price: "$599",
    features: [
      "Up to 3 Webflow sites",
      "Advanced SEO",
      "Priority support",
      "Custom animations",
    ],
    popular: true,
  },
  {
    name: "Agency",
    price: "$999",
    features: [
      "Unlimited sites",
      "Full branding",
      "Dedicated manager",
      "Team training",
    ],
    popular: false,
  },
];

const Pricing: React.FC = () => (
  <section className="relative z-10 py-20 mb-20 bg-[#EEF2FF]">
    <div className="max-w-7xl mx-auto px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
        Pricing Plans
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative bg-white rounded-3xl shadow-2xl flex flex-col items-center px-8 pt-12 pb-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-blue-200 ${
              plan.popular
                ? "border-4 border-blue-600 z-10 scale-105"
                : "border border-gray-200"
            }`}
            style={{
              boxShadow: plan.popular
                ? "0 8px 32px 0 rgba(37,99,235,0.15)"
                : undefined,
            }}
          >
            {plan.popular && (
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg">
                Most Popular
              </div>
            )}
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                plan.popular
                  ? "bg-gradient-to-br from-blue-500 to-blue-300"
                  : "bg-gradient-to-br from-gray-200 to-gray-100"
              }`}
            >
              <span className="text-3xl font-bold text-blue-600">
                {plan.name[0]}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2 tracking-tight">
              {plan.name}
            </h3>
            <div className="text-5xl font-extrabold text-blue-600 mb-4 drop-shadow-lg">
              {plan.price}
            </div>
            <ul className="mb-8 space-y-2 text-gray-700 text-base">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-xl font-semibold text-lg transition-colors duration-200 ${
                plan.popular
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-100 text-blue-600 hover:bg-blue-50"
              }`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;

export const PricingPage = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600">Choose the plan that fits your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Free", price: "$0", features: ["Up to 1,000 requests/month", "Basic LLM support", "Community support", "Core features"], color: "gray", popular: false },
              { name: "Pro", price: "$49", features: ["Up to 100,000 requests/month", "All LLM providers", "Priority support", "Advanced memory", "Custom tools"], color: "blue", popular: true },
              { name: "Enterprise", price: "Custom", features: ["Unlimited requests", "Dedicated support", "Custom integrations", "SLA guarantee", "On-premise deployment"], color: "purple", popular: false }
            ].map((plan, idx) => (
              <div key={idx} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                {plan.popular && <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full w-fit mb-4">Most Popular</div>}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-600">/month</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
"use client";
import { CheckCircle } from "lucide-react";

export default function Services() {
  const services = [
    "Strategy and planning",
    "Content calendar",
    "Market research",
    "Creation",
    "Analysis and Feedback",
    "Optimization",
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Services</h2>
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            From crafting engaging posts to building campaigns that drive
            results, I turn ideas into stories that your audience will remember.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="h-5 w-5 text-purple-600" />
                <h3 className="font-semibold text-lg">{service}</h3>
              </div>
              <p className="text-gray-600">
                Professional {service.toLowerCase()} services tailored to your
                brand's unique needs and goals.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

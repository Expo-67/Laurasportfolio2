"use client";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex items-start gap-4">
            <div className="mt-1">
              <GraduationCap className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                Bachelor Of Arts in Counselling Psychology
              </h3>
              <p className="text-gray-600">
                The Catholic University of Eastern Africa
              </p>
              <p className="text-gray-500">2022-2025</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="mt-1">
              <GraduationCap className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                Certification in Digital Marketing
              </h3>
              <p className="text-gray-600">Google Digital Garage</p>
              <p className="text-gray-500">2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

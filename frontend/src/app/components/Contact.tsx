"use client";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Contact Me</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center gap-4 mb-6">
              <Mail className="h-6 w-6 text-purple-600" />
              <div>
                <p className="text-gray-500">Email:</p>
                <p className="font-medium">kmkaikamba@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

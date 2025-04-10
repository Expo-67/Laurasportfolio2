"use client";
import Image from "next/image";
import Profle from "../../../Assets/laurapic.jpg";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hello, I'm <span className="text-purple-600">Laura Kalela</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700">
            Digital Marketer
          </h2>
          <p className="text-gray-600 max-w-lg">
            I've always been fascinated by the idea of leaving an unforgettable
            impression on people's lives. I channel that passion into helping
            brands connect on a deeper level.
          </p>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image
              src={Profle}
              alt="Laura Kalela"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <p className="text-sm text-gray-500">PORTFOLIO </p>
      </div>
    </section>
  );
}

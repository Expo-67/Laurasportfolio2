"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/Aboutme";
import Education from "./components/Education";
import Tools from "./components/Tools";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Services />
      <Tools />
      <Contact />
      <Footer />
    </main>
  );
}

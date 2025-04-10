"use client";
export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900 text-white text-center">
      <div className="container mx-auto px-4">
        <p>Thank you for visiting my portfolio</p>
        <p className="text-sm mt-2 text-gray-400">
          © {new Date().getFullYear()} redevops-crafting digital experiences
          Laura Kalela. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

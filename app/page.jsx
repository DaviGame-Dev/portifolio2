import React from "react";
import HeroSection from "@/componentes/portfolio/HeroSection";
import GamesSection from "@/componentes/portfolio/GamesSection";
import AboutSection from "@/componentes/portfolio/AboutSection";
import ContactSection from "@/componentes/portfolio/ContactSection";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <GamesSection />
      <AboutSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800 text-center">
        <p className="text-gray-400">
          Made with <span className="text-red-500">❤️</span> and <span className="text-purple-400">Unity</span>
        </p>
        <p className="text-gray-500 text-sm mt-2">
          © 2024 - Todos os direitos reservados
        </p>
      </footer>
    </div>
  );

}



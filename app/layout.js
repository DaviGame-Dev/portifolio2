"use client"; // Mantenha isso, pois você usa useEffect e styled-jsx

import "./globals.css"; // Mantenha isso
import React from "react";
import { Gamepad2 } from "lucide-react";

// Seu código original do Layout.js, mas agora dentro de um RootLayout
// que inclui <html> e <body>
export default function RootLayout({ children }) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <html lang="pt-br"> {/* <-- ADICIONE O <html> */}
      <body> {/* <-- ADICIONE O <body> */}

        {/* Todo o seu conteúdo original do Layout.js vai aqui dentro */}
        <div className="min-h-screen bg-[#0A0A0F] text-white relative overflow-hidden">
          {/* Background Effects */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
          </div>

          {/* Navigation */}
          <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? "bg-[#0A0A0F]/95 backdrop-blur-lg border-b border-purple-500/20" : ""
          }`}>
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Gamepad2 className="w-8 h-8 text-purple-500" />
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-transparent bg-clip-text">
                    GameDev Portfolio
                  </span>
                </div>
                <div className="hidden md:flex items-center gap-8">
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  >
                    Início
                  </button>
                  <button
                    onClick={() => scrollToSection("portfolio")}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    Jogos
                  </button>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                  >
                    Sobre
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:scale-105 transition-transform duration-200"
                  >
                    Contato
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <div className="relative z-10">
            {children} {/* {children} é o seu app/page.jsx */}
          </div>

          {/* Custom Cursor Effect */}
          <style jsx>{`
            * {
              cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="%238B5CF6" opacity="0.5"/></svg>'), auto;
            }
            a, button {
              cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="%23EC4899" opacity="0.7"/></svg>'), pointer;
            }
          `}</style>
        </div>
      
      </body>
    </html>
  );
}

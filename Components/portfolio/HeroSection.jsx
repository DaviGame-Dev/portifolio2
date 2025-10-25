import React from "react";
import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com", color: "hover:text-purple-400" },
    { icon: ExternalLink, label: "Itch.io", url: "https://itch.io", color: "hover:text-pink-400" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com", color: "hover:text-cyan-400" },
    { icon: Twitter, label: "Twitter", url: "https://twitter.com", color: "hover:text-blue-400" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Gaming Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-8"
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(139, 92, 246, 0.3)",
                "0 0 40px rgba(139, 92, 246, 0.5)",
                "0 0 20px rgba(139, 92, 246, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-purple-400 text-sm font-medium">🎮 Game Developer</span>
          </motion.div>

          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-transparent bg-clip-text animate-gradient">
              Seu Nome Aqui
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            Transformo ideias em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">
              mundos jogáveis
            </span>
          </p>

          <p className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Criando experiências interativas únicas que conectam jogadores a histórias inesquecíveis
          </p>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-6 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-4 bg-[#1A1A2E] rounded-xl border border-gray-800 ${social.color} transition-all duration-300 hover:scale-110 hover:border-current`}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <social.icon className="w-6 h-6" />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-xs text-gray-400 whitespace-nowrap">{social.label}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Ver Meus Jogos</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
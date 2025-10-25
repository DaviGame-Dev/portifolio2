import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Gamepad2, Zap, Heart, Trophy } from "lucide-react";

export default function AboutSection() {
  const skills = [
    { name: "Unity", icon: Gamepad2, color: "from-purple-500 to-purple-700", level: 95 },
    { name: "C#", icon: Code, color: "from-green-500 to-emerald-600", level: 90 },
    { name: "Game Design", icon: Palette, color: "from-pink-500 to-rose-600", level: 88 },
    { name: "Unreal Engine", icon: Zap, color: "from-cyan-500 to-blue-600", level: 75 },
    { name: "Pixel Art", icon: Heart, color: "from-yellow-500 to-orange-500", level: 80 },
    { name: "Level Design", icon: Trophy, color: "from-indigo-500 to-purple-600", level: 85 },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full mb-6">
              <Heart className="w-4 h-4 text-pink-400" />
              <span className="text-pink-400 text-sm font-medium">Sobre Mim</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
                Minha Jornada
              </span>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Story */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="relative p-8 bg-[#1A1A2E] rounded-2xl border border-gray-800">
                <div className="absolute top-0 left-8 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-bold">
                  ✨ Desenvolvedor Indie
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Desde criança, fui fascinado pelo poder dos jogos de transportar pessoas para novos mundos. 
                  Essa paixão me levou a estudar desenvolvimento de jogos e transformar código em experiências mágicas.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Especializado em <span className="text-purple-400 font-semibold">Unity</span> e{" "}
                  <span className="text-cyan-400 font-semibold">C#</span>, crio jogos que combinam mecânicas 
                  envolventes com narrativas cativantes. Cada projeto é uma oportunidade de experimentar, 
                  aprender e superar limites criativos.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Meu objetivo? Desenvolver jogos que não apenas entretenham, mas que deixem uma marca 
                  duradoura no coração dos jogadores. 🎮💜
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">5+</div>
                  <div className="text-xs text-gray-400">Jogos</div>
                </div>
                <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">10K+</div>
                  <div className="text-xs text-gray-400">Downloads</div>
                </div>
                <div className="p-4 bg-pink-500/10 border border-pink-500/30 rounded-xl text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-1">3+</div>
                  <div className="text-xs text-gray-400">Anos</div>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                  Habilidades Técnicas
                </span>
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 bg-gradient-to-r ${skill.color} rounded-lg group-hover:scale-110 transition-transform duration-200`}>
                          <skill.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-200">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Pixel Art Decoration */}
          <div className="relative h-32 flex items-center justify-center overflow-hidden">
            <div className="flex gap-2">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-sm"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
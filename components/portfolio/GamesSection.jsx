"use client"

import React, { useState, useEffect } from "react";
import { Game } from "@/entities/Game";
import { motion } from "framer-motion";
import { Play, ExternalLink, Sparkles } from "lucide-react";

export default function GamesSection() {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadGames();
  }, []);

  const loadGames = async () => {
    setIsLoading(true);
    const data = await Game.list("-created_date");
    setGames(data);
    setIsLoading(false);
  };

  const techColors = {
    "Unity": "bg-gradient-to-r from-purple-500 to-purple-700",
    "Unreal": "bg-gradient-to-r from-blue-500 to-cyan-600",
    "C#": "bg-gradient-to-r from-green-500 to-emerald-600",
    "C++": "bg-gradient-to-r from-blue-600 to-indigo-700",
    "Godot": "bg-gradient-to-r from-blue-400 to-cyan-500",
    "JavaScript": "bg-gradient-to-r from-yellow-500 to-orange-500",
  };

  return (
    <section id="portfolio" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Portfólio</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Meus Jogos
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Projetos que combinam criatividade, tecnologia e paixão por games
          </p>
        </motion.div>

        {/* Games Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-[#1A1A2E] rounded-2xl h-96 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                className="group relative bg-[#1A1A2E] rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={game.cover_image || "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800"}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] to-transparent opacity-60" />
                  
                  {/* Featured Badge */}
                  {game.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-500/90 backdrop-blur-sm rounded-full text-xs font-bold text-black">
                      ⭐ Destaque
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {game.play_link && (
                      <a
                        href={game.play_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-purple-600 rounded-full hover:bg-purple-500 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Play className="w-5 h-5 fill-white" />
                      </a>
                    )}
                    {game.details_link && (
                      <a
                        href={game.details_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-cyan-600 rounded-full hover:bg-cyan-500 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {game.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {game.description}
                  </p>

                  {/* Technologies */}
                  {game.technologies && game.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {game.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 text-xs font-semibold text-white rounded-full ${
                            techColors[tech] || "bg-gradient-to-r from-gray-600 to-gray-700"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-30" />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && games.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 bg-purple-500/10 rounded-full flex items-center justify-center">
              <Sparkles className="w-12 h-12 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-300 mb-2">Em breve novos jogos!</h3>
            <p className="text-gray-500">Estou trabalhando em projetos incríveis</p>
          </div>
        )}
      </div>
    </section>
  );

}

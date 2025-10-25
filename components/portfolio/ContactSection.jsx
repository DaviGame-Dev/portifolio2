"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MessageSquare, User, CheckCircle, Sparkles } from "lucide-react";
//import { SendEmail } from "@/integrations/Core";
//import { Button } from "@/components/ui/button";
//import { Input } from "@/components/ui/input";
//import { Textarea } from "@/components/ui/textarea";

// Componentes falsos para o build passar
const Button = ({ children, ...props }) => <button {...props}>{children}</button>;
const Input = (props) => <input {...props} />;
const Textarea = (props) => <textarea {...props} />;

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
/*
    try {
      await SendEmail({
        to: "seu-email@exemplo.com", // Substitua pelo seu email
        subject: `Contato do Portfolio - ${formData.name}`,
        body: `
          Nome: ${formData.name}
          Email: ${formData.email}
          
          Mensagem:
          ${formData.message}
        `,
      });

      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Erro ao enviar email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
*/

    // Simulação de sucesso
    setTimeout(() => {
      setIsSuccess(true);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };
  
  return (
    <section id="contact" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Contato</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                Vamos Criar Algo Épico
              </span> {/* <-- TAG FALTANDO ESTAVA AQUI */}
            </h2> {/* <-- TAG FALTANDO ESTAVA AQUI */}
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Tem uma ideia de jogo? Quer colaborar em um projeto? Ou só quer bater um papo sobre games?
            </p>
          </div>

          {/* Success Message */}
          {isSuccess && (
            <motion.div
              className="mb-8 p-6 bg-green-500/10 border border-green-500/30 rounded-2xl flex items-center gap-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <CheckCircle className="w-8 h-8 text-green-400" />
              <div>
                <h3 className="text-green-400 font-bold text-lg">Mensagem Enviada! 🎉</h3>
                <p className="text-gray-300">Obrigado pelo contato! Responderei em breve.</p>
              </div>
            </motion.div>
          )}

          {/* Contact Form */}
          <motion.div
            className="relative p-8 bg-[#1A1A2E] rounded-2xl border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl blur-xl opacity-20" />

            <form onSubmit={handleSubmit} className="relative space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <User className="w-4 h-4 text-purple-400" />
                  Seu Nome
                </label>
                <Input
                  type="text"
                  placeholder="Como posso te chamar?"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-transparent border border-gray-600 focus:border-purple-500 text-white placeholder:text-gray-400 h-12 p-4 rounded-lg"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  Seu Email
                </label>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-transparent border border-gray-600 focus:border-cyan-500 text-white placeholder:text-gray-400 h-12 p-4 rounded-lg"
                />
              </div>

              {/* Message Textarea */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <MessageSquare className="w-4 h-4 text-pink-400" />
                  Sua Mensagem
                </label>
                <Textarea
                  placeholder="Conte-me sobre sua ideia ou projeto..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full bg-transparent border border-gray-600 focus:border-pink-500 text-white placeholder:text-gray-400 resize-none p-4 rounded-lg"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-500 hover:via-pink-500 hover:to-cyan-500 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </div>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Direct Contact Info */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-gray-400 mb-4">Ou me envie um email diretamente:</p>
            <a
              href="mailto:seu-email@exemplo.com"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              <Mail className="w-5 h-5" />
              seu-email@exemplo.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

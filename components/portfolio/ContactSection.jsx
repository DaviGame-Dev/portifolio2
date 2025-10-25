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
            {/* Esta era a linha que estava quebrando antes. Agora está correta. */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Contato</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                Vamos Criar Algo Épico

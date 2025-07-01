"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Erro ao enviar a mensagem.");
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro ao enviar a mensagem.");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contato@progamers.com.br",
      color: "from-gaming-red to-red-600",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 (11) 9999-9999",
      color: "from-gaming-accent to-blue-600",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "São Paulo, SP - Brasil",
      color: "from-gaming-purple to-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-gaming-darker relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gaming-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gaming-red/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tem alguma dúvida ou quer fazer parte da nossa comunidade? Estamos
            aqui para ajudar!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Informações de Contato
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Nossa equipe está sempre disponível para atender você. Entre em
                contato através de qualquer um dos canais abaixo ou utilize o
                formulário ao lado.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-gaming-dark/50 rounded-lg border border-gray-800 hover:border-gaming-purple/30 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center`}
                >
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{info.title}</h4>
                  <p className="text-gray-300">{info.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <Card className="bg-gaming-dark border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">
                  Envie sua Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  method="post"
                  name="formulario-contato"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-white">
                      Nome
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-gaming-darker border-gray-700 text-white focus:border-gaming-purple"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-white">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-gaming-darker border-gray-700 text-white focus:border-gaming-purple"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-white">
                      Assunto
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-gaming-darker border-gray-700 text-white focus:border-gaming-purple"
                      placeholder="Sobre o que você quer falar?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-white">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full min-h-[120px] px-3 py-2 bg-gaming-darker border border-gray-700 rounded-md text-white focus:border-gaming-purple focus:outline-none focus:ring-2 focus:ring-gaming-purple/20 resize-vertical"
                      placeholder="Conte-nos mais detalhes..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    value="enviar"
                    id="enviar"
                    className="mx-auto flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg rounded-md shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 w-60 h-12"
                  >
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

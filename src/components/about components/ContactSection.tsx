"use client";
import React, { FormEvent, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import toast from "react-hot-toast";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = {
      name,
      email,
      subject,
      message
    }

    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    });

const content = await response.json();


if (content?.data?.tableRange) {
  toast.success("Mensagem enviada com sucesso!");
} else {
  toast.error("Erro ao enviar formulário.");
}

    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
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
      content: "+55 (85) 98112-2763",
      color: "from-gaming-accent to-blue-600",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Fortaleza, CE - Brasil",
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
                className="flex items-center space-x-4 p-4 bg-gradient-to-b from-gray-800/40 to-gray-900/60 rounded-lg border border-gray-800 hover:border-gaming-purple/30 transition-all duration-300"
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
            <Card className="  bg-gradient-to-b from-gray-800/40 to-gray-900/60 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">
                  Envie sua Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="py-6 px-4 space-y-5  rounded-xl shadow-lg" onSubmit={handleSubmit}>
                  <div className="flex flex-col space-y-1">
                    <label
                      htmlFor="name"
                      className="text-white text-sm font-medium"
                    >
                      Nome
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Digite seu nome"
                      className="h-11 w-full rounded-md border border-gray-700 bg-transparent px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>

                  <div className="flex flex-col space-y-1">
                    <label
                      htmlFor="email"
                      className="text-white text-sm font-medium"
                    >
                      Email
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Digite seu email"
                      className="h-11 w-full rounded-md border border-gray-700 bg-transparent px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>

                  <div className="flex flex-col space-y-1">
                    <label
                      htmlFor="subject"
                      className="text-white text-sm font-medium"
                    >
                      Assunto
                    </label>
                    <input
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Assunto da mensagem"
                      className="h-11 w-full rounded-md border border-gray-700 bg-transparent px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>

                  <div className="flex flex-col space-y-1">
                    <label
                      htmlFor="message"
                      className="text-white text-sm font-medium"
                    >
                      Mensagem
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      name="message"
                      id="message"
                      placeholder="Digite sua mensagem"
                      rows={4}
                      className="w-full rounded-md border border-gray-700 bg-transparent px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-md transition-all shadow-md hover:shadow-lg"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/card/card";
import toast from "react-hot-toast";
import { useState, type FormEvent } from "react";
import { Users, Cpu, Zap, Sliders, ShieldCheck, Globe2 } from "lucide-react";
export default function CtaProducer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
  return (
    <section className="relative w-full min-h-[600px] flex flex-col items-center justify-center overflow-hidden py-12">
      {/* Vídeo de fundo */}
      <video
        className="absolute inset-0 w-full h-full scale-200 sm:scale-100 object-cover z-0"
        src="torcida.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Overlay escuro para contraste */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Título e subtítulo sempre acima */}
      <div className="relative z-10 w-full max-w-3xl mx-auto text-center mb-8 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Pronto para Impulsionar sua Presença nos E-sports?</h1>
        <p className="text-base md:text-xl text-gray-300">Participe dos maiores torneios de e-sports e conquiste prêmios incríveis</p>
      </div>

      {/* Conteúdo principal: botões e formulário */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row md:items-start items-stretch justify-center gap-8 px-4 md:px-8">
        {/* Botões à esquerda */}
        <div className="flex flex-col gap-4 w-full max-w-xs mx-auto md:mx-0 md:w-1/2 md:justify-start md:items-start">
          {/* Texto de vantagens com tópicos e ícones */}
          <div className="mb-4 text-left">
            <p className="text-white text-xl font-semibold mb-3 text-justify">
              Tenha a <span className="font-bold text-purple-400">Progamers</span> no seu evento e garanta uma experiência completa com os melhores resultados. Confira as vantagens:
            </p>
            <ul className="mt-3 space-y-3">
              <li className="flex items-center gap-2 text-white text-lg">
                <Users className="text-purple-400 w-6 h-6" /> Organização Profissional
              </li>
              <li className="flex items-center gap-2 text-white text-lg">
                <Cpu className="text-purple-400 w-6 h-6" /> Tecnologia de Ponta
              </li>
              <li className="flex items-center gap-2 text-white text-lg">
                <Zap className="text-purple-400 w-6 h-6" /> Engajamento Máximo
              </li>
              <li className="flex items-center gap-2 text-white text-lg">
                <Sliders className="text-purple-400 w-6 h-6" /> Personalização Total
              </li>
              <li className="flex items-center gap-2 text-white text-lg">
                <ShieldCheck className="text-purple-400 w-6 h-6" /> Credibilidade e Alcance
              </li>
            </ul>
          </div>
          <a href="https://app.progamers.com.br/register" target="_blank" rel="noreferrer" className="w-full">
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 text-lg rounded-md shadow-lg transition-all duration-300 transform hover:scale-105">
              Criar Conta
            </button>
          </a>
          <a href="https://wa.me/5585981122763?text=quero%20ser%20parceiro" target="_blank" rel="noreferrer" className="w-full">
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 text-lg rounded-md shadow-lg transition-all duration-300 transform hover:scale-105">
              Falar com um consultor
            </button>
          </a>
        </div>
        {/* Formulário à direita */}
        <div className="w-full max-w-md md:w-1/2 mx-auto md:mx-0">
          <Card className="bg-gradient-to-b from-gray-800/40 to-gray-900/60 border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                Envie sua Mensagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="py-6 px-4 space-y-5 rounded-xl shadow-lg" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="name" className="text-white text-sm font-medium">Nome</label>
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
                  <label htmlFor="email" className="text-white text-sm font-medium">Email</label>
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
                  <label htmlFor="subject" className="text-white text-sm font-medium">Assunto</label>
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
                  <label htmlFor="message" className="text-white text-sm font-medium">Mensagem</label>
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
    </section>
  );
}

"use client";
import React from "react";
import { CardContent } from "../about components/card";


interface Testimonial {
  id: number;
  text: string;
  author: {
    name: string;
    title: string;
    initial: string;
    bgColor: string;
  };
}
export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "A plataforma da Pro Gamers nos ajudou a aumentar a visibilidade da nossa marca em 300% entre o público gamer. As ferramentas de gestão são intuitivas e fornecem insights valiosos.",
      author: {
        name: "Maria Silva",
        title: "Diretora de Marketing, TechBrand",
        initial: "M",
        bgColor: "bg-purple-700",
      },
    },
    {
      id: 2,
      text: "Conseguimos organizar nosso torneio nacional com mais de 5.000 jogadores sem complicações. O suporte da equipe Pro Gamers foi excepcional durante todo o processo.",
      author: {
        name: "Roberto Mendes",
        title: "Produtor de Eventos, GameCon",
        initial: "R",
        bgColor: "bg-blue-700",
      },
    },
    {
      id: 3,
      text: "As ferramentas de análise de dados nos permitiram entender melhor nosso público e otimizar nossas estratégias de patrocínio, resultando em um ROI 40% maior.",
      author: {
        name: "Carolina Fernandes",
        title: "CEO, BrandSponsor",
        initial: "C",
        bgColor: "bg-green-700",
      },
    },
  ];

  return (
    <section className="py-20 bg-gaming-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            O que nossos Parceiros dizem
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="  bg-gradient-to-b from-gray-800/40 border border-gray-800  to-gray-900/60 rounded-2xl h-full hover:border-purple-500/30 transition-all duration-300"
              style={{ cursor: "default" }}
            >
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <p className="text-gray-400 mt-6 mb-6">{testimonial.text}</p>
                <div className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full ${testimonial.author.bgColor} flex items-center justify-center text-white font-bold text-xl`}
                  >
                    {testimonial.author.initial}
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-semibold">{testimonial.author.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.author.title}</p>
                  </div>
                </div>
              </CardContent>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";

import { Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "./card";

import useEmblaCarousel from "embla-carousel-react";

export default function TeamSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" });

  const teamMembers = [
    {
      id: 1,
      name: "Pedro Carvalho",
      role: "CEO & Fundador",
      description:
        "Empreende no mercado de games desde 2014, sempre focando em otimização, estratégias e experiências épicas.",
      image: "/lovable-uploads/df53e211-12fa-4432-af87-ee2ce5c953b4.png",
      social: {
        linkedin: "https://www.linkedin.com/in/pedrocarvalhor/",
        instagram: "https://www.instagram.com/pedrohcarvalhor",
      },
    },
    {
      id: 2,
      name: "João Igor Matos",
      role: "CTO & Co-Fundador",
      description:
        "7 anos de experiência no mercado de desenvolvimento de software. Desenvolvedor full stack e consultor, especialista, com entrega, Liderança e excelência.",
      image: "/lovable-uploads/d8525814-2505-4952-a9a9-6c6520417a9a.png",
      social: {
        linkedin: "https://www.linkedin.com/in/joao-igor-matos/",
        instagram: "https://www.instagram.com/joao.igor/",
      },
    },
    {
      id: 3,
      name: "Barbara Carvalho",
      role: "Co-Fundadora",
      description:
        "Heroína do ano Ceará Awards 2023, MBA em Marketing internacional - Gamer, sempre inovando nas estratégias do mercado.",
      image: "/lovable-uploads/6311fc82-b8d2-4a2f-a9e5-2cf3b5244f4d.png",
      social: {
        linkedin: "https://www.linkedin.com/in/b%C3%A1rbaracarvalhoo/",
        instagram: "https://www.instagram.com/babi1z/",
      },
    },
    {
      id: 9,
      name: "Juliano Pimentel",
      role: "CFO",
      description:
        "Desenvolvedor, com sólida vivência em gestão e discovery de produtos.",
      image: "/lovable-uploads/f8afe76e-5217-4b40-b0c6-2609d92c82ad.png",
      social: {
        linkedin: "",
        instagram: "",
      },
    },
    {
      id: 10,
      name: "Sergio Gabriel",
      role: "CCO",
      description:
        "Designer criativo multidisciplinar, com atuação como Diretor Criativo e Diretor de Arte, sempre com foco em eficiência, inovação e impacto visual.",
      image: "/lovable-uploads/206a638c-0e30-4121-8893-61aeacb5ff44.png",
      social: {
        linkedin: "https://www.linkedin.com/in/dekki/",
        instagram: "https://www.instagram.com/sergiodekki/",
      },
    },
    {
      id: 4,
      name: "Pedro Roger",
      role: "League Ops & Dev Fullstack Jr",
      description:
        "Graduando de Engenharia, com vasta experiência gamer, Desenvolvedor web e designer, habilidades na área de criação de projetos, e manutenções de códigos.",
      image: "/lovable-uploads/67096908-eafa-45ff-9a99-24d3a8422e23.png",
      social: {
        linkedin: "https://www.linkedin.com/in/pedro-roger/",
        instagram: "https://www.instagram.com/eng.pedrodev/",
      },
    },
    {
      id: 5,
      name: "Jonas Silva",
      role: "Dev Fullstack",
      description:
        "Resiliente e adaptável, atuando em migração de sistemas e no desenvolvimento de aplicações para diversos setores, incluindo o bancário.",
      image: "/lovable-uploads/dfd5827f-ff24-4e34-a728-e20c2adfffc1.png",
      social: {
        linkedin: "",
        instagram: "",
      },
    },
    {
      id: 6,
      name: "Raul Renner",
      role: "Dev Fullstack",
      description:
        "Bacharel em Engenharia de Software. Desenvolvedor com mais de 5 anos de experiência no desenvolvimento de projetos de software, com atuação em diversas áreas.",
      image: "/lovable-uploads/c356ea93-26d9-48e2-94f6-66e061de0c2e.png",
      social: {
        linkedin: "",
        instagram: "",
      },
    },
    {
      id: 7,
      name: "Marcos Gomes",
      role: "Q.A",
      description:
        "Profissional em início de carreira na área de Quality Assurance(QA).",
      image: "/lovable-uploads/261a144c-8c20-4964-8bdd-6de75426a221.png",
      social: {
        linkedin: "",
        instagram: "",
      },
    },
    {
      id: 8,
      name: "Krisalex Oliveira",
      role: "Events Manager",
      description:
        "Apaixonado por criar experiências inesquecíveis promovendo eventos e criando conteúdo. Transformando momentos em histórias visuais incríveis.",
      image: "/lovable-uploads/f19c6729-d3ad-46e5-8bd7-22cab6130254.png",
      social: {
        linkedin: "",
        instagram: "",
      },
    },
  ];

  return (
    <section className="py-20 bg-gaming-dark relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Nossa Equipe
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça as pessoas por trás da revolução dos e-sports brasileiros
          </p>
        </div>

        {/* Embla viewport: largura total + overflow escondido */}
        <div className="overflow-hidden w-full" ref={emblaRef}>
          {/* Track do embla: display flex, margem negativa para compensar margens dos slides */}
          <div className="flex" style={{ marginLeft: "-1.5rem" }}>
            {teamMembers.map((member) => (
              // Cada slide recebe margem esquerda para criar espaçamento entre cards
              <div
                key={member.id}
                className="min-w-[280px] md:min-w-[360px] lg:min-w-[400px] flex-shrink-0"
                style={{ marginLeft: "1.5rem" }}
              >
                <Card className="group w-100 h-full bg-gaming-darker border border-gray-800 transition-all duration-300 hover:border-gaming-purple/60 hover:shadow-lg hover:scale-[1.02]">
                  <CardContent className="p-6 text-center">
                    <div className="mt-6 mb-4 flex justify-center">
                      <div className="p-[3px] bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 rounded-full w-32 h-32 transition-transform duration-300 group-hover:scale-105">
                        <div className="overflow-hidden rounded-full w-full h-full">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold pt-4">{member.name}</h3>

                    <div className="mb-4 text-sm font-semibold bg-gradient-to-r from-fuchsia-600 to-blue-400 to-red-700 bg-clip-text text-transparent">
                      {member.role}
                    </div>

                    <p className="text-gray-400 text-sm mb-6 leading-relaxed text-justify">
                      {member.description}
                    </p>

                    <div className="flex justify-center gap-3">
                      {member.social.linkedin ? (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center hover:scale-105 transition"
                        >
                          <Linkedin className="w-5 h-5 text-white" />
                        </a>
                      ) : (
                        <div className="w-10 h-10 bg-gray-700/30 rounded-full flex items-center justify-center cursor-not-allowed">
                          <Linkedin className="w-5 h-5 text-gray-500" />
                        </div>
                      )}

                      {member.social.instagram ? (
                        <a
                          href={member.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 via-yellow-500 to-red-500 flex items-center justify-center hover:scale-105 transition"
                        >
                          <Instagram className="w-5 h-5 text-white" />
                        </a>
                      ) : (
                        <div className="w-10 h-10 bg-gray-700/30 rounded-full flex items-center justify-center cursor-not-allowed">
                          <Instagram className="w-5 h-5 text-gray-500" />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

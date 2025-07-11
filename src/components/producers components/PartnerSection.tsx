"use client";
import React from "react";
import Image from "next/image";

export default function PartnerSection() {
  const partners = [
    { name: "AWS", src: "/logos/aws.png" },
    { name: "Vivo", src: "/logos/vivo.png" },
    { name: "Microsoft", src: "/logos/microsoft.png" },
    { name: "Coca-Cola", src: "/logos/coca-cola.png" },
    { name: "Nike", src: "/logos/nike.png" },
    { name: "Disney", src: "/logos/disney.png" },
    { name: "Globo", src: "/logos/globo.png" },
    { name: "Magalu", src: "/logos/magalu.png" },
  ];

  return (
    <section className=" py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full md:w-1/2">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-gradient-to-b from-gray-800/40 to-gray-900/60  p-6 rounded-lg flex items-center justify-center shadow-md"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={100}
                height={60}
                className="object-contain grayscale invert"
              />
            </div>
          ))}
        </div>

        <div className="text-white max-w-md text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Fizemos parceiras com empresas incríveis!
          </h2>
          <p className="text-gray-300 mb-6">
            Ser parceiro da Progamers é contribuir diretamente para a evolução do cenário de e-sports, promovendo inovação, profissionalismo e novas oportunidades para todos os envolvidos.
          </p>
          <p className="text-gray-300 mb-6">
            Além disso, sua empresa ganha visibilidade e credibilidade ao se associar a grandes eventos, ampliando o alcance da sua marca e fortalecendo sua presença no universo gamer.
          </p>
          <a href="https://wa.me/5585981122763?text=quero%20ser%20parceiro" target="_blank" rel="noreferrer" className="w-full">
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 text-lg rounded-md shadow-lg transition-all duration-300 transform hover:scale-105">
              Seja nosso parceiro
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

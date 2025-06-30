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
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full md:w-1/2">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="border border-gray-800  p-6 rounded-lg flex items-center justify-center shadow-md"
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

        {/* Texto */}
        <div className="text-white max-w-md text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Fizemos parceiras com empresas incríveis!
          </h2>
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
            atque eaque eius esse sit harum inventore ipsam nam necessitatibus
            nemo pariatur provident.
          </p>
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
            atque eaque eius esse sit harum inventore ipsam nam necessitatibus
            nemo pariatur provident.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-md transition-all">
            seja nosso parceiro
          </button>
        </div>
      </div>
    </section>
  );
}

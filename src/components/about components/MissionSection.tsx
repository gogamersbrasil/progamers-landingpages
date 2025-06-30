'use client';

import { Target, Eye, Heart } from "lucide-react";
import MissionCard from "./MissionCard";

const MissionSection: React.FC = () => {
  const aboutList = [
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: "Nossa Missão",
      description:
        "Conectar jogadores apaixonados e elevar o nível competitivo dos e-sports, proporcionando uma plataforma onde talentos podem crescer, competir e alcançar seus objetivos.",
    },
    {
      icon: <Eye className="w-8 h-8 text-blue-500" />,
      title: "Nossa Visão",
      description:
        "Ser a principal plataforma de e-sports do Brasil, reconhecida por promover oportunidades justas e formar a próxima geração de campeões mundiais.",
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Nossos Valores",
      description:
        "Competitividade saudável, fair play, inclusão, excelência técnica e paixão pelos jogos. Acreditamos que todos merecem a chance de brilhar.",
    },
  ];

  return (
    <section className="py-12 bg-gaming-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gaming-accent/10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Nossa Missão
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Construindo o futuro dos e-sports brasileiros
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {aboutList.map((about, index) => (
            <MissionCard
              key={index}
              icon={about.icon}
              title={about.title}
              description={about.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

"use client";
import {
  MessageSquare,
  Star,
  Award,
  Calendar,
  Zap,
  Target,
  Users,
  Trophy,
} from "lucide-react";
import FeatureCard from "./FeatureCard";
export default function Features() {
  const featureList = [
    {
      icon: <Trophy className="text-yellow-400" />,
      title: "Torneios Épicos",
      description: "Competições com premiações incríveis.",
    },
    {
      icon: <Users className="text-blue-400" />,
      title: "Equipes Pro",
      description: "Monte sua equipe e domine.",
    },
    {
      icon: <Target className="text-green-400" />,
      title: "Ranking Global",
      description: "Prove sua habilidade no ranking.",
    },
    {
      icon: <Zap className="text-purple-400" />,
      title: "Evolução Rápida",
      description: "Análises para melhorar seu jogo.",
    },
    {
      icon: <Calendar className="text-pink-400" />,
      title: "Eventos Exclusivos",
      description: "Acesso a torneios especiais.",
    },
    {
      icon: <Award className="text-indigo-400" />,
      title: "Conquistas",
      description: "Desbloqueie medalhas e títulos.",
    },
    {
      icon: <Star className="text-yellow-300" />,
      title: "Status Elite",
      description: "Alcance o topo como profissional.",
    },
    {
      icon: <MessageSquare className="text-red-400" />,
      title: "Comunidade Ativa",
      description: "Converse com outros jogadores.",
    },
  ];
  return (
    <section className=" pt-10 bg-gaming-dark relative z-10">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl mb-2 md:text-4xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
  Recursos para Jogadores
</h2>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Tudo o que você precisa para se tornar um jogador competitivo de
          elite.
        </p>
      </div>
      <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-white">
        {featureList.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

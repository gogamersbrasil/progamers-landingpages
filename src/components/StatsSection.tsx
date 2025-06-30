
import React from "react";
import { Users, Trophy, Calendar, Target } from "lucide-react";
import StatCard from "./StatsCard";


interface Stat {
  id: number;
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  color: string;
}


export default function StatsSection() {
   const stats: Stat[] = [
    {
      id: 1,
      icon: <Users className="h-8 w-8" />,
      value: 50000,
      label: "Gamers Ativos",
      suffix: "+",
      color: "text-gaming-accent"
    },
    {
      id: 2,
      icon: <Trophy className="h-8 w-8" />,
      value: 1500,
      label: "Torneios Realizados",
      suffix: "+",
      color: "text-gaming-yellow"
    },
    {
      id: 3,
      icon: <Target className="h-8 w-8" />,
      value: 250000,
      label: "Reais em Prêmios",
      suffix: "+",
      color: "text-gaming-red"
    },
    {
      id: 4,
      icon: <Calendar className="h-8 w-8" />,
      value: 24,
      label: "Eventos por Mês",
      color: "text-gaming-purple"
    }
  ];

  return (
    <section className="py-20 bg-gaming-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gaming-dark via-gaming-darker to-gaming-dark opacity-90"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl mb-2 md:text-4xl font-bold  text-white">
          Números da <span className="text-red-500">Pro Gamers</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-16">
          Uma comunidade em constante crescimento com resultados impressionantes
        </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat) => (
        <StatCard
          key={stat.id}
          icon={stat.icon}
          value={stat.value}
          suffix={stat.suffix}
          label={stat.label}
          color={stat.color}
        />
      ))}
    </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gaming-red/20 to-gaming-purple/20 rounded-full border border-gaming-red/30">
            <span className="text-gaming-red font-semibold text-sm uppercase tracking-wider">
              Crescendo a cada dia
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}





"use client";

import React from "react";
import {
  BarChart3, Users, Wallet, Calendar, Briefcase, Handshake, Megaphone,
  Bell, Target, Award, Zap, Heart, Trophy, PieChart, TrendingUp, Clock
} from "lucide-react";


import FeatureCard from "../FeatureCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function FeaturesSection() {
  const producerFeatures: Feature[] = [
    { id: 1, title: "Gestão de Eventos", description: "Ferramentas para gerenciar torneios, ligas e eventos de e-sports.", icon: <Calendar /> },
    { id: 2, title: "Gerenciamento de Comunidade", description: "Ferramentas para criar e administrar comunidades de jogadores.", icon: <Users /> },
    { id: 3, title: "Monetização", description: "Soluções para monetizar eventos, conteúdo e experiências de e-sports.", icon: <Wallet /> },
    { id: 4, title: "Para Todo Porte de Projeto", description: "Soluções escaláveis para desde torneios locais até eventos globais.", icon: <Megaphone /> },
    { id: 5, title: "Análise de Dados", description: "Insights sobre público, engajamento e ROI para campanhas.", icon: <BarChart3 /> },
    { id: 6, title: "Notificações Omnichannel", description: "Integração com WhatsApp, Discord, Instagram e mais plataformas.", icon: <Bell /> },
    { id: 7, title: "Agendamento Automático", description: "Organize matches e eventos com agendamento automatizado.", icon: <Clock /> },
    { id: 8, title: "Ranqueamento Inteligente", description: "Sistemas de ranqueamento e ELO para competições justas.", icon: <Trophy /> }
  ];

  const brandFeatures: Feature[] = [
    { id: 1, title: "Marketing para Marcas", description: "Promova sua marca para uma audiência engajada de e-sports.", icon: <Briefcase /> },
    { id: 2, title: "Gerenciamento de Patrocínios", description: "Simplifique a gestão de patrocínios com times profissionais.", icon: <Handshake /> },
    { id: 3, title: "Segmentação de Público", description: "Alcance o público-alvo certo para sua marca no universo gamer.", icon: <Target /> },
    { id: 4, title: "KPIs e Métricas", description: "Acompanhe resultados e métricas de ROI em tempo real.", icon: <PieChart /> },
    { id: 5, title: "Reconhecimento de Marca", description: "Aumente a visibilidade da sua marca entre o público gamer.", icon: <Award /> },
    { id: 6, title: "Engajamento Diferenciado", description: "Crie campanhas que realmente engajam com a comunidade gamer.", icon: <Zap /> },
    { id: 7, title: "Fidelização", description: "Construa relacionamentos duradouros com a comunidade de jogadores.", icon: <Heart /> },
    { id: 8, title: "Crescimento Estratégico", description: "Estratégias para crescimento contínuo no mercado de e-sports.", icon: <TrendingUp /> }
  ];

  return (
    <section className="py-16 bg-gaming-dark">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Ferramentas de Gestão para E-sports
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          Tudo o que você precisa para gerenciar, promover e monetizar seus eventos e iniciativas no mundo dos e-sports.
        </p>

        <Tabs defaultValue="producers" className="w-full">
          <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8 bg-[#070813] border rounded-lg shadow-sm hover:shadow-lg transition-all">
            <TabsTrigger
              value="producers"
              className="data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=inactive]:text-purple-400 data-[state=inactive]:border-purple-500/50 px-4 py-2 transition-all"
            >
              Para Produtores
            </TabsTrigger>
            <TabsTrigger
              value="brands"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-blue-400 data-[state=inactive]:border-blue-500/50 px-4 py-2 transition-all"
            >
              Para Marcas
            </TabsTrigger>
          </TabsList>

          <TabsContent value="producers">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {producerFeatures.map((feature) => (
                <FeatureCard
                  key={feature.id}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="brands">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {brandFeatures.map((feature) => (
                <FeatureCard
                  key={feature.id}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  variant="brand"
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

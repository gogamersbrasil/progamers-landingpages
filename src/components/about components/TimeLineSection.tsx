"use client" 

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {  Trophy, Users,  Zap, Building, Gamepad2, Monitor, Award, ShoppingCart, Handshake,  Rocket, Expand, Minimize2 } from "lucide-react";

const TimelineSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleItems, setVisibleItems] = useState(0);
  
  const timelineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const timelineEvents = [
    {
      date: "Julho 2018",
      title: "Lançamento Oficial da Plataforma MVP",
      description: "Início da nossa jornada épica com o lançamento da plataforma MVP e realização de campeonatos teste que marcaram nossa entrada no cenário nacional",
      icon: Zap,
      type: "foundation"
    },
    {
      date: "Julho 2019",
      title: "Parceria Estratégica SANA 2019.1",
      description: "Consolidação no mercado através da produção de competições de alto nível em League of Legends, CS:GO e campeonatos de Fighting Games",
      icon: Handshake,
      type: "event"
    },
    {
      date: "Setembro 2019",
      title: "RioMar eSports - Marco Histórico",
      description: "Realizamos o maior evento de eSports do Nordeste com 500 participantes em 7 modalidades e público presente de 7.000 pessoas, estabelecendo novo padrão de eventos",
      icon: Trophy,
      type: "milestone"
    },
    {
      date: "Junho 2020",
      title: "Revolução Digital e Adaptação",
      description: "Transformação completa para formato online durante a pandemia, criando a Liga Cearense de Esports com produção de estúdio de alto padrão",
      icon: Monitor,
      type: "product"
    },
    {
      date: "2021",
      title: "Expansão e Impacto Social",
      description: "Criação do nosso estúdio profissional e inclusão do Free Fire, alcançando mais de 5.000 participantes e gerando impacto social significativo na comunidade gamer",
      icon: Building,
      type: "achievement"
    },
    {
      date: "2022",
      title: "Consolidação de Parcerias Institucionais",
      description: "Estabelecimento de parcerias estratégicas com Prefeitura/SEJUV, SEBRAE e incubação no Instituto Atlântico para desenvolvimento da nova plataforma automatizada",
      icon: Users,
      type: "achievement"
    },
    {
      date: "2023",
      title: "Expansão Comercial e Varejo",
      description: "Criação de eventos exclusivos nas lojas Ibytes e Goldentec, fortalecendo a conexão direta com o público gamer e expandindo nossa presença no varejo",
      icon: ShoppingCart,
      type: "event"
    },
    {
      date: "Maio 2024",
      title: "Rebranding para Pro Gamers",
      description: "Transformação estratégica da marca GO Gamers para Pro Gamers, elevando nosso posicionamento e trazendo conceito profissional para todos os projetos",
      icon: Award,
      type: "milestone"
    },
    {
      date: "Novembro 2024",
      title: "Retomada da Liga Cearense de Games",
      description: "Grande retorno do evento presencial com 1.500 participantes em 12 modalidades diferentes, consolidando nossa liderança no cenário regional",
      icon: Gamepad2,
      type: "event"
    },
    {
      date: "Maio 2025",
      title: "Lançamento da Plataforma Pro Gamers 2.0",
      description: "Revolução tecnológica com nova plataforma de design elegante e interface intuitiva, transformando completamente a experiência dos jogadores e elevando as competições",
      icon: Rocket,
      type: "product"
    },
    {
      date: "Maio 2025",
      title: "Ecossistema de Parcerias Premium",
      description: "Celebração de 3 anos de parceria sólida com Ibyte e expansão estratégica com marcas premium como Lenovo, Red Bull e Connect, dominando o mercado gamer",
      icon: Handshake,
      type: "achievement"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => Math.max(prev, index + 1));
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '50px'
      }
    );

    if (timelineRef.current && isExpanded) {
      const items = timelineRef.current.querySelectorAll('.timeline-item');
      items.forEach((item) => observer.observe(item));
    }

    return () => observer.disconnect();
  }, [isExpanded]);

  const handleExpand = () => {
    setIsExpanded(true);
    setVisibleItems(0);
  };

  const handleCollapse = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Primeiro recolhe o conteúdo
    setIsExpanded(false);
    setVisibleItems(0);
    
    // Depois rola suavemente para o topo da seção com delay mínimo
    setTimeout(() => {
      if (sectionRef.current) {
        const headerOffset = 80; // Offset para considerar possível header fixo
        const elementPosition = sectionRef.current.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "foundation": return "from-gaming-purple to-purple-600";
      case "product": return "from-gaming-accent to-blue-600";
      case "milestone": return "from-gaming-red to-red-600";
      case "event": return "from-gaming-yellow to-yellow-600";
      case "achievement": return "from-green-500 to-green-600";
      default: return "from-gray-500 to-gray-600";
    }
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-gaming-darker relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-gaming-purple/20 via-transparent to-gaming-accent/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-gaming-accent to-gaming-purple bg-clip-text text-transparent">
            Nossa Jornada Épica
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Cada marco que construiu nossa liderança no cenário de eSports brasileiro e nossa evolução rumo ao futuro
          </p>
        </motion.div>

        {/* Expand/Collapse Control */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8 md:mb-12"
        >
          <button
            onClick={isExpanded ? handleCollapse : handleExpand}
            className="flex items-center gap-2 bg-gaming-dark border border-gaming-purple/50 hover:border-gaming-purple 
                     px-4 md:px-6 py-2 md:py-3 rounded-lg text-white hover:bg-gaming-purple/10 transition-all duration-300 group text-sm md:text-base"
          >
            {isExpanded ? (
              <>
                <Minimize2 className="w-4 h-4 md:w-5 md:h-5 group-hover:transform group-hover:scale-110 transition-transform duration-300" />
                <span className="font-semibold">Ocultar Jornada</span>
              </>
            ) : (
              <>
                <Expand className="w-4 h-4 md:w-5 md:h-5 group-hover:transform group-hover:scale-110 transition-transform duration-300" />
                <span className="font-semibold">Descobrir Nossa História</span>
              </>
            )}
          </button>
        </motion.div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              ref={timelineRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative max-w-4xl mx-auto overflow-hidden"
            >
              {/* Timeline Line - Mobile: Left aligned, Desktop: Center - Adjusted height to stop before the collapse button */}
              <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-0.5 top-0 w-0.5 md:w-1 bg-gradient-to-b from-gaming-purple via-gaming-red to-gaming-accent" 
                   style={{ height: 'calc(100% - 120px)' }}></div>

              {timelineEvents.map((event, index) => (
                <motion.div
                  key={`${event.date}-${event.title}`}
                  data-index={index}
                  className="timeline-item relative mb-8 md:mb-12"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ 
                    opacity: visibleItems > index ? 1 : 0,
                    y: visibleItems > index ? 0 : 50
                  }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: 0.1
                  }}
                >
                  {/* Mobile Layout */}
                  <div className="md:hidden pl-10">
                    <motion.div 
                      className="bg-gaming-dark border border-gray-800 rounded-xl p-4 hover:border-gaming-purple/50 transition-all duration-300 group hover:shadow-lg hover:shadow-gaming-purple/20"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start mb-3">
                        <motion.div 
                          className={`w-10 h-10 rounded-full bg-gradient-to-r ${getTypeColor(event.type)} flex items-center justify-center mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <event.icon className="w-5 h-5 text-white" />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <span className="text-gaming-accent font-semibold text-xs uppercase tracking-wider block mb-1">
                            {event.date}
                          </span>
                          <h3 className="text-lg font-bold text-white group-hover:text-gaming-purple transition-colors duration-300 leading-tight">
                            {event.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {event.description}
                      </p>
                    </motion.div>

                    {/* Mobile Timeline Dot - Centralized */}
                    <motion.div 
                      className="absolute left-1.5 top-6 w-3 h-3 bg-gaming-red rounded-full border-2 border-gaming-darker z-10"
                      initial={{ scale: 0 }}
                      animate={{ scale: visibleItems > index ? 1 : 0 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <div className="absolute inset-0 bg-gaming-red rounded-full animate-ping opacity-75"></div>
                    </motion.div>
                  </div>

                  {/* Desktop Layout */}
                  <div className={`hidden md:flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <motion.div 
                        className="bg-gaming-dark border border-gray-800 rounded-xl p-6 hover:border-gaming-purple/50 transition-all duration-300 group hover:shadow-lg hover:shadow-gaming-purple/20"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center mb-4">
                          <motion.div 
                            className={`w-12 h-12 rounded-full bg-gradient-to-r ${getTypeColor(event.type)} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <event.icon className="w-6 h-6 text-white" />
                          </motion.div>
                          <div>
                            <span className="text-gaming-accent font-semibold text-sm uppercase tracking-wider">
                              {event.date}
                            </span>
                            <h3 className="text-xl font-bold text-white group-hover:text-gaming-purple transition-colors duration-300">
                              {event.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          {event.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Desktop Timeline Dot - Centralized */}
                    <motion.div 
                      className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gaming-red rounded-full border-4 border-gaming-darker z-10"
                      initial={{ scale: 0 }}
                      animate={{ scale: visibleItems > index ? 1 : 0 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <div className="absolute inset-0 bg-gaming-red rounded-full animate-ping opacity-75"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}

              {/* Collapse Button at the End */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex justify-center mt-12 md:mt-16"
              >
                <button
                  onClick={handleCollapse}
                  className="flex items-center gap-2 bg-gaming-dark border border-gaming-purple/50 hover:border-gaming-purple 
                           px-4 md:px-6 py-2 md:py-3 rounded-lg text-white hover:bg-gaming-purple/10 transition-all duration-300 group text-sm md:text-base"
                >
                  <Minimize2 className="w-4 h-4 md:w-5 md:h-5 group-hover:transform group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold">Recolher Jornada</span>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TimelineSection;

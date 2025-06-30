import { Target, Trophy, Users } from "lucide-react"
import AboutCard from "./AboutCard"

export default function AboutHeroSection (){
    const aboutList = [
    {
      icon: <Trophy className="text-yellow-400" />,
      title: "Torneios Épicos",
      description: "Compromisso com a qualidade em tudo que fazemos",
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
    ]
    return (
        <section className="relative  flex items-center justify-center bg-gradient-to-br from-gaming-darker via-gaming-dark to-gaming-darker overflow-hidden pt-20 flex-col">
      <div className="container mx-auto px-4 relative z-10 text-center">
         <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-400 via-red-600 to-red-800 bg-clip-text text-transparent">
  Sobre a Pro Gamers
</h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Conheça nossa história, valores e a equipe que está revolucionando os e-sports brasileiros
          </p>
      </div>
      <div className="w-full flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {aboutList.map((about, index) => (
      <AboutCard
        key={index}
        icon={about.icon}
        title={about.title}
        description={about.description}
      />
    ))}
  </div>
</div>

      
    </section>
    )
}
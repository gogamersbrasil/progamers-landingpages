import { Instagram, MessageSquareText, Youtube, Twitch } from "lucide-react";
interface SocialMediaPlatform {
  name: string;
  icon: React.ReactNode;
  url: string;
  username: string;
  color: string;
  bgGradient: string;
}
export default function SocialMediaSection() {
  
const socialPlatforms: SocialMediaPlatform[] = [
    {
      name: "Instagram",
      icon: <Instagram size={32} />,
      url: "https://instagram.com/progamers.br",
      username: "@progamers.br",
      color: "from-pink-600 to-purple-600",
      bgGradient: "bg-gradient-to-br from-pink-500/20 to-purple-500/20"
    },
    {
      name: "Discord",
      icon: <MessageSquareText size={32} />,
      url: "https://discord.gg/7MJcMZpYY8",
      username: "ProGamers Community",
      color: "from-indigo-600 to-blue-500",
      bgGradient: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20"
    },
    {
      name: "YouTube",
      icon: <Youtube size={32} />,
      url: "https://www.youtube.com/@progamers.brasil?sub_confirmation=1",
      username: "@progamers.brasil",
      color: "from-red-600 to-red-500",
      bgGradient: "bg-gradient-to-br from-red-500/20 to-red-600/20"
    },
    {
      name: "Twitch",
      icon: <Twitch size={32} />,
      url: "https://www.twitch.tv/progamersbrasil",
      username: "progamersbrasil",
      color: "from-purple-700 to-purple-500",
      bgGradient: "bg-gradient-to-br from-purple-600/20 to-purple-500/20"
    }
  ];

  return (
    <section className="py-20 bg-gaming-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gaming-darker via-gaming-dark to-gaming-darker opacity-90"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Siga nas <span className="text-gaming-red">Redes Sociais</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Fique conectado com a comunidade Pro Gamers e não perca nenhuma novidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {socialPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all duration-300 hover:-translate-y-2 hover:scale-[1.05]"
            >
              <div className={`relative overflow-hidden rounded-2xl ${platform.bgGradient} border border-gray-800/50 hover:border-gaming-red/30 backdrop-blur-sm p-8 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-gaming-red/20`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} opacity-10 blur-xl`}></div>
                </div>

                <div className="relative z-10">
                  <div className="mb-4 flex justify-center">
                    <div className={`p-4 rounded-full bg-gradient-to-r ${platform.color} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {platform.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gaming-red transition-colors duration-300">
                    {platform.name}
                  </h3>

                  <p className="text-gray-300 text-sm font-medium">
                    {platform.username}
                  </p>

                  <div className="mt-4 text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Seguir
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            Junte-se à nossa comunidade de mais de{" "}
            <span className="text-gaming-red font-bold">50.000</span>{" "}
            gamers!
          </p>
        </div>
      </div>
    </section>
  )
}

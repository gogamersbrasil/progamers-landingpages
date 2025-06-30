import GamesCarousel from "@/components/GamesCarousel";

export default function Games() {
  return (
    <section className="py-0 bg-gaming-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gaming-dark via-gaming-darker to-gaming-dark opacity-90 z-0" />
      
      <div className="relative z-10 text-center px-4">
        <h2 className="text-3xl mb-2 md:text-4xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
          Compete nos Melhores Games
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-16">
          Escolha seu jogo favorito e comece sua jornada rumo ao topo dos rankings!
        </p>
        <div className="max-w-7xl mx-auto">
          <GamesCarousel />
        </div>
      </div>
    </section>
  );
}

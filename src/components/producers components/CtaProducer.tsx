export default function CtaProducer() {
  return (
    <section className="bg-gaming-darker flex flex-col items-center justify-center">
      <div className="relative z-10 text-center px-4 py-15">
        <h1 className="text-center py-2 text-4xl  md:text-4xl font-bold  text-white">
          Pronto para Impulsionar sua Presença nos E-sports?
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto ">
          Participe dos maiores torneios de e-sports e conquiste prêmios
          incríveis
        </p>
      </div>

      <div className="flex gap-4">
        <button
          className="mx-auto flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg rounded-md shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 w-60 h-12"
          type="button"
        >
          Criar Conta
        </button>
        <button
          className="mx-auto flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg rounded-md shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 w-70 h-12"
          type="button"
        >
          Falar com um consultor
        </button>
      </div>
    </section>
  );
}

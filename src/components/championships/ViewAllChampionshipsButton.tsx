export default function ViewAllChampionshipsButton() {
  return (
    <div className="text-center mt-10">
      <button
        onClick={() => window.open('https://app.progamers.com.br/championships', '_blank')}
        className="bg-gradient-to-r from-red-600 to-red-400 hover:from-red-700 hover:to-red-500 text-white px-6 py-3 rounded-md shadow-lg transition-all"
      >
        Ver Todos os Campeonatos
      </button>
    </div>
  );
}
'use client';
import axios from 'axios'
import { useEffect, useState } from 'react';


interface Championship {
  id: string;
  name: string;
 
}

export default function NextChampionship() {

  const [championships, setChampionships] = useState<Championship[]>([]);

   useEffect(() => {
    async function fetchNextChampionships() {
      try {
        const response = await axios.get(
          "https://api.progamers.com.br/public/championships/next/championships"

        );
        setChampionships(response.data);
      } catch (error) {
        console.error("Erro ao buscar campeonatos:", error);
      }
    }

    fetchNextChampionships();
  }, []);

  return (
    <section className="bg-gaming-darker flex flex-col items-center justify-center">
      <div className="relative z-10 text-center px-4 py-15">
        <h1 className="text-center py-2 text-4xl  md:text-4xl font-bold  text-white">
          Proximos <span className="text-red-500">Campeonatos</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto ">
          Participe dos maiores torneios de e-sports e conquiste prêmios
          incríveis
        </p>
      </div>
        <div className="mt-8 grid grid-cols-3 md:grid-cols-2 gap-4">
          {championships.map((champ) =>(
            <div key={champ.id} className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{champ.name}</h3>
            </div>
          ))}
        </div>
      <button
  onClick={() => window.open("https://app.progamers.com.br/championships", "_blank")}
  className=" mt- bg-gradient-to-r from-red-600 to-red-400 
            hover:from-red-700 hover:to-red-500 
            text-white px-6 py-2.5 
            rounded-md shadow-md shadow-red-500/30 
            hover:shadow-lg hover:shadow-red-600/50 
            transition-all duration-300 
            focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
  type="button"
>
  Ver Todos os Campeonatos
</button>


    </section>
  );
}

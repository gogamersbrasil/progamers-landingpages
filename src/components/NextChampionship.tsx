'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ChampionshipCard, { ChampionshipStatus } from '../components/card/ChampionshipCard';

interface Championship {
  id: string;
  name: string;
  status: ChampionshipStatus;
  start_date: string;
  end_date: string;
  description?: string;
  modality: string;
  modality_type: string;
  paid: boolean;
  paid_value?: number;
  participant_limit: number;
  registration_start_date: string;
  registration_end_date: string;
  type: string;
  created_at: string;
  userStatus: string;
  paymentStatus: string;
  url_championship: string;
  registration_participant_count: number;
}

export default function NextChampionship() {
  const [championships, setChampionships] = useState<Championship[]>([]);

  useEffect(() => {
    async function fetchNextChampionships() {
      try {
        const response = await axios.get(
          'https://api.progamers.com.br/public/championships/next/championships'
        );
        console.log('Campeonatos retornados:', response.data); //
        setChampionships(response.data);
      } catch (error) {
        console.error('Erro ao buscar campeonatos:', error);
      }
    }

    fetchNextChampionships();
  }, []);

  return (
    <section className=" flex flex-col gap-6 justify-center items-center bg-gaming-darker px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white">
          Próximos <span className="text-red-500">Campeonatos</span>
        </h1>
        <p className="text-xl text-gray-300 mt-2">
          Participe dos maiores torneios de e-sports e conquiste prêmios incríveis
        </p>
      </div>

      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {championships.map((champ) => (
          <ChampionshipCard key={champ.id} {...champ} />
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => window.open('https://app.progamers.com.br/championships', '_blank')}
          className="bg-gradient-to-r from-red-600 to-red-400 hover:from-red-700 hover:to-red-500 text-white px-6 py-3 rounded-md shadow-lg transition-all"
        >
          Ver Todos os Campeonatos
        </button>
      </div>
    </section>
  );
}

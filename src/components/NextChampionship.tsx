'use client';
import { useChampionships } from '@/hooks/useChampionships';
import ChampionshipList from './championships/ChampionshipList';
import ChampionshipSectionHeader from './championships/ChampionshipSectionHeader';
import ViewAllChampionshipsButton from './championships/ViewAllChampionshipsButton';

export default function NextChampionship() {
  const { championships, loading, error } = useChampionships();

  return (
    <section className="flex flex-col gap-6 justify-center items-center bg-gaming-darker px-4 py-12">
      <ChampionshipSectionHeader />

      {loading && (
        <div className="text-white">Carregando campeonatos...</div>
      )}

      {error && (
        <div className="text-red-500">Erro ao carregar campeonatos. Por favor, tente novamente mais tarde.</div>
      )}

      {!loading && !error && championships.length === 0 && (
        <div className="text-white">Nenhum campeonato encontrado.</div>
      )}

      {!loading && !error && championships.length > 0 && (
        <ChampionshipList championships={championships} />
      )}

      <ViewAllChampionshipsButton />
    </section>
  );
}

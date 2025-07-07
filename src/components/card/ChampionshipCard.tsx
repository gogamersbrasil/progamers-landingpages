"use client";
import { useEffect, useState } from "react";
import { CalendarDays, Clock, Trophy } from "lucide-react";

export enum ChampionshipStatus {
  UPCOMING = "UPCOMING",
  OPEN_FOR_REGISTRATION = "OPEN_FOR_REGISTRATION",
  REGISTRATION_CLOSED = "REGISTRATION_CLOSED",
  ONGOING = "ONGOING",
  CANCELLED = "CANCELLED",
  FINISHED = "FINISHED",
}

interface ChampionshipCardProps {
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

export default function ChampionshipCard({
  name,
  start_date,
  registration_end_date,
  modality_type,
  paid,
  paid_value,
  participant_limit,
  userStatus,
  registration_participant_count,
  url_championship,
}: ChampionshipCardProps) {
  const calculateTimeLeft = () => {
    const end = new Date(registration_end_date).getTime();
    const now = new Date().getTime();
    const diff = end - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [registration_end_date]);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="rounded-xl overflow-hidden shadow-lg border border-gray-700 relative max-w-sm w-full min-h-[100px]">
      {/* Header com contador */}
      <div className="bg-purple-800 p-4 text-white relative">
        <span className="absolute top-2 right-2 bg-green-600 text-xs px-2 py-1 rounded">
          Aberto para inscrições
        </span>

        <div className="mt-8 flex flex-col items-center">
          <div className="text-sm text-white font-semibold mb-2">
            Inscrições encerram em
          </div>
          <div className="flex gap-2">
            {[{ label: "D", value: days }, { label: "H", value: hours }, { label: "M", value: minutes }, { label: "S", value: seconds }].map(
              (item, idx) => (
                <div
                  key={idx}
                  className="w-12 h-16 flex flex-col items-center justify-center rounded-md text-white font-bold bg-white/10 backdrop-blur-sm border border-white/20 shadow-inner"
                >
                  <div className="text-lg">
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="text-xs">{item.label}</div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="mt-2 text-xs text-green-300 text-center">
        {registration_participant_count}/{participant_limit} Inscritos
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="flex flex-col p-4 text-white bg-[#0C1321] h-full">
        {/* Nome do campeonato */}
        <h2 className="text-lg text-justify-left font-bold uppercase  min-h-[3.5rem] mb-4">
          {name}
        </h2>

        {/* Data e hora */}
        <div className="flex justify-baseline gap-4 mb-2">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <CalendarDays size={16} />
            {new Date(start_date).toLocaleDateString("pt-BR")}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Clock size={16} />
            {new Date(start_date).toLocaleTimeString("pt-BR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>

        {/* Modalidade e inscrição */}
        <div className="flex justify-center gap-2 mb-4 text-white text-sm">
          {/* Modalidade */}
          <div className="flex flex-col bg-[#172130] p-4 rounded-md w-full">
            <span className="text-gray-400 text-xs mb-1 flex items-center gap-1">
              <svg width="12" height="12" fill="currentColor" className="text-gray-500">
                <path d="M3 6l3 3 3-3H3z" />
              </svg>
              Modalidade
            </span>
            <span className="bg-green-700 text-center text-xs px-3 py-1 rounded-full w-full font-semibold">
              {modality_type}
            </span>
          </div>

          {/* Inscrição */}
          <div className="flex flex-col bg-[#172130] p-4 rounded-md w-full">
            <span className="text-gray-400 text-xs mb-1 flex items-center gap-1">
              <svg width="12" height="12" fill="currentColor" className="text-gray-500">
                <circle cx="6" cy="6" r="5" />
              </svg>
              Inscrição
            </span>
            <span className="bg-emerald-600 text-center text-xs px-3 py-1 rounded-full w-full font-semibold">
              {paid ? `R$ ${paid_value?.toFixed(2)}` : "Gratuito"}
            </span>
          </div>
        </div>

        {/* Premiação e botão */}
        <div className="mt-auto">
          <button
            onClick={() => window.open(url_championship, "_blank")}
            className="bg-gradient-to-r from-red-600 to-red-400 hover:from-red-700 hover:to-red-500 text-white px-4 py-2 rounded-md transition-all w-full"
          >
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  );
}

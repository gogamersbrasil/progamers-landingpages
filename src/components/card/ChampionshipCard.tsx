import React from "react";
import {
  Calendar,
  CircleDollarSign,
  Flame,
  Medal,
  Trophy,
} from "lucide-react";
import dynamic from "next/dynamic";
import { BaseResponse } from "@/hooks/interfaces/base";
import {
  ChampionshipStatus,
  ChampionshipStatusDescriptions, 
  IChampionships, 
  ChampionshipAdward
} from "@/hooks/interfaces/championships.interface";
import {FileBussinessType} from "@/hooks/interfaces/file.interface";
import StatusBadge from "@/components/StatusBadge";
import Countdown from "@/components/CountDown/Countdown";

// Import Framer Motion with SSR disabled
const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false });
const MotionImg = dynamic(() => import("framer-motion").then((mod) => mod.motion.img), { ssr: false });


export interface CompetitionCardProps {
  championship?: BaseResponse<IChampionships> | null;
  isRecommended?: boolean;
}

const ChampionshipCard: React.FC<CompetitionCardProps> = ({ championship, isRecommended = false }) => {
  const id = championship?.entity?.id;

  const game = championship?.entity?.game?.files.find(
      (item) => item.business_type === "GAMES_ICON"
  );

  const paidValue = championship?.entity?.paid_value;
  const banner = championship?.files?.find(
      (item) => item.business_type === FileBussinessType.CHAMPIONSHIP_CARD
  );

  const formatToCurrencyBRL = (value?: number) =>
      value
          ? new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(value)
          : "R$ 0,00";

  const awards = championship?.entity?.championship_awards?.[0] ?? null;

  const startDate = championship?.entity?.start_date;

  const date = startDate
      ? new Date(startDate).toLocaleDateString("pt-BR")
      : "";
  const time = startDate
      ? new Date(startDate).toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      })
      : "";

  const dateCount = () => {
    if (championship?.entity?.status === ChampionshipStatus.OPEN_FOR_REGISTRATION) {
      return {
        labelCount: "Inscrições encerram em",
        dateChampionship: championship?.entity?.registration_end_date,
      };
    }else if (championship?.entity?.status === ChampionshipStatus.REGISTRATION_CLOSED) {

    }

    return {
      labelCount: "A competição inicia em",
      dateChampionship: championship?.entity?.start_date,
    };
  };

  const { labelCount, dateChampionship } = dateCount();
  const status = championship?.entity?.status;
  const statusLabel = status ? ChampionshipStatusDescriptions[status] : "Desconhecido";

  // Animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    hover: {
      y: -5,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3, ease: "easeOut" }
    },
    tap: { scale: 0.98, transition: { duration: 0.1 } }
  };

  return (
      <a href={`https://app.progamers.com.br/championships/${championship?.entity?.url_championship}`} target="_blank">
        <MotionDiv
            className={`w-full rounded-xl  overflow-hidden shadow-xl bg-gradient-to-b from-gray-800/40 to-gray-900/60 border ${
                isRecommended
                    ? 'border-red-500/50 ring-2 ring-red-500/20'
                    : 'border-gray-700/70'
            } text-white hover:border-red-500/50 transition-all duration-300 ${
                isRecommended ? 'relative' : ''
            }`}
        >
          {isRecommended && (
              <MotionDiv
                  className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 to-red-700/20 rounded-xl blur-sm -z-10"
                  animate={{
                    opacity: [0.5, 0.7, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
              ></MotionDiv>
          )}
          <div className="relative w-full">
            <MotionImg
                className="w-full md:45 h-38 sm:h-40 md:h-68 "
                src={banner?.url}
                alt={championship?.entity?.name}
                whileHover={{ scale: 1.05, transition: { duration: 1.5 } }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            {game?.url && (
                <MotionDiv
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="absolute top-2 sm:top-3 left-2 sm:left-3"
                >
                  <img
                      className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 border-2 p-0.5 sm:p-1 rounded-lg shadow-md bg-gray-900/70 border-red-500/30"
                      src={game.url}
                      alt="Game icon"
                  />
                </MotionDiv>
            )}

            <div className="absolute top-0 sm:right-2 right-0 flex flex-col gap-2 sm:scale-100 scale-80">
              <MotionDiv
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
              >
                <StatusBadge
                    status={status as ChampionshipStatus}
                    label={statusLabel}
                    className="h-5 sm:h-6 px-1.5 sm:px-3 text-xs sm:text-sm font-bold"
                />
              </MotionDiv>

              {isRecommended && (
                  <MotionDiv
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      className="bg-gradient-to-r from-red-500 to-red-700  text-white px-2 py-1 rounded-full text-xs font-bold flex items-center shadow-lg relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                    <Flame size={12} className="mr-1 animate-pulse" />
                    Recomendado para Você
                  </MotionDiv>
              )}
            </div>


            <div className="absolute bottom-0 left-1  flex flex-col sm:flex-row  ">

              <div className="flex items-center backdrop-blur-sm bg-white/10 border border-white/20 px-2 py-1 rounded-md relative w-fit bottom-2 shadow-lg">
                <Calendar size={14} className="text-red-400 flex-shrink-0" />
                <p className="text-gray-300 text-xs sm:text-sm font-medium ml-1.5">
                  {date} - {time}
                </p>
              </div>
            </div>

          </div>


          <div className="p-4 sm:p-5 bg-gradient-to-b from-gray-800/30 to-gray-900/30">
            <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 line-clamp-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {championship?.entity?.name}
            </h3>

            <div className="flex flex-row relative top-1 items-center flex-wrap gap-1.5 sm:gap-2.5 mb-3 sm:mb-4">

              {status !== ChampionshipStatus.FINISHED &&
              status !== ChampionshipStatus.UPCOMING ? (
                  <div className="  w-full ">

                    <Countdown status={championship?.entity?.status} date={dateChampionship} max={championship?.entity.participant_limit} current={championship?.entity.registered_participants_count} label={labelCount} />

                  </div>
              ) : (
                  <div></div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="bg-gradient-to-b from-gray-800/70 to-gray-900/70 rounded-lg p-2.5 sm:p-3.5   border-gray-700/50 hover:border-red-500/30 transition-colors duration-300">
                <h4 className="text-xs font-semibold text-white mb-1.5 flex items-center gap-1.5">
                  <Trophy size={14} strokeWidth={1.5} className="text-red-400" />
                  Premiação
                </h4>
                {awards?.entity ? (
                    <div className="font-semibold flex flex-row gap-1.5 items-center">
                      <Medal strokeWidth={1.5} size={14} className="text-yellow-300 flex-shrink-0" />
                      {awards.entity.type === ChampionshipAdward.MONEY ? (
                          <span className="text-yellow-300 font-bold text-xs sm:text-sm">
                                        {formatToCurrencyBRL(awards.entity.value)}
                                    </span>
                      ) : (
                          <span className="text-yellow-300 font-bold text-xs sm:text-sm">
                                        {awards.entity.value ?? "—"}
                                    </span>
                      )}
                    </div>
                ) : (
                    <div className="text-gray-400 italic text-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-gray-500/50 rounded-full"></span>
                      Sem premiação definida
                    </div>
                )}
              </div>

              <div className="bg-gradient-to-b from-gray-800/70 to-gray-900/70 rounded-lg p-2.5 sm:p-3.5   border-gray-700/50 hover:border-red-500/30 transition-colors duration-300">
                <h4 className="text-xs font-semibold text-white mb-1.5 flex items-center gap-1.5">
                  <CircleDollarSign size={14} strokeWidth={1.5} className="text-red-400" />
                  Inscrição
                </h4>
                <div
                    className={`px-2.5 py-1.5 gap-1.5 flex flex-row items-center text-xs font-semibold rounded-full ${
                        !championship?.entity?.paid
                            ? "bg-green-500/30 text-green-300"
                            : "bg-yellow-300/30 text-yellow-300"
                    }`}
                >
                  <CircleDollarSign strokeWidth={1.5} size={14} className="flex-shrink-0" />
                  <span className="truncate">{!championship?.entity?.paid ? "Gratuito" : `${formatToCurrencyBRL(paidValue)}`}</span>
                </div>
                {championship?.entity?.paid && championship?.entity?.registration_price && (
                    <div className="mt-1.5 text-xs text-gray-400 pl-1.5 flex items-center">
                      <span className="w-1.5 h-1.5 bg-yellow-500/50 rounded-full mr-1.5"></span>
                      Taxa: {formatToCurrencyBRL(championship.entity.registration_price)}
                    </div>
                )}
              </div>
            </div>
          </div>


        </MotionDiv>
      </a>
  );
};

export default ChampionshipCard;
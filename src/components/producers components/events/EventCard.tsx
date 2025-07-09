import React from "react";
import {
  Calendar,
  Clock,
  MapPin,
  ExternalLink,
  Ticket,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import {getFormattedDate} from "@/utils/date";

export interface EventData {
  entityId: string;
  entity: {
    id: string;
    name: string;
    description: string;
    category: string;
    tags: string[] | null;
    start_date: string;
    end_date: string;
    published_at: string;
    active: boolean;
    url_context: string;
    created_at: string;
    updated_at: string;
    link: string;
    event_type: string;
    location: string;
    map_url: string;
    start_time: string;
    has_arena: boolean;
    has_attraction: boolean;
    event_state: string;
  };
  files: {
    id: string;
    business_type: string;
    entity_id: string;
    entity_type: string;
    url: string;
  }[];
}

interface EventCardProps {
  event: EventData;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const { entity, files } = event;

  // Find the card image
  const cardImage = files.find((file) => file.business_type === "EVENT_CARD");

  // Format dates
  const startDate = getFormattedDate(entity.start_date, entity.start_time);
  const formattedDate = startDate.toLocaleDateString("pt-BR");
  const formattedTime = entity.start_time ? entity.start_time : "00:00";

  // Determine event status
  const now = new Date();
  const endDate = new Date(entity.end_date);

  let statusLabel = "";
  let statusColorClass = "";

  if (endDate < now) {
    statusLabel = "Finalizado";
    statusColorClass = "from-gray-500 to-gray-600";
  } else if (startDate > now) {
    statusLabel = "Próximo";
    statusColorClass = "from-red-500 to-red-700";
  } else {
    statusLabel = "Em andamento";
    statusColorClass = "from-green-500 to-green-700";
  }


  return (
    <Link href={`https://app.progamers.com.br/events/${entity.url_context}`} target="_blank">
      <div
        className="w-full rounded-xl overflow-hidden shadow-xl bg-gradient-to-b from-gray-800/40 to-gray-900/60 border border-gray-700/70 text-white hover:border-red-500/50 transition-all duration-300"
      >
        <div className="relative w-full">
          <div

          >
            {cardImage ? (
              <img
                className="w-full h-48 sm:h-60 md:h-72 opacity-90 bg-cover object-center object-cover"
                src={cardImage?.url}
                alt={entity.name}
              />
            ) : (
              <div className="w-full h-48 sm:h-60 md:h-72 bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center">
                <Calendar size={48} className="text-gray-600" />
              </div>
            )}
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          {/* Status badge */}
          <div
            className="absolute top-2 sm:top-3 left-2 sm:left-3"
          >
            <div
              className={`bg-gradient-to-r ${statusColorClass} text-white px-3 py-1 rounded-full text-xs font-bold shadow-md border border-white/10`}
            >
              {statusLabel}
            </div>
          </div>

          <div
            className="absolute top-2 sm:top-3 right-2 sm:right-3"
          >
            <div
              className={`bg-gradient-to-r ${entity.event_type === "FREE" ? "from-green-500 to-green-700" : "from-red-500 to-red-700"} text-white px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5`}
            >
              <Ticket size={12} />
              {entity.event_type === "FREE" ? "Gratuito" : "Pago"}
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-5 bg-gradient-to-b from-gray-800/30 to-gray-900/30">
          <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 line-clamp-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {entity.name}
          </h3>

          <div className="flex flex-row items-center flex-wrap gap-1.5 sm:gap-2.5 mb-3 sm:mb-4">
            <div className="flex items-center bg-gray-800/50 px-2 py-1 rounded-md">
              <Calendar size={14} className="text-red-400 flex-shrink-0" />
              <p className="text-gray-300 text-xs sm:text-sm font-medium ml-1.5">
                {formattedDate}
              </p>
            </div>
            <div className="flex items-center bg-gray-800/50 px-2 py-1 rounded-md">
              <Clock size={14} className="text-red-400 flex-shrink-0" />
              <p className="text-gray-300 text-xs sm:text-sm font-medium ml-1.5">
                {formattedTime}
              </p>
            </div>
          </div>

          {entity.location && (
            <div className="bg-gradient-to-b from-gray-800/70 to-gray-900/70 rounded-lg p-2.5 sm:p-3.5 mb-3 sm:mb-4 border border-gray-700/50 hover:border-red-500/30 transition-colors duration-300">
              <h4 className="text-xs font-semibold text-white mb-1.5 flex items-center gap-1.5">
                <MapPin size={14} strokeWidth={1.5} className="text-red-400" />
                Localização
              </h4>
              <p className="text-gray-300 text-xs sm:text-sm">
                {entity.location}
              </p>
            </div>
          )}

        </div>

        <div className="flex flex-row justify-between bg-gradient-to-b from-gray-800/50 to-gray-900/50 border-t border-gray-700/70 p-3 sm:p-4 gap-3">
          <div className="flex items-center">
            {entity.map_url ? (
              <a
                href={entity.map_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 text-sm transition-colors flex items-center gap-1.5 bg-gray-800/50 px-3 py-1.5 rounded-lg border border-gray-700/50 hover:border-red-500/30"
              >
                <ExternalLink size={14} />
                Ver no mapa
              </a>
            ) : (
              <div className="invisible">
                <ExternalLink size={14} />
              </div>
            )}
          </div>
          <div>
            <motion.div
              whileHover={{ x: 5 }}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-colors shadow-md flex items-center gap-1.5"
            >
              Ver detalhes
              <ArrowRight size={14} />
            </motion.div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;

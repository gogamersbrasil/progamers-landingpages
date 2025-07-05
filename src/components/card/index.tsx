

import {
  Badge,
  Gamepad2,
} from "lucide-react";
import { ChampionshipStatusDescriptions, ChampionshipStatus } from "@/features/models/championship/championships.interface";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Button } from "./button";

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
}

const ChampionshipStatusDescriptions: { [key in ChampionshipStatus]: string } = {
  [ChampionshipStatus.UPCOMING]: "Em breve",
  [ChampionshipStatus.OPEN_FOR_REGISTRATION]: "Aberto para inscrições",
  [ChampionshipStatus.REGISTRATION_CLOSED]: "Inscrições encerradas",
  [ChampionshipStatus.ONGOING]: "Em andamento",
  [ChampionshipStatus.CANCELLED]: "Cancelado",
  [ChampionshipStatus.FINISHED]: "Finalizado",
};


 enum ChampionshipStatus {
  UPCOMING = "UPCOMING",
  OPEN_FOR_REGISTRATION = "OPEN_FOR_REGISTRATION",
  REGISTRATION_CLOSED = "REGISTRATION_CLOSED",
  ONGOING = "ONGOING",
  CANCELLED = "CANCELLED",
  FINISHED = "FINISHED",
}


export default function ChampionshipCard({
  id,
  name,
  status,
  type,
                                           paid,
                                           paymentStatus
}: ChampionshipCardProps) {
  const navigate = useNavigate();

  const getStatusColor = (status: ChampionshipStatus) => {
    switch (status) {
      case "UPCOMING":
        return "bg-blue-500/20 text-blue-400";
      case "OPEN_FOR_REGISTRATION":
        return "bg-green-500/20 text-green-400";
      case "REGISTRATION_CLOSED":
        return "bg-yellow-500/20 text-yellow-400";
      case "ONGOING":
        return "bg-red-500/20 text-red-400";
      case "CANCELLED":
        return "bg-gray-500/20 text-gray-400";
      case "FINISHED":
        return "bg-purple-500/20 text-purple-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <Card className="bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-red-500/20 transition-all duration-300">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-500/20 rounded-xl">
              <Gamepad2 className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <CardTitle className="text-xl text-white">{name}</CardTitle>
              <div className="flex items-center gap-2 mt-1">
                <Badge className={getStatusColor(status)}>
                  {ChampionshipStatusDescriptions[status]}
                </Badge>
                <Badge variant="outline" className="text-xs bg-yellow-600/20 text-yellow-400">
                  {type === "INDIVIDUAL" ? "Individual" : "Em Equipe"}
                </Badge>

                {paid && <Badge variant="outline" className={getStatusColor(status)}>
                  {paymentStatus === "ACCEPTED" ? "Pagamento Aceito" : "Pagamento pendente"}
                </Badge> }
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">

          <Button 
            onClick={() => navigate(`/championships/${id}`)}
            label="Ver Detalhes"
            className="w-auto px-6 py-2 text-sm"
          />
        </div>
      </CardContent>
    </Card>
  );
} 
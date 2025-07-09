import {BaseResponse} from "@/hooks/interfaces/base";
import {IFileResponse} from "@/hooks/interfaces/file.interface";
import {IGame} from "@/hooks/interfaces/game.interface";


export interface IChampionships {
  id: string;
  name: string;
  description: string;
  registration_start_date: Date;
  registration_end_date: Date;
  start_date: Date;
  end_date: Date;
  status: ChampionshipStatus;
  modality: ChampionshipModality;
  modality_type: ChampionshipModalityType;
  game: BaseResponse<IGame>;
  type: ChampionshipType;
  main_showcase: boolean;
  registration_price: number;
  published: boolean;
  paid: boolean;
  stripe_product_id?: string;
  payment_link_url?: string;
  stripe_price_id?: string;
  paid_value: number;
  participant_limit: number;
  participant_limit_per_team: number;
  registered_participants_count: number;
  regulation_id: string;
  game_id: string;
  flag_picks: boolean;
  created_at: Date;
  updated_at: Date;
  lcg: boolean;
  championship_awards: BaseResponse<IChampionshipAward>[];
  url_championship: string;
}


export interface IChampionshipsTournament {
  id: string;
  championship_id: string;
  name: string;
  type: ChampionshipModality;
  order: number;
  start_date: string;
  end_date: string;
  created_at: string;
  updated_at: string;
  championship_round: IChampionshipRound[];
}



export interface ICchampionshipUpdateStatus {
  payment_status: string;
  situation: string;
  cancel_reason: string;
}

export interface IRegistrationDtoUpate {
  entity_id: string;
  business_type: string;
  payment_status: string;
  gift_message: string;
  gift_from: string;
  gift_to: string;
  gift_to_type: string;
  situation: string;
}

export interface IRegistrationCreateDto {
  entity_id: string;
  business_type: string;
  payment_status: string;
  gift_message: string;
  gift_from: string;
  gift_to: string;
  gift_to_type: string;
  situation: string;
}

export interface IRankItem {
  id: string;
  draws: number;
  gamesPlayed: number;
  imageUrl: string;
  wins: number;
  losses: number;
  name: string;
  position: number;
  totalScore: number;
  scoreVariation: number;
}

export interface IRank {
  championshipId: string;
  ranks: IRankItem[];
}

export enum ChampionshipStatus {
  UPCOMING = "UPCOMING",
  OPEN_FOR_REGISTRATION = "OPEN_FOR_REGISTRATION",
  REGISTRATION_CLOSED = "REGISTRATION_CLOSED",
  ONGOING = "ONGOING",
  CANCELLED = "CANCELLED",
  FINISHED = "FINISHED",
}

export const ChampionshipStatusDescriptions: {
  [key in ChampionshipStatus]: string;
} = {
  [ChampionshipStatus.UPCOMING]: "Em breve",
  [ChampionshipStatus.OPEN_FOR_REGISTRATION]: "Aberto para inscrições",
  [ChampionshipStatus.REGISTRATION_CLOSED]: "Inscrições encerradas",
  [ChampionshipStatus.ONGOING]: "Em andamento",
  [ChampionshipStatus.CANCELLED]: "Cancelado",
  [ChampionshipStatus.FINISHED]: "Finalizado",
};

export const ChampionshipStatusColors: { [key in ChampionshipStatus]: string } =
  {
    [ChampionshipStatus.UPCOMING]: "text-blue-600 border-blue-400",
    [ChampionshipStatus.OPEN_FOR_REGISTRATION]:
      "text-green-600 border-green-400/30",
    [ChampionshipStatus.REGISTRATION_CLOSED]:
      "text-yellow-600 border-yellow-400/30",
    [ChampionshipStatus.ONGOING]: "text-orange-600 border-orange-400/30",
    [ChampionshipStatus.CANCELLED]: "text-red-600 border-red-400/30",
    [ChampionshipStatus.FINISHED]: "text-gray-600 border-gray-400/30",
  };

export enum MatchStatus {
  UPCOMING = "UPCOMING",
  ONGOING = "ONGOING",
  FINISHED = "FINISHED",
  BYE = "BYE",
}

export const getMatchStatusDescriptions: { [key in MatchStatus]: string } = {
  [MatchStatus.UPCOMING]: "Em breve",
  [MatchStatus.ONGOING]: "Em andamento",
  [MatchStatus.FINISHED]: "Finalizado",
  [MatchStatus.BYE]: "Indefinido",
};

export const getMatchStatusColors: { [key in MatchStatus]: string } = {
  [MatchStatus.UPCOMING]: "text-blue-500 border-blue-500",
  [MatchStatus.ONGOING]: "text-amber-500 border-amber-500",
  [MatchStatus.FINISHED]: "text-emerald-500 border-emerald-500",
  [MatchStatus.BYE]: "text-purple-500 border-purple-500",
};

export enum ChampionshipAdward {
  GIFT = "GIFT",
  MONEY = "MONEY",
  NOT_INFORMED = "NOT_INFORMED",
}

export enum ChampionshipModality {
  MULTI_STAGE = "Multi-stage",
  SINGLE_STAGE = "Single-stage",
  ROUND_ROBIN = "Round Robin",
  SINGLE_ELIMINATION = "Eliminacao Simples",
  DOUBLE_ELIMINATION = "Eliminacao Dupla",
}

export function getChampionshipModalityDescription(
  value: string
): string | undefined {
  const modalityKey = Object.keys(ChampionshipModality).find(
    (key) => key === value
  );

  return modalityKey
    ? ChampionshipModality[modalityKey as keyof typeof ChampionshipModality]
    : undefined;
}

export function getChampionshipStatusDescription(
  value: string
): string | undefined {
  const modalityKey = Object.keys(ChampionshipStatus).find(
    (key) => key === value
  );

  return modalityKey
    ? ChampionshipModality[modalityKey as keyof typeof ChampionshipModality]
    : undefined;
}

export enum ChampionshipModalityType {
  ONLINE = "ONLINE",
  PRESENCIAL = "PRESENCIAL",
  HYBRID = "HYBRID",
}

export enum ChampionshipType {
  INDIVIDUAL = "INDIVIDUAL",
  TEAM = "TEAM",
}

export enum ParticipantSituation {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  CANCELLED = "CANCELLED",
}

export interface IParticipantOnly {
  id: string;
  championship_id: string;
  is_gift: boolean;
  entity_id: string;
  business_type: ChampionshipType;
  payment_status: string;
  situation: ParticipantSituation;
  created_at: Date;
  updated_at: Date;
}

export interface IParticipant {
  participant: {
    id: string;
    championship_id: string;
    is_gift: boolean;
    entity_id: string;
    business_type: ChampionshipType;
    payment_status: string;
    situation: ParticipantSituation;
    created_at: Date;
    updated_at: Date;
  };
  entity: {
    name: string;
    files: IFileResponse[];
    nick: string;
    team_members_count?: number;
  };
  championships: IChampionships[];
}

export enum ChampionshipRoundStatus {
  UPCOMING = "UPCOMING",
  ONGOING = "ONGOING",
  FINISHED = "FINISHED",
}

export interface IChampionshipMatch {
  id: string;
  status: ChampionshipRoundStatus;
  participant_opponent1: string;
  participant_opponent2: string;
  start_date: string;
  modality: string;
  created_at: string;
  updated_at: string;
  round_id: string;
  number: number;
  round_duration: number;
  bracket_status: string;
  score_opponent1: string;
  score_opponent2: string;
  result_opponent1: string;
  result_opponent2: string;
  championship_match_game: [];

}

export interface IChampionshipRound {
  id: string;
  championship_id: string;
  stage_id: string;
  name: string;
  number: 0;
  status: ChampionshipRoundStatus;
  start_date: string;
  end_date: string;
  created_at: string;
  updated_at: string;
  championship_match: IChampionshipMatch[];
}




export type IChampionshipAward = {
  id: string;
  position: number;
  name: string;
  description: string;
  type: string;
  value: number;
  championship_id: string;
};

export interface GiftDto {
  id: string;
  gift_message: string;
  gift_from: string;
  gift_to: string;
  gift_to_type: string;
}

export interface PurchaseItemResponseDto {
  id: string;
  description: string;
  provider_payment_id: string;
  payment_method: string;
  provider: string;
  price: number;
  quantity: number;
  created_at: Date;
  updated_at: Date;
  entity_id: string;
  entity_type: string;
  status: string;
  is_gift: boolean;
  is_refundable: boolean;
  gift: GiftDto;
  payment_id: string;
}

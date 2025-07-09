import {IFile} from "@/hooks/interfaces/file.interface";


export interface IGame {
  id: string;
  description: string;
  active: boolean;
  integrationGame: boolean;
  flagPicks: boolean;
  genre: GameGenre;
  type: GameType;
  created_at: Date;
  updated_at: Date;
  name: string;
  game_id: string;
  app_type: AppTypeGame;
  integration_app_id: string;
  games_integrations: string;
  is_favorite?: boolean;
}

export interface IGameFilter {
  id: string;
  name: string;
  icon: string;
  selected: boolean;
}

enum GameType {
  MOBILE = "MOBILE",
  PC = "PC",
  CONSOLE = "CONSOLE",
}

enum GameGenre {
  BATTLE_ROYALE = "BATTLE_ROYALE",
  MOBA = "MOBA",
  FPS = "FPS",
  CARD_GAMER = "CARD_GAMER",
  TS = "TS",
  SPORTS_SIMULATION = "SPORTS_SIMULATION",
  RACING_GAMES = "RACING_GAMES",
  BATTLE_CARD_GAMES = "BATTLE_CARD_GAMES",
  AUTO_BATTLER = "AUTO_BATTLER",
  AREA_SHOOTER = "AREA_SHOOTER",
}

export enum AppTypeGame {
  GENERIC = "GENERIC",
  STEAM = "STEAM",
  RIOT = "RIOT",
}

export interface IGameDTO {
  entityId: string;
  entity: {
    id: string;
    description: string;
    active: boolean;
    integrationGame: boolean;
    flagPicks: boolean;
    genre: GameGenre;
    type: GameType;
    created_at: Date;
    updated_at: Date;
    name: string;
    game_id: string;
    app_type: AppTypeGame;
    integration_app_id: string;
    games_integrations: string;
    is_favorite?: boolean;
  };
  files: IFile[];
}

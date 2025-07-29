export interface UserEventResponse {
  event: {
    entityId: string;
    entity: EventEntity;
    files: EventFile[];
  };
  registration: EventRegistration;
}

export interface EventEntity {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
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
  start_time: string | null;
  has_arena: boolean;
  has_attraction: boolean;
  event_state: string;
  events_championship: EventChampionshipRelation[];
  event_championships_entity: EventChampionshipEntity[];
  event_page_entity: EventPageEntity;
  events_arenas_entity: unknown[];
  events_attractions_entity: unknown[];
  event_schedule: unknown[];
}

export interface EventChampionshipRelation {
  id: string;
  event_id: string;
  championship_id: string;
}

export interface EventChampionshipEntity {
  entityId: string;
  entity: {
    id: string;
    event_id: string;
    championship_id: string;
    championship: ChampionshipEntity;
  };
  files: EventFile[];
}

export interface ChampionshipEntity {
  id: string;
  name: string;
  description: string;
  registration_start_date: string;
  registration_end_date: string;
  start_date: string;
  end_date: string;
  status: string;
  regulation_id: string | null;
  modality: string;
  game_id: string;
  type: string;
  main_showcase: boolean;
  published: boolean;
  paid: boolean;
  paid_value: number;
  participant_limit: number;
  participant_limit_per_team: number;
  flag_picks: boolean;
  created_at: string;
  updated_at: string;
  lcg: boolean;
  modality_type: string;
  stripe_product_id: string | null;
  stripe_price_id: string | null;
  payment_link_url: string | null;
  url_championship: string;
  championship_award: unknown[];
  championship_result: unknown[];
  championship_stage: unknown[];
}

export interface EventPageEntity {
  id: string;
  event_id: string;
  name: string | null;
  active: boolean | null;
  page_config: {
    primary: string;
    secondary: string;
    pageColor: string;
    textColor: string;
    typography: {
      fontFamily: string;
      headingSize: number;
      bodySize: number;
    };
    layout: {
      template: string;
      backgroundImage: string;
    };
    headline: string;
    socialLink: unknown[];
    cta: {
      text: string;
      link: string;
      color: string;
      size: string;
    };
    seo: {
      title: string;
      description: string;
      keywords: string[];
    };
  };
  created_at: string;
  updated_at: string;
}

export interface EventFile {
  id: string;
  business_type: string;
  entity_id: string;
  entity_type: string;
  extension: string;
  file_type: string;
  url: string;
}

export interface EventRegistration {
  id: string;
  event_id: string;
  entity_id: string;
  business_type: string;
  participant_name: string | null;
  participant_email: string | null;
  participant_phone: string | null;
  created_at: string;
  updated_at: string;
}

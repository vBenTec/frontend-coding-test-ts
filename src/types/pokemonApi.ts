interface BaseResponse<T> {
  status: number,
  data: T
}

export interface ResponseAllPokemon extends BaseResponse<{
  name: string
  url: string
}> {
}

export interface ResponsePokemon extends BaseResponse<Pokemon>

export interface Pokemon {
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  forms: {
    name: string;
    url: string;
  }[];
  game_indices: {
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  }[];
  height: number;
  held_items: any[]; // You may want to define a specific interface for held items
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[]; // You may want to define a specific interface for moves
  name: string;
  order: number;
  past_abilities: any[]; // You may want to define a specific interface for past abilities
  past_types: any[]; // You may want to define a specific interface for past types
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    // Add other sprite properties as needed
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  weight: number;
}
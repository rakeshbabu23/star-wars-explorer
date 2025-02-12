export interface Film {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    species: string[];
    starships: string[];
    vehicles: string[];
    characters: string[];
    planets: string[];
    url: string;
    created: string;
    edited: string;
  }

  export interface Character {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    birth_year: string;
    gender: string;
    url: string;
  }
  
  export interface Planet {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    terrain: string;
    population: string;
    url: string;
  }
  
  export interface Starship {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    crew: string;
    passengers: string;
    url: string;
  }

  export interface FilmResource{
    resource:string[];
    resourceName:'Planet'|'Starship'|'Character';
  }
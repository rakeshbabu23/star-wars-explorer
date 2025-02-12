import { create } from 'zustand';
import { Film } from '../types/types';

interface FilmStore {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: 'episode_id' | 'release_date';
  setSortBy: (sort: 'episode_id' | 'release_date') => void;
  selectedFilm: Film | null;
  setSelectedFilm: (film: Film) => void;
  films: Film[];
  setFilms: (data: Film[]) => void;
}

export const useFilmStore = create<FilmStore>((set) => ({
  films: [],
  setFilms: (data) => set({ films: [...data] }),
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  sortBy: 'episode_id',
  setSortBy: (sort) => set({ sortBy: sort }),
  selectedFilm: null,
  setSelectedFilm: (film) => set({ selectedFilm: film }),
}));


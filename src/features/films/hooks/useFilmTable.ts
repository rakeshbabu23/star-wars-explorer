import { useMemo } from "react";
import { useFilmStore } from "../store/filmStore";
import { Film } from "../types/types";

export const useFilmsTable = (initialData: Film[], isLoading: boolean) => {
  const { searchQuery, setSearchQuery, sortBy, setSortBy } = useFilmStore();

  const filteredAndSortedData = useMemo(() => {
    if (isLoading) return [];
    if (!initialData) return [];
    
    return initialData
      .filter(film => {
        const searchTerm = searchQuery.toLowerCase();
        return (
          film.title.toLowerCase().includes(searchTerm) ||
          film.director.toLowerCase().includes(searchTerm) ||
          film.producer.toLowerCase().includes(searchTerm)
        );
      })
      .sort((a, b) => {
        if (sortBy === 'episode_id') {
          return a.episode_id - b.episode_id;
        } else if (sortBy === 'release_date') {
          return new Date(a.release_date).getTime() - new Date(b.release_date).getTime();
        }
        return 0;
      });
  }, [initialData, searchQuery, sortBy]);   

  return {
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    filteredAndSortedData
  };
};

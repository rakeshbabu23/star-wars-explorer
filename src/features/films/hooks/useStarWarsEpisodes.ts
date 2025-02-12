import { useQuery } from "@tanstack/react-query";
import { fetchStarWarsEpisodes } from "../api/api";
export const useStarWarsEpisodes = () => {
    return useQuery({
      queryKey: ["starwars", "episodes"],
      queryFn: fetchStarWarsEpisodes,
    });
  };
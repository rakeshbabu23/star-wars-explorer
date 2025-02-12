import { useQuery } from "@tanstack/react-query";
import { fetchStarWarsEpisode } from "../api/api";

export const useStarWarsEpisode = (id:string) => {
    return useQuery({
      queryKey: ["starwars", "episodes", id],
      queryFn: () => fetchStarWarsEpisode(id),
    });
  };
  
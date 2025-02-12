
import axios from "axios";
const apiUrl = import.meta.env.VITE_SWAPI_API_URL;
export const fetchStarWarsEpisodes = async () => {
  const response = await axios.get(`${apiUrl}/films/`);
  return response.data.results;
};

export const fetchStarWarsEpisode = async (id: string) => {
  const response = await axios.get(`${apiUrl}/films/${id}`);
  return response.data;
};

export const fetchFilmDetail = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export const fetchFilmDetails = async <T>(urls: string[]): Promise<T[]> => {
  return Promise.all(urls.map(url => fetchFilmDetail(url)));
};


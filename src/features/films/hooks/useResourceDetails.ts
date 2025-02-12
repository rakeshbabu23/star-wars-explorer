import { useQuery } from '@tanstack/react-query';
import { fetchFilmDetails } from '../api/api';

export const useResourceDetails = <T>(urls: string[]) => {
    return useQuery({
        queryKey: ['resourceDetails', urls],
        queryFn: () => fetchFilmDetails<T>(urls),
        enabled: urls.length > 0 
    });
};

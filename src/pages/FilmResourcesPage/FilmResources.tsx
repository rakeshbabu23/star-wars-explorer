
import  { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import {
    Paper,
    Title,
    Grid,
    Text,
    Group,
    Stack,
    Skeleton,
} from '@mantine/core';
import { useFilmStore } from '../../features/films/store/filmStore';
import { fetchFilmDetails } from '../../features/films/api/api';
import { FilmDetailsCard } from '../../components/films/FilmDetailsCard';
import { useStarWarsEpisode } from '../../features/films/hooks/useStarWarsEpisode';


const FilmResources = () => {
    const { id, params } = useParams();
    const { selectedFilm, setSelectedFilm } = useFilmStore(state => ({
        selectedFilm: state.selectedFilm,
        setSelectedFilm: state.setSelectedFilm
    }));

    const { 
        data: filmData, 
        isLoading: isFilmLoading 
    } = useStarWarsEpisode(id!);
    
    const film = selectedFilm || filmData;

    useEffect(() => {
        if (film) {
            setSelectedFilm(film);
        }
    }, [film, setSelectedFilm]);
    
    const { 
        data: resources, 
        isLoading: isResourcesLoading, 
        isError 
    } = useQuery({
        queryKey: ['resourceDetails', id, params],
        queryFn: () => fetchFilmDetails(film?.[params!] || []),
        enabled: Boolean(film && params && film[params!])
    });

    const renderResourceSection = (
        title: string,
        data: any[] | undefined,
        loading: boolean,
        error: boolean,
        type: 'characters' | 'planets' | 'starships'
    ) => (
        <Stack spacing="md">
            <Title order={3}>{title}</Title>
            {loading ? (
                <Group grow>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                        <Skeleton key={i} height={200} radius="md" />
                    ))}
                </Group>
            ) : error ? (
                <Text color="red">Failed to fetch {title.toLowerCase()}.</Text>
            ) : (
                <Grid>
                    {data?.map((resource, index) => (
                        <Grid.Col key={index} span={4}>
                            <FilmDetailsCard resource={resource} type={type} />
                        </Grid.Col>
                    ))}
                </Grid>
            )}
        </Stack>
    );

    const isLoading = isFilmLoading || isResourcesLoading;

    return (
        <Paper shadow="sm" p="xl">
            {renderResourceSection(
                params!, 
                resources, 
                isLoading, 
                isError, 
                params as 'characters' | 'planets' | 'starships'
            )}
        </Paper>
    );
};

export default FilmResources;
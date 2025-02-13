import { useEffect } from 'react';
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
  Card,
} from '@mantine/core';
import { useFilmStore } from '../../features/films/store/filmStore';
import { fetchFilmDetails } from '../../features/films/api/api';
import { useStarWarsEpisode } from '../../features/films/hooks/useStarWarsEpisode';
import { FilmDetailsCard } from '../../components/films/FilmDetailsCard';
import { AppHeader } from '../../components/films/Header';

const FilmInformation = () => {
  const { id, params } = useParams();
  const { selectedFilm, setSelectedFilm } = useFilmStore((state) => ({
    selectedFilm: state.selectedFilm,
    setSelectedFilm: state.setSelectedFilm,
  }));

  const { data: filmData, isLoading: isFilmLoading } = useStarWarsEpisode(id!);
  const film = selectedFilm || filmData;

  useEffect(() => {
    if (film) {
      setSelectedFilm(film);
    }
  }, [film, setSelectedFilm]);

  const { data: resources, isLoading: isResourcesLoading, isError } = useQuery({
    queryKey: ['resourceDetails', id, params],
    queryFn: () => fetchFilmDetails(film?.[params!] || []),
    enabled: Boolean(film && params && film[params!]),
  });

  const renderResourceSection = (
    title: string,
    data: any[] | undefined,
    loading: boolean,
    error: boolean,
    type: 'characters' | 'planets' | 'starships'
  ) => (
    <Stack spacing="md" mt="xl" p="xl">
      <Title order={2} align="center" style={{ color: '#f1c40f' }}>
        {title}
      </Title>
      {loading ? (
        <Grid>
          {[1, 2, 3].map((i) => (
            <Grid.Col key={i} span={4}>
              <Card shadow="sm" radius="md" p="xl" style={{ background: 'transparent' }}>
                <Skeleton height={150} radius="md" />
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      ) : error ? (
        <Text color="red" align="center" size="lg">
          Failed to fetch {title.toLowerCase()}.
        </Text>
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
    <>
      <AppHeader />

      <Paper shadow="sm" p="xl" style={{ background: 'transparent' }}>
        {renderResourceSection(
          params!,
          resources,
          isLoading,
          isError,
          params as 'characters' | 'planets' | 'starships'
        )}
      </Paper>
    </>
  );
};

export default FilmInformation;

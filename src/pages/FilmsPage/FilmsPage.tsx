
import React, { useEffect } from 'react';
import { 
  Paper, 
  Stack, 
  Group, 
  Title, 
  Container,
  Text,
Button,useMantineTheme
} from '@mantine/core';
import { FilmsTable } from '../../components/films/FilmsTable';
import { SearchBar } from '../../components/films/SearchBar';
import { SortSelect } from '../../components/films/SortSelect';
import { useFilmsTable } from '../../features/films/hooks/useFilmTable';
import { MainLayout } from '../../layouts/MainLayout/MainLayout';
import { Film } from '../../features/films/types/types';
import { useStarWarsEpisodes } from '../../features/films/hooks/useStarWarsEpisodes'
import { useNavigate } from 'react-router-dom';
import { useFilmStore } from '../../features/films/store/filmStore';
import { AppHeader } from '../../components/films/Header';
import { LoadingSkeleton } from '../../components/films/LoadingSkeleton';
import { useMediaQuery } from '@mantine/hooks';

export const FilmsPage: React.FC = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useStarWarsEpisodes();
  const { setFilms } = useFilmStore();
  const theme = useMantineTheme();  
  const isDarkTheme = theme.colorScheme === 'dark';
  const textColor = isDarkTheme ? '#f1c40f' : '#333'; 
  useEffect(() => {
    if (data) {
      setFilms(data);
    }
  }, [data, setFilms]);

  const { searchQuery, setSearchQuery, sortBy, setSortBy, filteredAndSortedData } = useFilmsTable(data, isLoading);

  const handleRowClick = (film: Film) => {
    useFilmStore.getState().setSelectedFilm(film);
    navigate(`/film/${film.episode_id}`);
  };

  const isMobile = useMediaQuery('(max-width: 768px)'); 

  return (
    <MainLayout>
      <AppHeader />
      <Container size={isMobile ? 'sm' : 'xl'} py="md">
        <Paper p="md" radius="md" shadow="sm"
          style={{
            backgroundColor: isDarkTheme ? '#000000' : '#f5f5f5',
            backdropFilter: 'blur(5px)',
            borderRadius: '10px',
            color: '#FFD700', 
          }}
        >
          {isLoading ? (
            <LoadingSkeleton />
          ) : isError ? (
            <Stack align="center" spacing="md" py="xl">
              <Text color="red" size="lg">Failed to load films data.</Text>
              <Button onClick={() => window.location.reload()}>
                Retry
              </Button>
            </Stack>
          ) : (
            <Stack spacing={isMobile ? 'xl' : 'md'}>
              <Title order={2} align={isMobile ? 'center' : 'left'}
              style={{ color: textColor }}
              >Discover the Star Wars Films</Title>

              <Group position={isMobile ? 'center' : 'right'} spacing="md" style={{ width: '100%' }}>
                <SearchBar
                  value={searchQuery}
                  onChange={setSearchQuery}
                  style={{ flexGrow: 1 }}
                />
                <SortSelect
                  value={sortBy}
                  onChange={setSortBy}
                  style={{ flexShrink: 0 }}
                />
              </Group>

              <FilmsTable
                data={filteredAndSortedData}
                onRowClick={handleRowClick}
              />
            </Stack>
          )}
        </Paper>
      </Container>
    </MainLayout>
  );
};
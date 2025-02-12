
import React, { useEffect } from 'react';
import { 
  Paper, 
  Stack, 
  Group, 
  Title, 
  Container,
  Text,
  Button
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

// export const FilmsPage: React.FC = () => {

//   const navigate = useNavigate();
//   const { data, isLoading, isError } = useStarWarsEpisodes();
//   const { setFilms } = useFilmStore();

//   useEffect(() => {
//     if (data) {
//       setFilms(data);
//     }
//   }, [data, setFilms]);

//   const {
//     searchQuery,
//     setSearchQuery,
//     sortBy,
//     setSortBy,
//     filteredAndSortedData
//   } = useFilmsTable(data, isLoading);

//   const handleRowClick = (film: Film) => {
//     useFilmStore.getState().setSelectedFilm(film);
//     navigate(`/film/${film.episode_id}`);
//   };

//   return (
//     <MainLayout>
//       <AppHeader />
//       <Container size="xl" py="md">
//         <Paper p="md" radius="md" shadow="sm">
//           {isLoading ? (
//             <LoadingSkeleton />
//           ) : isError ? (
//             <Stack align="center" spacing="md" py="xl">
//               <Text color="red" size="lg">Failed to load films data.</Text>
//               <Button onClick={() => window.location.reload()}>
//                 Retry
//               </Button>
//             </Stack>
//           ) : (
//             <Stack spacing="md">
//               <Title order={2}>Star Wars Films</Title>
              
//               <Group position="right">
//                 <SearchBar 
//                   value={searchQuery}
//                   onChange={setSearchQuery}
//                 />
//                 <SortSelect
//                   value={sortBy}
//                   onChange={setSortBy}
//                 />
//               </Group>

//               <FilmsTable 
//                 data={filteredAndSortedData}
//                 onRowClick={handleRowClick}
//               />
//             </Stack>
//           )}
//         </Paper>
//       </Container>
//     </MainLayout>
//   );
// };


export const FilmsPage: React.FC = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useStarWarsEpisodes();
  const { setFilms } = useFilmStore();

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
        <Paper p="md" radius="md" shadow="sm">
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
            <Stack spacing={isMobile ? 'sm' : 'md'}>
              <Title order={2} align={isMobile ? 'center' : 'left'}>Star Wars Films</Title>

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
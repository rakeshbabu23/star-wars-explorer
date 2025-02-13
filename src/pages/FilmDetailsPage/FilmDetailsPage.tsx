
import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Paper,
  Title,
  Grid,
  Text,
  Badge,
  Group,
  Stack,
  Divider,
  Card,
  Container,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Calendar, User, Rocket, Car, Star, Orbit, Landmark } from 'lucide-react';

import { useStarWarsEpisode } from '../../features/films/hooks/useStarWarsEpisode';
import { StatItem } from '../../components/films/StatItem';
import { AppHeader } from '../../components/films/Header';
import { FilmDetailsSkeleton } from '../../components/films/FilmDetailsLoadingSkeleton';

export const FilmDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: film, isLoading, isError, error } = useStarWarsEpisode(id!);
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (isLoading) return <FilmDetailsSkeleton />;

  if (isError || !film) {
    return (
      <Container size="xl" py="xl">
        <Text color="red">Error: {error?.message || 'Film not found'}</Text>
      </Container>
    );
  }

  return (
    <>
      <AppHeader />
      <Container size="xl" py={isMobile ? 'md' : 'xl'}>
        <Paper shadow="sm" radius="md" p={isMobile ? 'md' : 'xl'} mb="xl">
          <Grid>
            <Grid.Col span={isMobile ? 12 : 8}>
              <Stack spacing="md">
                <Group position="apart" direction={isMobile ? 'column' : 'row'}>
                  <div>
                    <Badge size="lg" variant="filled" color="blue" mb="xs">
                      Episode {film.episode_id}
                    </Badge>
                    <Title order={isMobile ? 2 : 1}>{film.title}</Title>
                  </div>
                  <Badge
                    size="xl"
                    variant="outline"
                    styles={(theme) => ({
                      root: {
                        borderColor: theme.colorScheme === 'dark' ? theme.white : theme.black,
                        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
                      },
                    })}
                  >
                    <Group spacing="xs">
                      <Calendar size={16} />
                      {new Date(film.release_date).getFullYear()}
                    </Group>
                  </Badge>
                </Group>

                <Group spacing="xl" direction={isMobile ? 'column' : 'row'}>
                  <Group spacing="xs">
                    <User color="green" size={20} />
                    <Text size="lg">Director: {film.director}</Text>
                  </Group>
                  <Group spacing="xs">
                    <Landmark color="green" size={20} />
                    <Text size="lg">Producer: {film.producer}</Text>
                  </Group>
                </Group>

                <Divider />

                <div>
                  <Title order={3} mb="md">
                    Opening Crawl
                  </Title>
                  <Card
                    p="xl"
                    radius="md"
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.05)',
                      fontStyle: 'italic',
                    }}
                  >
                    <Text size="lg">{film.opening_crawl}</Text>
                  </Card>
                </div>
              </Stack>
            </Grid.Col>

            <Grid.Col span={isMobile ? 12 : 4}>
              <Card shadow="sm" radius="md" p={isMobile ? 'md' : 'xl'}>
                <Stack spacing="xl">
                  <Title order={3}>Film Statistics</Title>
                  <StatItem icon={<Star size={20} />} color="yellow" label="Characters" value={film.characters.length} />
                  <StatItem icon={<Orbit size={20} />} color="blue" label="Planets" value={film.planets.length} />
                  <StatItem icon={<Rocket size={20} />} color="grape" label="Starships" value={film.starships.length} />
                  <StatItem icon={<Car size={20} />} color="green" label="Vehicles" value={film.vehicles.length} />
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};
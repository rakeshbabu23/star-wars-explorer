import { Card, Text, Group, Stack, Badge, ThemeIcon, useMantineTheme } from '@mantine/core';
import { Character, Planet, Starship,Vehicle } from '../../features/films/types/types';
import { User, Plane,Orbit, Rocket } from 'lucide-react';

interface FilmDetailsCardProps<T> {
  resource: T;
  type: 'characters' | 'planets' | 'starships'|'vehicles';
}

export const FilmDetailsCard = <T extends Character | Planet | Starship|Vehicle>({
  resource,
  type
}: FilmDetailsCardProps<T>) => {
  const theme = useMantineTheme();

  const renderDetails = () => {
    switch (type) {
      case 'characters':
        const character = resource as Character;
        return (
          <>
            <Badge color="blue" style={{ marginRight: 5 }}>
              {character.gender}
            </Badge>
            <Text size="sm">Birth Year: {character.birth_year}</Text>
            <Text size="sm">Height: {character.height} cm</Text>
            <Text size="sm">Mass: {character.mass} kg</Text>
          </>
        );

      case 'planets':
        const planet = resource as Planet;
        return (
          <>
            <Badge color="blue" style={{ marginRight: 5 }}>
              {planet.terrain}
            </Badge>
            <Text size="sm">Climate: {planet.climate}</Text>
            <Text size="sm">Population: {planet.population}</Text>
            <Text size="sm">Diameter: {planet.diameter} km</Text>
          </>
        );

      case 'starships':
        const starship = resource as Starship;
        return (
          <>
            <Badge color="grape" style={{ marginRight: 5 }}>
              {starship.model}
            </Badge>
            <Text size="sm">Manufacturer: {starship.manufacturer}</Text>
            <Text size="sm">Crew: {starship.crew}</Text>
            <Text size="sm">Passengers: {starship.passengers}</Text>
          </>
        );
        case 'vehicles':
  const vehicle = resource as Vehicle; 
  return (
    <>
      <Badge color="green" style={{ marginRight: 5 }}>
        {vehicle.model}
      </Badge>
      <Text size="sm">Manufacturer: {vehicle.manufacturer}</Text>
      <Text size="sm">Crew: {vehicle.crew}</Text>
      <Text size="sm">Passengers: {vehicle.passengers}</Text>
      <Text size="sm">Cargo Capacity: {vehicle.cargo_capacity} kg</Text>
    </>
  );

    }
  };

  const getIcon = () => {
    switch (type) {
      case 'characters':
        return <User 
        color={theme.colorScheme === 'dark'?'#FFF':'#000'}
        size={20} />;
      case 'planets':
        return <Orbit 
        color={theme.colorScheme === 'dark'?'#FFF':'#000'}
        size={20} />;
      case 'starships':
        return <Rocket 
        color={theme.colorScheme === 'dark'?'#FFF':'#000'}
        size={20} />;
      case 'vehicles':
        return <Plane 
        color={theme.colorScheme === 'dark'?'#FFF':'#000'}
        size={20} />;
    }
  };

  const cardBackground = theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white;
  const cardTextColor = theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[9];
  const badgeTextColor = theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <Card shadow="sm" p="md" radius="md" style={{ backgroundColor: cardBackground }}>
      <Stack spacing="xs">
        <Group spacing="xs">
          <ThemeIcon
          bg={type === 'characters' ? 'blue' : type === 'planets' ? 'green' : type==='starships'?'purple':'green'}
            size="lg"
            variant="light"
            color={type === 'characters' ? 'blue' : type === 'planets' ? 'green' : type==='starships'?'purple':'green'}
          >
            {getIcon()}
          </ThemeIcon>
          <Text weight={500} size="lg" style={{ color: cardTextColor }}>
            {'name' in resource ? resource.name : ''}
          </Text>
        </Group>
        <Stack spacing="xs">
          {renderDetails()}
        </Stack>
      </Stack>
    </Card>
  );
};

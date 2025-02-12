import { Card, Text, Group, Stack, Badge, ThemeIcon } from '@mantine/core';
import { Character, Planet, Starship } from '../../features/films/types/types';
import { User, Plane as PlanetIcon, Rocket } from 'lucide-react';

interface FilmDetailsCardProps<T> {
  resource: T;
  type: 'characters' | 'planets' | 'starships';
}

export const FilmDetailsCard = <T extends Character | Planet | Starship>({ 
  resource, 
  type 
}: FilmDetailsCardProps<T>) => {

  const renderDetails = () => {
    switch (type) {
      case 'character':
        const character = resource as Character;
        return (
          <>
            <Badge color="blue">{character.gender}</Badge>
            <Text size="sm">Birth Year: {character.birth_year}</Text>
            <Text size="sm">Height: {character.height}cm</Text>
            <Text size="sm">Mass: {character.mass}kg</Text>
          </>
        );
      
      case 'planet':
        const planet = resource as Planet;
        return (
          <>
            <Badge color="green">{planet.terrain}</Badge>
            <Text size="sm">Climate: {planet.climate}</Text>
            <Text size="sm">Population: {planet.population}</Text>
            <Text size="sm">Diameter: {planet.diameter}km</Text>
          </>
        );
      
      case 'starship':
        const starship = resource as Starship;
        return (
          <>
            <Badge color="purple">{starship.model}</Badge>
            <Text size="sm">Manufacturer: {starship.manufacturer}</Text>
            <Text size="sm">Crew: {starship.crew}</Text>
            <Text size="sm">Passengers: {starship.passengers}</Text>
          </>
        );
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'characters':
        return <User size={20} />;
      case 'planets':
        return <PlanetIcon size={20} />;
      case 'starships':  
        return <Rocket size={20} />;
    }
  };

  return (
    <Card shadow="sm" p="md" radius="md">
      <Stack spacing="xs">
        <Group spacing="xs">
          <ThemeIcon 
            size="lg" 
            variant="light" 
            color={type === 'characters' ? 'blue' : type === 'planets' ? 'green' : 'purple'}
          >
            {getIcon()}
          </ThemeIcon>
          <Text weight={500} size="lg">
            {'name' in resource ? resource.name : ''}
          </Text>
        </Group>
        {renderDetails()}
      </Stack>
    </Card>
  );
};

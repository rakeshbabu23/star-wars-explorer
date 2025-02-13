


import React from 'react';
import { Table, Text, Paper, Group, Accordion,ActionIcon,Card, useMantineTheme } from '@mantine/core';
import { Film } from '../../features/films/types/types';
import { Star,  User, Calendar } from 'lucide-react';
import { useMediaQuery } from '@mantine/hooks';

interface FilmsTableProps {
  data: Film[];
  onRowClick: (film: Film) => void;
}

export const FilmsTable: React.FC<FilmsTableProps> = ({ data, onRowClick }) => {
  const theme = useMantineTheme(); 
  const isDarkTheme = theme.colorScheme === 'dark'; 
  const isMobile = useMediaQuery('(max-width: 768px)'); 
  const tableBackground = isDarkTheme ? '#1e1e1e' : '#fff'; 
  const textColor = isDarkTheme ? '#f1c40f' : '#333'; 
  const tableBorderColor = isDarkTheme ? '#f1c40f' : '#333'; 
  return (
    <Paper
      padding="md"
      shadow="xs"
      style={{
        borderRadius: '8px',
        background: tableBackground,
        color: textColor,
        transition: 'all 0.3s ease', 
      }}
    >
      <Table striped highlightOnHover style={{ border: `1px solid ${tableBorderColor}`, color: textColor }}>
      <thead>
          {!isMobile && (
            <tr style={{ backgroundColor: isDarkTheme ? '#333' : '#f1f1f1' }}>
              <th style={{ color: textColor }}>Episode</th>
              <th style={{ color: textColor }}>Title</th>
              <th style={{ color: textColor }}>Director</th>
              <th style={{ color: textColor }}>Producer</th>
              <th style={{ color: textColor }}>Release Date</th>
            </tr>
          )}
        </thead>
        <tbody>
          {data.map((film) => (
          
            <tr
              key={film.episode_id}
              onClick={() => onRowClick(film)}
              style={{
                cursor: 'pointer',
                transition: 'transform 0.2s',
                backgroundColor: isDarkTheme ? '#2c2c2c' : '#fff',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              {isMobile?
            <>
            
              <Card
                key={film.episode_id}
                shadow="xs"
                padding="md"
                style={{
                  marginBottom: '16px',
                  backgroundColor: isDarkTheme ? '#2c2c2c' : '#fff',
                  color: textColor,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  onRowClick(film);
                }}
              >
                <Group position="apart">
                  <Text weight={500} style={{ fontSize: '1.2rem' }}>
                    Episode {film.episode_id}
                  </Text>
                 
                </Group>
                <Text>{film.title}</Text>
  
                <Accordion>
                  <Accordion.Item value="details">
                    <Accordion.Control
                    onClick={(e) => {
                      e.stopPropagation(); 
                    }}
                    >Details</Accordion.Control>
                    <Accordion.Panel>
                      <Text>
                        <User size={18} /> Director: {film.director}
                      </Text>
                      <Text>
                        <User size={18} /> Producer: {film.producer}
                      </Text>
                      <Text>
                        <Calendar size={18} /> Release Date: {new Date(film.release_date).toLocaleDateString()}
                      </Text>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </Card>
         
          </>:  
            <>
              <td>
                <Group>
                  <Star size={20} color={textColor} />
                  <Text>{film.episode_id}</Text>
                </Group>
              </td>
              <td>
                <Group>
                 
                  <Text>{film.title}</Text>
                </Group>
              </td>
              <td>
                <Group>
                  <User size={20} color={textColor} />
                  <Text>{film.director}</Text>
                </Group>
              </td>
              <td>
                <Group>
                  <User size={20} color={textColor} />
                  <Text>{film.producer}</Text>
                </Group>
              </td>
              <td>
                <Group>
                  <Calendar size={20} color={textColor} />
                  <Text>{new Date(film.release_date).toLocaleDateString()}</Text>
                </Group>
              </td>
              </>
}
            </tr>
          ))}
        </tbody>
      </Table>
    </Paper>
  );
};



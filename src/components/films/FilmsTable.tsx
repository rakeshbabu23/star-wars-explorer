import React from 'react';
import { Table } from '@mantine/core';
import { Film } from '../../features/films/types/types';

interface FilmsTableProps {
  data: Film[];
  onRowClick: (film: Film) => void;
}

export const FilmsTable: React.FC<FilmsTableProps> = ({ data, onRowClick }) => {
  return (
    <Table striped highlightOnHover>
      <thead>
        <tr>
          <th>Episode</th>
          <th>Title</th>
          <th>Director</th>
          <th>Producer</th>
          <th>Release Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((film) => (
          <tr 
            key={film.episode_id}
            onClick={() => onRowClick(film)}
            style={{ cursor: 'pointer' }}
          >
            <td>{film.episode_id}</td>
            <td>{film.title}</td>
            <td>{film.director}</td>
            <td>{film.producer}</td>
            <td>{new Date(film.release_date).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

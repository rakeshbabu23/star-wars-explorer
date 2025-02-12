import React from 'react';
import { Select } from '@mantine/core';

export type SortOption = 'episode_id' | 'release_date';

interface SortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export const SortSelect: React.FC<SortSelectProps> = ({ value, onChange }) => {
  const sortOptions = [
    { value: 'episode_id', label: 'Episode Number' },
    { value: 'release_date', label: 'Release Date' }
  ];

  return (
    <Select
      placeholder="Sort by"
      value={value}
      onChange={(value) => onChange(value as SortOption)}
      data={sortOptions}
      className="w-1/3"
    />
  );
};
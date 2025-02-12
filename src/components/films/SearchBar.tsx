import React from 'react';
import { TextInput } from '@mantine/core';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <TextInput
      placeholder="Search by title, director or producer"
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
      icon={<Search size={16} />}
      className="w-3/5"
    />
  );
};
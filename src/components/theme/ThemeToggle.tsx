

import { ActionIcon } from '@mantine/core';
import { Sun, Moon } from 'lucide-react';
import { useThemeStore } from '../../features/theme/store/themeStore';
export const  ThemeToggle=()=> {
  const { colorScheme, toggleColorScheme } = useThemeStore();

  return (
    <ActionIcon
      variant="outline"
      onClick={toggleColorScheme}
      title="Toggle color scheme"
      className="theme-toggle"
      styles={(theme) => ({
        root: {
          borderColor: theme.colorScheme === 'dark' ? theme.white : theme.black,
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        }
      })}
    >
      {colorScheme === 'dark' ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </ActionIcon>
  );
}

import { useEffect } from 'react';
import { Outlet, useLocation,useMatches } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { getTheme } from './theme';
import { useThemeStore } from './features/theme/store/themeStore';
import './App.scss';


export default function App() {
  const { pathname } = useLocation();
  const colorScheme = useThemeStore((state) => state.colorScheme);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <MantineProvider 
      theme={getTheme()} 
      withGlobalStyles 
      withNormalizeCSS
    >	
      <Outlet />
    </MantineProvider>
  );
}
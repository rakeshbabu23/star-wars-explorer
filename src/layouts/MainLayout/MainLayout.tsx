import React from 'react';
import { AppShell, Header, Container } from '@mantine/core';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <AppShell
      padding="md"
      
    >
      <Container size="xl">
        {children}
      </Container>
    </AppShell>
  );
};
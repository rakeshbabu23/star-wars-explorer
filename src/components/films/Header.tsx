import { Button, Container, Group, Header, Title, Burger } from '@mantine/core';
import { useAuthStore } from '../../features/auth/store/authStore';
import { ThemeToggle } from '../theme/ThemeToggle';
import { useMediaQuery } from '@mantine/hooks';

export const AppHeader = () => {
  const logout = useAuthStore(state => state.logout);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Header height={isMobile ? 50 : 60} p={isMobile ? 'xs' : 'md'}>
      <Container size="xl">
        <Group position="apart" noWrap>
          <Title order={isMobile ? 4 : 3} sx={{ whiteSpace: 'nowrap' }}>
            Star Wars Films Explorer
          </Title>

          <Group spacing={isMobile ? 'xs' : 'md'} noWrap>
            <ThemeToggle />
            <Button variant="subtle" size={isMobile ? 'xs' : 'sm'} onClick={logout}>
              Logout
            </Button>
          </Group>
        </Group>
      </Container>
    </Header>
  );
};

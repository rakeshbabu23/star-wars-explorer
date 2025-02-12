import { Button, Container, Group, Header, Title } from '@mantine/core';
import { useAuthStore } from '../../features/auth/store/authStore';
import { ThemeToggle } from '../theme/ThemeToggle';

export const AppHeader = () => {
    const logout = useAuthStore(state => state.logout);
    
    return (
      <Header height={60} p="xs">
        <Container size="xl">
          <Group position="apart">
            <Group>
              <Title order={3}>Star Wars Films Explorer</Title>
            </Group>
            <Group>
            <ThemeToggle/>
            <Button variant="subtle" onClick={logout}>
              Logout
            </Button>
            </Group>
          </Group>
        </Container>
      </Header>
    );
  };
import { Button, Container, Group, Header, Title, useMantineTheme, Stack, Menu, ActionIcon } from '@mantine/core';
import { useAuthStore } from '../../features/auth/store/authStore';
import { ThemeToggle } from '../theme/ThemeToggle';
import { useMediaQuery } from '@mantine/hooks';
import { SquareMenu } from 'lucide-react';

export const AppHeader = () => {
  const logout = useAuthStore(state => state.logout);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const theme = useMantineTheme();  
  const isDarkTheme = theme.colorScheme === 'dark';

  return (
    <Header
      height={isMobile ? 70 : 60}
      p={isMobile ? 'sm' : 'md'}
      style={{
        backgroundColor: isDarkTheme ? '#000000' : '#f5f5f5', 
        color: isDarkTheme ? '#FFD700' : '#333333',  
        boxShadow: isDarkTheme ? '0 0 10px rgba(255, 215, 0, 0.6)' : 'none', 
        borderBottom: isDarkTheme ? '2px solid #FFD700' : '2px solid #333333',  
      }}
    >
      <Container size="xl">
        <Group position="apart" noWrap>
          <Title
            order={isMobile ? 4 : 3}
            sx={{
              whiteSpace: 'nowrap',
              textShadow: isDarkTheme ? '0 0 8px rgba(255, 215, 0, 0.8)' : 'none',  
            }}
          >
            Star Wars Films Explorer
          </Title>

          {isMobile ? (
            <Menu shadow="md" width={150}>
              <Menu.Target>
                <ActionIcon size="lg" variant="outline" color={isDarkTheme ? 'yellow' : 'dark'}>
                  <SquareMenu size={24} />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>
                  <ThemeToggle />
                </Menu.Item>
                <Menu.Item onClick={logout}>Logout</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          ) : (
            <Group spacing="md" noWrap>
              <ThemeToggle />
              <Button
                variant="subtle"
                size="sm"
                onClick={logout}
                style={{
                  border: isDarkTheme ? '1px solid #FFD700' : '1px solid #333333',  
                }}
              >
                Logout
              </Button>
            </Group>
          )}
        </Group>
      </Container>
    </Header>
  );
};

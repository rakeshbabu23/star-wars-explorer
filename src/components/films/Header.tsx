import { Button, Container, Group, Header, Title,useMantineTheme } from '@mantine/core';
import { useAuthStore } from '../../features/auth/store/authStore';
import { ThemeToggle } from '../theme/ThemeToggle';
import { useMediaQuery, } from '@mantine/hooks';

export const AppHeader = () => {
  const logout = useAuthStore(state => state.logout);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const theme = useMantineTheme();  
  const isDarkTheme = theme.colorScheme === 'dark';

  return (
    <Header
      height={isMobile ? 50 : 60}
      p={isMobile ? 'xs' : 'md'}
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

          <Group spacing={isMobile ? 'xs' : 'md'} noWrap>
            <ThemeToggle />
            <Button
              variant="subtle"
              size={isMobile ? 'xs' : 'sm'}
              onClick={logout}
              style={{
                border: isDarkTheme ? '1px solid #FFD700' : '1px solid #333333',  
              }}
            >
              Logout
            </Button>
          </Group>
        </Group>
      </Container>
    </Header>
  );
};

import {
    Card,
    Group,
    ThemeIcon,
    Title,
    Stack,List
} from '@mantine/core';
import { Star } from 'lucide-react';
interface FeaturedCardProps {
    title: string;
    items: string[];
    icon: React.ReactNode;
    color: string;
  }
  
  export const FeaturedCard: React.FC<FeaturedCardProps> = ({ 
    title, 
    items, 
    icon, 
    color 
  }) => (
    <Card shadow="sm" radius="md" p="xl">
      <Stack spacing="md">
        <Group spacing="xs">
          <ThemeIcon color={color} size="lg">
            {icon}
          </ThemeIcon>
          <Title order={3}>{title}</Title>
        </Group>
        
        <List
          spacing="xs"
          size="sm"
          center
          icon={
            <ThemeIcon color={color} size="sm" variant="light">
              <Star size={12} />
            </ThemeIcon>
          }
        >
          {items.slice(0, 5).map((item, index) => (
            <List.Item key={index}>
              Resource {index + 1}
            </List.Item>
          ))}
        </List>
      </Stack>
    </Card>
  );
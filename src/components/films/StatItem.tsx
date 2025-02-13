import { Anchor, Badge, Group, Text, ThemeIcon } from '@mantine/core';
import { Link } from 'react-router-dom';

interface StatItemProps {
    icon: React.ReactNode;
    color: string;
    label: string;
    value: number;
}

export const StatItem: React.FC<StatItemProps> = ({ icon, color, label, value }) => (
    <Group position="apart">
      <Group spacing="sm">
        <ThemeIcon color={color} size="lg" variant="light">
          {icon}
        </ThemeIcon>
        <Anchor size="md" component={Link} to={`${label.toLowerCase()}`} state={{ params: label.toLowerCase() }} underline={true}>
          {label}
        </Anchor>
      </Group>
      <Badge size="lg" variant="filled" color={color}>
        {value}
      </Badge>
    </Group>
);

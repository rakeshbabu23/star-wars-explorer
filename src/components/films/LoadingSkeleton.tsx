
import React, { useState, useEffect } from 'react';
import { Stack, Group,Skeleton, Loader, Text, Paper, Progress } from '@mantine/core';

export const LoadingSkeleton = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500); 
    return () => clearInterval(interval);
  }, []);

  return (
    <Stack spacing="md">
      <Paper padding="md" shadow="xs" style={{ textAlign: 'center' }}>
        <Text size="lg" weight={500}>
          <span role="img" aria-label="lightsaber">💫</span> Initiating Lightspeed... <span role="img" aria-label="spaceship">🚀</span>
        </Text>
      </Paper>

      <Group position="center">
        <Loader size="lg" variant="dots"  color='yellow'/>
      </Group>

      <Stack spacing="xs">
        <Text align="center" size="sm" color="dimmed">
          Powering up the Hyperdrive...
        </Text>
        <Group position="center">
          <Text size="md" weight={600}>Preparing Rebel Alliance Ships...</Text>
        </Group>
        <Progress
          value={progress}
          size="xl"
          color="cyan"
          radius="xs"
          style={{ width: '100%' }}
          label={`${progress}%`}
        />
      </Stack>

      <Group position="center">
        <Skeleton height={36} width={250} />
      </Group>
    </Stack>
  );
};

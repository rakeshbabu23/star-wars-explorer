import React from 'react'
import { Stack, Skeleton, Group } from '@mantine/core';

export const LoadingSkeleton = () => (
    <Stack spacing="md">
      <Skeleton height={40} width="30%" />
      <Group position="right">
        <Skeleton height={36} width={200} />
        <Skeleton height={36} width={150} />
      </Group>
      <Skeleton height={400} />
    </Stack>
  );

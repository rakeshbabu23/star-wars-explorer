
import React from 'react';
import { Container, Grid, Box } from '@mantine/core';

export const FilmDetailsSkeleton: React.FC = () => {
  return (
    <Container size="xl" py="xl">
      <div
        style={{
          background: '#0b0b0b',
          borderRadius: '10px',
          padding: '2rem',
          color: '#fff',
        }}
      >
        <Grid gutter="xl">
          <Grid.Col sm={12} md={8}>
            <Box
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '10px',
                height: '400px',
                background: 'linear-gradient(45deg, #333, #555)', 
              }}
            >
              <div
                style={{
                  height: '4px',
                  background: '#FFD700',
                  borderRadius: '2px',
                  animation: 'lightsaberGlow 1.5s infinite',
                  marginBottom: '1rem',
                }}
              />
            </Box>
          </Grid.Col>

          <Grid.Col sm={12} md={4}>
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  height: '30px',
                  background: '#444',
                  borderRadius: '8px',
                  animation: 'crawl 2s infinite alternate',
                  marginBottom: '1rem',
                }}
              />
              
              <div
                style={{
                  height: '20px',
                  width: '60%',
                  background: '#444',
                  borderRadius: '8px',
                  animation: 'crawl 2s infinite alternate',
                  marginBottom: '0.5rem',
                }}
              />

              <div
                style={{
                  height: '20px',
                  width: '75%',
                  background: '#444',
                  borderRadius: '8px',
                  animation: 'crawl 2s infinite alternate',
                  marginBottom: '0.5rem',
                }}
              />

              <div
                style={{
                  height: '20px',
                  width: '75%',
                  background: '#444',
                  borderRadius: '8px',
                  animation: 'crawl 2s infinite alternate',
                  marginBottom: '0.5rem',
                }}
              />
              <div
                style={{
                  height: '20px',
                  width: '60%',
                  background: '#444',
                  borderRadius: '8px',
                  animation: 'crawl 2s infinite alternate',
                  marginBottom: '0.5rem',
                }}
              />
              <Box mt="xl">
                <div
                  style={{
                    height: '20px',
                    background: '#444',
                    borderRadius: '8px',
                    animation: 'crawl 2s infinite alternate',
                    marginBottom: '0.5rem',
                  }}
                />
                <div
                  style={{
                    height: '20px',
                    background: '#444',
                    borderRadius: '8px',
                    animation: 'crawl 2s infinite alternate',
                    marginBottom: '0.5rem',
                  }}
                />
                <div
                  style={{
                    height: '20px',
                    background: '#444',
                    borderRadius: '8px',
                    animation: 'crawl 2s infinite alternate',
                    marginBottom: '0.5rem',
                  }}
                />
              </Box>
            </div>
          </Grid.Col>
        </Grid>
      </div>
    </Container>
  );
};

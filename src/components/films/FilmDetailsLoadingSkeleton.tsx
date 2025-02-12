
import { Skeleton, Container, Grid  } from '@mantine/core';

export const FilmDetailsSkeleton = () => {
    return (
        <Container size="xl" py="xl">
            <Grid>
            <Grid.Col span={8}>
            <Skeleton height={400}  />
            </Grid.Col>
            <Grid.Col span={4}>
            <Skeleton height={400}/>
            </Grid.Col>
    
    </Grid>
        </Container>
        
    )
}
 

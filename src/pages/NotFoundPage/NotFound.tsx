
import { Container, Text, Button, Space } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <Text size={50} weight={700} color="red">404</Text>
      <Text size={24} weight={500} color="gray.7">Page Not Found</Text>
      <Text size={16} color="gray.6" mb={20}>
        The page you are looking for doesn't exist or has been moved.
      </Text>
      <Button variant="filled" color="blue" onClick={() => navigate(-1)}>Go Back</Button>
      <Space h="md" />
      <Button variant="filled" color="blue" onClick={() => navigate('/')}>Go Back Home</Button>
    </Container>
  );
};

export default NotFound;

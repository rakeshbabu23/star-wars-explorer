import { Button, Container, Title, Text } from '@mantine/core';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import './Home.scss';

export const Home: React.FC = () => {
  const navigate=useNavigate()
  const [isHovered, setIsHovered] = useState(false);

  return (
  <div className="landing-page">
 
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Title order={1} mb="xl"  className="landing-title">
            Welcome to the Star Wars Explorer
          </Title>
          <Text size="lg" className="landing-text">
            Experience the epic saga of Star Wars like never before
          </Text>
        </motion.div>

       
          <Button
          mt="xl"
            size="lg"
            radius="xl"
            variant="gradient"
            gradient={{ from: 'yellow', to: 'orange' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {navigate('/signin')}} 
            className="landing-button"
          >
            {isHovered ? 'May the Force be with you' : 'Login'}
          </Button>

   
    </div>
  );
};

export default Home;

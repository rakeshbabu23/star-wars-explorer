import React from 'react';
import { 
    TextInput, 
    PasswordInput, 
    Paper, 
    Title, 
    Container, 
    Button, 
    Stack,
    Text,
    Anchor,
    
    Loader
  } from '@mantine/core';
  import { Link } from 'react-router-dom';
import useSignup from '../../features/auth/hooks/useSignup';

  
  export function SignupPage() {
    const { form, handleSubmit, loading } = useSignup();
  
    return (
      <Container size={420} my={40}>
        <Title ta="center" order={2}>Create a new account</Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Already have an account?{' '}
          <Anchor size="sm" component={Link} to="/signin">
            Sign in
          </Anchor>
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack>
              <TextInput
                label="Email"
                placeholder="your@email.com"
                required
                {...form.getInputProps('email')}
              />
              <PasswordInput
                label="Password"
                placeholder="Your password"
                required
                {...form.getInputProps('password')}
              />
              <PasswordInput
                label="Confirm Password"
                placeholder="Confirm your password"
                required
                {...form.getInputProps('confirmPassword')}
              />
              <Button type="submit" fullWidth mt="xl" disabled={!form.isValid() || loading}>
                {loading ? <Loader size="sm" /> : 'Sign up'}
              </Button>
            </Stack>
          </form>
        </Paper>
      </Container>
    );
  }
  
  export default SignupPage;
  
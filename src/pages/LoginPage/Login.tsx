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

import useLogin from '../../features/auth/hooks/useLogin';


export function LoginPage() {
  const { form, handleSubmit, loading } = useLogin();
 

  return (
    <Container size={420} my={40}>
      <Title ta="center" order={2}>Welcome back</Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Don't have an account yet?{' '}
        <Anchor size="sm" component={Link} to="/signup">
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <TextInput
              aria-label="Email"
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
            <Button type="submit" fullWidth mt="xl" disabled={!form.isValid() || loading}>
              {loading ? <Loader size="sm" /> : 'Sign in'}
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}

export default LoginPage;

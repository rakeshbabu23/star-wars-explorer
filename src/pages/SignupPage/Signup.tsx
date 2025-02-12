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
    useMantineTheme,
    Loader
  } from '@mantine/core';
  import { useForm } from '@mantine/form';
  import { notifications } from '@mantine/notifications';
  import { Link } from 'react-router-dom';

  interface SignupFormValues {
    email: string;
    password: string;
    confirmPassword: string;
  }
  
  export function SignupPage() {
    const form = useForm<SignupFormValues>({
      initialValues: {
        email: '',
        password: '',
        confirmPassword: '',
      },
      validate: {
        email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        password: (value) => (value.length < 6 ? 'Password must be at least 6 characters' : null),
        confirmPassword: (value, values) => (value !== values.password ? 'Passwords do not match' : null),
      },
    });
  
    const [loading, setLoading] = React.useState(false);
  
    const handleSubmit = async (values: SignupFormValues) => {
      try {
        setLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 1000));
        notifications.show({
          title: 'Success',
          message: 'Account created successfully',
          color: 'green',
        });
      } catch (error) {
        notifications.show({
          title: 'Error',
          message: 'Something went wrong',
          color: 'red',
        });
      } finally {
        setLoading(false);
      }
    };
  
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
  
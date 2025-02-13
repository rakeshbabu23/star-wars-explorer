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
  Loader,
} from "@mantine/core";
import { Link } from "react-router-dom";
import useSignup from "../../features/auth/hooks/useSignup";

export const Signup = () => {
  const { form, handleSubmit, loading } = useSignup();

  return (
    <div className="auth-page">
      <Container size="xl" className="container">
        <Title ta="center" order={2} className="auth-title">
          Begin Your Journey in the Galaxy
        </Title>
        <Text  size="sm" ta="center" mt={5}>
          Already one with the Force?{" "}
          <Anchor size="sm" component={Link} to="/signin" className="auth-link">
            Return to the Empire
          </Anchor>
        </Text>

        <Paper
          withBorder
          shadow="md"
          p={30}
          mt={30}
          radius="md"
          className="auth-card"
        >
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack>
              <TextInput
                label="Email"
                placeholder="jedi@email.com"
                required
                {...form.getInputProps("email")}
              />
              <PasswordInput
                label="Password"
                placeholder="Your lightsaber's secret code"
                required
                {...form.getInputProps("password")}
              />
              <PasswordInput
                label="Confirm Password"
                placeholder="Confirm your lightsaber's secret code"
                required
                {...form.getInputProps("confirmPassword")}
              />
              <Button
                type="submit"
                fullWidth
                mt="xl"
                disabled={!form.isValid()}
              >
                {loading ? (
                  <div className="btn-loading">
                    <Loader size="sm" />
                    <span style={{ marginLeft: "8px" }}>
                      Activating Lightspeed...
                    </span>
                  </div>
                ) : (
                  "Join the Rebellion"
                )}
              </Button>
            </Stack>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

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

import useLogin from "../../features/auth/hooks/useLogin";
import "./AuthPage.scss";

export const  Login=()=> {
  const { form, handleSubmit, loading } = useLogin();
  return (
    <div className="auth-page">
      <Container size="xl"  className="container">
        <Title ta="center" order={2} className="auth-title">
          Welcome back to the Empire!
        </Title>
        <Text  size="sm" ta="center" mt={5}>
          Not part of the Rebellion yet?{" "}
          <Anchor size="sm" component={Link} to="/signup" className="auth-link">
            Join the Force
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
                      Preparing the Force...
                    </span>
                  </div>
                ) : (
                  "Enter the Galaxy"
                )}
              </Button>
            </Stack>
          </form>
        </Paper>
      </Container>
    </div>
  );
}


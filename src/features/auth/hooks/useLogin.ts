import React from "react";
import { useForm } from "@mantine/form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { handleLogin } from "../../../services/auth/auth.service";
import { useAuthStore } from "../store/authStore";
interface LoginFormValues {
  email: string;
  password: string;
}
const useLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const login = useAuthStore((state) => state.login);
  const [loading, setLoading] = React.useState(false);
  const form = useForm<LoginFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 6 ? "Password must be at least 6 characters" : null,
    },
  });
  const handleSubmit = async (values: LoginFormValues) => {
    try {
      setLoading(true);
      const response = await handleLogin(values);
      if (response.success) {
        login(response.token!);
        navigate(location.state?.from || "/");
      } else {
        alert(response.message);  
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };
  return {
    form,
    handleSubmit,
    loading,
  };
};

export default useLogin;

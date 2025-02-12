import React from "react";
import { useForm } from "@mantine/form";
import {  useLocation, useNavigate } from "react-router-dom";
import { handleSignup } from "../../../services/auth/auth.service";
import { useAuthStore } from "../store/authStore";
import { SignupFormValues } from "../types/types";

const useSignup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const login = useAuthStore((state) => state.login);
  const [loading, setLoading] = React.useState(false);
  const form = useForm<SignupFormValues>({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 6 ? "Password must be at least 6 characters" : null,
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords do not match" : null,
    },
  });
  const handleSubmit = async (values: SignupFormValues) => {
    try {
      setLoading(true);
      const response = await handleSignup(values);
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

export default useSignup;

import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../features/auth/store/authStore';

type PublicRouteProps = {
  children: React.ReactNode;
};

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const location = useLocation();

  // If user is authenticated and tries to access login/signup, redirect to home
  if (isAuthenticated && (location.pathname === '/signin' || location.pathname === '/signup')) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
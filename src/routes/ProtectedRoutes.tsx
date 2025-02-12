import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../features/auth/store/authStore';

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to signin while saving the attempted url
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
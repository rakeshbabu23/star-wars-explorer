import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import LoginPage from './pages/LoginPage/Login';
import SignupPage from './pages/SignupPage/Signup';
import { FilmsPage } from './pages/FilmsPage/FilmsPage';
import { FilmDetailsPage } from './pages/FilmDetailsPage/FilmDetailsPage';
import NotFound from './pages/NotFoundPage/NotFound';
import { ProtectedRoute } from './routes/ProtectedRoutes';
import { PublicRoute } from './routes/PublicRoute';
import FilmInformation from './pages/FIlmInformation/FilmInformation';

export const routes = [
	{
	  path: '/',
	  element: <App />,
	  children: [
		{
		  path: '/',
		  element: (
			<ProtectedRoute>
			  <FilmsPage />
			</ProtectedRoute>
		  ),
		},
		{
		  path: '/signin',
		  element: (
			<PublicRoute>
			  <LoginPage />
			</PublicRoute>
		  ),
		},
		{
		  path: '/signup',
		  element: (
			<PublicRoute>
			  <SignupPage />
			</PublicRoute>
		  ),
		},
		{
		  path: '/film/:id',
		  element: (
			<ProtectedRoute>
			  <FilmDetailsPage />
			</ProtectedRoute>
		  ),
		},
		{
		  path: '/film/:id/:params',
		  element: (
			<ProtectedRoute>
			  <FilmInformation />
			</ProtectedRoute>
		  ),
		},
		{
		  path: '*',
		  element: <NotFound />,
		},
	  ],
	},
  ];

const router = createBrowserRouter(routes);

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
			cacheTime: 1000 * 60 * 15
		}
	}
});
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</StrictMode>
);

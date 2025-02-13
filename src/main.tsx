import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import { FilmsPage } from './pages/FilmsPage/FilmsPage';
import { FilmDetailsPage } from './pages/FilmDetailsPage/FilmDetailsPage';
import NotFound from './pages/NotFoundPage/NotFound';
import { ProtectedRoute } from './routes/ProtectedRoutes';
import { PublicRoute } from './routes/PublicRoute';
import FilmInformation from './pages/FIlmInformation/FilmInformation';
import { Home } from './pages/LandingPage/Home';
import { Login } from './pages/LoginPage/Login';
import { Signup } from './pages/SignupPage/Signup';

export const routes = [
	{
	  path: '/',
	  element: <App />,
	  children: [
		{
			path: '/',
			element: (
			  <PublicRoute>
				<Home />
			  </PublicRoute>
			),
		  },
		{
		  path: '/films',
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
			  <Login />
			</PublicRoute>
		  ),
		},
		{
		  path: '/signup',
		  element: (
			<PublicRoute>
			  <Signup />
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

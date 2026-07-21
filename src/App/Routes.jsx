import { createBrowserRouter } from 'react-router-dom';
import Main from '../Pages/Main';
import Profile from '../Pages/Profile';
import App from './App';
import NotFound from '../Pages/NotFound';
import Auth from '../Features/Auth/ui/Register';
import AuthGuard from '../Features/Auth/ui/AuthGuard';
import MainLayout from '../Widgets/Layout/MainLayout';
import Register from '../Features/Auth/ui/Register';
import Login from '../Features/Auth/ui/Login';
import BoardPage from '../Pages/BoardPage';

export const routes = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				element: <AuthGuard />,
				children: [
					{
						element: <MainLayout />,
						children: [
							{
								path: '/',
								element: <Main />,
							},
							{
								path: '/profile',
								element: <Profile />,
							},
							{
								path: '/boards/:id',
								element: <BoardPage />,
							},
						],
					},
				],
			},

			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
]);

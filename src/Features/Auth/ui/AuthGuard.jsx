import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../../../Entities/user/model/authStore';

const AuthGuard = () => {
	const user = useAuthStore((state) => state.user);

	if (!user) {
		return <Navigate to="/login" replace />;
	}

	return <Outlet />;
};

export default AuthGuard;

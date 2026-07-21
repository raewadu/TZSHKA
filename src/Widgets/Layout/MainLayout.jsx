import { Outlet } from 'react-router-dom';
import Header from '../../Features/Header/Header';

const MainLayout = () => {
	return (
		<>
			<Header />

			<Outlet />
		</>
	);
};

export default MainLayout;

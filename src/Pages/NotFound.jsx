import { Link } from 'react-router-dom';
import Button from '../Shared/ui/Button/Button';

export default function NotFound() {
	return (
		<div
			style={{
				textAlign: 'center',
				padding: '50px',
				minHeight: '100vh',
			}}
		>
			<h1>404 - Page Not Found</h1>
			<p>The page you are looking for does not exist.</p>
			<Link to="/">
				<button
					style={{
						backgroundColor: 'white',
						padding: '10px',
						borderRadius: '10px',
						marginTop: '20px',
					}}
				>
					Go Back Home
				</button>
			</Link>
		</div>
	);
}

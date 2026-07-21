import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { Eclipse, Moon, Sun } from 'lucide-react';

const navItems = [
	{ label: 'Главная', path: '/' },
	{ label: 'Профиль', path: '/profile' },
];

const Header = () => {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
	useEffect(() => {
		document.body.setAttribute('data-theme', theme);
	}, [theme]);
	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';

		setTheme(newTheme);

		localStorage.setItem('theme', newTheme);

		document.body.setAttribute('data-theme', newTheme);
	};
	const isDark = theme === 'dark';
	return (
		<header>
			<div className="container">
				<nav>
					<ul>
						{navItems.map((item) => (
							<li key={item.path}>
								<NavLink to={item.path}>{item.label}</NavLink>
							</li>
						))}
					</ul>
					<button onClick={toggleTheme}>
						{isDark ? <Eclipse /> : <Sun />}
					</button>
				</nav>
			</div>
		</header>
	);
};

export default Header;

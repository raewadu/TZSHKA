import React, { useState } from 'react';
import { useAuthStore } from '../Entities/user/model/authStore';
import styles from './Main.module.css';
import Button from '../Shared/ui/Button/Button';
import Input from '../Shared/ui/input/Input';
import { useUpdateUser } from '../Features/Auth/model/useUpdateUser';

const Profile = () => {
	const user = useAuthStore((state) => state.user);
	const setAuth = useAuthStore((state) => state.setAuth);
	const logout = useAuthStore((state) => state.logout);

	const { mutate: updateUser } = useUpdateUser();

	const [name, setName] = useState(user.name || '');

	const [avatar, setAvatar] = useState(user.avatar || '');

	const handleSubmit = (e) => {
		e.preventDefault();

		updateUser(
			{
				id: user.id,
				name,
				avatar,
			},
			{
				onSuccess: (response) => {
					setAuth({
						...user,
						name,
						avatar,
					});
				},
			},
		);
	};

	return (
		<div className="container">
			<div className={styles.profileWrapper}>
				<h1>Профиль</h1>
				<div className={styles.avatarWrapper}>
					<img
						src={
							avatar ||
							'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQok7mz5iErgglCrJinfWc3-NN9ZIa7RojF3kpAORcghkCjmO1O4GQy20U&s=10'
						}
						className={styles.avatar}
					/>
				</div>
				<form onSubmit={handleSubmit} className={styles.profileForm}>
					<label>Имя</label>

					<Input
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder={user.name}
					/>

					<label>Ссылка на аватар</label>

					<Input
						value={avatar}
						onChange={(e) => setAvatar(e.target.value)}
						placeholder="URL изображения"
					/>

					<Button type="submit">Сохранить</Button>
				</form>
			</div>
		</div>
	);
};

export default Profile;

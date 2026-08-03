import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import styles from './Auth.module.css';
import { authSchema } from '../model/schema';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../Entities/user/model/authStore';
import { useRegister } from '../model/useRegister';
import Input from '../../../Shared/ui/input/Input';
import Button from '../../../Shared/ui/Button/Button';
import { RegDto } from '../../../types/user';

const Register = () => {
	const { mutate, isPending, error } = useRegister();

	const navigate = useNavigate();

	const { setAuth } = useAuthStore();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegDto>({
		resolver: zodResolver(authSchema),
	});

	const onSubmit = (data: RegDto) => {
		mutate(data, {
			onSuccess: (user) => {
				setAuth(user);
				navigate('/');
			},
		});
	};

	return (
		<div className={styles.wrapper}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<h1 className={styles.title}>Регистрация</h1>

				<label className={styles.label}>Имя</label>

				<Input placeholder="Введите имя" {...register('name')} />

				{errors.name && <p className={styles.error}>{errors.name.message}</p>}

				<label className={styles.label}>Email</label>

				<Input placeholder="Введите email" {...register('email')} />

				{errors.email && <p className={styles.error}>{errors.email.message}</p>}

				<label className={styles.label}>Пароль</label>

				<Input
					type="password"
					placeholder="Введите пароль"
					{...register('password')}
				/>

				{errors.password && (
					<p className={styles.error}>{errors.password.message}</p>
				)}

				<Button type="submit" disabled={isPending}>
					{isPending ? 'Создание...' : 'Создать аккаунт'}
				</Button>

				{error && <p className={styles.error}>{error.message}</p>}

				<Link className={styles.link} to="/login">
					Есть аккаунт?
				</Link>
			</form>
		</div>
	);
};

export default Register;

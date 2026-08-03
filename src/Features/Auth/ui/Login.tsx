import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import styles from './Auth.module.css';

import { Link, useNavigate } from 'react-router-dom';

import { useAuthStore } from '../../../Entities/user/model/authStore';

import { useLogin } from '../model/useLogin';
import { loginSchema } from '../model/loginSchema';

import Input from '../../../Shared/ui/input/Input';
import Button from '../../../Shared/ui/Button/Button';
import type { LoginDto } from '../../../types/user';

const Login = () => {
	const navigate = useNavigate();

	const { mutate, isPending, error } = useLogin();

	const { setAuth } = useAuthStore();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginDto>({
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = (data: LoginDto) => {
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
				<h1 className={styles.title}>Вход</h1>

				<label className={styles.label}>Электронная почта</label>

				<Input placeholder="Введите email" {...register('email')} />

				{errors.email && <p className={styles.error}>{errors.email.message}</p>}

				<label className={styles.label}>Пароль</label>

				<Input
					type="password"
					placeholder="Введите пароль"
					{...register('password')}
				></Input>

				{errors.password && (
					<p className={styles.error}>{errors.password.message}</p>
				)}

				<Button type="submit" disabled={isPending}>
					{isPending ? 'Вход...' : 'Войти'}
				</Button>

				{error && <p className={styles.error}>{error.message}</p>}

				<Link className={styles.link} to="/register">
					Нет аккаунта?
				</Link>
			</form>
		</div>
	);
};

export default Login;

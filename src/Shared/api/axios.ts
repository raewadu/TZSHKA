import axios from 'axios';
import { LoginDto, User } from '../../types/user';

export const api = axios.create({
	baseURL: 'http://localhost:3000/',
});

export const login = async (data: LoginDto): Promise<User> => {
	const response = await api.get<User[]>('users', {
		params: {
			email: data.email,
			password: data.password,
		},
	});

	const user = response.data[0];

	if (!user) {
		throw new Error('Неверный логин или пароль');
	}

	return user;
};

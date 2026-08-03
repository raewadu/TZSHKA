import { api } from '../../../Shared/api/axios';
import { AuthError, LoginDto, RegDto, User } from '../../../types/user';

export const register = async (data: RegDto): Promise<User> => {
	const nameCheck = await api.get<User[]>('users', {
		params: {
			name: data.name,
		},
	});

	if (nameCheck.data.length > 0) {
		throw new Error('Это имя уже занято');
	}
	const emailCheck = await api.get<User[]>('users', {
		params: {
			email: data.email,
		},
	});

	if (emailCheck.data.length > 0) {
		throw new Error('Этот email уже занят');
	}

	const response = await api.post<User>('users', {
		name: data.name,
		email: data.email,
		password: data.password,
	});

	return response.data;
};
export const login = async (data: LoginDto): Promise<User> => {
	const response = await api.get<User[]>('users', {
		params: {
			email: data.email,
			password: data.password,
		},
	});

	if (response.data.length === 0) {
		throw new Error('Неверный email или пароль');
	}

	return response.data[0];
};

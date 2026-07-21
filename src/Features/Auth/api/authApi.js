import { api } from '../../../Shared/api/axios';

export const register = async (data) => {
	const emailCheck = await api.get('users', {
		params: {
			email: data.email,
		},
	});
	if (emailCheck.data.length > 0) {
		throw {
			field: 'email',
			message: 'Этот email уже занят',
		};
	}
	const nameCheck = await api.get('users', {
		params: {
			name: data.name,
		},
	});

	if (nameCheck.data.length > 0) {
		throw {
			field: 'name',
			message: 'Это имя профиля уже занято',
		};
	}
	const response = await api.post('users', {
		name: data.name,
		email: data.email,
		password: data.password,
	});

	return response.data;
};
export const login = async (data) => {
	const response = await api.get('users', {
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

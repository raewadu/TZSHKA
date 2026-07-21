import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://localhost:3000/',
});

export const login = async (data) => {
	const response = await api.get('users', {
		params: {
			email: data.email,
			password: data.password,
		},
	});

	if (response.data.length === 0) {
		throw new Error('Неверный логин или пароль');
	}

	return response.data[0];
};

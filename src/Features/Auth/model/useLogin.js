import { useMutation } from '@tanstack/react-query';
import { login } from '../../../Shared/api/axios';

export const useLogin = () => {
	return useMutation({
		mutationFn: login,

		onError: (error) => {
			console.log('Ошибка:', error.message);
		},
	});
};

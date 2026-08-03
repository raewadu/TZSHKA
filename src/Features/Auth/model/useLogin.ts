import { useMutation } from '@tanstack/react-query';
import { login } from '../../../Shared/api/axios';
import { LoginDto, User } from '../../../types/user';

export const useLogin = () => {
	return useMutation<User, Error, LoginDto>({
		mutationFn: login,

		onError: (error) => {
			console.log('Ошибка:', error.message);
		},
	});
};

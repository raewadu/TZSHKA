import { useMutation } from '@tanstack/react-query';
import { register } from '../api/authApi';
import { RegDto, User } from '../../../types/user';

export const useRegister = () => {
	return useMutation<User, Error, RegDto>({
		mutationFn: register,
	});
};

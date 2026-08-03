import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../../../Shared/api/axios';
import { User, UserEditDto } from '../../../types/user';

export const useUpdateUser = () => {
	const queryClient = useQueryClient();

	return useMutation<User, Error, UserEditDto>({
		mutationFn: async ({ id, ...data }) => {
			const response = await api.patch<User>(`users/${id}`, data);

			return response.data;
		},

		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['user'],
			});
		},
	});
};

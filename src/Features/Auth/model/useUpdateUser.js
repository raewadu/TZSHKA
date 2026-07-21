import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../../../Shared/api/axios';

export const useUpdateUser = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: ({ id, ...data }) => api.patch(`users/${id}`, data),

		onSuccess: () => {
			queryClient.invalidateQueries(['user']);
		},
	});
};

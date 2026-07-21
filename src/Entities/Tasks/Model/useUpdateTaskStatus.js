import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTaskStatus } from '../api/taskApi';

export const useUpdateTaskStatus = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: updateTaskStatus,

		onSuccess: (data) => {
			queryClient.invalidateQueries({
				queryKey: ['tasks', data.boardId],
			});
		},
	});
};

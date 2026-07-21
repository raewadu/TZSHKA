import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTask } from '../api/taskApi';

export const useUpdateTask = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: updateTask,

		onSuccess: (data) => {
			queryClient.invalidateQueries({
				queryKey: ['tasks', data.boardId],
			});
		},
	});
};

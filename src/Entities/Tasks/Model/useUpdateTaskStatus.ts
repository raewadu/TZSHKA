import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTaskStatus } from '../api/taskApi';
import { EditTaskStatusDto, Task } from '../../../types/task';

export const useUpdateTaskStatus = () => {
	const queryClient = useQueryClient();

	return useMutation<Task, Error, EditTaskStatusDto>({
		mutationFn: updateTaskStatus,

		onSuccess: (data) => {
			queryClient.invalidateQueries({
				queryKey: ['tasks', data.boardId],
			});
		},
	});
};

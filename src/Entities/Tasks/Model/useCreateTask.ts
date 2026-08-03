import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTask } from '../api/taskApi';
import { CreateTaskDto, Task } from '../../../types/task';

export const useCreateTask = () => {
	const queryClient = useQueryClient();

	return useMutation<Task, Error, CreateTaskDto>({
		mutationFn: createTask,

		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({
				queryKey: ['tasks', variables.boardId],
			});

			queryClient.invalidateQueries({
				queryKey: ['tasks'],
			});
		},
	});
};

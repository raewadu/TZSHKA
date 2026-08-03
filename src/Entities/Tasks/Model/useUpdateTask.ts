import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTask } from '../api/taskApi';
import { EditTaskDto, Task } from '../../../types/task';

export const useUpdateTask = () => {
	const queryClient = useQueryClient();

	return useMutation<Task, Error, EditTaskDto>({
		mutationFn: updateTask,

		onSuccess: (data) => {
			queryClient.invalidateQueries({
				queryKey: ['tasks', data.boardId],
			});
		},
	});
};

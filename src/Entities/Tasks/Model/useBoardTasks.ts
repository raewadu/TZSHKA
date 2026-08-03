import { useQuery } from '@tanstack/react-query';
import { getBoardTasks } from '../api/taskApi';
import { Task } from '../../../types/task';

export const useBoardTasks = (boardId: string) => {
	return useQuery<Task[]>({
		queryKey: ['tasks', boardId],

		queryFn: () => getBoardTasks(boardId),

		enabled: !!boardId,
	});
};

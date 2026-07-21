import { useQuery } from '@tanstack/react-query';
import { getBoardTasks } from '../api/taskApi';

export const useBoardTasks = (boardId) => {
	return useQuery({
		queryKey: ['tasks', boardId],

		queryFn: () => getBoardTasks(boardId),

		enabled: !!boardId,
	});
};

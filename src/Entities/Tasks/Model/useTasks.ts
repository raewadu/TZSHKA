import { useQuery } from '@tanstack/react-query';
import { getTasks } from '../api/taskApi';
import { Task } from '../../../types/task';

export const useTasks = () => {
	return useQuery<Task>({
		queryKey: ['tasks'],
		queryFn: getTasks,
	});
};

import { useQuery } from '@tanstack/react-query';
import { getTasks } from '../api/taskApi';

export const useTasks = () => {
	return useQuery({
		queryKey: ['tasks'],
		queryFn: getTasks,
	});
};

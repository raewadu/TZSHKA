import { useQuery } from '@tanstack/react-query';
import { getBoards } from '../api/boardApi';

export const useBoards = (userId) => {
	return useQuery({
		queryKey: ['boards', userId],

		queryFn: () => getBoards(userId),

		enabled: !!userId,
	});
};

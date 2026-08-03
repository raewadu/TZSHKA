import { useQuery } from '@tanstack/react-query';
import { getBoards } from '../api/boardApi';
import { Board } from '../../../types/board';

export const useBoards = (userId: string) => {
	return useQuery<Board[]>({
		queryKey: ['boards', userId],

		queryFn: () => getBoards(userId),

		enabled: !!userId,
	});
};

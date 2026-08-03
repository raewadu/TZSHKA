import { useQuery } from '@tanstack/react-query';
import { getBoard } from '../api/boardApi';
import { Board } from '../../../types/board';

export const useBoard = (id: string) => {
	return useQuery<Board>({
		queryKey: ['board', id],
		queryFn: () => getBoard(id),
		enabled: !!id,
	});
};

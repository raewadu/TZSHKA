import { useQuery } from '@tanstack/react-query';
import { getBoard } from '../api/boardApi';

export const useBoard = (id) => {
	return useQuery({
		queryKey: ['board', id],
		queryFn: () => getBoard(id),
		enabled: !!id,
	});
};

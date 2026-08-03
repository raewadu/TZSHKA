import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createBoard } from '../api/boardApi';
import { Board, CreateBoardDto } from '../../../types/board';

export const useCreateBoard = () => {
	const queryClient = useQueryClient();

	return useMutation<Board, Error, CreateBoardDto>({
		mutationFn: createBoard,

		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['boards'],
			});
		},
	});
};

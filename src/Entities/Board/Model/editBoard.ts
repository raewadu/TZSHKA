import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBoard, editBoard } from '../api/boardApi';
import { Board, EditBoardDto } from '../../../types/board';

export const useEditBoard = () => {
	const queryClient = useQueryClient();

	return useMutation<Board, Error, EditBoardDto>({
		mutationFn: editBoard,

		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['boards'],
			});
		},
	});
};

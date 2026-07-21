import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBoard, editBoard } from '../api/boardApi';

export const useEditBoard = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: editBoard,

		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['boards'],
			});
		},
	});
};

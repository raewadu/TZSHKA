import { api } from '../../../Shared/api/axios';
import { Board, CreateBoardDto, EditBoardDto } from '../../../types/board';

export const getBoards = async (userId: string): Promise<Board[]> => {
	const response = await api.get<Board[]>('boards', {
		params: {
			userId,
		},
	});

	return response.data;
};
export const createBoard = async (data: CreateBoardDto): Promise<Board> => {
	const response = await api.post<Board>('boards', data);

	return response.data;
};
export const getBoard = async (id: string): Promise<Board> => {
	const response = await api.get<Board>(`boards/${id}`);

	return response.data;
};
export const deleteBoard = async (id: string): Promise<void> => {
	const response = await api.delete(`boards/${id}`);

	return response.data;
};
export const editBoard = async ({
	id,
	title,
}: EditBoardDto): Promise<Board> => {
	const response = await api.patch<Board>(`boards/${id}`, {
		title,
	});

	return response.data;
};

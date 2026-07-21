import { api } from '../../../Shared/api/axios';

export const getBoards = async (userId) => {
	const response = await api.get('boards', {
		params: {
			userId,
		},
	});

	return response.data;
};
export const createBoard = async (data) => {
	const response = await api.post('boards', data);

	return response.data;
};
export const getBoard = async (id) => {
	const response = await api.get(`boards/${id}`);

	return response.data;
};
export const deleteBoard = async (id) => {
	const response = await api.delete(`boards/${id}`);

	return response.data;
};

export const editBoard = async ({ id, title }) => {
	const response = await api.patch(`boards/${id}`, {
		title,
	});

	return response.data;
};

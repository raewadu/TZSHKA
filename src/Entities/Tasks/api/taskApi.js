import { api } from '../../../Shared/api/axios';

export const getTasks = async () => {
	const response = await api.get('tasks');

	return response.data;
};
export const getBoardTasks = async (boardId) => {
	const response = await api.get('tasks', {
		params: {
			boardId,
		},
	});

	return response.data;
};
export const createTask = async (task) => {
	const response = await api.post('tasks', task);

	return response.data;
};

export const deleteTask = async (id) => {
	const response = await api.delete(`tasks/${id}`);

	return response.data;
};
export const updateTask = async ({ id, ...data }) => {
	const response = await api.patch(`tasks/${id}`, data);

	return response.data;
};
export const updateTaskStatus = async ({ id, status }) => {
	const response = await api.patch(`tasks/${id}`, {
		status,
	});

	return response.data;
};

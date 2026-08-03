import { api } from '../../../Shared/api/axios';
import {
	CreateTaskDto,
	EditTaskDto,
	EditTaskStatusDto,
	Task,
} from '../../../types/task';

export const getTasks = async () => {
	const response = await api.get('tasks');

	return response.data;
};
export const getBoardTasks = async (boardId: string): Promise<Task[]> => {
	const response = await api.get<Task[]>('tasks', {
		params: {
			boardId,
		},
	});

	return response.data;
};
export const createTask = async (task: CreateTaskDto): Promise<Task> => {
	const response = await api.post<Task>('tasks', task);

	return response.data;
};

export const deleteTask = async (id: string): Promise<void> => {
	const response = await api.delete(`tasks/${id}`);

	return response.data;
};
export const updateTask = async ({ id, ...data }: EditTaskDto) => {
	const response = await api.patch<Task>(`tasks/${id}`, data);

	return response.data;
};
export const updateTaskStatus = async ({ id, status }: EditTaskStatusDto) => {
	const response = await api.patch<Task>(`tasks/${id}`, {
		status,
	});

	return response.data;
};

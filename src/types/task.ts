export type TaskStatus = 'todo' | 'inProgress' | 'done';

export type TaskPriority = 'low' | 'medium' | 'high';
export interface Task {
	id: string;
	title: string;
	description: string;
	author: string;
	tags: string[];
	status: TaskStatus;
	priority: TaskPriority;
	boardId: string;
}
export type CreateTaskDto = Omit<Task, 'id'>;
export type EditTaskDto = {
	id: string;
} & Partial<
	Pick<Task, 'title' | 'description' | 'tags' | 'status' | 'priority'>
>;
export type EditTaskStatusDto = Pick<Task, 'id' | 'status'>;
export interface StatusColumn {
	id: TaskStatus;
	title: string;
}
export interface TaskFiltersDto {
	search: string;
	author: string;
	priority: 'all' | 'high' | 'medium' | 'low';
	tag: string;
}

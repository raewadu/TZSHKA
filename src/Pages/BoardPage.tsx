import { useParams } from 'react-router-dom';
import { useBoard } from '../Entities/Board/Model/useBoard';
import { useBoardTasks } from '../Entities/Tasks/Model/useBoardTasks';
import styles from './Main.module.css';
import { useCreateTask } from '../Entities/Tasks/Model/useCreateTask';
import React, { useState } from 'react';
import Input from '../Shared/ui/input/Input';
import Button from '../Shared/ui/Button/Button';
import { useUpdateTask } from '../Entities/Tasks/Model/useUpdateTask';
import Column from '../Entities/Tasks/ui/Column';
import {
	DndContext,
	DragEndEvent,
	DragOverlay,
	DragStartEvent,
} from '@dnd-kit/core';
import { useUpdateTaskStatus } from '../Entities/Tasks/Model/useUpdateTaskStatus';
import TaskPreview from '../Entities/Tasks/ui/TaskPreview';
import TrashZone from '../Entities/Tasks/ui/TrashZone';
import TaskModalEdit from '../Entities/Tasks/ui/TaskModaEdit';
import TaskModal from '../Entities/Tasks/ui/TaskModal';
import { useDeleteTask } from '../Entities/Tasks/Model/useDeleteTask';
import TaskFilters from '../Entities/Tasks/ui/TaskFilters';
import { useAuthStore } from '../Entities/user/model/authStore';
import type {
	TaskFiltersDto,
	Task,
	EditTaskDto,
	StatusColumn,
	TaskStatus,
} from '../types/task';

const BoardPage = () => {
	const { mutate: updateStatus } = useUpdateTaskStatus();
	const { mutate: createTask } = useCreateTask();

	const [filters, setFilters] = useState<TaskFiltersDto>({
		search: '',
		author: '',
		priority: 'all',
		tag: '',
	});

	const [title, setTitle] = useState('');
	const [activeTask, setActiveTask] = useState<Task | null>(null);
	const [editingTask, setEditingTask] = useState<Task | null>(null);
	const [openTask, setOpenTask] = useState<Task | null>(null);
	const { id } = useParams<{ id: string }>();
	if (!id) {
		return <p>Нет id доски</p>;
	}
	const user = useAuthStore((state) => state.user);

	const { data: board, isLoading, error } = useBoard(id);

	const { data: tasks = [], isLoading: tasksLoading } = useBoardTasks(id);

	const { mutate: updateTask } = useUpdateTask();
	const { mutate: deleteTask } = useDeleteTask();

	const handleTask = (task: Task) => {
		setOpenTask(task);
	};

	const handleEdit = (task: Task) => {
		setEditingTask(task);
	};
	const handleSaveTask = (data: EditTaskDto) => {
		updateTask(data);
	};

	if (isLoading || tasksLoading) {
		return <p>Загрузка...</p>;
	}

	if (error) {
		return <p>Ошибка загрузки</p>;
	}

	if (!board) {
		return <p>Доска не найдена</p>;
	}
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!title.trim()) return;

		createTask({
			title,
			description: '',
			author: user!.name,
			tags: [],
			status: 'todo',
			priority: 'low',
			boardId: id,
		});

		setTitle('');
	};

	const columns: StatusColumn[] = [
		{
			id: 'todo',
			title: 'To Do',
		},
		{
			id: 'inProgress',
			title: 'In Progress',
		},
		{
			id: 'done',
			title: 'Done',
		},
	];

	const handleDragStart = ({ active }: DragStartEvent) => {
		const task = tasks.find((task) => task.id === String(active.id));

		if (!task) return;

		setActiveTask(task);
	};

	const handleDragEnd = ({ active, over }: DragEndEvent) => {
		setActiveTask(null);

		if (!over) return;

		if (over.id === 'trash') {
			deleteTask(String(active.id));
			return;
		}

		updateStatus({
			id: String(active.id),
			status: over.id as TaskStatus,
		});
	};
	const handleDragCancel = () => {
		setActiveTask(null);
	};

	const filteredTasks = tasks.filter((task) => {
		const searchMatch = task.title
			.toLowerCase()
			.includes(filters.search.toLowerCase());

		const authorMatch = task.author
			?.toLowerCase()
			.includes(filters.author.toLowerCase());

		const priorityMatch =
			filters.priority === 'all' || task.priority === filters.priority;

		const tagMatch =
			!filters.tag ||
			task.tags?.some((tag) =>
				tag.toLowerCase().includes(filters.tag.toLowerCase()),
			);

		return searchMatch && authorMatch && priorityMatch && tagMatch;
	});

	return (
		<div className={styles.taskContainer}>
			<h1>{board.title}</h1>
			<form onSubmit={handleSubmit} className={styles.taskForm}>
				<Input
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="Название задачи"
				/>

				<Button type="submit">Создать</Button>
			</form>
			<DndContext
				onDragEnd={handleDragEnd}
				onDragStart={handleDragStart}
				onDragCancel={handleDragCancel}
			>
				<TaskFilters filters={filters} setFilters={setFilters} />
				<div className={styles.columnWrapper}>
					{columns.map((column) => {
						const columnTasks = filteredTasks.filter(
							(task) => task.status === column.id,
						);

						return (
							<Column
								key={column.id}
								column={column}
								tasks={columnTasks}
								onEdit={handleEdit}
								openTask={handleTask}
							/>
						);
					})}
				</div>
				<TrashZone />
				<DragOverlay dropAnimation={null}>
					{activeTask && <TaskPreview task={activeTask} />}
				</DragOverlay>
			</DndContext>
			{editingTask && (
				<TaskModalEdit
					task={editingTask}
					onClose={() => setEditingTask(null)}
					onSave={handleSaveTask}
				/>
			)}
			{openTask && (
				<TaskModal task={openTask} onClose={() => setOpenTask(null)} />
			)}
		</div>
	);
};

export default BoardPage;

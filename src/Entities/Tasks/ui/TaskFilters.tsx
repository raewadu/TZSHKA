import React from 'react';
import Input from '../../../Shared/ui/input/Input';
import type { TaskFiltersDto } from '../../../types/task';
import styles from './Column.module.css';

interface TaskFiltersProps {
	filters: TaskFiltersDto;
	setFilters: React.Dispatch<React.SetStateAction<TaskFiltersDto>>;
}

const TaskFilters = ({ filters, setFilters }: TaskFiltersProps) => {
	const updateFilter = (key: keyof TaskFiltersDto, value: string) => {
		setFilters((prev) => ({
			...prev,
			[key]: value,
		}));
	};

	return (
		<div className={styles.filters}>
			<Input
				placeholder="Поиск задачи..."
				value={filters.search}
				onChange={(e) => updateFilter('search', e.target.value)}
			/>

			<Input
				placeholder="Автор..."
				value={filters.author}
				onChange={(e) => updateFilter('author', e.target.value)}
			/>

			<select
				value={filters.priority}
				onChange={(e) => updateFilter('priority', e.target.value)}
				className={styles.select}
			>
				<option value="all">Все приоритеты</option>

				<option value="high">Высокий</option>

				<option value="medium">Средний</option>

				<option value="low">Низкий</option>
			</select>

			<Input
				placeholder="Тег..."
				value={filters.tag}
				onChange={(e) => updateFilter('tag', e.target.value)}
			/>
		</div>
	);
};

export default TaskFilters;

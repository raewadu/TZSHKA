import { useDroppable } from '@dnd-kit/core';
import TaskCard from './TaskCard';
import styles from './Column.module.css';

const Column = ({ column, tasks, onEdit, openTask }) => {
	const { setNodeRef, isOver } = useDroppable({
		id: column.id,
	});

	return (
		<div
			ref={setNodeRef}
			className={`${styles.column} ${isOver ? styles.over : ''}`}
		>
			<h2>{column.title}</h2>

			{tasks.length > 0 ? (
				tasks.map((task) => (
					<TaskCard
						key={task.id}
						task={task}
						onEdit={onEdit}
						openTask={openTask}
					/>
				))
			) : (
				<p className={styles.empty}>Задач нет</p>
			)}
		</div>
	);
};

export default Column;

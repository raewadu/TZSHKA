import { GripVertical } from 'lucide-react';
import { useDraggable } from '@dnd-kit/core';
import styles from './Column.module.css';
import type { Task } from '../../../types/task';
interface TaskCardProps {
	task: Task;
	onEdit: (task: Task) => void;
	openTask: (task: Task) => void;
}
const TaskCard = ({ task, onEdit, openTask }: TaskCardProps) => {
	const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
		id: task.id,
	});

	return (
		<div
			ref={setNodeRef}
			className={`${styles.task} ${isDragging ? styles.dragging : ''} ${styles[task.priority]}`}
		>
			<GripVertical className={styles.drag} {...listeners} {...attributes} />

			<p onClick={() => openTask(task)} className={styles.openTask}>
				{task.title}
			</p>

			<button onClick={() => onEdit(task)}>Редактировать</button>
		</div>
	);
};

export default TaskCard;

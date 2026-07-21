import { GripVertical } from 'lucide-react';
import { useDraggable } from '@dnd-kit/core';
import styles from './Column.module.css';

const TaskCard = ({ task, onEdit, openTask }) => {
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

import { Trash2 } from 'lucide-react';
import { useDroppable } from '@dnd-kit/core';
import styles from './Column.module.css';

const Trash = () => {
	const { setNodeRef, isOver } = useDroppable({
		id: 'trash',
	});

	return (
		<div
			ref={setNodeRef}
			className={`${styles.trash} ${isOver ? styles.over : ''}`}
		>
			<Trash2 size={32} />
			<p>Удалить задачу</p>
		</div>
	);
};

export default Trash;

import styles from './Column.module.css';
import type { Task } from '../../../types/task';

const TaskPreview = ({ task }: { task: Task }) => {
	return (
		<div className={styles.task}>
			<p>{task.title}</p>
		</div>
	);
};

export default TaskPreview;

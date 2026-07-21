import styles from './Column.module.css';

const TaskPreview = ({ task }) => {
	return (
		<div className={styles.task}>
			<p>{task.title}</p>
		</div>
	);
};

export default TaskPreview;

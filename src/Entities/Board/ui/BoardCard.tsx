import type { Board } from '../../../types/board';
import { useDeleteBoard } from '../Model/deleteBoard';
import { useEditBoard } from '../Model/editBoard';
import styles from './BoardCard.module.css';
import { Link } from 'react-router-dom';
interface BoardCardProps {
	board: Board;
	tasksCount: number;
}
const BoardCard = ({ board, tasksCount }: BoardCardProps) => {
	const deleteMutation = useDeleteBoard();
	const updateMutation = useEditBoard();

	const handleDelete = () => {
		const confirmDelete = confirm('Удалить эту доску?');

		if (confirmDelete) {
			deleteMutation.mutate(board.id);
		}
	};

	const handleRename = () => {
		const title = prompt('Новое название доски', board.title);

		if (title && title !== board.title) {
			updateMutation.mutate({
				id: board.id,
				title,
			});
		}
	};
	return (
		<div className={styles.card}>
			<Link to={`/boards/${board.id}`} className={styles.title}>
				{board.title}
			</Link>
			Кол-во задач: {tasksCount}
			<div className={styles.actions}>
				<button className={styles.edit} onClick={handleRename}>
					Переименовать
				</button>

				<button className={styles.delete} onClick={handleDelete}>
					Удалить
				</button>
			</div>
		</div>
	);
};

export default BoardCard;

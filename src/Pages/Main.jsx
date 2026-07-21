import React from 'react';
import styles from './Main.module.css';
import { useAuthStore } from '../Entities/user/model/authStore';
import { useBoards } from '../Entities/Board/Model/useBoards';
import BoardCard from '../Entities/Board/ui/BoardCard';
import CreateBoard from '../Features/Auth/ui/CreateBoard';
import { useTasks } from '../Entities/Tasks/Model/useTasks';

const Main = () => {
	const user = useAuthStore((state) => state.user);

	const { data: boards = [], isLoading, error } = useBoards(user?.id);
	const { data: tasks = [], isLoading: tasksLoading } = useTasks();
	if (isLoading || tasksLoading) {
		return <p>Загрузка...</p>;
	}
	if (error) {
		return <p>Ошибка загрузки</p>;
	}
	return (
		<div className={styles.taskContainer}>
			<h1>Мои доски</h1>
			<CreateBoard />
			<div className={styles.wrapper}>
				{boards.map((board) => {
					const tasksCount = tasks.filter(
						(task) => task.boardId === board.id,
					).length;

					return (
						<BoardCard key={board.id} board={board} tasksCount={tasksCount} />
					);
				})}
			</div>
		</div>
	);
};

export default Main;

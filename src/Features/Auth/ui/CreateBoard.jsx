import { useState } from 'react';
import { useCreateBoard } from '../../../Entities/Board/Model/useCreateBoard';
import { useAuthStore } from '../../../Entities/user/model/authStore';
import styles from './Auth.module.css';
import Button from '../../../Shared/ui/Button/Button';
import Input from '../../../Shared/ui/input/Input';

const CreateBoard = () => {
	const [title, setTitle] = useState('');

	const user = useAuthStore((state) => state.user);

	const { mutate, isPending } = useCreateBoard();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!title.trim()) return;

		mutate({
			title,
			userId: user.id,
		});

		setTitle('');
	};

	return (
		<form onSubmit={handleSubmit} className={styles.taskForm}>
			<Input
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder="Название доски"
			/>
			<Button disabled={isPending}>Создать</Button>
		</form>
	);
};

export default CreateBoard;

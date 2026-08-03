import React, { useState } from 'react';
import Button from '../../../Shared/ui/Button/Button';
import Input from '../../../Shared/ui/input/Input';
import styles from './Column.module.css';
import { ChevronDown } from 'lucide-react';
import type { EditTaskDto, Task } from '../../../types/task';
import Modal from '../../../Shared/ui/modal/Modal';
interface TaskModalEditProps {
	task: Task;
	onClose: () => void;
	onSave: (task: EditTaskDto) => void;
}

const TaskModalEdit = ({ task, onClose, onSave }: TaskModalEditProps) => {
	const [title, setTitle] = useState(task.title);
	const [description, setDescription] = useState(task.description || '');

	const [priority, setPriority] = useState(task.priority);

	const [tags, setTags] = useState<string[]>(task.tags);
	const [tagInput, setTagInput] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		onSave({
			id: task.id,
			title,
			description,
			priority,
			tags,
		});

		onClose();
	};
	const addTag = () => {
		const tag = tagInput.trim();

		if (!tag) return;

		if (tags.includes(tag)) return;

		setTags([...tags, tag]);
		setTagInput('');
	};

	const removeTag = (tag: string) => {
		setTags(tags.filter((item) => item !== tag));
	};

	return (
		<Modal onClose={onClose}>
			<div className={styles.taskModal}>
				<h2>Редактирование задачи</h2>
			</div>

			<form onSubmit={handleSubmit} className={styles.modalForm}>
				<Input
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="Название"
				/>

				<Input
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder="Описание"
				/>

				<div className={styles.selectWrapper}>
					<select
						className={styles.select}
						value={priority}
						onChange={(e) => setPriority(e.target.value as Task['priority'])}
					>
						<option value="low">Low</option>
						<option value="medium">Medium</option>
						<option value="high">High</option>
					</select>
					<ChevronDown className={styles.icon} />
				</div>
				<div className={styles.tags}>
					<h3 className={styles.textCenter}>Теги</h3>

					<div className={styles.tagsWrapper}>
						{tags.map((tag) => (
							<span key={tag} className={styles.tag}>
								#{tag}
								<button
									type="button"
									onClick={() => removeTag(tag)}
									className={styles.deleteTag}
								>
									×
								</button>
							</span>
						))}
					</div>

					<Input
						value={tagInput}
						onChange={(e) => setTagInput(e.target.value)}
						placeholder="Новый тег"
					/>

					<Button type="button" onClick={addTag}>
						Добавить тег
					</Button>
				</div>
				<Button type="submit">Сохранить</Button>
			</form>
		</Modal>
	);
};

export default TaskModalEdit;

import { useState } from 'react';
import Modal from '../../../Shared/ui/Modal/Modal';
import Button from '../../../Shared/ui/Button/Button';
import Input from '../../../Shared/ui/input/Input';
import styles from './Column.module.css';
import { ChevronDown } from 'lucide-react';

const TaskModal = ({ task, onClose, onSave }) => {
	return (
		<Modal onClose={onClose}>
			<div className={`${styles.taskModal} ${styles[task.priority]}`}>
				<h2>{task.title}</h2>
				<p>{task.description || 'Описания нет'}</p>
				<div className={styles.tags}>
					{task.tags && task.tags.length > 0 ? (
						<div className={styles.tagsWrapper}>
							{task.tags.map((tag) => (
								<span key={tag} className={styles.tag}>
									#{tag}
								</span>
							))}
						</div>
					) : (
						<p>Тегов нет</p>
					)}
				</div>
			</div>
		</Modal>
	);
};

export default TaskModal;

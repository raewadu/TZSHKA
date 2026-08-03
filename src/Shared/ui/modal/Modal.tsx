import React from 'react';
import styles from './Modal.module.css';
interface ModalProps {
	children: React.ReactNode;
	onClose: () => void;
}
const Modal = ({ children, onClose }: ModalProps) => {
	return (
		<div className={styles.overlay} onClick={onClose}>
			<div
				className={styles.modal}
				onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
			>
				<button className={styles.close} onClick={onClose}>
					×
				</button>

				{children}
			</div>
		</div>
	);
};

export default Modal;

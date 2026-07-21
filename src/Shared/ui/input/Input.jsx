import { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef(
	({ placeholder, type = 'text', className = '', ...props }, ref) => {
		return (
			<input
				ref={ref}
				className={`${styles.input} ${className}`}
				placeholder={placeholder}
				type={type}
				{...props}
			/>
		);
	},
);

Input.displayName = 'Input';

export default Input;

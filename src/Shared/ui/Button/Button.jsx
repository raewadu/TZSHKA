import styles from './Button.module.css';

const Button = ({
	children,
	className = '',
	type = 'button',
	onClick,
	disabled,
}) => {
	return (
		<button
			type={type}
			className={`${styles.button} ${className}`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default Button;

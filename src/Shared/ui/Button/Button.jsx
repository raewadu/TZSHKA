import styles from './Button.module.css';

const Button = ({ children, className = '', type = 'button', ...props }) => {
	return (
		<button type={type} className={`${styles.button} ${className}`} {...props}>
			{children}
		</button>
	);
};

export default Button;

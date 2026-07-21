import { z } from 'zod';

export const loginSchema = z.object({
	email: z
		.string()
		.min(1, 'Обязательное поле')
		.email('Введите корректный email'),
	password: z.string().min(1, 'Обязательное поле').min(6, 'Минимум 6 символов'),
});

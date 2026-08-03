import { z } from 'zod';

export const authSchema = z.object({
	name: z.string().min(1, 'Обязательное поле'),
	email: z
		.string()
		.min(1, 'Обязательное поле')
		.email('Введите корректный email'),
	password: z.string().min(1, 'Обязательное поле').min(6, 'Минимум 6 символов'),
});
export type AuthForm = z.infer<typeof authSchema>;

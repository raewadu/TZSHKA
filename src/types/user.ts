export interface User {
	email: string;
	id: string;
	name: string;
	avatar?: string;
}
export type RegDto = Omit<User, 'id'> & {
	password: string;
};
export type LoginDto = Pick<RegDto, 'email' | 'password'>;
export interface AuthError {
	field: string;
	message: string;
}
export type UserEditDto = {
	id: string;
} & Partial<Pick<User, 'name' | 'avatar'>>;

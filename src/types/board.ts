export interface Board {
	id: string;
	title: string;
	userId: string;
}
export type CreateBoardDto = Omit<Board, 'id'>;
export type EditBoardDto = Pick<Board, 'id' | 'title'>;

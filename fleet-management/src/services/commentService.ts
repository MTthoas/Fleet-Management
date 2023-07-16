import api from '../utils/api';
import { CommentDto } from '../dto/commentDto';

export const getComments = async (): Promise<CommentDto[]> => {
    try {
        const response = await api.get('/comments');
        return response.data;
    } catch (err: any) {
        throw new Error(err);
    }
};
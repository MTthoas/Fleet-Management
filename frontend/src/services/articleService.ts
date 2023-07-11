import api from '../utils/api';
import { ArticleDto } from '../dto/articleDto';

export const getArticles = async (): Promise<ArticleDto[]> => {
    try {
        const response = await api.get('/posts');
        return response.data;
    } catch (err: any) {
        throw new Error(err);
    }
};

import api from '../utils/api';
import { ArticleDto } from '../dto/articleDto';
import { CommentDto } from '../dto';

export const getArticles = async (): Promise<ArticleDto[]> => {
    try {
        const response = await api.get('/posts');
        return response.data;
    } catch (err: any) {
        throw new Error(err);
    }
};

export const getArticle = async (id: number): Promise<ArticleDto> => {
    try {
        const response = await api.get(`/posts/${id}`);
        return response.data;
    } catch (err: any) {
        throw new Error(err);
    }
}

export const getArticleComments = async (id: number): Promise<CommentDto[]> => {
    try {
        const response = await api.get(`/posts/${id}/comments`);
        return response.data;
    } catch (err: any) {
        throw new Error(err);
    }
}
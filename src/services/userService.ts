import api from '../utils/api';
import { UserDto } from '../dto/userDto';

export const getUsers = async (): Promise<UserDto[]> => {
    try {
        const response = await api.get('/users');
        return response.data;
    } catch (err: any) {
        throw new Error(err);
    }
};

export const getUser = async (id: number): Promise<UserDto> => {
    try {
        const response = await api.get(`/users/${id}`);
        return response.data;
    } catch (err: any) {
        throw new Error(err);
    }
};

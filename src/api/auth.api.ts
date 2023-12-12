import api from '@api/index';
import { UserInfoType } from '@utils/types/common.type';

export const authApi = {
  login: async (): Promise<UserInfoType> => {
    const { data } = await api.get('/auth');

    return data;
  },
};

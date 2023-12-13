import api from '@api/index';
import { PostInfoType } from '@utils/types/common.type';

export const postApi = {
  getPost: async (): Promise<PostInfoType[]> => {
    const { data } = await api.get('posts');

    return data;
  },
};

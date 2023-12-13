import api from '@api/index';
import { PostInfoType } from '@utils/types/common.type';

export const postApi = {
  getPosts: async (): Promise<PostInfoType[]> => {
    const { data } = await api.get('posts');

    return data;
  },

  getPostById: async (id: number): Promise<PostInfoType> => {
    const { data } = await api.get(`posts/${id}`);

    return data;
  },

  addPost: async (post: PostInfoType): Promise<void> => {
    const { data } = await api.post('posts', {
      title: post.title,
      contents: post.contents,
      userInfo: post.userInfo,
    });

    return data;
  },
};

import api from '@api/index';
import {
  PostInfoType,
  PostReviewType,
  ReviewInfoType,
} from '@utils/types/common.type';

export const postApi = {
  getPosts: async (): Promise<PostInfoType[]> => {
    const { data } = await api.get('posts');

    return data.data;
  },

  getPostById: async (postId: string): Promise<PostInfoType> => {
    const { data } = await api.get(`posts/${postId}`);

    return data.data;
  },

  getPostByCategory: async (category: string): Promise<PostInfoType[]> => {
    const { data } = await api.get(`posts/category?category=${category}`);

    return data.data;
  },

  addPost: async (post: PostInfoType): Promise<void> => {
    const { data } = await api.post(
      'posts',
      { ...post },
      { headers: { USER_ID: 1 } },
    );

    return data;
  },

  addPostReview: async (
    reviewInfo: ReviewInfoType,
    postId: string,
  ): Promise<void> => {
    const { data } = await api.post(`posts/${postId}/reviews`, {
      ...reviewInfo,
    });

    return data;
  },

  getFileReview: async (postId: string): Promise<void> => {
    const { data } = await api.get(`posts/${postId}/reviews`);

    return data;
  },

  getPostReviews: async (postId: string): Promise<PostReviewType> => {
    const { data } = await api.get(`posts/${postId}/reviews`);

    return data.data;
  },
};
